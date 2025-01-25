import eventlet
eventlet.monkey_patch()
from logging import exception
from flask import Flask, request, jsonify
from flask_socketio import SocketIO, emit
from flask_cors import CORS
from supabase import create_client, Client

app = Flask(__name__)
CORS(app, resources={r"/*": {"origin": "http://localhost:5174"}})
socketio = SocketIO(app, cors_allowed_origins="http://localhost:5174")

SUPABASE_URL = 'https://lchjonblfmzdhyhiljtm.supabase.co'
SUPABASE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImxjaGpvbmJsZm16ZGh5aGlsanRtIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Mzc3NDYxMzIsImV4cCI6MjA1MzMyMjEzMn0.C2cTNNL13ZRujzApD2lGubwZGZy2hrZKJOVTgBxp0bI'

supabase: Client = create_client(SUPABASE_URL, SUPABASE_KEY)

def calculate_elo(winner, loser):
    expected_winner = 1 / (1 + 10 ** ((loser - winner) / 400))
    expected_loser = 1 / (1 + 10 ** ((winner - loser) / 400))

    new_winner = winner + 32 * (1 - expected_winner)
    new_loser = loser + 32 * (0 - expected_loser)

    return round(new_winner), round(new_loser)

def calculate_draw(c1, c2):
    expected1 = 1 / (1 + 10 ** ((c2 - c1) / 400))
    expected2 = 1 / (1 + 10 ** ((c1 - c2) / 400))

    new_1 = c1 + 32 * (0.5 - expected1)
    new_2 = c2 + 32 * (0.5 - expected2)

    return round(new_1), round(new_2)

@app.route('/company', methods=["GET"])
def get_leaderboard():
    try:
        print("Fetching leaderboard")
        response = supabase.table('companies').select("*").order("elo", desc=True).execute()
        data = response.data
        return jsonify(data), 200
    except Exception as e:
        print(str(e))
        return jsonify({"error": str(e)}), 500

@app.route('/compare', methods=["GET"])
def get_companies():
    try:
        print("Fetching comparison")
        response = supabase.rpc('get_random_companies').execute()
        data = response.data
        if len(data) < 2:
            return jsonify({"error": "Not enough companies"}), 400
        return jsonify(data), 200
    except Exception as e:
        print(str(e))
        return jsonify({"error": str(e)}), 500

@app.route('/compare', methods=["POST"])
def update_elo():
    try:
        body = request.get_json()
        company1 = body["company1_id"]
        company2 = body["company2_id"]
        result = body["result"]

        with supabase.transaction() as tx:
            response1 = tx.table("companies").select("*").eq("id", company1).single().execute()
            response2 = tx.table("companies").select("*").eq("id", company2).single().execute()
            company1 = response1.data
            company2 = response2.data

            if not company1 or not company2:
                tx.rollback()
                return jsonify({"error": "One or both companies not found"}), 404

            elo1 = body["elo1"]
            elo2 = body["elo2"]

            if result == "company1":
                new_elo1, new_elo2 = calculate_elo(elo1, elo2)
            elif result == "company2":
                new_elo2, new_elo1 = calculate_elo(elo2, elo1)
            elif result == "equal":
                new_elo1, new_elo2 = calculate_draw(elo1, elo2)
            else:
                tx.rollback()
                return jsonify({"error": "Invalid result value"}), 400

            update1 = tx.table("companies").update({"elo": new_elo1}).eq("id", company1).execute()
            update2 = tx.table("companies").update({"elo": new_elo2}).eq("id", company2).execute()

        return jsonify({"status": "Successful"}), 200
    except Exception as e:
        return jsonify({"error": str(e)}), 500

@socketio.on("connect")
def handle_connect():
    print("Client connected:", request.sid)

@socketio.on("disconnect")
def handle_disconnect():
    print("Client disconnected:", request.sid)


if __name__ == '__main__':
    socketio.run(app, host="0.0.0.0", port=5001)
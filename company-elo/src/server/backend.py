import eventlet
eventlet.monkey_patch()
from logging import exception
from flask import Flask, request, jsonify
from flask_socketio import SocketIO, emit
from flask_cors import CORS
from supabase import create_client, Client

app = Flask(__name__)
CORS(app, resources={r"/*": {"origin": "http://localhost:5173"}})
socketio = SocketIO(app, cors_allowed_origins="http://localhost:5173")

SUPABASE_URL = 'https://lchjonblfmzdhyhiljtm.supabase.co'
SUPABASE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImxjaGpvbmJsZm16ZGh5aGlsanRtIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Mzc3NDYxMzIsImV4cCI6MjA1MzMyMjEzMn0.C2cTNNL13ZRujzApD2lGubwZGZy2hrZKJOVTgBxp0bI'

supabase: Client = create_client(SUPABASE_URL, SUPABASE_KEY)

@app.route('/company', methods=["GET"])
def get_leaderboard():
    try:
        print("Fetching")
        response = supabase.table('companies').select("*").order("elo", desc=True).execute()
        data = response.data
        return jsonify(data), 200
    except Exception as e:
        print(str(e))
        return jsonify({"error": str(e)}), 500

@app.route('/compare', methods=["POST"])
def update_elo():
    try:
        body = request.get_json()
        company = body["company"]
        elo = body["elo"]
        response = supabase.table("companies").update({"elo": elo}).eq("name", company).execute()

        updated_board = supabase.table("companies").select("*").order("elo", desc=True).execute()
        socketio.emit("leaderboard_update", updated_board, broadcast=True)
        return jsonify({"status": "success", "leaderboard": updated_board}), 200
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
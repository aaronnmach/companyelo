import React from 'react';
import '../components/SignUpPage.scss';

function SignUpPage() {
    return (
        <div className="form-wrapper">
            <div className="screen-1">
                <h1 className="logo">
                    CareerRank
                </h1>

                <div className="email">
                    <label htmlFor="email">Email Address</label>
                    <div className="sec-2">
                        <ion-icon name="mail-outline"></ion-icon>
                        <input type="email" name="email" placeholder="Username@gmail.com" />
                    </div>
                </div>
                <div className="password">
                    <label htmlFor="password">Password</label>
                    <div className="sec-2">
                        <ion-icon name="lock-closed-outline"></ion-icon>
                        <input type="password" name="password" placeholder="············" />
                    </div>
                </div>
                <button className="login">Login</button>
                <div className="footer">
                    <span>Sign up</span>
                    <span>Forgot Password?</span>
                </div>
            </div>
        </div >
    );
}
export default SignUpPage;
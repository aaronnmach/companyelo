// SignUpPage.jsx
import React from 'react';

function SignUpPage() {
    const handleSubmit = (event) => {
        event.preventDefault();
        // Capture form data and process sign-up logic here
        alert("Account created!");
    };

    return (
        <div style={{ padding: '2rem', maxWidth: '600px', margin: '0 auto' }}>
            <h2>Create Your Account</h2>
            <form onSubmit={handleSubmit}>
                <div style={{ marginBottom: '1rem' }}>
                    <label htmlFor="email" style={{ display: 'block', marginBottom: '0.5rem' }}>
                        Email:
                    </label>
                    <input type="email" id="email" required style={{ width: '100%' }} />
                </div>

                <div style={{ marginBottom: '1rem' }}>
                    <label htmlFor="password" style={{ display: 'block', marginBottom: '0.5rem' }}>
                        Password:
                    </label>
                    <input type="password" id="password" required style={{ width: '100%' }} />
                </div>

                <button type="submit" style={{ padding: '0.75rem 1.25rem' }}>
                    Sign Up
                </button>
            </form>
        </div>
    );
}

export default SignUpPage;

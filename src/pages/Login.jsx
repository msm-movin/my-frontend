import React, { useActionState, useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/Login.css';
import SubmitButton from '..//Component/SubmitButton'
import { useFormMessage } from '../hooks/useFormMessage';

export default function Login() {
    // Input fields ke liye state
    const BASE_URL = import.meta.env.VITE_API_BASE_URL;
    const [formData, setFormData] = useState({
        username: '',
        password: '',
    });

    // Input change handle karne ke liye
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    // Form submit handle karne ke liye
    const handleSubmit = async (PrevState, formData) => {
        await new Promise((resolve) => { setTimeout(resolve, 2000) })
        try {

            const { username, password } = Object.fromEntries(formData)
            const sendToData = new FormData();
            const url = `${BASE_URL}/api/login`
            sendToData.append("username", username)
            sendToData.append("password", password)

            const response = await fetch(url, {
                method: 'POST',
                body: sendToData,
            })
            const responseText = await response.text()
            let resData = {};
            try {
                resData = JSON.parse(responseText);
            } catch (e) {
                resData = { message: responseText }
            }

            // const resData = await response.json();
            if (response.ok) {
                // 1. यह टेक्स्ट बॉक्स (Username, Email, Password) को खाली करेगा
                setFormData({
                    username: '',
                    password: '',
                });

                return { success: true, message: resData.message || "login successfully :-" };
            } else {
                return { success: false, message: resData.message || "Login failed!" };
            }

        } catch (error) {
            console.log("error form ")
        }

    };

    const [data, actionform, pending] = useActionState(handleSubmit, undefined);
    const getmessage = useFormMessage(data)
    return (
        <div className="page-container auth-container">
            <div className="auth-card">
                {getmessage && data && <p style={{ textAlign: "center", color: "green" }}>{data.message}</p>}
                <div className="auth-header">
                    <h2 className="auth-title">Welcome Back</h2>
                    <p className="auth-subtitle">Sign in to your account to continue</p>
                </div>

                <form action={actionform} className="auth-form">
                    <div className="form-group">
                        <label className="form-label" htmlFor="username">Username</label>
                        <input
                            id="username"
                            type="text"
                            name="username"
                            placeholder="Enter your username"
                            value={formData.username}
                            onChange={handleChange}
                            className="form-input"
                            required
                        />
                    </div>


                    <div className="form-group">
                        <label className="form-label" htmlFor="password">Password</label>
                        <input
                            id="password"
                            type="password"
                            name="password"
                            placeholder="••••••••"
                            value={formData.password}
                            onChange={handleChange}
                            className="form-input"
                            required
                        />
                    </div>
                    <SubmitButton pending={pending} button="Login" />
                </form>

                <p className="auth-redirect">
                    Don't have an account?
                    <Link to="/signup">Sign up</Link>
                </p>
            </div>
        </div>
    );
}
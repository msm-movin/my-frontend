import React, { useActionState, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/Login.css';
import SubmitButton from '..//Component/SubmitButton'
import { useFormMessage } from '../hooks/useFormMessage';

export default function Signup() {

    const handleSubmitfun = async (PrevState, formData) => {
        await new Promise((resolve) => setTimeout(resolve, 2000));
        const { username, email, password, confirmPassword } = Object.fromEntries(formData);
        if (password !== confirmPassword) {
            return { success: false, message: "Passwords do not match!" };
        }

        try {

            const dataToSend = new FormData();
            const fileInput = formData.get("file");
            if (fileInput) {
                dataToSend.append("file", fileInput)
            }

            dataToSend.append("username", username);
            dataToSend.append("email", email);
            dataToSend.append("password", password);


            const url = `${BASE_URL}/api/signup`;
            const response = await fetch(url, {
                method: "POST",
                // headers: { "Content-Type": "application/json", },
                // body: JSON.stringify({ username, email, password })
                body: dataToSend,

            })
            const resData = await response.json();
            if (response.ok) {
                // 1. यह टेक्स्ट बॉक्स (Username, Email, Password) को खाली करेगा
                setFormData({
                    username: '',
                    password: '',
                    email: '',
                    confirmPassword: '',
                });

                // 2
                return { success: true, message: resData.message || "Account Successfully create :-" };
            } else {
                return { success: false, message: resData.message || "Signup failed!" };
            }

        } catch (error) {
            console.error("Spring Boot Error:", error);
            return { success: false, message: "Spring Boot server is down. Check port 8080!" };
        }
    };

    const [formData, setFormData] = useState({
        username: '',
        email: '',
        password: '',
        confirmPassword: ''
    });
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };
    const [data, handleSubmit, pending] = useActionState(handleSubmitfun, undefined);
    const getmessage = useFormMessage(data);

    return (
        <div className="page-container auth-container">
            <div className="auth-card">
                {getmessage && data && <p style={{ textAlign: "center", color: "green" }}>{data.message}</p>}
                <div className="auth-header">
                    <h2 className="auth-title">Create Account</h2>
                    <p className="auth-subtitle">Join us to start your journey</p>
                </div>

                <form action={handleSubmit} className="auth-form">
                    <div className="form-group">
                        <label className="form-label" htmlFor="username">Username</label>
                        <input
                            id="username"
                            type="text"
                            name="username"
                            placeholder="Choose a username"
                            value={formData.username}
                            onChange={handleChange}
                            className="form-input"
                            required
                        />
                    </div>

                    <div className="form-group">
                        <label className="form-label" htmlFor="email">Email Address</label>
                        <input
                            id="email"
                            type="email"
                            name="email"
                            placeholder="name@example.com"
                            value={formData.email}
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

                    <div className="form-group">
                        <label className="form-label" htmlFor="confirmPassword">Confirm Password</label>
                        <input
                            id="confirmPassword"
                            type="password"
                            name="confirmPassword"
                            placeholder="••••••••"
                            value={formData.confirmPassword}
                            onChange={handleChange}
                            className="form-input"
                            required
                        />
                    </div>

                    <SubmitButton pending={pending} button="Signup" />
                </form>

                <p className="auth-redirect">
                    Already have an account?
                    <Link to="/login">Sign in</Link>
                </p>

            </div>

        </div>

    );

}

import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Login.css';

export default function About() {
    return (
        <div className="page-container" style={{ display: 'flex', flexDirection: 'column', maxWidth: '800px', margin: '0 auto', justifyContent: 'center' }}>
            <div className="auth-card" style={{ maxWidth: '680px', margin: '0 auto', padding: '40px' }}>
                <div className="auth-header" style={{ textAlign: 'left', alignItems: 'flex-start', gap: '12px' }}>
                    <h2 className="auth-title">About Our Design</h2>
                    <p className="auth-subtitle">Crafted with high-fidelity UI aesthetics and modern web design principles.</p>
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', margin: '12px 0', textAlign: 'left' }}>
                    <div style={{ padding: '16px', borderRadius: '12px', background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.04)' }}>
                        <h4 style={{ color: 'var(--primary-hover)', marginBottom: '4px' }}>✨ Premium Glassmorphism</h4>
                        <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>Using smooth backdrop blurring filters and subtle inset borders for a modern, physical feel.</p>
                    </div>

                    <div style={{ padding: '16px', borderRadius: '12px', background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.04)' }}>
                        <h4 style={{ color: 'var(--secondary-hover)', marginBottom: '4px' }}>⚡ Smooth Micro-interactions</h4>
                        <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>Fitted with custom scale, glow, and slide animations on interactive element states like buttons and input fields.</p>
                    </div>

                    <div style={{ padding: '16px', borderRadius: '12px', background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.04)' }}>
                        <h4 style={{ color: '#10b981', marginBottom: '4px' }}>🎨 Harmonized Accent Colors</h4>
                        <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>Draped in selected HSL color variables including vivid violet, dark navy, and vibrant neon pink.</p>
                    </div>
                </div>

                <div style={{ display: 'flex', gap: '12px', justifyContent: 'flex-start' }}>
                    <Link to="/" className="submit-btn" style={{ textDecoration: 'none', padding: '10px 24px', marginTop: 0 }}>
                        Back to Home
                    </Link>
                </div>
            </div>
        </div>
    );
}
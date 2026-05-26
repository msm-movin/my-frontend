import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Login.css'; // Reuse form card base design for styling consistency

export default function Home() {
    return (
        <div className="page-container" style={{ display: 'flex', flexDirection: 'column', gap: '30px', maxWidth: '800px', margin: '0 auto', textAlign: 'center', justifyContent: 'center' }}>
            <div className="auth-card" style={{ maxWidth: '680px', margin: '0 auto', padding: '50px 40px' }}>
                <div className="auth-header" style={{ gap: '16px' }}>
                    <span style={{ 
                        background: 'rgba(139, 92, 246, 0.1)', 
                        color: 'var(--primary-hover)', 
                        padding: '6px 14px', 
                        borderRadius: '20px', 
                        fontSize: '0.85rem', 
                        fontWeight: '600',
                        width: 'fit-content',
                        margin: '0 auto',
                        border: '1px solid rgba(139, 92, 246, 0.2)'
                    }}>
                        Welcome to the Future
                    </span>
                    <h1 className="auth-title" style={{ fontSize: '2.8rem', lineHeight: '1.2' }}>
                        Experience Visual Perfection
                    </h1>
                    <p className="auth-subtitle" style={{ fontSize: '1.1rem', maxWidth: '500px', margin: '0 auto' }}>
                        This project has been redesigned with absolute visual excellence. Enjoy smooth animations, glowing accents, and gorgeous typography.
                    </p>
                </div>

                <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', marginTop: '12px' }}>
                    <Link to="/login" className="submit-btn" style={{ textDecoration: 'none', padding: '12px 28px', marginTop: 0 }}>
                        Get Started
                    </Link>
                    <Link to="/about" className="submit-btn" style={{ 
                        textDecoration: 'none', 
                        padding: '12px 28px', 
                        marginTop: 0,
                        background: 'rgba(255, 255, 255, 0.05)',
                        border: '1px solid rgba(255, 255, 255, 0.1)',
                        boxShadow: 'none',
                        color: 'var(--text-primary)'
                    }}>
                        Learn More
                    </Link>
                </div>
            </div>
        </div>
    );
}

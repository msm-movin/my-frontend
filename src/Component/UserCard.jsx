import React from 'react';

export default function UserCard({ user, onEdit, onDelete }) {
    // Default avatar if no profile picture is set
    const defaultAvatar = `https://api.dicebear.com/7.x/initials/svg?seed=${encodeURIComponent(user.username || 'User')}`;
    const avatarSrc = user.profile_pic ? `http://localhost:8080/files/${user.profile_pic}` : defaultAvatar;

    return (
        <div style={cardStyles.card}>
            <div style={cardStyles.leftSection}>
                <img
                    src={avatarSrc}
                    alt={user.username}
                    style={cardStyles.avatar}
                    onError={(e) => {
                        e.target.src = defaultAvatar;
                    }}
                />
                <div style={cardStyles.info}>
                    <h3 style={cardStyles.username}>{user.username}</h3>
                    <p style={cardStyles.email}>{user.email}</p>
                </div>
            </div>
            <div style={cardStyles.actions}>
                <button onClick={() => onEdit(user.id)} style={cardStyles.editBtn}>
                    ✏️ Edit
                </button>
                <button onClick={() => onDelete(user.id)} style={cardStyles.deleteBtn}>
                    🗑️ Delete
                </button>
            </div>
        </div>
    );
}

const cardStyles = {
    card: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '16px 20px',
        backgroundColor: '#ffffff',
        borderRadius: '12px',
        boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
        marginBottom: '16px',
        border: '1px solid #f3f4f6',
        transition: 'transform 0.2s ease, box-shadow 0.2s ease',
    },
    leftSection: {
        display: 'flex',
        alignItems: 'center',
        gap: '16px',
    },
    avatar: {
        width: '50px',
        height: '50px',
        borderRadius: '50%',
        objectFit: 'cover',
        border: '2px solid #e5e7eb',
    },
    info: {
        display: 'flex',
        flexDirection: 'column',
        gap: '4px',
    },
    username: {
        margin: 0,
        fontSize: '16px',
        fontWeight: '600',
        color: '#111827',
    },
    email: {
        margin: 0,
        fontSize: '14px',
        color: '#6b7280',
    },
    actions: {
        display: 'flex',
        gap: '10px',
    },
    editBtn: {
        padding: '8px 16px',
        backgroundColor: '#f3f4f6',
        color: '#374151',
        border: 'none',
        borderRadius: '6px',
        cursor: 'pointer',
        fontSize: '14px',
        fontWeight: '500',
        transition: 'background-color 0.2s ease',
    },
    deleteBtn: {
        padding: '8px 16px',
        backgroundColor: '#fee2e2',
        color: '#dc2626',
        border: 'none',
        borderRadius: '6px',
        cursor: 'pointer',
        fontSize: '14px',
        fontWeight: '500',
        transition: 'background-color 0.2s ease',
    }
};

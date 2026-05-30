import React, { useState, useEffect, useCallback, useRef } from 'react';
import UserCard from '../Component/UserCard'; // 🔴 आपके कंपोनेंट फोल्डर से UserCard को इम्पोर्ट किया

export default function UserView() {
    const [users, setUsers] = useState([]);
    const [page, setPage] = useState(0);
    const [loading, setLoading] = useState(false);
    const [hasMore, setHasMore] = useState(true);
    const [error, setError] = useState(null);

    // लूप को गेट पर ही रोकने के लिए सुरक्षा गार्ड 🛡️
    const isFetching = useRef(false);

    // बैकएंड से डेटा फेच करने का फंक्शन
    const fetchUsers = useCallback(async (pageNumber) => {
        if (isFetching.current) return;

        isFetching.current = true;
        setLoading(true);
        try {
            const response = await fetch(`http://localhost:8080/api/users?page=${pageNumber}&size=5`);

            // अगर बैकएंड में कोई डेटा नहीं बचा (Status 204 No Content)
            if (response.status === 204) {
                setHasMore(false);
                return;
            }

            if (!response.ok) throw new Error("डेटा लोड करने में समस्या आई!");

            const newData = await response.json();

            // अगर डेटा 5 से कम आया है, मतलब इसके बाद डेटाबेस में और यूजर्स नहीं हैं
            if (newData.length < 5) {
                setHasMore(false);
            }

            // पुराने यूजर्स के नीचे नया डेटा जोड़ना (Spread Operator)
            setUsers((prevUsers) => [...prevUsers, ...newData]);

        } catch (err) {
            setError(err.message);
        } finally {
            setLoading(false);
            isFetching.current = false;
        }
    }, []);

    // पहली बार पेज लोड होने पर सिर्फ पेज 0 का डेटा मंगाना
    useEffect(() => {
        fetchUsers(0);
    }, [fetchUsers]);

    // View More बटन क्लिक करने पर अगला पेज मंगाना
    const handleViewMore = () => {
        if (loading || !hasMore) return;

        const nextPage = page + 1;
        setPage(nextPage);
        fetchUsers(nextPage); // अगले पेज का डेटा लाओ
    };

    // एडिट और डिलीट के फंक्शन्स (यहाँ आप बाद में अपना लॉजिक लिख सकते हैं)
    const handleEdit = (id) => {
        alert(`Edit User ID: ${id}`);
    };

    const handleDelete = (id) => {
        alert(`Delete User ID: ${id}`);
    };

    return (
        <div style={pageStyles.container}>
            <h2 style={pageStyles.title}>All Registered Users</h2>

            {users.length === 0 && !loading ? (
                <p style={pageStyles.center}>कोई यूजर नहीं मिला।</p>
            ) : (
                <>
                    {/* लूप चलाकर आपके नए UserCard कंपोनेंट को रेंडर करना */}
                    {users.map((user, index) => (
                        <UserCard
                            key={`${user.id}-${index}`}
                            user={user}
                            onEdit={handleEdit}
                            onDelete={handleDelete}
                        />
                    ))}

                    {loading && <div style={pageStyles.center}>लोड हो रहा है...</div>}

                    {/* View More बटन */}
                    {hasMore && !loading && (
                        <div style={pageStyles.btnContainer}>
                            <button onClick={handleViewMore} style={pageStyles.viewMoreBtn}>
                                View More 👇
                            </button>
                        </div>
                    )}
                </>
            )}
            {error && <div style={{ ...pageStyles.center, color: '#dc2626' }}>त्रुटि: {error}</div>}
        </div>
    );
}

// पेज के लिए सुंदर और क्लीन स्टाइल्स
const pageStyles = {
    container: {
        maxWidth: '650px',
        margin: '40px auto',
        padding: '0 20px',
        fontFamily: 'system-ui, -apple-system, sans-serif'
    },
    title: {
        textAlign: 'center',
        color: '#111827',
        marginBottom: '24px',
        fontSize: '24px',
        fontWeight: '700'
    },
    center: {
        textAlign: 'center',
        padding: '20px',
        fontSize: '16px',
        color: '#6b7280'
    },
    btnContainer: {
        display: 'flex',
        justifyContent: 'center',
        marginTop: '24px'
    },
    viewMoreBtn: {
        padding: '10px 24px',
        backgroundColor: '#2563eb',
        color: '#ffffff',
        border: 'none',
        borderRadius: '8px',
        fontSize: '15px',
        fontWeight: '600',
        cursor: 'pointer',
        boxShadow: '0 4px 6px -1px rgba(37, 99, 235, 0.2)',
        transition: 'background-color 0.2s ease',
    }
};
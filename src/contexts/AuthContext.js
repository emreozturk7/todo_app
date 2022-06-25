import React, { useContext, useState, createContext, useEffect } from 'react';

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
    const [isAuthenticated, setIsAuthenticated] = useState(localStorage.getItem("isAuthenticated"));

    const [email] = useState('');
    const [password] = useState('');

    useEffect(() => {
        if (localStorage.getItem("isAuthenticated") === null) {
            localStorage.setItem("isAuthenticated", false);
        }
    }, [isAuthenticated]);

    const submitLogin = (email, password) => {
        if ("emreozturk@hotmail.com" === email && "emre1234" === password) {
            setTimeout(() => {
                setIsAuthenticated(true);
                localStorage.setItem("isAuthenticated", true);
                localStorage.setItem('user', 'emreozturk@hotmail.com');
                window.location.href = '/';
            }, 100);
        }
        if ("tayfunerbilen@hotmail.com" === email && "tayfun1234" === password) {
            setTimeout(() => {
                setIsAuthenticated(true);
                localStorage.setItem("isAuthenticated", true);
                localStorage.setItem('user', 'tayfunerbilen@hotmail.com');
                window.location.href = '/';
            }, 100);
        }
    };

    const signOut = () => {
        setIsAuthenticated(false);
        localStorage.setItem("isAuthenticated", false);
    }

    return (
        <AuthContext.Provider
            value={{
                submitLogin,
                email,
                password,
                signOut,
                isAuthenticated,
            }}
        >
            {children}
        </AuthContext.Provider>
    );
};

function useAuth() {
    return useContext(AuthContext);
}

export { AuthProvider, useAuth, AuthContext };
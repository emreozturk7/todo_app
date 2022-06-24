import React, { useContext, useState, createContext } from 'react';

const AuthContext = createContext();

const AuthProvider = ({ children }) => {

    const [isAuthenticated] = useState(localStorage.getItem('isAuthenticated'));
    const [email] = useState('');
    const [password] = useState('');

    const submitLogin = (email, password) => {
        if ("emreozturk@hotmail.com" === email && "emre1234" === password) {
            setTimeout(() => {
                localStorage.setItem('isAuthenticated', true);
                window.location.href = '/';
            }, 100);
        }
        if ("emre@hotmail.com" === email && "emre1234" === password) {
            setTimeout(() => {
                localStorage.setItem('isAuthenticated', true);
                window.location.href = '/';
            }, 100);
        }
    };

    return (
        <AuthContext.Provider
            value={{
                submitLogin,
                email,
                password,
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
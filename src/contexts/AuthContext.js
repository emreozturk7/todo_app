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
                localStorage.setItem('name', 'emreozturk@hotmail.com');
                window.location.href = '/';
            }, 100);
        }
        if ("tayfunerbilen@hotmail.com" === email && "tayfun1234" === password) {
            setTimeout(() => {
                localStorage.setItem('isAuthenticated', true);
                localStorage.setItem('name', 'tayfunerbilen@hotmail.com');
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
import React, { useContext, useState, createContext } from 'react';

const AuthContext = createContext();

const AuthProvider = ({ children }) => {

    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [email] = useState('');
    const [password] = useState('');

    const submitLogin = (email, password) => {
        if ("deneme@deneme.com" === email && "deneme1234" === password) {
            setIsAuthenticated(!isAuthenticated);
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
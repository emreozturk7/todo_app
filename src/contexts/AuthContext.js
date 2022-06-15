import React, { useContext, useState, createContext } from 'react';
import { login } from '../services/AuthService';

const AuthContext = createContext();

const AuthProvider = ({ children }) => {

    const [email] = useState('');
    const [password] = useState('');

    const submitLogin = (email, password) => {
        const data = {
            email: email,
            password: password,
        };
        
        login(data.email, data.password);
    };


    return (
        <AuthContext.Provider
            value={{
                submitLogin,
                email,
                password,
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
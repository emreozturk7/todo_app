import React, { useContext, createContext } from 'react';

const TodoContext = createContext();

const AuthProvider = ({ children }) => {

    return (
        <TodoContext.Provider
            value={{}}
        >
            {children}
        </TodoContext.Provider>
    );
};

function useTodo() {
    return useContext(TodoContext);
}

export { AuthProvider, useTodo, TodoContext };
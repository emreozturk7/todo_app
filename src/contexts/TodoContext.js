import React, { useContext, createContext, useCallback, useReducer } from 'react';
import todoReducer from '../reducer/reducers';

const TodoContext = createContext();

const TodoProvider = ({ children }) => {

    const [state, dispatch] = useReducer(todoReducer, {
        todos: [],
        todo: '',
        completed: false,
        search: '',
        onlyMe: false,
        filterCompleted: false
    })

    const submitHandle = useCallback(e => {
        e.preventDefault()
        dispatch({
            type: 'ADD_TODO',
            todo: state.todo,
        })
    }, [state.todo]);

    const updateTodo = useCallback(e => {
        dispatch({
            type: 'UPDATE_TODO',
            value: e.target.value
        })
    }, [])

    return (
        <TodoContext.Provider
            value={{
                submitHandle,
                state,
                updateTodo,
            }}
        >
            {children}
        </TodoContext.Provider>
    );
};

function useTodo() {
    return useContext(TodoContext);
}

export { TodoProvider, useTodo, TodoContext };
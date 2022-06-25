import React, { useContext, createContext, useCallback, useReducer } from 'react';
import todoReducer from '../reducer/reducers';

const TodoContext = createContext();

const TodoProvider = ({ children }) => {

    const [state, dispatch] = useReducer(todoReducer, {
        todos: [],
        todo: '',
        user: '',
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
    }, []);

    const deleteTodo = useCallback(index => {
        dispatch({
            type: 'DELETE_TODO',
            index
        })
    }, []);

    const updateCompleted = useCallback(e => {
        dispatch({
            type: 'UPDATE_COMPLETED',
            value: e.target.checked
        })
    }, []);

    const toggleTodo = useCallback(index => {
        dispatch({
            type: 'TOGGLE_TODO',
            index
        })
    }, []);

    return (
        <TodoContext.Provider
            value={{
                submitHandle,
                state,
                updateTodo,
                deleteTodo,
                updateCompleted,
                toggleTodo,
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
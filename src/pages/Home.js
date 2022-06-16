import React from 'react';
import AddTodo from '../components/AddTodo';
import Todos from '../components/Todos';
import { useTodo } from '../contexts/TodoContext';
function Home() {

    const { todos } = useTodo();

    return (
        <div>
            <AddTodo todo={todos} />

            <Todos />
        </div>
    );
}

export default Home;
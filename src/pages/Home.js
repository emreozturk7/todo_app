import React from 'react';
import AddTodo from '../components/AddTodo';
import Todos from '../components/Todos';
import { useTodo } from '../contexts/TodoContext';
import { useAuth } from '../contexts/AuthContext';
function Home() {

    const { todos } = useTodo();
    const { isAuthenticated } = useAuth();

    return (
        isAuthenticated ?
            <div>
                <AddTodo todo={todos} />
                <Todos />
            </div>
            :
            <div>
                <div className="p-5">
                    <div className="bg-blue-100 p-5 rounded text-sm text-blue-800">
                        Lütfen giriş yapınız!
                    </div>
                </div>
            </div>
    );
}

export default Home;
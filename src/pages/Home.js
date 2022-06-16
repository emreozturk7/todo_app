import React from 'react';
import AddTodo from '../components/AddTodo';
import ListItem from '../components/Card';

function Home() {

    return (
        <div>
            <AddTodo></AddTodo>
            <ListItem></ListItem>
        </div>
    );
}

export default Home;
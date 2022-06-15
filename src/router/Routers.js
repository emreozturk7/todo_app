import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from '../components/Home';
import Login from '../components/Login';
import MyTodos from '../components/MyTodos';


function Routers() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="login" element={<Login />} />
            <Route path="mytodos" element={<MyTodos />} />
        </Routes>
    );
}

export default Routers;
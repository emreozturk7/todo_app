import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import Login from '../pages/Login';
import MyTodos from '../pages/MyTodos';
import MyAccount from '../pages/MyAccount';


function Routers() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="login" element={<Login />} />
            <Route path="mytodos" element={<MyTodos />} />
            <Route path="myaccount" element={<MyAccount />} />
        </Routes>
    );
}

export default Routers;
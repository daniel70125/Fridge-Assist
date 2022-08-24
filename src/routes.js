import React from 'react';
import {Routes, Route} from 'react-router-dom';
import Home from './components/Home/Home';
import About from './components/About/About';
import Login from './components/Login/Login';
import SignUp from './components/SignUp/SignUp';

export default (
    <Routes>
        <Route path="/" element={ <Home/> } />
            <Route path="about" element={ <About/> } />
            <Route path="login" element={ <Login/> } />
            <Route path="sign-up" element={ <SignUp/> } />
      </Routes>
)
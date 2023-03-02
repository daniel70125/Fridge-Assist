import React from 'react';
import {Routes, Route} from 'react-router-dom';
import Home from './components/Home/Home';
import About from './components/About/About';
import Login from './components/Login/Login';
import SignUp from './components/SignUp/SignUp';
import GroceryList from './components/GroceryList/GroceryList';
import AllRecipes from './components/AllRecipes/AllRecipes';

export default (
    <Routes>
        <Route path="/" element={ <Home/> } />
            <Route path="about" element={ <About/> } />
            <Route path="login" element={ <Login/> } />
            <Route path="sign_up" element={ <SignUp/> } />
            <Route path="grocery-list" element={ <GroceryList/> } />
            <Route path="recipes" element={ <AllRecipes/> } />
      </Routes>
)
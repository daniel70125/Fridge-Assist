import React from 'react';
import {Routes, Route} from 'react-router-dom';
import Home from './components/Home/Home';
import About from './components/About/About';
import Login from './components/Login/Login';
import SignUp from './components/SignUp/SignUp';
import GroceryList from './components/GroceryList/GroceryList';
import DiscoverMeals from './components/DiscoverMeals/DiscoverMeals';
import FoodMaker from './components/FoodMaker/FoodMaker';
import AddRecipe from './components/AddRecipe/AddRecipe';

export default (
    <Routes>
        <Route path="/" element={ <Home/> } />
            <Route path="about" element={ <About/> } />
            <Route path="login" element={ <Login/> } />
            <Route path="sign-up" element={ <SignUp/> } />
            <Route path="grocery-list" element={ <GroceryList/> } />
            <Route path="meals" element={ <DiscoverMeals/> } />
            <Route path="food-maker" element={ <FoodMaker/> } />
            <Route path="add-recipe" element={ <AddRecipe/> } />
      </Routes>
)
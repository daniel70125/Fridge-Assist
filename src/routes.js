import React from 'react';
import {Routes, Route} from 'react-router-dom';
import Home from './components/Home/Home';
import Contact from './components/Contact/Contact';
import Login from './components/Login/Login';
import SignUp from './components/SignUp/SignUp';
import GroceryList from './components/GroceryList/GroceryList';
// import DiscoverMeals from './components/DiscoverMeals/DiscoverMeals';
// import FoodMaker from './components/FoodMaker/FoodMaker';
import AddRecipe from './components/AddRecipe/AddRecipe';
import NotFound from './components/404/404';

export default (
    <Routes>
        <Route path="/" element={ <Home/> } />
            {/* <Route path="meals" element={ <DiscoverMeals/> } /> */}
            {/* <Route path="chefs" element={ <DiscoverMeals/> } />
            <Route path="reviews" element={ <DiscoverMeals/> } /> */}
            {/* <Route path="food-maker" element={ <FoodMaker/> } /> */}
            <Route path="contact" element={ <Contact/> } />
            <Route path="add-recipe" element={ <AddRecipe/> } />
            <Route path="login" element={ <Login/> } />
            <Route path="sign-up" element={ <SignUp/> } />
            <Route path="grocery-list" element={ <GroceryList/> } />
            <Route path="*" element={ <NotFound/> } />
      </Routes>
)
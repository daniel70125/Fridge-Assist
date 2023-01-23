import React, { Component } from 'react';
import './ChefCookingOverlay.scss';
import cookingGif from '../../Pictures/chef-cooking.gif';

function ChefCookingOverlay() {
    // console.log(window.location.href);
    console.log(window.sessionStorage.getItem('firstTimeUser'));
    return ( 
        window.sessionStorage.getItem('firstTimeUser') ? 
        <>
        <img alt='cookingGif' src={cookingGif} />
        <p id='chefcookingoverlay-p'>True!</p>
        </>
        :
        <>
        <img alt='cookingGif' src={cookingGif} />
        <p id='chefcookingoverlay-p' >Welcome to Food Assist!</p>
        </>
     );
}

export default ChefCookingOverlay;
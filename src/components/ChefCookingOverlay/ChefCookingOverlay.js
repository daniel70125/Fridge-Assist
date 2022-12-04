import React, { Component } from 'react';
import './ChefCookingOverlay.scss';
import cookingGif from '../../Pictures/chef-cooking.gif';

function ChefCookingOverlay() {
    // console.log(window.location.href);
    return ( 
        
        <>
        <img alt='cookingGif' src={cookingGif} />
        <p></p>
        </>
     );
}

export default ChefCookingOverlay;
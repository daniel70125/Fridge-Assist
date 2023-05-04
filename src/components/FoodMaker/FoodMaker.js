import React, { Component } from 'react';
import './FoodMaker.scss';
import scrollUpBtn from '../../Pictures/scroll-up-button.png';

class FoodMaker extends Component {
    state = { 

    }
    clearIcon(e){
        const introTextCont = document.querySelector("#food-maker-intro-cont");
        introTextCont.style.display = "none";
    }
    render() { 
        return ( 
            <div id='food-maker-cont'>
                <div id='food-maker-intro-cont'>
                    <svg id='food-maker-clear-icon' onClick={(e) => this.clearIcon(e)} xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="#5F6368"><path d="M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/></svg>
                    <p id='food-maker-intro-text'>Hello and welcome to the <span style={{"color":"#da6509"}}>Food Maker</span>! Here you can add ingredients or items to your 'my refrigerator' tab and choose a list of recipes that best suits your needs.</p>
                </div>

                <div id='food-maker-title-cont'>
                    <h1>Food Maker</h1>
                </div>
            </div>
         );
    }
}
 
export default FoodMaker;
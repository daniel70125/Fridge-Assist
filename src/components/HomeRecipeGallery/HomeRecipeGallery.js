import React, { Component } from 'react';
import './HomeRecipeGallery.scss';

class HomeRecipeGallery extends Component {
    constructor(props) {
        super(props);
    }
    state = { 

     }
    render() {
        const recipeObject = [
            {
                "title":"creme la cre",
                "url":"https://images.unsplash.com/photo-1602253057119-44d745d9b860?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=726&q=80",
                "credit":"https://unsplash.com/@louishansel",
                "category":['quick food']
            },
            {
                "title":"Fries w/ mashed potatoes",
                "url":"https://images.unsplash.com/photo-1544856890-7fdbecf97726?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=532&q=80",
                "credit":"https://unsplash.com/@louishansel",
                "category":['quick food']
            },
            {
                "title":"Fries w/ mashed potatoes",
                "url":"https://images.unsplash.com/photo-1571805341302-f857308690e3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=464&q=80",
                "credit":"https://unsplash.com/@louishansel",
                "category":['quick food']
            },
        ]
        const recipeGallery = recipeObject.map((elm, index) => {
            return (
                <div>
                    <img src={elm.url} alt={elm.title} />
                </div>

            )
        })
        return ( 
            <div id='home-recipe-gallery-cont'>
                {recipeGallery}
            </div>
         );
    }
}
 
export default HomeRecipeGallery;
import React, { Component } from 'react';
import './HomeRecipeGallery.scss';
import Fade from 'react-reveal/Fade';

class HomeRecipeGallery extends Component {
    
    state = { 

    }
    componentDidMount(){
        let arrOfGalleryOverlays = document.querySelectorAll('.home-recipe-gallery-div');
        arrOfGalleryOverlays.forEach((elm, index) => {
            elm.addEventListener('mouseover', () => {
                document.querySelectorAll('.home-recipe-gallery-overlay')[index].style.height = '100%';
            })
            elm.addEventListener('mouseout', () => {
                document.querySelectorAll('.home-recipe-gallery-overlay')[index].style.height = '0';
            })
        });
    }
    render() {
        const recipeObject = [
            {
                "title":"creme la cre",
                "url":"https://images.unsplash.com/photo-1602253057119-44d745d9b860?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=726&q=80",
                "credit":"https://unsplash.com/@louishansel",
                "category":['quick food', 'starters', 'main dishe', 'drink', 'special dessert']
            },
            {
                "title":"creme la cre",
                "url":"https://images.unsplash.com/photo-1602253057119-44d745d9b860?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=726&q=80",
                "credit":"https://unsplash.com/@louishansel",
                "category":['quick food']
            },
            {
                "title":"creme la cre",
                "url":"https://images.unsplash.com/photo-1602253057119-44d745d9b860?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=726&q=80",
                "credit":"https://unsplash.com/@louishansel",
                "category":['quick food']
            },
            {
                "title":"creme la cre",
                "url":"https://images.unsplash.com/photo-1602253057119-44d745d9b860?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=726&q=80",
                "credit":"https://unsplash.com/@louishansel",
                "category":['quick food']
            },
            {
                "title":"creme la cre",
                "url":"https://images.unsplash.com/photo-1602253057119-44d745d9b860?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=726&q=80",
                "credit":"https://unsplash.com/@louishansel",
                "category":['quick food', 'starters', 'main dishe', 'drink', 'special dessert']
            },
            {
                "title":"creme la cre",
                "url":"https://images.unsplash.com/photo-1602253057119-44d745d9b860?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=726&q=80",
                "credit":"https://unsplash.com/@louishansel",
                "category":['quick food']
            },
            {
                "title":"creme la cre",
                "url":"https://images.unsplash.com/photo-1602253057119-44d745d9b860?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=726&q=80",
                "credit":"https://unsplash.com/@louishansel",
                "category":['quick food']
            },
            {
                "title":"creme la cre",
                "url":"https://images.unsplash.com/photo-1602253057119-44d745d9b860?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=726&q=80",
                "credit":"https://unsplash.com/@louishansel",
                "category":['quick food']
            },
            {
                "title":"creme la cre",
                "url":"https://images.unsplash.com/photo-1602253057119-44d745d9b860?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=726&q=80",
                "credit":"https://unsplash.com/@louishansel",
                "category":['quick food']
            },
            {
                "title":"creme la cre",
                "url":"https://images.unsplash.com/photo-1602253057119-44d745d9b860?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=726&q=80",
                "credit":"https://unsplash.com/@louishansel",
                "category":['quick food']
            },
            {
                "title":"creme la cre",
                "url":"https://images.unsplash.com/photo-1602253057119-44d745d9b860?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=726&q=80",
                "credit":"https://unsplash.com/@louishansel",
                "category":['quick food']
            },
            {
                "title":"creme la cre",
                "url":"https://images.unsplash.com/photo-1602253057119-44d745d9b860?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=726&q=80",
                "credit":"https://unsplash.com/@louishansel",
                "category":['quick food']
            },
            // {
            //     "title":"Fries w/ mashed potatoes",
            //     "url":"https://images.unsplash.com/photo-1544856890-7fdbecf97726?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=532&q=80",
            //     "credit":"https://unsplash.com/@louishansel",
            //     "category":['quick food']
            // }
        ]
        const recipeGallery = recipeObject.map((elm, index) => {
            return (
                <Fade key={index} bottom>
                <div className='home-recipe-gallery-div'>
                    <img src={elm.url} alt={elm.title} />
                    <div className='home-recipe-gallery-overlay'>
                        <h1>Aue De La Che</h1>
                        <p>User: <span>chef_dynamite</span></p>
                    </div>
                </div>
                </Fade>
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
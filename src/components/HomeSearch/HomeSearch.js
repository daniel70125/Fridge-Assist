import React, { Component } from 'react';
import './HomeSearch.scss';
// Imports of images
import burgerImg from '../../Pictures/home-search/homesearch-burger.png';
import chineseImg from '../../Pictures/home-search/homesearch-chinese-food.png';
import pizzaSliceImg from '../../Pictures/home-search/homesearch-pizza-slice.png';
import chickenLegImg from '../../Pictures/home-search/homesearch-chicken-leg.png';
import poachedEggImg from '../../Pictures/home-search/homesearch-poached-egg.png';
import cakeImg from '../../Pictures/home-search/homesearch-cake.png';
import hotDogImg from '../../Pictures/home-search/homesearch-hot-dog.png';



class HomeSearch extends Component {
    state = { 
        img1Visible: true
    }
    componentDidMount(){
        // this.setImage()
    }
    // setImage(){
    //     // Grab those image elements
    //     const img1 = document.querySelector("#home-search-img1");
    //     const img2 = document.querySelector("#home-search-img2");

    //     // Set arrays of image source links
    //     const images1 = [burgerImg, chineseImg, pizzaSliceImg, chickenLegImg, poachedEggImg, cakeImg, hotDogImg];
    //     const images2 = [burgerImg, chineseImg, pizzaSliceImg, chickenLegImg, poachedEggImg, cakeImg, hotDogImg];

    //     // Random numbers to grab different image from array
    //     let randomNumber1 = Math.floor(Math.random() * (images1.length));
    //     let randomNumber2 = Math.floor(Math.random() * (images2.length));
    //     // Set those image sources
    //     img1.src = images1[randomNumber1];
    //     img2.src = images1[randomNumber2];

    //     // Animate images
        

    // }
    render() { 
        
        return ( 
            <>
            {/* <img id='home-search-img1' src={burgerImg} alt='burger'/> */}
            <div>
                <h1 id="homesearch-h1">Search through our recipes !</h1>
            </div>
            <div>
            <form id='home-search-form' role="search">
                <label>Search for stuff</label>
                <input id="search" type="search" placeholder="Chinese, Snacks, Burgers..." required />
                <button type="submit">Go</button>    
            </form>
            </div>
            <p id='homesearch-p'>Search through 100's of recipes that we have. I'm sure there's something for everyone.</p>
            {/* <img alt='burger' id='home-search-img2' src={burgerImg} /> */}
            </>
         );
    }
}
 
export default HomeSearch;
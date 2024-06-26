import React, { Component } from 'react';
import './HomeSearch.scss';
// Imports of images



class HomeSearch extends Component {
    state = { 
        img1Visible: true
    }
    componentDidMount(){
        
    }
    render() { 
        
        return ( 
            <>
            {/* <img id='home-search-img1' src={burgerImg} alt='burger'/> */}
            <div>
                <h1 className='main-color' id="homesearch-h1">Search through our recipes !</h1>
            </div>
            <div>
            <form id='home-search-form' role="search">
                <label>Search for stuff</label>
                <input id="search" type="search" placeholder="Chinese, Snacks, Burgers..." required />
                <button type="submit">Search</button>    
            </form>
            </div>
            <p id='homesearch-p'>Search through 100's of recipes that we have. I'm sure there's something for everyone.</p>
            {/* <img alt='burger' id='home-search-img2' src={burgerImg} /> */}
            </>
         );
    }
}
 
export default HomeSearch;
import React, { Component } from 'react';
import './HomeSearch.scss';

import burgerImg from '../../Pictures/homesearch-burger.png'


class HomeSearch extends Component {
    constructor(props) {
        super(props);
    }
    state = {  }
    render() { 
        return ( 
            <>
            <img src={burgerImg} alt='burger'/>
            <div>
                <h1 id="homesearch-h1">Search through our recipes !</h1>
            </div>
            <div>
            <form id='home-search-form' onsubmit="event.preventDefault();" role="search">
                <label for="search">Search for stuff</label>
                <input id="search" type="search" placeholder="Chinese, Snacks, Burgers..." autofocus required />
                <button type="submit">Go</button>    
            </form>
            </div>
            </>
         );
    }
}
 
export default HomeSearch;
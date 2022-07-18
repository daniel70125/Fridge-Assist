import React, { Component } from 'react';
import './Home.scss';
import {Link} from 'react-router-dom';
import mainDish from '../../Pictures/main-dish.png';

class Home extends Component {
    state = {  }
    render() { 
        return ( 
            <div>
                <div id='main-dish-container'>
                    <img alt='main-dish' src={mainDish} />
                    <p>Dish <span>of the</span>  Week</p>
                </div>
                <div>hello</div>
            </div>
         );
    }
}
 
export default Home;
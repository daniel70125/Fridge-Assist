import React, { Component } from 'react';
import './Home.scss';
import {Link} from 'react-router-dom';
import mainDish from '../../Pictures/main-dish.png';

class Home extends Component {
    state = {  }
    render() { 
        return ( 
            <div id='home-wrapper'>
                <div id='main-dish-container'>
                    <img alt='main-dish' src={mainDish} />
                    <p className='main-dish-main-p-tag'>Dish <span>of the</span>  Week</p>
                    <p >Orange Chicken w/ Ricee</p>
                </div>
                <div id='lg-main-dish-container'>
                    
                </div>
                <div>hello</div>
            </div>
         );
    }
}
 
export default Home;
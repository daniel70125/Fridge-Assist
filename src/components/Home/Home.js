import React, { Component } from 'react';
import './Home.scss';
import {Link} from 'react-router-dom';
import mainDish from '../../Pictures/main-dish.png';
import cookingIllustration from '../../Pictures/who-are-we.jpg';
import Button from '@mui/material/Button';

class Home extends Component {
    state = { 

     }
    render() { 
        return ( 
            <div id='home-wrapper'>
                <div id='main-dish-container'>
                    <img alt='main-dish' src={mainDish} />
                    <p className='main-dish-main-p-tag'>Dish <span>of the</span>  Week</p>
                    <p >Orange Chicken w/ Ricee</p>
                </div>
                <div id='lg-main-dish-container'>
                    <img alt='main-dish' src={mainDish} />
                    <div id='lg-main-dish-caption'>
                        <p>Dish <span>of the</span> Week</p>
                        <p>Orange Chicken w/ white rice</p>
                        <p>Created by: <span>@daniel70125</span></p>
                    </div>
                </div>
                <div id='who-are-we-cont'>
                    <div id='who-are-we-text'>
                        <h5>Welcome to Fridge Assist !</h5>
                        <p>Fridge Assist is the ultimate cooking social community, where recipes come to life. By joining
                            us you will get to share your recipes and food ideas with hundreds of other like-minded members.
                        </p>
                        <Link to='/sign-up'><Button>Sign Up</Button></Link>
                    </div>
                    <img alt='who-are-we-illustration' src={cookingIllustration} />
                </div>
            {/* End of component*/}    
            </div>
         );
    }
}
 
export default Home;
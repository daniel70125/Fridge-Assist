import React, { Component } from 'react';
import './Home.scss';
import {Link} from 'react-router-dom';
import mainDish from '../../Pictures/main-dish.png';
import cookingIllustration from '../../Pictures/who-are-we.jpg';
import recipeFeaturedImg from '../../Pictures/recipe-illustration.jpg';
import groceryFeaturedImg from '../../Pictures/grocery-list.webp';
import expirationFeaturedImg from '../../Pictures/expiration-date.jpg';
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
                        <div id='who-are-we-btns'>
                            <Link to='/sign-up'><Button>Sign Up</Button></Link>
                            <Link to='/login'><Button>Log in</Button></Link>
                        </div>
                    </div>
                    <img alt='who-are-we-illustration' src={cookingIllustration} />
                </div>
                <div id='features-intro-cont'>
                    <h1>Features</h1>
                    <p>Let's explore what we can do using Fridge Assist</p>
                </div>
                {/* Feature 1 */}
                <div id='feature-cont'>
                    <div className='featured-text-div'>
                        <h1>Recipes !</h1>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eius quae id qui pariatur, dolor fugiat maiores possimus a debitis enim praesentium, quam neque recusandae dolorum labore beatae. Accusamus, voluptate iure.
                        Vitae ipsa, perspiciatis aspernatur explicabo repudiandae blanditiis aliquid quia corporis animi quo non ipsam? Cumque perspiciatis in alias totam harum, odit odio. Id optio, totam deleniti fuga eaque quaerat nihil?</p>
                    </div>
                    <div className="featured-img-div">
                        <img alt='recipe-illustration' src={recipeFeaturedImg}/>
                    </div>
                </div>
                {/* Feature 2 */}
                <div id='feature-cont-reversed'>
                    <div className='featured-text-div'>
                        <h1>Grocery List !</h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis sapiente rem a, dolorem vel enim cupiditate vero deserunt blanditiis odit sequi perspiciatis vitae qui esse corporis eius? Fugiat, vel dolorum?
                        Incidunt id, ducimus, quibusdam porro enim molestiae accusamus consequuntur facilis ipsam architecto odio minus consectetur iure sunt, animi ut est pariatur! Repellat accusamus, excepturi corrupti aperiam sequi praesentium soluta mollitia!</p>
                    </div>
                    <div className="featured-img-div">
                        <img alt='recipe-illustration' src={groceryFeaturedImg}/>
                    </div>
                </div>
                {/* Feature 3 */}
                <div id='feature-cont'>
                    <div className='featured-text-div'>
                        <h1>Expiration Notification !</h1>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Placeat eos amet nisi magni sunt quas aspernatur esse excepturi nesciunt. Id soluta voluptatem dolorem velit dignissimos. Doloribus incidunt quasi architecto sapiente.
                        Magni aspernatur delectus vitae optio, consequatur ut porro, doloremque error illum dolore voluptatem voluptatum vel rerum explicabo. Eius provident harum quas, in obcaecati veritatis debitis at, nostrum iste, aliquid a?</p>
                    </div>
                    <div className="featured-img-div">
                        <img alt='recipe-illustration' src={expirationFeaturedImg}/>
                    </div>
                </div>
            {/* End of component*/}    
            </div>
         );
    }
}
 
export default Home;
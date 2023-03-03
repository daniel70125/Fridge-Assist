import React, { Component } from 'react';
import './Home.scss';
import HomeRecipeGallery from '../HomeRecipeGallery/HomeRecipeGallery';
import HomeSearch from '../HomeSearch/HomeSearch';
// Imports from packages
import {Link} from 'react-router-dom';
import Button from '@mui/material/Button';
import StarIcon from '@mui/icons-material/Star';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';

// Imports of images
// import mainDish from '../../Pictures/main-dish.png';
import cookingIllustration from '../../Pictures/who-are-we.jpg';
import recipeFeaturedImg from '../../Pictures/recipe-illustration.jpg';
import groceryFeaturedImg from '../../Pictures/grocery-list.webp';
import expirationFeaturedImg from '../../Pictures/expiration-date.jpg';
import bgImage from '../../Pictures/chef-bottom-bg.png';
import avatarImg from '../../Pictures/profile-avatar.png';

class Home extends Component {
    state = { 

     }
    render() { 
        return ( 
            <div id='home-wrapper'>
                
                <div className='lg-screen-margin'>
                <div id='who-are-we-cont'>
                    <div id='who-are-we-text'>
                        <h5>Welcome to <span className='trademarkName'>Fridge Assist</span>!</h5>
                        <p>Fridge Assist is the ultimate cooking social community, where recipes come to life. By joining
                            us you will get to share your recipes and food ideas with hundreds of other like-minded members.
                        </p>
                        <div id='who-are-we-btns'>
                            <Link to='/sign_up'><Button>Sign Up</Button></Link>
                            <Link to='/login'><Button>Log in</Button></Link>
                        </div>
                    </div>
                    
                    
                        <img alt='who-are-we-illustration' src={cookingIllustration} />
                    
                </div>
                
                    <div id='features-intro-cont'>
                        <h1 className='main-color'>Features</h1>
                        <p>Let's explore what we can do using <span className='trademarkName'>Fridge Assist</span></p>
                    </div>
                
                {/* Feature 1 */}
                
                <div id='feature-cont'>
                    <div className='featured-text-div'>
                        <h1 className='main-color'>Recipes !</h1>
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
                        <h1 className='main-color'>Grocery List !</h1>
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
                        <h1 className='main-color'>Expiration Notification !</h1>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Placeat eos amet nisi magni sunt quas aspernatur esse excepturi nesciunt. Id soluta voluptatem dolorem velit dignissimos. Doloribus incidunt quasi architecto sapiente.
                        Magni aspernatur delectus vitae optio, consequatur ut porro, doloremque error illum dolore voluptatem voluptatum vel rerum explicabo. Eius provident harum quas, in obcaecati veritatis debitis at, nostrum iste, aliquid a?</p>
                    </div>
                    <div className="featured-img-div">
                        <img alt='recipe-illustration' src={expirationFeaturedImg}/>
                    </div>
                </div>

                </div> {/* End of wrapper of middle/main content w/ margin*/}

                <div id='home-what-are-we-eating-cont'>
                    <img src={bgImage} alt='bg'/>
                    <HomeSearch />
                    <img src={bgImage} alt='bg'/>
                </div>
                
                <div id='home-recipe-gallery-wrapper'>
                    <h2 className='main-color' id='home-recipe-gallery-h2'>Our Users Recipes</h2>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Reiciendis delectus iste eius corrupti quasi deleniti veritatis cum dignissimos doloremque aspernatur? Doloremque dignissimos placeat cumque officiis sit molestias sint porro vero.</p>
                    <HomeRecipeGallery /> {/* Recipe gallery */}
                    <Link to='/recipes'>View Recipes <KeyboardArrowRightIcon style={{"position":"relative", "top":"4px"}}/> </Link>
                </div>

                <div id='home-recipe-vision'>
                    <img src={bgImage} alt='bg'/>
                    <h2 className='main-color'>Our Vision</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Possimus voluptatum inventore quae sed ipsa, dicta fugiat perferendis vitae sunt molestias repudiandae sequi quasi nemo dignissimos autem nostrum culpa? Iste, quo.</p>
                    <img src={bgImage} alt='bg'/>
                </div>

                <div id='home-review-cont'>
                    <h2>See Our Customers <br /> <span style={{"color":"#da6509"}}>Review</span></h2>
                    <span style={{"fontSize":"2rem"}}>Testimonial</span>
                    <div>
                        <img alt='testimonial-avatar' src={avatarImg}/>
                        <div id='home-review-testimonial-caption'>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci, cum placeat in aliquid quisquam odit maiores soluta, error, quam officia omnis quis nesciunt aperiam ea at ab minus rem doloremque!</p>
                        <StarIcon className='home-review-testimonial-star' /> <StarIcon className='home-review-testimonial-star' /> <StarIcon className='home-review-testimonial-star' /> <StarIcon className='home-review-testimonial-star' />
                        <p>John Adams</p>
                        <span>Founder, CEO</span>
                        </div>
                    </div>
                </div>
            {/* End of component*/}
            </div>
         );
    }
}
 
export default Home;
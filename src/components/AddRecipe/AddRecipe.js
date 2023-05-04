import React, { Component } from 'react';
import './AddRecipe.scss';
import { Form } from 'react-bootstrap';
import deleteBtn from '../../Pictures/icons8-close-btn.png';

class AddRecipe extends Component {
    state = { 
        
     }
    componentDidMount(){
        let arrOfGalleryOverlays = document.querySelectorAll('.home-recipe-gallery-div');
        arrOfGalleryOverlays.forEach((elm, index) => {
            elm.addEventListener('mouseover', () => {
                document.querySelectorAll('.home-recipe-gallery-overlay')[index].style.height = '30%';
            })
            elm.addEventListener('mouseout', () => {
                document.querySelectorAll('.home-recipe-gallery-overlay')[index].style.height = '0';
            })
        });
    }
    addToIngredients(){
        console.log(console.log("hello"));
    }
    render() { 
        return ( 
            <div id='add-recipe-cont'>
                <div id='add-recipe-title-cont'>
                    <h1>Add Recipe</h1>
                </div>

                <div id='add-recipe-flexbox'>
                    {/* input values */}
                    <div id='add-recipe-input-cont'>
                        <Form>
                            <label for="title">Title: </label>
                            <input className='add-recipe-inp-val' type="text" name="title" /><br />
                            <label for="description">Description:</label><br />
                            <textarea className='add-recipe-inp-val' name="description" rows="4" cols="50"></textarea><br />
                            <div>
                                <div className='add-recipe-quick-facts-prep-cook-flexbox'>
                                    <label for="prep-time">Prep Time: </label>
                                    <input className='add-recipe-number-inp' type='number' name='prep-time'/>
                                    <select id="prep-time-values">
                                        <option value="seconds">Seconds</option>
                                        <option value="minutes">Minutes</option>
                                        <option value="hours">Hours</option>
                                    </select><br/>
                                </div>
                                <div className='add-recipe-quick-facts-prep-cook-flexbox'>
                                    <label for="cook-time">Cook Time: </label>
                                    <input className='add-recipe-number-inp' type='number' name='cook-time'/>
                                    <select id="cook-time-values">
                                        <option value="seconds">Seconds</option>
                                        <option value="minutes">Minutes</option>
                                        <option value="hours">Hours</option>
                                    </select>
                                </div>
                            </div>

                            <label for="Ingredients">Ingredients:</label><br />
                            <p id='add-recipe-ingredients-example'>Ex. "3 tablespoons of vegetable oil"</p>
                            <div id='add-recipe-ingredients-list'>
                                <div id='add-recipe-ingredients-list-child'>
                                    <p className='add-recipe-ingredients-list-p'>1. 3 tablespoons of vingegar.</p>
                                    <button><img src={deleteBtn} alt='delete-button'/>Delete</button>
                                </div>
                            </div>
                            <form className='add-recipe-search-form' id='home-search-form' role="search">
                                <input id="search" type="search" placeholder="Ex. 2 sticks of butter" required />
                                <button className='.main-color' onClick={this.addToIngredients} type="submit">Add</button>    
                            </form>
                            
                        </Form>
                    </div>

                    {/* preview of recipe */}
                    <div id='add-recipe-preview-cont-main'>
                        <div className='home-recipe-gallery-div'>
                            <img alt='stock' src="https://images.unsplash.com/photo-1602253057119-44d745d9b860?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=726&q=80" />
                            <div className='home-recipe-gallery-overlay'>
                                <h1>Aue De La Che</h1>
                                <p>User: <span>chef_dynamite</span></p>
                            </div>
                        </div>
                        <div id='add-recipe-info-preview'>
                            <p id='add-recipe-info-title'>Title: Pepperoni Pizza</p>
                            <p id='add-recipe-info-description'>This recipe was handed down from my grandmother</p>
                            <div id='add-recipe-quick-facts'>
                                <div className='add-recipe-fact'>
                                    <p className='add-recipe-fact-heading'>Prep Time:</p>
                                    <span className='add-recipe-fact-info'>15 minutes</span>
                                </div>
                                <div className='add-recipe-fact'>
                                    <p className='add-recipe-fact-heading'>Cook Time:</p>
                                    <span className='add-recipe-fact-info'>25 minutes</span>
                                </div>
                                <div className='add-recipe-fact'>
                                    <p className='add-recipe-fact-heading'>Total Time:</p>
                                    <span className='add-recipe-fact-info'>1 hour</span>
                                </div>
                                <div className='add-recipe-fact'>
                                    <p className='add-recipe-fact-heading'>Servings:</p>
                                    <span className='add-recipe-fact-info'>3 servings</span>
                                </div>
                            </div>
                            <div id='add-recipe-preview-ingredients'>
                                <h2>ingredients:</h2>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
         );
    }
}
 
export default AddRecipe;
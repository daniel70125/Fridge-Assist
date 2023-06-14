import React, { Component } from 'react';
import './AddRecipe.scss';
import { Form } from 'react-bootstrap';
import deleteBtn from '../../Pictures/trash-can-icon.png';
import axios from 'axios';

class AddRecipe extends Component {
    constructor(props) {
        super(props);
        this.addToIngredients = this.addToIngredients.bind(this);
        this.createNewIngredient = this.createNewIngredient.bind(this);
        this.deleteIngredient = this.deleteIngredient.bind(this);
    }
    state = { 
        ingredients: [],
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
    // This is the main function that adds ingredient to your list
    async addToIngredients(e){
        e.preventDefault()
        let searchElm = document.querySelector("#search");
        let searchVal = e.target.parentNode[0].value; // User inputted text
        
        
        let ingredientsListCount = this.state.ingredients.length + 1;
        this.state.ingredients.push(`${ingredientsListCount}. ${searchVal}`); //Send ingredient to state

        //Grab this one and create a new div for it
       await this.createNewIngredient();

        // Send state to backend and recieve that list
        const response = await axios.post('/add-recipe', this.state.ingredients);
        const ingredient = response.data.ingredient;

        searchElm.value = ""; //Make search value empty f
    }
    // This function creates new div elements to the DOM each time you add another ingredient
    createNewIngredient(e){
        let ingredientsDiv = document.querySelector('#add-recipe-ingredients-list');
        const divChild = document.createElement("div");
        divChild.setAttribute('class','add-recipe-ingredients-list-child');
        
        const p = document.createElement("p");
        p.classList.add("add-recipe-ingredients-list-p")
        const pNode = document.createTextNode(`${this.state.ingredients[this.state.ingredients.length - 1]}`);
        p.appendChild(pNode); //Append text to paragraph tag
        
        
        const img = document.createElement("img");
        img.src = deleteBtn;

        const btn = document.createElement("button");
        const btnNode = document.createTextNode(`Delete`);
        btn.appendChild(btnNode); //Append text to paragraph tag
        btn.setAttribute('class','add-recipe-ingredients-list-child-delete-btn');
        btn.addEventListener("click", (e) => {
            this.deleteIngredient();
        })
        
        
        divChild.appendChild(p);
        divChild.appendChild(btn);
        btn.appendChild(img);
        ingredientsDiv.appendChild(divChild);
    }
    deleteIngredient(e){
        let x = document.querySelectorAll('.add-recipe-ingredients-list-child');
        console.log(e)
    }
    render() {
        let ingredientsArr = this.state.ingredients.map((elm, index) => {
            return (
                <li>elm</li>
            )
        })
        return ( 
            <div id='add-recipe-cont'>
                <div id='add-recipe-title-cont'>
                    <h1>Add Recipe</h1>
                </div>

                <div id='add-recipe-flexbox'>
                    {/* input values */}
                    <div id='add-recipe-input-cont'>
                        {/* // prevent defualt function prevents reload onclick of 'add' button */}
                        <Form onClick={(e) => e.preventDefault()} >
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
                            {/* Start of ingredients section */}
                            <div id='ingredients-wrapper'>
                                <label for="Ingredients">Ingredients:</label><br />
                                <p id='add-recipe-ingredients-example'>Ex. "3 tablespoons of vegetable oil"</p>
                                <form className='add-recipe-search-form' id='home-search-form' role="search">
                                    <input id="search" type="search" placeholder="Ex. 2 sticks of butter" required />
                                    <button onClick={this.addToIngredients}>Add</button>    
                                </form>
                                <div id='add-recipe-ingredients-list'>
                                    {/* <div id='add-recipe-ingredients-list-child'>
                                        <p className='add-recipe-ingredients-list-p'>1. 3 tablespoons of vingegar.</p>
                                        <button><img src={deleteBtn} alt='delete-button'/>Delete</button>
                                    </div> */}
                                </div>
                            </div>
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
                                <ul>
                                    <li>3 tables</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
         );
    }
}
 
export default AddRecipe;
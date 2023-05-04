import React, { Component } from 'react';
import './DiscoverMeals.scss';
import axios from 'axios';

class AllRecipes extends Component {
    state = {  }
     componentDidMount(){
       axios.get('/meals')
       .then(res => {
        console.log(res.data)
       })
       .catch(err => console.log(err))
    }
    render() { 
        return ( 
            <div>
                <div id='discover-meals-title-cont'>
                    <h1>All Meals</h1>
                </div>
            </div>
         );
    }
}
 
export default AllRecipes;
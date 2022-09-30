import React, { Component } from 'react';
import './GroceryList.scss';
import Button from '@mui/material/Button';



class GroceryList extends Component {
    state = { 
        
    }
    render() { 
        const list = ['apples'];
        let fruitDivs = list.map((elm, index) => {
            console.log(elm)
            return (
                <div>
                    <img />
                    <p>{elm}</p>
                    <div>
                        
                    </div>
                </div>
            )
        })
        return ( 
            <div id='grocery-list-cont'>
                <div id='mobile-view-cont'>
                    <p>Lets go shopping!</p>
                    <div id='grid-container'>
                        {fruitDivs}    
                    </div>
                </div>

                <div id='lg-view-cont'>
                    <h1>LG view</h1>

                </div>
            </div>
         );
    }
}
 
export default GroceryList;
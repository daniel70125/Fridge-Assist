import React, { Component } from 'react';
import './GroceryList.scss';

import CheckIcon from '@mui/icons-material/Check';
import EditIcon from '@mui/icons-material/Edit';
import CloseIcon from '@mui/icons-material/Close';
import { Button } from '@mui/material';



class GroceryList extends Component {
    state = { 
        
    }
    componentDidMount(){
        
    }
    addCheckedClass(e, Index, element){
        let checkmarkNodes = document.querySelectorAll('.checkIcon');
        let itemNameNodes = document.querySelectorAll('.itemName');
        if (element.checked === false){
            checkmarkNodes[Index].style.visibility = 'visible';
            itemNameNodes[Index].style.textDecoration = 'line-through';
            element.checked = true;
        } else {
            checkmarkNodes[Index].style.visibility = 'hidden';
            itemNameNodes[Index].style.textDecoration = 'none';
            element.checked = false;
        }

    }
    render() { 
        const list = [
            {
                "name":"Apple",
                "checked":false
            },
            {
                "name":"Bananas",
                "checked":true
            }
        ];
        let fruitDivs = list.map((elm, index) => {
            return (
                <div onClick={(e, Index, element) => this.addCheckedClass(e, index, elm)} className='grocery-list-children-cont' key={index}>
                    <span><CheckIcon className='checkIcon' /></span>
                    <p className='itemName'>{elm.name}</p>
                    <div className='grocery-list-edit-cont'>
                        <EditIcon />
                        <CloseIcon />
                    </div>
                </div>
            )
        })
        return ( 
            <div id='grocery-list-cont'>
                <div id='grocery-list-add-item-cont'>
                    
                </div>
                {fruitDivs}
            </div>
         );
    }
}
 
export default GroceryList;
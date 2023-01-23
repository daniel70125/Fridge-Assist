import React, { Component } from 'react';
import './GroceryList.scss';

import CheckIcon from '@mui/icons-material/Check';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { Button } from '@mui/material';



class GroceryList extends Component {
    state = { 
        list: [
            {
                "name":"Apple",
                "checked":false
            },
            {
                "name":"Bananas",
                "checked":true
            }
        ]
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
        this.setState({})
    }
    deleteItem(e, index, list){
        list.splice(index, 1); 
        this.setState({})
    }
    addItem(e, list){
        let searchInput = document.querySelector('#itemInput').value;
        searchInput = searchInput.charAt(0).toUpperCase() + searchInput.slice(1);
        let obj = {
            "name":searchInput,
            "checked": false
        }
        this.setState({list: [...this.state.list, obj]})
        document.querySelector('#itemInput').value = '';
    }
    render() {
        let fruitDivs = this.state.list.map((elm, index, list) => {
            return (
                <div onClick={(e, Index, element) => this.addCheckedClass(e, index, elm)} className='grocery-list-children-cont' key={index}>
                    <span><CheckIcon className='checkIcon' /></span>
                    <p className='itemName'>{elm.name}</p>
                    <div className='grocery-list-edit-cont'>
                        <EditIcon />
                        <DeleteIcon onClick={(e, Index, List) => this.deleteItem(e, index, list)} />
                    </div>
                </div>
            )
        })
        return ( 
            <div id='grocery-list-cont'>
                <div id='grocery-list-add-item-cont'>
                    <input placeholder='Add Item..' id='itemInput' type='text' /><Button onClick={(e, List) => this.addItem(e, this.state.list)}>Add Item</Button>
                </div>
                {fruitDivs}
            </div>
         );
    }
}
 
export default GroceryList;
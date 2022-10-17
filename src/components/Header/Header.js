import React, { Component } from 'react';
import './Header.scss';
import {connect} from 'react-redux';
import {openNav} from '../../Redux/Reducer';
import {openSearchNav} from '../../Redux/Reducer';
import {Link} from 'react-router-dom';

import Logo from '../../Pictures/fridge-assist-logo.png';
import Avatar from '../../Pictures/profile-avatar.png';
import DensityMediumIcon from '@mui/icons-material/DensityMedium';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import Search from '@mui/icons-material/Search';

class Header extends Component {
    state = { 
        navbarOpen: false
    }
    componentDidMount(){
        window.addEventListener('click', () => {
            if (window.location.href === 'http://localhost:3000/') {
                document.querySelector('#topnav-home-btn').classList.add("active");
            } else {
                document.querySelector('#topnav-home-btn').classList.remove("active");
            }
        })
    }
    closeNav(){
        this.props.openNav(false)
        let overlay = document.querySelector('#myNav');
        overlay.style.width = 0;
    }
    closeSearchNav(){
        this.props.openSearchNav(false)
        let overlay = document.querySelector('#search-overlay');
        overlay.style.height = 0;
    }
    openNav(){
        this.props.openNav(true)
        // let overlay = document.querySelector('#myNav');
        // overlay.style.width = '100vw';
    }
    openSearchNav(){
        this.props.openSearchNav(true)
        // let overlay = document.querySelector('#myNav');
        // overlay.style.width = '100vw';
    }
    render() { 
        return ( 
           <div>
             <div id='header-main-div'>
                <div>
                    <Link className='no-bg' to='/'><img alt='fridge-assist-logo' id='header-logo' src={Logo} /></Link>
                </div>
                <div>
                    <Search style={{"color":"#da6509", "fontSize":"3rem","marginRight":"1vw"}} onClick={(e) => this.openSearchNav(e)} />
                    <DensityMediumIcon id='mobile-nav-btn' onClick={(e) => this.openNav(e)} />
                </div>
            </div>

            <div className="topnav">
                <Link className='no-bg' to='/'><img alt='logo' src={Logo} /> </Link>
                <div id='topnav-links'>
                    <Link id='topnav-home-btn' className='active' to='/'>Home</Link>

                    <div className="dropdown">
                        <button className="dropbtn">Discover
                        <ArrowDropDownIcon />
                        </button>
                        <div className="dropdown-content">
                        <Link to='/'>Browse</Link>
                        <Link to='/'>Chefs</Link>
                        <Link to='/'>Reviews</Link>
                        </div>
                    </div>
                    <div className="dropdown">
                        <button className="dropbtn">Contact
                        <ArrowDropDownIcon />
                        </button>
                        <div className="dropdown-content">
                            <Link to='/'>Contact Us</Link>
                            <Link to='/'>About Us</Link>
                        </div>
                    </div>
                    <Search id='topnav-lg-search' onClick={(e) => this.openSearchNav(e)}/>
                    <div className="dropdown">
                    <img className='avatar-img' src={Avatar} alt='user-avatar'/>
                        <div className="dropdown-content dropdown-content2">
                        <Link to='/'>My Profile</Link>
                        <Link to='/'>Favorites</Link>
                        <Link to='/'>My Recipes</Link>
                        <Link to='/grocery_list'>Grocery List</Link>
                        </div>
                    </div>
                </div>
            </div>
           </div>
         );
    }
}
 
const mapStateToProps = reduxState => reduxState;
export default connect(mapStateToProps, {openNav, openSearchNav})(Header);
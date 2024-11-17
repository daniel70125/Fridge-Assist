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
import { Button } from '@mui/material';

class Header extends Component {
    state = { 
        navbarOpen: false
    }
    componentDidMount(){
        setTimeout(this.checkUrl, 100)
        window.addEventListener('click', () => {
            this.checkUrl();
        })
    }
    checkUrl(){
        // This function changes the active highlighted btn on navmenu
            switch (window.location.href) {
                case 'http://localhost:3000/':
                    document.querySelector('#topnav-home-btn').classList.add("active");
                    document.querySelector('#topnav-discover-btn').classList.remove("active");
                    document.querySelector('#topnav-contact-btn').classList.remove("active");
                    document.querySelector('#topnav-signIn').classList.remove("active");
                    break;
                case 'http://localhost:3000/meals':
                case 'http://localhost:3000/food-maker':
                    document.querySelector('#topnav-discover-btn').classList.add("active");
                    document.querySelector('#topnav-home-btn').classList.remove("active");
                    document.querySelector('#topnav-contact-btn').classList.remove("active");
                    document.querySelector('#topnav-signIn').classList.remove("active");
                    break;
                case 'http://localhost:3000/contact':
                    document.querySelector('#topnav-contact-btn').classList.add("active");
                    document.querySelector('#topnav-home-btn').classList.remove("active");
                    document.querySelector('#topnav-discover-btn').classList.remove("active");
                    document.querySelector('#topnav-signIn').classList.remove("active");
                    break;
                case "http://localhost:3000/grocery-list":

                default:
            }
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
                    <Link className='no-bg' to='/'><img onClick={() => this.setState({update: true})} alt='fridge-assist-logo' id='header-logo' src={Logo} /></Link>
                </div>
                <div>
                    <Search id='header-main-div-search-btn' onClick={(e) => this.openSearchNav(e)} />
                    <DensityMediumIcon id='mobile-nav-btn' onClick={(e) => this.openNav(e)} />
                </div>
            </div>
            
            <div className="topnav">
                <Link className='no-bg' to='/'><img alt='logo' src={Logo} /> </Link>
                <div id='topnav-links'>
                    <Link id='topnav-home-btn' className='active' to='/'>Home</Link>

                    <div className="dropdown">
                        <button id='topnav-discover-btn' className="dropbtn">Discover
                        <ArrowDropDownIcon />
                        </button>
                        <div className="dropdown-content">
                        <Link to='/meals'>Meals</Link>
                        <Link to='/'>Chefs</Link>
                        <Link to='/'>Reviews</Link>
                        <Link to='/food-maker'>Food-Maker</Link>
                        </div>
                    </div>
                    <div className="dropdown">
                        <button id='topnav-contact-btn' className="dropbtn">Contact
                        <ArrowDropDownIcon />
                        </button>
                        <div className="dropdown-content">
                            <Link to='/contact'>Contact Us</Link>
                            {/* <Link to='/'>About Us</Link> */}
                        </div>
                    </div>
                    <Link id='topnav-signIn' style={{"padding":"10px 5px"}} to='/login'><Button>Sign in</Button></Link>
                    <Link style={{"padding":"10px 5px"}} to='/sign-up'><Button style={{ "border":"1px solid #da6509"}}>Sign Up</Button></Link>
                    <Search id='topnav-lg-search' onClick={(e) => this.openSearchNav(e)}/>
                    <div className="dropdown">
                    <img className='avatar-img' src={Avatar} alt='user-avatar'/>
                        <div className="dropdown-content dropdown-content2">
                        <Link to='/'>My Profile</Link>
                        <Link to='/'>Favorites</Link>
                        <Link to='/'>My Recipes</Link>
                        <Link to='/grocery-list'>Grocery List</Link>
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
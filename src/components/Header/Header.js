import React, { Component } from 'react';
import './Header.scss';
import {connect} from 'react-redux';
import {openNav} from '../../Redux/Reducer';
import {openSearchNav} from '../../Redux/Reducer';
import Logo from '../../Pictures/fridge-assist-logo.png';
import Avatar from '../../Pictures/profile-avatar.png';
import DensityMediumIcon from '@mui/icons-material/DensityMedium';
import {Link} from 'react-router-dom';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import Search from '@mui/icons-material/Search';
import Form from 'react-bootstrap/Form';
// import HomeIcon from '@mui/icons-material/Home';
// import SearchIcon from '@mui/icons-material/Search';
// import PersonIcon from '@mui/icons-material/Person';
// import FavoriteIcon from '@mui/icons-material/Favorite';
// import MenuBookIcon from '@mui/icons-material/MenuBook';

class Header extends Component {
    state = { 
        navbarOpen: false
    }
    componentDidMount(){
        
        // let navLinks = document.querySelectorAll('.header-nav-links');
        // navLinks.forEach((elm) => {elm.addEventListener('click', this.closeNav)})
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
                    <img alt='fridge-assist-logo' id='header-logo' src={Logo} />
                </div>
                <div>
                    <Search style={{"color":"#da6509", "fontSize":"4rem"}} onClick={(e) => this.openSearchNav(e)} />
                    <DensityMediumIcon id='mobile-nav-btn' onClick={(e) => this.openNav(e)} />
                </div>
            </div>

            <div class="topnav">
                <img alt='logo' src={Logo} />
                <div id='topnav-links'>
                    <div id='topnav-lg-search-bar'>
                    <Form id='footer-form'>
                        <Form.Control type="text" placeholder="Search recipes" className='topnav-search-input'/>
                    </Form>
                    </div>
                    <Link className='active' to='/'>Home</Link>

                    <div class="dropdown">
                        <button class="dropbtn">Discover
                        <ArrowDropDownIcon />
                        </button>
                        <div class="dropdown-content">
                        <Link to='/'>Browse</Link>
                        <Link to='/'>Chefs</Link>
                        <Link to='/'>Reviews</Link>
                        </div>
                    </div>
                    <div class="dropdown">
                        <button class="dropbtn">Contact
                        <ArrowDropDownIcon />
                        </button>
                        <div class="dropdown-content">
                            <Link to='/'>Contact Us</Link>
                            <Link to='/'>About Us</Link>
                        </div>
                    </div>
                    <Search id='topnav-lg-search' style={{"color":"#da6509", "fontSize":"3.5rem", "margin":"0 1vw"}} onClick={(e) => this.openSearchNav(e)}/>
                    <div class="dropdown">
                    <img className='avatar-img' src={Avatar} alt='user-avatar'/>
                        <div class="dropdown-content dropdown-content2">
                        <Link to='/'>My Profile</Link>
                        <Link to='/'>Favorites</Link>
                        <Link to='/'>My Recipes</Link>
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
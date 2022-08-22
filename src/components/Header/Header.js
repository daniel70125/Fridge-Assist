import React, { Component } from 'react';
import './Header.scss';
import {connect} from 'react-redux';
import {openNav} from '../../Redux/Reducer';
import Logo from '../../Pictures/fridge-assist-logo.png';
import Avatar from '../../Pictures/profile-avatar.png';
import DensityMediumIcon from '@mui/icons-material/DensityMedium';
import {Link} from 'react-router-dom';
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
    openNav(){
        this.props.openNav(true)
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
                    <DensityMediumIcon id='mobile-nav-btn' onClick={(e) => this.openNav(e)} />
                </div>
            </div>

            <div class="topnav">
                <img alt='logo' src={Logo} />
                <div id='topnav-links'>
                    <Link className='active' to='/'>Home</Link>
                    <Link to='/'>Browse</Link>
                    <Link to='/'>Chefs</Link>
                    <Link to='/'>Contact Us</Link>
                    <Link to='/'>About Us</Link>
                    <Link to='/'>Reviews</Link>

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
export default connect(mapStateToProps, {openNav})(Header);
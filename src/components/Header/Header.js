import React, { Component } from 'react';
import './Header.scss';
import Logo from '../../Pictures/fridge-assist-logo.png';
import DensityMediumIcon from '@mui/icons-material/DensityMedium';
import {Link} from 'react-router-dom';
import HomeIcon from '@mui/icons-material/Home';
import SearchIcon from '@mui/icons-material/Search';
import PersonIcon from '@mui/icons-material/Person';
import FavoriteIcon from '@mui/icons-material/Favorite';
import MenuBookIcon from '@mui/icons-material/MenuBook';

class Header extends Component {
    state = { 
        navbarOpen: false
    }
    componentDidMount(){
        let navLinks = document.querySelectorAll('.header-nav-links');
        navLinks.forEach((elm) => {elm.addEventListener('click', this.closeNav)})
    }
    closeNav(){
        let overlay = document.querySelector('#myNav');
        overlay.style.width = 0;
    }
    openNav(){
        let overlay = document.querySelector('#myNav');
        overlay.style.width = '100vw';
    }
    render() { 
        return ( 
           <div>
             <div id='header-main-div'>
                <div>
                    <img alt='fridge-assist-logo' id='header-logo' src={Logo} />
                </div>
                <div>
                    <input type="search" name="" id="header-search-input" placeholder='Search ...'/>
                </div>
                <div>
                    <DensityMediumIcon id='mobile-nav-btn' onClick={(e) => this.openNav(e)} />
                </div>

                {/* <!-- The overlay --> */}
                <div id="myNav" className="overlay">

                {/* <!-- Button to close the overlay navigation --> */}
                <a href="/#" className="closebtn" onClick={(e) => this.closeNav(e)}>&times;</a>

                {/* <!-- Overlay content --> */}
                <div className="overlay-content">
                    <Link className='header-nav-links' to='/'>Home</Link>
                    <Link className='header-nav-links' to='/products'>Browse</Link>
                    <Link className='header-nav-links' to='/about'>About</Link>
                </div>

                </div>

            </div>
            <div id='header-main-div2'>
                    <div>
                        <img src={Logo} id='header2-logo' alt='fridge assist logo'/>
                        <div id='user-avatar'>
                            <img id='avatar-img' src='https://www.kindpng.com/picc/m/78-786207_user-avatar-png-user-avatar-icon-png-transparent.png' alt='user avatar'/>
                        </div>
                        <p>SuperBaker96!</p>
                        <p>New Orleans, LA 70113</p>
                    </div>
                    <div className='header-discover-div'>
                        <span>Discover</span>
                        <Link className='header-nav-links' to='/'><HomeIcon className='navbar2-icon' /> Home</Link>
                        <Link className='header-nav-links' to='/products'><SearchIcon className='navbar2-icon' /> Browse</Link>
                        {/* <Link className='header-nav-links' to='/about'>For You</Link> */}
                    </div>
                    <div className='header-discover-div'>
                    <span>Library</span>
                        <Link className='header-nav-links' to='/'><PersonIcon className='navbar2-icon' /> Chefs</Link>
                        <Link className='header-nav-links' to='/products'> <FavoriteIcon className='navbar2-icon'/> Favorites</Link>
                        <Link className='header-nav-links' to='/about'> <MenuBookIcon className='navbar2-icon' /> My Recipes</Link>
                    </div>
            </div>
           </div>
         );
    }
}
 
export default Header;
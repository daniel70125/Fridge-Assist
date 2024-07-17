import React, {Component} from 'react';
import './App.scss';
import STT from './components/STT/STT';
import ChefOverlay from './components/ChefCookingOverlay/ChefCookingOverlay';
import Routes from './routes';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {getUser} from './Redux/Reducer';
import {openNav} from './Redux/Reducer';
import {openSearchNav} from './Redux/Reducer';
import {loadingOverlay} from './Redux/Reducer';
import axios from 'axios';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
// Arrows for navbar overlay 
import DoubleArrowIcon from '@mui/icons-material/DoubleArrow';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';

import Logo from './Pictures/fridge-assist-logo.png';
import ArrowDropDown from '@mui/icons-material/ArrowDropDown';
import { Button } from '@mui/material';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      discoverDropdown: false,  
      contactDropdown: false,  
      userDropdown: false,  
     }
  }
async componentDidMount(){
  const loadingOverlayElement = document.querySelector('#cooking-overlay');
  const p = document.querySelector('#chefcookingoverlay-p');

  if (window.sessionStorage.firstTimeUser){
    this.props.loadingOverlay(false);
    loadingOverlayElement.style.height = '0vh';
    loadingOverlayElement.style.display = 'none';
  } else {
    setTimeout(() => {
      this.props.loadingOverlay(false);
      loadingOverlayElement.style.height = '0vh';
      p.style.display = 'none';
      window.sessionStorage.setItem('firstTimeUser', true);
    }, 5000)
    
  }
  await axios.get('/getuser')
  .then(res => console.log(res.data))
  .catch(err => console.log(err))

  // Changes title depending on href location
  if (window.location.href === 'http://localhost:3000/' || window.location.href === 'http://localhost:3000' || window.location.href === 'localhost:3000'){
    document.title = `Home | Fridge Assist`;
  } else {
    let newTitle = window.location.href.toString().slice(22);
    newTitle = newTitle.replace(/_/g, ' ');
    newTitle = newTitle.split(''); // NewTitle = [array of letters] Ex. ['L','o','g','i', 'n']
    newTitle[0] = newTitle[0].toUpperCase(); // Uppercase first letter of array
    newTitle = newTitle.join(''); // Join string. Ex. ['L','o','g','i','n'] => Login
    document.title = `${newTitle} | Fridge Assist`;
}
// Change title on every click, usually page change click
window.addEventListener('click', function (event) {
  if (window.location.href === 'http://localhost:3000/'){
    this.document.title = `Home | Fridge Assist`;
  } else {
    let newTitle = window.location.href.toString().slice(22);
    newTitle = newTitle.replace(/_/g, ' ');
    newTitle = newTitle.split(''); // NewTitle = [array of letters] Ex. ['L','o','g','i', 'n']
    newTitle[0] = newTitle[0].toUpperCase(); // Uppercase first letter of array
    newTitle = newTitle.join(''); // Join string. Ex. ['L','o','g','i','n'] => Login
    this.document.title = `${newTitle} | Fridge Assist`;
  }
});


if (window.location.href === 'http://localhost:4001/') {
    document.querySelector('#topnav-home-btn').classList.add("active");
} else {
    document.querySelector('#topnav-home-btn').classList.remove("active");
    document.querySelector('#topnav-home-btn').style.color='#cfc7c7';
}
  
let dropdownContainers = document.querySelectorAll('.app-overlay-links-cont');
let dropdowns = document.querySelectorAll('.app-overlay-links-dropdown-cont');

// Set heights to drop down each container on click of arrow
dropdownContainers.forEach((elm, index) => {
  elm.addEventListener('click', (e) => {
    if (index === 0){
      if (this.state.discoverDropdown === false){
        dropdowns[index].style.height = '130px'; // Set height to drop down container drawer
        // timeout because event bubbling is happening. this function runs twice.
        window.setTimeout(() => {
          this.setState({discoverDropdown: true})
        }, 1000)
      } else if (this.state.discoverDropdown === true){
        dropdowns[index].style.height = '0';
        window.setTimeout(() => {
          this.setState({discoverDropdown: false})
        }, 1000)
      }
      
    } else if (index === 1) {
      if (this.state.contactDropdown === false){
        dropdowns[index].style.height = '25px'; // Set height to drop down user drawer
        // timeout because event bubbling is happening. this function runs twice.
        window.setTimeout(() => {
          this.setState({contactDropdown: true})
        }, 1000)
      } else if (this.state.contactDropdown === true){
        dropdowns[index].style.height = '0';
        window.setTimeout(() => {
          this.setState({contactDropdown: false})
        }, 1000)
      }
    } else {
      if (this.state.userDropdown === false){
        dropdowns[index].style.height = '135px'; // Set height to drop down user drawer
        // timeout because event bubbling is happening. this function runs twice.
        window.setTimeout(() => {
          this.setState({userDropdown: true})
        }, 1000)
      } else if (this.state.userDropdown === true){
        dropdowns[index].style.height = '0';
        window.setTimeout(() => {
          this.setState({userDropdown: false})
        }, 1000)
      }
    } 
  })
})

}
componentDidUpdate(){
  // Changes title depending on href location
  if (window.location.href === 'http://localhost:3000/' || window.location.href === 'http://localhost:3000'){
    document.title = `Home | Fridge Assist`;
  } else {
    let newTitle = window.location.href.toString().slice(22);
    newTitle = newTitle.replace(/_/g, ' ');
    document.title = `${newTitle} | Fridge Assist`;
}
  if (this.props.navOpen) {
    this.openNav()
  } else {
    this.closeNav()
  }
  if (this.props.searchOpen) {
    this.openSearchNav()
  } else {
    this.closeSearchNav()
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
    // this.props.openNav(true)
    let overlay = document.querySelector('#myNav');
    overlay.style.width = '100vw';
}
openSearchNav(){
    // this.props.openNav(true)
    let overlay = document.querySelector('#search-overlay');
    overlay.style.height = '100vh';
}
render() { 
  return ( 
    <div className="App">
      <Header />
      <STT>
        {Routes}
      </STT>

      {/* <!-- The overlay --> */}
      <div id="myNav" className="overlay">
      {/* <Link className='header-nav-links' onClick={(e) => this.closeNav(e)} to='/'>Home</Link> */}

      {/* <!-- Overlay content --> */}
      <div className="overlay-content">
          <div id='app-fridge-assist-logo-cont'>
            <img id='fridge-assist-logo' alt='fridge-assist-logo' src={Logo} />
          </div>
          <div id='app-overlay-links'>
            <ul>
              <li onClick={(e) => this.closeNav(e)}><Link className='main-color' to='/'>Home</Link></li>
              <li>
                <div className='app-overlay-links-cont main-color'>
                  <p>Discover</p>
                  <ArrowDropDown />
                </div>
                  <div className='app-overlay-links-dropdown-cont'>
                    <Link onClick={(e) => this.closeNav(e)} to='/meals'>Meals</Link>
                    <Link onClick={(e) => this.closeNav(e)} to='/'>Chefs</Link>
                    <Link onClick={(e) => this.closeNav(e)} to='/'>Reviews</Link>
                    <Link onClick={(e) => this.closeNav(e)} to='/food-maker'>Food Maker</Link>
                  </div>
              </li>
              <li>
                <div className='app-overlay-links-cont main-color'>
                  <p>Contact</p>
                  <ArrowDropDown />
                </div>
                  <div className='app-overlay-links-dropdown-cont'>
                    <Link onClick={(e) => this.closeNav(e)} to='/'>Contact Us</Link>
                    {/* <Link onClick={(e) => this.closeNav(e)} to='/'>About Us</Link> */}
                  </div>
              </li>
              <li>
                <div className='app-overlay-links-cont main-color'>
                  <p>User</p>
                  <ArrowDropDown />
                </div>
                  <div className='app-overlay-links-dropdown-cont'>
                    <Link onClick={(e) => this.closeNav(e)} to='/'>My Profile</Link>
                    <Link onClick={(e) => this.closeNav(e)} to='/'>Favorites</Link>
                    <Link onClick={(e) => this.closeNav(e)} to='/'>My Recipes</Link>
                    <Link onClick={(e) => this.closeNav(e)} to='/grocery-list'>Grocery List</Link>
                  </div>
              </li>
            </ul>
          </div>
      </div>
      <Link onClick={(e) => this.closeNav(e)} style={{"padding":"10px 5px"}} to='/sign-up'><Button>Sign Up</Button></Link>
      <Link onClick={(e) => this.closeNav(e)} style={{"padding":"10px 5px"}} to='/login'><Button>Sign in</Button></Link>
      <p style={{"color":"white", "fontSize":"1.5rem"}}>Copyright © 2022 Daniel Wright ®</p>

      <div id='overlay-btn-div' onClick={(e) => this.closeNav(e)}>
        <DoubleArrowIcon id='overlay-close-btn'/> 
      </div>

      </div>

      <div id='cooking-overlay'>
        <ChefOverlay />
      </div>
      {/*  */}
      <div id='search-overlay'>
        <div id='search-overlay-main'>
          <p>Start Typing and hit the Search button...</p>
          <form id='home-search-form' role="search">
              <label>Search for stuff</label>
              <input id="search" type="search" placeholder="Chinese, Snacks, Burgers..." required />
              <button type="submit">Search</button>    
          </form>
          <ExpandLessIcon id='search-overlay-close-btn' onClick={(e) => this.closeSearchNav(e)}/>
        </div>
      </div>
      <Footer />
    </div>
    );
}
}

const mapStateToProps = reduxState => reduxState;
export default connect(mapStateToProps, {getUser, openNav, openSearchNav, loadingOverlay})(App);
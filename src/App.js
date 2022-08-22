import React, {Component} from 'react';
import './App.scss';
import Routes from './routes';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {getUser} from './Redux/Reducer';
import {openNav} from './Redux/Reducer';
import axios from 'axios';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
// Arrows for navbar overlay
import DoubleArrowIcon from '@mui/icons-material/DoubleArrow';
import Search from '@mui/icons-material/Search';
import cookingGif from './Pictures/chef-cooking.gif';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }
async componentDidMount(){
  await axios.get('/getuser')
  .then(res => console.log(res.data))
  .catch(err => console.log(err))
  // this.props.getUser();
  // await axios.get('/session')
  // .then(res => this.props.getUser(res.data))
  // .catch(err => console.log(err))
}
componentDidUpdate(){
  if (this.props.navOpen) {
    this.openNav()
  } else {
    this.closeNav()
  }
}
closeNav(){
  this.props.openNav(false)
  let overlay = document.querySelector('#myNav');
  overlay.style.width = 0;
  let searchInput = document.querySelector('#search-site-input');
  searchInput.value = '';
}
openNav(){
    // this.props.openNav(true)
    let overlay = document.querySelector('#myNav');
    overlay.style.width = '100vw';
}
render() { 
  return ( 
    <div className="App">
      <Header />
        {Routes}
      {/* <!-- The overlay --> */}
      <div id="myNav" className="overlay">


      {/* <!-- Button to close the overlay navigation --> */}
      {/* <a href="/#" className="closebtn" onClick={(e) => this.closeNav(e)}>&times;</a> */}
          <input type='search' placeholder='Search recipes..' id='search-site-input'/> <Search className='overlay-search-btn' onClick={() => console.log("Hello")}/>

      {/* <!-- Overlay content --> */}
      <div className="overlay-content">
          <h2>Discover</h2>
          <Link className='header-nav-links' onClick={(e) => this.closeNav(e)} to='/'>Home</Link>
          <Link className='header-nav-links' onClick={(e) => this.closeNav(e)} to='/products'>Browse</Link>
          <h2>Library</h2>
          <Link className='header-nav-links' onClick={(e) => this.closeNav(e)} to='/chefs'>Chefs</Link>
          <Link className='header-nav-links' onClick={(e) => this.closeNav(e)} to='/favorites'>Favorites</Link>
          <Link className='header-nav-links' onClick={(e) => this.closeNav(e)} to='/my-recipes'>My Recipes</Link>
          <h2>Contact</h2>
          <Link className='header-nav-links' onClick={(e) => this.closeNav(e)} to='/contact'>Contact Us</Link>
          <Link className='header-nav-links' onClick={(e) => this.closeNav(e)} to='/about'>About Us</Link>
          <Link className='header-nav-links' onClick={(e) => this.closeNav(e)} to='/reviews'>Reviews</Link>
      </div>
      <div id='overlay-btn-div' onClick={(e) => this.closeNav(e)}>
        <DoubleArrowIcon id='overlay-close-btn'/> 
      </div>
      </div>
      <div id='cooking-overlay'>
        <img alt='cookingGif' src={cookingGif} />
        <p>Welcome to <span>Fridge Assist</span></p>
      </div>
      <Footer />
    </div>
    );
}
}
const mapStateToProps = reduxState => reduxState;
export default connect(mapStateToProps, {getUser, openNav})(App);
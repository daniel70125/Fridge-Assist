import React, {Component} from 'react';
import './App.css';
import Routes from './routes';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {getUser} from './Redux/Reducer';
import {openNav} from './Redux/Reducer';
import axios from 'axios';
import Header from './components/Header/Header';


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
      <a href="/#" className="closebtn" onClick={(e) => this.closeNav(e)}>&times;</a>

      {/* <!-- Overlay content --> */}
      <div className="overlay-content">
          <Link className='header-nav-links' onClick={(e) => this.closeNav(e)} to='/'>Home</Link>
          <Link className='header-nav-links' onClick={(e) => this.closeNav(e)} to='/products'>Browse</Link>
          <Link className='header-nav-links' onClick={(e) => this.closeNav(e)} to='/about'>About</Link>
      </div>

      </div>
    </div>
    );
}
}
const mapStateToProps = reduxState => reduxState;
export default connect(mapStateToProps, {getUser, openNav})(App);
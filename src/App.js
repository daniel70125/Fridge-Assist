import React, {Component} from 'react';
import './App.css';
import Routes from './routes';
import {connect} from 'react-redux';
import {getUser} from './Redux/Reducer';
import axios from 'axios';


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
  render() { 
    console.log(this.props);
    return ( 
      <div className="App">
        {Routes}
      </div>
     );
  }
}
const mapStateToProps = reduxState => reduxState;
export default connect(mapStateToProps, {getUser})(App);
import React, { Component } from 'react';
import Home from './Home';
import './Header.css';
import {Link} from 'react-router';

export default class Header extends Component {

  // constructor(){
  //   super();
  //   this.state = null;
  // }


 render(){
   return(
     <div className="App-header">
     <Home />
    </div>
  )
 }
}

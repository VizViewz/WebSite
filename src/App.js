import React, { Component } from 'react';
import Archives from './Routes/HomeScreen/Archives';
import Featured from './Routes/HomeScreen/Featured';
import Home from './Routes/HomeScreen/Home';
import Settings from './Routes/HomeScreen/Settings';
import ReactDOM from 'react-dom';
import './App.css';
import Header from './Routes/HomeScreen/Header';
import {Router, Route,hashHistory,IndexRoute} from 'react-router';
import {Link} from 'react-router';

const app=document.getElementById('app');

ReactDOM.render(<Router history={hashHistory}>
         <Route path="/" component={Header}></Route>
         <Route path="products" component={Archives}></Route>
         <Route path="aboutus" component={Settings}></Route>
         <Route path="blogs" component={Settings}></Route>
      </Router>, app);

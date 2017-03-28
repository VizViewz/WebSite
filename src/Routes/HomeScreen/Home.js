import React, { Component } from 'react';
import {Link} from 'react-router';

export default class Home extends Component {

  // constructor(){
  //   super();
  //   this.state = null;
  // }

 render(){
   var divStyle = {
     textAlign: "center",
     top: 10
   };

   return(
     <div className="Home" style={divStyle}>
      <h1>VizViewz</h1>
    </div>
  )
 }
}

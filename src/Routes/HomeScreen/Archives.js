import React, { Component } from 'react';
import Home from './Home';
import './Header.css';
import Header from './Header';
import SentinalImage from '../Products/Sentinal.JPG';
import ConsultantImage from '../Products/Consultant.JPG';



export default class Archives extends Component {
 render(){
   var style={
     textAlign: "center",
     color:"red",
     fontFamily: "monospace",
     fontSize: "24",
     backgroundImage: "url("+SentinalImage+")",
     opacity: "0.75"
   };

   return(
     <div className="Archives">
      <Header />
        <div style={style}>
        <label>Products</label>
        <h2>Sentinal</h2>
        <p>Gaurding you when you need</p>
        <img src={SentinalImage} width={300} height={225}/>
        </div>

        <div style={{textAlign: "center"}}>
        <p>Product has USP of being the sole product designed keeping in mind<br></br>
        <li>Problems faced due busy schedule </li>
        <li>Problems faced due lack of alertness</li></p>
        </div>

     </div>
  )
 }
}

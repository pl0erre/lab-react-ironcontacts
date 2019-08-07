import React, {Component} from 'react';
import '../css/Celebr.css'

function Celebr(props) {

  return(
    <div className="card">
      <img src={props.image}/>
      <h3>{props.name}</h3>
      <h4>Popularity: {props.popularity}</h4>
      <button onClick={()=> {props.deleteCeleb(props.index)} }>Delete</button>
    </div>
  );
}

export default Celebr;
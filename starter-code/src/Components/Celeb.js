import React, {Component} from 'react';
import '../css/Celeb.css'

class Celeb extends Component {
  render() {
    return(
      <div className="card">
        <img src={this.props.image}/>
        <h3>Name: {this.props.name}</h3>
        <h4>Popularity: {this.props.popularity}</h4>
        <button>Delete</button>
      </div>
    );
  }
}

export default Celeb;
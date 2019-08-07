import React, { Component } from "react";
import "./App.css";
import Celeb from "./Components/Celeb";
import celebrities from './contacts.json'

class App extends Component {

  constructor() {
    super();
    this.state = {
      celebrities: celebrities,
      celebCopy: [...celebrities],
      search: ""
    }
  }

  searchCeleb(event) {
    this.setState({search: event.target.value})
  }

  render() {

    let filteredCelebs = this.state.celebCopy.filter((celeb) => {
      return celeb.name.indexOf(this.state.search !== -1)
    });

    let singleCeleb = filteredCelebs.map((celeb) => 
      <Celeb 
        name={celeb.name}
        image={celeb.pictureUrl}
        popularity={celeb.popularity}
      />
    )
    
    return (
      <div className="App">
        <header className="App-header">
        </header>
        <h2>Checkout these celebrities</h2>
        <input onChange={this.searchCeleb.bind(this)} value={this.state.search} type="text" placeholder="Search a Celebrity"></input>
        <div className="cardContainer">
          {singleCeleb}
        </div>
      </div>
    );
  }
}

export default App;

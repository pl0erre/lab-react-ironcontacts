import React, { Component } from "react";
import "./App.css";
import Celebr from "./Components/Celebr";
import celebrities from './contacts.json'

class App extends Component {

  constructor(props) {
    super(props)
  }

  state = {
    celebrities: celebrities,
    searchedCelebs: celebrities
  }

  search = (event) => {

    let searchTerm = event.target.value;
    let searchedCelebs = this.state.celebrities.filter((celeb) => (
      celeb.name.indexOf(searchTerm) >= 0
    ))

    this.setState({searchedCelebs: searchedCelebs})
  }

  delete = (index) => {
    let celebritiesCopy = [...this.state.searchedCelebs];
    celebritiesCopy.splice(index, 1);
    this.setState({searchedCelebs: celebritiesCopy});
  }


  render() {

    let celebrityComponents = this.state.searchedCelebs.map((celeb, index) => {
      return (
        <Celebr
          index={index}
          deleteCeleb={this.delete}
          name={celeb.name}
          image={celeb.pictureUrl}
          popularity={celeb.popularity}
        />
      )
    });
    
    return (
      <div className="App">
        <header className="App-header">
        </header>

        <h2>Checkout these celebrities</h2>
        <input onChange={this.search} type="text" placeholder="Search a Celebrity" />
        <div className="cardContainer">
          {celebrityComponents}
        </div>

      </div>
    );
  }
}

export default App;

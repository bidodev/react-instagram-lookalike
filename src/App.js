import React, { Component } from 'react';

import Header from './components/header/header-component';
import Profile from './components/profile/profile-component';
import Content from './components/main/inner-component';

// load our data
// In the future we might add an API / MongoDB or MySQL
import data from './data.json';

class App extends Component {
  constructor() {
    super();
    this.state = {
      pets: data,
      searchField: '',
    };
  }

  handleChange = (event) => {
    this.setState({ searchField: event.target.value });
  };

  
  render() {
    const { pets, searchField } = this.state;

    const filteredPets = pets.filter((pet) => pet.race.toLowerCase().includes(searchField.toLowerCase()));

    return (
      // wrapping div-container
      <div className="App">
        <Header handleChange={this.handleChange} />
        <div className="main">
          <Profile />
          <Content data={filteredPets} />
        </div>
      </div>
    );
  }
}

export default App;
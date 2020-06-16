import React, { Component } from 'react';
import './sass/main.scss';
import "./components/icons/font-awesome-library";

import Header from './components/header/header-component';
import Profile from './components/profile/profile-component';
import Content from './components/inner/inner-component';


import * as content from './data.json';

class App extends Component {
  constructor() {
    super();
    this.state = {
      content
    };
  }
  render() {
    return (
      // wrapping div-container
      <div className="App">
        <Header />
        <div className="main">
          <Profile />
          <Content data={this.state.content.default} />
        </div>
      </div>
    );
  }
}

export default App;

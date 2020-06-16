import React, { Component } from "react";
import './sass/main.scss'

import Header from "./components/header/header-component";
import Profile from "./components/profile/profile-component";
import Content from "./components/inner/inner-component";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Profile />
        <Content />
      </div>
    );
  }
}

export default App;
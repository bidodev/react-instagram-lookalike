import React, { Component } from 'react';
import axios from 'axios';

import Header from './components/header/header-component';
import Profile from './components/profile/profile-component';
import Content from './components/main/content/content.component';

import Loading from './components/loader/loading-spinner.component';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: {},
      searchField: '',
      isLoading: true,
    };
  }

  handleChange = (event) => {
    this.setState({ searchField: event.target.value });
  };

  componentDidMount() {
    const URL_API = 'https://my-json-server.typicode.com/bidodev/api-insta/db';

    axios(URL_API).then((res) => {
      const { ...props } = res.data;
      this.setState({ data: { ...props }, isLoading: false });
    });
  }

  handleChange = (event) => {
    this.setState({ searchField: event.target.value });
  };

  render() {
    const { ...dataProps } = this.state.data;

    return (
      <div className="App">
        <Header handleChange={this.handleChange} />

        <div className="main">
          <Profile />
          {this.state.isLoading ? <Loading /> : <Content {...dataProps} />}
        </div>
      </div>
    );
  }
}

export default App;

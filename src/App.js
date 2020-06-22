import React, { Component } from 'react';
import axios from 'axios';

import Header from './components/header/header-component';
import Profile from './components/profile/profile-component';
import Content from './components/main/content/content.component';

class App extends Component {
  constructor() {
    super();

    this.state = {
      data: {
        posts: [],
        videos: [],
        tags: [],
      },
      searchField: '',
    };
  }

  handleChange = (event) => {
    this.setState({ searchField: event.target.value });
  };

  componentDidMount() {
    const URL_API = 'https://my-json-server.typicode.com/bidodev/api-insta/db';

    axios(URL_API).then((res) => {
      const { posts, videos, tags } = res.data;
      this.setState({ data: { posts, videos, tags } });
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
          <Content {...dataProps} />
        </div>
      </div>
    );
  }
}

export default App;

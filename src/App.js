import React, { Component } from 'react';
import axios from 'axios';

// import configs
import { URL_API } from './config'

// import components
import Header from './components/header/header-component';
import Profile from './components/profile/profile-component';
import Content from './components/main/content/content.component';
import Loading from './components/loader/spinner.component';

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
    axios(URL_API).then((res) => {
      const { ...props } = res.data;
      this.setState({ data: { ...props }, isLoading: false });
    });
  }

  render() {
    const { isLoading, data } = this.state;

    return (
      <div className="App">
        <Header handleChange={this.handleChange} />

        <div className="main">
          <Profile />
          {isLoading ? <Loading /> : <Content {...data} />}
        </div>
      </div>
    );
  }
}

export default App;

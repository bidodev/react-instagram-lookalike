import React, { Component } from 'react';
import axios from 'axios';
// import { URL_API } from './config'
import InfiniteScroll from 'react-infinite-scroll-component';

import Header from './components/header/header-component';
import Profile from './components/profile/profile-component';
import Content from './components/main/content/content.component';

import Loading from './components/loader/spinner.component';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      hasMore: true,
      isLoading: true,
      slicedItems: [],
      data: [],
    };
  }

  handleChange = (event) => {
    this.setState({ searchField: event.target.value });
  };

  componentDidMount() {
    axios('https://my-json-server.typicode.com/bidodev/api-insta/posts').then((res) => {
      const slicedItems = res.data.slice(0, 9);
      this.setState({ data: res.data, slicedItems });
    });
  }

  fetchMoreData = () => {
    const { data, slicedItems } = this.state;

    if (slicedItems.length >= data.length) {
      this.setState({ hasMore: false });
      return;
    }

    setTimeout(() => {
      const newItems = data.slice(slicedItems.length, slicedItems.length + 9);
      this.setState({ slicedItems: slicedItems.concat(newItems) });
    }, 1000);
  };

  render() {
    const { isLoading, slicedItems } = this.state;

    return (
      <div className="App">
        <Header handleChange={this.handleChange} />
        <div className="main">
          <Profile />
          <InfiniteScroll
            dataLength={this.state.slicedItems.length}
            next={this.fetchMoreData}
            hasMore={this.state.hasMore}
            loader={<Loading/>}
          >
          <Content posts={slicedItems} videos={slicedItems} tags={slicedItems}/>
          </InfiniteScroll>
        </div>
      </div>
    );
  }
}

export default App;

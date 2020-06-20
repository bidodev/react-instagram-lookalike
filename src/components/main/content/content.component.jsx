import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import CardList from '../card-list/card-list-component';
import './content-component.styles.scss';

const Content = ({ posts, videos, tagged }) => (
  <Router>
    <div className="navigation">
      <ul>
        <li>
          <FontAwesomeIcon icon="stream" />
          <Link to="/">Posts</Link>
        </li>
        <li>
          <FontAwesomeIcon icon="video" />
          <Link to="/igtv">Igtv</Link>
        </li>
        <li>
          <FontAwesomeIcon icon="id-card-alt" />
          <Link to="/tagged">Tagged</Link>
        </li>
      </ul>

      <Switch>
        <Route exact path="/">
          <CardList cards={posts} />
        </Route>
        <Route path="/igtv">
          <CardList cards={videos} />
        </Route>
        <Route path="/tagged">
          <CardList cards={tagged} />
        </Route>
      </Switch>
    </div>
  </Router>
);
export default Content;

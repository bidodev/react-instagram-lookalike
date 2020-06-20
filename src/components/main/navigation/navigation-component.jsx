import React from 'react';
import './navigation-component-styles.scss';
import CardList from '../card-list/card-list-component';
//import NavigationItem from './navigation-item/navigation-item.component'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

 
const Navigation = ({cards}) => {
  return (
    <Router>
    <div className="navigation">
        <ul>
          <li><FontAwesomeIcon icon="stream" /><Link to="/">Posts</Link></li>
          <li><FontAwesomeIcon icon="video" /><Link to="/igtv">Igtv</Link></li>
          <li><FontAwesomeIcon icon="id-card-alt" /><Link to="/tagged">Tagged</Link></li>
        </ul>
        <Switch>
          <Route exact path="/">
            <CardList cards={cards} /> 
          </Route>
          {/* <Route path="/igtv">
            <Igtv />
          </Route>
          <Route path="/tagged">
            <Tagged />
          </Route> */}
        </Switch>
      </div>
    </Router>
  );
};
{/* <CardList cards={cards} /> */}
export default Navigation;

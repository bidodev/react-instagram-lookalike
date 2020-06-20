import React from 'react';
import './navigation-component-styles.scss';
//import NavigationItem from './navigation-item/navigation-item.component'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

const Posts = () => {
  return ( <div>Posts</div> );
}
const Igtv = () => {
  return ( <div>Igtv</div> );
}
const Tagged = () => {
  return ( <div>Tagged</div> );
}
 


const Navigation = () => {
  return (
    <Router>
    <div className="navigation">
        <ul>
          <li>
            <Link to="/">Posts</Link>
          </li>
          <li>
            <Link to="/igtv">Igtv</Link>
          </li>
          <li>
            <Link to="/tagged">Tagged</Link>
          </li>
        </ul>
        <Switch>
          <Route exact path="/">
            <Posts />
          </Route>
          <Route path="/igtv">
            <Igtv />
          </Route>
          <Route path="/tagged">
            <Tagged />
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

export default Navigation;

{/* <NavigationItem className={"active"} iconName={"stream"} title={"Posts"} />
<NavigationItem iconName={"video"} title={"Igtv"} />
<NavigationItem iconName={"id-card-alt"} title={"Tagged"} /> */}
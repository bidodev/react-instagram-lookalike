import React from 'react';
import './header-component.styles.scss';
import Search from './search/search-component';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Header = (props) => {
  return (
    <div className="header">
      <div className="header-logo">
        <img src="./img/instagram.png" alt="logo" />
      </div>

      <Search handleChange={props.handleChange} placeholder="Search"/>
      <ul className="header-icons">
        <div>
          <FontAwesomeIcon icon="home" className="icon" />
          <FontAwesomeIcon icon="paper-plane" className="icon" />
          <FontAwesomeIcon icon="compass" className="icon" />
          <FontAwesomeIcon icon="heart" className="icon" />
          <img src="./img/avatar.jpg" alt="avatar-nav"/>
        </div>
      </ul>
    </div>
  );
};

export default Header;

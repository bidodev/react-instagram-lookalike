import React from 'react';
import './header-component.styles.scss';
import Search from './search/search-component';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Header = ({handleChange}) => {
  return (
    <div className="header">
      <div className="header-logo">
        <img src="./img/instagram.png" alt="logo" />
      </div>

      <Search handleChange={handleChange} placeholder="Search"/>
      <ul className="header-icons">
        <div>
          <FontAwesomeIcon icon="home" className="icon" />
          <FontAwesomeIcon icon={['far', 'paper-plane']} className="icon" />
          <FontAwesomeIcon icon={['far', 'compass']} className="icon" />
          <FontAwesomeIcon icon={['far', 'heart']} className="icon" />
          <img src="./img/avatar.jpg" alt="avatar-nav"/>
        </div>
      </ul>
    </div>
  );
};

export default Header;

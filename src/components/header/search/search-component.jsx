import React from 'react';
import './searc-component.styles.scss'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

//functional components does not have access to state and lifecycle methods.
//it's just a componenet which get some props and return some html.
const Search = ({ placeholder, handleChange }) => {
  return (
    <div className="search">
      <span><FontAwesomeIcon icon="search"/></span>
      <input className="header-search" type="search" placeholder={placeholder} onChange={handleChange} />
    </div>
  );
};

export default Search;

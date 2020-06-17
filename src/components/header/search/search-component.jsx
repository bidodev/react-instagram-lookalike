import React from 'react';
import './searc-component.styles.scss'

//functional components does not have access to state and lifecycle methods.
//it's just a componenet which get some props and return some html.
const Search = ({ placeholder, handleChange }) => {
  return (
    <div class="search">
      <span class="fa fa-search"></span>
      <input className="header-search" type="search" placeholder={placeholder} onChange={handleChange} />
    </div>
  );
};

export default Search;

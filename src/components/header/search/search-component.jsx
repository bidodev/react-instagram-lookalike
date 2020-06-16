import React from 'react';

//functional components does not have access to state and lifecycle methods.
//it's just a componenet which get some props and return some html.
const Search = ({placeholder, handleChange}) => {
  return (
    <input className="header-search"
      type="search"
      placeholder={placeholder}
      onChange={handleChange}
    />
  );
};

export default Search;
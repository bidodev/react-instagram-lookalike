import React from 'react';
import './inner-component.scss';

import Navigation from './navigation/navigation-component';

const Content = ({data}) => {
  return (
    <div className="inner-content">
      <Navigation cards={data}/>
    </div>
  );
};

export default Content;

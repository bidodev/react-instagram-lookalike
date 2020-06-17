import React from 'react';
import './inner-component.scss';
import Navigation from './navigation/navigation-component';
import CardList from './card-list/card-list-component';

const Content = (props) => {
  return (
    <div className="inner-content">
      <Navigation />
      <CardList cards={props.data} />
    </div>
  );
};

export default Content;

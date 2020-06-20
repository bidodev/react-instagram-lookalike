import React from 'react';
import './inner-component.scss';
import Navigation from './navigation/navigation-component';
import CardList from './card-list/card-list-component';

const Content = ({data}) => {
  return (
    <div className="inner-content">
      <Navigation />
      <CardList cards={data} />
    </div>
  );
};

export default Content;

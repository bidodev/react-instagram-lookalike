import React from 'react';
import './card-list-component-styles.scss';

// import Card component
import Card from '../card/card-component';

const CardList = (props) => {
  return (
    <div className="card-list">
      {props.cards.map((card) => (
        <Card key={card.id} card={card} />
      ))}
    </div>
  );
};

export default CardList;

import React from 'react';
import './card-list-component-styles.scss';

// import Card component
import Card from '../card/card-component';

const CardList = ({ cards }) => {
  console.log(cards)
  return (
    <div className="card-list">
      {cards.map((card) => {
        return (
          <Card key={`${card.race + card.id}`} card={card}/>
        )
      })}
    </div>
  );
};

export default CardList;

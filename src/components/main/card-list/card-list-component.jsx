import React from 'react';
import './card-list-component-styles.scss';

// import Card component
import Card from '../card/card-component';

const CardList = ({ cards }) => {
  const { data, url } = cards;
  console.log(cards)
  return (
    <div className="card-list">
      {data.map((card) => (
        <Card key={card.id} card={card} url={url}/>
      ))}
    </div>
  );
};

export default CardList;

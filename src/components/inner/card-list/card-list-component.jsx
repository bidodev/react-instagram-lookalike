import React, { Component } from 'react'
import './card-list-component-styles.scss'

import Card from '../card/card-component';

class CardList extends Component {
    render() {
        return (
            <div className="card-list">
                {this.props.cards.map(card => <Card key={card.id}card={card}/>)}
            </div>
        )
    }
}
export default CardList;
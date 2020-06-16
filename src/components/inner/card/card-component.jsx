import React, { Component } from 'react'
import './card-component-styles.scss'

class Card extends Component {
    render() {
        return (
            <div className="card">
                 <img src={`${this.props.card.url}-${this.props.card.id}.png`} alt={this.props.card.name}/>
            </div>
        )
    }
}
export default Card;
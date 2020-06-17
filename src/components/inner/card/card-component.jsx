import React, { Component } from 'react';
import './card-component-styles.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class Card extends Component {
  constructor() {
    super();

    //this component is statefull, but only this component care about the this state,
    //therefore we don't need to make component drilling.
    this.state = {
      isHovering: false,
    };
  }

  handleMouseHover = () => {
    this.setState(this.toggleHoverState);
  };

  toggleHoverState = (state) => {
    return {
      isHovering: !state.isHovering,
    };
  };
  render() {
    const { url, id, name, race, likes, comments } = this.props.card;
    const imgPath = `${url}${race}s/${id}.png`

    return (
      <React.Fragment>
        <div className="card" onMouseEnter={this.handleMouseHover} onMouseLeave={this.handleMouseHover}>
          <img key={id} src={imgPath} alt={name} />
          {this.state.isHovering && <span><FontAwesomeIcon icon="heart" className="icon" />{likes} <FontAwesomeIcon icon="comments" className="icon" />{comments}</span>}
        </div>
      </React.Fragment>
    );
  }
}
export default Card;

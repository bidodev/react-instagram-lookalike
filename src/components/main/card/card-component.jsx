import React, { Component } from 'react';
import './card-component-styles.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class Card extends Component {
  constructor(props) {
    super(props);

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
    const { card, url } = this.props;
    const { id, name, race, likes, comments } = card;

    const imgPath = `${url}${race}s/${id}.png`;
    console.log(imgPath)

    return (
      <React.Fragment>
        <div className="card" onMouseEnter={this.handleMouseHover} onMouseLeave={this.handleMouseHover}>
          <img key={id} src={imgPath} alt={name} />
          {this.state.isHovering && (
            <span>
              <FontAwesomeIcon icon={['fas', 'heart']} />
              {likes} <FontAwesomeIcon icon="comments" />
              {comments}
            </span>
          )}
        </div>
      </React.Fragment>
    );
  }
}
export default Card;

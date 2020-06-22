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
    const { id, name, likes, comments, url } = this.props.card;

    return (
      <React.Fragment>
        <div className="card" onMouseEnter={this.handleMouseHover} onMouseLeave={this.handleMouseHover}>
          <img key={id} src={url} alt={name} />
          {this.state.isHovering && (
            <div>
              <li>
                <FontAwesomeIcon icon={['fas', 'heart']} /> <span>{likes}</span>
              </li>
              <li><FontAwesomeIcon icon="comments" /><span>{comments}</span>
</li>
            </div>
          )}
        </div>
      </React.Fragment>
    );
  }
}
export default Card;

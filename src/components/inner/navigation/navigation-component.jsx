import React from 'react';
import './navigation-component-styles.scss';

const Navigation = () => {
  return (
    <div className="navigation">
      <ul>
        <li className="active"><i className="fas fa-stream"></i>Posts</li>
        <li><i className="fas fa-video"></i>Igtv</li>
        <li><i className="fas fa-id-card-alt"></i>Tagged</li>
        
      </ul>
    </div>
  );
};

export default Navigation;

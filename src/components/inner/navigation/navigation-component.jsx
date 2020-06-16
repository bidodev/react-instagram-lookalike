import React from 'react';
import './navigation-component-styles.scss';

const Navigation = () => {
  return (
    <div className="navigation">
      <ul>
        <li className="active"><i class="fas fa-stream"></i>Posts</li>
        <li><i class="fas fa-video"></i>Igtv</li>
        <li><i class="fas fa-id-card-alt"></i>Tagged</li>
      </ul>
    </div>
  );
};

export default Navigation;

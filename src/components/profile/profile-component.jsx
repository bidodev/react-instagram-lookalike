import React from 'react';
import './profile-component-styles.scss';
import Emoji from '../emojis/emojis-component';

const Profile = () => {
  return (
    <div className="profile">
      <div className="profile-img">
        <img src="./img/profile.jpg" alt="avatar-nav" />
      </div>
      <aside className="profile-aside">
        <div className="profile-aside-buttons">
          <h2>pubitypets</h2>
          <div>b</div>
          <div>c</div>
          <div>d</div>
          <div>e</div>
        </div>
        <div className="profile-aside-stats">
          <div>a</div>
          <div>b</div>
          <div>c</div>
        </div>
        <div className="profile-aside-description">
          <h3>Pubity Pets</h3>
          <li>
            <Emoji symbol="🐶" label="beer" />
            Posting the best Animal videos on instagram <Emoji symbol="🙊" label="monkey" />
          </li>
          <li>
            <Emoji symbol="🐱" label="tiger" />
            Funny videos
          </li>
          <li>
            <Emoji symbol="📧" label="contact" />
            contact - pubitypets@gmail.com
          </li>
          <li>
            <Emoji symbol="⬇" label="arrow-down" /> Submit your videos below <Emoji symbol="⬇" label="arrow-down" />
          </li>
          <li>
            <a href="pubityvideos.com">pubityvideos.com</a>{' '}
          </li>
        </div>
        <div className="profile-aside-followed">Followed by pubity and stacyseven</div>
      </aside>
    </div>
  );
};

export default Profile;

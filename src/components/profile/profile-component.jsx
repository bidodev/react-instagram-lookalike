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
          <button type="button">Follow</button>
        </div>
        <div className="profile-aside-stats">
        <ul>
          <li>674<span>posts</span></li>
          <li>1.9m<span>followers</span></li>
          <li>58<span>following</span></li>
          </ul>
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
            <Emoji symbol="⬇️" label="arrow-down" /> Submit your videos below <Emoji symbol="⬇️" label="arrow-down" />
          </li>
          <li>
            <a href="https://www.pubityvideos.com/" rel="noopener noreferrer" target="_blank">pubityvideos.com</a>{' '}
          </li>
        </div>
        <div className="profile-aside-followed">Followed by pubity and stacyseven</div>
      </aside>
    </div>
  );
};

export default Profile;

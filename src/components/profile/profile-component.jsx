import React from 'react'
import './profile-component-styles.scss'

const Profile = () => {
    return (
        <div className="profile">
            <div className="profile-img">
            <img src="./img/profile.jpg" alt="avatar-nav" />
            </div>
            <aside className="profile-aside">
                Hello Aside
            </aside>
            
        </div>
    );
}
 
export default Profile;
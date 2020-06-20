import React from 'react';
import './navigation-component-styles.scss';
import NavigationItem from './navigation-item/navigation-item.component'

const Navigation = () => {
  return (
    <div className="navigation">
      <ul>
        <NavigationItem className={"active"} iconName={"stream"} title={"posts"} />
        <NavigationItem iconName={"video"} title={"Igtv"} />
        <NavigationItem iconName={"id-card-alt"} title={"Tagged"} />
      </ul>
    </div>
  );
};

export default Navigation;

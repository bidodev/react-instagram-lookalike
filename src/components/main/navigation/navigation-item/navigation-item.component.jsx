import React from 'react';



const NavigationItem = ({ className, title, iconName }) => {
  return (
    <li className={className}><FontAwesomeIcon icon={iconName} />{title}</li>
  );
};

export default NavigationItem;

import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const NavigationItem = ({ className, title, iconName }) => {
  return (
    <li className={className}><FontAwesomeIcon icon={iconName} />{title}</li>
  );
};

export default NavigationItem;

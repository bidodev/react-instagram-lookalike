import React from "react";
import './spinner.styles.scss'

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Spinner = () => (
    <div className="loading">
      <FontAwesomeIcon icon="spinner" className="icon" spin />
    </div>
  );

export default Spinner;
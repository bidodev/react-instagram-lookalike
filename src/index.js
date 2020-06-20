import React from 'react';
import ReactDOM from 'react-dom';

//load our main sass
import './sass/main.scss';

//load fontawesome library
import './components/icons/font-awesome-library';

//load our App controller
import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

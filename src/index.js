import React from 'react';
import ReactDOM from 'react-dom';
import { Game } from './Pages/Game/Index';
import reportWebVitals from './reportWebVitals';

import './index.scss';

ReactDOM.render(
  <React.StrictMode>
    <Game />
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();

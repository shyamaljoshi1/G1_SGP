import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
<<<<<<< HEAD
import { BrowserRouter } from 'react-router-dom'

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
=======
import reportWebVitals from './reportWebVitals';
import {BrowserRouter as Router} from 'react-router-dom'

ReactDOM.render(
  <React.StrictMode>
  <Router>
    <App />
  </Router>
  </React.StrictMode>,
>>>>>>> e9f065a9591933e526faaa8670bd0956c69421a0
  document.getElementById('root')
);

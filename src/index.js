import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './components/App';
import EVENT_LIST from './data/eventData.json';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';

ReactDOM.render(
  <BrowserRouter>
    <App pets={EVENT_LIST} /> </BrowserRouter>,
  document.getElementById('root')

);



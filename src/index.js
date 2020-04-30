import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter} from 'react-router-dom';
import Header from './components/Header/Header.component'

ReactDOM.render(
  <BrowserRouter>
    <React.StrictMode>
      <Header />
        <App />
    </React.StrictMode>
  </BrowserRouter>,
  document.getElementById('root')
);
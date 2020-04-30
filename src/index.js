import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter} from 'react-router-dom';
import Header from './components/Header/Header.component'
import Footer from './components/Footer/Footer.component';

ReactDOM.render(
  <BrowserRouter>
    <React.StrictMode>
      <Header />
        <App />
      <Footer />
    </React.StrictMode>
  </BrowserRouter>,
  document.getElementById('root')
);
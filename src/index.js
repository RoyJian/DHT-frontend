import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Dht from './Dht'
import Weather from './Weather'
import 'bulma/css/bulma.css'
//import registerServiceWorker from './registerServiceWorker';

//https://cors-anywhere.herokuapp.com/roy-lab.tk/apiDHT

ReactDOM.render(
  <React.StrictMode >
    <App />
    <Dht />
  </React.StrictMode>
  ,document.getElementById('root')
);





// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA



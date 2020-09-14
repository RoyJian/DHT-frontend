import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import 'bulma/css/bulma.css'
//import registerServiceWorker from './registerServiceWorker';

//https://cors-anywhere.herokuapp.com/roy-lab.tk/apiDHT
fetch('https://cors-anywhere.herokuapp.com/roy-lab.tk/apiDHT')//測試階段
    .then((response) => {
        console.log(response)
        return response.json()
        //return response.text()
    }).then((myJson) => {
        console.log(myJson)
    })
function tick() {
  
  ReactDOM.render(
    <React.StrictMode >
      <App date={new Date()}  />
    </React.StrictMode>
    ,document.getElementById('root')
  );
  
  //registerServiceWorker();
}

// setInterval(tick,1000);
ReactDOM.render(
  <React.StrictMode >
    <App />
  </React.StrictMode>
  ,document.getElementById('root')
);

/*let user ="Roy";
function tick() {
  const element = (
    <div>
      <h1>Hello,{user+"."}</h1>
      <h2>現在是{new Date().toLocaleTimeString()}</h2>
    </div>
  );
  ReactDOM.render(element, document.getElementById('root'));
}*/





// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA



import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import 'bulma/css/bulma.css'
//import registerServiceWorker from './registerServiceWorker';

//https://cors-anywhere.herokuapp.com/roy-lab.tk/apiDHT
fetch('https://roy-lab.tk/apiDHT',{ method:'GET',headers:{
'Accept': '*/*',
'method':'GET',
'Accept-Encoding': 'gzip, deflate, br',
'scheme': 'https',
'Accept-Language': 'zh-TW,zh;q=0.9,en-US;q=0.8,en;q=0.7',
'Access-Control-Expose-Headers': 'access-control-allow-origin',
'Connection' : 'keep-alive',
'Sec-Fetch-Dest': 'document',
'Sec-Fetch-Mode': 'navigate',
'Content-Type': 'application/expect-ct-report+json',  
'Host':'roy-lab.tk/apiDHT',
'Sec-Fetch-Site': 'none',
'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_0) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/85.0.4183.102 Safari/537.36'
}})//測試階段
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
      <App />
    </React.StrictMode>
    ,document.getElementById('root')
  );
  
  //registerServiceWorker();
}

setInterval(tick,1000);

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



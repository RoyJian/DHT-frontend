/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import "bulma/css/bulma.css";
import "@fortawesome/fontawesome-free/css/all.css"
//import logo from './logo.svg';
import "./App.css";

//let DHT=http://0.0.0.0:8000/DHT
let user = "Roy";
const { createProxyMiddleware } = require('http-proxy-middleware');
createProxyMiddleware({
  target: 'https://roy-lab.tk/apiDHT',
  changeOrigin: true
});
class App extends React.Component {
  //Component本身自我更新
  constructor(props) {
    super(props);
    this.state = {date: new Date(),dht: []};
  }

  //加入生命週期方法
  //componentDidMount()在 component 被 render 到 DOM 之後才會執行
  componentDidMount() {
    this.timerID = setInterval(
      () => this.tick(),
      1000
    );
    this.timerIDtoDHT = setInterval(
      () => this.tickToDHT(),
      5000
    );
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
    clearInterval(this.timerIDtoDHT);
  }
  
  tick() {
    this.setState({
      date: new Date()
    });
    
  }
  //https://cors-anywhere.herokuapp.com/roy-lab.tk/apiDHT
  tickToDHT(){
    fetch('https://roy-lab.tk/apiDHT')//測試階段
    .then((response) => {
        console.log(response)
        return response.json()
        //return response.text()
    }).then((myJson) => {
        console.log(myJson)
        this.setState({
          dht: myJson
        });
    })

  }

  
  render(){
    return (
      <div>
        <script crossOrigin="true" src="..."></script>
        <section className="hero is-primary">
          <div className="hero-body">
            <div className="container">
              <h1 className="title ">Hello,{user}</h1>
              <h2 className="subtitle  ">
                現在的時間是{this.state.date.toLocaleTimeString()} 
                溫度是{this.state.dht["H"]}
                {/* 呼叫上面更新的時間 */}
              </h2>
            </div>
          </div>
        </section>
        <div>
          {/* <p>{this.x}</p> */}
        </div>
      </div>
    );

  }
}

export default App;

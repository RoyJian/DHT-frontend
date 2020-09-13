/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import "bulma/css/bulma.css";
import "@fortawesome/fontawesome-free/css/all.css"
//import logo from './logo.svg';
import "./App.css";

//let DHT=http://0.0.0.0:8000/DHT
let user = "Roy";
function App() {
  return (
    
    <div>
      <script crossOrigin="true" src="..."></script>
      <section className="hero is-primary">
        <div className="hero-body">
          <div className="container">
            <h1 className="title ">Hello,{user}</h1>
            <h2 className="subtitle  ">
              現在的時間是{new Date().toLocaleTimeString()}
            </h2>
          </div>
        </div>
      </section>
      <div>
        <p></p>
      </div>
    </div>
  );
}

export default App;

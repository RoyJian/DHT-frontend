import React from "react";
import "bulma/css/bulma.css";
import "@fortawesome/fontawesome-free/css/all.css"
import "./App.css";

class Dht extends React.Component {
    constructor(props) {
        super(props);
        this.state = { date: new Date(), dht: [] };
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
      tickToDHT() {
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
      isopen = 1;
      




    render() {
        if (this.isopen === 1) {
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
            this.isopen = 0;
          }
        return (
            <div className="tile is-ancestor mt-4">
                <div className="tile is-vertical is-8">
                    <div className="tile">
                        <div className="tile is-parent is-vertical ">
                            <article className="tile is-child notification is-link">
                                <p className="title">溫度 &thinsp; 
                                    <i className="fas fa-temperature-low"></i>
                                </p>
                                <p className="subtitle">
                                {this.state.dht["T"]}
                                </p>
                            </article>
                            <article className="tile is-child notification is-warning">
                                <p className="title">濕度 &thinsp;
                                    <i className="fas fa-tint"></i>
                                </p>
                                <p className="subtitle">
                                {this.state.dht["H"]}
                                </p>
                            </article>
                        </div>
                        <div className="tile is-parent">
                            <article className="tile is-child notification is-info">
                                <p className="title">現在時間 &thinsp;
                                    <i className="far fa-clock"></i>
                                </p>
                                <p className="subtitle">
                                    {this.state.date.toLocaleTimeString()}
                                </p>
                            </article>
                        </div>
                    </div>
                    <div className="tile is-parent">
                        <article className="tile is-child notification is-danger">
                            <p className="title">Powered by</p>
                            <p className="subtitle">Aligned with the right tile</p>
                            <div className="content">

                            </div>
                        </article>
                    </div>
                </div>
                <div className="tile is-parent">
                    <article className="tile is-child notification is-success">
                        <div className="content">
                            <p className="title">Tall tile</p>
                            <p className="subtitle">With even more content</p>
                            <div className="content">

                            </div>
                        </div>
                    </article>
                </div>
            </div>
        );




    }
}
export default Dht;
import React from "react";
import "bulma/css/bulma.css";
import "@fortawesome/fontawesome-free/css/all.css"
import "font-mfizz/dist/font-mfizz.css"
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
                                <p className="subtitle has-text-weight-semibold is-size-3">
                                {this.state.dht["T"]} 
                                °C
                                </p>
                            </article>
                            <article className="tile is-child notification is-warning">
                                <p className="title">濕度 &thinsp;
                                    <i className="fas fa-tint"></i>
                                </p>
                                <p className="subtitle has-text-weight-semibold is-size-3   ">
                                {this.state.dht["H"]}
                                <i class="fas fa-percent is-size-4"></i>
                                </p>
                        
                            </article>
                        </div>
                        <div className="tile is-parent">
                            <article className="tile is-child notification is-info">
                                <p className="title is-size-2 ">現在時間 &thinsp;
                                    <i className="far fa-clock"></i>
                                </p>
                                &thinsp;
                                <br></br>
                                <p className="is-size-2 subtitle">
                                    {this.state.date.toLocaleTimeString()}
                                </p>
                            </article>
                        </div>
                    </div>
                    <div className="tile is-parent">
                        <article className="tile is-child notification is-danger">
                            <p className="title">Powered by:</p>
                            <p className="subtitle is-size-3">
                                <i class="fab fa-react"></i>&thinsp;React
                                <br></br>
                                <i class="fab fa-python"></i>&thinsp; Python
                                <br></br>
                                <i class="icon-mongodb"></i> mongodb
                                <br></br>
                                <i class="icon-docker"></i> docker 
                            
                            
                            </p>
                            <div className="content">

                            </div>
                        </article>
                    </div>
                </div>
                <div className="tile is-parent">
                    <article className="tile is-child notification is-success">
                        <div className="content">
                            <p className="title is-size-2">成員&thinsp;
                                <i class="fas fa-user"></i>
                            </p>
                        </div>
                        <div className="subtitle is-size-3">
                            <p>Roy</p>
                        </div>
                        <div className="subtitle is-size-3">
                            <p>Danny</p>
                        </div>
                        <div className="subtitle is-size-3">
                            <p>Bially</p>
                        </div>
                    
                    </article>
                </div>
            </div>
        );




    }
}
export default Dht;
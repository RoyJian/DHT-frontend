import React from "react";
import "bulma/css/bulma.css";
import "@fortawesome/fontawesome-free/css/all.css"
import "font-mfizz/dist/font-mfizz.css"
import "./App.css";

class Weather extends React.Component{
    constructor(props) {
        super(props);
        this.state = { TaiwanWeather: 0.0 }
    }
    componentDidMount(){
        fetch('https://opendata.cwb.gov.tw/api/v1/rest/datastore/O-A0001-001?Authorization=CWB-62146C77-4D34-4DA4-A265-2E76D7C65ED4&locationName=%E9%BE%9C%E5%B1%B1')//測試階段
          .then((response) => {
            //console.log(response)
            return response.json()
            //return response.text()
          }).then((jsons) => {
            return jsons['records']['location']
          }) .then((jsonWeather)=>{
            console.log(jsonWeather[0]['weatherElement']) 
            return jsonWeather[0]['weatherElement'] 
          }).then((ArrayWeather)=>{
            this.setState({TaiwanWeather : ArrayWeather[3]['elementValue'] })
            
            
          }
          )
    }
    render(){
        
        return(
        <p>{this.state.TaiwanWeather}</p>
        )
    }
}
export default Weather;

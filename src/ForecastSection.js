import React from "react";
import WeatherIcon from "./WeatherIcon";
import "./ForecastSection.css";

export default function ForecastSection(props){
return(
 <div className="col forecastSection">
        <p>{new Date(props.info.dt*1000).getHours()}:00</p>
        <WeatherIcon code={props.info.weather[0].icon}  className="iconForecast"/>
       <p> {Math.round(props.info.main.temp)}℃</p>
        </div>

);

}
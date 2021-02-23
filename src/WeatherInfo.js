import React from "react";
import FormattedDate from "./FormattedDate";
import UnitChange from "./UnitChange";
import "./WeatherInfo.css";
export default function WeatherInfo(props){
return (
     <div className="WeatherInfo">
<h1>{props.data.city}</h1>
    <ul>
        <li className="todayInfo">
            <FormattedDate  date={props.data.date} />
            </li>
       
        
    </ul>

    <div className="row mainInfo">
<div className="main">
 <img className=" icon" src={props.data.icon} alt={props.data.description}  />
<UnitChange unit={props.data.temperature}/>
<div className="col-xs-2 text-capitalize weatherLooks">{props.data.description}    </div>
</div>
</div>
    
    
<div  className="row weatherInfo">
<div className="col-5  maxMin">High: {Math.round(props.data.max)}° | Low: {Math.round(props.data.min)}° </div>

<div className="col-3  wind">🏳 {Math.round(props.data.wind)} km/h</div>
<div className="col-3  humidity">💧 {Math.round(props.data.humidity)}%</div>
</div>
</div>
);
}

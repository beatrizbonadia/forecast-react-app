import React from "react";
import FormattedDate from "./FormattedDate";
import UnitChange from "./UnitChange";
import ForecastMain from "./ForecastMain.js";
import "./WeatherInfo.css";
import WeatherIcon from "./WeatherIcon.js";
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
 <WeatherIcon code={props.data.icon} description={props.data.description}  className="iconNow"/>
<UnitChange unit={props.data.temperature} unitMax={props.data.max} unitMin={props.data.min}/>
<div className="col-xs-2 text-capitalize weatherLooks">{props.data.description}    </div>
</div>
</div>
    
    
<div  className="row weatherInfo">


<div className="col-6 wind">🏳 {Math.round(props.data.wind)} km/h</div>
<div className="col-6 humidity">💧 {Math.round(props.data.humidity)}%</div>
</div>
<hr/>
<ForecastMain  name={props.data.city}/>

</div>
);
}

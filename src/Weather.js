import React, {useState} from 'react';
import "./Weather.css";
import axios from "axios";
export default function Weather(){

const [information, setInformation]=useState({ready:false});
function handleApi(response){
    console.log(response.data);
setInformation({
    ready:true,
    temperature: response.data.main.temp,
city:response.data.name,
humidity:response.data.main.humidity,
wind:response.data.wind.speed,
max:response.data.main.temp_max,
min:response.data.main.temp_min,
description:response.data.weather[0].description
});

}

if (information.ready) {return (<div className="Weather">
<form className="row form">
    <input className="col-4 searchCity" type="search" placeholder="Enter a city" />
    <input className="col-2 btn btn-primary submit" type="submit" value="Search"/>
    <button className="col-2 btn btn-info celsius">℃</button>
    <button className="col-2 btn btn-info farh">℉</button>
    <button className="col-2 btn btn-warning location">📍 Location</button>
</form>

    <h1>{information.city}</h1>
    <ul>
        <li className="todayInfo">Sunday, FEB 14</li>
        <li className="time">10:45 AM</li>
        
    </ul>

    <div className="row mainInfo">
<div className="col-xs-8  main">
 <img className=" icon" src="https://icons.iconarchive.com/icons/icons-land/weather/256/Sunny-icon.png" alt="Sunny" />
<strong className="col-xs-2 temperature" >{Math.round(information.temperature)}°C</strong>
<div className="col-xs-2 text-capitalize weatherLooks">{information.description}    </div>
</div>
</div>
    
    
<div  className="row weatherInfo">
<div className="col-5  maxMin">High: {Math.round(information.max)}° | Low: {Math.round(information.min)}° </div>

<div className="col-3  wind">🏳 {Math.round(information.wind)} km/h</div>
<div className="col-3  humidity">💧 {Math.round(information.humidity)}%</div>
</div>

    

    
  
    </div>);
    
}

    else{const apiKey="e3344368d6f3c228b3b3ea166c8bbbdf";
let city="Tokyo";
let url=`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

axios.get(url).then(handleApi);

return "Loading....";
}
}
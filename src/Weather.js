import React from 'react';
import "./Weather.css";
export default function Weather(){
return (

<div className="Weather">
<form className="row form">
    <input className="col-4 searchCity" type="search" placeholder="Enter a city" />
    <input className="col-2 btn btn-primary submit" type="submit" value="Search"/>
    <button className="col-2 btn btn-info celsius">℃</button>
    <button className="col-2 btn btn-info farh">℉</button>
    <button className="col-2 btn btn-warning location">📍 Location</button>
</form>

    <h1>Tokyo</h1>
    <ul>
        <li className="todayInfo">Sunday, FEB 14</li>
        <li className="time">10:45 AM</li>
        
    </ul>

    <div className="row mainInfo">
<div className="col-xs-8  main">
 <img className=" icon" src="https://icons.iconarchive.com/icons/icons-land/weather/256/Sunny-icon.png" alt="Sunny" />
<strong className="col-xs-2 temperature" >24°</strong>
<div className="col-xs-2 weatherLooks">Sunny    </div>
</div>
</div>
    
    
<div  className="row weatherInfo">
<div className="col-5  maxMin">High: 28° | Low: 22° </div>

<div className="col-3  wind">🏳 5 km/h</div>
<div className="col-3  humidity">💧 72%</div>
</div>

    

    
  
    </div>); 






}
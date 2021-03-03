import React from "react";
import "./WeatherIcon.css";

export default function WeatherIcon(props){
return ( <div className="WeatherIcon">
<img src={`http://openweathermap.org/img/wn/${props.code}@2x.png`}
alt={props.description}
className="weather-icon"
/>

</div>);


}
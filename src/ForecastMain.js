import React, {useState} from 'react';
import "./ForecastMain.css";
import ForecastSection from "./ForecastSection.js";
import axios from "axios";


export default function ForecastMain(props){
    const[load,setLoad]=useState(false);
    const[forecast, setForecast]=useState(null);
    const[icon,setIcon]=useState(null);
    function handleForecast(response){
        setForecast(response.data);
setLoad(true);
console.log(response.data);

setIcon(`http://openweathermap.org/img/wn/${response.data.list[0].weather[0].icon}@2x.png`);
    }
    
    if (load) {return (
        <div className="ForecastMain row">
            <div className="col">
        <p>{new Date(forecast.list[0].dt*1000).getHours()}:00</p>
        <img className="ForecastMain" src= {icon} alt="weather"/>
       <p> {Math.round(forecast.list[0].main.temp)}℃</p>
        </div>
            </div>);}
    else{ let apiKey="e3344368d6f3c228b3b3ea166c8bbbdf";
let url =`https://api.openweathermap.org/data/2.5/forecast?q=${props.name}&appid=${apiKey}&units=metric`;
axios.get(url).then(handleForecast);
return "Hello";}
    
   

}
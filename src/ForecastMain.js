import React, {useState} from 'react';
import "./ForecastMain.css";
import ForecastSection from "./ForecastSection.js";
import axios from "axios";


export default function ForecastMain(props){
    const[load,setLoad]=useState(false);
    const[forecast, setForecast]=useState(null);
   
    function handleForecast(response){
        setForecast(response.data);
setLoad(true);
console.log(response.data);


    }
    
    if (load && props.name === forecast.city.name) {return (
        <div className="row forecastMain ">
            <div className="col-2 forecastDisplay">
        <ForecastSection info={forecast.list[0]}/>
        </div>
        <div className="col-2 forecastDisplay ">
        <ForecastSection info={forecast.list[1]}/>
        </div>
        <div className="col-2 forecastDisplay">
        <ForecastSection info={forecast.list[2]}/>
        </div>
         <div className="col-2 forecastDisplay ">
        <ForecastSection info={forecast.list[3]}/>
        </div>
         <div className="col-2 forecastDisplay ">
        <ForecastSection info={forecast.list[4]}/>
        </div>
         <div className="col-2 forecastDisplay ">
        <ForecastSection info={forecast.list[5]}/>
        </div>
        </div>
    );}
    else{ let apiKey="e3344368d6f3c228b3b3ea166c8bbbdf";
let url =`https://api.openweathermap.org/data/2.5/forecast?q=${props.name}&appid=${apiKey}&units=metric`;
axios.get(url).then(handleForecast);
return "Hello";}
    
   

}
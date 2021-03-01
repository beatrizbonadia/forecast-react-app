import React from "react";


export default function ForecastSection(props){
return(
 <div className="col">
        <p>{new Date(props.forecastData.dt*1000).getHours()}:00</p>
        
       <p> {Math.round(props.forecastData.main.temp)}℃</p>
        </div>

);

}
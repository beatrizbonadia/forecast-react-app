import React, {useState} from "react";
import "./UnitChange.css";
export default function UnitChange(props){
const [unit, setUnit]=useState("celsius");

function handleCelsius(event){
event.preventDefault();
setUnit("celsius");

}

function handleFarh(event){
event.preventDefault();
setUnit("farh");

}

if (unit==="celsius") {
    return(
    <span>
        <form className="unitChange">
    <button className="col-2 btn btn-info celsius" onClick={handleCelsius}>℃</button>
    <button className="col-2 btn btn-info farh"  onClick={handleFarh}>℉</button>
</form>
<strong className="col-xs-2 temperature" >{Math.round(props.unit)}°C</strong>
</span>

);

}else{
let fahrenheit = (props.unit *9/5) + 32;
return(
    <span>
        <form className="unitChange">
    <button className="col-2 btn btn-info celsius" onClick={handleCelsius}>℃</button>
    <button className="col-2 btn btn-info farh"  onClick={handleFarh}>℉</button>
</form>
<strong className="col-xs-2 temperature" >{Math.round(fahrenheit)}°F</strong>
</span>

);


}


}
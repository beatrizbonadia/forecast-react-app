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
        <div>
    <span>
        <form className="unitChange">
    <button className="col-2 btn btn-info celsius" onClick={handleCelsius}>℃</button>
    <button className="col-2 btn btn-info farh"  onClick={handleFarh}>℉</button>
</form>
<strong className="col-xs-2 temperature" >{Math.round(props.unit)}°C</strong>
</span>
<div className="col-5  maxMin">High: {Math.round(props.unitMax)}° | Low: {Math.round(props.unitMin)}° </div>
</div>
);

}else{
let fahrenheit = (props.unit *9/5) + 32;
let fahrenheitMax = (props.unitMax*9/5)+32;
let fahrenheitMin = (props.unitMin*9/5)+32;
return(
    <div>
        <span>
        <form className="unitChange">
    <button className="col-2 btn btn-info celsius" onClick={handleCelsius}>℃</button>
    <button className="col-2 btn btn-info farh"  onClick={handleFarh}>℉</button>
</form>
<strong className="col-xs-2 temperature" >{Math.round(fahrenheit)}°F</strong>
</span>
<div className="col-5  maxMin">High: {Math.round(props.fahrenheitMax)}° | Low: {Math.round(props.fahrenheitMin)}° </div>

</div>

);


}


}
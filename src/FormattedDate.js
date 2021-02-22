import React from "react";
import "./FormattedDate.css";

export default function(props){
let days=["Sunday","Monday","Tuesday","Wednesday", "Thursday","Friday","Saturday"];
let months=["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Ago", "Sep", "Oct", "Nov", "Dec"];

let day= days[props.date.getDay()];
let month=months[props.date.getMonth()];
let today=props.date.getDate();
let hour=props.date.getHours();
let min=props.date.getMinutes();

if (hour<10) {hour=`0${hour}`;}
if (min<10) {min=`0${min}`; }

return(
    <div>
<ul>
        <li className="todayInfo">
           {day}, {month} {today}
            </li>
        <li className="time">{hour}:{min}</li>
        
    </ul>

    </div>
);

}
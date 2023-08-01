import React from "react";
import startIcon from "../images/star.svg";
export default function Card(props){
    let data = props
     let badgeText;
     if (data.openSpots === 0){
         badgeText = "SOLD OUT"
     }else if(data.location === "Online"){
         badgeText = "ONLINE"
     }

    return (
        <div className="card">
            {badgeText && <div className="card--badge">{badgeText}</div>}
            <img className="card--image" src={data.coverImg}/>
            <div className="card--stats">
                <img src={startIcon} className="card--star"/>
                <span>{data.stats.rating}</span>
                <span className="gray">({data.stats.reviewCount}) - </span>
                <span className="gray"> {data.location} </span>
            </div>
            <p className="card--title">{data.title}</p>
            <p className="card--price"><span className="bold">From ${data.price}</span> / person</p>
        </div>
    );
}
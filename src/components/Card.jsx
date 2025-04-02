import React from "react";
import Details from "./Details";
function Card(props){
    return(
        <div className="card">
            <div className="top">
            <h1 className="title">{props.name}</h1>
            <h2 className="date">{props.date}</h2>
            </div>
            <img className="circle-img"src={props.img}/>
            <div className="bottom">
            <Details detailInfo={props.info}/>
            <Details detailInfo={props.overview}/>
            </div>
        </div>
    );
}
export default Card;
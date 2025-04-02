import React from "react";
import Card from "./Card";
import events from "../../events";
 
function Events(){
    return (
        
        <div>
        <h1 className="heading">Events</h1>
        <div className="events-container">
        {events.map((event)=>(
        <Card
        key={event.id}
        name={event.name}
        date={event.date}
        img={event.imgURL}
        info={event.info}
        overview={event.overview} />

    )
 )}</div>
        </div>
    );
}
export default Events;
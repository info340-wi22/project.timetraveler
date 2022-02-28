import React from 'react';

function EventCard(props) {
    let name = props.event.name;
    let image = props.event.img;

    return (
        <div className="card">
            <img className="card-img-top" src={image} alt={name} />
            <div className="card-body">
                <h3 className="card-title">{name}</h3>
            </div>
        </div>
    )
}

export default function EventList(props) {
    let listEvents = props.events.map((event) => {
        let eachCard = <EventCard event={event} key={event.name}/>
        return eachCard
    });

    return (
        <div>
            <h2>Event List</h2>
            <div className="card-deck">
                {listEvents}
            </div>
        </div> 
    )
}; 
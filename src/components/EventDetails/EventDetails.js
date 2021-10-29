import React, { useEffect } from 'react';
import { useState } from 'react';
import { useParams } from 'react-router';
import useEvents from '../../hooks/useEvents';
import './EventDetails.css';

const EventDetails = () => {
    const { eventId } = useParams();
    const { events } = useEvents();
    const [item, setItem] = useState({});

    console.log(events);
    useEffect(() => {
        const eventDetailsItem = events?.find(event => event.key == eventId)
        setItem(eventDetailsItem);
    }, [eventId, events]);

    // console.log(item);
    return (
        <div className="details-card cart">
            <h3>{item?.title}</h3>
            <p>{item?.tourist}</p>
            <hr />
            <img src={item?.image} alt="event-spot" className="img-fluid" />
        </div >
    );
};

export default EventDetails;
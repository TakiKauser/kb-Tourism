import React from 'react';
import useDetails from '../../hooks/useDetails';
import './EventDetails.css';

const EventDetails = () => {
    const {item} = useDetails();

    return (
        <div className="details-card cart">
            <h3>{item?.title}</h3>
            <p>{item?.description}</p>
            <hr />
            <img src={item?.image} alt="event-spot" className="img-fluid" />
        </div >
    );
};

export default EventDetails;
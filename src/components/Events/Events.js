import React from 'react';
import { Row, Spinner } from 'react-bootstrap';
import useEvents from '../../hooks/useEvents';
import Event from '../Event/Event';
import './Events.css';

const Events = () => {
    const { events } = useEvents();
    // console.log(events);
    return (
        <div className='container my-4'>
            {
                events.length === 0 ?
                    <Spinner animation="grow" variant="dark" />
                    :
                    <Row xs={1} md={3} className="g-4">
                        {
                            events?.map(event => <Event
                                key={event._id}
                                event={event}
                            ></Event>)
                        }
                    </Row>
            }
        </div>
    );
};

export default Events;
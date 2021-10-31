import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock, faMap, faUserCircle } from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import { Card, Col } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

const Event = (props) => {
    const { _id, image, title, cost, duration, tourists, location, description } = props.event;
    // console.log(props);
    return (
        <div className='my-4'>
            <Col className='h-100 gx-3'>
                <Card className='p-2 border-0 shadow h-100'>
                    <Card.Img variant="top" src={image} width="100%" height="170px" alt="event-spot" />
                    <Card.Body className='h-100'>
                        <Card.Title>{title}</Card.Title>
                        <p className='fw-bold'>$<span className='text-primary'>{cost} </span><span className='text-secondary'>/Per Person</span></p>
                        <Card.Text className='text-secondary'>{description?.slice(0, 130)}</Card.Text>
                        <Card.Text className='text-secondary'>
                            <ul className="d-flex justify-content-around list-unstyled">
                                <li><FontAwesomeIcon icon={faClock} />
                                    <span className='m-2'>{duration} Days</span></li>
                                <li><FontAwesomeIcon icon={faUserCircle} />
                                    <span className='m-2'>{tourists}+</span></li>
                                <li><FontAwesomeIcon icon={faMap} />
                                    <span className='m-2'>{location}</span></li>
                            </ul>
                        </Card.Text>

                    </Card.Body>
                    <Card.Footer className='bg-white border-0'>
                        <NavLink to={`/event/booking/${_id}`} style={{ "textDecoration": "none" }}>
                            <button className="p-2 rounded btn-secondary">Book this Event</button>
                        </NavLink>
                    </Card.Footer>
                </Card>
            </Col>
        </div>
    );
};

export default Event;
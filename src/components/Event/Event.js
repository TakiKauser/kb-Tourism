import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock, faMap, faUserCircle } from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import { Card, Col } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

const Event = (props) => {
    const { key, image, title, cost, duration, tourists, location } = props.event;
    // console.log(props);
    return (
        <>
            <Col>
                <Card className='p-2'>
                    <Card.Img variant="top" src={image} width="100%" height="220" />
                    <Card.Body>
                        <Card.Title>{title}</Card.Title>
                        <p className='fw-bold'>$<span className='text-primary'>{cost} </span><span className='text-secondary'>/Per Person</span></p>
                        <Card.Text>
                            This is a longer card with supporting text below as a natural
                            lead-in to additional content. This content is a little bit longer.
                        </Card.Text>
                        <ul className="d-flex justify-content-around list-unstyled">
                            <li><FontAwesomeIcon icon={faClock} />
                                <span className='m-2'>{duration} Days</span></li>
                            <li><FontAwesomeIcon icon={faUserCircle} />
                                <span className='m-2'>{tourists}+</span></li>
                            <li><FontAwesomeIcon icon={faMap} />
                                <span className='m-2'>{location}</span></li>
                        </ul>
                    </Card.Body>
                    <NavLink to={`/details/event/${key}`} style={{ "textDecoration": "none" }}>
                        <button className="p-2 d-block w-100 btn-dark">Check Details for Booking</button>
                    </NavLink>
                </Card>
            </Col>
        </>
    );
};

export default Event;
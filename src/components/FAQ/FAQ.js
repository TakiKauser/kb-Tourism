import React from 'react';
import { Accordion } from 'react-bootstrap';

const FAQ = () => {
    return (
        <div className='container py-4'>
            <Accordion defaultActiveKey="0" flush>
                <Accordion.Item eventKey="0">
                    <Accordion.Header>Why are your tours so expensive?</Accordion.Header>
                    <Accordion.Body>
                        There are many variations of passages of available but majority have alteration in some by inject humour or random words.
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                    <Accordion.Header>Which payment methods are acceptable?</Accordion.Header>
                    <Accordion.Body>
                        There are many variations of passages of available but majority have alteration in some by inject humour or random words.
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="2">
                    <Accordion.Header>How to book the new tour for 2 persons?</Accordion.Header>
                    <Accordion.Body>
                        There are many variations of passages of available but majority have alteration in some by inject humour or random words.
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="3">
                    <Accordion.Header>All taxes are included in the booking prices?</Accordion.Header>
                    <Accordion.Body>
                        There are many variations of passages of available but majority have alteration in some by inject humour or random words.
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="4">
                    <Accordion.Header>I am having trouble while booking?</Accordion.Header>
                    <Accordion.Body>
                        There are many variations of passages of available but majority have alteration in some by inject humour or random words.
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="5">
                    <Accordion.Header>Is it possible to manage details through dashboard?</Accordion.Header>
                    <Accordion.Body>
                        There are many variations of passages of available but majority have alteration in some by inject humour or random words.
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="6">
                    <Accordion.Header>What is the best way to contact with the guide?</Accordion.Header>
                    <Accordion.Body>
                        There are many variations of passages of available but majority have alteration in some by inject humour or random words.
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="7">
                    <Accordion.Header>Multiple tour bookings are allowed?</Accordion.Header>
                    <Accordion.Body>
                        There are many variations of passages of available but majority have alteration in some by inject humour or random words.
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="8">
                    <Accordion.Header>I want to cancel my booking?</Accordion.Header>
                    <Accordion.Body>
                        There are many variations of passages of available but majority have alteration in some by inject humour or random words.
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
        </div>
    );
};

export default FAQ;
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Button, Form } from 'react-bootstrap';

const Contact = () => {
    return (
        <div className="container p-4">
            <h2 className='my-4'><span className="text-secondary">Contact</span> <span className="text-primary">kb-tourism</span></h2>
            <Form.Group className="mb-3" controlId="email.ControlInput1">
                <Form.Control type="email" placeholder="xyz@yahoo.com" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="email.ControlTextarea1">
                <Form.Control as="textarea" placeholder="Type your Message" rows={3} />
            </Form.Group>
            <div>
                <Button type="button" className="px-3" variant="dark">
                    <FontAwesomeIcon icon={faPaperPlane} /> Send
                </Button>
            </div>
        </div>
    );
};

export default Contact;
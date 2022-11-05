import React from 'react';
import { Button, Form } from 'react-bootstrap';
import FormContainer from './FormContainer';

const Contact = () => {
    const submitHandler = (e) => {
        e.preventDefault();
    };

    return (
        <FormContainer>
            <h2 className='my-2'>Contact me</h2>
            <Form onSubmit={submitHandler}>
                <Form.Group className="my-3" controlId="email">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" />
                </Form.Group>
                <Button className="my-2" variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
        </FormContainer>
    )
}

export default Contact;
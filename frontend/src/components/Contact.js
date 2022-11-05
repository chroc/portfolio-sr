import e from 'express';
import React from 'react';
import { Button, Container, Form } from "react-bootstrap";

const Contact = () => {
    const submitHandler = (e) => {
        e.preventDefault();
    };

    return (
        <div className='container small-container'>
            <h2 className='my-2'>Contact me</h2>
            <Form onSubmit={submitHandler}>
                <Form.Group className="mb-3" controlId="formContactMe">
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" />
                </Form.Group>
                <Button type="submit">
                    Submit
                </Button>
            </Form>
        </div>
    )
}

export default Contact;
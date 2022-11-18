import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import FormContainer from './FormContainer';
import axios from 'axios';

const Contact = () => {
    const [name, setName] = useState('');
    const [email, setEamil] = useState('');

    const submitHandler = async (e) => {
        e.preventDefault();
        
        // Request resume
        const { data } = await axios.post('/api/resume', { name, email });
    };

    return (
        <FormContainer>
            <h2 className='my-2'>Contact me</h2>
            <Form onSubmit={submitHandler} method="post">
                <Form.Group className="my-3" controlId="name">
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="text" placeholder="Enter your name" onChange={(e) => setName(e.target.value)} required/>
                </Form.Group>
                <Form.Group className="my-3" controlId="email">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter your email" onChange={(e) => setEamil(e.target.value)} required/>
                </Form.Group>
                <Button className="my-2" variant="primary" type="submit">
                    Get Resume
                </Button>
            </Form>
        </FormContainer>
    )
}

export default Contact;
import React, { useState } from 'react';
import { Button, Form, Spinner } from 'react-bootstrap';
import FormContainer from './FormContainer';
import axios from 'axios';
import LoadingBox from './LoadingBox';
import { ToastContainer, toast } from 'react-toastify';

const Contact = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [optionalMessage, setOptionalMessage] = useState('');
    const [loading, setLoading] = useState(false);
    const [disabled, setDisabled] = useState(false);

    const submitHandler = async (e) => {
        e.preventDefault();
        setLoading(true);
        setDisabled(true);

        // Request resume
        // const slicedMessage = optionalMessage.slice(0, 280);
        const { data } = await axios.post('/api/resume', { name, email, optionalMessage: optionalMessage.slice(0, 280) });

        // console.log(data);

        if (data.errorMessage) {
            toast.error(data.errorMessage, {
                position: "bottom-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            });
        } else {
            toast.success(data.message, {
                position: "bottom-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            });
        }
        // clear form
        setName('');
        setEmail('');
        setOptionalMessage('');
        e.target.reset();
        setLoading(false);
    };

    return (
        <FormContainer>
            <h2 className='my-2'>Get In Touch</h2>
            <Form onSubmit={submitHandler} method="post">
                <Form.Group className="my-3" controlId="name">
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="text" placeholder="Enter your name" onChange={(e) => setName(e.target.value)} required />
                </Form.Group>
                <Form.Group className="my-3" controlId="email">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter your email" onChange={(e) => setEmail(e.target.value)} required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="optionalMessage">
                    <Form.Label>Message (optional)</Form.Label>
                    <Form.Control as="textarea" rows={3} placeholder="Additional comments..." onChange={(e) => setOptionalMessage(e.target.value)}/>
                    <span className='charactersLeft'>{280 - optionalMessage.length} characters remaining</span>
                </Form.Group>
                <Button className="my-2" variant="primary" type="submit" disabled={disabled}>
                    Get Resume
                </Button>
            </Form>
            {loading && <LoadingBox />}
            <ToastContainer />
        </FormContainer>
    )
}

export default Contact;
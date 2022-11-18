import React from 'react';
import { Button, Card, Col, Form, Row } from 'react-bootstrap';

const Projects = () => {
    return (
        <div>
            <h2>Projects</h2>
            <Row className='my-3'>
                <Col md={4}>
                    <Card>
                        <img className='projectImg' src='./images/amazona.png' alt='mern-amazona' />
                        <Card.Body>
                            <Card.Title>Amazona</Card.Title>
                            <Card.Text>Basic Amazon ecommerce functionality using React, NodeJS and MongoDB</Card.Text>
                            <Form action="https://srojas-mern-amazona.herokuapp.com" target="_blank">
                                <Button type='submit'>View</Button>
                            </Form>
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={4}>
                    <Card>
                        <img className='projectImg' src='./images/chat-app.png' alt='mern-amazona' />
                        <Card.Body>
                            <Card.Title>Chat App</Card.Title>
                            <Card.Text>Enter your username, type a Room and start chatting. Real time chat app using Socket.IO.</Card.Text>
                            <Form action="https://srojas-chat-app.herokuapp.com" target="_blank">
                                <Button type='submit'>View</Button>
                            </Form>
                        </Card.Body>
                    </Card>
                </Col>
                
            </Row>
        </div>
    )
};

export default Projects;
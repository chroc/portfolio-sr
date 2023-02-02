import React from 'react';
import { Button, Card, Col, Form, Row } from 'react-bootstrap';

const Projects = () => {
    return (
        <div>
            <h2>Projects</h2>
            <Row className='my-3'>
                <Col md={4}>
                    <Card>
                        <Card.Img className='projectImg' src='https://res.cloudinary.com/dyoim2six/image/upload/w_1000,ar_16:9,c_fill,g_auto,e_sharpen/v1675290064/Portfolio/pozosaguaviva_dpz3dg.png' alt='pozos-aguaviva' variant='top' />
                        <Card.Body>
                            <Card.Title>Fundación Pozos de Agua Viva</Card.Title>
                            <Card.Text>Full-stack web app using the MERN stack. Friendly and responsive user interface, efficient web services</Card.Text>
                            <Form action="https://sr-pozosaguaviva.herokuapp.com/" target="_blank">
                                <Button type='submit'>View</Button>
                            </Form>
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={4}>
                    <Card>
                        <Card.Img className='projectImg' src='https://res.cloudinary.com/dyoim2six/image/upload/w_1000,ar_16:9,c_fill,g_auto,e_sharpen/v1675288740/Portfolio/almawear_gshgjr.png' alt='alma-wear' variant='top' />
                        <Card.Body>
                            <Card.Title>Alma Wear</Card.Title>
                            <Card.Text>E-commerce where you can find clothes according to your healthy lifestyle. WordPress and WooCommerce</Card.Text>
                            <Form action="https://almawear.com/" target="_blank">
                                <Button type='submit'>View</Button>
                            </Form>
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={4}>
                    <Card>
                        <Card.Img className='projectImg' src='https://res.cloudinary.com/dyoim2six/image/upload/w_1000,ar_16:9,c_fill,g_auto,e_sharpen/v1675288714/Portfolio/amazona_ticuas.png' alt='mern-amazona' variant='top' />
                        <Card.Body>
                            <Card.Title>Amazona</Card.Title>
                            <Card.Text>Basic Amazon e-commerce clone functionality using React, NodeJS and MongoDB</Card.Text>
                            <Form action="https://srojas-mern-amazona.herokuapp.com" target="_blank">
                                <Button type='submit'>View</Button>
                            </Form>
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={4}>
                    <Card>
                        <Card.Img className='projectImg' src='https://res.cloudinary.com/dyoim2six/image/upload/w_1000,ar_16:9,c_fill,g_auto,e_sharpen/v1675288714/Portfolio/chat-app_ccsvz8.png' alt='chat-app' variant='top' />
                        <Card.Body>
                            <Card.Title>Chat App</Card.Title>
                            <Card.Text>Enter your username, type a Room and start chatting. Real time chat app using Socket.IO</Card.Text>
                            <Form action="https://srojas-chat-app.herokuapp.com" target="_blank">
                                <Button type='submit'>View</Button>
                            </Form>
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={4}>
                    <Card>
                        <Card.Img className='projectImg' src='https://res.cloudinary.com/dyoim2six/image/upload/w_1000,ar_16:9,c_fill,g_auto,e_sharpen/v1675288713/Portfolio/KeeperApp_budalg.png' alt='keeper-app' variant='top' />
                        <Card.Body>
                            <Card.Title>Keeper App</Card.Title>
                            <Card.Text>Never forget an important thing, write down every detail. Note-taking service, Google Keep clone</Card.Text>
                            <Form action="https://c2wclz.csb.app/" target="_blank">
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
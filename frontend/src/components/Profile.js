import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import About from './About';

const Profile = () => {
    return (
        <div className='my-5 mx-3'>
            <Row>
                <Col>
                    <img className='my-3 profilepic' src='./images/sergioprofilepic.PNG'></img>
                    <h2 className='my-3 webtitle'>{"<Software Engineer />"}</h2>
                </Col>
                <Col>
                    <h1 className='my-3'>Hey, I'm Sergio.</h1>
                    <h4 className='my-3'>Passionate about coding.</h4>
                    <p className='description'>My sister used to say “Robots are replacing humans, it is going to be hard to find a job in the future.” But I was never worried about it; I would reply, saying “Guess who is going to build those robots then!” I have always loved technology, video games and computers, so the decision about what I wanted to be was always an easy one.</p>
                    <p>Technologies I have been working with recently:</p>
                        <Row className='my-4 techicons'>
                            <Col className='tech-box' sm={12} md={4} lg={3}>
                                <i className="fa-brands fa-3x fa-js"></i>
                                <h5 className='my-2'>JavaScript</h5>
                            </Col>
                            <Col className='tech-box' sm={12} md={4} lg={3}>
                                <i className="fa-brands fa-3x fa-react"></i>
                                <h5 className='my-2'>React</h5>
                            </Col>
                            <Col className='tech-box' sm={12} md={4} lg={3}>
                                <i className="fa-brands fa-3x fa-node"></i>
                                <h5 className='my-2'>NodeJS</h5>
                            </Col>
                            <Col className='tech-box' sm={12} md={4} lg={3}>
                                <i className="fa-solid fa-3x fa-database"></i>
                                <h5 className='my-2'>SQL/NoSQL DB</h5>
                            </Col>
                        </Row>
                </Col>
            </Row>
        </div>
    )
}

export default Profile;
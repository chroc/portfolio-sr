import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import About from './About';

const Profile = () => {
    return (
        <div className='my-5 mx-3'>
            <Row>
                <Col>
                    <img className='my-3 profilepic' src='./images/sergioprofilepic.PNG'></img>
                </Col>
                <Col>
                    <h1 className='my-3'>Hey, I'm Sergio.</h1>
                    <h4 className='my-3'>Passionate about coding.</h4>
                    <p className='description'>My sister used to say “Robots are replacing humans, it is going to be hard to find a job in the future.” But I was never worried about it; I would reply, saying “Guess who is going to build those robots then!” I have always loved technology, video games and computers, so the decision about what I wanted to be was always an easy one.</p>
                    <p>Technologies I have been working with recently:</p>
                    <Row className='my-4 techicons'>
                        <Col><i className="fa-brands fa-js"></i> JavaScript</Col>
                        <Col><i className="fa-brands fa-react"></i> React</Col>
                        <Col><i className="fa-brands fa-node"></i> NodeJS</Col>
                        <Col><i className="fa-solid fa-database"></i> SQL/NoSQL DB</Col>
                    </Row>
                </Col>
            </Row>

        </div>
    )
}

export default Profile;
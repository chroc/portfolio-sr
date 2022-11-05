import React from 'react'
import { Col, Row } from 'react-bootstrap';

const About = () => {
    return (
        <div className='my-3 mx-3 justify-content-md-center'>
            <Row>
                <Col>
                    <h2 className='my-2'>About me</h2>
                    <div className='my-3 aboutdesc'>
                        <p>I consider myself as a full stack web developer with a little bit more experience in the back end. I enjoy working on projects where I can be part of a team, brainstorm and see our ideas become reality.</p>
                        <p><strong>What would I bring to a role working as a developer?</strong></p>
                        <p>I will bring a set of technical skills, experience plus good energy that will add value to your company. I might feel challenged many times… but guess what... that's what I like! I will always find solutions to problems since I enjoy learning new things every day.</p>
                    </div>
                </Col>
                <Col><img className='my-3 aboutPic' src='./images/versionControl.png' height='400' width='400'></img></Col>
            </Row>
        </div>
    )
}

export default About;
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const Footer = () => {
    return (
        <footer>
            <Container>
                <div className='singleCol footer-icons-box d-flex justify-content-evenly'>
                    <a href='https://www.linkedin.com/in/sergio-rojas/' target='_blank'><i className="fa-brands fa-linkedin footer-icon"></i></a>
                    <a href='https://github.com/chroc' target='_blank'><i className="fa-brands fa-github footer-icon"></i></a>
                </div>
                <Row>
                    <Col className='text-center py-3'>Copyright &copy; Sergio R.</Col>
                </Row>
            </Container>
        </footer>
    )
}

export default Footer;
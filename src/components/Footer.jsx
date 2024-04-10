import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className='footer-area'>
        <Container>
            <Row>
                <Col sm={6} className='text-center text-sm-start'>
                    <p>Copyright ® {currentYear} MeowMeow.</p>
                </Col>
                <Col sm={6} className='text-sm-end text-center mt-2 mt-sm-0'>
                    <p>All Rights Reserved</p>
                </Col>
            </Row>
        </Container>
    </footer>
  )
}

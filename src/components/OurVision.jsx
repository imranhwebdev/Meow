import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import ourVisionImg from '../assets/img/our-vision-Img.png'
import ovLeftImg from '../assets/img/ovLeftImg.png'

export default function OurVision() {
  return (
    <section className='our-vision-area'>
        <Container>
            <Row className='align-items-center'>
                <Col lg={5}>
                    <div className="our-vision-content">
                        <h2>Our Vision</h2>
                        <p>TRON CEO’s request for <span>$MEOW</span> <b>to be created</b></p>
                        <figure className='ovLeftImg'>
                            <img src={ovLeftImg} alt="" />
                        </figure>

                    </div>
                </Col>
                <Col lg={7}>
                    <figure className='ourVisionImg'>
                        <img src={ourVisionImg} alt="" />
                    </figure>
                </Col>
            </Row>
        </Container>
            
    </section>
  )
}

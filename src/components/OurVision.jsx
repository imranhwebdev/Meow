import React, { useEffect } from "react";
import AOS from 'aos';
import { Container, Row, Col } from 'react-bootstrap';
import ourVisionImg from '../assets/img/our-vision-Img.png'
import ovLeftImg from '../assets/img/ovLeftImg.png'

export default function OurVision() {
    useEffect(() => {
        AOS.init({
          duration: 1000,
        });
      }, []);
    
  return (
    <section className='our-vision-area'>
        <Container>
            <Row className='align-items-center'>
                <Col lg={5}>
                    <div className="our-vision-content">
                        <h2  data-aos="fade-up">Our Vision</h2>
                        <p  data-aos="fade-up">TRON CEO’s request for <span>$MEOW</span> <b>to be created</b></p>
                        <figure className='ovLeftImg'>
                            <img src={ovLeftImg} alt="" />
                        </figure>

                    </div>
                </Col>
                <Col lg={7}>
                    <figure className='ourVisionImg'  data-aos="zoom-in-left" data-aos-duration="1600">
                        <img src={ourVisionImg} alt="" />
                    </figure>
                </Col>
            </Row>
        </Container>
            
    </section>
  )
}

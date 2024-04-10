import React, { useEffect } from "react";
import AOS from 'aos';
import { Container, Row, Col } from 'react-bootstrap';
import aboutleftshap from "../assets/img/about-left-shep.png"
import aboutRleap from "../assets/img/about-right-leap.png"
export default function About() {
    useEffect(() => {
        AOS.init({
          duration: 1000,
        });
      }, []);
    
  return (
    <section className='about-area'>
        <figure className='aboutleftshap'>
            <img src={aboutleftshap} alt="" />
        </figure>
        <figure className='aboutRleap' data-aos="zoom-in-left" data-aos-duration="1800">
            <img src={aboutRleap} alt="" />
        </figure>
        <Container>
            <Row>
                <Col>
                    <div className="about-content text-center">
                        <div className="about-content-inner">
                            <h3 data-aos="fade-up" data-aos-duration="1200">About Meow Meow</h3>
                            <p data-aos="fade-up" data-aos-duration="1500">The content of this project, website and whitepaper is provided for information purposes only and shall not in any way constitute an investment advice or investment recommendation in any product discussed. Buy at your own risk. <b>$MEOW</b> is a meme token.</p>
                            <p data-aos="fade-up" data-aos-duration="1800">It is strongly recommended that you seek professional investment advice before making any investment decision. Any investment decision that you make should be based on an assessment of your risks in consultation with your investment adviser.</p>

                        </div>
                    </div>
                </Col>
            </Row>
        </Container>
    </section>
  )
}

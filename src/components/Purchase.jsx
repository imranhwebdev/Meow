import React, { useEffect } from "react";
import AOS from 'aos';
import { Container, Row, Col } from 'react-bootstrap';
import serviceBG from "../assets/img/service-bg.png"
import purchessBg from '../assets/img/purchess-bg.png'
import purcheseShap from '../assets/img/purchess-bottom-img.png'
export default function Purchase() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);

    const services = [
        {
            count: '01',
            desc:"Download TronLink Wallet on the Android or Apple Store",
        },
        {
            count:'02',
            desc:"Load Up Your Wallet with Tron",
        },
        {
            count: '03',
            desc:"Swap Tron for MEOW on ChickenSwap or SunSwap",
        },
    ]
  return (
    <section className='purchase-area'>
      <Container>
        <Row>
            <Col>
                <div className="section-title text-center" data-aos="fade-up" data-aos-duration="1000">
                    <h2>how to purchase</h2>
                </div>
            </Col>
        </Row>
        <Row className="purchase-wrapper">
            {services.map((item, index)=>(
                <Col lg={4} key={index}>
                  <div className="single-item" data-aos="fade-up" data-aos-duration="1400">
                        <img src={serviceBG} alt="" />
                        <h5>{item.count}</h5>
                        <p>{item.desc}</p>
                  </div>
                </Col>
            ))}
        </Row>
      </Container>
        <figure className='purchessBg'>
          <img src={purchessBg} alt="" />
        </figure>
        <figure className='purcheseShap' data-aos="fade-up" data-aos-duration="1800">
            <img src={purcheseShap} alt="" />
        </figure>
    </section>
  )
}

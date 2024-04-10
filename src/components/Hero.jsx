import React, { useEffect } from "react";
import AOS from 'aos';
import { Container, Row, Col } from 'react-bootstrap';
import heroRImg from "../assets/img/heroRImg.png"
import { FaPaperPlane} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import heroBG from '../assets/img/hero-bg.png'
import heroShap from '../assets/img/hero-bottom-Img.png'
export default function Hero() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);

    const socialLogo = <svg xmlns="http://www.w3.org/2000/svg" width="30" height="27" viewBox="0 0 30 27" fill="none">
    <path d="M25.0088 21.8125L23.79 19.75H6.21192L15.0088 4.51562L12.7119 0.515625H9.74317C8.44629 0.515625 7.25879 1.21875 6.61817 2.34375L1.29004 11.7344C0.665039 12.8281 0.665039 14.1875 1.29004 15.2813L5.00879 21.8594L6.60254 24.6719C7.24317 25.7969 8.43067 26.5 9.72754 26.5H20.2588C21.5557 26.5 22.7432 25.8125 23.3994 24.6719L24.9932 21.875L25.0088 21.8125Z" fill="url(#paint0_linear_152_2130)"/>
    <path d="M23.8057 19.75H6.24316L6.32129 19.7031L12.2119 16.1719C13.1182 15.5781 13.8057 15.2344 14.4463 15.125C14.4619 15.125 14.4775 15.1094 14.4932 15.1094C14.54 15.0937 14.5713 15.0937 14.6182 15.0937C14.6963 15.0781 14.7588 15.0781 14.8369 15.0781H14.9775C15.0713 15.0781 15.1963 15.0937 15.29 15.1094C15.9619 15.2031 16.6807 15.5313 17.665 16.0938L23.7744 19.7188L23.8057 19.75Z" fill="url(#paint1_linear_152_2130)"/>
    <path d="M25.0088 21.8125L24.9775 21.8594L23.3838 24.6563C22.7432 25.7813 21.5557 26.4844 20.2588 26.4844H9.75879C8.46191 26.4844 7.27441 25.7813 6.63379 24.6563L5.04004 21.8438L6.25879 19.7344L6.32129 19.6875L12.2119 16.1406C13.1182 15.5469 13.8057 15.2031 14.4463 15.0937C14.4619 15.0937 14.4775 15.0781 14.4932 15.0781C14.54 15.0625 14.5713 15.0625 14.6182 15.0625C14.6963 15.0469 14.7588 15.0469 14.8369 15.0469H14.9775C15.0713 15.0469 15.1963 15.0625 15.29 15.0781C15.9619 15.1719 16.6807 15.5 17.6494 16.0625L23.7588 19.7031L23.79 19.7188L25.0088 21.8125Z" fill="black"/>
    <g opacity="0.5">
      <path d="M17.6182 16.0782C15.29 14.7344 14.4307 14.6875 12.1807 16.1563L6.21191 19.7344L12.1807 16.9063C14.4307 15.4375 15.29 15.4844 17.6182 16.8282L23.7744 19.7188L17.6182 16.0782Z" fill="url(#paint2_linear_152_2130)"/>
    </g>
    <path d="M28.7275 15.2656L24.9932 21.8594L25.0244 21.8125L23.8057 19.75L15.04 4.5L15.0244 4.51562L12.7119 0.515625H20.2744C21.5713 0.515625 22.7588 1.21875 23.3994 2.34375L28.7275 11.7344C29.3369 12.8281 29.3369 14.1719 28.7275 15.2656Z" fill="black"/>
    <path d="M1.27443 15.2656L5.00881 21.8594L4.97756 21.8125L6.19631 19.75L14.9619 4.5L14.9776 4.51562L17.2744 0.515625H9.71194C8.41506 0.515625 7.22756 1.21875 6.58693 2.34375L1.25881 11.7344C0.665058 12.8281 0.665058 14.1719 1.27443 15.2656Z" fill="black"/>
    <path opacity="0.51" d="M17.2744 0.5L14.9932 4.46875L15.415 5.15625L17.2744 0.5Z" fill="#4A73B8"/>
    <defs>
      <linearGradient id="paint0_linear_152_2130" x1="22.168" y1="25.8375" x2="2.66407" y2="5.26692" gradientUnits="userSpaceOnUse">
        <stop offset="0.01" stop-color="#9290C6"/>
        <stop offset="0.19" stop-color="#8990C7"/>
        <stop offset="1" stop-color="#5E91CD"/>
      </linearGradient>
      <linearGradient id="paint1_linear_152_2130" x1="11.6513" y1="24.398" x2="22.1807" y2="9.87455" gradientUnits="userSpaceOnUse">
        <stop offset="0.01" stop-color="#9290C6"/>
        <stop offset="0.17" stop-color="#898EC6"/>
        <stop offset="1" stop-color="#5C83C2"/>
      </linearGradient>
      <linearGradient id="paint2_linear_152_2130" x1="11.9754" y1="23.9077" x2="18.0218" y2="15.5675" gradientUnits="userSpaceOnUse">
        <stop offset="0.01" stop-color="#9290C6"/>
        <stop offset="0.41" stop-color="#6D7DBC"/>
        <stop offset="1" stop-color="#4268B0"/>
      </linearGradient>
    </defs>
  </svg>;
    const socialLinks = [
      { icon: <FaPaperPlane />, href: '#' },
      { icon: <FaXTwitter />, href: '#' },
      { icon: socialLogo, href: '#' }
  ];
  
  return (
    <section className='hero-area'>
      <Container>
        <Row className='align-items-center'>
            <Col lg={6}>
                <div className="hero-content">
                    <span  data-aos="fade-up">Welcome to Meow Meow</span>
                    <h1  data-aos="fade-up" data-aos-duration="1000">$MEOW</h1>
                    <p data-aos="fade-up" data-aos-duration="1200">$MEOW is the first and only cat on Tron tweeted by Justin Sun</p>
                    <div className="social-btns d-sm-flex align-items-center" data-aos="fade-up" data-aos-duration="1400">
                        <a href="/" className='boxed-btn'>Buy Now</a>
                        <ul className="social-links mt-4 mt-sm-0">
                            {socialLinks.map((link, index) => (
                                <li key={index}><a href={link.href}>{link.icon}</a></li>
                            ))}
                        </ul>
                    </div>
                </div>
            </Col>
            <Col lg={6}>
                <figure className='heroRImg' data-aos="zoom-in-left" data-aos-duration="3000">
                    <img src={heroRImg} alt="" />
                </figure>
            </Col>
        </Row>
      </Container>
      <figure className='heroBG'>
          <img src={heroBG} alt="" />
        </figure>
        <figure className='heroShap' data-aos="fade-up">
          <img src={heroShap} alt="" />
        </figure>
    </section>
  )
}

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

  const socialLogo = <svg width="24" height="27" viewBox="0 0 24 27" fill="none" xmlns="http://www.w3.org/2000/svg">
  <g clip-path="url(#clip0_4030_8)">
  <path fill-rule="evenodd" clip-rule="evenodd" d="M9.09462 1.98381C7.54746 2.78976 6.28167 3.47175 6.28194 3.49949C6.28263 3.57108 9.99516 5.45125 10.1269 5.44667C10.1869 5.44466 10.6217 5.2445 11.0932 5.00192L11.9505 4.56095L12.8869 5.04224L13.8231 5.52362L15.3565 4.83462C17.6669 3.7964 17.9069 3.68263 17.8693 3.64441C17.8194 3.5937 16.9907 3.1485 14.7423 1.96482C13.6557 1.39273 12.6011 0.831821 12.3986 0.718321C12.1962 0.60482 12.0029 0.513517 11.9692 0.515284C11.9354 0.517051 10.6418 1.17789 9.09462 1.98381ZM2.30879 5.49774L0.698218 6.32966V9.98079C0.698218 11.9889 0.719367 13.6319 0.745308 13.6319C0.771159 13.6319 1.56357 13.2884 2.50617 12.8686L4.22 12.1052V8.25671L5.05749 8.71299C5.70285 9.06427 6.34859 9.41484 6.99472 9.76469L8.09444 10.3601L8.58379 10.1388C8.89069 9.99983 9.19698 9.85948 9.50264 9.71778C9.73884 9.60778 10.3187 9.34663 10.7911 9.13734C11.2635 8.92795 11.7008 8.71739 11.7628 8.66941C11.8452 8.60566 10.8407 8.05059 8.04762 6.61627C5.94222 5.5351 4.15206 4.65393 4.0695 4.65816C3.98695 4.66238 3.19463 5.04015 2.30879 5.49774ZM18.1596 5.73136C17.0627 6.22655 16.1644 6.6515 16.1634 6.67573C16.1624 6.69994 16.7603 7.05542 17.492 7.46556C18.2237 7.8758 18.8224 8.23338 18.8224 8.26031C18.8224 8.28718 18.1749 8.6009 17.3837 8.95761C16.5923 9.31422 14.592 10.2176 12.9385 10.965L7.39816 13.4693C6.00449 14.0994 4.74826 14.6672 4.60654 14.7314C1.75989 16.0201 0.977461 16.3776 0.870012 16.439C0.761963 16.5008 0.73749 16.8598 0.718258 18.6617L0.695312 20.8108L2.13556 21.5447L3.57578 22.2785L5.57287 21.3772C6.6713 20.8815 7.56996 20.45 7.56996 20.4182C7.56996 20.3865 7.36698 20.2543 7.11901 20.1242C6.87092 19.9941 6.3588 19.7062 5.98086 19.4842C5.60294 19.2622 5.22611 19.0586 5.14337 19.0316C5.06066 19.0046 4.99419 18.9575 4.99554 18.9268C4.99692 18.8961 5.87634 18.4784 6.9497 17.9984C9.0345 17.0663 10.6299 16.3479 14.0552 14.7989C15.5868 14.1065 17.1186 13.4144 18.6506 12.7227C19.997 12.115 21.5625 11.4052 22.1294 11.1454L23.1602 10.6731L23.1831 8.49956L23.2062 6.32607L21.7454 5.57629C20.9419 5.16395 20.2552 4.82758 20.2192 4.82881C20.1832 4.82995 19.2564 5.23605 18.1596 5.73136ZM22.7688 13.5728C22.5536 13.678 22.1284 13.8748 21.824 14.0102C21.5196 14.1457 20.9419 14.4063 20.5403 14.5896L19.8102 14.9226L19.7936 16.8308C19.7844 17.8803 19.7457 18.7343 19.7077 18.7287C19.6213 18.7159 18.2528 18.0141 16.8773 17.277C15.8845 16.7451 15.8221 16.724 15.5888 16.8395C15.454 16.9063 14.6478 17.2679 13.7975 17.643C12.9471 18.0182 12.2236 18.3496 12.1896 18.3796C12.1556 18.4096 13.8671 19.3372 15.993 20.4411L19.8581 22.4482L21.5092 21.5941C22.4172 21.1244 23.1893 20.6959 23.2249 20.642C23.3049 20.5209 23.2981 13.365 23.2179 13.3747C23.1862 13.3785 22.9841 13.4677 22.7688 13.5728ZM13.6257 21.972C13.3393 22.0951 13.053 22.2184 12.7667 22.3419C11.9023 22.7159 12.0717 22.7283 11.0434 22.2163C10.3584 21.8754 10.0632 21.7702 9.93504 21.8213C9.83892 21.8595 9.01164 22.2317 8.09651 22.6483C7.18144 23.0649 6.40098 23.4057 6.36216 23.4057C5.97822 23.4057 6.61651 23.7871 9.07952 25.0295L11.968 26.4865L13.1834 25.8865C13.8518 25.5564 15.2001 24.8956 16.1795 24.4179C17.1589 23.9401 17.9482 23.5369 17.9334 23.5216C17.9185 23.5065 17.0979 23.0851 16.1096 22.5852L14.3129 21.6764L13.6257 21.972Z" fill="black"/>
  </g>
  <defs>
  <clipPath id="clip0_4030_8">
  <rect width="22.6096" height="26" fill="white" transform="translate(0.695312 0.5)"/>
  </clipPath>
  </defs>
  </svg>;  
  const socialLinks = [
    { icon: <FaPaperPlane />, href: 'https://t.me/MeowOnTron' },
    { icon: <FaXTwitter />, href: 'https://x.com/meowmeowTRC20' },
    { icon: socialLogo, href: 'https://www.dextools.io/app/en/tron/pair-explorer/TPYBz5MH6ApP15HYpsn1SJHYn6Zv6e5SyQ?t=1722439207394' }
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
                        <a href="https://www.chickenswap.com/" target="_blank" className='boxed-btn'>Buy Now</a>
                        <ul className="social-links mt-4 mt-sm-0">
                            {socialLinks.map((link, index) => (
                                <li key={index}><a href={link.href} target="_blank">{link.icon}</a></li>
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

import React, { useEffect, useState } from 'react';
import Container from 'react-bootstrap/Container';
import { Link, animateScroll as scroll} from 'react-scroll';
import { FaPaperPlane} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import logo from '../assets/img/Logo.svg'
export default function Header() {
  const [isMenu, setIsMenu] = useState(false);
  const handleTouchStart  = (event) => {
    navigate(event);
    setIsMenu(!isMenu);
  };
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
    { icon: <FaPaperPlane />, href: 'https://t.me/meowmeow_trx' },
    { icon: <FaXTwitter />, href: 'https://x.com/meowmeowTRC20' },
    { icon: socialLogo, href: 'https://avedex.cc/token/TYwzUjaR5fiKkzwPHVYjyP22QgBKdqUwgo-tron?from=Token' }
];


  return (
    <>
      <header className='heading'>
        <Container className='d-flex align-items-center justify-content-between'>
          <Link className="logo" href="/">
           <img src={logo} alt='logo' />
          </Link>
          <nav className={`heading-menu ${isMenu ?'show-menu':''}  d-lg-flex align-items-center `}>
            <div className="title d-flex align-items-center justify-content-between d-lg-none">
              <Link className="logo" href="/">
               <img src={logo} alt='logo' />
              </Link>
              <button className="heading-toggler" onClick={() => setIsMenu(!isMenu)}>
                <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M16.3849 9.32205C16.481 9.23249 16.5585 9.12488 16.6129 9.00538C16.6674 8.88587 16.6978 8.75681 16.7024 8.62555C16.707 8.4943 16.6857 8.36342 16.6397 8.2404C16.5938 8.11737 16.524 8.00461 16.4344 7.90855C16.3449 7.81249 16.2373 7.73501 16.1178 7.68053C15.9982 7.62605 15.8692 7.59565 15.7379 7.59105C15.6067 7.58646 15.4758 7.60776 15.3528 7.65374C15.2297 7.69972 15.117 7.76949 15.0209 7.85905L12.0949 10.587L9.36692 7.66005C9.18439 7.47309 8.93593 7.36501 8.67472 7.35891C8.4135 7.35282 8.16028 7.44921 7.96923 7.62745C7.77818 7.8057 7.66448 8.05164 7.65246 8.31265C7.64044 8.57366 7.73106 8.829 7.90492 9.02405L10.6329 11.95L7.70592 14.6781C7.60647 14.7667 7.52573 14.8743 7.46846 14.9946C7.41118 15.1149 7.37852 15.2454 7.37239 15.3785C7.36626 15.5116 7.38679 15.6446 7.43277 15.7696C7.47875 15.8947 7.54925 16.0093 7.64014 16.1067C7.73103 16.2041 7.84047 16.2824 7.96203 16.3369C8.08359 16.3915 8.21482 16.4212 8.34802 16.4243C8.48121 16.4274 8.61369 16.4038 8.73766 16.355C8.86163 16.3062 8.97459 16.2331 9.06992 16.14L11.9959 13.413L14.7239 16.3391C14.812 16.4403 14.9196 16.5229 15.0402 16.5817C15.1609 16.6405 15.2922 16.6745 15.4262 16.6815C15.5603 16.6885 15.6943 16.6685 15.8205 16.6226C15.9466 16.5767 16.0622 16.5058 16.1604 16.4143C16.2586 16.3228 16.3374 16.2124 16.392 16.0898C16.4466 15.9672 16.476 15.8348 16.4784 15.7006C16.4807 15.5664 16.4561 15.4331 16.4058 15.3086C16.3556 15.1841 16.2808 15.071 16.1859 14.976L13.4589 12.05L16.3849 9.32205Z" fill="currentColor" />
                  <path fillRule="evenodd" clipRule="evenodd" d="M1.04492 12C1.04492 5.925 5.96992 1 12.0449 1C18.1199 1 23.0449 5.925 23.0449 12C23.0449 18.075 18.1199 23 12.0449 23C5.96992 23 1.04492 18.075 1.04492 12ZM12.0449 21C10.863 21 9.6927 20.7672 8.60077 20.3149C7.50884 19.8626 6.51669 19.1997 5.68096 18.364C4.84523 17.5282 4.1823 16.5361 3.73001 15.4442C3.27771 14.3522 3.04492 13.1819 3.04492 12C3.04492 10.8181 3.27771 9.64778 3.73001 8.55585C4.1823 7.46392 4.84523 6.47177 5.68096 5.63604C6.51669 4.80031 7.50884 4.13738 8.60077 3.68508C9.6927 3.23279 10.863 3 12.0449 3C14.4319 3 16.7211 3.94821 18.4089 5.63604C20.0967 7.32387 21.0449 9.61305 21.0449 12C21.0449 14.3869 20.0967 16.6761 18.4089 18.364C16.7211 20.0518 14.4319 21 12.0449 21Z" fill="currentColor" />
                </svg>
              </button>
            </div>
            <ul className="social-links">
                {socialLinks.map((link, index) => (
                    <li key={index}><a href={link.href} target='_blank'>{link.icon}</a></li>
                ))}
            </ul>
            <a href="/" className='boxed-btn'>Buy Now</a>
          </nav>
          <div className="heading-actions d-flex align-items-center flex-wrap  d-lg-none">
            <button className="heading-toggler" onClick={() => setIsMenu(!isMenu)}>
              <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M3.08984 6H21.0898" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M3.08984 12H21.0898" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M3.08984 18H21.0898" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
          </div>
        </Container>
      </header>
    </>
  )
}
import React, { useEffect } from "react";
import AOS from 'aos';
import marqueeImg1 from '../assets/img/marqueeImg1.png';
import marqueeImg2 from '../assets/img/marqueeImg2.png';
import marqueeImg3 from '../assets/img/marqueeImg3.png';
import marqueeImg4 from '../assets/img/marqueeImg4.png';
import Marquee from "react-fast-marquee";
export default function MarqueeOne() {
    useEffect(() => {
        AOS.init({
          duration: 1000,
        });
      }, []);
    
    const marqueeImgs = [
        {
            image: marqueeImg1,
        },
        {
            image: marqueeImg2,
        },
        {
            image: marqueeImg3,
        },
        {
            image: marqueeImg4,
        },
        {
            image: marqueeImg1,
        },
        {
            image: marqueeImg2,
        },
        {
            image: marqueeImg3,
        },
        {
            image: marqueeImg4,
        },
        {
            image: marqueeImg1,
        },
        {
            image: marqueeImg2,
        },
        {
            image: marqueeImg3,
        },
        {
            image: marqueeImg4,
        },
        {
            image: marqueeImg1,
        },
        {
            image: marqueeImg2,
        },
        {
            image: marqueeImg3,
        },
        {
            image: marqueeImg4,
        },
        {
            image: marqueeImg1,
        },
        {
            image: marqueeImg2,
        },
        {
            image: marqueeImg3,
        },
        {
            image: marqueeImg4,
        },
        {
            image: marqueeImg1,
        },
        {
            image: marqueeImg2,
        },
        {
            image: marqueeImg3,
        },
        {
            image: marqueeImg4,
        },
        {
            image: marqueeImg1,
        },
        {
            image: marqueeImg2,
        },
        {
            image: marqueeImg3,
        },
        {
            image: marqueeImg4,
        },
        {
            image: marqueeImg1,
        },
        {
            image: marqueeImg2,
        },
        {
            image: marqueeImg3,
        },
        {
            image: marqueeImg4,
        },
        {
            image: marqueeImg1,
        },
        {
            image: marqueeImg2,
        },
        {
            image: marqueeImg3,
        },
        {
            image: marqueeImg4,
        },
        {
            image: marqueeImg1,
        },
        {
            image: marqueeImg2,
        },
        {
            image: marqueeImg3,
        },
        {
            image: marqueeImg4,
        },
        {
            image: marqueeImg1,
        },
        {
            image: marqueeImg2,
        },
        {
            image: marqueeImg3,
        },
        {
            image: marqueeImg4,
        },
        {
            image: marqueeImg1,
        },
        {
            image: marqueeImg2,
        },
        {
            image: marqueeImg3,
        },
        {
            image: marqueeImg4,
        },
        {
            image: marqueeImg1,
        },
        {
            image: marqueeImg2,
        },
        {
            image: marqueeImg3,
        },
        {
            image: marqueeImg4,
        },
        {
            image: marqueeImg1,
        },
        {
            image: marqueeImg2,
        },
        {
            image: marqueeImg3,
        },
        {
            image: marqueeImg4,
        },
        {
            image: marqueeImg1,
        },
        {
            image: marqueeImg2,
        },
        {
            image: marqueeImg3,
        },
        {
            image: marqueeImg4,
        },
        {
            image: marqueeImg1,
        },
        {
            image: marqueeImg2,
        },
        {
            image: marqueeImg3,
        },
        {
            image: marqueeImg4,
        },
        {
            image: marqueeImg1,
        },
        {
            image: marqueeImg2,
        },
        {
            image: marqueeImg3,
        },
        {
            image: marqueeImg4,
        },
        {
            image: marqueeImg1,
        },
        {
            image: marqueeImg2,
        },
        {
            image: marqueeImg3,
        },
        {
            image: marqueeImg4,
        },
        {
            image: marqueeImg1,
        },
        {
            image: marqueeImg2,
        },
        {
            image: marqueeImg3,
        },
        {
            image: marqueeImg4,
        },
        {
            image: marqueeImg1,
        },
        {
            image: marqueeImg2,
        },
        {
            image: marqueeImg3,
        },
        {
            image: marqueeImg4,
        },
        
    ];
    return (
        <section className="marquee One">
            <div className="section-title text-center" data-aos="fade-up">
                <h2>Meow Meow Memes</h2>
            </div>
            <Marquee direction="left" speed={100}>
                {marqueeImgs.map((marqueeImg, index) => (
                    <figure  className='single-item' key={index}>
                        <img src={marqueeImg.image} alt="" />
                    </figure>
                ))}
            </Marquee>
        </section>
    )
}
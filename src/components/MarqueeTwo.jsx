import React from 'react'
import marqueeImg1 from '../assets/img/2ndmarqueeImg1.png';
import marqueeImg2 from '../assets/img/2ndmarqueeImg2.png';
import marqueeImg3 from '../assets/img/2ndmarqueeImg3.png';
import marqueeImg4 from '../assets/img/2ndmarqueeImg4.png';
import Marquee from "react-fast-marquee";
export default function MarqueeTwo() {
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
        <section className="marquee Two">
            <Marquee direction="right" speed={100}>
                {marqueeImgs.map((marqueeImg, index) => (
                    <figure className='single-item' key={index}>
                        <img src={marqueeImg.image} alt="" />
                    </figure>
                ))}
            </Marquee>
        </section>
    )
}
import './services.css'

import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useEffect, useRef } from 'react';
import { useInView } from "react-intersection-observer";
import ScrollTrigger from 'gsap/src/ScrollTrigger';

export const Services = () => {

    gsap.registerPlugin(useGSAP);
    gsap.registerPlugin(ScrollTrigger)
    const container = useRef();
    const { ref, inView } = useInView({threshold:0.2});

        useGSAP(()=>{
            gsap.from('.service',{
                scrollTrigger: '#services', 
                duration: 1,
                y: '-8%',
                stagger: 0.2, 
                ease: 'power3.inOut',
             })
        },[])

    return (
        <section id='services' ref={container}>
            <div id='sWrap' ref={ref}>
            <h1 id='sHead'>My skills </h1>
            <div id='offers' >
                <div className='service' >
                    <img className='sFi' src='./design.png'/>
                    <h1 className='sMH'>visual branding</h1>
                    <div className='sLi'><img src='./ui.png'/> <h1>logo design </h1></div>
                    <div className='sLi'><img src='./web.png' /> <h1>brand style design </h1></div>
                    <div className='sLi'><img src='./mobile.png'/> <h1>marketing materials</h1></div>
                </div>

                <div className='service'>
                    <img  className='sFi' src='./product.png'/>
                    <h1 className='sMH'>content creation</h1>
                    <div className='sLi'><img src='./prod.png'/> <h1>illustrations</h1></div>
                    <div className='sLi'><img src='./brand.png'/> <h1>photo editing</h1></div>
                    <div className='sLi'><img src='./manage.png'/> <h1>social media design</h1></div>
                </div>

                <div className='service' >
                    <img  className='sFi' src='./others.png'/>
                    <h1 className='sMH'>user interface</h1>
                    <div className='sLi'><img src='./ps.png' /> <h1>web design</h1></div>
                    <div className='sLi'><img src='./vedit.png' /> <h1>app design</h1></div>
                    <div className='sLi'><img src='./anim.png'/> <h1>infographics</h1></div>
                </div>
                </div>
            </div>
        </section>
    )
}
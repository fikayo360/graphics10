 import './about.css'
 import gsap from "gsap";
 import { useGSAP } from "@gsap/react";
 import { useRef } from 'react';

 export const About = () => {
    gsap.registerPlugin(useGSAP);
    const container = useRef();
    
    useGSAP(() => {
        
        gsap.from('#aboutWrap', {
                duration: 1.5,
                y: '-70vh',
                ease: 'power3.inOut',
        })
      }, { scope: container });

    return (
        <section id='about' ref={container}>
            <div id='aboutWrap'>
            <h1 id='aboutH'>about *** </h1>
            <p className='aboutp'>
            I see the world through a designer's lens, transforming ideas into captivating visuals. As a graphic designer,
             I bring a fire for creativity and a passion for crafting stunning graphics that tell a story. I'm equally comfortable with clean vector illustrations, 
             eye-catching photo manipulation, 
            or bringing a hand-drawn touch to your project. Let's collaborate to bring your vision to life in a visually stunning way!
            </p>

            <p className='aboutp'>
            No project is too big or too small for me! As a graphic designer, I thrive in a fast-paced environment, 
            tackling diverse design challenges with a solutions-oriented approach. I can create anything from engaging social media graphics to impactful presentations and captivating website elements.
             My design versatility ensures I can seamlessly integrate into your existing brand identity. Let's discuss how I can elevate your visual communication!
            </p>

            <p className='aboutp'>
            Great design goes beyond aesthetics; it connects with people.  As a graphic designer, I combine strategic thinking with creative execution, ensuring my designs not only look beautiful but also resonate with your target audience. I understand the power of visual 
            communication and use it to achieve your specific marketing goals. Let's work together to create graphics that captivate and convert!
            </p> 
            </div>
        </section>
    )
 }
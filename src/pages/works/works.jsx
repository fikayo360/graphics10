import './works.css'
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useEffect, useRef } from 'react';
import { useInView } from "react-intersection-observer";
import ScrollTrigger from 'gsap/src/ScrollTrigger';

export const Works = () => {

    gsap.registerPlugin(useGSAP);
    const container = useRef();
    const { ref, inView } = useInView({threshold:0.1});
    const isMobile = () => window.innerWidth <= 768;

        useGSAP(()=>{
            gsap.from('.designItem',{
                scrollTrigger: '#works', 
                duration: 0.7,
                x: '-1%',
                stagger: 0.1, 
                ease: 'power3.inOut',
             })
        },[])

    return (
        <div id='works' ref={container}>
            <div id='wkWrap' ref={ref}>
            <h1 id='wHead'>works</h1>

                <div className='ww'>
                    <h1>web</h1>
                    <div className="wWrap">
                    <div className='designItem'><img src='https://i.pinimg.com/736x/ef/d3/06/efd3063c6bfdd6162752d68c20de1428.jpg'/></div>
                    <div className='designItem'><img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1NrVRk9virFbS9KsGA7QMzAIVCZKTLhwOyWLnhpYEzg&s'/></div>
                    <div className='designItem'><img src='https://thomasdigital.com/wp-content/uploads/2021/09/Crave-Catering.jpg'/></div>
                    <div className='designItem'><img src='https://thomasdigital.com/wp-content/uploads/2021/09/Chilli-Bees-Catering.jpg'/></div>
                    <div className='designItem'><img src='https://cdn.dribbble.com/userupload/8910902/file/original-28ba58c3e3b48157844170233b5a6982.png?resize=400x0'/></div>
                    <div className='designItem'><img src='https://i.ytimg.com/vi/Oz7YGEOeK7Y/maxresdefault.jpg'/></div>
                </div>
                </div>
              
        
            <div className='ww'>
                <h1>mobile</h1>
                <div className="wWrap">
                    <div className='designItem'><img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQghvy9boB9Umj4WYUisT_ixq5aPbcwdWvAYGDnzbD2gg&s'/></div>
                    <div className='designItem'><img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQi6oUuikcpGrkn-8KqPTzj130CjmhveZzGNA7MHPWwCA&s'/></div>
                    <div className='designItem'><img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTP62J1bQ__wsXj3SolbyXP3YcCKiEMTbfNhUbBxVbjbbfhuJoA1TlorcrXfXbPGtUBG4g&usqp=CAU'/></div>
                    <div className='designItem'><img src='https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/09956989046999.5de8bcd610d9d.jpg'/></div>
                    <div className='designItem'><img src='https://assets.justinmind.com/wp-content/uploads/2019/08/mobile-banking-app-design-best-ui-patterns-1.png'/></div>
                    <div className='designItem'><img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTEu0MlCDPJCN9FPRiKGby3yK4cnLraRcwwqdQycljXAA&s'/></div>
                </div>
            </div>
    
            <div className='ww'>
                <h1>product</h1>
                <div className="wWrap">
                    <div className='designItem'><img src='https://www.feeldesain.com/wp-content/uploads/2012/04/125-Branding-Design-Inspiration.jpg'/></div>
                    <div className='designItem'><img src='https://static.vecteezy.com/system/resources/previews/016/386/791/non_2x/brand-identity-design-for-office-stationery-with-black-and-red-shapes-corporate-business-identity-template-bundle-with-creative-branding-shapes-business-promotional-stationery-design-for-branding-vector.jpg'/></div>
                    <div className='designItem'><img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSIWMx2S7E1QLNA2fKFFkMxOhqTbbdJb1m7vJMl8y_yBg&s'/></div>
                </div>
            </div>
            
            <div className='ww'>
                <h1>Graphics</h1>
                <div className="wWrap">
                    <div className='designItem'><img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjUxZHgzP_nahJ4Gf8zHnxZ6raKCULfxxt25YpGKRx4Q&s'/></div>
                    <div className='designItem'><img src='https://99designs-blog.imgix.net/blog/wp-content/uploads/2018/06/attachment_59337693.jpg?auto=format&q=60&fit=max&w=930'/></div>
                    <div className='designItem'><img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1a2YAhPdVAl-SwdH4VW_UM32Jaz8ew24gkahhi2_eww&s'/></div>
                    <div className='designItem'><img src='https://pbs.twimg.com/media/F0Rp85XXsAEGrNj.jpg:large'/></div>
                    <div className='designItem'><img src='https://i.pinimg.com/originals/3b/1b/c5/3b1bc558a5524c38334dc3bee2e48054.jpg'/></div>
            </div>
            </div>
           
            
        </div>
        </div>
    )
}
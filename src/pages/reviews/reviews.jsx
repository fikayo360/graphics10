import './reviews.css'
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useEffect, useRef } from 'react';
import { useInView } from "react-intersection-observer";
import ScrollTrigger from 'gsap/src/ScrollTrigger';

export const Reviews = () => {
    gsap.registerPlugin(useGSAP);
    const container = useRef();
    const { ref, inView } = useInView({threshold:0.1});

        useGSAP(()=>{
            gsap.from('.review',{
                scrollTrigger: '#reviews', 
                duration: 1,
                x: '-5%',
                stagger: 0.1, 
                ease: 'power3.inOut',
             })
        },[])
        
    return (
        <div id='reviews' ref={container}>
            <div id='rWrap' ref={ref}>
            <h1 id='rHead'>Reviews</h1>
            <div id='allReviews'>
                <div className="review">
                    <p className='rFp'>I have benefited from Jades’ services for a full UI/UX project, with an engagement that lasted about 3 months.
                         I couldn't be more enthusiastic about the intelligent, subtle and pragmatic approach taken by Amjad along the path. 
                         Always available and he & the team delivered great results while also meeting all 
                        the interim deadlines and objectives. Already impatient for the next project we can work on together!
                    </p>
                    <div className='rFooter'>
                        <img src='https://www.befunky.com/images/wp/wp-2021-01-linkedin-profile-picture-after.jpg?auto=avif,webp&format=jpg&width=944'/>
                        <div className='rFooterR'>
                            <h1 className='rFRu'>stephane hubert</h1>
                            <h1 className='rFRd'>ceo @ clarty</h1>
                        </div>
                    </div>
                </div>
                <div className="review">
                    <p className='rFp'>I have benefited from Jades’ services for a full UI/UX project, with an engagement that lasted about 3 months.
                         I couldn't be more enthusiastic about the intelligent, subtle and pragmatic approach taken by Amjad along the path. 
                         Always available and he & the team delivered great results while also meeting all 
                        the interim deadlines and objectives. Already impatient for the next project we can work on together!
                    </p>
                    <div className='rFooter'>
                        <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWiodenmhSgAPXBgEUGskn4mNvaixE0JlzV4o6-8K4MRUBcLWWuds9cftE1S7_A62UG6M&usqp=CAU'/>
                        <div className='rFooterR'>
                            <h1 className='rFRu'>stephane hubert</h1>
                            <h1 className='rFRd'>ceo @ clarty</h1>
                        </div>
                    </div>
                </div>
                <div className="review">
                    <p className='rFp'>I have benefited from Jades’ services for a full UI/UX project, with an engagement that lasted about 3 months.
                         I couldn't be more enthusiastic about the intelligent, subtle and pragmatic approach taken by Amjad along the path. 
                         Always available and he & the team delivered great results while also meeting all 
                        the interim deadlines and objectives. Already impatient for the next project we can work on together!
                    </p>
                    <div className='rFooter'>
                        <img src='https://sb.kaleidousercontent.com/67418/1920x1281/0e9f02a048/christian-buehner-ditylc26zvi-unsplash.jpg'/>
                        <div className='rFooterR'>
                            <h1 className='rFRu'>stephane hubert</h1>
                            <h1 className='rFRd'>ceo @ clarty</h1>
                        </div>
                    </div>
                </div>
                <div className="review">
                    <p className='rFp'>I have benefited from Jades’ services for a full UI/UX project, with an engagement that lasted about 3 months.
                         I couldn't be more enthusiastic about the intelligent, subtle and pragmatic approach taken by Amjad along the path. 
                         Always available and he & the team delivered great results while also meeting all 
                        the interim deadlines and objectives. Already impatient for the next project we can work on together!
                    </p>
                    <div className='rFooter'>
                        <img src='https://sb.kaleidousercontent.com/67418/1920x1545/c5f15ac173/samuel-raita-ridxdghg7pw-unsplash.jpg'/>
                        <div className='rFooterR'>
                            <h1 className='rFRu'>stephane hubert</h1>
                            <h1 className='rFRd'>ceo @ clarty</h1>
                        </div>
                    </div>
                </div>
                <div className="review">
                    <p className='rFp'>I have benefited from Jades’ services for a full UI/UX project, with an engagement that lasted about 3 months.
                         I couldn't be more enthusiastic about the intelligent, subtle and pragmatic approach taken by Amjad along the path. 
                         Always available and he & the team delivered great results while also meeting all 
                        the interim deadlines and objectives. Already impatient for the next project we can work on together!
                    </p>
                    <div className='rFooter'>
                        <img src='https://media.istockphoto.com/id/1309328823/photo/headshot-portrait-of-smiling-male-employee-in-office.webp?b=1&s=170667a&w=0&k=20&c=MRMqc79PuLmQfxJ99fTfGqHL07EDHqHLWg0Tb4rPXQc='/>
                        <div className='rFooterR'>
                            <h1 className='rFRu'>stephane hubert</h1>
                            <h1 className='rFRd'>ceo @ clarty</h1>
                        </div>
                    </div>
                </div>
                <div className="review">
                    <p className='rFp'>I have benefited from Jades’ services for a full UI/UX project, with an engagement that lasted about 3 months.
                         I couldn't be more enthusiastic about the intelligent, subtle and pragmatic approach taken by Amjad along the path. 
                         Always available and he & the team delivered great results while also meeting all 
                        the interim deadlines and objectives. Already impatient for the next project we can work on together!
                    </p>
                    <div className='rFooter'>
                        <img src='https://media.istockphoto.com/id/1309315007/photo/profile-picture-of-smiling-caucasian-male-employee.jpg?s=612x612&w=0&k=20&c=pBsE_puKWiV9Pru3FWNPiYiDBnTp2k6x1PMjqZA8FHo='/>
                        <div className='rFooterR'>
                            <h1 className='rFRu'>stephane hubert</h1>
                            <h1 className='rFRd'>ceo @ clarty</h1>
                        </div>
                    </div>
                </div>
                <div className="review">
                    <p className='rFp'>I have benefited from Jades’ services for a full UI/UX project, with an engagement that lasted about 3 months.
                         I couldn't be more enthusiastic about the intelligent, subtle and pragmatic approach taken by Amjad along the path. 
                         Always available and he & the team delivered great results while also meeting all 
                        the interim deadlines and objectives. Already impatient for the next project we can work on together!
                    </p>
                    <div className='rFooter'>
                        <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRlSA6OeLhxDwO5_TymyV7YAUdvrr3xSDTgxEwoCIpFA&s'/>
                        <div className='rFooterR'>
                            <h1 className='rFRu'>stephane hubert</h1>
                            <h1 className='rFRd'>ceo @ clarty</h1>
                        </div>
                    </div>
                </div>
                <div className="review">
                    <p className='rFp'>I have benefited from Jades’ services for a full UI/UX project, with an engagement that lasted about 3 months.
                         I couldn't be more enthusiastic about the intelligent, subtle and pragmatic approach taken by Amjad along the path. 
                         Always available and he & the team delivered great results while also meeting all 
                        the interim deadlines and objectives. Already impatient for the next project we can work on together!
                    </p>
                    <div className='rFooter'>
                        <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1_fil6rdswIjvGu1OYVNf75OscbxaiCUe-PSKsxMUcw&s'/>
                        <div className='rFooterR'>
                            <h1 className='rFRu'>stephane hubert</h1>
                            <h1 className='rFRd'>ceo @ clarty</h1>
                        </div>
                    </div>
                </div>
            </div>
            </div>
        </div>
    )
}
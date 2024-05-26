import './faq.css'
import { useState } from 'react'

export const Faqs = ({h,p}) => {
    const [active,setActive] = useState(false)
    const toggleFaq = () => {
        setActive((prev) => !prev)
    }
    return (
        <div id='faqs'>

            <div className='faqUp'>
            <h1>{h}</h1>
            <img src={`${active ? './up.png':'./down.png'}`} onClick={toggleFaq} />
            </div>
            
            <p id='faqsP' className={`${active ? 'show':'hide'}`}>{p}</p>
        </div>
    )
}
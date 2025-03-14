import './index.less';
import React, { useEffect, useRef, useState } from 'react';

import { FaSquareFacebook } from "react-icons/fa6";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { FaCalendarMinus } from "react-icons/fa6";
import AboutCandlestick from '../../../assets/quantsoc-graphics/hero-candlestick.svg';

import { GoPersonFill } from "react-icons/go";


const AboutUsSection = () => {
    return (
        <section className='about-us-section'>
            <div className='about-us-left-side'>
                <h1 className='about-us-header'>About Us</h1>
                <p>
                    We are the Quantitative Finance and Trading Society of UNSW.<br/>
                    Quantitative finance is distinguished from other financial industries
                    by its math-heavy approach to financial theory, unique interview problems,
                    and software engineering challenges. Our mission is to create a network of 
                    like-minded students and connect them to unique opportunities within this industry.
                </p>
                <div className='about-impact-section'>
                <div><span className='about-us-icon'><GoPersonFill /> </span><Counter target={400} />+<br/><span className='impact-trailing-text'>members</span></div>
                <div><span className='about-us-icon'><FaCalendarMinus/> </span><Counter target={20} />+<br/><span className='impact-trailing-text'>events last year</span></div>
                <div><span className='about-us-icon'><FaSquareFacebook/> </span><Counter target={1000} />+<br/><span className='impact-trailing-text'>facebook followers</span></div>
            </div>
            </div>
            <img className='about-us-right-side'src={AboutCandlestick}/>

            
        </section>
    );
};

export default AboutUsSection;




const Counter = ({ target }) => {
    const [count, setCount] = useState(0);
    const ref = useRef(null);
    
    useEffect(() => {
        const observer = new IntersectionObserver(([entry]) => {
            if (entry.isIntersecting) {
                let start = 0;
                const duration = 800; // 2 seconds
                const interval = 10;
                const step = target / (duration / interval);
                
                const counterInterval = setInterval(() => {
                    start += step;
                    if (start >= target) {
                        setCount(target);
                        clearInterval(counterInterval);
                    } else {
                        setCount(Math.floor(start));
                    }
                }, interval);
            }
        }, { threshold: 0.5 });

        if (ref.current) {
            observer.observe(ref.current);
        }

        return () => {
            if (ref.current) {
                observer.unobserve(ref.current);
            }
        };
    }, [target]);
    
    return <span ref={ref} className='counter-highlight-text'>{count.toLocaleString()}</span>;
};
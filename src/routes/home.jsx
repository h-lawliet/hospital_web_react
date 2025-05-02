import React, { useEffect, useRef, useCallback } from 'react';
import fullpage from 'fullpage.js';
import 'fullpage.js/dist/fullpage.css';
import "./home.css"
import Footer from '../components/footer';
import HomeSlider from '../components/homeslider1';
import Section2 from './home/section2';
import Section3 from './home/section3';
import Section4 from './home/section4';
import Section5 from './home/section5';
import PopNotice from '../components/PopNotice';

const FullpageComponent = () => {
  const fullpageRef = useRef(null);
  const footerRef = useRef(null);

  const adjustFooterHeight = useCallback(() => {
    const footerEl = footerRef.current;
    const footerSection = document.querySelector('.section.footer'); // 정확하게 선택
  
    if (footerEl && footerSection) {
      const footerHeight = footerEl.getBoundingClientRect().height;
  
      // 핵심 변경: style setProperty로 !important 적용
      footerSection.style.setProperty('height', `${footerHeight}px`, 'important');
  
      if (typeof fullpage_api !== 'undefined') {
        fullpage_api.reBuild();
      }
    } else {
      console.warn('Footer DOM or section.footer not ready');
    }
  }, []);

  const updateFullpageHeight = useCallback(() => {
    const height = window.innerHeight;
    document.documentElement.style.setProperty('--custom-height', `${height}px`);
  }, []);
  
  

  useEffect(() => {

    updateFullpageHeight();

    new fullpage(fullpageRef.current, {
      // licenseKey: import.meta.env.VITE_FULLPAGE_KEY,
      scrollingSpeed: 700,
      touchSensitivity: 20,
      autoScrolling: true,
      fitToSection: true,
      autoHeight: true,
      fitToSectionDelay: 2300,
      afterRender: () => {
        setTimeout(() => {
          adjustFooterHeight();
        }, 100);
      }
    });
    
    window.addEventListener('resize', updateFullpageHeight);
    window.addEventListener('resize', adjustFooterHeight);
  
    return () => {
      window.removeEventListener('resize', updateFullpageHeight);
      window.removeEventListener('resize', adjustFooterHeight);
      if (typeof fullpage_api !== 'undefined') {
        fullpage_api.destroy('all');
      }
    };
  }, [adjustFooterHeight, updateFullpageHeight]);
  

  return (
    <div id="fullpage" ref={fullpageRef}>
      <PopNotice/>
      <div className="section">
        <HomeSlider/>
      </div>
      <div className="section fullpage-2">
        <div className='opacity-cover'/>
        <Section2/>
      </div>
      <div className="section">
        <Section3/>
      </div>
      {/* <div className="section">
        <div className='fullpage-in-content'>
          <Section4/>
        </div>
      </div> */}
      <div className="section section5">
        <Section5/>
      </div>
      <div className="section footer">
        <Footer ref={footerRef}/>
      </div>
    </div>
  );
};

export default FullpageComponent;
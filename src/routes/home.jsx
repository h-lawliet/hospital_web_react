import React, { useEffect, useRef, useCallback } from 'react';
import fullpage from 'fullpage.js';
import 'fullpage.js/dist/fullpage.css';
import "./home.css"
import Footer from '../components/footer';
import HomeSlider from '../components/homeslider1';
import Section2 from './home/section2';
import Section3 from './home/section3';
import Section4 from './home/section4';

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
  
  

  useEffect(() => {
    new fullpage(fullpageRef.current, {
      licenseKey: 'UA5N9-557K9-VK88I-8JVII-AYFNO',
      scrollingSpeed: 1000,
      touchSensitivity: 100,
      autoScrolling: true,
      fitToSection: false,
      autoHeight: true,
      fitToSectionDelay: 2300,
      afterRender: () => {
        setTimeout(() => {
          adjustFooterHeight();
        }, 100);
      }
    });
  
    window.addEventListener('resize', adjustFooterHeight);
  
    return () => {
      window.removeEventListener('resize', adjustFooterHeight);
      if (typeof fullpage_api !== 'undefined') {
        fullpage_api.destroy('all');
      }
    };
  }, [adjustFooterHeight]);
  

  return (
    <div id="fullpage" ref={fullpageRef}>
      <div className="section fullpage-top">
        <HomeSlider/>
      </div>
      <div className="section fullpage-2">
        <div className='opacity-cover'/>
        <div className='fullpage-in-content'>
          <Section2/>
        </div>
      </div>
      <div className="section">
        <div className='fullpage-in-content'>
          <Section3/>
        </div>
      </div>
      <div className="section">
        <div className='fullpage-in-content'>
          <Section4/>
        </div>
      </div>
      <div className="section">
        <h1>Section 5</h1>
      </div>
      <div className="section footer">
        <Footer ref={footerRef}/>
      </div>
    </div>
  );
};

export default FullpageComponent;
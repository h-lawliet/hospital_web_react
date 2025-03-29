import React, { useEffect, useRef, useCallback } from 'react';
import fullpage from 'fullpage.js';
import 'fullpage.js/dist/fullpage.css';
import "./home.css"
import Footer from '../components/footer';
import HomeSlider from '../components/homeslider1';

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
      scrollingSpeed: 700,
      autoScrolling: true,
      fitToSection: false,
      autoHeight: true,
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
      <div className="section normal">
        <HomeSlider/>
      </div>
      <div className="section normal">
        <h1>Section 2</h1>
      </div>
      <div className="section normal">
        <h1>Section 3</h1>
      </div>
      <div className="section footer">
        <Footer ref={footerRef}/>
      </div>
    </div>
  );
};

export default FullpageComponent;
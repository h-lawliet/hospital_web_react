import React, { useEffect, useRef } from 'react';
import fullpage from 'fullpage.js';
import 'fullpage.js/dist/fullpage.css';
import "./test.css"

const FullpageComponent = () => {
  const fullpageRef = useRef(null);

  useEffect(() => {
    new fullpage(fullpageRef.current, {
      licenseKey: 'UA5N9-557K9-VK88I-8JVII-AYFNO',
      scrollingSpeed: 700,
      navigation: true,
      autoScrolling: true,
      fitToSection: false,   // 섹션 높이 고정 해제
      autoHeight: true,      // 섹션별 높이 다르게 설정 가능
    });

    return () => {
      if (typeof fullpage_api !== 'undefined') {
        fullpage_api.destroy('all');
      }
    };
  }, []);

  return (
    <div id="fullpage" ref={fullpageRef}>
      <div className="section normal">
        <h1>Section 1</h1>
      </div>
      <div className="section normal">
        <h1>Section 2</h1>
      </div>
      <div className="section normal">
        <h1>Section 3</h1>
      </div>
      <div className="section small">
        <h1>Last Section (30%)</h1>
      </div>
    </div>
  );
};

export default FullpageComponent;
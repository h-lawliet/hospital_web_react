import React, { useEffect } from "react";
import "./map.css"

const NaverMap = () => {
  useEffect(() => {
    const initMap = () => {
      const map = new naver.maps.Map("map", {
        center: new naver.maps.LatLng(37.2744044, 127.0300147),
        zoom: 14,
      });

      // 마커 추가
      new naver.maps.Marker({
        position: new naver.maps.LatLng(37.2744044, 127.0300147),
        map: map,
        title: "홍지만신경과",
      });
    };

    if (!window.naver) {
      const script = document.createElement("script");
      script.src = `https://oapi.map.naver.com/openapi/v3/maps.js?ncpClientId=6yo8cqofy8`;
      script.async = true;
      script.onload = () => initMap();
      document.body.appendChild(script);
    } else {
      initMap();
    }
  }, []);

  return <div id="map"/>;
};

export default NaverMap;
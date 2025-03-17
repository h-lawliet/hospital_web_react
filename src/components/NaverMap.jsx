import React, { useEffect, useState } from "react";
import "./map.css"

const NaverMap = (props) => {

  let [size, setSize] = useState(0)

  const handleResize = () => {
    if (window.innerWidth < 500) {
      setSize(0)
    } else if (500 <= window.innerWidth < 900) {
      setSize(1)
    } else {
      setSize(2)
    }
  }

  useEffect(() => {
    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [window.innerWidth])
  
  useEffect(() => {
    const initMap = () => {
      if (size === 0) {
        const map = new naver.maps.Map("map", {
          center: new naver.maps.LatLng(37.2744044, 127.0300147),
          zoom: 12,
          scrollWheel: props.scroll
        });
  
        // 마커 추가
        new naver.maps.Marker({
          position: new naver.maps.LatLng(37.2744044, 127.0300147),
          map: map,
          title: "홍지만신경과",
          icon: {
            url: "/images/logo/map_logo.png",
            size: new naver.maps.Size(40, 49),
            scaledSize: new naver.maps.Size(40, 49),
            origin: new naver.maps.Point(0, 0),
            anchor: new naver.maps.Point(20, 40)
          },
        });
      } else if (size === 1) {
        const map = new naver.maps.Map("map", {
          center: new naver.maps.LatLng(37.2744044, 127.0300147),
          zoom: 14,
          scrollWheel: props.scroll
        });
  
        // 마커 추가
        new naver.maps.Marker({
          position: new naver.maps.LatLng(37.2744044, 127.0300147),
          map: map,
          title: "홍지만신경과",
          icon: {
            url: "/images/logo/map_logo.png",
            size: new naver.maps.Size(50, 60),
            scaledSize: new naver.maps.Size(50, 60),
            origin: new naver.maps.Point(0, 0),
            anchor: new naver.maps.Point(25, 50)
          },
        });
      } else {
        const map = new naver.maps.Map("map", {
          center: new naver.maps.LatLng(37.2744044, 127.0300147),
          zoom: 16,
          scrollWheel: props.scroll
        });
      }
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
  }, [size])

  return <div id="map"/>;
};

export default NaverMap;
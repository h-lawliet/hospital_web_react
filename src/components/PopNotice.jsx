import React, { useEffect, useState } from 'react';
import api from '../api.js';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

const Popnotice = styled.div`
  position: fixed;
  bottom: 0;
  z-index: 1500;

  .popnotice-image, .popnotice-buttons {
    cursor: pointer;
  }

  @media (max-width: 800px) {

    font-size: 14px;

    .popnotice-container {
      position: fixed;
      left: 15px;
      top: 120px;
    }

    .popnotice-image {
      width: 280px;
      display: block;
    }

    .popnotice-buttons {
      display: flex;
      flex-direction: row;
      background-color: white;
    }
    .popnotice-buttons > div {
      flex: 1;
      text-align: center;
      line-height: 30px;
      border-top: 1px solid rgb(140, 140, 140);
    }
    .popnotice-buttons > div:first-child {
      border-right: 1px solid rgb(140, 140, 140);
    }
  }

  @media (min-width: 800px) and (max-width: 1200px) {
    font-size: 15px;

    .popnotice-container {
      position: fixed;
      left: 20px;
      top: 120px;
    }

    .popnotice-image {
      width: 370px;
      display: block;
    }

    .popnotice-buttons {
      display: flex;
      flex-direction: row;
      background-color: white;
    }

    .popnotice-buttons > div {
      flex: 1;
      text-align: center;
      line-height: 35px;
      border-top: 1px solid rgb(140, 140, 140);
    }

    .popnotice-buttons > div:first-child {
      border-right: 1px solid rgb(140, 140, 140);
    }
  }

  @media (min-width: 1200px) {
    font-size: 16px;

    .popnotice-container {
      position: fixed;
      left: 20px;
      top: calc(12vh + 20px);
    }

    .popnotice-image {
      width: 370px;
      display: block;
    }

    .popnotice-buttons {
      display: flex;
      flex-direction: row;
      background-color: white;
    }

    .popnotice-buttons > div {
      flex: 1;
      text-align: center;
      line-height: 40px;
      border-top: 1px solid rgb(140, 140, 140);
    }

    .popnotice-buttons > div:first-child {
      border-right: 1px solid rgb(140, 140, 140);
    }
  }
`


const PopNotice = () => {
  const [notices, setNotices] = useState([]);
  const [visibleIds, setVisibleIds] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);  // 현재 보여줄 공지 index
  const navigate = useNavigate();

  useEffect(() => {
    const now = new Date().getTime();
    const hidden = JSON.parse(localStorage.getItem('hiddenNotices') || '{}');

    api.get('/notice/status/active')
      .then((res) => {
        if (res.data.status === 200) {
          const visible = res.data.content.filter(notice => {
            const hideUntil = hidden[notice._id];
            return !hideUntil || now > hideUntil;
          });
          setNotices(visible);
          setVisibleIds(visible.map(n => n._id));
        } else {
          setNotices([]);
          console.log(res.data);
        }
      })
      .catch((err) => {
        setNotices([]);
        console.log(err);
      });
  }, []);

  const handleDismiss12h = (id) => {
    const hidden = JSON.parse(localStorage.getItem('hiddenNotices') || '{}');
    hidden[id] = new Date().getTime() + 12 * 60 * 60 * 1000;
    localStorage.setItem('hiddenNotices', JSON.stringify(hidden));

    goToNext();
  };

  const handleClose = () => {
    goToNext();
  };

  const goToNext = () => {
    setCurrentIndex((prev) => prev + 1);
  };

  const currentNotice = notices[currentIndex];

  return (
    <Popnotice>
      {currentNotice && visibleIds.includes(currentNotice._id) && (
        <div className="popnotice-container">
          <div className="popnotice-content">
            <img
              src={currentNotice.imageUrls[0]}
              alt="공지사항"
              className="popnotice-image"
              onClick={() => navigate(`/community/2/${currentNotice._id}`)}
            />
            <div className="popnotice-buttons">
              <div onClick={() => handleDismiss12h(currentNotice._id)}>
                12시간 동안 보지 않기
              </div>
              <div onClick={handleClose}>닫기</div>
            </div>
          </div>
        </div>
      )}
    </Popnotice>
  );
};

export default PopNotice;
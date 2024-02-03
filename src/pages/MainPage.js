import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './MainPage.css';
import mainImage from '../style/img/main_image.png';

function MainPage({ data, updateData }) {
  const [inputValue, setInputValue] = useState('');
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      if (!inputValue.trim()) {
        alert('이름을 입력해주세요.');
        return;
      }
      navigate('/select_goal');
    }
  };

  const handleButtonClick = () => {
    if (!inputValue.trim()) {
      alert('이름을 입력해주세요.');
      return;
    }

    updateData({ ...data, username: inputValue });
    navigate('/select_goal');
  };

  return (
    <div className="main-container">
      <h1 className="title">내가 쓰는 내 이야기</h1>
      <p className="quotation">
        “우리가 조금 더 의식적으로 우리 자신의 저작권 (authorship)을 갖지 않으면 남들이 대신 우리 이야기를 쓰게 될
        것이다.”
      </p>
      <p className="quotation-source">
        데런 브라운, {'<'}모든 것이 괜찮아지는 기술{'>'}
      </p>
      <div className="image-container">
        <img className="main-image" alt="작성하는 사람" src={mainImage} />
      </div>
      <div className="input-container">
        <input
          value={inputValue}
          onChange={handleInputChange}
          onKeyDown={handleKeyDown}
          placeholder="실명을 입력하세요."
        ></input>
        <span></span>
      </div>
      <div className="button-container">
        <div to="/select_goal" className="start-button" onClick={handleButtonClick} style={{ textDecoration: 'none' }}>
          이름 입력하고 시작하기
        </div>
      </div>
    </div>
  );
}

export default MainPage;

import React from 'react';
import { Link } from 'react-router-dom';
import './MainPage.css';

function MainPage() {
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
        <img className="main-image" alt="작성하는 사람" src="img/main_image.png" />
      </div>
      <div className="input-container">
        <input placeholder="실명을 입력하세요."></input>
        <span></span>
      </div>
      <div className="button-container">
        <Link to="/select_goal" className="start-button" style={{ textDecoration: 'none' }}>
          이름 입력하고 시작하기
        </Link>
      </div>
    </div>
  );
}

export default MainPage;

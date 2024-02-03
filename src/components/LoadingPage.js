import React, { useEffect, useState } from 'react';
import bookImage from '../style/img/book_image.png';
import './LoadingPage.css';

const LoadingPage = ({ name, path }) => {
  const scenarioLoading = (
    <div className="loading-page">
      <div>
        <img className="loading-spinner" src="/img/book_image.png" alt="로딩 중" />
      </div>

      <h2 className="title">
        {name} 이야기
        <br /> 시나리오 작성 준비중..
      </h2>

      <div>
        <div>
          <p>✔️ 총 다섯 개의 상황이 주어집니다.</p>
          <p>✔️ 각 상황에서, 두 선택지 중 하나를 골라주세요.</p>
        </div>
      </div>
    </div>
  );
  const resultLoading = (
    <div className="loading-page">
      <div>
        <img className="loading-spinner" src={bookImage} alt="로딩 중" />
      </div>

      <h2 className="title">오영준 이야기 작성 중..</h2>
    </div>
  );
  return path === 1 ? scenarioLoading : resultLoading;
};

export default LoadingPage;

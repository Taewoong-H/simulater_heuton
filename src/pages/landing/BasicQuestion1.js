import React from 'react';
import { Link } from 'react-router-dom';
import './BasicQuestion.css';

function BasicQuestion1() {
  return (
    <div className="basic-question-container">
      <h2 className="title">기본 질문 1</h2>
      <textarea placeholder="답변을 입력하세요"></textarea>
      <div className="button-container">
        <Link to="/loading" className="start-button" style={{ textDecoration: 'none' }}>
          질문 패키기 시작하기
        </Link>
      </div>
    </div>
  );
}

export default BasicQuestion1;

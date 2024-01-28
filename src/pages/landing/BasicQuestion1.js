import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './BasicQuestion.css';

function BasicQuestion1({ data, updateData }) {
  const [answerValue, setAnswerValue] = useState('');

  const handleInputChange = (e) => {
    setAnswerValue(e.target.value);
  };

  const handleButtonClick = () => {
    updateData({ basicQaObject: [...data.basicQaObject, { question: '기본 질문 1', answerValue }] });
  };

  return (
    <div className="basic-question-container">
      <h2 className="title">기본 질문 1</h2>
      <textarea value={answerValue} onChange={handleInputChange} placeholder="답변을 입력하세요"></textarea>
      <div className="button-container">
        <Link to="/scenario_1" className="start-button" onClick={handleButtonClick} style={{ textDecoration: 'none' }}>
          질문 패키기 시작하기
        </Link>
      </div>
    </div>
  );
}

export default BasicQuestion1;

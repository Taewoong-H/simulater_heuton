import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './BasicQuestion.css';
import { Question2 } from '../../utils/Questions';

function BasicQuestion2({ data, updateData }) {
  const [answerValue, setAnswerValue] = useState('');

  const handleInputChange = (e) => {
    setAnswerValue(e.target.value);
  };

  const handleButtonClick = () => {
    updateData({
      ...data,
      basicQaObject: [...data.basicQaObject, { question: Question2[data.mostImportant], answerValue }],
    });
  };

  return (
    <div className="basic-question-container">
      <h2 className="title">{Question2[data.mostImportant]}</h2>
      <textarea value={answerValue} onChange={handleInputChange} placeholder="답변을 입력하세요"></textarea>
      <div className="button-container">
        <Link
          to="/basic_question_3"
          className="start-button"
          onClick={handleButtonClick}
          style={{ textDecoration: 'none' }}
        >
          질문 패키기 시작하기
        </Link>
      </div>
    </div>
  );
}

export default BasicQuestion2;

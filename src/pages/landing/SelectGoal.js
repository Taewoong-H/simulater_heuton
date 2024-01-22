import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './SelectGoal.css';

function SelectGoal({ data, updateData }) {
  const [selectValue, setSelectValue] = useState(0);

  const checkOnlyOne = (checkThis) => {
    const checkboxes = document.getElementsByName('check-goal');
    for (let i = 0; i < checkboxes.length; i++) {
      if (checkboxes[i] !== checkThis) {
        checkboxes[i].checked = false;
      }
    }
    setSelectValue(checkThis.value);
  };

  const handleButtonClick = () => {
    updateData({ mostImportant: selectValue });
  };

  return (
    <div className="select-goal-container">
      <h2 className="title">
        지금 내 삶에서
        <br /> 가장 중요한 목표는 무엇인가요?
      </h2>
      <div className="checkbox-container">
        <div className="cat action">
          <label>
            <input type="checkbox" name="check-goal" value="1" onChange={(e) => checkOnlyOne(e.target)} />
            <span>돈 많이 벌기</span>
          </label>
        </div>
        <div className="cat action">
          <label>
            <input type="checkbox" name="check-goal" value="2" onChange={(e) => checkOnlyOne(e.target)} />
            <span>취업하기</span>
          </label>
        </div>
        <div className="cat action">
          <label>
            <input type="checkbox" name="check-goal" value="3" onChange={(e) => checkOnlyOne(e.target)} />
            <span>꿈 이루기</span>
          </label>
        </div>
        <div className="cat action">
          <label>
            <input type="checkbox" name="check-goal" value="4" onChange={(e) => checkOnlyOne(e.target)} />
            <span>연애하기</span>
          </label>
        </div>
        <div className="cat action">
          <label>
            <input type="checkbox" name="check-goal" value="5" onChange={(e) => checkOnlyOne(e.target)} />
            <span>결혼하기</span>
          </label>
        </div>
        <div className="cat action">
          <label>
            <input type="checkbox" name="check-goal" value="6" onChange={(e) => checkOnlyOne(e.target)} />
            <span>행복한 삶 살기</span>
          </label>
        </div>
        <div className="cat action">
          <label>
            <input type="checkbox" name="check-goal" value="7" onChange={(e) => checkOnlyOne(e.target)} />
            <span>회사에 성과내기</span>
          </label>
        </div>
        <div className="cat action">
          <label>
            <input type="checkbox" name="check-goal" value="8" onChange={(e) => checkOnlyOne(e.target)} />
            <span>기타</span>
          </label>
        </div>
      </div>
      <div className="button-container">
        <Link
          to="/basic_question_1"
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

export default SelectGoal;

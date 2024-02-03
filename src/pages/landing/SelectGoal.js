import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { mostImportant } from '../../utils/Questions';
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
    updateData({ ...data, mostImportant: selectValue });
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
            <span>{mostImportant[1]}</span>
          </label>
        </div>
        <div className="cat action">
          <label>
            <input type="checkbox" name="check-goal" value="2" onChange={(e) => checkOnlyOne(e.target)} />
            <span>{mostImportant[2]}</span>
          </label>
        </div>
        <div className="cat action">
          <label>
            <input type="checkbox" name="check-goal" value="3" onChange={(e) => checkOnlyOne(e.target)} />
            <span>{mostImportant[3]}</span>
          </label>
        </div>
        <div className="cat action">
          <label>
            <input type="checkbox" name="check-goal" value="4" onChange={(e) => checkOnlyOne(e.target)} />
            <span>{mostImportant[4]}</span>
          </label>
        </div>
        <div className="cat action">
          <label>
            <input type="checkbox" name="check-goal" value="5" onChange={(e) => checkOnlyOne(e.target)} />
            <span>{mostImportant[5]}</span>
          </label>
        </div>
        <div className="cat action">
          <label>
            <input type="checkbox" name="check-goal" value="6" onChange={(e) => checkOnlyOne(e.target)} />
            <span>{mostImportant[6]}</span>
          </label>
        </div>
        <div className="cat action">
          <label>
            <input type="checkbox" name="check-goal" value="7" onChange={(e) => checkOnlyOne(e.target)} />
            <span>{mostImportant[7]}</span>
          </label>
        </div>
        <div className="cat action">
          <label>
            <input type="checkbox" name="check-goal" value="8" onChange={(e) => checkOnlyOne(e.target)} />
            <span>{mostImportant[8]}</span>
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

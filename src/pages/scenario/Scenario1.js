import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import LoadingPage from '../../components/LoadingPage';
import Modal from 'react-modal';
import './Scenario.css';

function Scenario1({ data, updateData }) {
  const [loading, setLoading] = useState(true);
  const [selectValue, setSelectValue] = useState(0);
  const [inputValue, setInputValue] = useState('');
  const [showModal, setShowModal] = useState(false);
  const [reasons, setReasons] = useState('');

  const checkOnlyOne = (checkThis) => {
    const checkboxes = document.getElementsByName('check-goal');
    for (let i = 0; i < checkboxes.length; i++) {
      if (checkboxes[i] !== checkThis) {
        checkboxes[i].checked = false;
      }
    }
    setSelectValue(checkThis.value);
  };

  const openModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleAddReason = () => {
    // Add the input value to the 'reasons' state array
    setReasons(inputValue);
    // Clear the input value
    setInputValue('');
    // Close the modal
    closeModal();
  };

  const handleButtonClick = () => {
    updateData({ pastScenarios: [...data.pastScenarios, { selectValue, reasons }] });
  };

  useEffect(() => {
    // Simulating an API call with setTimeout
    const simulateApiCall = () => {
      setTimeout(() => {
        setLoading(false);
      }, 2000); // Simulating a 2-second API call
    };

    simulateApiCall();
    console.log(data);
  }, []);

  return (
    <>
      {loading ? (
        <LoadingPage name={data.username} path={1} />
      ) : (
        <div className="scenario-container">
          <p className="scene">
            오영준은 기존의 일에 머물러 있지 않고, 꿈을 이루기 위한 첫 걸음으로 창업을 시작했다. 그는 현재 소규모
            스타트업을 설립하여 비전을 실현하고자 한다.
          </p>
          <div className="scene-options-container">
            <div className="scene-options">
              <label>
                <input
                  type="checkbox"
                  name="check-goal"
                  value="1"
                  onChange={(e) => {
                    checkOnlyOne(e.target);
                    openModal();
                  }}
                />
                <p>
                  선택지 1: <strong>"전통적인 산업에 도전"</strong>
                  <br />
                  <br />
                  오영준은 안전한 길을 택하고, 이미 성공한 산업에 도전한다. 가치 창출과 안정성을 추구하며, 현재 시장에서
                  성공한 모델을 따라가려 한다. 이를 통해 초기에는 안정적인 수익을 기대할 수 있지만, 창업의 독창성은
                  부족할 수 있다. 오영준은 안전한 길을 택하고, 이미 성공한 산업에 도전한다. 가치 창출과 안정성을
                  추구하며, 현재 시장에서 성공한 모델을 따라가려 한다. 이를 통해 초기에는 안정적인 수익을 기대할 수
                  있지만, 창업의 독창성은 부족할 수 있다. 오영준은 안전한 길을 택하고, 이미 성공한 산업에 도전한다. 가치
                  창출과 안정성을 추구하며, 현재 시장에서 성공한 모델을 따라가려 한다. 이를 통해 초기에는 안정적인
                  수익을 기대할 수 있지만, 창업의 독창성은 부족할 수 있다. 오영준은 안전한 길을 택하고, 이미 성공한
                  산업에 도전한다. 가치 창출과 안정성을 추구하며, 현재 시장에서 성공한 모델을 따라가려 한다. 이를 통해
                  초기에는 안정적인 수익을 기대할 수 있지만, 창업의 독창성은 부족할 수 있다. 오영준은 안전한 길을
                  택하고, 이미 성공한 산업에 도전한다. 가치 창출과 안정성을 추구하며, 현재 시장에서 성공한 모델을
                  따라가려 한다. 이를 통해 초기에는 안정적인 수익을 기대할 수 있지만, 창업의 독창성은 부족할 수 있다.
                </p>
              </label>
            </div>
            <div className="scene-options">
              <label>
                <input
                  type="checkbox"
                  name="check-goal"
                  value="2"
                  onChange={(e) => {
                    checkOnlyOne(e.target);
                    openModal();
                  }}
                />
                <p>
                  선택지 1: <strong>"전통적인 산업에 도전"</strong>
                  <br />
                  <br />
                  오영준은 안전한 길을 택하고, 이미 성공한 산업에 도전한다. 가치 창출과 안정성을 추구하며, 현재 시장에서
                  성공한 모델을 따라가려 한다. 이를 통해 초기에는 안정적인 수익을 기대할 수 있지만, 창업의 독창성은
                  부족할 수 있다.
                </p>
              </label>
            </div>
          </div>

          {/* Modal */}
          <Modal
            className="modal"
            isOpen={showModal}
            onRequestClose={closeModal}
            style={{
              content: {
                width: '299px',
                height: '288px',
                padding: '18px 13px',
                backgroundColor: 'white',
                textAlign: 'center',
                margin: '50% auto', // Center the modal horizontally
                borderRadius: '10px', // Add border-radius
                border: '1px solid #ccc',
              },
            }}
            ariaHideApp={false}
          >
            <h2>Enter Reason</h2>
            <textarea
              type="text"
              value={inputValue}
              style={{
                width: '273px',
                height: '151px',
                margin: '10px 0', // Add margin for better spacing
                borderRadius: '10px',
                border: '1px solid #D5D5D5',
              }}
              onChange={handleInputChange}
            />
            <button onClick={handleAddReason}>Add Reason</button>
            <button onClick={closeModal}>Close Modal</button>
          </Modal>

          <div className="button-container">
            <Link
              to="/scenario_2"
              className="start-button"
              onClick={handleButtonClick}
              style={{ textDecoration: 'none' }}
            >
              다음 시나리오로
            </Link>
          </div>
        </div>
      )}
    </>
  );
}

export default Scenario1;

import React, { useEffect, useState } from 'react';
import LoadingPage from '../../components/LoadingPage';
import './Result.css';

function Result({ data, updateData }) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    document.body.style.backgroundColor = '#260401';
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
        <LoadingPage />
      ) : (
        <div className="result-container">
          <p className="title">📖{data.username} 이야기📖</p>
          <div className="desc-box">
            <p className="desc">
              오영준은 목표를 달성함으로써 자신의 자아실현에 크게 기여한다고 믿으며, 꿈을 향한 여정에서 혁신과 전문성,
              그리고 깊은 이해를 향한 끊임없는 노력으로 성공을 찾아 나갔다. 그는 초기에 혁신적인 아이디어에 주력하여
              기존의 틀을 깨고 창의적인 길을 걷으며, 이를 통해 자아실현의 첫 걸음을 내디뎠다. 두 번째로, 그는 사용자
              중심 디자인을 택해 기술의 발전과 함께 사용자 경험이 중요하다는 인식을 강조했다. 그는 혁신과 더불어
              사용자들에게 진정한 가치를 제공하는 것이 목표에 도달하는 핵심이라고 생각하며, 초기에 사용자들의 신뢰를
              얻는 것을 통해 자아실현과 고객들과의 강한 연결을 이루어 나갔다. 마지막으로, 오영준은 니치 시장에서의
              전문성에 초점을 맞추어 완성된 여정을 마무리했다. 특정 사용자 그룹에 중점을 두어 성공을 거두며, 소수의
              고객을 완벽하게 만족시키면서 자아실현과 가치 창출을 동시에 이루어냈다. 그의 이야기는 결국 성공과 가치
              창출을 통한 완성된 삶의 시작을 알리며, 목표 달성으로 이어진 자아실현의 성공 이야기를 완성하고 있다.
              오영준은 목표를 달성함으로써 자신의 자아실현에 크게 기여한다고 믿으며, 꿈을 향한 여정에서 혁신과 전문성,
              그리고 깊은 이해를 향한 끊임없는 노력으로 성공을 찾아 나갔다. 그는 초기에 혁신적인 아이디어에 주력하여
              기존의 틀을 깨고 창의적인 길을 걷으며, 이를 통해 자아실현의 첫 걸음을 내디뎠다. 두 번째로, 그는 사용자
              중심 디자인을 택해 기술의 발전과 함께 사용자 경험이 중요하다는 인식을 강조했다. 그는 혁신과 더불어
              사용자들에게 진정한 가치를 제공하는 것이 목표에 도달하는 핵심이라고 생각하며, 초기에 사용자들의 신뢰를
              얻는 것을 통해 자아실현과 고객들과의 강한 연결을 이루어 나갔다. 마지막으로, 오영준은 니치 시장에서의
              전문성에 초점을 맞추어 완성된 여정을 마무리했다. 특정 사용자 그룹에 중점을 두어 성공을 거두며, 소수의
              고객을 완벽하게 만족시키면서 자아실현과 가치 창출을 동시에 이루어냈다. 그의 이야기는 결국 성공과 가치
              창출을 통한 완성된 삶의 시작을 알리며, 목표 달성으로 이어진 자아실현의 성공 이야기를 완성하고 있다.
            </p>
          </div>
        </div>
      )}
    </>
  );
}

export default Result;

import React from 'react';

const ProgramInfo = ({ openVideoModal }) => {
  return (
    <div className="support-item">
      <h2>시설 및 운동 프로그램 안내</h2>
      <div className="program-icons">
        {/* 퍼스널 트레이닝 */}
        <div
          className="program-icon"
          onClick={() => openVideoModal('2IC2aFmZmhU')}
        >
          <i className="fas fa-dumbbell"></i>
          <h3>1:1 퍼스널 트레이닝</h3>
          <p>전문 트레이너와 함께하는 맞춤형 운동 프로그램을 경험해보세요.</p>
        </div>

        {/* 필라테스 */}
        <div
          className="program-icon"
          onClick={() => openVideoModal('kp95ddvwEco')}
        >
          <i className="fas fa-spa"></i>
          <h3>1:1 필라테스</h3>
          <p>코어 강화와 유연성 향상을 위한 전문 필라테스 프로그램을 경험해보세요.</p>
        </div>

        {/* 시설 안내 */}
        <div
          className="program-icon"
          onClick={() => openVideoModal('ttLsouhAFho')}
        >
          <i className="fas fa-building"></i>
          <h3>최고의 시설</h3>
          <p>함께 운동하며 건강과 즐거움을 찾아가는 여정을 경험해보세요.</p>
        </div>
      </div>
    </div>
  );
};

export default ProgramInfo;

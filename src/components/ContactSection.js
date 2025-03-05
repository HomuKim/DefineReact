import React from 'react';

const ContactSection = ({ openMap }) => {
  return (
    <div className="contact-section">
      <h2 className="contact-title">문의하기</h2>
      <div className="contact-grid">
        {/* 채팅 문의 */}
        <div
          className="contact-item"
          onClick={() =>
            window.open('https://talk.naver.com/ct/w5u13y?frm=pnmb&frm=nmb_detail#nafullscreen')
          }
        >
          <div className="contact-icon">
            <i className="fas fa-comments"></i>
          </div>
          <h3>채팅 문의</h3>
          <p>평일 06:00 - 24:00 / 주말 및 공휴일 10:00 - 20:00</p>
          <p>설 / 추석 연휴 제외</p>
        </div>

        {/* 전화 문의 */}
        <div className="contact-item">
          <div className="contact-icon">
            <i className="fas fa-phone"></i>
          </div>
          <h3>전화 문의</h3>
          <p>010-7275-2477</p>
          <p>평일 06:00 - 24:00 / 주말 및 공휴일 10:00 - 20:00</p>
          <p>설 / 추석 연휴 제외</p>
        </div>

        {/* 매장 찾기 */}
        <div className="contact-item" onClick={openMap}>
          <div className="contact-icon">
            <i className="fas fa-map-marker-alt"></i>
          </div>
          <h3>매장 찾기</h3>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;

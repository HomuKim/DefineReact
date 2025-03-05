import React from 'react';

const FAQ = () => {
  const faqItems = [
    { question: '운영 시간은 어떻게 되나요?', answer: '평일 06:00 - 24:00 / 주말 및 공휴일 10:00 - 20:00 입니다.' },
    { question: '휴무는 없나요?', answer: '명절(설, 추석) 당일과 전날 총 4일 휴무입니다.' },
    { question: '회원권 종류는 어떻게 되나요?', answer: '1개월, 4개월, 7개월, 12개월 단위로 회원권을 제공하고 있습니다.' },
    { question: '개인락커와 운동복은 무료인가요?', answer: '개인락커와 운동복은 결제 후 이용하셔야 합니다.' },
    { question: 'PT를 결제하면 회원권은 무료인가요?', answer: 'PT와 회원권은 별도로 결제 후 이용 하셔야 합니다.' },
  ];

  return (
    <div className="support-item">
      <h2>자주 묻는 질문 (FAQ)</h2>
      <ul className="faq-list">
        {faqItems.map((item, index) => (
          <li key={index}>
            <h3>{item.question}</h3>
            <p>{item.answer}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FAQ;

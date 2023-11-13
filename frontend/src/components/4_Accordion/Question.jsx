import React, { useState } from 'react';
import { AiOutlinePlus, AiOutlineMinus } from 'react-icons/ai';

const Question = ({ title, info }) => {
  const [showQuestion, setShowQuestion] = useState(false);
  return (
    <div className="single-question shadow-lg px-2 py-3 bg-warning text-dark mb-3">
      <div className="q_header d-flex align-items-center justify-content-between">
        <h6>{title}</h6>
        <button onClick={() => setShowQuestion(!showQuestion)}>
          {showQuestion ? <AiOutlineMinus /> : <AiOutlinePlus />}
        </button>
      </div>
      {showQuestion && <p>{info}</p>}
    </div>
  );
};

export default Question;

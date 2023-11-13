import React, { useState } from 'react';
import './qustion.css';
import data from '../../data/data.js';
import SingleQuestion from './Question';
const Index = () => {
  const [questions, setQuestion] = useState(data);
  return (
    <div className="container">
      <div className="row d-flex align-items-center justify-content-center">
        {questions.map((question) => {
          return (
            <div className="col-8 mx-auto">
              <SingleQuestion key={question.id} {...question} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Index;

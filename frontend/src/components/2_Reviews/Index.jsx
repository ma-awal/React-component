import React from 'react';
import Reviews from './Reviews';
import './reviews.css';

const Index = () => {
  return (
    <div className="container">
      <div className="row justify-content-center align-items-center ">
        <div className="col-6">
          <Reviews />
        </div>
      </div>
    </div>
  );
};

export default Index;

import React, { useState } from 'react';
import List from './List';
import data from '../../data/data';
import './birth.css';
const Index = () => {
  const [people, setPeople] = useState(data);
  return (
    <div className="container" style={{ backgroundColor: 'rgb(234, 97, 175)' }}>
      <div className="row min-vh-100 align-items-center justify-content-center">
        <div className="col-8">
          <div className="birth_day border  py-5 shadow-lg rounded w-50 px-4 mx-auto   ">
            <h4 className="mb-3">{people.length} Birthday Today </h4>
            <List people={people} />
            <button
              className="btn clear  w-100 fs-5 "
              onClick={() => setPeople([])}
            >
              Clear all
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;

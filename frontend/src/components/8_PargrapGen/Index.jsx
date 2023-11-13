import React, { useState } from 'react';
import data from '../../data/text';
import './style.css';
const Index = () => {
  const [count, setCount] = useState(0);
  const [text, setText] = useState([]);
  const handleSubmit = (e) => {
    e.preventDefault();

    let amount = parseInt(count);
    if (count <= 0) {
      amount = 1;
    }
    if (count >= 8) {
      amount = 8;
    }
    setText(data.slice(0, amount));
  };
  return (
    <div>
      <h3>Boring to write time and again</h3>
      <form onSubmit={handleSubmit}>
        <div className="d-flex align-items-center gap-1">
          <label htmlFor="paragraphGenerator ">Pragraph</label>
          <input
            type="number"
            name="count"
            value={count}
            id="count"
            onChange={(e) => setCount(e.target.value)}
          />
          <button type="submit" className="btn btn-sm btn-warning  ">
            generator
          </button>
        </div>
      </form>
      {text.map((item, index) => {
        return <p key={index}>{item}</p>;
      })}
    </div>
  );
};

export default Index;

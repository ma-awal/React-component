import React, { useState } from 'react';

const Tour = ({ id, img, name, price, info, removeItems }) => {
  const [readmore, setReadmore] = useState(false);

  return (
    <div className="single-tour border  text-center shadow text-capitalize mx-auto px-5 py-5">
      <img src={img} alt="img" />
      <div className="tour-info text-start d-flex align-items-center justify-content-between mt-5">
        <p className=" ">
          <strong>{name}</strong>
        </p>
        <p className="price  ">
          $<strong>{price}</strong>
        </p>
      </div>
      <p className="mb-0 text-start">
        {readmore ? info : `${info.substring(0, 100)}...`}
        <button onClick={() => setReadmore(!readmore)}>
          {readmore ? 'Show less' : 'Readmore'}
        </button>
      </p>
      <button onClick={() => removeItems(id)}>Not enterest</button>
    </div>
  );
};

export default Tour;

import React, { useState } from 'react';
import people from '../../data/data.js';
import { BsChevronLeft, BsChevronRight } from 'react-icons/bs';

const Reviews = () => {
  const [index, setIndex] = useState(0);
  const { id, img, name, title, info } = people[index];

  const chekNumber = (number) => {
    if (number > people.length - 1) {
      return 0;
    }
    if (number < 0) {
      return people.length - 1;
    }
    return number;
  };
  const prevPerson = () => {
    setIndex((index) => {
      let newIndex = index + 1;
      return chekNumber(newIndex);
    });
  };

  const nextPerson = () => {
    setIndex((index) => {
      let newIndex = index - 1;
      return chekNumber(newIndex);
    });
  };
  const randomPerson = () => {
    let randomNumber = Math.floor(Math.random()) * people.length;
    if (randomNumber === index) {
      randomNumber = index + 1;
    }
    setIndex(chekNumber(randomNumber));
  };

  return (
    <article key={id} className="py-2 px-3 shadow text-center lh-1">
      <div className="img mx-auto">
        <img src={img} className="rounded-circle mx-auto" alt={name} />
      </div>
      <h6>{title}</h6>
      <p>{name}</p>
      <p>{info}</p>
      <div className="btns d-flex gap-2 justify-content-center">
        <button className="btn btn-warning" onClick={prevPerson}>
          <BsChevronLeft />
        </button>
        <button className="btn btn-warning" onClick={nextPerson}>
          <BsChevronRight />
        </button>
      </div>
      <button className="btn btn-danger" onClick={randomPerson}>
        Random btn
      </button>
    </article>
  );
};

export default Reviews;

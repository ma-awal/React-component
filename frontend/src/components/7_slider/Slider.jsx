import React, { useEffect, useState } from 'react';
import data from '../../data/data';
import { FiChevronRight, FiChevronLeft } from 'react-icons/fi';

const Slider = () => {
  const [people, setPeople] = useState(data);
  const [index, setIndex] = useState(0);
  useEffect(() => {
    const lastIndex = people.length - 1;
    if (index < 0) {
      setIndex(lastIndex);
    }
    if (index > lastIndex) {
      setIndex(0);
    }
  }, [people, index]);

  useEffect(() => {
    let slider = setInterval(() => {
      setIndex(index + 1);
    }, 5000);
    return () => {
      clearInterval(slider);
    };
  }, [index]);
  return (
    <div className="justify-content-between align-items-center gap-3  ">
      {people.map((person, personIndex) => {
        const { id, name, img, title } = person;
        let position = 'nextSlide;';
        if (personIndex === index) {
          position = 'activeSlide';
        }
        if (
          personIndex === index - 1 ||
          (index === 0 && index === people.length - 1)
        ) {
          position = 'lastSlide';
        }
        return (
          <article className={position} key={id}>
            <img src={img} className="img-fluid" alt={name} />
            <div className="info mt-3">
              <h6>{name}</h6>
              <p>{title}</p>
            </div>
          </article>
        );
      })}
      <button className="prev" onClick={() => setIndex(index - 1)}>
        <FiChevronLeft />
      </button>
      <button className="next" onClick={() => setIndex(index + 1)}>
        <FiChevronRight />
      </button>
    </div>
  );
};

export default Slider;

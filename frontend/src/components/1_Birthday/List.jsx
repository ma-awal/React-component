import React from 'react';

const List = ({ people }) => {
  return (
    <>
      {people.map((person) => {
        const { id, img, name, age } = person;
        return (
          <article
            key={id}
            className="d-flex gap-3 mb-3 align-items-center List"
          >
            <div>
              <img src={img} className=" rounded-circle    " alt="img" />
            </div>
            <div className="">
              <p className="m-0 p-0 fw-semibold">{name}</p>
              <small className="text-muted">{age} years</small>
            </div>
          </article>
        );
      })}
    </>
  );
};

export default List;

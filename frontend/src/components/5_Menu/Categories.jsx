import React from 'react';

const Categories = ({ categories, filterItems }) => {
  return (
    <div className="text-center ">
      <h1 className="border bottom d-d-inline-block">Menut item</h1>
      <div className="btn-container d-flex gap-2 justify-content-center">
        {categories.map((category, index) => {
          return (
            <button
              key={index}
              className="btn btn-dark text-white"
              onClick={() => filterItems(category)}
            >
              {category}
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default Categories;

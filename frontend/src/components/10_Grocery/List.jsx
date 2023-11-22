import React from 'react';

const List = ({ items, removeItem, editItem }) => {
  console.log(items);
  return (
    <div className="my-3">
      <ul className="list-unstyled list-group lh-lg">
        {items.map((item) => {
          const { id, title } = item;
          return (
            <li className="d-flex justify-content-between align-items-center  shadow py-2 px-2">
              <div className="text-capitalize">{title}</div>
              <div className="btns">
                <button
                  className="edit btn btn-warning rounded-0 btn-sm me-2"
                  onClick={() => editItem(id)}
                >
                  Edit
                </button>
                <button
                  className="edit btn btn-danger rounded-0 btn-sm"
                  onClick={() => removeItem(id)}
                >
                  Delete
                </button>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default List;

import React from 'react';

const Menu = ({ items }) => {
  return (
    <div className="row gy-4 ">
      {items.map((item) => {
        return (
          <div key={item.id} className="col-6 col-md-4 ">
            <article className=" h-100 border px-3 py-3 d-flex flex-column flex-lg-row align-items-center justify-content-between gap-2">
              <img src={item.img} className="img-fluid rounded" alt="img" />
              <div className="menu-info">
                <div className="menu-header text-capitalize d-flex align-items-center justify-content-between border-bottom pb-0">
                  <h6>{item.title}</h6>
                  <h6>${item.price}</h6>
                </div>
                <p className="text-muted text-capitalize">{item.info}</p>
              </div>
            </article>
          </div>
        );
      })}
    </div>
  );
};

export default Menu;

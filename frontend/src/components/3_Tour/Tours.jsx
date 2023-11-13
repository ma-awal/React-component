import Tour from './Tour';
const Tours = ({ items, removeItems }) => {
  return (
    <main>
      <div className="container mx-auto">
        <h1 className="text-capitalize text-center mt-3">Tours Plan</h1>
        <div className="row mx-auto ">
          {items.map((item) => {
            return (
              <div key={item.id} className="col-12 ">
                <Tour {...item} removeItems={removeItems} />
              </div>
            );
          })}
        </div>
      </div>
    </main>
  );
};

export default Tours;

import React, { useEffect, useState } from 'react';
import axios from 'axios';
const Tab = () => {
  const [loading, setLoading] = useState(true);
  const [jobs, setJobs] = useState([]);
  const [value, setvalue] = useState(0);
  const fetchUser = async () => {
    setLoading(true);
    try {
      const response = await axios.get('/user/items');
      const data = await response.data;
      setJobs(data);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      console.log(error.message);
    }
  };
  useEffect(() => {
    fetchUser();
  }, []);

  if (loading) {
    return (
      <div className="d-flex align-items-baseline justify-content-center">
        <h1 className="text-center text-danger">Loading....</h1>
      </div>
    );
  }
  const { id, name, info } = jobs[value];
  return (
    <div className="container py-5">
      <div className="row">
        <div className="col-4  border-end  ">
          <div className="button_container lh-lg  ">
            {jobs.map((item, index) => {
              return (
                <button
                  className={`border-0 bg-transparent d-block text-capitalize   mb-3${
                    index === value && ' border-start border-danger text-danger'
                  }`}
                  key={item.id}
                  onClick={() => {
                    setvalue(index);
                  }}
                >
                  {item.company}
                </button>
              );
            })}
          </div>
        </div>
        <div className="col-8">
          <article key={id} className="border border-left p-4">
            <h3 className="text-danger text-capitalize   border-bottom border-warning d-inline-block   ">
              {name}
            </h3>
            <p>{info}</p>
          </article>
        </div>
      </div>
    </div>
  );
};

export default Tab;

import React, { useEffect, useState } from 'react';
import Loading from './Loading';
import axios from 'axios';
import Tours from './Tours';
import './tour.css';

const Index = () => {
  const [loading, setLoading] = useState(true);
  const [items, setItems] = useState([]);
  const removeItems = (id) => {
    const newItems = items.filter((item) => item.id !== id);
    setItems(newItems);
  };

  const fetchItems = async () => {
    setLoading(true);
    try {
      const result = await axios.get('/user/items');
      setItems(result.data);
      setLoading(false);
    } catch (error) {
      console.log(error.message);
      setLoading(false);
    }
  };
  useEffect(() => {
    fetchItems();
  }, []);

  if (loading) {
    return (
      <main>
        <Loading />
      </main>
    );
  }

  if (items.length === 0) {
    return (
      <main className="min-vh-100 d-flex align-items-center justify-content-center">
        <div className="text-center">
          <h1>No more items</h1>
          <button className="bg-danger text-white" onClick={() => fetchItems()}>
            Refresh
          </button>
        </div>
      </main>
    );
  }
  return (
    <main>
      <Tours items={items} removeItems={removeItems} />
    </main>
  );
};

export default Index;

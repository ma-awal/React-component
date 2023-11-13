import React, { useState } from 'react';
import './menu.css';
import menu from '../../data/menu.js';
import Menu from './Menu';
import Categories from './Categories';
const allCategories = ['all', ...new Set(menu.map((item) => item.category))];
const Index = () => {
  const [menuItems, setMenuItems] = useState(menu);
  const [categories, setCategories] = useState(allCategories);
  const filterItems = (category) => {
    if (category === 'all') {
      setMenuItems(menu);
      return;
    }
    const newItems = menu.filter((item) => item.category === category);
    setMenuItems(newItems);
  };
  return (
    <div className="container">
      <Categories categories={categories} filterItems={filterItems} />
      <Menu items={menuItems} />
    </div>
  );
};

export default Index;

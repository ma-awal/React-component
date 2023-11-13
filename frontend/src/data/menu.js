import { v4 as uuidv4 } from 'uuid';
import food1 from '../assets/food1.png';
import food2 from '../assets/food2.png';
import food3 from '../assets/food3.png';
import food4 from '../assets/food4.png';
import img1 from '../assets/img1.png';
import img2 from '../assets/img2.png';
import img3 from '../assets/img3.png';
import img4 from '../assets/img4.png';

import popular1 from '../assets/popular1.png';
import popular2 from '../assets/popular2.png';
import popular3 from '../assets/popular3.png';
import popular4 from '../assets/popular4.png';

const menu = [
  {
    id: uuidv4(),
    img: food1,
    title: 'Amazing food',
    price: 12,
    category: 'food',
    info: 'The best food .we can use them very much.',
  },
  {
    id: uuidv4(),
    img: food2,
    title: 'Amazing food',
    price: 42,
    category: 'food',
    info: 'The best food .we can use them very much.',
  },
  {
    id: uuidv4(),
    img: food3,
    title: 'Amazing food',
    price: 53,
    category: 'food',
    info: 'The best food .we can use them very much.',
  },
  {
    id: uuidv4(),
    img: food4,
    title: 'Amazing food',
    price: 63,
    category: 'food',
    info: 'The best food .we can use them very much.',
  },
  {
    id: uuidv4(),
    img: img1,
    title: 'Good food',
    price: 653,
    category: 'Good',
    info: 'The good food ever .we can use them very much.',
  },
  {
    id: uuidv4(),
    img: img2,
    title: 'Good food',
    price: 49,
    category: 'Good',
    info: 'The good food ever .we can use them very much.',
  },
  {
    id: uuidv4(),
    img: img3,
    title: 'Good food',
    price: 349,
    category: 'Good',
    info: 'The good food ever .we can use them very much.',
  },
  {
    id: uuidv4(),
    img: img4,
    title: 'Good food',
    price: 353,
    category: 'Good',
    info: 'The good food ever .we can use them very much.',
  },

  {
    id: uuidv4(),
    img: popular1,
    title: 'populer food',
    price: 73,
    category: 'popular',
    info: 'The good food ever .we can use them very much.',
  },
  {
    id: uuidv4(),
    img: popular2,
    title: 'populer food',
    price: 343,
    category: 'popular',
    info: 'The good food ever .we can use them very much.',
  },
  {
    id: uuidv4(),
    img: popular3,
    title: 'populer food',
    price: 53,
    category: 'popular',
    info: 'The good food ever .we can use them very much.',
  },
  {
    id: uuidv4(),
    img: popular4,
    title: 'populer food',
    price: 93,
    category: 'popular',
    info: 'The good food ever .we can use them very much.',
  },
];
export default menu;

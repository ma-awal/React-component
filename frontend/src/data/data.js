import { v4 as uuidv4 } from 'uuid';
import p1 from '../assets/person1.jpg';
import p2 from '../assets/person4.jpg';
import p3 from '../assets/person6.jpg';
import p4 from '../assets/person8.jpg';
const data = [
  {
    id: uuidv4(),
    img: p1,
    name: 'Awal',
    title: 'Junior devloper',
    info: 'The best platform to acheve greate knowledge among here',
    age: 24,
  },
  {
    id: uuidv4(),
    img: p2,
    name: 'Rubel',
    title: 'Junior devloper',
    info: 'The best platform to acheve greate knowledge among here',
    age: 27,
  },
  {
    id: uuidv4(),
    img: p3,
    name: 'Maria',
    title: 'Junior devloper',
    info: 'The best platform to acheve greate knowledge among here',
    age: 26,
  },
  {
    id: uuidv4(),
    img: p4,
    name: 'Lopez',
    title: 'Junior devloper',
    info: 'The best platform to acheve greate knowledge among here',
    age: 28,
  },
];

export default data;

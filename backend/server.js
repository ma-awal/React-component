import express, { urlencoded } from 'express';
import data from './data/data.js';
const app = express();
import cors from 'cors';
const port = process.env.PORT || 5000;
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

app.get('/user/items', (req, res) => {
  try {
    res.status(200).send(data);
  } catch (error) {
    res.status(404).send(error);
  }
});

app.use((req, res, next) => {
  res.status(404).send('External server erroo');
});
app.use((err, req, res, next) => {
  res.status(500).json({ message: err.message });
  console.log('Internal error');
});

app.listen(port, () => {
  console.log(`server is running at localhost:${port}`);
});

import express from 'express';
import { pingResult, pingResultV2 } from './controller';

const app = express();
const host = 'http://localhost';
const port = 8000;

app.use(express.json());

app.listen(port, () => {
  console.log(`Server running at ${host}:${port}`);
});
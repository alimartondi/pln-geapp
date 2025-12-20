import dotenv from 'dotenv';
dotenv.config({ path: '../.env' }); 

const REQUIRED_ENVS = [
  'JWT_SECRET',
  'DB_HOST',
  'DB_NAME',
  'DB_USER',
  'DB_PASS',
];

for (const key of REQUIRED_ENVS) {
  if (!process.env[key]) {
    console.error(`❌ ENV ${key} is missing`);
    process.exit(1); // SERVER MATI TOTAL
  }
}

import express from 'express';
import helmet from 'helmet';
import cors from 'cors';

import usersRouter from '../routes/users';
import { errorHandler } from '../middleware/errorHandler';

const app = express();

app.use(helmet());
app.use(cors());
app.use(express.json());

app.use('/api/users', usersRouter);

app.get('/', (_req, res) => res.send('Geapp API running'));

app.use(errorHandler);

const PORT = Number(process.env.PORT || 4000);
app.listen(PORT, () => {
  console.log(`✅ API server listening on port ${PORT}`);
});

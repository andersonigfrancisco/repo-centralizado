import express from 'express';
import queryRoutes from './routes/query.routes';
import { db1 } from './utils/db-connector-db1';
import {  db2 } from './utils/db-connector-db2';

const app = express();

app.use(express.json());
app.use(queryRoutes);

db1.initialize()
  .then(() => console.log('DB1 connected'))
  .catch((error) => console.error('DB1 connection error:', error));

db2.initialize()
  .then(() => console.log('DB2 connected'))
  .catch((error) => console.error('DB2 connection error:', error));

export default app;

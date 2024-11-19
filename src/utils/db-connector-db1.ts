import { DataSource } from 'typeorm';
import 'dotenv/config';

export const db1 = new DataSource({
  type: 'postgres',
  host: process.env.DB1_HOST,
  port: Number(process.env.DB1_PORT),
  username: process.env.DB1_USERNAME,
  password: process.env.DB1_PASSWORD,
  database: process.env.DB1_NAME,
  entities: [__dirname + '/../models/db1/*.ts'],
  synchronize: false, 
});


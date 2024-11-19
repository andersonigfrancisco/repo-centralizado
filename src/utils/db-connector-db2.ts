import { DataSource } from 'typeorm';
import 'dotenv/config';

export const db2 = new DataSource({
  type: 'postgres',
  host: process.env.DB2_HOST,
  port: Number(process.env.DB2_PORT),
  username: process.env.DB2_USERNAME,
  password: process.env.DB2_PASSWORD,
  database: process.env.DB2_NAME,
  entities: [__dirname + '/../models/db2/*.ts'],
  synchronize: true,
});

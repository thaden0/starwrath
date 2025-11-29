import mysql from 'mysql2/promise';
import dotenv from 'dotenv';

dotenv.config();

let pool;

export function getPool() {
  if (!pool) {
    pool = mysql.createPool({
      uri: process.env.DATABASE_URL || 'mysql://user:pass@localhost:3306/starwrath',
      connectionLimit: 10
    });
  }
  return pool;
}

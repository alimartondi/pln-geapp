import mysql from 'mysql2/promise';
import type { Pool } from 'mysql2/promise';

const pool: Pool = mysql.createPool({
  host: process.env.DB_HOST || '127.0.0.1',
  user: process.env.DB_USER || 'root',
  password: process.env.DB_PASS || '',
  database: process.env.DB_NAME || 'pln_geapp',
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
});

export default pool;

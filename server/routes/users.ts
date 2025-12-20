
import express, { Request, Response, NextFunction } from 'express';
import { body, validationResult } from 'express-validator';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import pool from '../db';
import type { RowDataPacket, ResultSetHeader } from 'mysql2';
import { requireJwtConfig } from '../middleware/requireJwtConfig';

const router = express.Router();

router.post(
  '/register',
  requireJwtConfig,
  async (req: Request, res: Response, next: NextFunction) => {
    const conn = await pool.getConnection();

    try {
      const { email, password } = req.body;

      let token: string;
      try {
        token = jwt.sign(
          { email },
          process.env.JWT_SECRET!,
          { expiresIn: '7d' }
        );
      } catch {
        return res.status(500).json({
          message: 'JWT generation failed',
        });
      }

      await conn.beginTransaction();

      const hashed = await bcrypt.hash(password, 10);

      const [result] = await conn.query<ResultSetHeader>(
        'INSERT INTO users (email, password) VALUES (?, ?)',
        [email, hashed]
      );

      await conn.commit();

      return res.status(201).json({
        token,
        userId: result.insertId,
      });

    } catch (err) {
      await conn.rollback();
      next(err);
    } finally {
      conn.release();
    }
  }
);


export default router;

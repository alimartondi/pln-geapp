import express from 'express';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import pool from '../db.js';
import { requireJwtConfig } from '../middleware/requireJwtConfig.js';
const router = express.Router();
/**
 * POST /api/users/register
 */
router.post('/register', requireJwtConfig, async (req, res, next) => {
    const conn = await pool.getConnection();
    try {
        const { email, password } = req.body;
        let token;
        try {
            token = jwt.sign({ email }, process.env.JWT_SECRET, { expiresIn: '7d' });
        }
        catch {
            return res.status(500).json({
                message: 'JWT generation failed',
            });
        }
        await conn.beginTransaction();
        const hashed = await bcrypt.hash(password, 10);
        const [result] = await conn.query('INSERT INTO users (email, password) VALUES (?, ?)', [email, hashed]);
        await conn.commit();
        return res.status(201).json({
            token,
            userId: result.insertId,
        });
    }
    catch (err) {
        await conn.rollback();
        next(err);
    }
    finally {
        conn.release();
    }
});
export default router;

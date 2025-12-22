import express, { Request, Response, NextFunction } from "express";
import { body, validationResult } from "express-validator";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import pool from "../db.js";
import type { RowDataPacket, ResultSetHeader } from "mysql2";
import { requireJwtConfig } from "../middleware/requireJwtConfig.js";
import { authMiddleware } from "../middleware/authMiddleware.js";

const router = express.Router();

/**
 * POST /api/auth/login
 */
router.post(
  "/login",
  [
    body("email").isEmail().withMessage("Invalid email"),
    body("password").notEmpty().withMessage("Password is required"),
  ],
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(422).json({ errors: errors.array() });
      }

      const { email, password } = req.body;

      if (!process.env.JWT_SECRET) {
        return res.status(500).json({
          message: "JWT_SECRET not configured",
        });
      }

      const [rows] = await pool.query<RowDataPacket[]>(
        `
        SELECT id, email, password, fullname, is_active
        FROM users
        WHERE email = ?
        LIMIT 1
        `,
        [email]
      );

      if (rows.length === 0) {
        return res.status(401).json({
          message: "Invalid email or password",
        });
      }

      const user = rows[0];

      if (user.is_active === 0) {
        return res.status(403).json({
          message: "Account is not active",
        });
      }

      const match = await bcrypt.compare(password, user.password);
      if (!match) {
        return res.status(401).json({
          message: "Invalid email or password",
        });
      }

      await pool.query(
        `
        UPDATE users
        SET is_login = 1
        WHERE id = ?
        `,
        [user.id]
      );

      const token = jwt.sign(
        {
          id: user.id,
          email: user.email,
        },
        process.env.JWT_SECRET,
        { expiresIn: "7d" }
      );

      res.cookie("access_token", token, {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        sameSite: "lax",
        maxAge: 7 * 24 * 60 * 60 * 1000,
      });

      return res.status(200).json({
        message: "You have successfully logged in",
        token,
        user: {
          id: user.id,
          email: user.email,
          fullname: user.fullname,
        },
      });
    } catch (err) {
      next(err);
    }
  }
);

/**
 * GET /api/auth/logout
 */
router.get(
  "/logout",
  requireJwtConfig,
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const token = req.cookies?.access_token;
      if (!token) {
        return res.status(401).json({ message: "Unauthorized" });
      }
      const decoded = jwt.verify(
        token,
        process.env.JWT_SECRET as string
      ) as jwt.JwtPayload;
      const userId = decoded.id;
      await pool.query(
        `
        UPDATE users
        SET is_login = '0'
        WHERE id = ?
        `,
        [userId]
      );

      res.clearCookie("access_token", {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        sameSite: "none",
        path: "/",
      });
      return res
        .status(200)
        .json({ message: "You have successfully logged out" });
    } catch (err) {
      next(err);
    }
  }
);

/**
 * GET /api/auth/check
 */
router.get("/check", authMiddleware, async (req, res, next) => {
  try {
    if (!req.user) {
      return res.status(401).json({ message: "Unauthorized" });
    }

    const userId = req.user.id;

    const [rows] = await pool.query<RowDataPacket[]>(
      `
        SELECT is_login
        FROM users
        WHERE id = ?
        LIMIT 1
        `,
      [userId]
    );

    console.log("is_login value:", rows[0]);

    return res.status(200).json({
      loggedIn: true,
    });
  } catch (err) {
    next(err);
  }
});

/*
 ** Route testing API
 */
router.post("/ping", (_req, res) => {
  res.json({ ok: true });
});

export default router;

import { Request, Response, NextFunction } from "express";
import jwt, { JwtPayload } from "jsonwebtoken";

export function authMiddleware(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const token = req.cookies?.access_token;

  if (!token) {
    return res.status(401).json({ message: "Unauthorized" });
  }

  if (!process.env.JWT_SECRET) {
    return res.status(500).json({ message: "JWT secret not configured" });
  }

  try {
    const decoded = jwt.verify(
      token,
      process.env.JWT_SECRET
    ) as JwtPayload & { id: number };

    req.user = decoded;

    console.log("COOKIES:", req.cookies);
    next();
  } catch {
    return res.status(401).json({ message: "Invalid token" });
  }
}
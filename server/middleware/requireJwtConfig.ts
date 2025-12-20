import { Request, Response, NextFunction } from 'express';

export function requireJwtConfig(
  req: Request,
  res: Response,
  next: NextFunction
) {
  if (!process.env.JWT_SECRET) {
    return res.status(500).json({
      message: 'JWT_SECRET not configured',
    });
  }

  next();
}

export function requireJwtConfig(req, res, next) {
    if (!process.env.JWT_SECRET) {
        return res.status(500).json({
            message: 'JWT_SECRET not configured',
        });
    }
    next();
}

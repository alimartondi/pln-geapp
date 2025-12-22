import jwt from "jsonwebtoken";
export function authMiddleware(req, res, next) {
    const token = req.cookies?.access_token;
    if (!token) {
        return res.status(401).json({ message: "Unauthorized" });
    }
    if (!process.env.JWT_SECRET) {
        return res.status(500).json({ message: "JWT secret not configured" });
    }
    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.user = decoded;
        console.log("COOKIES:", req.cookies);
        next();
    }
    catch {
        return res.status(401).json({ message: "Invalid token" });
    }
}

"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const express_validator_1 = require("express-validator");
const bcryptjs_1 = __importDefault(require("bcryptjs"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const db_1 = __importDefault(require("../db"));
const router = express_1.default.Router();
// POST /api/users/register
router.post('/register', [
    (0, express_validator_1.body)('email').isEmail().withMessage('Invalid email'),
    (0, express_validator_1.body)('password')
        .isLength({ min: 6 })
        .withMessage('Password must be at least 6 characters'),
    (0, express_validator_1.body)('fullname').optional().isString().trim().isLength({ min: 1 }),
    (0, express_validator_1.body)('name').optional().isString().trim().isLength({ min: 1 }),
], async (req, res, next) => {
    var _a, _b;
    try {
        const errors = (0, express_validator_1.validationResult)(req);
        if (!errors.isEmpty()) {
            return res.status(422).json({ errors: errors.array() });
        }
        const { email, password } = req.body;
        const fullname = (_b = (_a = req.body.fullname) !== null && _a !== void 0 ? _a : req.body.name) !== null && _b !== void 0 ? _b : null;
        // check if email exists
        const [rows] = await db_1.default.query('SELECT id FROM users WHERE email = ?', [email]);
        if (rows.length > 0) {
            return res.status(409).json({ message: 'Email already registered' });
        }
        const hashed = await bcryptjs_1.default.hash(password, 10);
        const [result] = await db_1.default.query('INSERT INTO users (email, password, fullname) VALUES (?, ?, ?)', [email, hashed, fullname]);
        const userId = result.insertId; // ResultSetHeader defines insertId as number
        // load inserted user to return canonical fields
        const [userRows] = await db_1.default.query('SELECT id, email, fullname, is_active, created, updated FROM users WHERE id = ?', [userId]);
        const user = userRows[0];
        const jwtSecret = process.env.JWT_SECRET;
        if (!jwtSecret) {
            return res.status(500).json({ message: 'JWT_SECRET not configured' });
        }
        const token = jsonwebtoken_1.default.sign({ id: userId, email }, jwtSecret, { expiresIn: '7d' });
        res.status(201).json({ token, user });
    }
    catch (err) {
        next(err);
    }
});
exports.default = router;

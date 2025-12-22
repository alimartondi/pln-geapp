import dotenv from 'dotenv';
dotenv.config({ path: '../.env' });
const REQUIRED_ENVS = [
    'JWT_SECRET',
    'DB_HOST',
    'DB_NAME',
    'DB_USER',
    'DB_PASS',
];
for (const key of REQUIRED_ENVS) {
    if (!process.env[key]) {
        console.error(`❌ ENV ${key} is missing`);
        process.exit(1);
    }
}
export const env = {
    JWT_SECRET: process.env.JWT_SECRET,
    DB_HOST: process.env.DB_HOST,
    DB_NAME: process.env.DB_NAME,
    DB_USER: process.env.DB_USER,
    DB_PASS: process.env.DB_PASS,
};

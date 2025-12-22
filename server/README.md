Express API for user registration

- Endpoint: POST /api/users/register
- Required body: { "email": "...", "password": "...", "name": "optional" }
- Response: 201 { token, user }

Setup
1. Copy `server/.env.example` to `server/.env` and set values (DB credentials and JWT secret).
2. Install dependencies:
   npm install express mysql2 bcryptjs jsonwebtoken dotenv express-validator cors helmet

3. Install dev tools for TypeScript runtime (recommended):
   npm install -D ts-node-dev @types/express @types/node @types/jsonwebtoken @types/bcryptjs @types/cors @types/helmet

4. Create the `users` table by running `server/sql/create_users_table.sql` against your database.
5. Start the server (TypeScript): `npm run start:api` (runs `ts-node-dev --respawn --transpile-only server/index.ts`).

Notes
- The server reads DB and JWT configuration from environment variables.
- Registration returns a JWT (signed with `JWT_SECRET`) valid for 7 days.

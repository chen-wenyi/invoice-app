import { drizzle } from 'drizzle-orm/node-postgres';
import { Pool } from 'pg';

if (!process.env.XATA_DATBASE_URL) {
    throw new Error('cannot find XATA_DATBASE_URL')
}

const pool = new Pool({ connectionString: process.env.XATA_DATBASE_URL, max: 20 });
const db = drizzle(pool);

export { db };

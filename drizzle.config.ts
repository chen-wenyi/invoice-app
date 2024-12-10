import { config } from 'dotenv';
import { defineConfig } from 'drizzle-kit';

config({ path: './.env.local' });
if (typeof process.env.XATA_DATBASE_URL !== 'string') {
    throw new Error('you need to specify XATA_DATBASE_URL')
}

export default defineConfig({
  dialect: 'postgresql',
  schema: './src/db/schema.ts',
  out: './src/db/migrations',
  dbCredentials: {
    url: process.env.XATA_DATBASE_URL,
  },
});

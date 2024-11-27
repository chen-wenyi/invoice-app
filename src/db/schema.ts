import { integer, pgEnum, pgTable, serial, text, timestamp } from "drizzle-orm/pg-core";

// pgEnum has to be exported for migration(npx drizzle-kit migrate)
export const statusEnum = pgEnum('status', ['open', 'paid', 'void', 'uncollectible'])

export const Invoices = pgTable('Invoices', {
    id: serial().primaryKey().notNull(),
    createTS: timestamp('createTS').defaultNow().notNull(),
    value: integer('value').notNull(),
    description: text('description').notNull(),
    status: statusEnum('status').notNull(),
})
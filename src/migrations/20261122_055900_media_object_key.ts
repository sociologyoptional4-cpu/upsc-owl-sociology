import { type MigrateDownArgs, type MigrateUpArgs, sql } from '@payloadcms/db-postgres'

export async function up({ db }: MigrateUpArgs): Promise<void> {
  await db.execute(sql`ALTER TABLE "media" ADD COLUMN IF NOT EXISTS "_objectkey" varchar;`)
}

export async function down({ db }: MigrateDownArgs): Promise<void> {
  // Keep the object keys for any uploads created since this migration.
  await db.execute(sql`SELECT 1;`)
}

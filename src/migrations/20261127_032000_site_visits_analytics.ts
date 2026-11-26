import { type MigrateDownArgs, type MigrateUpArgs, sql } from '@payloadcms/db-postgres'

export async function up({ db }: MigrateUpArgs): Promise<void> {
  await db.execute(sql`
    CREATE TABLE IF NOT EXISTS "site_visits" (
      "id" serial PRIMARY KEY NOT NULL,
      "visit_day" varchar NOT NULL,
      "visitor_hash" varchar NOT NULL,
      "path" varchar NOT NULL,
      "referrer" varchar DEFAULT 'Direct' NOT NULL,
      "utm_source" varchar,
      "device" varchar DEFAULT 'desktop' NOT NULL,
      "created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
    );

    CREATE INDEX IF NOT EXISTS "site_visits_day_idx" ON "site_visits" USING btree ("visit_day");
    CREATE INDEX IF NOT EXISTS "site_visits_day_visitor_idx" ON "site_visits" USING btree ("visit_day", "visitor_hash");
    CREATE INDEX IF NOT EXISTS "site_visits_day_path_idx" ON "site_visits" USING btree ("visit_day", "path");
  `)
}

export async function down({ db }: MigrateDownArgs): Promise<void> {
  await db.execute(sql`
    DROP INDEX IF EXISTS "site_visits_day_path_idx";
    DROP INDEX IF EXISTS "site_visits_day_visitor_idx";
    DROP INDEX IF EXISTS "site_visits_day_idx";
    DROP TABLE IF EXISTS "site_visits" CASCADE;
  `)
}

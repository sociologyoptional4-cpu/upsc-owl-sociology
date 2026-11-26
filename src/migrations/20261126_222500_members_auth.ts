import { type MigrateDownArgs, type MigrateUpArgs, sql } from '@payloadcms/db-postgres'

export async function up({ db }: MigrateUpArgs): Promise<void> {
  await db.execute(sql`
    DO $$ BEGIN
      CREATE TYPE "public"."enum_members_status" AS ENUM('active', 'suspended');
    EXCEPTION
      WHEN duplicate_object THEN null;
    END $$;

    CREATE TABLE IF NOT EXISTS "members" (
      "id" serial PRIMARY KEY NOT NULL,
      "name" varchar NOT NULL,
      "email" varchar NOT NULL,
      "phone" varchar,
      "password_hash" varchar NOT NULL,
      "status" "enum_members_status" DEFAULT 'active' NOT NULL,
      "last_login_at" timestamp(3) with time zone,
      "updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
      "created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
    );

    ALTER TABLE "payload_locked_documents_rels" ADD COLUMN IF NOT EXISTS "members_id" integer;

    DO $$ BEGIN
      ALTER TABLE "payload_locked_documents_rels"
        ADD CONSTRAINT "payload_locked_documents_rels_members_fk"
        FOREIGN KEY ("members_id") REFERENCES "public"."members"("id") ON DELETE cascade ON UPDATE no action;
    EXCEPTION
      WHEN duplicate_object THEN null;
    END $$;

    CREATE UNIQUE INDEX IF NOT EXISTS "members_email_idx" ON "members" USING btree ("email");
    CREATE INDEX IF NOT EXISTS "members_phone_idx" ON "members" USING btree ("phone");
    CREATE INDEX IF NOT EXISTS "members_status_idx" ON "members" USING btree ("status");
    CREATE INDEX IF NOT EXISTS "members_updated_at_idx" ON "members" USING btree ("updated_at");
    CREATE INDEX IF NOT EXISTS "members_created_at_idx" ON "members" USING btree ("created_at");
    CREATE INDEX IF NOT EXISTS "payload_locked_documents_rels_members_id_idx" ON "payload_locked_documents_rels" USING btree ("members_id");
  `)
}

export async function down({ db }: MigrateDownArgs): Promise<void> {
  await db.execute(sql`
    ALTER TABLE "payload_locked_documents_rels" DROP CONSTRAINT IF EXISTS "payload_locked_documents_rels_members_fk";
    DROP INDEX IF EXISTS "payload_locked_documents_rels_members_id_idx";
    ALTER TABLE "payload_locked_documents_rels" DROP COLUMN IF EXISTS "members_id";
    DROP TABLE IF EXISTS "members" CASCADE;
    DROP TYPE IF EXISTS "public"."enum_members_status";
  `)
}

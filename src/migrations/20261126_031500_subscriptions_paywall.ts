import { type MigrateDownArgs, type MigrateUpArgs, sql } from '@payloadcms/db-postgres'

export async function up({ db }: MigrateUpArgs): Promise<void> {
  await db.execute(sql`
    DO $$ BEGIN
      CREATE TYPE "public"."enum_subscriptions_status" AS ENUM('active', 'pending', 'expired', 'revoked');
    EXCEPTION
      WHEN duplicate_object THEN null;
    END $$;

    DO $$ BEGIN
      CREATE TYPE "public"."enum_subscriptions_payment_method" AS ENUM('razorpay_checkout', 'razorpay_qr', 'manual_admin');
    EXCEPTION
      WHEN duplicate_object THEN null;
    END $$;

    CREATE TABLE IF NOT EXISTS "subscriptions" (
      "id" serial PRIMARY KEY NOT NULL,
      "email" varchar NOT NULL,
      "phone" varchar,
      "name" varchar,
      "access_code" varchar NOT NULL,
      "status" "enum_subscriptions_status" DEFAULT 'active' NOT NULL,
      "plan_code" varchar DEFAULT 'pro_annual' NOT NULL,
      "amount_inr" numeric DEFAULT 399 NOT NULL,
      "original_price_inr" numeric DEFAULT 999,
      "currency" varchar DEFAULT 'INR',
      "payment_method" "enum_subscriptions_payment_method" DEFAULT 'razorpay_checkout',
      "razorpay_order_id" varchar,
      "razorpay_payment_id" varchar,
      "razorpay_qr_id" varchar,
      "starts_at" timestamp(3) with time zone NOT NULL,
      "expires_at" timestamp(3) with time zone NOT NULL,
      "notes" varchar,
      "updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
      "created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
    );

    ALTER TABLE "payload_locked_documents_rels" ADD COLUMN IF NOT EXISTS "subscriptions_id" integer;

    DO $$ BEGIN
      ALTER TABLE "payload_locked_documents_rels"
        ADD CONSTRAINT "payload_locked_documents_rels_subscriptions_fk"
        FOREIGN KEY ("subscriptions_id") REFERENCES "public"."subscriptions"("id") ON DELETE cascade ON UPDATE no action;
    EXCEPTION
      WHEN duplicate_object THEN null;
    END $$;

    CREATE INDEX IF NOT EXISTS "subscriptions_email_idx" ON "subscriptions" USING btree ("email");
    CREATE INDEX IF NOT EXISTS "subscriptions_phone_idx" ON "subscriptions" USING btree ("phone");
    CREATE UNIQUE INDEX IF NOT EXISTS "subscriptions_access_code_idx" ON "subscriptions" USING btree ("access_code");
    CREATE INDEX IF NOT EXISTS "subscriptions_status_idx" ON "subscriptions" USING btree ("status");
    CREATE INDEX IF NOT EXISTS "subscriptions_razorpay_order_id_idx" ON "subscriptions" USING btree ("razorpay_order_id");
    CREATE UNIQUE INDEX IF NOT EXISTS "subscriptions_razorpay_payment_id_idx" ON "subscriptions" USING btree ("razorpay_payment_id");
    CREATE INDEX IF NOT EXISTS "subscriptions_razorpay_qr_id_idx" ON "subscriptions" USING btree ("razorpay_qr_id");
    CREATE INDEX IF NOT EXISTS "subscriptions_expires_at_idx" ON "subscriptions" USING btree ("expires_at");
    CREATE INDEX IF NOT EXISTS "subscriptions_updated_at_idx" ON "subscriptions" USING btree ("updated_at");
    CREATE INDEX IF NOT EXISTS "subscriptions_created_at_idx" ON "subscriptions" USING btree ("created_at");
    CREATE INDEX IF NOT EXISTS "payload_locked_documents_rels_subscriptions_id_idx" ON "payload_locked_documents_rels" USING btree ("subscriptions_id");
  `)
}

export async function down({ db }: MigrateDownArgs): Promise<void> {
  await db.execute(sql`
    ALTER TABLE "payload_locked_documents_rels" DROP CONSTRAINT IF EXISTS "payload_locked_documents_rels_subscriptions_fk";
    DROP INDEX IF EXISTS "payload_locked_documents_rels_subscriptions_id_idx";
    ALTER TABLE "payload_locked_documents_rels" DROP COLUMN IF EXISTS "subscriptions_id";
    DROP TABLE IF EXISTS "subscriptions" CASCADE;
    DROP TYPE IF EXISTS "public"."enum_subscriptions_payment_method";
    DROP TYPE IF EXISTS "public"."enum_subscriptions_status";
  `)
}

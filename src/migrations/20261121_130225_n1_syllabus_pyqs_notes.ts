import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-postgres'

export async function up({ db, payload, req }: MigrateUpArgs): Promise<void> {
  await db.execute(sql`
   CREATE TYPE "public"."enum_topics_review_status" AS ENUM('pending', 'approved', 'rejected');
  CREATE TYPE "public"."enum__topics_v_version_review_status" AS ENUM('pending', 'approved', 'rejected');
  CREATE TYPE "public"."enum_pyqs_paper" AS ENUM('P1', 'P2');
  CREATE TYPE "public"."enum_pyqs_status" AS ENUM('draft', 'published');
  CREATE TYPE "public"."enum__pyqs_v_version_paper" AS ENUM('P1', 'P2');
  CREATE TYPE "public"."enum__pyqs_v_version_status" AS ENUM('draft', 'published');
  CREATE TABLE "pyqs" (
	"id" serial PRIMARY KEY NOT NULL,
	"year" numeric,
	"paper" "enum_pyqs_paper",
	"section" varchar,
	"qno" varchar,
	"marks" numeric DEFAULT 10,
	"word_limit" numeric,
	"question" varchar,
	"unit_id" integer,
	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
	"_status" "enum_pyqs_status" DEFAULT 'draft'
  );

  CREATE TABLE "pyqs_rels" (
	"id" serial PRIMARY KEY NOT NULL,
	"order" integer,
	"parent_id" integer NOT NULL,
	"path" varchar NOT NULL,
	"topics_id" integer,
	"thinkers_id" integer
  );

  CREATE TABLE "_pyqs_v" (
	"id" serial PRIMARY KEY NOT NULL,
	"parent_id" integer,
	"version_year" numeric,
	"version_paper" "enum__pyqs_v_version_paper",
	"version_section" varchar,
	"version_qno" varchar,
	"version_marks" numeric DEFAULT 10,
	"version_word_limit" numeric,
	"version_question" varchar,
	"version_unit_id" integer,
	"version_updated_at" timestamp(3) with time zone,
	"version_created_at" timestamp(3) with time zone,
	"version__status" "enum__pyqs_v_version_status" DEFAULT 'draft',
	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
	"latest" boolean
  );

  CREATE TABLE "_pyqs_v_rels" (
	"id" serial PRIMARY KEY NOT NULL,
	"order" integer,
	"parent_id" integer NOT NULL,
	"path" varchar NOT NULL,
	"topics_id" integer,
	"thinkers_id" integer
  );

  ALTER TABLE "topics" ADD COLUMN "order" numeric DEFAULT 99;
  ALTER TABLE "topics" ADD COLUMN "review_status" "enum_topics_review_status";
  ALTER TABLE "topics" ADD COLUMN "reject_reason" varchar;
  ALTER TABLE "topics" ADD COLUMN "ai_meta_model" varchar;
  ALTER TABLE "topics" ADD COLUMN "ai_meta_prompt_version" varchar;
  ALTER TABLE "topics" ADD COLUMN "ai_meta_cost_usd" numeric;
  ALTER TABLE "_topics_v" ADD COLUMN "version_order" numeric DEFAULT 99;
  ALTER TABLE "_topics_v" ADD COLUMN "version_review_status" "enum__topics_v_version_review_status";
  ALTER TABLE "_topics_v" ADD COLUMN "version_reject_reason" varchar;
  ALTER TABLE "_topics_v" ADD COLUMN "version_ai_meta_model" varchar;
  ALTER TABLE "_topics_v" ADD COLUMN "version_ai_meta_prompt_version" varchar;
  ALTER TABLE "_topics_v" ADD COLUMN "version_ai_meta_cost_usd" numeric;
  ALTER TABLE "units" ADD COLUMN "order" numeric DEFAULT 99 NOT NULL;
  ALTER TABLE "units" ADD COLUMN "section" varchar;
  ALTER TABLE "payload_locked_documents_rels" ADD COLUMN "pyqs_id" integer;
  ALTER TABLE "pyqs" ADD CONSTRAINT "pyqs_unit_id_units_id_fk" FOREIGN KEY ("unit_id") REFERENCES "public"."units"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "pyqs_rels" ADD CONSTRAINT "pyqs_rels_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."pyqs"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pyqs_rels" ADD CONSTRAINT "pyqs_rels_topics_fk" FOREIGN KEY ("topics_id") REFERENCES "public"."topics"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pyqs_rels" ADD CONSTRAINT "pyqs_rels_thinkers_fk" FOREIGN KEY ("thinkers_id") REFERENCES "public"."thinkers"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pyqs_v" ADD CONSTRAINT "_pyqs_v_parent_id_pyqs_id_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."pyqs"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_pyqs_v" ADD CONSTRAINT "_pyqs_v_version_unit_id_units_id_fk" FOREIGN KEY ("version_unit_id") REFERENCES "public"."units"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_pyqs_v_rels" ADD CONSTRAINT "_pyqs_v_rels_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."_pyqs_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pyqs_v_rels" ADD CONSTRAINT "_pyqs_v_rels_topics_fk" FOREIGN KEY ("topics_id") REFERENCES "public"."topics"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pyqs_v_rels" ADD CONSTRAINT "_pyqs_v_rels_thinkers_fk" FOREIGN KEY ("thinkers_id") REFERENCES "public"."thinkers"("id") ON DELETE cascade ON UPDATE no action;
  CREATE INDEX "pyqs_year_idx" ON "pyqs" USING btree ("year");
  CREATE INDEX "pyqs_paper_idx" ON "pyqs" USING btree ("paper");
  CREATE INDEX "pyqs_unit_idx" ON "pyqs" USING btree ("unit_id");
  CREATE INDEX "pyqs_updated_at_idx" ON "pyqs" USING btree ("updated_at");
  CREATE INDEX "pyqs_created_at_idx" ON "pyqs" USING btree ("created_at");
  CREATE INDEX "pyqs__status_idx" ON "pyqs" USING btree ("_status");
  CREATE INDEX "pyqs_rels_order_idx" ON "pyqs_rels" USING btree ("order");
  CREATE INDEX "pyqs_rels_parent_idx" ON "pyqs_rels" USING btree ("parent_id");
  CREATE INDEX "pyqs_rels_path_idx" ON "pyqs_rels" USING btree ("path");
  CREATE INDEX "pyqs_rels_topics_id_idx" ON "pyqs_rels" USING btree ("topics_id");
  CREATE INDEX "pyqs_rels_thinkers_id_idx" ON "pyqs_rels" USING btree ("thinkers_id");
  CREATE INDEX "_pyqs_v_parent_idx" ON "_pyqs_v" USING btree ("parent_id");
  CREATE INDEX "_pyqs_v_version_version_year_idx" ON "_pyqs_v" USING btree ("version_year");
  CREATE INDEX "_pyqs_v_version_version_paper_idx" ON "_pyqs_v" USING btree ("version_paper");
  CREATE INDEX "_pyqs_v_version_version_unit_idx" ON "_pyqs_v" USING btree ("version_unit_id");
  CREATE INDEX "_pyqs_v_version_version_updated_at_idx" ON "_pyqs_v" USING btree ("version_updated_at");
  CREATE INDEX "_pyqs_v_version_version_created_at_idx" ON "_pyqs_v" USING btree ("version_created_at");
  CREATE INDEX "_pyqs_v_version_version__status_idx" ON "_pyqs_v" USING btree ("version__status");
  CREATE INDEX "_pyqs_v_created_at_idx" ON "_pyqs_v" USING btree ("created_at");
  CREATE INDEX "_pyqs_v_updated_at_idx" ON "_pyqs_v" USING btree ("updated_at");
  CREATE INDEX "_pyqs_v_latest_idx" ON "_pyqs_v" USING btree ("latest");
  CREATE INDEX "_pyqs_v_rels_order_idx" ON "_pyqs_v_rels" USING btree ("order");
  CREATE INDEX "_pyqs_v_rels_parent_idx" ON "_pyqs_v_rels" USING btree ("parent_id");
  CREATE INDEX "_pyqs_v_rels_path_idx" ON "_pyqs_v_rels" USING btree ("path");
  CREATE INDEX "_pyqs_v_rels_topics_id_idx" ON "_pyqs_v_rels" USING btree ("topics_id");
  CREATE INDEX "_pyqs_v_rels_thinkers_id_idx" ON "_pyqs_v_rels" USING btree ("thinkers_id");
  ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_pyqs_fk" FOREIGN KEY ("pyqs_id") REFERENCES "public"."pyqs"("id") ON DELETE cascade ON UPDATE no action;
  CREATE INDEX "topics_order_idx" ON "topics" USING btree ("order");
  CREATE INDEX "topics_review_status_idx" ON "topics" USING btree ("review_status");
  CREATE INDEX "_topics_v_version_version_order_idx" ON "_topics_v" USING btree ("version_order");
  CREATE INDEX "_topics_v_version_version_review_status_idx" ON "_topics_v" USING btree ("version_review_status");
  CREATE INDEX "units_order_idx" ON "units" USING btree ("order");
  CREATE INDEX "payload_locked_documents_rels_pyqs_id_idx" ON "payload_locked_documents_rels" USING btree ("pyqs_id");
  CREATE UNIQUE INDEX "pyqs_year_paper_qno_unique_idx" ON "pyqs" USING btree ("year", "paper", "qno");`)
}

export async function down({ db, payload, req }: MigrateDownArgs): Promise<void> {
  await db.execute(sql`
   ALTER TABLE "pyqs" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "pyqs_rels" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_pyqs_v" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_pyqs_v_rels" DISABLE ROW LEVEL SECURITY;
  DROP TABLE "pyqs" CASCADE;
  DROP TABLE "pyqs_rels" CASCADE;
  DROP TABLE "_pyqs_v" CASCADE;
  DROP TABLE "_pyqs_v_rels" CASCADE;
  ALTER TABLE "payload_locked_documents_rels" DROP CONSTRAINT "payload_locked_documents_rels_pyqs_fk";

  DROP INDEX "topics_order_idx";
  DROP INDEX "topics_review_status_idx";
  DROP INDEX "_topics_v_version_version_order_idx";
  DROP INDEX "_topics_v_version_version_review_status_idx";
  DROP INDEX "units_order_idx";
  DROP INDEX "payload_locked_documents_rels_pyqs_id_idx";
  ALTER TABLE "topics" DROP COLUMN "order";
  ALTER TABLE "topics" DROP COLUMN "review_status";
  ALTER TABLE "topics" DROP COLUMN "reject_reason";
  ALTER TABLE "topics" DROP COLUMN "ai_meta_model";
  ALTER TABLE "topics" DROP COLUMN "ai_meta_prompt_version";
  ALTER TABLE "topics" DROP COLUMN "ai_meta_cost_usd";
  ALTER TABLE "_topics_v" DROP COLUMN "version_order";
  ALTER TABLE "_topics_v" DROP COLUMN "version_review_status";
  ALTER TABLE "_topics_v" DROP COLUMN "version_reject_reason";
  ALTER TABLE "_topics_v" DROP COLUMN "version_ai_meta_model";
  ALTER TABLE "_topics_v" DROP COLUMN "version_ai_meta_prompt_version";
  ALTER TABLE "_topics_v" DROP COLUMN "version_ai_meta_cost_usd";
  ALTER TABLE "units" DROP COLUMN "order";
  ALTER TABLE "units" DROP COLUMN "section";
  ALTER TABLE "payload_locked_documents_rels" DROP COLUMN "pyqs_id";
  DROP TYPE "public"."enum_topics_review_status";
  DROP TYPE "public"."enum__topics_v_version_review_status";
  DROP TYPE "public"."enum_pyqs_paper";
  DROP TYPE "public"."enum_pyqs_status";
  DROP TYPE "public"."enum__pyqs_v_version_paper";
  DROP TYPE "public"."enum__pyqs_v_version_status";`)
}

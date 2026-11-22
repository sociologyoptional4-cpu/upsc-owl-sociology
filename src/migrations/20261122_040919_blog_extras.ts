import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-postgres'

export async function up({ db, payload, req }: MigrateUpArgs): Promise<void> {
  await db.execute(sql`
   CREATE TYPE "public"."enum_blog_series_color" AS ENUM('lavender', 'yellow', 'mint', 'pink');
  CREATE TABLE "posts_quiz_options" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"text" varchar
  );
  
  CREATE TABLE "posts_quiz" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"question" varchar,
  	"answer_index" numeric,
  	"explanation" varchar
  );
  
  CREATE TABLE "_posts_v_version_quiz_options" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"text" varchar,
  	"_uuid" varchar
  );
  
  CREATE TABLE "_posts_v_version_quiz" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"question" varchar,
  	"answer_index" numeric,
  	"explanation" varchar,
  	"_uuid" varchar
  );
  
  CREATE TABLE "blog_series" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"title" varchar NOT NULL,
  	"slug" varchar,
  	"description" varchar,
  	"color" "enum_blog_series_color" DEFAULT 'lavender',
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
  );
  
  ALTER TABLE "posts" ADD COLUMN "series_id" integer;
  ALTER TABLE "posts" ADD COLUMN "series_order" numeric;
  ALTER TABLE "_posts_v" ADD COLUMN "version_series_id" integer;
  ALTER TABLE "_posts_v" ADD COLUMN "version_series_order" numeric;
  ALTER TABLE "payload_locked_documents_rels" ADD COLUMN "blog_series_id" integer;
  ALTER TABLE "posts_quiz_options" ADD CONSTRAINT "posts_quiz_options_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."posts_quiz"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "posts_quiz" ADD CONSTRAINT "posts_quiz_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."posts"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_posts_v_version_quiz_options" ADD CONSTRAINT "_posts_v_version_quiz_options_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_posts_v_version_quiz"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_posts_v_version_quiz" ADD CONSTRAINT "_posts_v_version_quiz_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_posts_v"("id") ON DELETE cascade ON UPDATE no action;
  CREATE INDEX "posts_quiz_options_order_idx" ON "posts_quiz_options" USING btree ("_order");
  CREATE INDEX "posts_quiz_options_parent_id_idx" ON "posts_quiz_options" USING btree ("_parent_id");
  CREATE INDEX "posts_quiz_order_idx" ON "posts_quiz" USING btree ("_order");
  CREATE INDEX "posts_quiz_parent_id_idx" ON "posts_quiz" USING btree ("_parent_id");
  CREATE INDEX "_posts_v_version_quiz_options_order_idx" ON "_posts_v_version_quiz_options" USING btree ("_order");
  CREATE INDEX "_posts_v_version_quiz_options_parent_id_idx" ON "_posts_v_version_quiz_options" USING btree ("_parent_id");
  CREATE INDEX "_posts_v_version_quiz_order_idx" ON "_posts_v_version_quiz" USING btree ("_order");
  CREATE INDEX "_posts_v_version_quiz_parent_id_idx" ON "_posts_v_version_quiz" USING btree ("_parent_id");
  CREATE UNIQUE INDEX "blog_series_slug_idx" ON "blog_series" USING btree ("slug");
  CREATE INDEX "blog_series_updated_at_idx" ON "blog_series" USING btree ("updated_at");
  CREATE INDEX "blog_series_created_at_idx" ON "blog_series" USING btree ("created_at");
  ALTER TABLE "posts" ADD CONSTRAINT "posts_series_id_blog_series_id_fk" FOREIGN KEY ("series_id") REFERENCES "public"."blog_series"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_posts_v" ADD CONSTRAINT "_posts_v_version_series_id_blog_series_id_fk" FOREIGN KEY ("version_series_id") REFERENCES "public"."blog_series"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_blog_series_fk" FOREIGN KEY ("blog_series_id") REFERENCES "public"."blog_series"("id") ON DELETE cascade ON UPDATE no action;
  CREATE INDEX "posts_series_idx" ON "posts" USING btree ("series_id");
  CREATE INDEX "_posts_v_version_version_series_idx" ON "_posts_v" USING btree ("version_series_id");
  CREATE INDEX "payload_locked_documents_rels_blog_series_id_idx" ON "payload_locked_documents_rels" USING btree ("blog_series_id");`)
}

export async function down({ db, payload, req }: MigrateDownArgs): Promise<void> {
  await db.execute(sql`
   ALTER TABLE "posts_quiz_options" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "posts_quiz" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_posts_v_version_quiz_options" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_posts_v_version_quiz" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "blog_series" DISABLE ROW LEVEL SECURITY;
  DROP TABLE "posts_quiz_options" CASCADE;
  DROP TABLE "posts_quiz" CASCADE;
  DROP TABLE "_posts_v_version_quiz_options" CASCADE;
  DROP TABLE "_posts_v_version_quiz" CASCADE;
  DROP TABLE "blog_series" CASCADE;
  ALTER TABLE "posts" DROP CONSTRAINT "posts_series_id_blog_series_id_fk";
  
  ALTER TABLE "_posts_v" DROP CONSTRAINT "_posts_v_version_series_id_blog_series_id_fk";
  
  ALTER TABLE "payload_locked_documents_rels" DROP CONSTRAINT "payload_locked_documents_rels_blog_series_fk";
  
  DROP INDEX "posts_series_idx";
  DROP INDEX "_posts_v_version_version_series_idx";
  DROP INDEX "payload_locked_documents_rels_blog_series_id_idx";
  ALTER TABLE "posts" DROP COLUMN "series_id";
  ALTER TABLE "posts" DROP COLUMN "series_order";
  ALTER TABLE "_posts_v" DROP COLUMN "version_series_id";
  ALTER TABLE "_posts_v" DROP COLUMN "version_series_order";
  ALTER TABLE "payload_locked_documents_rels" DROP COLUMN "blog_series_id";
  DROP TYPE "public"."enum_blog_series_color";`)
}

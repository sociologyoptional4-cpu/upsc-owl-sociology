import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-postgres'

export async function up({ db, payload, req }: MigrateUpArgs): Promise<void> {
  await db.execute(sql`
   CREATE TYPE "public"."enum_topics_pyq_answers_paper" AS ENUM('P1', 'P2');
  CREATE TYPE "public"."enum__topics_v_version_pyq_answers_paper" AS ENUM('P1', 'P2');
  CREATE TABLE "topics_pyq_answers_points" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"text" varchar
  );
  
  CREATE TABLE "topics_pyq_answers" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"year" numeric,
  	"paper" "enum_topics_pyq_answers_paper" DEFAULT 'P1',
  	"marks" numeric DEFAULT 10,
  	"question" varchar,
  	"theme" varchar,
  	"intro" varchar,
  	"thinkers" varchar,
  	"example" varchar,
  	"conclusion" varchar
  );
  
  CREATE TABLE "_topics_v_version_pyq_answers_points" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"text" varchar,
  	"_uuid" varchar
  );
  
  CREATE TABLE "_topics_v_version_pyq_answers" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"year" numeric,
  	"paper" "enum__topics_v_version_pyq_answers_paper" DEFAULT 'P1',
  	"marks" numeric DEFAULT 10,
  	"question" varchar,
  	"theme" varchar,
  	"intro" varchar,
  	"thinkers" varchar,
  	"example" varchar,
  	"conclusion" varchar,
  	"_uuid" varchar
  );
  
  CREATE TABLE "units_study_sequence" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"step" varchar NOT NULL,
  	"detail" varchar
  );
  
  CREATE TABLE "units_infographics" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"title" varchar NOT NULL,
  	"caption" varchar,
  	"badge" varchar,
  	"image_id" integer,
  	"static_src" varchar
  );
  
  ALTER TABLE "topics" ADD COLUMN "notebook_content" jsonb;
  ALTER TABLE "topics" ADD COLUMN "mind_map" jsonb;
  ALTER TABLE "_topics_v" ADD COLUMN "version_notebook_content" jsonb;
  ALTER TABLE "_topics_v" ADD COLUMN "version_mind_map" jsonb;
  ALTER TABLE "units" ADD COLUMN "overview" varchar;
  ALTER TABLE "units" ADD COLUMN "mind_map" jsonb;
  ALTER TABLE "topics_pyq_answers_points" ADD CONSTRAINT "topics_pyq_answers_points_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."topics_pyq_answers"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "topics_pyq_answers" ADD CONSTRAINT "topics_pyq_answers_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."topics"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_topics_v_version_pyq_answers_points" ADD CONSTRAINT "_topics_v_version_pyq_answers_points_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_topics_v_version_pyq_answers"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_topics_v_version_pyq_answers" ADD CONSTRAINT "_topics_v_version_pyq_answers_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_topics_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "units_study_sequence" ADD CONSTRAINT "units_study_sequence_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."units"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "units_infographics" ADD CONSTRAINT "units_infographics_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "units_infographics" ADD CONSTRAINT "units_infographics_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."units"("id") ON DELETE cascade ON UPDATE no action;
  CREATE INDEX "topics_pyq_answers_points_order_idx" ON "topics_pyq_answers_points" USING btree ("_order");
  CREATE INDEX "topics_pyq_answers_points_parent_id_idx" ON "topics_pyq_answers_points" USING btree ("_parent_id");
  CREATE INDEX "topics_pyq_answers_order_idx" ON "topics_pyq_answers" USING btree ("_order");
  CREATE INDEX "topics_pyq_answers_parent_id_idx" ON "topics_pyq_answers" USING btree ("_parent_id");
  CREATE INDEX "_topics_v_version_pyq_answers_points_order_idx" ON "_topics_v_version_pyq_answers_points" USING btree ("_order");
  CREATE INDEX "_topics_v_version_pyq_answers_points_parent_id_idx" ON "_topics_v_version_pyq_answers_points" USING btree ("_parent_id");
  CREATE INDEX "_topics_v_version_pyq_answers_order_idx" ON "_topics_v_version_pyq_answers" USING btree ("_order");
  CREATE INDEX "_topics_v_version_pyq_answers_parent_id_idx" ON "_topics_v_version_pyq_answers" USING btree ("_parent_id");
  CREATE INDEX "units_study_sequence_order_idx" ON "units_study_sequence" USING btree ("_order");
  CREATE INDEX "units_study_sequence_parent_id_idx" ON "units_study_sequence" USING btree ("_parent_id");
  CREATE INDEX "units_infographics_order_idx" ON "units_infographics" USING btree ("_order");
  CREATE INDEX "units_infographics_parent_id_idx" ON "units_infographics" USING btree ("_parent_id");
  CREATE INDEX "units_infographics_image_idx" ON "units_infographics" USING btree ("image_id");`)
}

export async function down({ db, payload, req }: MigrateDownArgs): Promise<void> {
  await db.execute(sql`
   DROP TABLE "topics_pyq_answers_points" CASCADE;
  DROP TABLE "topics_pyq_answers" CASCADE;
  DROP TABLE "_topics_v_version_pyq_answers_points" CASCADE;
  DROP TABLE "_topics_v_version_pyq_answers" CASCADE;
  DROP TABLE "units_study_sequence" CASCADE;
  DROP TABLE "units_infographics" CASCADE;
  ALTER TABLE "topics" DROP COLUMN "notebook_content";
  ALTER TABLE "topics" DROP COLUMN "mind_map";
  ALTER TABLE "_topics_v" DROP COLUMN "version_notebook_content";
  ALTER TABLE "_topics_v" DROP COLUMN "version_mind_map";
  ALTER TABLE "units" DROP COLUMN "overview";
  ALTER TABLE "units" DROP COLUMN "mind_map";
  DROP TYPE "public"."enum_topics_pyq_answers_paper";
  DROP TYPE "public"."enum__topics_v_version_pyq_answers_paper";`)
}

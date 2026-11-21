import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-postgres'

export async function up({ db, payload, req }: MigrateUpArgs): Promise<void> {
  await db.execute(sql`
   CREATE TABLE "pages_blocks_pyq_list_items" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"year" numeric,
  	"marks" numeric,
  	"question" varchar
  );
  
  CREATE TABLE "pages_blocks_pyq_list" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"heading" varchar DEFAULT 'Previous Year Questions',
  	"block_name" varchar
  );
  
  CREATE TABLE "_pages_v_blocks_pyq_list_items" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"year" numeric,
  	"marks" numeric,
  	"question" varchar,
  	"_uuid" varchar
  );
  
  CREATE TABLE "_pages_v_blocks_pyq_list" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"heading" varchar DEFAULT 'Previous Year Questions',
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "current_affairs_blocks_pyq_list_items" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"year" numeric,
  	"marks" numeric,
  	"question" varchar
  );
  
  CREATE TABLE "current_affairs_blocks_pyq_list" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"heading" varchar DEFAULT 'Previous Year Questions',
  	"block_name" varchar
  );
  
  CREATE TABLE "_current_affairs_v_blocks_pyq_list_items" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"year" numeric,
  	"marks" numeric,
  	"question" varchar,
  	"_uuid" varchar
  );
  
  CREATE TABLE "_current_affairs_v_blocks_pyq_list" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"heading" varchar DEFAULT 'Previous Year Questions',
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "topics_blocks_pyq_list_items" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"year" numeric,
  	"marks" numeric,
  	"question" varchar
  );
  
  CREATE TABLE "topics_blocks_pyq_list" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"heading" varchar DEFAULT 'Previous Year Questions',
  	"block_name" varchar
  );
  
  CREATE TABLE "_topics_v_blocks_pyq_list_items" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"year" numeric,
  	"marks" numeric,
  	"question" varchar,
  	"_uuid" varchar
  );
  
  CREATE TABLE "_topics_v_blocks_pyq_list" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"heading" varchar DEFAULT 'Previous Year Questions',
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "thinkers_blocks_pyq_list_items" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"year" numeric,
  	"marks" numeric,
  	"question" varchar
  );
  
  CREATE TABLE "thinkers_blocks_pyq_list" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"heading" varchar DEFAULT 'Previous Year Questions',
  	"block_name" varchar
  );
  
  CREATE TABLE "_thinkers_v_blocks_pyq_list_items" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"year" numeric,
  	"marks" numeric,
  	"question" varchar,
  	"_uuid" varchar
  );
  
  CREATE TABLE "_thinkers_v_blocks_pyq_list" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"heading" varchar DEFAULT 'Previous Year Questions',
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  ALTER TABLE "pages_blocks_pyq_list_items" ADD CONSTRAINT "pages_blocks_pyq_list_items_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_pyq_list"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_pyq_list" ADD CONSTRAINT "pages_blocks_pyq_list_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_pyq_list_items" ADD CONSTRAINT "_pages_v_blocks_pyq_list_items_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v_blocks_pyq_list"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_pyq_list" ADD CONSTRAINT "_pages_v_blocks_pyq_list_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "current_affairs_blocks_pyq_list_items" ADD CONSTRAINT "current_affairs_blocks_pyq_list_items_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."current_affairs_blocks_pyq_list"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "current_affairs_blocks_pyq_list" ADD CONSTRAINT "current_affairs_blocks_pyq_list_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."current_affairs"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_current_affairs_v_blocks_pyq_list_items" ADD CONSTRAINT "_current_affairs_v_blocks_pyq_list_items_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_current_affairs_v_blocks_pyq_list"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_current_affairs_v_blocks_pyq_list" ADD CONSTRAINT "_current_affairs_v_blocks_pyq_list_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_current_affairs_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "topics_blocks_pyq_list_items" ADD CONSTRAINT "topics_blocks_pyq_list_items_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."topics_blocks_pyq_list"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "topics_blocks_pyq_list" ADD CONSTRAINT "topics_blocks_pyq_list_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."topics"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_topics_v_blocks_pyq_list_items" ADD CONSTRAINT "_topics_v_blocks_pyq_list_items_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_topics_v_blocks_pyq_list"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_topics_v_blocks_pyq_list" ADD CONSTRAINT "_topics_v_blocks_pyq_list_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_topics_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "thinkers_blocks_pyq_list_items" ADD CONSTRAINT "thinkers_blocks_pyq_list_items_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."thinkers_blocks_pyq_list"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "thinkers_blocks_pyq_list" ADD CONSTRAINT "thinkers_blocks_pyq_list_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."thinkers"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_thinkers_v_blocks_pyq_list_items" ADD CONSTRAINT "_thinkers_v_blocks_pyq_list_items_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_thinkers_v_blocks_pyq_list"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_thinkers_v_blocks_pyq_list" ADD CONSTRAINT "_thinkers_v_blocks_pyq_list_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_thinkers_v"("id") ON DELETE cascade ON UPDATE no action;
  CREATE INDEX "pages_blocks_pyq_list_items_order_idx" ON "pages_blocks_pyq_list_items" USING btree ("_order");
  CREATE INDEX "pages_blocks_pyq_list_items_parent_id_idx" ON "pages_blocks_pyq_list_items" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_pyq_list_order_idx" ON "pages_blocks_pyq_list" USING btree ("_order");
  CREATE INDEX "pages_blocks_pyq_list_parent_id_idx" ON "pages_blocks_pyq_list" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_pyq_list_path_idx" ON "pages_blocks_pyq_list" USING btree ("_path");
  CREATE INDEX "_pages_v_blocks_pyq_list_items_order_idx" ON "_pages_v_blocks_pyq_list_items" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_pyq_list_items_parent_id_idx" ON "_pages_v_blocks_pyq_list_items" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_pyq_list_order_idx" ON "_pages_v_blocks_pyq_list" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_pyq_list_parent_id_idx" ON "_pages_v_blocks_pyq_list" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_pyq_list_path_idx" ON "_pages_v_blocks_pyq_list" USING btree ("_path");
  CREATE INDEX "current_affairs_blocks_pyq_list_items_order_idx" ON "current_affairs_blocks_pyq_list_items" USING btree ("_order");
  CREATE INDEX "current_affairs_blocks_pyq_list_items_parent_id_idx" ON "current_affairs_blocks_pyq_list_items" USING btree ("_parent_id");
  CREATE INDEX "current_affairs_blocks_pyq_list_order_idx" ON "current_affairs_blocks_pyq_list" USING btree ("_order");
  CREATE INDEX "current_affairs_blocks_pyq_list_parent_id_idx" ON "current_affairs_blocks_pyq_list" USING btree ("_parent_id");
  CREATE INDEX "current_affairs_blocks_pyq_list_path_idx" ON "current_affairs_blocks_pyq_list" USING btree ("_path");
  CREATE INDEX "_current_affairs_v_blocks_pyq_list_items_order_idx" ON "_current_affairs_v_blocks_pyq_list_items" USING btree ("_order");
  CREATE INDEX "_current_affairs_v_blocks_pyq_list_items_parent_id_idx" ON "_current_affairs_v_blocks_pyq_list_items" USING btree ("_parent_id");
  CREATE INDEX "_current_affairs_v_blocks_pyq_list_order_idx" ON "_current_affairs_v_blocks_pyq_list" USING btree ("_order");
  CREATE INDEX "_current_affairs_v_blocks_pyq_list_parent_id_idx" ON "_current_affairs_v_blocks_pyq_list" USING btree ("_parent_id");
  CREATE INDEX "_current_affairs_v_blocks_pyq_list_path_idx" ON "_current_affairs_v_blocks_pyq_list" USING btree ("_path");
  CREATE INDEX "topics_blocks_pyq_list_items_order_idx" ON "topics_blocks_pyq_list_items" USING btree ("_order");
  CREATE INDEX "topics_blocks_pyq_list_items_parent_id_idx" ON "topics_blocks_pyq_list_items" USING btree ("_parent_id");
  CREATE INDEX "topics_blocks_pyq_list_order_idx" ON "topics_blocks_pyq_list" USING btree ("_order");
  CREATE INDEX "topics_blocks_pyq_list_parent_id_idx" ON "topics_blocks_pyq_list" USING btree ("_parent_id");
  CREATE INDEX "topics_blocks_pyq_list_path_idx" ON "topics_blocks_pyq_list" USING btree ("_path");
  CREATE INDEX "_topics_v_blocks_pyq_list_items_order_idx" ON "_topics_v_blocks_pyq_list_items" USING btree ("_order");
  CREATE INDEX "_topics_v_blocks_pyq_list_items_parent_id_idx" ON "_topics_v_blocks_pyq_list_items" USING btree ("_parent_id");
  CREATE INDEX "_topics_v_blocks_pyq_list_order_idx" ON "_topics_v_blocks_pyq_list" USING btree ("_order");
  CREATE INDEX "_topics_v_blocks_pyq_list_parent_id_idx" ON "_topics_v_blocks_pyq_list" USING btree ("_parent_id");
  CREATE INDEX "_topics_v_blocks_pyq_list_path_idx" ON "_topics_v_blocks_pyq_list" USING btree ("_path");
  CREATE INDEX "thinkers_blocks_pyq_list_items_order_idx" ON "thinkers_blocks_pyq_list_items" USING btree ("_order");
  CREATE INDEX "thinkers_blocks_pyq_list_items_parent_id_idx" ON "thinkers_blocks_pyq_list_items" USING btree ("_parent_id");
  CREATE INDEX "thinkers_blocks_pyq_list_order_idx" ON "thinkers_blocks_pyq_list" USING btree ("_order");
  CREATE INDEX "thinkers_blocks_pyq_list_parent_id_idx" ON "thinkers_blocks_pyq_list" USING btree ("_parent_id");
  CREATE INDEX "thinkers_blocks_pyq_list_path_idx" ON "thinkers_blocks_pyq_list" USING btree ("_path");
  CREATE INDEX "_thinkers_v_blocks_pyq_list_items_order_idx" ON "_thinkers_v_blocks_pyq_list_items" USING btree ("_order");
  CREATE INDEX "_thinkers_v_blocks_pyq_list_items_parent_id_idx" ON "_thinkers_v_blocks_pyq_list_items" USING btree ("_parent_id");
  CREATE INDEX "_thinkers_v_blocks_pyq_list_order_idx" ON "_thinkers_v_blocks_pyq_list" USING btree ("_order");
  CREATE INDEX "_thinkers_v_blocks_pyq_list_parent_id_idx" ON "_thinkers_v_blocks_pyq_list" USING btree ("_parent_id");
  CREATE INDEX "_thinkers_v_blocks_pyq_list_path_idx" ON "_thinkers_v_blocks_pyq_list" USING btree ("_path");`)
}

export async function down({ db, payload, req }: MigrateDownArgs): Promise<void> {
  await db.execute(sql`
   DROP TABLE "pages_blocks_pyq_list_items" CASCADE;
  DROP TABLE "pages_blocks_pyq_list" CASCADE;
  DROP TABLE "_pages_v_blocks_pyq_list_items" CASCADE;
  DROP TABLE "_pages_v_blocks_pyq_list" CASCADE;
  DROP TABLE "current_affairs_blocks_pyq_list_items" CASCADE;
  DROP TABLE "current_affairs_blocks_pyq_list" CASCADE;
  DROP TABLE "_current_affairs_v_blocks_pyq_list_items" CASCADE;
  DROP TABLE "_current_affairs_v_blocks_pyq_list" CASCADE;
  DROP TABLE "topics_blocks_pyq_list_items" CASCADE;
  DROP TABLE "topics_blocks_pyq_list" CASCADE;
  DROP TABLE "_topics_v_blocks_pyq_list_items" CASCADE;
  DROP TABLE "_topics_v_blocks_pyq_list" CASCADE;
  DROP TABLE "thinkers_blocks_pyq_list_items" CASCADE;
  DROP TABLE "thinkers_blocks_pyq_list" CASCADE;
  DROP TABLE "_thinkers_v_blocks_pyq_list_items" CASCADE;
  DROP TABLE "_thinkers_v_blocks_pyq_list" CASCADE;`)
}

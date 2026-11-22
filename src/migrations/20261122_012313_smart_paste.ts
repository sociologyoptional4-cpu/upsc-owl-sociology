import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-postgres'

export async function up({ db, payload, req }: MigrateUpArgs): Promise<void> {
  await db.execute(sql`
   ALTER TYPE "public"."enum_pipeline_runs_kind" ADD VALUE 'smart-paste';
  ALTER TABLE "current_affairs" ADD COLUMN "seo_title" varchar;
  ALTER TABLE "current_affairs" ADD COLUMN "seo_description" varchar;
  ALTER TABLE "_current_affairs_v" ADD COLUMN "version_seo_title" varchar;
  ALTER TABLE "_current_affairs_v" ADD COLUMN "version_seo_description" varchar;`)
}

export async function down({ db, payload, req }: MigrateDownArgs): Promise<void> {
  await db.execute(sql`
   ALTER TABLE "pipeline_runs" ALTER COLUMN "kind" SET DATA TYPE text;
  DROP TYPE "public"."enum_pipeline_runs_kind";
  CREATE TYPE "public"."enum_pipeline_runs_kind" AS ENUM('daily-ca', 'notes', 'digest', 'quiz', 'blog');
  ALTER TABLE "pipeline_runs" ALTER COLUMN "kind" SET DATA TYPE "public"."enum_pipeline_runs_kind" USING "kind"::"public"."enum_pipeline_runs_kind";
  ALTER TABLE "current_affairs" DROP COLUMN "seo_title";
  ALTER TABLE "current_affairs" DROP COLUMN "seo_description";
  ALTER TABLE "_current_affairs_v" DROP COLUMN "version_seo_title";
  ALTER TABLE "_current_affairs_v" DROP COLUMN "version_seo_description";`)
}

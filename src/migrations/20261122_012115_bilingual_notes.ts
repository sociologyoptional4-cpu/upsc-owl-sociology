import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-postgres'

export async function up({ db, payload, req }: MigrateUpArgs): Promise<void> {
  await db.execute(sql`
   ALTER TABLE "topics" ADD COLUMN "summary_hinglish" varchar;
  ALTER TABLE "topics" ADD COLUMN "notebook_content_hinglish" jsonb;
  ALTER TABLE "topics" ADD COLUMN "mind_map_hinglish" jsonb;
  ALTER TABLE "topics" ADD COLUMN "pyq_answers_hinglish" jsonb;
  ALTER TABLE "_topics_v" ADD COLUMN "version_summary_hinglish" varchar;
  ALTER TABLE "_topics_v" ADD COLUMN "version_notebook_content_hinglish" jsonb;
  ALTER TABLE "_topics_v" ADD COLUMN "version_mind_map_hinglish" jsonb;
  ALTER TABLE "_topics_v" ADD COLUMN "version_pyq_answers_hinglish" jsonb;
  ALTER TABLE "units_infographics" ADD COLUMN "title_hinglish" varchar;
  ALTER TABLE "units_infographics" ADD COLUMN "caption_hinglish" varchar;
  ALTER TABLE "units_infographics" ADD COLUMN "badge_hinglish" varchar;
  ALTER TABLE "units" ADD COLUMN "overview_hinglish" varchar;
  ALTER TABLE "units" ADD COLUMN "study_sequence_hinglish" jsonb;
  ALTER TABLE "units" ADD COLUMN "mind_map_hinglish" jsonb;`)
}

export async function down({ db, payload, req }: MigrateDownArgs): Promise<void> {
  await db.execute(sql`
   ALTER TABLE "topics" DROP COLUMN "summary_hinglish";
  ALTER TABLE "topics" DROP COLUMN "notebook_content_hinglish";
  ALTER TABLE "topics" DROP COLUMN "mind_map_hinglish";
  ALTER TABLE "topics" DROP COLUMN "pyq_answers_hinglish";
  ALTER TABLE "_topics_v" DROP COLUMN "version_summary_hinglish";
  ALTER TABLE "_topics_v" DROP COLUMN "version_notebook_content_hinglish";
  ALTER TABLE "_topics_v" DROP COLUMN "version_mind_map_hinglish";
  ALTER TABLE "_topics_v" DROP COLUMN "version_pyq_answers_hinglish";
  ALTER TABLE "units_infographics" DROP COLUMN "title_hinglish";
  ALTER TABLE "units_infographics" DROP COLUMN "caption_hinglish";
  ALTER TABLE "units_infographics" DROP COLUMN "badge_hinglish";
  ALTER TABLE "units" DROP COLUMN "overview_hinglish";
  ALTER TABLE "units" DROP COLUMN "study_sequence_hinglish";
  ALTER TABLE "units" DROP COLUMN "mind_map_hinglish";`)
}

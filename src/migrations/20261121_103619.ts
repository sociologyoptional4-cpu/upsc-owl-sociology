import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-postgres'

export async function up({ db, payload: _payload, req: _req }: MigrateUpArgs): Promise<void> {
  await db.execute(sql`
   CREATE TYPE "public"."enum_pages_blocks_hero_variant" AS ENUM('plain', 'masthead');
  CREATE TYPE "public"."enum_pages_blocks_callout_tone" AS ENUM('tip', 'warning', 'pyq', 'ai');
  CREATE TYPE "public"."enum_pages_blocks_cta_style" AS ENUM('ink', 'telegram');
  CREATE TYPE "public"."enum_pages_status" AS ENUM('draft', 'published');
  CREATE TYPE "public"."enum__pages_v_blocks_hero_variant" AS ENUM('plain', 'masthead');
  CREATE TYPE "public"."enum__pages_v_blocks_callout_tone" AS ENUM('tip', 'warning', 'pyq', 'ai');
  CREATE TYPE "public"."enum__pages_v_blocks_cta_style" AS ENUM('ink', 'telegram');
  CREATE TYPE "public"."enum__pages_v_version_status" AS ENUM('draft', 'published');
  CREATE TYPE "public"."enum_current_affairs_blocks_hero_variant" AS ENUM('plain', 'masthead');
  CREATE TYPE "public"."enum_current_affairs_blocks_callout_tone" AS ENUM('tip', 'warning', 'pyq', 'ai');
  CREATE TYPE "public"."enum_current_affairs_blocks_cta_style" AS ENUM('ink', 'telegram');
  CREATE TYPE "public"."enum_current_affairs_paper" AS ENUM('P1', 'P2', 'Both');
  CREATE TYPE "public"."enum_current_affairs_review_status" AS ENUM('pending', 'approved', 'rejected');
  CREATE TYPE "public"."enum_current_affairs_status" AS ENUM('draft', 'published');
  CREATE TYPE "public"."enum__current_affairs_v_blocks_hero_variant" AS ENUM('plain', 'masthead');
  CREATE TYPE "public"."enum__current_affairs_v_blocks_callout_tone" AS ENUM('tip', 'warning', 'pyq', 'ai');
  CREATE TYPE "public"."enum__current_affairs_v_blocks_cta_style" AS ENUM('ink', 'telegram');
  CREATE TYPE "public"."enum__current_affairs_v_version_paper" AS ENUM('P1', 'P2', 'Both');
  CREATE TYPE "public"."enum__current_affairs_v_version_review_status" AS ENUM('pending', 'approved', 'rejected');
  CREATE TYPE "public"."enum__current_affairs_v_version_status" AS ENUM('draft', 'published');
  CREATE TYPE "public"."enum_topics_blocks_hero_variant" AS ENUM('plain', 'masthead');
  CREATE TYPE "public"."enum_topics_blocks_callout_tone" AS ENUM('tip', 'warning', 'pyq', 'ai');
  CREATE TYPE "public"."enum_topics_blocks_cta_style" AS ENUM('ink', 'telegram');
  CREATE TYPE "public"."enum_topics_status" AS ENUM('draft', 'published');
  CREATE TYPE "public"."enum__topics_v_blocks_hero_variant" AS ENUM('plain', 'masthead');
  CREATE TYPE "public"."enum__topics_v_blocks_callout_tone" AS ENUM('tip', 'warning', 'pyq', 'ai');
  CREATE TYPE "public"."enum__topics_v_blocks_cta_style" AS ENUM('ink', 'telegram');
  CREATE TYPE "public"."enum__topics_v_version_status" AS ENUM('draft', 'published');
  CREATE TYPE "public"."enum_papers_code" AS ENUM('P1', 'P2');
  CREATE TYPE "public"."enum_thinkers_blocks_hero_variant" AS ENUM('plain', 'masthead');
  CREATE TYPE "public"."enum_thinkers_blocks_callout_tone" AS ENUM('tip', 'warning', 'pyq', 'ai');
  CREATE TYPE "public"."enum_thinkers_blocks_cta_style" AS ENUM('ink', 'telegram');
  CREATE TYPE "public"."enum_thinkers_status" AS ENUM('draft', 'published');
  CREATE TYPE "public"."enum__thinkers_v_blocks_hero_variant" AS ENUM('plain', 'masthead');
  CREATE TYPE "public"."enum__thinkers_v_blocks_callout_tone" AS ENUM('tip', 'warning', 'pyq', 'ai');
  CREATE TYPE "public"."enum__thinkers_v_blocks_cta_style" AS ENUM('ink', 'telegram');
  CREATE TYPE "public"."enum__thinkers_v_version_status" AS ENUM('draft', 'published');
  CREATE TYPE "public"."enum_media_license" AS ENUM('own', 'public-domain', 'cc0', 'cc-by', 'cc-by-sa', 'other');
  CREATE TYPE "public"."enum_users_role" AS ENUM('admin', 'editor', 'ai-bot');
  CREATE TYPE "public"."enum_sources_kind" AS ENUM('rss', 'official', 'manual');
  CREATE TYPE "public"."enum_pipeline_runs_status" AS ENUM('running', 'ok', 'partial', 'failed');
  CREATE TYPE "public"."enum_digests_type" AS ENUM('weekly', 'monthly');
  CREATE TYPE "public"."enum_digests_status" AS ENUM('draft', 'published');
  CREATE TYPE "public"."enum__digests_v_version_type" AS ENUM('weekly', 'monthly');
  CREATE TYPE "public"."enum__digests_v_version_status" AS ENUM('draft', 'published');
  CREATE TYPE "public"."enum_quizzes_status" AS ENUM('draft', 'published');
  CREATE TYPE "public"."enum__quizzes_v_version_status" AS ENUM('draft', 'published');
  CREATE TABLE "pages_blocks_hero_actions" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"label" varchar,
  	"href" varchar
  );
  
  CREATE TABLE "pages_blocks_hero" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"kicker" varchar,
  	"heading" varchar,
  	"subheading" varchar,
  	"variant" "enum_pages_blocks_hero_variant" DEFAULT 'plain',
  	"block_name" varchar
  );
  
  CREATE TABLE "pages_blocks_rich_text" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"content" jsonb,
  	"block_name" varchar
  );
  
  CREATE TABLE "pages_blocks_summary_points" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"text" varchar
  );
  
  CREATE TABLE "pages_blocks_summary" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"heading" varchar DEFAULT 'Khabar kya hai',
  	"block_name" varchar
  );
  
  CREATE TABLE "pages_blocks_callout" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"tone" "enum_pages_blocks_callout_tone" DEFAULT 'tip',
  	"title" varchar,
  	"body" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "pages_blocks_key_terms_rows" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"term" varchar,
  	"meaning" varchar,
  	"thinker" varchar
  );
  
  CREATE TABLE "pages_blocks_key_terms" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"caption" varchar DEFAULT 'Key terms',
  	"block_name" varchar
  );
  
  CREATE TABLE "pages_blocks_cta" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"heading" varchar,
  	"body" varchar,
  	"label" varchar,
  	"href" varchar,
  	"style" "enum_pages_blocks_cta_style" DEFAULT 'ink',
  	"block_name" varchar
  );
  
  CREATE TABLE "pages" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"title" varchar,
  	"slug" varchar,
  	"parent_id" integer,
  	"path" varchar,
  	"seo_title" varchar,
  	"seo_description" varchar,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"_status" "enum_pages_status" DEFAULT 'draft'
  );
  
  CREATE TABLE "_pages_v_blocks_hero_actions" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"label" varchar,
  	"href" varchar,
  	"_uuid" varchar
  );
  
  CREATE TABLE "_pages_v_blocks_hero" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"kicker" varchar,
  	"heading" varchar,
  	"subheading" varchar,
  	"variant" "enum__pages_v_blocks_hero_variant" DEFAULT 'plain',
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_pages_v_blocks_rich_text" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"content" jsonb,
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_pages_v_blocks_summary_points" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"text" varchar,
  	"_uuid" varchar
  );
  
  CREATE TABLE "_pages_v_blocks_summary" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"heading" varchar DEFAULT 'Khabar kya hai',
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_pages_v_blocks_callout" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"tone" "enum__pages_v_blocks_callout_tone" DEFAULT 'tip',
  	"title" varchar,
  	"body" varchar,
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_pages_v_blocks_key_terms_rows" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"term" varchar,
  	"meaning" varchar,
  	"thinker" varchar,
  	"_uuid" varchar
  );
  
  CREATE TABLE "_pages_v_blocks_key_terms" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"caption" varchar DEFAULT 'Key terms',
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_pages_v_blocks_cta" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"heading" varchar,
  	"body" varchar,
  	"label" varchar,
  	"href" varchar,
  	"style" "enum__pages_v_blocks_cta_style" DEFAULT 'ink',
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_pages_v" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"parent_id" integer,
  	"version_title" varchar,
  	"version_slug" varchar,
  	"version_parent_id" integer,
  	"version_path" varchar,
  	"version_seo_title" varchar,
  	"version_seo_description" varchar,
  	"version_updated_at" timestamp(3) with time zone,
  	"version_created_at" timestamp(3) with time zone,
  	"version__status" "enum__pages_v_version_status" DEFAULT 'draft',
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"latest" boolean,
  	"autosave" boolean
  );
  
  CREATE TABLE "current_affairs_sources" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"name" varchar,
  	"url" varchar
  );
  
  CREATE TABLE "current_affairs_blocks_hero_actions" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"label" varchar,
  	"href" varchar
  );
  
  CREATE TABLE "current_affairs_blocks_hero" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"kicker" varchar,
  	"heading" varchar,
  	"subheading" varchar,
  	"variant" "enum_current_affairs_blocks_hero_variant" DEFAULT 'plain',
  	"block_name" varchar
  );
  
  CREATE TABLE "current_affairs_blocks_rich_text" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"content" jsonb,
  	"block_name" varchar
  );
  
  CREATE TABLE "current_affairs_blocks_summary_points" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"text" varchar
  );
  
  CREATE TABLE "current_affairs_blocks_summary" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"heading" varchar DEFAULT 'Khabar kya hai',
  	"block_name" varchar
  );
  
  CREATE TABLE "current_affairs_blocks_callout" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"tone" "enum_current_affairs_blocks_callout_tone" DEFAULT 'tip',
  	"title" varchar,
  	"body" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "current_affairs_blocks_key_terms_rows" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"term" varchar,
  	"meaning" varchar,
  	"thinker" varchar
  );
  
  CREATE TABLE "current_affairs_blocks_key_terms" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"caption" varchar DEFAULT 'Key terms',
  	"block_name" varchar
  );
  
  CREATE TABLE "current_affairs_blocks_cta" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"heading" varchar,
  	"body" varchar,
  	"label" varchar,
  	"href" varchar,
  	"style" "enum_current_affairs_blocks_cta_style" DEFAULT 'ink',
  	"block_name" varchar
  );
  
  CREATE TABLE "current_affairs" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"headline" varchar,
  	"slug" varchar,
  	"date" timestamp(3) with time zone,
  	"paper" "enum_current_affairs_paper",
  	"summary" varchar,
  	"review_status" "enum_current_affairs_review_status" DEFAULT 'pending',
  	"reject_reason" varchar,
  	"source_hash" varchar,
  	"embedding" jsonb,
  	"telegram_message_id" varchar,
  	"is_ai_generated" boolean DEFAULT false,
  	"ai_meta_model" varchar,
  	"ai_meta_prompt_version" varchar,
  	"ai_meta_relevance" numeric,
  	"ai_meta_cost_usd" numeric,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"_status" "enum_current_affairs_status" DEFAULT 'draft'
  );
  
  CREATE TABLE "current_affairs_rels" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"order" integer,
  	"parent_id" integer NOT NULL,
  	"path" varchar NOT NULL,
  	"topics_id" integer,
  	"thinkers_id" integer
  );
  
  CREATE TABLE "_current_affairs_v_version_sources" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"name" varchar,
  	"url" varchar,
  	"_uuid" varchar
  );
  
  CREATE TABLE "_current_affairs_v_blocks_hero_actions" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"label" varchar,
  	"href" varchar,
  	"_uuid" varchar
  );
  
  CREATE TABLE "_current_affairs_v_blocks_hero" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"kicker" varchar,
  	"heading" varchar,
  	"subheading" varchar,
  	"variant" "enum__current_affairs_v_blocks_hero_variant" DEFAULT 'plain',
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_current_affairs_v_blocks_rich_text" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"content" jsonb,
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_current_affairs_v_blocks_summary_points" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"text" varchar,
  	"_uuid" varchar
  );
  
  CREATE TABLE "_current_affairs_v_blocks_summary" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"heading" varchar DEFAULT 'Khabar kya hai',
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_current_affairs_v_blocks_callout" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"tone" "enum__current_affairs_v_blocks_callout_tone" DEFAULT 'tip',
  	"title" varchar,
  	"body" varchar,
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_current_affairs_v_blocks_key_terms_rows" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"term" varchar,
  	"meaning" varchar,
  	"thinker" varchar,
  	"_uuid" varchar
  );
  
  CREATE TABLE "_current_affairs_v_blocks_key_terms" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"caption" varchar DEFAULT 'Key terms',
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_current_affairs_v_blocks_cta" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"heading" varchar,
  	"body" varchar,
  	"label" varchar,
  	"href" varchar,
  	"style" "enum__current_affairs_v_blocks_cta_style" DEFAULT 'ink',
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_current_affairs_v" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"parent_id" integer,
  	"version_headline" varchar,
  	"version_slug" varchar,
  	"version_date" timestamp(3) with time zone,
  	"version_paper" "enum__current_affairs_v_version_paper",
  	"version_summary" varchar,
  	"version_review_status" "enum__current_affairs_v_version_review_status" DEFAULT 'pending',
  	"version_reject_reason" varchar,
  	"version_source_hash" varchar,
  	"version_embedding" jsonb,
  	"version_telegram_message_id" varchar,
  	"version_is_ai_generated" boolean DEFAULT false,
  	"version_ai_meta_model" varchar,
  	"version_ai_meta_prompt_version" varchar,
  	"version_ai_meta_relevance" numeric,
  	"version_ai_meta_cost_usd" numeric,
  	"version_updated_at" timestamp(3) with time zone,
  	"version_created_at" timestamp(3) with time zone,
  	"version__status" "enum__current_affairs_v_version_status" DEFAULT 'draft',
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"latest" boolean
  );
  
  CREATE TABLE "_current_affairs_v_rels" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"order" integer,
  	"parent_id" integer NOT NULL,
  	"path" varchar NOT NULL,
  	"topics_id" integer,
  	"thinkers_id" integer
  );
  
  CREATE TABLE "topics_blocks_hero_actions" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"label" varchar,
  	"href" varchar
  );
  
  CREATE TABLE "topics_blocks_hero" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"kicker" varchar,
  	"heading" varchar,
  	"subheading" varchar,
  	"variant" "enum_topics_blocks_hero_variant" DEFAULT 'plain',
  	"block_name" varchar
  );
  
  CREATE TABLE "topics_blocks_rich_text" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"content" jsonb,
  	"block_name" varchar
  );
  
  CREATE TABLE "topics_blocks_summary_points" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"text" varchar
  );
  
  CREATE TABLE "topics_blocks_summary" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"heading" varchar DEFAULT 'Khabar kya hai',
  	"block_name" varchar
  );
  
  CREATE TABLE "topics_blocks_callout" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"tone" "enum_topics_blocks_callout_tone" DEFAULT 'tip',
  	"title" varchar,
  	"body" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "topics_blocks_key_terms_rows" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"term" varchar,
  	"meaning" varchar,
  	"thinker" varchar
  );
  
  CREATE TABLE "topics_blocks_key_terms" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"caption" varchar DEFAULT 'Key terms',
  	"block_name" varchar
  );
  
  CREATE TABLE "topics_blocks_cta" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"heading" varchar,
  	"body" varchar,
  	"label" varchar,
  	"href" varchar,
  	"style" "enum_topics_blocks_cta_style" DEFAULT 'ink',
  	"block_name" varchar
  );
  
  CREATE TABLE "topics" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"title" varchar,
  	"slug" varchar,
  	"unit_id" integer,
  	"summary" varchar,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"_status" "enum_topics_status" DEFAULT 'draft'
  );
  
  CREATE TABLE "topics_rels" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"order" integer,
  	"parent_id" integer NOT NULL,
  	"path" varchar NOT NULL,
  	"thinkers_id" integer,
  	"topics_id" integer
  );
  
  CREATE TABLE "_topics_v_blocks_hero_actions" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"label" varchar,
  	"href" varchar,
  	"_uuid" varchar
  );
  
  CREATE TABLE "_topics_v_blocks_hero" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"kicker" varchar,
  	"heading" varchar,
  	"subheading" varchar,
  	"variant" "enum__topics_v_blocks_hero_variant" DEFAULT 'plain',
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_topics_v_blocks_rich_text" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"content" jsonb,
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_topics_v_blocks_summary_points" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"text" varchar,
  	"_uuid" varchar
  );
  
  CREATE TABLE "_topics_v_blocks_summary" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"heading" varchar DEFAULT 'Khabar kya hai',
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_topics_v_blocks_callout" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"tone" "enum__topics_v_blocks_callout_tone" DEFAULT 'tip',
  	"title" varchar,
  	"body" varchar,
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_topics_v_blocks_key_terms_rows" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"term" varchar,
  	"meaning" varchar,
  	"thinker" varchar,
  	"_uuid" varchar
  );
  
  CREATE TABLE "_topics_v_blocks_key_terms" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"caption" varchar DEFAULT 'Key terms',
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_topics_v_blocks_cta" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"heading" varchar,
  	"body" varchar,
  	"label" varchar,
  	"href" varchar,
  	"style" "enum__topics_v_blocks_cta_style" DEFAULT 'ink',
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_topics_v" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"parent_id" integer,
  	"version_title" varchar,
  	"version_slug" varchar,
  	"version_unit_id" integer,
  	"version_summary" varchar,
  	"version_updated_at" timestamp(3) with time zone,
  	"version_created_at" timestamp(3) with time zone,
  	"version__status" "enum__topics_v_version_status" DEFAULT 'draft',
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"latest" boolean
  );
  
  CREATE TABLE "_topics_v_rels" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"order" integer,
  	"parent_id" integer NOT NULL,
  	"path" varchar NOT NULL,
  	"thinkers_id" integer,
  	"topics_id" integer
  );
  
  CREATE TABLE "units" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"paper_id" integer NOT NULL,
  	"number" numeric NOT NULL,
  	"title" varchar NOT NULL,
  	"slug" varchar,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
  );
  
  CREATE TABLE "papers" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"code" "enum_papers_code" NOT NULL,
  	"title" varchar NOT NULL,
  	"slug" varchar,
  	"description" varchar,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
  );
  
  CREATE TABLE "thinkers_key_ideas" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"idea" varchar
  );
  
  CREATE TABLE "thinkers_blocks_hero_actions" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"label" varchar,
  	"href" varchar
  );
  
  CREATE TABLE "thinkers_blocks_hero" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"kicker" varchar,
  	"heading" varchar,
  	"subheading" varchar,
  	"variant" "enum_thinkers_blocks_hero_variant" DEFAULT 'plain',
  	"block_name" varchar
  );
  
  CREATE TABLE "thinkers_blocks_rich_text" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"content" jsonb,
  	"block_name" varchar
  );
  
  CREATE TABLE "thinkers_blocks_summary_points" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"text" varchar
  );
  
  CREATE TABLE "thinkers_blocks_summary" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"heading" varchar DEFAULT 'Khabar kya hai',
  	"block_name" varchar
  );
  
  CREATE TABLE "thinkers_blocks_callout" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"tone" "enum_thinkers_blocks_callout_tone" DEFAULT 'tip',
  	"title" varchar,
  	"body" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "thinkers_blocks_key_terms_rows" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"term" varchar,
  	"meaning" varchar,
  	"thinker" varchar
  );
  
  CREATE TABLE "thinkers_blocks_key_terms" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"caption" varchar DEFAULT 'Key terms',
  	"block_name" varchar
  );
  
  CREATE TABLE "thinkers_blocks_cta" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"heading" varchar,
  	"body" varchar,
  	"label" varchar,
  	"href" varchar,
  	"style" "enum_thinkers_blocks_cta_style" DEFAULT 'ink',
  	"block_name" varchar
  );
  
  CREATE TABLE "thinkers" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"name" varchar,
  	"slug" varchar,
  	"era" varchar,
  	"portrait_id" integer,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"_status" "enum_thinkers_status" DEFAULT 'draft'
  );
  
  CREATE TABLE "_thinkers_v_version_key_ideas" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"idea" varchar,
  	"_uuid" varchar
  );
  
  CREATE TABLE "_thinkers_v_blocks_hero_actions" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"label" varchar,
  	"href" varchar,
  	"_uuid" varchar
  );
  
  CREATE TABLE "_thinkers_v_blocks_hero" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"kicker" varchar,
  	"heading" varchar,
  	"subheading" varchar,
  	"variant" "enum__thinkers_v_blocks_hero_variant" DEFAULT 'plain',
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_thinkers_v_blocks_rich_text" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"content" jsonb,
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_thinkers_v_blocks_summary_points" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"text" varchar,
  	"_uuid" varchar
  );
  
  CREATE TABLE "_thinkers_v_blocks_summary" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"heading" varchar DEFAULT 'Khabar kya hai',
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_thinkers_v_blocks_callout" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"tone" "enum__thinkers_v_blocks_callout_tone" DEFAULT 'tip',
  	"title" varchar,
  	"body" varchar,
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_thinkers_v_blocks_key_terms_rows" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"term" varchar,
  	"meaning" varchar,
  	"thinker" varchar,
  	"_uuid" varchar
  );
  
  CREATE TABLE "_thinkers_v_blocks_key_terms" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"caption" varchar DEFAULT 'Key terms',
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_thinkers_v_blocks_cta" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"heading" varchar,
  	"body" varchar,
  	"label" varchar,
  	"href" varchar,
  	"style" "enum__thinkers_v_blocks_cta_style" DEFAULT 'ink',
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_thinkers_v" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"parent_id" integer,
  	"version_name" varchar,
  	"version_slug" varchar,
  	"version_era" varchar,
  	"version_portrait_id" integer,
  	"version_updated_at" timestamp(3) with time zone,
  	"version_created_at" timestamp(3) with time zone,
  	"version__status" "enum__thinkers_v_version_status" DEFAULT 'draft',
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"latest" boolean
  );
  
  CREATE TABLE "media" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"alt" varchar NOT NULL,
  	"license" "enum_media_license" DEFAULT 'own' NOT NULL,
  	"credit" varchar,
  	"source_url" varchar,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"url" varchar,
  	"thumbnail_u_r_l" varchar,
  	"filename" varchar,
  	"mime_type" varchar,
  	"filesize" numeric,
  	"width" numeric,
  	"height" numeric,
  	"focal_x" numeric,
  	"focal_y" numeric,
  	"sizes_card_url" varchar,
  	"sizes_card_width" numeric,
  	"sizes_card_height" numeric,
  	"sizes_card_mime_type" varchar,
  	"sizes_card_filesize" numeric,
  	"sizes_card_filename" varchar,
  	"sizes_feature_url" varchar,
  	"sizes_feature_width" numeric,
  	"sizes_feature_height" numeric,
  	"sizes_feature_mime_type" varchar,
  	"sizes_feature_filesize" numeric,
  	"sizes_feature_filename" varchar
  );
  
  CREATE TABLE "users_sessions" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"created_at" timestamp(3) with time zone,
  	"expires_at" timestamp(3) with time zone NOT NULL
  );
  
  CREATE TABLE "users" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"name" varchar,
  	"role" "enum_users_role" DEFAULT 'editor' NOT NULL,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"enable_a_p_i_key" boolean,
  	"api_key" varchar,
  	"api_key_index" varchar,
  	"email" varchar NOT NULL,
  	"reset_password_token" varchar,
  	"reset_password_expiration" timestamp(3) with time zone,
  	"salt" varchar,
  	"hash" varchar,
  	"reset_password_requested_at" timestamp(3) with time zone,
  	"login_attempts" numeric DEFAULT 0,
  	"lock_until" timestamp(3) with time zone
  );
  
  CREATE TABLE "sources" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"name" varchar NOT NULL,
  	"feed_url" varchar NOT NULL,
  	"kind" "enum_sources_kind" NOT NULL,
  	"trust" numeric DEFAULT 2 NOT NULL,
  	"active" boolean DEFAULT true,
  	"last_fetched_at" timestamp(3) with time zone,
  	"last_error" varchar,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
  );
  
  CREATE TABLE "pipeline_runs_errors" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"stage" varchar NOT NULL,
  	"message" varchar NOT NULL
  );
  
  CREATE TABLE "pipeline_runs" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"started_at" timestamp(3) with time zone NOT NULL,
  	"finished_at" timestamp(3) with time zone,
  	"status" "enum_pipeline_runs_status" NOT NULL,
  	"counts_fetched" numeric DEFAULT 0,
  	"counts_deduped" numeric DEFAULT 0,
  	"counts_scored" numeric DEFAULT 0,
  	"counts_kept" numeric DEFAULT 0,
  	"counts_written" numeric DEFAULT 0,
  	"counts_failed_validation" numeric DEFAULT 0,
  	"counts_published" numeric DEFAULT 0,
  	"cost_usd" numeric DEFAULT 0,
  	"tokens_input" numeric DEFAULT 0,
  	"tokens_output" numeric DEFAULT 0,
  	"tokens_cached" numeric DEFAULT 0,
  	"prompt_version" varchar,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
  );
  
  CREATE TABLE "digests_groups" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"topic_id" integer
  );
  
  CREATE TABLE "digests" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"type" "enum_digests_type",
  	"key" varchar,
  	"range_from" timestamp(3) with time zone,
  	"range_to" timestamp(3) with time zone,
  	"intro" varchar,
  	"pdf_id" integer,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"_status" "enum_digests_status" DEFAULT 'draft'
  );
  
  CREATE TABLE "digests_rels" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"order" integer,
  	"parent_id" integer NOT NULL,
  	"path" varchar NOT NULL,
  	"current_affairs_id" integer
  );
  
  CREATE TABLE "_digests_v_version_groups" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"topic_id" integer,
  	"_uuid" varchar
  );
  
  CREATE TABLE "_digests_v" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"parent_id" integer,
  	"version_type" "enum__digests_v_version_type",
  	"version_key" varchar,
  	"version_range_from" timestamp(3) with time zone,
  	"version_range_to" timestamp(3) with time zone,
  	"version_intro" varchar,
  	"version_pdf_id" integer,
  	"version_updated_at" timestamp(3) with time zone,
  	"version_created_at" timestamp(3) with time zone,
  	"version__status" "enum__digests_v_version_status" DEFAULT 'draft',
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"latest" boolean
  );
  
  CREATE TABLE "_digests_v_rels" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"order" integer,
  	"parent_id" integer NOT NULL,
  	"path" varchar NOT NULL,
  	"current_affairs_id" integer
  );
  
  CREATE TABLE "quizzes_items_options" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"text" varchar
  );
  
  CREATE TABLE "quizzes_items" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"question" varchar,
  	"answer_index" numeric,
  	"explanation" varchar,
  	"ca_id_id" integer
  );
  
  CREATE TABLE "quizzes" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"date" timestamp(3) with time zone,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"_status" "enum_quizzes_status" DEFAULT 'draft'
  );
  
  CREATE TABLE "_quizzes_v_version_items_options" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"text" varchar,
  	"_uuid" varchar
  );
  
  CREATE TABLE "_quizzes_v_version_items" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"question" varchar,
  	"answer_index" numeric,
  	"explanation" varchar,
  	"ca_id_id" integer,
  	"_uuid" varchar
  );
  
  CREATE TABLE "_quizzes_v" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"parent_id" integer,
  	"version_date" timestamp(3) with time zone,
  	"version_updated_at" timestamp(3) with time zone,
  	"version_created_at" timestamp(3) with time zone,
  	"version__status" "enum__quizzes_v_version_status" DEFAULT 'draft',
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"latest" boolean
  );
  
  CREATE TABLE "payload_kv" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"key" varchar NOT NULL,
  	"data" jsonb NOT NULL
  );
  
  CREATE TABLE "payload_locked_documents" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"global_slug" varchar,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
  );
  
  CREATE TABLE "payload_locked_documents_rels" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"order" integer,
  	"parent_id" integer NOT NULL,
  	"path" varchar NOT NULL,
  	"pages_id" integer,
  	"current_affairs_id" integer,
  	"topics_id" integer,
  	"units_id" integer,
  	"papers_id" integer,
  	"thinkers_id" integer,
  	"media_id" integer,
  	"users_id" integer,
  	"sources_id" integer,
  	"pipeline_runs_id" integer,
  	"digests_id" integer,
  	"quizzes_id" integer
  );
  
  CREATE TABLE "payload_preferences" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"key" varchar,
  	"value" jsonb,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
  );
  
  CREATE TABLE "payload_preferences_rels" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"order" integer,
  	"parent_id" integer NOT NULL,
  	"path" varchar NOT NULL,
  	"users_id" integer
  );
  
  CREATE TABLE "payload_migrations" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"name" varchar,
  	"batch" numeric,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
  );
  
  CREATE TABLE "site_settings" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"site_name" varchar DEFAULT 'UPSC OWL Sociology',
  	"telegram_url" varchar,
  	"featured_thinker_id" integer,
  	"pipeline_enabled" boolean DEFAULT false,
  	"auto_publish" boolean DEFAULT false,
  	"max_daily_usd" numeric DEFAULT 1,
  	"auto_publish_min_relevance" numeric DEFAULT 0.8,
  	"updated_at" timestamp(3) with time zone,
  	"created_at" timestamp(3) with time zone
  );
  
  CREATE TABLE "navigation_header" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"label" varchar NOT NULL,
  	"href" varchar NOT NULL
  );
  
  CREATE TABLE "navigation_footer" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"label" varchar NOT NULL,
  	"href" varchar NOT NULL
  );
  
  CREATE TABLE "navigation" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"updated_at" timestamp(3) with time zone,
  	"created_at" timestamp(3) with time zone
  );
  
  ALTER TABLE "pages_blocks_hero_actions" ADD CONSTRAINT "pages_blocks_hero_actions_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_hero"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_hero" ADD CONSTRAINT "pages_blocks_hero_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_rich_text" ADD CONSTRAINT "pages_blocks_rich_text_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_summary_points" ADD CONSTRAINT "pages_blocks_summary_points_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_summary"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_summary" ADD CONSTRAINT "pages_blocks_summary_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_callout" ADD CONSTRAINT "pages_blocks_callout_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_key_terms_rows" ADD CONSTRAINT "pages_blocks_key_terms_rows_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_key_terms"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_key_terms" ADD CONSTRAINT "pages_blocks_key_terms_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_cta" ADD CONSTRAINT "pages_blocks_cta_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages" ADD CONSTRAINT "pages_parent_id_pages_id_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."pages"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_hero_actions" ADD CONSTRAINT "_pages_v_blocks_hero_actions_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v_blocks_hero"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_hero" ADD CONSTRAINT "_pages_v_blocks_hero_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_rich_text" ADD CONSTRAINT "_pages_v_blocks_rich_text_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_summary_points" ADD CONSTRAINT "_pages_v_blocks_summary_points_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v_blocks_summary"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_summary" ADD CONSTRAINT "_pages_v_blocks_summary_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_callout" ADD CONSTRAINT "_pages_v_blocks_callout_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_key_terms_rows" ADD CONSTRAINT "_pages_v_blocks_key_terms_rows_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v_blocks_key_terms"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_key_terms" ADD CONSTRAINT "_pages_v_blocks_key_terms_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_cta" ADD CONSTRAINT "_pages_v_blocks_cta_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v" ADD CONSTRAINT "_pages_v_parent_id_pages_id_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."pages"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_pages_v" ADD CONSTRAINT "_pages_v_version_parent_id_pages_id_fk" FOREIGN KEY ("version_parent_id") REFERENCES "public"."pages"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "current_affairs_sources" ADD CONSTRAINT "current_affairs_sources_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."current_affairs"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "current_affairs_blocks_hero_actions" ADD CONSTRAINT "current_affairs_blocks_hero_actions_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."current_affairs_blocks_hero"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "current_affairs_blocks_hero" ADD CONSTRAINT "current_affairs_blocks_hero_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."current_affairs"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "current_affairs_blocks_rich_text" ADD CONSTRAINT "current_affairs_blocks_rich_text_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."current_affairs"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "current_affairs_blocks_summary_points" ADD CONSTRAINT "current_affairs_blocks_summary_points_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."current_affairs_blocks_summary"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "current_affairs_blocks_summary" ADD CONSTRAINT "current_affairs_blocks_summary_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."current_affairs"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "current_affairs_blocks_callout" ADD CONSTRAINT "current_affairs_blocks_callout_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."current_affairs"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "current_affairs_blocks_key_terms_rows" ADD CONSTRAINT "current_affairs_blocks_key_terms_rows_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."current_affairs_blocks_key_terms"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "current_affairs_blocks_key_terms" ADD CONSTRAINT "current_affairs_blocks_key_terms_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."current_affairs"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "current_affairs_blocks_cta" ADD CONSTRAINT "current_affairs_blocks_cta_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."current_affairs"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "current_affairs_rels" ADD CONSTRAINT "current_affairs_rels_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."current_affairs"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "current_affairs_rels" ADD CONSTRAINT "current_affairs_rels_topics_fk" FOREIGN KEY ("topics_id") REFERENCES "public"."topics"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "current_affairs_rels" ADD CONSTRAINT "current_affairs_rels_thinkers_fk" FOREIGN KEY ("thinkers_id") REFERENCES "public"."thinkers"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_current_affairs_v_version_sources" ADD CONSTRAINT "_current_affairs_v_version_sources_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_current_affairs_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_current_affairs_v_blocks_hero_actions" ADD CONSTRAINT "_current_affairs_v_blocks_hero_actions_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_current_affairs_v_blocks_hero"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_current_affairs_v_blocks_hero" ADD CONSTRAINT "_current_affairs_v_blocks_hero_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_current_affairs_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_current_affairs_v_blocks_rich_text" ADD CONSTRAINT "_current_affairs_v_blocks_rich_text_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_current_affairs_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_current_affairs_v_blocks_summary_points" ADD CONSTRAINT "_current_affairs_v_blocks_summary_points_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_current_affairs_v_blocks_summary"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_current_affairs_v_blocks_summary" ADD CONSTRAINT "_current_affairs_v_blocks_summary_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_current_affairs_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_current_affairs_v_blocks_callout" ADD CONSTRAINT "_current_affairs_v_blocks_callout_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_current_affairs_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_current_affairs_v_blocks_key_terms_rows" ADD CONSTRAINT "_current_affairs_v_blocks_key_terms_rows_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_current_affairs_v_blocks_key_terms"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_current_affairs_v_blocks_key_terms" ADD CONSTRAINT "_current_affairs_v_blocks_key_terms_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_current_affairs_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_current_affairs_v_blocks_cta" ADD CONSTRAINT "_current_affairs_v_blocks_cta_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_current_affairs_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_current_affairs_v" ADD CONSTRAINT "_current_affairs_v_parent_id_current_affairs_id_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."current_affairs"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_current_affairs_v_rels" ADD CONSTRAINT "_current_affairs_v_rels_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."_current_affairs_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_current_affairs_v_rels" ADD CONSTRAINT "_current_affairs_v_rels_topics_fk" FOREIGN KEY ("topics_id") REFERENCES "public"."topics"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_current_affairs_v_rels" ADD CONSTRAINT "_current_affairs_v_rels_thinkers_fk" FOREIGN KEY ("thinkers_id") REFERENCES "public"."thinkers"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "topics_blocks_hero_actions" ADD CONSTRAINT "topics_blocks_hero_actions_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."topics_blocks_hero"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "topics_blocks_hero" ADD CONSTRAINT "topics_blocks_hero_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."topics"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "topics_blocks_rich_text" ADD CONSTRAINT "topics_blocks_rich_text_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."topics"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "topics_blocks_summary_points" ADD CONSTRAINT "topics_blocks_summary_points_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."topics_blocks_summary"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "topics_blocks_summary" ADD CONSTRAINT "topics_blocks_summary_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."topics"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "topics_blocks_callout" ADD CONSTRAINT "topics_blocks_callout_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."topics"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "topics_blocks_key_terms_rows" ADD CONSTRAINT "topics_blocks_key_terms_rows_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."topics_blocks_key_terms"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "topics_blocks_key_terms" ADD CONSTRAINT "topics_blocks_key_terms_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."topics"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "topics_blocks_cta" ADD CONSTRAINT "topics_blocks_cta_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."topics"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "topics" ADD CONSTRAINT "topics_unit_id_units_id_fk" FOREIGN KEY ("unit_id") REFERENCES "public"."units"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "topics_rels" ADD CONSTRAINT "topics_rels_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."topics"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "topics_rels" ADD CONSTRAINT "topics_rels_thinkers_fk" FOREIGN KEY ("thinkers_id") REFERENCES "public"."thinkers"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "topics_rels" ADD CONSTRAINT "topics_rels_topics_fk" FOREIGN KEY ("topics_id") REFERENCES "public"."topics"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_topics_v_blocks_hero_actions" ADD CONSTRAINT "_topics_v_blocks_hero_actions_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_topics_v_blocks_hero"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_topics_v_blocks_hero" ADD CONSTRAINT "_topics_v_blocks_hero_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_topics_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_topics_v_blocks_rich_text" ADD CONSTRAINT "_topics_v_blocks_rich_text_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_topics_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_topics_v_blocks_summary_points" ADD CONSTRAINT "_topics_v_blocks_summary_points_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_topics_v_blocks_summary"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_topics_v_blocks_summary" ADD CONSTRAINT "_topics_v_blocks_summary_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_topics_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_topics_v_blocks_callout" ADD CONSTRAINT "_topics_v_blocks_callout_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_topics_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_topics_v_blocks_key_terms_rows" ADD CONSTRAINT "_topics_v_blocks_key_terms_rows_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_topics_v_blocks_key_terms"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_topics_v_blocks_key_terms" ADD CONSTRAINT "_topics_v_blocks_key_terms_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_topics_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_topics_v_blocks_cta" ADD CONSTRAINT "_topics_v_blocks_cta_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_topics_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_topics_v" ADD CONSTRAINT "_topics_v_parent_id_topics_id_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."topics"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_topics_v" ADD CONSTRAINT "_topics_v_version_unit_id_units_id_fk" FOREIGN KEY ("version_unit_id") REFERENCES "public"."units"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_topics_v_rels" ADD CONSTRAINT "_topics_v_rels_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."_topics_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_topics_v_rels" ADD CONSTRAINT "_topics_v_rels_thinkers_fk" FOREIGN KEY ("thinkers_id") REFERENCES "public"."thinkers"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_topics_v_rels" ADD CONSTRAINT "_topics_v_rels_topics_fk" FOREIGN KEY ("topics_id") REFERENCES "public"."topics"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "units" ADD CONSTRAINT "units_paper_id_papers_id_fk" FOREIGN KEY ("paper_id") REFERENCES "public"."papers"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "thinkers_key_ideas" ADD CONSTRAINT "thinkers_key_ideas_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."thinkers"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "thinkers_blocks_hero_actions" ADD CONSTRAINT "thinkers_blocks_hero_actions_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."thinkers_blocks_hero"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "thinkers_blocks_hero" ADD CONSTRAINT "thinkers_blocks_hero_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."thinkers"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "thinkers_blocks_rich_text" ADD CONSTRAINT "thinkers_blocks_rich_text_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."thinkers"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "thinkers_blocks_summary_points" ADD CONSTRAINT "thinkers_blocks_summary_points_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."thinkers_blocks_summary"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "thinkers_blocks_summary" ADD CONSTRAINT "thinkers_blocks_summary_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."thinkers"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "thinkers_blocks_callout" ADD CONSTRAINT "thinkers_blocks_callout_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."thinkers"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "thinkers_blocks_key_terms_rows" ADD CONSTRAINT "thinkers_blocks_key_terms_rows_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."thinkers_blocks_key_terms"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "thinkers_blocks_key_terms" ADD CONSTRAINT "thinkers_blocks_key_terms_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."thinkers"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "thinkers_blocks_cta" ADD CONSTRAINT "thinkers_blocks_cta_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."thinkers"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "thinkers" ADD CONSTRAINT "thinkers_portrait_id_media_id_fk" FOREIGN KEY ("portrait_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_thinkers_v_version_key_ideas" ADD CONSTRAINT "_thinkers_v_version_key_ideas_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_thinkers_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_thinkers_v_blocks_hero_actions" ADD CONSTRAINT "_thinkers_v_blocks_hero_actions_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_thinkers_v_blocks_hero"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_thinkers_v_blocks_hero" ADD CONSTRAINT "_thinkers_v_blocks_hero_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_thinkers_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_thinkers_v_blocks_rich_text" ADD CONSTRAINT "_thinkers_v_blocks_rich_text_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_thinkers_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_thinkers_v_blocks_summary_points" ADD CONSTRAINT "_thinkers_v_blocks_summary_points_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_thinkers_v_blocks_summary"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_thinkers_v_blocks_summary" ADD CONSTRAINT "_thinkers_v_blocks_summary_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_thinkers_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_thinkers_v_blocks_callout" ADD CONSTRAINT "_thinkers_v_blocks_callout_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_thinkers_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_thinkers_v_blocks_key_terms_rows" ADD CONSTRAINT "_thinkers_v_blocks_key_terms_rows_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_thinkers_v_blocks_key_terms"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_thinkers_v_blocks_key_terms" ADD CONSTRAINT "_thinkers_v_blocks_key_terms_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_thinkers_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_thinkers_v_blocks_cta" ADD CONSTRAINT "_thinkers_v_blocks_cta_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_thinkers_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_thinkers_v" ADD CONSTRAINT "_thinkers_v_parent_id_thinkers_id_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."thinkers"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_thinkers_v" ADD CONSTRAINT "_thinkers_v_version_portrait_id_media_id_fk" FOREIGN KEY ("version_portrait_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "users_sessions" ADD CONSTRAINT "users_sessions_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."users"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pipeline_runs_errors" ADD CONSTRAINT "pipeline_runs_errors_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pipeline_runs"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "digests_groups" ADD CONSTRAINT "digests_groups_topic_id_topics_id_fk" FOREIGN KEY ("topic_id") REFERENCES "public"."topics"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "digests_groups" ADD CONSTRAINT "digests_groups_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."digests"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "digests" ADD CONSTRAINT "digests_pdf_id_media_id_fk" FOREIGN KEY ("pdf_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "digests_rels" ADD CONSTRAINT "digests_rels_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."digests"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "digests_rels" ADD CONSTRAINT "digests_rels_current_affairs_fk" FOREIGN KEY ("current_affairs_id") REFERENCES "public"."current_affairs"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_digests_v_version_groups" ADD CONSTRAINT "_digests_v_version_groups_topic_id_topics_id_fk" FOREIGN KEY ("topic_id") REFERENCES "public"."topics"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_digests_v_version_groups" ADD CONSTRAINT "_digests_v_version_groups_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_digests_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_digests_v" ADD CONSTRAINT "_digests_v_parent_id_digests_id_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."digests"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_digests_v" ADD CONSTRAINT "_digests_v_version_pdf_id_media_id_fk" FOREIGN KEY ("version_pdf_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_digests_v_rels" ADD CONSTRAINT "_digests_v_rels_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."_digests_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_digests_v_rels" ADD CONSTRAINT "_digests_v_rels_current_affairs_fk" FOREIGN KEY ("current_affairs_id") REFERENCES "public"."current_affairs"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "quizzes_items_options" ADD CONSTRAINT "quizzes_items_options_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."quizzes_items"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "quizzes_items" ADD CONSTRAINT "quizzes_items_ca_id_id_current_affairs_id_fk" FOREIGN KEY ("ca_id_id") REFERENCES "public"."current_affairs"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "quizzes_items" ADD CONSTRAINT "quizzes_items_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."quizzes"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_quizzes_v_version_items_options" ADD CONSTRAINT "_quizzes_v_version_items_options_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_quizzes_v_version_items"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_quizzes_v_version_items" ADD CONSTRAINT "_quizzes_v_version_items_ca_id_id_current_affairs_id_fk" FOREIGN KEY ("ca_id_id") REFERENCES "public"."current_affairs"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_quizzes_v_version_items" ADD CONSTRAINT "_quizzes_v_version_items_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_quizzes_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_quizzes_v" ADD CONSTRAINT "_quizzes_v_parent_id_quizzes_id_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."quizzes"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."payload_locked_documents"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_pages_fk" FOREIGN KEY ("pages_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_current_affairs_fk" FOREIGN KEY ("current_affairs_id") REFERENCES "public"."current_affairs"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_topics_fk" FOREIGN KEY ("topics_id") REFERENCES "public"."topics"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_units_fk" FOREIGN KEY ("units_id") REFERENCES "public"."units"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_papers_fk" FOREIGN KEY ("papers_id") REFERENCES "public"."papers"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_thinkers_fk" FOREIGN KEY ("thinkers_id") REFERENCES "public"."thinkers"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_media_fk" FOREIGN KEY ("media_id") REFERENCES "public"."media"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_users_fk" FOREIGN KEY ("users_id") REFERENCES "public"."users"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_sources_fk" FOREIGN KEY ("sources_id") REFERENCES "public"."sources"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_pipeline_runs_fk" FOREIGN KEY ("pipeline_runs_id") REFERENCES "public"."pipeline_runs"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_digests_fk" FOREIGN KEY ("digests_id") REFERENCES "public"."digests"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_quizzes_fk" FOREIGN KEY ("quizzes_id") REFERENCES "public"."quizzes"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "payload_preferences_rels" ADD CONSTRAINT "payload_preferences_rels_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."payload_preferences"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "payload_preferences_rels" ADD CONSTRAINT "payload_preferences_rels_users_fk" FOREIGN KEY ("users_id") REFERENCES "public"."users"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "site_settings" ADD CONSTRAINT "site_settings_featured_thinker_id_thinkers_id_fk" FOREIGN KEY ("featured_thinker_id") REFERENCES "public"."thinkers"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "navigation_header" ADD CONSTRAINT "navigation_header_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."navigation"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "navigation_footer" ADD CONSTRAINT "navigation_footer_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."navigation"("id") ON DELETE cascade ON UPDATE no action;
  CREATE INDEX "pages_blocks_hero_actions_order_idx" ON "pages_blocks_hero_actions" USING btree ("_order");
  CREATE INDEX "pages_blocks_hero_actions_parent_id_idx" ON "pages_blocks_hero_actions" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_hero_order_idx" ON "pages_blocks_hero" USING btree ("_order");
  CREATE INDEX "pages_blocks_hero_parent_id_idx" ON "pages_blocks_hero" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_hero_path_idx" ON "pages_blocks_hero" USING btree ("_path");
  CREATE INDEX "pages_blocks_rich_text_order_idx" ON "pages_blocks_rich_text" USING btree ("_order");
  CREATE INDEX "pages_blocks_rich_text_parent_id_idx" ON "pages_blocks_rich_text" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_rich_text_path_idx" ON "pages_blocks_rich_text" USING btree ("_path");
  CREATE INDEX "pages_blocks_summary_points_order_idx" ON "pages_blocks_summary_points" USING btree ("_order");
  CREATE INDEX "pages_blocks_summary_points_parent_id_idx" ON "pages_blocks_summary_points" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_summary_order_idx" ON "pages_blocks_summary" USING btree ("_order");
  CREATE INDEX "pages_blocks_summary_parent_id_idx" ON "pages_blocks_summary" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_summary_path_idx" ON "pages_blocks_summary" USING btree ("_path");
  CREATE INDEX "pages_blocks_callout_order_idx" ON "pages_blocks_callout" USING btree ("_order");
  CREATE INDEX "pages_blocks_callout_parent_id_idx" ON "pages_blocks_callout" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_callout_path_idx" ON "pages_blocks_callout" USING btree ("_path");
  CREATE INDEX "pages_blocks_key_terms_rows_order_idx" ON "pages_blocks_key_terms_rows" USING btree ("_order");
  CREATE INDEX "pages_blocks_key_terms_rows_parent_id_idx" ON "pages_blocks_key_terms_rows" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_key_terms_order_idx" ON "pages_blocks_key_terms" USING btree ("_order");
  CREATE INDEX "pages_blocks_key_terms_parent_id_idx" ON "pages_blocks_key_terms" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_key_terms_path_idx" ON "pages_blocks_key_terms" USING btree ("_path");
  CREATE INDEX "pages_blocks_cta_order_idx" ON "pages_blocks_cta" USING btree ("_order");
  CREATE INDEX "pages_blocks_cta_parent_id_idx" ON "pages_blocks_cta" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_cta_path_idx" ON "pages_blocks_cta" USING btree ("_path");
  CREATE UNIQUE INDEX "pages_slug_idx" ON "pages" USING btree ("slug");
  CREATE INDEX "pages_parent_idx" ON "pages" USING btree ("parent_id");
  CREATE UNIQUE INDEX "pages_path_idx" ON "pages" USING btree ("path");
  CREATE INDEX "pages_updated_at_idx" ON "pages" USING btree ("updated_at");
  CREATE INDEX "pages_created_at_idx" ON "pages" USING btree ("created_at");
  CREATE INDEX "pages__status_idx" ON "pages" USING btree ("_status");
  CREATE INDEX "_pages_v_blocks_hero_actions_order_idx" ON "_pages_v_blocks_hero_actions" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_hero_actions_parent_id_idx" ON "_pages_v_blocks_hero_actions" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_hero_order_idx" ON "_pages_v_blocks_hero" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_hero_parent_id_idx" ON "_pages_v_blocks_hero" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_hero_path_idx" ON "_pages_v_blocks_hero" USING btree ("_path");
  CREATE INDEX "_pages_v_blocks_rich_text_order_idx" ON "_pages_v_blocks_rich_text" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_rich_text_parent_id_idx" ON "_pages_v_blocks_rich_text" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_rich_text_path_idx" ON "_pages_v_blocks_rich_text" USING btree ("_path");
  CREATE INDEX "_pages_v_blocks_summary_points_order_idx" ON "_pages_v_blocks_summary_points" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_summary_points_parent_id_idx" ON "_pages_v_blocks_summary_points" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_summary_order_idx" ON "_pages_v_blocks_summary" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_summary_parent_id_idx" ON "_pages_v_blocks_summary" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_summary_path_idx" ON "_pages_v_blocks_summary" USING btree ("_path");
  CREATE INDEX "_pages_v_blocks_callout_order_idx" ON "_pages_v_blocks_callout" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_callout_parent_id_idx" ON "_pages_v_blocks_callout" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_callout_path_idx" ON "_pages_v_blocks_callout" USING btree ("_path");
  CREATE INDEX "_pages_v_blocks_key_terms_rows_order_idx" ON "_pages_v_blocks_key_terms_rows" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_key_terms_rows_parent_id_idx" ON "_pages_v_blocks_key_terms_rows" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_key_terms_order_idx" ON "_pages_v_blocks_key_terms" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_key_terms_parent_id_idx" ON "_pages_v_blocks_key_terms" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_key_terms_path_idx" ON "_pages_v_blocks_key_terms" USING btree ("_path");
  CREATE INDEX "_pages_v_blocks_cta_order_idx" ON "_pages_v_blocks_cta" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_cta_parent_id_idx" ON "_pages_v_blocks_cta" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_cta_path_idx" ON "_pages_v_blocks_cta" USING btree ("_path");
  CREATE INDEX "_pages_v_parent_idx" ON "_pages_v" USING btree ("parent_id");
  CREATE INDEX "_pages_v_version_version_slug_idx" ON "_pages_v" USING btree ("version_slug");
  CREATE INDEX "_pages_v_version_version_parent_idx" ON "_pages_v" USING btree ("version_parent_id");
  CREATE INDEX "_pages_v_version_version_path_idx" ON "_pages_v" USING btree ("version_path");
  CREATE INDEX "_pages_v_version_version_updated_at_idx" ON "_pages_v" USING btree ("version_updated_at");
  CREATE INDEX "_pages_v_version_version_created_at_idx" ON "_pages_v" USING btree ("version_created_at");
  CREATE INDEX "_pages_v_version_version__status_idx" ON "_pages_v" USING btree ("version__status");
  CREATE INDEX "_pages_v_created_at_idx" ON "_pages_v" USING btree ("created_at");
  CREATE INDEX "_pages_v_updated_at_idx" ON "_pages_v" USING btree ("updated_at");
  CREATE INDEX "_pages_v_latest_idx" ON "_pages_v" USING btree ("latest");
  CREATE INDEX "_pages_v_autosave_idx" ON "_pages_v" USING btree ("autosave");
  CREATE INDEX "current_affairs_sources_order_idx" ON "current_affairs_sources" USING btree ("_order");
  CREATE INDEX "current_affairs_sources_parent_id_idx" ON "current_affairs_sources" USING btree ("_parent_id");
  CREATE INDEX "current_affairs_blocks_hero_actions_order_idx" ON "current_affairs_blocks_hero_actions" USING btree ("_order");
  CREATE INDEX "current_affairs_blocks_hero_actions_parent_id_idx" ON "current_affairs_blocks_hero_actions" USING btree ("_parent_id");
  CREATE INDEX "current_affairs_blocks_hero_order_idx" ON "current_affairs_blocks_hero" USING btree ("_order");
  CREATE INDEX "current_affairs_blocks_hero_parent_id_idx" ON "current_affairs_blocks_hero" USING btree ("_parent_id");
  CREATE INDEX "current_affairs_blocks_hero_path_idx" ON "current_affairs_blocks_hero" USING btree ("_path");
  CREATE INDEX "current_affairs_blocks_rich_text_order_idx" ON "current_affairs_blocks_rich_text" USING btree ("_order");
  CREATE INDEX "current_affairs_blocks_rich_text_parent_id_idx" ON "current_affairs_blocks_rich_text" USING btree ("_parent_id");
  CREATE INDEX "current_affairs_blocks_rich_text_path_idx" ON "current_affairs_blocks_rich_text" USING btree ("_path");
  CREATE INDEX "current_affairs_blocks_summary_points_order_idx" ON "current_affairs_blocks_summary_points" USING btree ("_order");
  CREATE INDEX "current_affairs_blocks_summary_points_parent_id_idx" ON "current_affairs_blocks_summary_points" USING btree ("_parent_id");
  CREATE INDEX "current_affairs_blocks_summary_order_idx" ON "current_affairs_blocks_summary" USING btree ("_order");
  CREATE INDEX "current_affairs_blocks_summary_parent_id_idx" ON "current_affairs_blocks_summary" USING btree ("_parent_id");
  CREATE INDEX "current_affairs_blocks_summary_path_idx" ON "current_affairs_blocks_summary" USING btree ("_path");
  CREATE INDEX "current_affairs_blocks_callout_order_idx" ON "current_affairs_blocks_callout" USING btree ("_order");
  CREATE INDEX "current_affairs_blocks_callout_parent_id_idx" ON "current_affairs_blocks_callout" USING btree ("_parent_id");
  CREATE INDEX "current_affairs_blocks_callout_path_idx" ON "current_affairs_blocks_callout" USING btree ("_path");
  CREATE INDEX "current_affairs_blocks_key_terms_rows_order_idx" ON "current_affairs_blocks_key_terms_rows" USING btree ("_order");
  CREATE INDEX "current_affairs_blocks_key_terms_rows_parent_id_idx" ON "current_affairs_blocks_key_terms_rows" USING btree ("_parent_id");
  CREATE INDEX "current_affairs_blocks_key_terms_order_idx" ON "current_affairs_blocks_key_terms" USING btree ("_order");
  CREATE INDEX "current_affairs_blocks_key_terms_parent_id_idx" ON "current_affairs_blocks_key_terms" USING btree ("_parent_id");
  CREATE INDEX "current_affairs_blocks_key_terms_path_idx" ON "current_affairs_blocks_key_terms" USING btree ("_path");
  CREATE INDEX "current_affairs_blocks_cta_order_idx" ON "current_affairs_blocks_cta" USING btree ("_order");
  CREATE INDEX "current_affairs_blocks_cta_parent_id_idx" ON "current_affairs_blocks_cta" USING btree ("_parent_id");
  CREATE INDEX "current_affairs_blocks_cta_path_idx" ON "current_affairs_blocks_cta" USING btree ("_path");
  CREATE UNIQUE INDEX "current_affairs_slug_idx" ON "current_affairs" USING btree ("slug");
  CREATE INDEX "current_affairs_date_idx" ON "current_affairs" USING btree ("date");
  CREATE INDEX "current_affairs_review_status_idx" ON "current_affairs" USING btree ("review_status");
  CREATE UNIQUE INDEX "current_affairs_source_hash_idx" ON "current_affairs" USING btree ("source_hash");
  CREATE INDEX "current_affairs_updated_at_idx" ON "current_affairs" USING btree ("updated_at");
  CREATE INDEX "current_affairs_created_at_idx" ON "current_affairs" USING btree ("created_at");
  CREATE INDEX "current_affairs__status_idx" ON "current_affairs" USING btree ("_status");
  CREATE INDEX "current_affairs_rels_order_idx" ON "current_affairs_rels" USING btree ("order");
  CREATE INDEX "current_affairs_rels_parent_idx" ON "current_affairs_rels" USING btree ("parent_id");
  CREATE INDEX "current_affairs_rels_path_idx" ON "current_affairs_rels" USING btree ("path");
  CREATE INDEX "current_affairs_rels_topics_id_idx" ON "current_affairs_rels" USING btree ("topics_id");
  CREATE INDEX "current_affairs_rels_thinkers_id_idx" ON "current_affairs_rels" USING btree ("thinkers_id");
  CREATE INDEX "_current_affairs_v_version_sources_order_idx" ON "_current_affairs_v_version_sources" USING btree ("_order");
  CREATE INDEX "_current_affairs_v_version_sources_parent_id_idx" ON "_current_affairs_v_version_sources" USING btree ("_parent_id");
  CREATE INDEX "_current_affairs_v_blocks_hero_actions_order_idx" ON "_current_affairs_v_blocks_hero_actions" USING btree ("_order");
  CREATE INDEX "_current_affairs_v_blocks_hero_actions_parent_id_idx" ON "_current_affairs_v_blocks_hero_actions" USING btree ("_parent_id");
  CREATE INDEX "_current_affairs_v_blocks_hero_order_idx" ON "_current_affairs_v_blocks_hero" USING btree ("_order");
  CREATE INDEX "_current_affairs_v_blocks_hero_parent_id_idx" ON "_current_affairs_v_blocks_hero" USING btree ("_parent_id");
  CREATE INDEX "_current_affairs_v_blocks_hero_path_idx" ON "_current_affairs_v_blocks_hero" USING btree ("_path");
  CREATE INDEX "_current_affairs_v_blocks_rich_text_order_idx" ON "_current_affairs_v_blocks_rich_text" USING btree ("_order");
  CREATE INDEX "_current_affairs_v_blocks_rich_text_parent_id_idx" ON "_current_affairs_v_blocks_rich_text" USING btree ("_parent_id");
  CREATE INDEX "_current_affairs_v_blocks_rich_text_path_idx" ON "_current_affairs_v_blocks_rich_text" USING btree ("_path");
  CREATE INDEX "_current_affairs_v_blocks_summary_points_order_idx" ON "_current_affairs_v_blocks_summary_points" USING btree ("_order");
  CREATE INDEX "_current_affairs_v_blocks_summary_points_parent_id_idx" ON "_current_affairs_v_blocks_summary_points" USING btree ("_parent_id");
  CREATE INDEX "_current_affairs_v_blocks_summary_order_idx" ON "_current_affairs_v_blocks_summary" USING btree ("_order");
  CREATE INDEX "_current_affairs_v_blocks_summary_parent_id_idx" ON "_current_affairs_v_blocks_summary" USING btree ("_parent_id");
  CREATE INDEX "_current_affairs_v_blocks_summary_path_idx" ON "_current_affairs_v_blocks_summary" USING btree ("_path");
  CREATE INDEX "_current_affairs_v_blocks_callout_order_idx" ON "_current_affairs_v_blocks_callout" USING btree ("_order");
  CREATE INDEX "_current_affairs_v_blocks_callout_parent_id_idx" ON "_current_affairs_v_blocks_callout" USING btree ("_parent_id");
  CREATE INDEX "_current_affairs_v_blocks_callout_path_idx" ON "_current_affairs_v_blocks_callout" USING btree ("_path");
  CREATE INDEX "_current_affairs_v_blocks_key_terms_rows_order_idx" ON "_current_affairs_v_blocks_key_terms_rows" USING btree ("_order");
  CREATE INDEX "_current_affairs_v_blocks_key_terms_rows_parent_id_idx" ON "_current_affairs_v_blocks_key_terms_rows" USING btree ("_parent_id");
  CREATE INDEX "_current_affairs_v_blocks_key_terms_order_idx" ON "_current_affairs_v_blocks_key_terms" USING btree ("_order");
  CREATE INDEX "_current_affairs_v_blocks_key_terms_parent_id_idx" ON "_current_affairs_v_blocks_key_terms" USING btree ("_parent_id");
  CREATE INDEX "_current_affairs_v_blocks_key_terms_path_idx" ON "_current_affairs_v_blocks_key_terms" USING btree ("_path");
  CREATE INDEX "_current_affairs_v_blocks_cta_order_idx" ON "_current_affairs_v_blocks_cta" USING btree ("_order");
  CREATE INDEX "_current_affairs_v_blocks_cta_parent_id_idx" ON "_current_affairs_v_blocks_cta" USING btree ("_parent_id");
  CREATE INDEX "_current_affairs_v_blocks_cta_path_idx" ON "_current_affairs_v_blocks_cta" USING btree ("_path");
  CREATE INDEX "_current_affairs_v_parent_idx" ON "_current_affairs_v" USING btree ("parent_id");
  CREATE INDEX "_current_affairs_v_version_version_slug_idx" ON "_current_affairs_v" USING btree ("version_slug");
  CREATE INDEX "_current_affairs_v_version_version_date_idx" ON "_current_affairs_v" USING btree ("version_date");
  CREATE INDEX "_current_affairs_v_version_version_review_status_idx" ON "_current_affairs_v" USING btree ("version_review_status");
  CREATE INDEX "_current_affairs_v_version_version_source_hash_idx" ON "_current_affairs_v" USING btree ("version_source_hash");
  CREATE INDEX "_current_affairs_v_version_version_updated_at_idx" ON "_current_affairs_v" USING btree ("version_updated_at");
  CREATE INDEX "_current_affairs_v_version_version_created_at_idx" ON "_current_affairs_v" USING btree ("version_created_at");
  CREATE INDEX "_current_affairs_v_version_version__status_idx" ON "_current_affairs_v" USING btree ("version__status");
  CREATE INDEX "_current_affairs_v_created_at_idx" ON "_current_affairs_v" USING btree ("created_at");
  CREATE INDEX "_current_affairs_v_updated_at_idx" ON "_current_affairs_v" USING btree ("updated_at");
  CREATE INDEX "_current_affairs_v_latest_idx" ON "_current_affairs_v" USING btree ("latest");
  CREATE INDEX "_current_affairs_v_rels_order_idx" ON "_current_affairs_v_rels" USING btree ("order");
  CREATE INDEX "_current_affairs_v_rels_parent_idx" ON "_current_affairs_v_rels" USING btree ("parent_id");
  CREATE INDEX "_current_affairs_v_rels_path_idx" ON "_current_affairs_v_rels" USING btree ("path");
  CREATE INDEX "_current_affairs_v_rels_topics_id_idx" ON "_current_affairs_v_rels" USING btree ("topics_id");
  CREATE INDEX "_current_affairs_v_rels_thinkers_id_idx" ON "_current_affairs_v_rels" USING btree ("thinkers_id");
  CREATE INDEX "topics_blocks_hero_actions_order_idx" ON "topics_blocks_hero_actions" USING btree ("_order");
  CREATE INDEX "topics_blocks_hero_actions_parent_id_idx" ON "topics_blocks_hero_actions" USING btree ("_parent_id");
  CREATE INDEX "topics_blocks_hero_order_idx" ON "topics_blocks_hero" USING btree ("_order");
  CREATE INDEX "topics_blocks_hero_parent_id_idx" ON "topics_blocks_hero" USING btree ("_parent_id");
  CREATE INDEX "topics_blocks_hero_path_idx" ON "topics_blocks_hero" USING btree ("_path");
  CREATE INDEX "topics_blocks_rich_text_order_idx" ON "topics_blocks_rich_text" USING btree ("_order");
  CREATE INDEX "topics_blocks_rich_text_parent_id_idx" ON "topics_blocks_rich_text" USING btree ("_parent_id");
  CREATE INDEX "topics_blocks_rich_text_path_idx" ON "topics_blocks_rich_text" USING btree ("_path");
  CREATE INDEX "topics_blocks_summary_points_order_idx" ON "topics_blocks_summary_points" USING btree ("_order");
  CREATE INDEX "topics_blocks_summary_points_parent_id_idx" ON "topics_blocks_summary_points" USING btree ("_parent_id");
  CREATE INDEX "topics_blocks_summary_order_idx" ON "topics_blocks_summary" USING btree ("_order");
  CREATE INDEX "topics_blocks_summary_parent_id_idx" ON "topics_blocks_summary" USING btree ("_parent_id");
  CREATE INDEX "topics_blocks_summary_path_idx" ON "topics_blocks_summary" USING btree ("_path");
  CREATE INDEX "topics_blocks_callout_order_idx" ON "topics_blocks_callout" USING btree ("_order");
  CREATE INDEX "topics_blocks_callout_parent_id_idx" ON "topics_blocks_callout" USING btree ("_parent_id");
  CREATE INDEX "topics_blocks_callout_path_idx" ON "topics_blocks_callout" USING btree ("_path");
  CREATE INDEX "topics_blocks_key_terms_rows_order_idx" ON "topics_blocks_key_terms_rows" USING btree ("_order");
  CREATE INDEX "topics_blocks_key_terms_rows_parent_id_idx" ON "topics_blocks_key_terms_rows" USING btree ("_parent_id");
  CREATE INDEX "topics_blocks_key_terms_order_idx" ON "topics_blocks_key_terms" USING btree ("_order");
  CREATE INDEX "topics_blocks_key_terms_parent_id_idx" ON "topics_blocks_key_terms" USING btree ("_parent_id");
  CREATE INDEX "topics_blocks_key_terms_path_idx" ON "topics_blocks_key_terms" USING btree ("_path");
  CREATE INDEX "topics_blocks_cta_order_idx" ON "topics_blocks_cta" USING btree ("_order");
  CREATE INDEX "topics_blocks_cta_parent_id_idx" ON "topics_blocks_cta" USING btree ("_parent_id");
  CREATE INDEX "topics_blocks_cta_path_idx" ON "topics_blocks_cta" USING btree ("_path");
  CREATE UNIQUE INDEX "topics_slug_idx" ON "topics" USING btree ("slug");
  CREATE INDEX "topics_unit_idx" ON "topics" USING btree ("unit_id");
  CREATE INDEX "topics_updated_at_idx" ON "topics" USING btree ("updated_at");
  CREATE INDEX "topics_created_at_idx" ON "topics" USING btree ("created_at");
  CREATE INDEX "topics__status_idx" ON "topics" USING btree ("_status");
  CREATE INDEX "topics_rels_order_idx" ON "topics_rels" USING btree ("order");
  CREATE INDEX "topics_rels_parent_idx" ON "topics_rels" USING btree ("parent_id");
  CREATE INDEX "topics_rels_path_idx" ON "topics_rels" USING btree ("path");
  CREATE INDEX "topics_rels_thinkers_id_idx" ON "topics_rels" USING btree ("thinkers_id");
  CREATE INDEX "topics_rels_topics_id_idx" ON "topics_rels" USING btree ("topics_id");
  CREATE INDEX "_topics_v_blocks_hero_actions_order_idx" ON "_topics_v_blocks_hero_actions" USING btree ("_order");
  CREATE INDEX "_topics_v_blocks_hero_actions_parent_id_idx" ON "_topics_v_blocks_hero_actions" USING btree ("_parent_id");
  CREATE INDEX "_topics_v_blocks_hero_order_idx" ON "_topics_v_blocks_hero" USING btree ("_order");
  CREATE INDEX "_topics_v_blocks_hero_parent_id_idx" ON "_topics_v_blocks_hero" USING btree ("_parent_id");
  CREATE INDEX "_topics_v_blocks_hero_path_idx" ON "_topics_v_blocks_hero" USING btree ("_path");
  CREATE INDEX "_topics_v_blocks_rich_text_order_idx" ON "_topics_v_blocks_rich_text" USING btree ("_order");
  CREATE INDEX "_topics_v_blocks_rich_text_parent_id_idx" ON "_topics_v_blocks_rich_text" USING btree ("_parent_id");
  CREATE INDEX "_topics_v_blocks_rich_text_path_idx" ON "_topics_v_blocks_rich_text" USING btree ("_path");
  CREATE INDEX "_topics_v_blocks_summary_points_order_idx" ON "_topics_v_blocks_summary_points" USING btree ("_order");
  CREATE INDEX "_topics_v_blocks_summary_points_parent_id_idx" ON "_topics_v_blocks_summary_points" USING btree ("_parent_id");
  CREATE INDEX "_topics_v_blocks_summary_order_idx" ON "_topics_v_blocks_summary" USING btree ("_order");
  CREATE INDEX "_topics_v_blocks_summary_parent_id_idx" ON "_topics_v_blocks_summary" USING btree ("_parent_id");
  CREATE INDEX "_topics_v_blocks_summary_path_idx" ON "_topics_v_blocks_summary" USING btree ("_path");
  CREATE INDEX "_topics_v_blocks_callout_order_idx" ON "_topics_v_blocks_callout" USING btree ("_order");
  CREATE INDEX "_topics_v_blocks_callout_parent_id_idx" ON "_topics_v_blocks_callout" USING btree ("_parent_id");
  CREATE INDEX "_topics_v_blocks_callout_path_idx" ON "_topics_v_blocks_callout" USING btree ("_path");
  CREATE INDEX "_topics_v_blocks_key_terms_rows_order_idx" ON "_topics_v_blocks_key_terms_rows" USING btree ("_order");
  CREATE INDEX "_topics_v_blocks_key_terms_rows_parent_id_idx" ON "_topics_v_blocks_key_terms_rows" USING btree ("_parent_id");
  CREATE INDEX "_topics_v_blocks_key_terms_order_idx" ON "_topics_v_blocks_key_terms" USING btree ("_order");
  CREATE INDEX "_topics_v_blocks_key_terms_parent_id_idx" ON "_topics_v_blocks_key_terms" USING btree ("_parent_id");
  CREATE INDEX "_topics_v_blocks_key_terms_path_idx" ON "_topics_v_blocks_key_terms" USING btree ("_path");
  CREATE INDEX "_topics_v_blocks_cta_order_idx" ON "_topics_v_blocks_cta" USING btree ("_order");
  CREATE INDEX "_topics_v_blocks_cta_parent_id_idx" ON "_topics_v_blocks_cta" USING btree ("_parent_id");
  CREATE INDEX "_topics_v_blocks_cta_path_idx" ON "_topics_v_blocks_cta" USING btree ("_path");
  CREATE INDEX "_topics_v_parent_idx" ON "_topics_v" USING btree ("parent_id");
  CREATE INDEX "_topics_v_version_version_slug_idx" ON "_topics_v" USING btree ("version_slug");
  CREATE INDEX "_topics_v_version_version_unit_idx" ON "_topics_v" USING btree ("version_unit_id");
  CREATE INDEX "_topics_v_version_version_updated_at_idx" ON "_topics_v" USING btree ("version_updated_at");
  CREATE INDEX "_topics_v_version_version_created_at_idx" ON "_topics_v" USING btree ("version_created_at");
  CREATE INDEX "_topics_v_version_version__status_idx" ON "_topics_v" USING btree ("version__status");
  CREATE INDEX "_topics_v_created_at_idx" ON "_topics_v" USING btree ("created_at");
  CREATE INDEX "_topics_v_updated_at_idx" ON "_topics_v" USING btree ("updated_at");
  CREATE INDEX "_topics_v_latest_idx" ON "_topics_v" USING btree ("latest");
  CREATE INDEX "_topics_v_rels_order_idx" ON "_topics_v_rels" USING btree ("order");
  CREATE INDEX "_topics_v_rels_parent_idx" ON "_topics_v_rels" USING btree ("parent_id");
  CREATE INDEX "_topics_v_rels_path_idx" ON "_topics_v_rels" USING btree ("path");
  CREATE INDEX "_topics_v_rels_thinkers_id_idx" ON "_topics_v_rels" USING btree ("thinkers_id");
  CREATE INDEX "_topics_v_rels_topics_id_idx" ON "_topics_v_rels" USING btree ("topics_id");
  CREATE INDEX "units_paper_idx" ON "units" USING btree ("paper_id");
  CREATE INDEX "units_slug_idx" ON "units" USING btree ("slug");
  CREATE INDEX "units_updated_at_idx" ON "units" USING btree ("updated_at");
  CREATE INDEX "units_created_at_idx" ON "units" USING btree ("created_at");
  CREATE UNIQUE INDEX "papers_code_idx" ON "papers" USING btree ("code");
  CREATE UNIQUE INDEX "papers_slug_idx" ON "papers" USING btree ("slug");
  CREATE INDEX "papers_updated_at_idx" ON "papers" USING btree ("updated_at");
  CREATE INDEX "papers_created_at_idx" ON "papers" USING btree ("created_at");
  CREATE INDEX "thinkers_key_ideas_order_idx" ON "thinkers_key_ideas" USING btree ("_order");
  CREATE INDEX "thinkers_key_ideas_parent_id_idx" ON "thinkers_key_ideas" USING btree ("_parent_id");
  CREATE INDEX "thinkers_blocks_hero_actions_order_idx" ON "thinkers_blocks_hero_actions" USING btree ("_order");
  CREATE INDEX "thinkers_blocks_hero_actions_parent_id_idx" ON "thinkers_blocks_hero_actions" USING btree ("_parent_id");
  CREATE INDEX "thinkers_blocks_hero_order_idx" ON "thinkers_blocks_hero" USING btree ("_order");
  CREATE INDEX "thinkers_blocks_hero_parent_id_idx" ON "thinkers_blocks_hero" USING btree ("_parent_id");
  CREATE INDEX "thinkers_blocks_hero_path_idx" ON "thinkers_blocks_hero" USING btree ("_path");
  CREATE INDEX "thinkers_blocks_rich_text_order_idx" ON "thinkers_blocks_rich_text" USING btree ("_order");
  CREATE INDEX "thinkers_blocks_rich_text_parent_id_idx" ON "thinkers_blocks_rich_text" USING btree ("_parent_id");
  CREATE INDEX "thinkers_blocks_rich_text_path_idx" ON "thinkers_blocks_rich_text" USING btree ("_path");
  CREATE INDEX "thinkers_blocks_summary_points_order_idx" ON "thinkers_blocks_summary_points" USING btree ("_order");
  CREATE INDEX "thinkers_blocks_summary_points_parent_id_idx" ON "thinkers_blocks_summary_points" USING btree ("_parent_id");
  CREATE INDEX "thinkers_blocks_summary_order_idx" ON "thinkers_blocks_summary" USING btree ("_order");
  CREATE INDEX "thinkers_blocks_summary_parent_id_idx" ON "thinkers_blocks_summary" USING btree ("_parent_id");
  CREATE INDEX "thinkers_blocks_summary_path_idx" ON "thinkers_blocks_summary" USING btree ("_path");
  CREATE INDEX "thinkers_blocks_callout_order_idx" ON "thinkers_blocks_callout" USING btree ("_order");
  CREATE INDEX "thinkers_blocks_callout_parent_id_idx" ON "thinkers_blocks_callout" USING btree ("_parent_id");
  CREATE INDEX "thinkers_blocks_callout_path_idx" ON "thinkers_blocks_callout" USING btree ("_path");
  CREATE INDEX "thinkers_blocks_key_terms_rows_order_idx" ON "thinkers_blocks_key_terms_rows" USING btree ("_order");
  CREATE INDEX "thinkers_blocks_key_terms_rows_parent_id_idx" ON "thinkers_blocks_key_terms_rows" USING btree ("_parent_id");
  CREATE INDEX "thinkers_blocks_key_terms_order_idx" ON "thinkers_blocks_key_terms" USING btree ("_order");
  CREATE INDEX "thinkers_blocks_key_terms_parent_id_idx" ON "thinkers_blocks_key_terms" USING btree ("_parent_id");
  CREATE INDEX "thinkers_blocks_key_terms_path_idx" ON "thinkers_blocks_key_terms" USING btree ("_path");
  CREATE INDEX "thinkers_blocks_cta_order_idx" ON "thinkers_blocks_cta" USING btree ("_order");
  CREATE INDEX "thinkers_blocks_cta_parent_id_idx" ON "thinkers_blocks_cta" USING btree ("_parent_id");
  CREATE INDEX "thinkers_blocks_cta_path_idx" ON "thinkers_blocks_cta" USING btree ("_path");
  CREATE UNIQUE INDEX "thinkers_slug_idx" ON "thinkers" USING btree ("slug");
  CREATE INDEX "thinkers_portrait_idx" ON "thinkers" USING btree ("portrait_id");
  CREATE INDEX "thinkers_updated_at_idx" ON "thinkers" USING btree ("updated_at");
  CREATE INDEX "thinkers_created_at_idx" ON "thinkers" USING btree ("created_at");
  CREATE INDEX "thinkers__status_idx" ON "thinkers" USING btree ("_status");
  CREATE INDEX "_thinkers_v_version_key_ideas_order_idx" ON "_thinkers_v_version_key_ideas" USING btree ("_order");
  CREATE INDEX "_thinkers_v_version_key_ideas_parent_id_idx" ON "_thinkers_v_version_key_ideas" USING btree ("_parent_id");
  CREATE INDEX "_thinkers_v_blocks_hero_actions_order_idx" ON "_thinkers_v_blocks_hero_actions" USING btree ("_order");
  CREATE INDEX "_thinkers_v_blocks_hero_actions_parent_id_idx" ON "_thinkers_v_blocks_hero_actions" USING btree ("_parent_id");
  CREATE INDEX "_thinkers_v_blocks_hero_order_idx" ON "_thinkers_v_blocks_hero" USING btree ("_order");
  CREATE INDEX "_thinkers_v_blocks_hero_parent_id_idx" ON "_thinkers_v_blocks_hero" USING btree ("_parent_id");
  CREATE INDEX "_thinkers_v_blocks_hero_path_idx" ON "_thinkers_v_blocks_hero" USING btree ("_path");
  CREATE INDEX "_thinkers_v_blocks_rich_text_order_idx" ON "_thinkers_v_blocks_rich_text" USING btree ("_order");
  CREATE INDEX "_thinkers_v_blocks_rich_text_parent_id_idx" ON "_thinkers_v_blocks_rich_text" USING btree ("_parent_id");
  CREATE INDEX "_thinkers_v_blocks_rich_text_path_idx" ON "_thinkers_v_blocks_rich_text" USING btree ("_path");
  CREATE INDEX "_thinkers_v_blocks_summary_points_order_idx" ON "_thinkers_v_blocks_summary_points" USING btree ("_order");
  CREATE INDEX "_thinkers_v_blocks_summary_points_parent_id_idx" ON "_thinkers_v_blocks_summary_points" USING btree ("_parent_id");
  CREATE INDEX "_thinkers_v_blocks_summary_order_idx" ON "_thinkers_v_blocks_summary" USING btree ("_order");
  CREATE INDEX "_thinkers_v_blocks_summary_parent_id_idx" ON "_thinkers_v_blocks_summary" USING btree ("_parent_id");
  CREATE INDEX "_thinkers_v_blocks_summary_path_idx" ON "_thinkers_v_blocks_summary" USING btree ("_path");
  CREATE INDEX "_thinkers_v_blocks_callout_order_idx" ON "_thinkers_v_blocks_callout" USING btree ("_order");
  CREATE INDEX "_thinkers_v_blocks_callout_parent_id_idx" ON "_thinkers_v_blocks_callout" USING btree ("_parent_id");
  CREATE INDEX "_thinkers_v_blocks_callout_path_idx" ON "_thinkers_v_blocks_callout" USING btree ("_path");
  CREATE INDEX "_thinkers_v_blocks_key_terms_rows_order_idx" ON "_thinkers_v_blocks_key_terms_rows" USING btree ("_order");
  CREATE INDEX "_thinkers_v_blocks_key_terms_rows_parent_id_idx" ON "_thinkers_v_blocks_key_terms_rows" USING btree ("_parent_id");
  CREATE INDEX "_thinkers_v_blocks_key_terms_order_idx" ON "_thinkers_v_blocks_key_terms" USING btree ("_order");
  CREATE INDEX "_thinkers_v_blocks_key_terms_parent_id_idx" ON "_thinkers_v_blocks_key_terms" USING btree ("_parent_id");
  CREATE INDEX "_thinkers_v_blocks_key_terms_path_idx" ON "_thinkers_v_blocks_key_terms" USING btree ("_path");
  CREATE INDEX "_thinkers_v_blocks_cta_order_idx" ON "_thinkers_v_blocks_cta" USING btree ("_order");
  CREATE INDEX "_thinkers_v_blocks_cta_parent_id_idx" ON "_thinkers_v_blocks_cta" USING btree ("_parent_id");
  CREATE INDEX "_thinkers_v_blocks_cta_path_idx" ON "_thinkers_v_blocks_cta" USING btree ("_path");
  CREATE INDEX "_thinkers_v_parent_idx" ON "_thinkers_v" USING btree ("parent_id");
  CREATE INDEX "_thinkers_v_version_version_slug_idx" ON "_thinkers_v" USING btree ("version_slug");
  CREATE INDEX "_thinkers_v_version_version_portrait_idx" ON "_thinkers_v" USING btree ("version_portrait_id");
  CREATE INDEX "_thinkers_v_version_version_updated_at_idx" ON "_thinkers_v" USING btree ("version_updated_at");
  CREATE INDEX "_thinkers_v_version_version_created_at_idx" ON "_thinkers_v" USING btree ("version_created_at");
  CREATE INDEX "_thinkers_v_version_version__status_idx" ON "_thinkers_v" USING btree ("version__status");
  CREATE INDEX "_thinkers_v_created_at_idx" ON "_thinkers_v" USING btree ("created_at");
  CREATE INDEX "_thinkers_v_updated_at_idx" ON "_thinkers_v" USING btree ("updated_at");
  CREATE INDEX "_thinkers_v_latest_idx" ON "_thinkers_v" USING btree ("latest");
  CREATE INDEX "media_updated_at_idx" ON "media" USING btree ("updated_at");
  CREATE INDEX "media_created_at_idx" ON "media" USING btree ("created_at");
  CREATE UNIQUE INDEX "media_filename_idx" ON "media" USING btree ("filename");
  CREATE INDEX "media_sizes_card_sizes_card_filename_idx" ON "media" USING btree ("sizes_card_filename");
  CREATE INDEX "media_sizes_feature_sizes_feature_filename_idx" ON "media" USING btree ("sizes_feature_filename");
  CREATE INDEX "users_sessions_order_idx" ON "users_sessions" USING btree ("_order");
  CREATE INDEX "users_sessions_parent_id_idx" ON "users_sessions" USING btree ("_parent_id");
  CREATE INDEX "users_updated_at_idx" ON "users" USING btree ("updated_at");
  CREATE INDEX "users_created_at_idx" ON "users" USING btree ("created_at");
  CREATE UNIQUE INDEX "users_email_idx" ON "users" USING btree ("email");
  CREATE INDEX "sources_active_idx" ON "sources" USING btree ("active");
  CREATE INDEX "sources_updated_at_idx" ON "sources" USING btree ("updated_at");
  CREATE INDEX "sources_created_at_idx" ON "sources" USING btree ("created_at");
  CREATE INDEX "pipeline_runs_errors_order_idx" ON "pipeline_runs_errors" USING btree ("_order");
  CREATE INDEX "pipeline_runs_errors_parent_id_idx" ON "pipeline_runs_errors" USING btree ("_parent_id");
  CREATE INDEX "pipeline_runs_started_at_idx" ON "pipeline_runs" USING btree ("started_at");
  CREATE INDEX "pipeline_runs_updated_at_idx" ON "pipeline_runs" USING btree ("updated_at");
  CREATE INDEX "pipeline_runs_created_at_idx" ON "pipeline_runs" USING btree ("created_at");
  CREATE INDEX "digests_groups_order_idx" ON "digests_groups" USING btree ("_order");
  CREATE INDEX "digests_groups_parent_id_idx" ON "digests_groups" USING btree ("_parent_id");
  CREATE INDEX "digests_groups_topic_idx" ON "digests_groups" USING btree ("topic_id");
  CREATE UNIQUE INDEX "digests_key_idx" ON "digests" USING btree ("key");
  CREATE INDEX "digests_pdf_idx" ON "digests" USING btree ("pdf_id");
  CREATE INDEX "digests_updated_at_idx" ON "digests" USING btree ("updated_at");
  CREATE INDEX "digests_created_at_idx" ON "digests" USING btree ("created_at");
  CREATE INDEX "digests__status_idx" ON "digests" USING btree ("_status");
  CREATE INDEX "digests_rels_order_idx" ON "digests_rels" USING btree ("order");
  CREATE INDEX "digests_rels_parent_idx" ON "digests_rels" USING btree ("parent_id");
  CREATE INDEX "digests_rels_path_idx" ON "digests_rels" USING btree ("path");
  CREATE INDEX "digests_rels_current_affairs_id_idx" ON "digests_rels" USING btree ("current_affairs_id");
  CREATE INDEX "_digests_v_version_groups_order_idx" ON "_digests_v_version_groups" USING btree ("_order");
  CREATE INDEX "_digests_v_version_groups_parent_id_idx" ON "_digests_v_version_groups" USING btree ("_parent_id");
  CREATE INDEX "_digests_v_version_groups_topic_idx" ON "_digests_v_version_groups" USING btree ("topic_id");
  CREATE INDEX "_digests_v_parent_idx" ON "_digests_v" USING btree ("parent_id");
  CREATE INDEX "_digests_v_version_version_key_idx" ON "_digests_v" USING btree ("version_key");
  CREATE INDEX "_digests_v_version_version_pdf_idx" ON "_digests_v" USING btree ("version_pdf_id");
  CREATE INDEX "_digests_v_version_version_updated_at_idx" ON "_digests_v" USING btree ("version_updated_at");
  CREATE INDEX "_digests_v_version_version_created_at_idx" ON "_digests_v" USING btree ("version_created_at");
  CREATE INDEX "_digests_v_version_version__status_idx" ON "_digests_v" USING btree ("version__status");
  CREATE INDEX "_digests_v_created_at_idx" ON "_digests_v" USING btree ("created_at");
  CREATE INDEX "_digests_v_updated_at_idx" ON "_digests_v" USING btree ("updated_at");
  CREATE INDEX "_digests_v_latest_idx" ON "_digests_v" USING btree ("latest");
  CREATE INDEX "_digests_v_rels_order_idx" ON "_digests_v_rels" USING btree ("order");
  CREATE INDEX "_digests_v_rels_parent_idx" ON "_digests_v_rels" USING btree ("parent_id");
  CREATE INDEX "_digests_v_rels_path_idx" ON "_digests_v_rels" USING btree ("path");
  CREATE INDEX "_digests_v_rels_current_affairs_id_idx" ON "_digests_v_rels" USING btree ("current_affairs_id");
  CREATE INDEX "quizzes_items_options_order_idx" ON "quizzes_items_options" USING btree ("_order");
  CREATE INDEX "quizzes_items_options_parent_id_idx" ON "quizzes_items_options" USING btree ("_parent_id");
  CREATE INDEX "quizzes_items_order_idx" ON "quizzes_items" USING btree ("_order");
  CREATE INDEX "quizzes_items_parent_id_idx" ON "quizzes_items" USING btree ("_parent_id");
  CREATE INDEX "quizzes_items_ca_id_idx" ON "quizzes_items" USING btree ("ca_id_id");
  CREATE UNIQUE INDEX "quizzes_date_idx" ON "quizzes" USING btree ("date");
  CREATE INDEX "quizzes_updated_at_idx" ON "quizzes" USING btree ("updated_at");
  CREATE INDEX "quizzes_created_at_idx" ON "quizzes" USING btree ("created_at");
  CREATE INDEX "quizzes__status_idx" ON "quizzes" USING btree ("_status");
  CREATE INDEX "_quizzes_v_version_items_options_order_idx" ON "_quizzes_v_version_items_options" USING btree ("_order");
  CREATE INDEX "_quizzes_v_version_items_options_parent_id_idx" ON "_quizzes_v_version_items_options" USING btree ("_parent_id");
  CREATE INDEX "_quizzes_v_version_items_order_idx" ON "_quizzes_v_version_items" USING btree ("_order");
  CREATE INDEX "_quizzes_v_version_items_parent_id_idx" ON "_quizzes_v_version_items" USING btree ("_parent_id");
  CREATE INDEX "_quizzes_v_version_items_ca_id_idx" ON "_quizzes_v_version_items" USING btree ("ca_id_id");
  CREATE INDEX "_quizzes_v_parent_idx" ON "_quizzes_v" USING btree ("parent_id");
  CREATE INDEX "_quizzes_v_version_version_date_idx" ON "_quizzes_v" USING btree ("version_date");
  CREATE INDEX "_quizzes_v_version_version_updated_at_idx" ON "_quizzes_v" USING btree ("version_updated_at");
  CREATE INDEX "_quizzes_v_version_version_created_at_idx" ON "_quizzes_v" USING btree ("version_created_at");
  CREATE INDEX "_quizzes_v_version_version__status_idx" ON "_quizzes_v" USING btree ("version__status");
  CREATE INDEX "_quizzes_v_created_at_idx" ON "_quizzes_v" USING btree ("created_at");
  CREATE INDEX "_quizzes_v_updated_at_idx" ON "_quizzes_v" USING btree ("updated_at");
  CREATE INDEX "_quizzes_v_latest_idx" ON "_quizzes_v" USING btree ("latest");
  CREATE UNIQUE INDEX "payload_kv_key_idx" ON "payload_kv" USING btree ("key");
  CREATE INDEX "payload_locked_documents_global_slug_idx" ON "payload_locked_documents" USING btree ("global_slug");
  CREATE INDEX "payload_locked_documents_updated_at_idx" ON "payload_locked_documents" USING btree ("updated_at");
  CREATE INDEX "payload_locked_documents_created_at_idx" ON "payload_locked_documents" USING btree ("created_at");
  CREATE INDEX "payload_locked_documents_rels_order_idx" ON "payload_locked_documents_rels" USING btree ("order");
  CREATE INDEX "payload_locked_documents_rels_parent_idx" ON "payload_locked_documents_rels" USING btree ("parent_id");
  CREATE INDEX "payload_locked_documents_rels_path_idx" ON "payload_locked_documents_rels" USING btree ("path");
  CREATE INDEX "payload_locked_documents_rels_pages_id_idx" ON "payload_locked_documents_rels" USING btree ("pages_id");
  CREATE INDEX "payload_locked_documents_rels_current_affairs_id_idx" ON "payload_locked_documents_rels" USING btree ("current_affairs_id");
  CREATE INDEX "payload_locked_documents_rels_topics_id_idx" ON "payload_locked_documents_rels" USING btree ("topics_id");
  CREATE INDEX "payload_locked_documents_rels_units_id_idx" ON "payload_locked_documents_rels" USING btree ("units_id");
  CREATE INDEX "payload_locked_documents_rels_papers_id_idx" ON "payload_locked_documents_rels" USING btree ("papers_id");
  CREATE INDEX "payload_locked_documents_rels_thinkers_id_idx" ON "payload_locked_documents_rels" USING btree ("thinkers_id");
  CREATE INDEX "payload_locked_documents_rels_media_id_idx" ON "payload_locked_documents_rels" USING btree ("media_id");
  CREATE INDEX "payload_locked_documents_rels_users_id_idx" ON "payload_locked_documents_rels" USING btree ("users_id");
  CREATE INDEX "payload_locked_documents_rels_sources_id_idx" ON "payload_locked_documents_rels" USING btree ("sources_id");
  CREATE INDEX "payload_locked_documents_rels_pipeline_runs_id_idx" ON "payload_locked_documents_rels" USING btree ("pipeline_runs_id");
  CREATE INDEX "payload_locked_documents_rels_digests_id_idx" ON "payload_locked_documents_rels" USING btree ("digests_id");
  CREATE INDEX "payload_locked_documents_rels_quizzes_id_idx" ON "payload_locked_documents_rels" USING btree ("quizzes_id");
  CREATE INDEX "payload_preferences_key_idx" ON "payload_preferences" USING btree ("key");
  CREATE INDEX "payload_preferences_updated_at_idx" ON "payload_preferences" USING btree ("updated_at");
  CREATE INDEX "payload_preferences_created_at_idx" ON "payload_preferences" USING btree ("created_at");
  CREATE INDEX "payload_preferences_rels_order_idx" ON "payload_preferences_rels" USING btree ("order");
  CREATE INDEX "payload_preferences_rels_parent_idx" ON "payload_preferences_rels" USING btree ("parent_id");
  CREATE INDEX "payload_preferences_rels_path_idx" ON "payload_preferences_rels" USING btree ("path");
  CREATE INDEX "payload_preferences_rels_users_id_idx" ON "payload_preferences_rels" USING btree ("users_id");
  CREATE INDEX "payload_migrations_updated_at_idx" ON "payload_migrations" USING btree ("updated_at");
  CREATE INDEX "payload_migrations_created_at_idx" ON "payload_migrations" USING btree ("created_at");
  CREATE INDEX "site_settings_featured_thinker_idx" ON "site_settings" USING btree ("featured_thinker_id");
  CREATE INDEX "navigation_header_order_idx" ON "navigation_header" USING btree ("_order");
  CREATE INDEX "navigation_header_parent_id_idx" ON "navigation_header" USING btree ("_parent_id");
  CREATE INDEX "navigation_footer_order_idx" ON "navigation_footer" USING btree ("_order");
  CREATE INDEX "navigation_footer_parent_id_idx" ON "navigation_footer" USING btree ("_parent_id");`)
}

export async function down({ db, payload: _payload, req: _req }: MigrateDownArgs): Promise<void> {
  await db.execute(sql`
   DROP TABLE "pages_blocks_hero_actions" CASCADE;
  DROP TABLE "pages_blocks_hero" CASCADE;
  DROP TABLE "pages_blocks_rich_text" CASCADE;
  DROP TABLE "pages_blocks_summary_points" CASCADE;
  DROP TABLE "pages_blocks_summary" CASCADE;
  DROP TABLE "pages_blocks_callout" CASCADE;
  DROP TABLE "pages_blocks_key_terms_rows" CASCADE;
  DROP TABLE "pages_blocks_key_terms" CASCADE;
  DROP TABLE "pages_blocks_cta" CASCADE;
  DROP TABLE "pages" CASCADE;
  DROP TABLE "_pages_v_blocks_hero_actions" CASCADE;
  DROP TABLE "_pages_v_blocks_hero" CASCADE;
  DROP TABLE "_pages_v_blocks_rich_text" CASCADE;
  DROP TABLE "_pages_v_blocks_summary_points" CASCADE;
  DROP TABLE "_pages_v_blocks_summary" CASCADE;
  DROP TABLE "_pages_v_blocks_callout" CASCADE;
  DROP TABLE "_pages_v_blocks_key_terms_rows" CASCADE;
  DROP TABLE "_pages_v_blocks_key_terms" CASCADE;
  DROP TABLE "_pages_v_blocks_cta" CASCADE;
  DROP TABLE "_pages_v" CASCADE;
  DROP TABLE "current_affairs_sources" CASCADE;
  DROP TABLE "current_affairs_blocks_hero_actions" CASCADE;
  DROP TABLE "current_affairs_blocks_hero" CASCADE;
  DROP TABLE "current_affairs_blocks_rich_text" CASCADE;
  DROP TABLE "current_affairs_blocks_summary_points" CASCADE;
  DROP TABLE "current_affairs_blocks_summary" CASCADE;
  DROP TABLE "current_affairs_blocks_callout" CASCADE;
  DROP TABLE "current_affairs_blocks_key_terms_rows" CASCADE;
  DROP TABLE "current_affairs_blocks_key_terms" CASCADE;
  DROP TABLE "current_affairs_blocks_cta" CASCADE;
  DROP TABLE "current_affairs" CASCADE;
  DROP TABLE "current_affairs_rels" CASCADE;
  DROP TABLE "_current_affairs_v_version_sources" CASCADE;
  DROP TABLE "_current_affairs_v_blocks_hero_actions" CASCADE;
  DROP TABLE "_current_affairs_v_blocks_hero" CASCADE;
  DROP TABLE "_current_affairs_v_blocks_rich_text" CASCADE;
  DROP TABLE "_current_affairs_v_blocks_summary_points" CASCADE;
  DROP TABLE "_current_affairs_v_blocks_summary" CASCADE;
  DROP TABLE "_current_affairs_v_blocks_callout" CASCADE;
  DROP TABLE "_current_affairs_v_blocks_key_terms_rows" CASCADE;
  DROP TABLE "_current_affairs_v_blocks_key_terms" CASCADE;
  DROP TABLE "_current_affairs_v_blocks_cta" CASCADE;
  DROP TABLE "_current_affairs_v" CASCADE;
  DROP TABLE "_current_affairs_v_rels" CASCADE;
  DROP TABLE "topics_blocks_hero_actions" CASCADE;
  DROP TABLE "topics_blocks_hero" CASCADE;
  DROP TABLE "topics_blocks_rich_text" CASCADE;
  DROP TABLE "topics_blocks_summary_points" CASCADE;
  DROP TABLE "topics_blocks_summary" CASCADE;
  DROP TABLE "topics_blocks_callout" CASCADE;
  DROP TABLE "topics_blocks_key_terms_rows" CASCADE;
  DROP TABLE "topics_blocks_key_terms" CASCADE;
  DROP TABLE "topics_blocks_cta" CASCADE;
  DROP TABLE "topics" CASCADE;
  DROP TABLE "topics_rels" CASCADE;
  DROP TABLE "_topics_v_blocks_hero_actions" CASCADE;
  DROP TABLE "_topics_v_blocks_hero" CASCADE;
  DROP TABLE "_topics_v_blocks_rich_text" CASCADE;
  DROP TABLE "_topics_v_blocks_summary_points" CASCADE;
  DROP TABLE "_topics_v_blocks_summary" CASCADE;
  DROP TABLE "_topics_v_blocks_callout" CASCADE;
  DROP TABLE "_topics_v_blocks_key_terms_rows" CASCADE;
  DROP TABLE "_topics_v_blocks_key_terms" CASCADE;
  DROP TABLE "_topics_v_blocks_cta" CASCADE;
  DROP TABLE "_topics_v" CASCADE;
  DROP TABLE "_topics_v_rels" CASCADE;
  DROP TABLE "units" CASCADE;
  DROP TABLE "papers" CASCADE;
  DROP TABLE "thinkers_key_ideas" CASCADE;
  DROP TABLE "thinkers_blocks_hero_actions" CASCADE;
  DROP TABLE "thinkers_blocks_hero" CASCADE;
  DROP TABLE "thinkers_blocks_rich_text" CASCADE;
  DROP TABLE "thinkers_blocks_summary_points" CASCADE;
  DROP TABLE "thinkers_blocks_summary" CASCADE;
  DROP TABLE "thinkers_blocks_callout" CASCADE;
  DROP TABLE "thinkers_blocks_key_terms_rows" CASCADE;
  DROP TABLE "thinkers_blocks_key_terms" CASCADE;
  DROP TABLE "thinkers_blocks_cta" CASCADE;
  DROP TABLE "thinkers" CASCADE;
  DROP TABLE "_thinkers_v_version_key_ideas" CASCADE;
  DROP TABLE "_thinkers_v_blocks_hero_actions" CASCADE;
  DROP TABLE "_thinkers_v_blocks_hero" CASCADE;
  DROP TABLE "_thinkers_v_blocks_rich_text" CASCADE;
  DROP TABLE "_thinkers_v_blocks_summary_points" CASCADE;
  DROP TABLE "_thinkers_v_blocks_summary" CASCADE;
  DROP TABLE "_thinkers_v_blocks_callout" CASCADE;
  DROP TABLE "_thinkers_v_blocks_key_terms_rows" CASCADE;
  DROP TABLE "_thinkers_v_blocks_key_terms" CASCADE;
  DROP TABLE "_thinkers_v_blocks_cta" CASCADE;
  DROP TABLE "_thinkers_v" CASCADE;
  DROP TABLE "media" CASCADE;
  DROP TABLE "users_sessions" CASCADE;
  DROP TABLE "users" CASCADE;
  DROP TABLE "sources" CASCADE;
  DROP TABLE "pipeline_runs_errors" CASCADE;
  DROP TABLE "pipeline_runs" CASCADE;
  DROP TABLE "digests_groups" CASCADE;
  DROP TABLE "digests" CASCADE;
  DROP TABLE "digests_rels" CASCADE;
  DROP TABLE "_digests_v_version_groups" CASCADE;
  DROP TABLE "_digests_v" CASCADE;
  DROP TABLE "_digests_v_rels" CASCADE;
  DROP TABLE "quizzes_items_options" CASCADE;
  DROP TABLE "quizzes_items" CASCADE;
  DROP TABLE "quizzes" CASCADE;
  DROP TABLE "_quizzes_v_version_items_options" CASCADE;
  DROP TABLE "_quizzes_v_version_items" CASCADE;
  DROP TABLE "_quizzes_v" CASCADE;
  DROP TABLE "payload_kv" CASCADE;
  DROP TABLE "payload_locked_documents" CASCADE;
  DROP TABLE "payload_locked_documents_rels" CASCADE;
  DROP TABLE "payload_preferences" CASCADE;
  DROP TABLE "payload_preferences_rels" CASCADE;
  DROP TABLE "payload_migrations" CASCADE;
  DROP TABLE "site_settings" CASCADE;
  DROP TABLE "navigation_header" CASCADE;
  DROP TABLE "navigation_footer" CASCADE;
  DROP TABLE "navigation" CASCADE;
  DROP TYPE "public"."enum_pages_blocks_hero_variant";
  DROP TYPE "public"."enum_pages_blocks_callout_tone";
  DROP TYPE "public"."enum_pages_blocks_cta_style";
  DROP TYPE "public"."enum_pages_status";
  DROP TYPE "public"."enum__pages_v_blocks_hero_variant";
  DROP TYPE "public"."enum__pages_v_blocks_callout_tone";
  DROP TYPE "public"."enum__pages_v_blocks_cta_style";
  DROP TYPE "public"."enum__pages_v_version_status";
  DROP TYPE "public"."enum_current_affairs_blocks_hero_variant";
  DROP TYPE "public"."enum_current_affairs_blocks_callout_tone";
  DROP TYPE "public"."enum_current_affairs_blocks_cta_style";
  DROP TYPE "public"."enum_current_affairs_paper";
  DROP TYPE "public"."enum_current_affairs_review_status";
  DROP TYPE "public"."enum_current_affairs_status";
  DROP TYPE "public"."enum__current_affairs_v_blocks_hero_variant";
  DROP TYPE "public"."enum__current_affairs_v_blocks_callout_tone";
  DROP TYPE "public"."enum__current_affairs_v_blocks_cta_style";
  DROP TYPE "public"."enum__current_affairs_v_version_paper";
  DROP TYPE "public"."enum__current_affairs_v_version_review_status";
  DROP TYPE "public"."enum__current_affairs_v_version_status";
  DROP TYPE "public"."enum_topics_blocks_hero_variant";
  DROP TYPE "public"."enum_topics_blocks_callout_tone";
  DROP TYPE "public"."enum_topics_blocks_cta_style";
  DROP TYPE "public"."enum_topics_status";
  DROP TYPE "public"."enum__topics_v_blocks_hero_variant";
  DROP TYPE "public"."enum__topics_v_blocks_callout_tone";
  DROP TYPE "public"."enum__topics_v_blocks_cta_style";
  DROP TYPE "public"."enum__topics_v_version_status";
  DROP TYPE "public"."enum_papers_code";
  DROP TYPE "public"."enum_thinkers_blocks_hero_variant";
  DROP TYPE "public"."enum_thinkers_blocks_callout_tone";
  DROP TYPE "public"."enum_thinkers_blocks_cta_style";
  DROP TYPE "public"."enum_thinkers_status";
  DROP TYPE "public"."enum__thinkers_v_blocks_hero_variant";
  DROP TYPE "public"."enum__thinkers_v_blocks_callout_tone";
  DROP TYPE "public"."enum__thinkers_v_blocks_cta_style";
  DROP TYPE "public"."enum__thinkers_v_version_status";
  DROP TYPE "public"."enum_media_license";
  DROP TYPE "public"."enum_users_role";
  DROP TYPE "public"."enum_sources_kind";
  DROP TYPE "public"."enum_pipeline_runs_status";
  DROP TYPE "public"."enum_digests_type";
  DROP TYPE "public"."enum_digests_status";
  DROP TYPE "public"."enum__digests_v_version_type";
  DROP TYPE "public"."enum__digests_v_version_status";
  DROP TYPE "public"."enum_quizzes_status";
  DROP TYPE "public"."enum__quizzes_v_version_status";`)
}

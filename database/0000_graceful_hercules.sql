CREATE TYPE "public"."type" AS ENUM('anime');--> statement-breakpoint
CREATE TABLE "animes" (
	"id" serial PRIMARY KEY NOT NULL,
	"kitsu_id" integer,
	"slug" varchar NOT NULL,
	"title" varchar(255) NOT NULL,
	"titles" jsonb,
	"start_date" date,
	"end_date" date,
	"sub_type" varchar(52),
	"show_type" varchar(52),
	"status" varchar(52),
	"episodes_count" integer,
	"episode_length" integer,
	"total_length" integer,
	"age_rating" varchar,
	"synopsis" text,
	"description" text,
	"posters" jsonb,
	"covers" jsonb,
	"createdAt" timestamp DEFAULT now() NOT NULL,
	"updatedAt" timestamp DEFAULT now() NOT NULL,
	CONSTRAINT "animes_slug_unique" UNIQUE("slug")
);
--> statement-breakpoint
CREATE TABLE "imports" (
	"id" serial PRIMARY KEY NOT NULL,
	"slug" text NOT NULL,
	"kitsu_id" integer NOT NULL,
	"type" "type",
	"content" jsonb NOT NULL,
	"import_at" timestamp DEFAULT now() NOT NULL
);

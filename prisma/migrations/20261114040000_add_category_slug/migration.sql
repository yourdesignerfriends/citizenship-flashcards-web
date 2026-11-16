ALTER TABLE "Category" ADD COLUMN "slug" TEXT;

WITH normalized_categories AS (
    SELECT
        "id",
        COALESCE(
            CASE "name"
                WHEN 'American Government' THEN 'american-government'
                WHEN 'American History' THEN 'american-history'
                WHEN 'Symbols and Holidays' THEN 'symbols-and-holidays'
                ELSE NULLIF(
                    TRIM(BOTH '-' FROM REGEXP_REPLACE(LOWER("name"), '[^a-z0-9]+', '-', 'g')),
                    ''
                )
            END,
            'category-' || "id"::TEXT
        ) AS base_slug
    FROM "Category"
),
ranked_categories AS (
    SELECT
        "id",
        base_slug,
        ROW_NUMBER() OVER (PARTITION BY base_slug ORDER BY "id") AS slug_number
    FROM normalized_categories
)
UPDATE "Category" AS category
SET "slug" = ranked_categories.base_slug ||
    CASE
        WHEN ranked_categories.slug_number = 1 THEN ''
        ELSE '-' || ranked_categories.slug_number::TEXT
    END
FROM ranked_categories
WHERE category."id" = ranked_categories."id";

ALTER TABLE "Category" ALTER COLUMN "slug" SET NOT NULL;

CREATE UNIQUE INDEX "Category_slug_key" ON "Category"("slug");

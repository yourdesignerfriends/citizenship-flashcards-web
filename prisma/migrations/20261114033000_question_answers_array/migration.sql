-- Preserve each existing answer as a single-item array.
ALTER TABLE "Question" RENAME COLUMN "answer" TO "answers";

ALTER TABLE "Question"
ALTER COLUMN "answers" SET DATA TYPE TEXT[]
USING ARRAY["answers"]::TEXT[];

// I use React cache to reuse this result when the same query runs more than once during a render.
import { cache } from "react";
// I keep this module server-only because it accesses my database.
import "server-only";
// I use my shared Prisma client to query the category data.
import { prisma } from "@/lib/prisma";

// I load all categories for pages that need to display the category list.
export const getCategories = cache(() => {
  // I ask Prisma for each category's id, name, slug, and question count,
  // then sort the results alphabetically by name.
  return prisma.category.findMany({
    select: {
      id: true,
      name: true,
      slug: true,
      _count: {
        select: { questions: true },
      },
    },
    orderBy: { name: "asc" },
  });
});

// I look up one category by its unique URL slug for the dynamic flashcards route.
export function getCategoryBySlug(slug: string) {
  // I find one category by its URL slug and load its questions and accepted answers.
  return prisma.category.findUnique({
    where: { slug },
    select: {
      id: true,
      name: true,
      slug: true,
      questions: {
        select: {
          id: true,
          question: true,
          answers: true,
        },
        orderBy: { id: "asc" },
      },
    },
  });
}

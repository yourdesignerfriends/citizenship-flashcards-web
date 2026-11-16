import "server-only";
import { prisma } from "@/lib/prisma";

export function getCategories() {
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
}

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

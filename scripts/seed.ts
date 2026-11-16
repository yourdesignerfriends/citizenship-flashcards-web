import "dotenv/config";
import { prisma } from "../src/lib/prisma";

const categories = [
  {
    name: "American Government",
    slug: "american-government",
    questions: [
      {
        question: "What is the form of government of the United States?",
        answers: ["A republic"],
      },
      {
        question: "What is the supreme law of the land?",
        answers: ["The Constitution"],
      },
      {
        question: "What is the economic system of the United States?",
        answers: ["A capitalist economy"],
      },
      {
        question:
          "The U.S. Constitution starts with the words “We the People.” What does “We the People” mean?",
        answers: [
          "Self-government",
          "Popular sovereignty",
          "Consent of the governed",
          "People should govern themselves",
          "(Example of) social contract",
        ],
      },
    ],
  },
  {
    name: "American History",
    slug: "american-history",
    questions: [
      {
        question: "Who lived in America before the Europeans arrived?",
        answers: ["American Indians"],
      },
    ],
  },
  {
    name: "Symbols and Holidays",
    slug: "symbols-and-holidays",
    questions: [
      {
        question: "What is the capital of the United States?",
        answers: ["Washington, D.C."],
      },
    ],
  },
];

async function main() {
  console.log("Seeding sample civics questions...");

  await prisma.$transaction(async (transaction) => {
    for (const seedCategory of categories) {
      const category = await transaction.category.upsert({
        where: { slug: seedCategory.slug },
        create: {
          name: seedCategory.name,
          slug: seedCategory.slug,
        },
        update: { name: seedCategory.name },
      });

      for (const seedQuestion of seedCategory.questions) {
        const existingQuestion = await transaction.question.findFirst({
          where: {
            categoryId: category.id,
            question: seedQuestion.question,
          },
        });

        if (existingQuestion) {
          await transaction.question.update({
            where: { id: existingQuestion.id },
            data: { answers: seedQuestion.answers },
          });
        } else {
          await transaction.question.create({
            data: {
              ...seedQuestion,
              categoryId: category.id,
            },
          });
        }
      }
    }
  });

  console.log("Sample civics questions seeded successfully.");
}

main()
  .catch((error: unknown) => {
    console.error("Failed to seed sample civics questions:", error);
    process.exitCode = 1;
  })
  .finally(async () => {
    await prisma.$disconnect();
  });

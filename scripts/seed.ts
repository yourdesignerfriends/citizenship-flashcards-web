// I load environment variables so my database connection can use DATABASE_URL.
import "dotenv/config";
// I reuse my configured Prisma Client to write the sample data.
import { prisma } from "../src/lib/prisma";

// I keep the sample categories, URL slugs, questions, and accepted answers together.
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

// I define the work that runs when I execute this seed script.
async function main() {
  console.log("Seeding sample civics questions...");

  // I run all seed changes in one transaction so they succeed or roll back together.
  await prisma.$transaction(async (transaction) => {
    for (const seedCategory of categories) {
      // I create each category if it is new, or update its name when its slug already exists.
      const category = await transaction.category.upsert({
        where: { slug: seedCategory.slug },
        create: {
          name: seedCategory.name,
          slug: seedCategory.slug,
        },
        update: { name: seedCategory.name },
      });

      for (const seedQuestion of seedCategory.questions) {
        // I look for a matching question in this category so rerunning the seed does not duplicate it.
        const existingQuestion = await transaction.question.findFirst({
          where: {
            categoryId: category.id,
            question: seedQuestion.question,
          },
        });

        if (existingQuestion) {
          // I refresh the accepted answers when the question already exists.
          await transaction.question.update({
            where: { id: existingQuestion.id },
            data: { answers: seedQuestion.answers },
          });
        } else {
          // I create the question and connect it to the category I just found or created.
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

// I report seed failures and disconnect Prisma when the script finishes.
main()
  .catch((error: unknown) => {
    console.error("Failed to seed sample civics questions:", error);
    process.exitCode = 1;
  })
  .finally(async () => {
    await prisma.$disconnect();
  });

import { prisma } from "../src/lib/prisma";

async function main() {
    console.log("Starting citizenship flashcards database seed...");

    // Hi, I'm Analina. Before inserting new data, I clear the existing tables to avoid duplicates.
    await prisma.question.deleteMany({});
    await prisma.category.deleteMany({});

    // 1. Create Categories and associate their respective flashcards
    await prisma.category.create({
        data: {
        name: "American Government",
        questions: {
            create: [
            {
                question: "What is the form of government of the United States?",
                answer: "Republic",
            },
            {
                question: "What is the supreme law of the land?",
                answer: "The Constitution",
            },
            {
                question: "What is the economic system of the United States?",
                answer: "Capitalism",
            },
            ],
        },
        },
    });

    await prisma.category.create({
        data: {
        name: "American History",
        questions: {
            create: [
            {
                question: "Who lived in America before the Europeans arrived?",
                answer: "Native Americans",
            },
            ],
        },
        },
    });

    await prisma.category.create({
        data: {
        name: "Symbols and Holidays",
        questions: {
            create: [
            {
                question: "What is the capital of the United States?",
                answer: "Washington, D.C.",
            },
            ],
        },
        },
    });

    console.log("Citizenship flashcards seeded successfully into PostgreSQL!");
    }

    main()
    .catch((err) => {
        console.error("Error during seeding:", err);
        process.exit(1);
    })
    .finally(async () => {
        await prisma.$disconnect();
    });
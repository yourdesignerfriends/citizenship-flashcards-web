# Overview

I built US Citizenship Flashcards as a web app that helps people study for the U.S. naturalization civics test. The app is organized into categories of questions, and visitors can open each flashcard to see the accepted answers. I created the app with Next.js, React, TypeScript, Prisma ORM, and PostgreSQL. I also used this project to strengthen my skills in database integration, dynamic routing, reusable components, and responsive web design.

To run the app locally, I first install the dependencies with npm install. I configure the DATABASE_URL environment variable for PostgreSQL, apply the Prisma migrations, and optionally seed the database with npx prisma db seed. Then, I start the development server with npm run dev and open http://localhost:3000 in my browser to visit the Home page.

I created this app because I enjoy programming and above all love serving and helping others. It gives me a practical way to improve my software engineering skills while providing a useful study resource for people preparing for the U.S. Citizenship Civics Test.

[Software Demo Video](http://youtube.link.goes.here)

# Web Pages

I created four main pages for the web app: the Home, Categories, Flashcards, and About pages. I use the navigation bar to move from the Home page to the Categories page, and I use Next.js links to move between pages without a full reload.

On the Home page, I welcome visitors and encourage them to start studying. I dynamically display the shared hero section, the motivational text, and a link that takes users to the Categories page.

On the Categories page, I query the database and dynamically create a card for each question category. Each card displays the category name and number of questions. When I select a category, I navigate to a dynamic Flashcards page using the category slug in the URL.

On the Flashcards page, I dynamically retrieve the selected category and its questions from the database using the category slug. I create one expandable flashcard for each question, and I display the accepted answers when the visitor opens it. I also dynamically adjust the heading when a question has multiple accepted answers. If the category does not exist, I display a 404 page, and if it has no questions, I display an empty state.

On the About page, I introduce myself and explain that I created this app to help people prepare for the U.S. Citizenship Civics Test. The navigation bar and footer remain visible across all pages, while the main content changes based on the selected route.

# Development Environment

I used Visual Studio Code to write and manage the project. I developed the app with Next.js, React, and TypeScript, and I used CSS modules to style individual components and pages.

I used Prisma with PostgreSQL to store categories, questions, and their accepted answers. I also used npm to manage dependencies and run scripts, such as npm run dev for the test server, npm run build for the production build, and npm run lint for code validation.

Programming Language:
I developed the app with TypeScript. I used React to build reusable components and Next.js to manage routing and render pages on the server, including pages that load data from the database.

# Useful Websites

* [prisma.io](https://www.prisma.io/dataguide/postgresql/getting-to-know-postgresql)
* [medium.com](https://mahabub-r.medium.com/postgres-prisma-mastering-relations-from-basic-to-advanced-d205f94babc3)
* [vercel.com](https://vercel.com/solutions/react)
* [vercel.com](https://vercel.com/solutions/react)

# Future Work

* I would like to add more civics questions and categories to expand the study options.
* I would like to create a custom 404 page with a design that matches the rest of the app.
* I would like to add a study progress feature that saves which questions the user has already reviewed.
* I would like to add answer checking and practice quizzes so users can test their knowledge of the citizenship civics questions.
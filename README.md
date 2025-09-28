# DevVerse - Developer Marketplace

![DevVerse Homepage](https://github.com/Yashparmar1125/DevVerse/blob/main/docs/image.png)

## Overview

DevVerse is a modern, full-stack application that serves as a marketplace to connect clients with talented software developers. Built with Next.js, TypeScript, and Tailwind CSS, it features a premium and responsive user interface, AI-powered developer matching, detailed project listings, comprehensive developer profiles, and a dual-view user dashboard for clients and developers.

This project was built to showcase the capabilities of a modern web stack and to provide a feature-rich starting point for a real-world platform.

## Key Features

- **AI-Powered Matching:** Clients can input their project requirements, and an AI flow suggests the best-suited developers based on skills, budget, and more.
- **Dynamic Pages:**
    - **Project Listings:** Browse, search, and view details for a wide range of software projects.
    - **Developer Directory:** Explore detailed developer profiles with skills, ratings, availability, and portfolio information.
- **Interactive Dashboard:** A dual-view dashboard tailored for both clients and developers:
    - **Client View:** Track active projects, manage proposals, and post new jobs.
    - **Developer View:** Monitor earnings with data visualizations, manage active gigs, and find new project invitations.
- **Modern UI/UX:**
    - A sophisticated design system with a refined color palette and typography.
    - Subtle animations and micro-interactions for a premium user experience.
    - Fully responsive layout for seamless use on desktops, tablets, and mobile devices.
- **Authentication Flow:** Clean and simple sign-in and sign-up pages.

## Tech Stack

- **Framework:** [Next.js](https://nextjs.org/) (App Router)
- **Language:** [TypeScript](https://www.typescriptlang.org/)
- **Styling:** [Tailwind CSS](https://tailwindcss.com/) with [ShadCN UI](https://ui.shadcn.com/) for components.
- **Generative AI:** [Google's Gemini model](https://deepmind.google/technologies/gemini/) via [Genkit](https://firebase.google.com/docs/genkit).
- **Icons:** [Lucide React](https://lucide.dev/guide/packages/lucide-react)
- **Data Visualization:** [Recharts](https://recharts.org/)

## Getting Started

To get a local copy up and running, follow these simple steps.

### Prerequisites

- Node.js (v18 or later)
- npm or yarn

### Installation

1. Clone the repo:
   ```sh
   git clone https://github.com/your-username/devverse.git
   ```
2. Install NPM packages:
   ```sh
   npm install
   ```
3. (Optional) Set up your AI environment:
   - Create a `.env` file in the root of the project.
   - Add your `GEMINI_API_KEY` to the `.env` file.
4. Run the development server:
   ```sh
   npm run dev
   ```
5. Open [http://localhost:9002](http://localhost:9002) with your browser to see the result.

## File Structure

- `src/app/`: Contains all the application routes and pages.
- `src/components/`: Shared React components, including UI components from ShadCN.
- `src/ai/`: Holds the Genkit flows for AI-powered features.
- `src/lib/`: Contains utility functions, type definitions, and placeholder data.
- `src/styles/`: Global CSS and Tailwind configuration.

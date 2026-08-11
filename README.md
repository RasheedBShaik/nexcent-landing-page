# Nexcent Landing Page

A responsive landing page recreated from the provided Figma design using **Next.js, TypeScript, React, and Tailwind CSS**.

The project follows a modular and reusable component architecture, with page content maintained separately from presentation components.

## Tech Stack

* **Next.js** – App Router
* **React** – Component-based UI
* **TypeScript** – Type safety
* **Tailwind CSS** – Styling and responsive design
* **Next/Image** – Optimized images
* **Next/Font** – Optimized font loading

## Features

* Pixel-focused implementation of the provided Figma design
* Fully responsive across desktop, tablet, and mobile
* Reusable UI components
* Structured JSON-based page content
* Responsive navigation
* Reusable buttons, cards, and sections
* Server-side rendered using Next.js App Router
* Clean and scalable project structure

## Project Structure

```text
src/
├── app/
│   ├── layout.tsx
│   ├── page.tsx
│   └── globals.css
│
├── components/
│   ├── layout/
│   │   ├── Navbar.tsx
│   │   └── Footer.tsx
│   │
│   ├── sections/
│   │   ├── Hero.tsx
│   │   ├── Services.tsx
│   │   └── ...
│   │
│   └── ui/
│       ├── Button.tsx
│       └── ...
│
├── data/
│   └── landing-page.json
│
└── types/
    └── landing-page.ts

public/
└── assets/
```

## Getting Started

### Prerequisites

Make sure you have **Node.js** installed.

### Installation

Clone the repository:

```bash
git clone <your-repository-url>
```

Navigate to the project:

```bash
cd nexcent-landing-page
```

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Open http://localhost:3000 in your browser.

## Build for Production

Create a production build:

```bash
npm run build
```

Run the production server:

```bash
npm start
```

## Design Reference

The implementation is based on the Figma design provided as part of the technical assessment.

## Live Demo

**Live URL:** `<add-deployed-url-here>`

## Repository

**GitHub:** `<add-github-repository-url-here>`

## Author

**<Shaik Rasheed Basha>**

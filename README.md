<<<<<<< HEAD
Paytm Clone Frontend

> A pixel-perfect Paytm frontend clone with advanced UPI transaction management and fraud insights.

---

## 📋 Table of Contents

1. [Project Overview](#project-overview)  
2. [Screenshots](#screenshots)  
3. [Key Features](#key-features)  
   - [1. Spending Limit Control Interface](#1-spending-limit-control-interface)  
   - [2. Location-Linked Payment History](#2-location-linked-payment-history)  
   - [3. UPI Fraud Dashboard (Admin View)](#3-upi-fraud-dashboard-admin-view)  
   - [4. Reverse Transaction Flow](#4-reverse-transaction-flow)  
   - [5. AI Fraud Prevention Screen](#5-ai-fraud-prevention-screen)  
   - [6. Refund Status Tracker](#6-refund-status-tracker)  
   - [7. Trusted Merchant Tag](#7-trusted-merchant-tag)  
   - [8. Smart Dispute Chatbot UI](#8-smart-dispute-chatbot-ui)  
   - [9. Reversal History & Analytics](#9-reversal-history--analytics)  
   - [10. Auto-Escalation Logic](#10-auto-escalation-logic)  
4. [UI/UX Highlights](#uiux-highlights)  
5. [Screens & User Flows](#screens--user-flows)  
6. [Tech Stack](#tech-stack)  
7. [Setup & Run](#setup--run)  

---

## 🔍 Project Overview

This project delivers an exact clone of the Paytm frontend with additional advanced UPI transaction management and fraud prevention features. Built mobile-first, it showcases:

- Familiar Paytm blue (#00BAF2) and white color scheme  
- Clean, card-based UI with rounded corners and soft shadows  
- Bottom navigation bar mirroring Paytm’s sections  
- Enhanced UPI workflows for spending control, reversals, and fraud insights  

---

## 📸 Screenshots

> _Screenshots or screen mockups to be added here_

---

## ✨ Key Features

### 1. Spending Limit Control Interface

- Glassmorphism card with frosted backdrop & soft shadow  
- Input fields for daily, weekly, and monthly limits (₹__ )  
- Animated, glowing progress bar: e.g., “⚠️ You’ve used ₹900 of your ₹1,000 daily limit.”  
- Large, bold limit numbers with gradient accent  
- Micro-interactions (hover, focus) and smooth transitions  

🧠 Real-world use case: Helps users avoid overspending by visually tracking daily or monthly budgets—ideal for students or budgeting-conscious individuals.

### 2. Location-Linked Payment History

- Scrollable transaction list with merchant name, amount, date/time, and specific location  
- Map pin icons or small GPS map previews next to each entry  
- Demo data: Pizza Hut (MG Road, Bangalore), Big Bazaar (Koramangala), etc. 

📍 Real-world use case: Useful for verifying suspicious payments or remembering where a transaction occurred—great for travel expense tracking.

### 3. UPI Fraud Dashboard (Admin View)

- Dashboard cards with gradients, drop shadows, and glassy overlays  
- Bar chart: reversal requests by category (Wrong UPI ID, Scam)  
- Heatmap: high-risk merchant areas  
- KPI card: “Reversal Rejection Rate: 2% – Low Risk”  
- Filter controls (pill-shaped buttons) for date range, user, and reason  

🛡 Real-world use case: Helps payment providers and admins identify and act on fraud trends in real-time—vital for fintech compliance teams.

### 4. Reverse Transaction Flow

- “Reverse Transaction” button active within 30 minutes of payment  
- Countdown timer showing time left to request a reversal  
- Modal popup to submit reversal reason (Wrong UPI ID, Wrong Amount, Suspected Scam) 

🔁 Real-world use case: Gives users a safety net for accidental transfers—protects against common UPI errors like sending to the wrong contact.

### 5. AI Fraud Prevention Screen

- Warning alerts when weekly reversal quota is reached  
- Visual badge or alert block indicating high-risk usage  

🤖 Real-world use case: Prevents misuse of reversal features and detects patterns of potential scams—critical for keeping the system fair.


### 6. Refund Status Tracker

- Status steps: Request Sent → Receiver Response → Bank Processing → Refunded/Rejected  
- Visually distinct progress indicators for each step  

⏳ Real-world use case: Reduces user anxiety by keeping them informed during refund delays—mirrors the clarity of food delivery order tracking.

### 7. Trusted Merchant Tag

- Certain merchants labeled “Trusted” to require formal escalation for reversals  
- Non-instant reversal flow for tagged transactions  

🏷️ Real-world use case: Protects reliable businesses from false reversal abuse—ideal for utility companies, large chains, and subscriptions.



### 8. Smart Dispute Chatbot UI

- In-app chat interface to file complaints, ask FAQs, or escalate issues  
- Quick-reply buttons and AI-generated suggestions  

💬 Real-world use case: Reduces support wait times—users can quickly resolve UPI issues without calling customer service.


### 9. Reversal History & Analytics

- Table or card-based history of past reversal requests  
- Fraud risk score and remaining reversal limits per user  

📊 Real-world use case: Offers transparency and user-level control over reversal activity—helps identify patterns and reduce misuse.



### 10. Auto-Escalation Logic (Visual Only)

- After timer expiration, transactions auto-move to bank review stage  
- Animated transition showing escalation flow  

⚙️ Real-world use case: Ensures time-sensitive complaints are escalated without user action—minimizes dropped or ignored requests.

---
##  11. Smart Bill Split & UPI Payment Requests

Easily split group expenses and send UPI payment requests with just a few taps.

#🧾 Real-world use case: Perfect for roommates, group trips, or shared dinners—no more manual calculations or awkward reminders.


### 🔁 12. Recurring Payment Reminder

Never forget important monthly payments again.

-  Set up recurring UPI reminders (e.g., rent, Netflix, tuition)
-  Each reminder shows amount, recipient, due date, and frequency
-  “Auto Notify” toggle to get alerts when payment is due
-  “Pay Now” button pre-fills all UPI fields for fast checkout
-  Uses pastel-colored reminder cards, calendar icons, and smooth animations

**Real-world use case:** Great for busy professionals and students managing regular expenses.

---


## 🎨 UI/UX Highlights

- Mobile-first responsive design  
- Soft shadows, rounded corners (2xl), and glassmorphic overlays  
- Purple/blue theme accents complements Paytm’s palette  
- Interactive animations on buttons, cards, and charts  
- Consistent iconography and typography  

---

## 📱 Screens & User Flows

1. **Home Dashboard**: Wallet balance, quick actions, banners  
2. **Transaction History**: Scrollable list with maps & filters  
3. **Reverse Request**: Countdown timer, reason modal  
4. **Recipient Approval**: UI for approving/rejecting reversals  
5. **Refund Tracker**: Step-by-step status tracker  
6. **Admin Fraud Dashboard**: Charts, KPIs, heatmap  
7. **Chatbot Support**: Smart dispute chat interface  

---

## 🛠 Tech Stack

- **HTML5 & CSS3** (Tailwind CSS optional)  
- **JavaScript** (Vanilla or React.js)  
- **Chart.js** for charts & heatmaps  
- **Google Maps API** for location previews & heatmap layers  

---
⚙️ Tech Stack Overview – Paytm Replica Spark
paytm-replica-spark is a modern, high-performance frontend project built to replicate and enhance the functionality of apps like Paytm with a sleek, professional design and next-gen user experience. The tech stack used in this project reflects industry best practices in performance, accessibility, developer productivity, and scalability.

🚀 Core Technologies
✅ React 18 + TypeScript
React 18.3.1 offers concurrent rendering, improved performance, and better UX.

TypeScript 5.5.3 ensures type safety, enabling fewer bugs and more scalable code.

✅ Why Useful:

Ideal for large, feature-rich apps like UPI dashboards and financial platforms.

TypeScript ensures fewer runtime bugs and better developer collaboration.

⚡ Build Tools
Vite 5.4.1 + SWC Compiler
Vite is a lightning-fast frontend build tool with instant server start and hot module replacement.

SWC is a Rust-based compiler, much faster than Babel.

✅ Why Useful:

Super-fast builds enhance developer experience.

Great for projects with live previews or rapid UI changes.

🎨 UI Libraries & Design System
🧱 Material UI (MUI) 7.0.2
Prebuilt React components with accessibility and theme support.

Integrated with @emotion for CSS-in-JS styling.

🌀 Shadcn UI + Radix UI
Built on Radix primitives, ensuring accessibility-first components.

Highly customizable, developer-friendly, and visually consistent.

✅ Why Useful:

Offers enterprise-grade design and accessibility.

Combines plug-and-play components with deep customization.

🎯 Styling System
Tailwind CSS 3.4.11
Utility-first CSS framework used for rapid UI styling.

Enhanced with:

@tailwindcss/typography (for better text layouts)

tailwindcss-animate (for subtle animations)

tailwind-merge (to intelligently combine class names)

✅ Why Useful:

Speeds up custom UI development.

Enables responsive, mobile-first design out of the box.

📡 State Management & Form Handling
🧠 React Query 5.56.2
Manages server state and asynchronous data (e.g., UPI transaction history).

✍️ React Hook Form + Zod
Lightweight form management system with Zod for schema-based validation.

Resolvers make integrating with APIs or UI libraries seamless.

✅ Why Useful:

Ensures reliable, validated user inputs (critical for fintech apps).

Enables responsive, real-time UI updates for data fetching.

🌐 Routing
React Router DOM 6.26.2
Declarative, nested routing system for React apps.

✅ Why Useful:

Powers dynamic navigation for dashboards, history pages, admin views.

📊 Data Visualization
Recharts 2.12.0
Beautiful, responsive charts for tracking transactions, fraud, and usage.

✅ Why Useful:

Makes financial data easy to interpret for both users and admins.

🧩 Utility Libraries
date-fns – Fast, immutable date utilities.

react-day-picker – Intuitive calendar/date selection UI.

clsx, class-variance-authority – Smart class name merging and conditional styling.

lucide-react – Clean, modern icons.

sonner – Toast notifications with elegant animations.

✅ Why Useful:

Powers dynamic, user-friendly UIs.

Streamlines code and improves visual feedback in the app.

🧰 Developer Tooling
Type Checking & Linting
ESLint 9.9.0 with plugins for React, hooks, and HMR.

TypeScript for compile-time safety.

✅ Why Useful:

Keeps code clean, maintainable, and error-free.

📦 Package Management
Uses both npm and bun (via bun.lockb) for modern, speedy dependency installation and bundling.

🏗️ Project Architecture
csharp
Copy
Edit
📁 src/
├── components/      # Reusable UI components (cards, buttons, alerts)
├── pages/           # Route-based components (Home, Dashboard, Admin)
├── features/        # Feature-specific modules (Reversal Flow, Chatbot, Limits)
├── utils/           # Helpers, validators, constants
📁 public/            # Static assets
✅ Why Useful:

Clean separation of concerns

Scalable for enterprise-level apps

=======
# Welcome to your Lovable project

## Project info

**URL**: https://lovable.dev/projects/821e3764-8876-4eba-9eb6-ba0f1c70cd0b

## How can I edit this code?

There are several ways of editing your application.

**Use Lovable**

Simply visit the [Lovable Project](https://lovable.dev/projects/821e3764-8876-4eba-9eb6-ba0f1c70cd0b) and start prompting.

Changes made via Lovable will be committed automatically to this repo.

**Use your preferred IDE**

If you want to work locally using your own IDE, you can clone this repo and push changes. Pushed changes will also be reflected in Lovable.

The only requirement is having Node.js & npm installed - [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating)

Follow these steps:

```sh
# Step 1: Clone the repository using the project's Git URL.
git clone <YOUR_GIT_URL>

# Step 2: Navigate to the project directory.
cd <YOUR_PROJECT_NAME>

# Step 3: Install the necessary dependencies.
npm i

# Step 4: Start the development server with auto-reloading and an instant preview.
npm run dev
```

**Edit a file directly in GitHub**

- Navigate to the desired file(s).
- Click the "Edit" button (pencil icon) at the top right of the file view.
- Make your changes and commit the changes.

**Use GitHub Codespaces**

- Navigate to the main page of your repository.
- Click on the "Code" button (green button) near the top right.
- Select the "Codespaces" tab.
- Click on "New codespace" to launch a new Codespace environment.
- Edit files directly within the Codespace and commit and push your changes once you're done.

## What technologies are used for this project?

This project is built with:

- Vite
- TypeScript
- React
- shadcn-ui
- Tailwind CSS

## How can I deploy this project?

Simply open [Lovable](https://lovable.dev/projects/821e3764-8876-4eba-9eb6-ba0f1c70cd0b) and click on Share -> Publish.

## Can I connect a custom domain to my Lovable project?

Yes, you can!

To connect a domain, navigate to Project > Settings > Domains and click Connect Domain.

Read more here: [Setting up a custom domain](https://docs.lovable.dev/tips-tricks/custom-domain#step-by-step-guide)
>>>>>>> a81c19c (Use tech stack vite_react_shadcn_ts)

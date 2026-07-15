# Architecture

## System Overview

HerGuardian AI is a web-based preventive healthcare platform for women. It combines health assessments, mental wellness screening, doctor booking, testing agency support, health calendar tracking, educational resources, AI chatbot support, payments, reports, and emergency alerts.

## System Diagram

```text
User Browser
    |
    v
Next.js Frontend
    |
    |-- Home / Dashboard
    |-- Login / Signup
    |-- Assessment
    |-- Mental Wellness
    |-- Doctors
    |-- Weekly Checkup
    |-- Health Calendar
    |-- Testing Agencies
    |-- Female Health Facts
    |-- Wellness and Preventive Care
    |-- Chatbot
    |-- Support / Payments
    |
    v
Next.js API Routes
    |
    |-- Authentication APIs
    |-- Assessment APIs
    |-- Appointment APIs
    |-- Mood APIs
    |-- Payment APIs
    |-- Twilio Alert APIs
    |-- Chatbot APIs
    |
    v
External Services
    |
    |-- Neon PostgreSQL
    |-- Google OAuth
    |-- Razorpay
    |-- Twilio
    |-- OpenAI / Gemini / Puter.js-compatible AI API
```

## Model Pipeline

```text
User Input
    |
    v
Frontend Form, Calendar, Payment, or Chatbot Input
    |
    v
Client-side Validation and UX Feedback
    |
    v
Next.js API Route or Local Scoring Logic
    |
    v
Database / External API / AI Provider
    |
    v
Generated Result
    |
    v
Dashboard Update, Report, Reminder, Payment, Alert, or Recommendation
```

## Data Flow

1. User logs in or registers.
2. User completes assessments, books appointments, logs symptoms, asks chatbot questions, or makes a payment.
3. The frontend validates input and sends it to the correct API route.
4. API routes process the data and store records in PostgreSQL when `DATABASE_URL` is configured.
5. External services are called only when required:
   - Google OAuth for login
   - Twilio for OTP, SMS, and call alerts
   - Razorpay for payments
   - AI provider for chatbot responses
   - Neon PostgreSQL for persistent storage
6. The user receives results, recommendations, reports, calendar updates, reminders, or payment status.

## Local Components

- Next.js frontend pages
- React UI components
- Form validation
- Static educational content
- Local scoring and display logic
- Browser-based PDF generation where applicable
- Light/dark theme controls

## Cloud Components

- Vercel deployment
- Neon PostgreSQL database
- Google OAuth credentials
- Razorpay merchant account
- Twilio messaging and calling account
- AI API provider for chatbot responses

## Key Design Decisions

- Next.js App Router was used for both frontend routing and API routes.
- PostgreSQL was selected because health, user, appointment, report, and payment data are structured.
- Drizzle ORM was used for typed database schema management.
- Razorpay was selected because it supports Indian payment methods such as UPI, cards, QR, and net banking.
- Twilio was selected for OTP, SMS, and emergency call alerts.
- The chatbot is designed for educational health support, not medical diagnosis.
- The UI uses a healthcare-friendly layout with responsive screens, light/dark mode, and accessible controls.
- The platform encourages professional consultation when moderate or serious symptoms are reported.

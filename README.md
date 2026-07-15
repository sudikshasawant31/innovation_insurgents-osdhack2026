# HerGuardian AI

HerGuardian AI is an AI-powered preventive healthcare companion designed especially for women. It brings health assessments, mental wellness support, doctor booking, health calendar planning, testing agency access, emergency alerts, educational resources, payments, and an AI chatbot into one web platform.

The platform is designed for screening support, health education, preventive guidance, and timely awareness. It helps users understand health patterns, generate reports, and take safer next steps such as booking appointments or consulting healthcare professionals.

## Important Links

* Live Deployment Link: https://her-guardian-ai-app-updated.vercel.app/
* Demo Video Link: https://drive.google.com/file/d/1CF_Y2zPKLILmuMLfU_huGzbE6pEwGXuc/view?usp=sharing
## Features

* AI health dashboard with health score, mental wellness, activity status, reports, recommendations, and emergency access.
* Login and registration using Google login, email/password, mobile password login, and OTP-ready flows.
* Health assessments with personalized score, analysis, recommendations, and downloadable PDF reports.
* Mental wellness module with mood tracking, PHQ-9 screening, GAD-7 screening, notes, and reports.
* Doctor booking with gynecologists, general physicians, endocrinologists, cardiologists, breast specialists, bone specialists, and mental health counsellors.
* Weekly checkup module for regular health check-ins and analysis.
* Dynamic health calendar for periods, appointments, lab tests, health checkups, and reminders.
* Mumbai-focused testing agencies section for blood tests, women health panels, PCOS screening, body checkups, and home sample collection.
* Facts about female health with educational videos, articles, links, thumbnails, and Did You Know content.
* Wellness and Preventive Care with Burnout and Stress, Breast Health, and Bone Health modules.
* Chatbot for educational guidance about symptoms, periods, PCOS, tests, appointments, stress, and preventive care.
* Emergency and health alert flows with SMS, call, and email-ready integration.
* Razorpay-ready support/payment flow where users select a method, enter an amount, and proceed through UPI, cards, net banking, or QR.
* Light and dark mode support with responsive UI.

## Tech Stack and Tools

* Frontend: Next.js App Router, React, TypeScript
* Styling: Tailwind CSS, shadcn-style UI components, Lucide icons
* Animations: Framer Motion
* Charts: Recharts
* Forms and Validation: React Hook Form, Zod
* Database: PostgreSQL using Neon or another Postgres provider
* ORM: Drizzle ORM
* Authentication: Better Auth / custom auth routes
* AI Chatbot: OpenAI / Gemini / Puter.js-compatible chatbot setup
* AI Development Assistant: OpenAI Codex for planning, coding, debugging, UI improvements, README writing, and deployment guidance
* AI Content Support: ChatGPT-style assistance for health content structure, demo scripts, documentation, and project explanation
* AI Health Guidance Layer: Prompt-based chatbot flow for educational health support and safer next-step suggestions
* SMS, OTP, and Calling: Twilio
* Payments: Razorpay Checkout
* Deployment: Vercel
* Database Hosting: Neon PostgreSQL
* Version Control: GitHub

## Dependencies

Main dependencies include:

* next
* react
* react-dom
* typescript
* tailwindcss
* framer-motion
* lucide-react
* recharts
* react-hook-form
* zod
* drizzle-orm
* pg
* better-auth
* next-auth
* openai
* jspdf
* html2canvas
* axios

Install all dependencies with:

```bash
npm install
```

## Setup Instructions

### 1\. Clone the Repository

```bash
git clone https://github.com/your-username/herguardian-ai.git
cd herguardian-ai
```

### 2\. Install Dependencies

```bash
npm install


```

### 3\. Create Environment File

Create a file named `.env.local` in the root folder.

```env
DATABASE\_URL=your\_neon\_postgresql\_url

NEXT\_PUBLIC\_APP\_URL=http://localhost:3000

GOOGLE\_CLIENT\_ID=your\_google\_client\_id
GOOGLE\_CLIENT\_SECRET=your\_google\_client\_secret

TWILIO\_ACCOUNT\_SID=your\_twilio\_account\_sid
TWILIO\_AUTH\_TOKEN=your\_twilio\_auth\_token
TWILIO\_FROM\_NUMBER=your\_twilio\_number
TWILIO\_PHONE\_NUMBER=your\_twilio\_number

RAZORPAY\_KEY\_ID=your\_razorpay\_key\_id
RAZORPAY\_KEY\_SECRET=your\_razorpay\_key\_secret
NEXT\_PUBLIC\_RAZORPAY\_KEY\_ID=your\_razorpay\_key\_id

OPENAI\_API\_KEY=your\_ai\_api\_key
```

For deployment, set `NEXT\_PUBLIC\_APP\_URL` to:

```env
NEXT\_PUBLIC\_APP\_URL=https://her-guardian-ai-app-updated.vercel.app
```

### 4\. Run Locally

```bash
npm run dev
```

Open:

```text
http://localhost:3000
```

### 5\. Build for Production

```bash
npm run build
```

### 6\. Start Production Server

```bash
npm run start
```

## Database Setup

The app is designed to use PostgreSQL through Neon or another PostgreSQL provider.

1. Create a free Neon PostgreSQL project.
2. Copy the connection string.
3. Add it as `DATABASE\_URL` in `.env.local` and in Vercel Environment Variables.
4. Redeploy after adding the variable.

Example:

```env
DATABASE\_URL=postgresql://username:password@host/neondb?sslmode=require
```

The database schema includes users, sessions, assessments, mood entries, appointments, invoices, medical records, nutrition logs, chat history, emergency alerts, and related health records.


## Sample Inputs and Expected Outputs

### Health Assessment

Sample input:

```text
Sleep: 6 hours
Stress level: 7/10
Mood: Low
Activity: Moderate
Symptoms: Fatigue, anxiety, irregular periods
```

Expected output:

```text
Health score is generated.
Risk level and contributing factors are shown.
Personalized recommendations are displayed.
PDF report can be downloaded.
Professional consultation is suggested if concern is moderate or serious.
```

### Mental Wellness

Sample input:

```text
Mood score: 5/10
PHQ-9 answers: selected by user
GAD-7 answers: selected by user
Notes: Feeling stressed due to workload
```

Expected output:

```text
Mood entry is saved.
Screening score is calculated.
Severity level is displayed.
Report can be downloaded.
Professional help is recommended for serious symptoms.
```

### Doctor Booking

Sample input:

```text
Specialty: Gynecologist
Date: 20 July 2026
Reminder: Enabled
```

Expected output:

```text
Appointment booking flow opens.
Selected doctor details are shown.
Reminder information is prepared.
Calendar can reflect the appointment.
```

### Health Calendar

Sample input:

```text
Cycle length: 28 days
Period length: 5 days
Appointment date: 20 July 2026
Lab test date: 22 July 2026
```

Expected output:

```text
Calendar updates dynamically.
Period, appointment, and lab test events appear in the calendar.
Upcoming tasks are shown.
```

### Testing Agency Booking

Sample input:

```text
Test: PCOS screening
Mode: At home
Address: User-entered address
Coupon: FIRSTCHECK50
Payment method: UPI
```

Expected output:

```text
Testing request details are prepared.
Discount information is shown.
Payment flow can continue through Razorpay.
```

### Razorpay Support Payment

Sample input:

```text
Payment option: UPI apps
Amount: 250
```

Expected output:

```text
Razorpay order is created.
Checkout opens with INR 250.
User can pay using the selected supported method.
```

### Chatbot

Sample input:

```text
I have period cramps. What can I do?
```

Expected output:

```text
Educational guidance is shown.
Safe self-care suggestions are displayed.
Professional help is recommended if symptoms are severe or unusual.
```

## Documentation

Additional documentation files:

* `Innovation_Insurgents_Architecture.pdf` - system diagram, pipeline, data flow, components, and design decisions
* `Innovation_Insurgents_Technical_Report.pdf` - runtime, model usage, latency, memory, and device notes
* `Innovation_Insurgents_LocalAI_Verification.pdf` - what runs locally and what requires internet
* `Innovation_Insurgents_Evaluation.pdf` - testing method, quality results, baseline comparison, and known failures
* `Innovation_Insurgents_Privacy_and_Safety.pdf` - data handling, storage, permissions, limitations, and risks
* `Innovation_Insurgents_Attribution.pdf` - models, libraries, APIs, references, and pre-existing work


## Medical Safety

HerGuardian AI is designed to provide screening support, health education, preventive guidance, and timely awareness for women's wellbeing.

The platform focuses on:

* Helping users understand possible health patterns and risk signals.
* Encouraging early conversations with qualified healthcare professionals.
* Supporting safer next steps through reports, reminders, and appointment booking.
* Promoting preventive care, health literacy, and emergency awareness.
* Keeping medical decisions with certified doctors and healthcare providers.

When serious symptoms or red flags are detected, HerGuardian AI guides the user toward professional care, emergency support, or booking a doctor appointment through the platform.

## Deployment

The project can be deployed on Vercel.

Steps:

1. Push the project to GitHub.
2. Import the repository into Vercel.
3. Add all required environment variables.
4. Deploy the project.
5. Add the deployed URL to Google OAuth and Razorpay dashboard.

Google OAuth origin:

```text
https://her-guardian-ai-app-updated.vercel.app
```

Google OAuth redirect URI:

```text
https://her-guardian-ai-app-updated.vercel.app/api/auth/google/callback
```

Razorpay website URL:

```text
https://her-guardian-ai-app-updated.vercel.app
```

## License

Built for academic and hackathon demonstration. Further review is recommended before production healthcare use.


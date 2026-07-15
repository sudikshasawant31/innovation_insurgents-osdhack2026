# Local AI Verification

## What Runs Fully On-Device

The following parts can run in the browser without AI inference:

- UI rendering
- Navigation
- Static educational content
- Form filling
- Basic validation
- Calendar interaction
- Local score display where logic is implemented locally
- Light and dark mode
- Browser-side PDF generation where supported

## What Requires Internet Access

The following require internet access:

- Deployed website access through Vercel
- Google login
- Neon PostgreSQL database storage
- Razorpay payment
- Twilio SMS, OTP, and call alerts
- AI chatbot responses
- YouTube videos and external health article links

## Does User Data Leave the Device?

Yes, only when the user uses cloud-connected features.

Data may be sent to:

- Neon PostgreSQL for account, assessment, appointment, report, and log storage
- Twilio for OTP, SMS, and call alerts
- Razorpay for payment processing
- Google OAuth for login
- AI provider for chatbot queries, depending on configuration

## Fully Local AI Status

The current version does not include a fully local AI model.

The chatbot depends on an external AI provider such as OpenAI, Gemini, or Puter.js-compatible APIs. Static pages, forms, UI, calendar interactions, and some report generation can run locally in the browser.

## User Data and AI

Sensitive health data should be minimized before sending to an AI provider. The chatbot is intended for educational support and safer next-step suggestions, not medical diagnosis.

# Privacy and Safety

## Data Handling

The app may collect:

* Name and email
* Mobile number
* Login information
* Health assessment responses
* Mood logs
* Appointment data
* Calendar data
* Testing preferences
* Chatbot queries
* Payment metadata
* Emergency contact details

## Storage

Data can be stored in:

* Browser state or local storage where applicable
* Neon PostgreSQL database
* External service dashboards such as Twilio, Razorpay, Google OAuth, and AI provider logs depending on configuration

## Permissions

The app may use:

* Google OAuth for login
* Phone number for OTP and alerts
* Payment details through Razorpay
* Contact details for emergency alerts
* Internet access for external health resources and AI chatbot responses

## Safety Position

HerGuardian AI is designed to provide screening support, health education, preventive guidance, and timely awareness for women's wellbeing.

The platform focuses on:

* Helping users understand possible health patterns and risk signals
* Encouraging early conversations with qualified healthcare professionals
* Supporting safer next steps through reports, reminders, and appointment booking
* Promoting preventive care, health literacy, and emergency awareness
* Keeping medical decisions with certified doctors and healthcare providers

When serious symptoms or red flags are detected, HerGuardian AI guides the user toward professional care, emergency support, or booking a doctor appointment through the platform.

## Potential Risks

* User may enter incorrect or incomplete health data.
* AI chatbot may misunderstand vague input.
* External API failure may interrupt OTP, payment, chatbot, or alert flows.
* Generated reports are supportive and should be reviewed by professionals.
* Sensitive data must be protected using secure database and environment variable practices.

## Security Practices

* Environment variables are used for API keys.
* Secrets should not be committed to GitHub.
* Database URL should be protected.
* API keys should be rotated if exposed.
* Production deployment should use HTTPS.
* Payment processing is handled by Razorpay.
* OTP and alert delivery are handled by Twilio.

## Limitations

HerGuardian AI is a preventive support and education platform. It does not replace certified healthcare professionals, emergency services, or clinical judgement as of now.


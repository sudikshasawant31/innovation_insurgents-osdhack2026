# Evaluation

## Evaluation Method

The project was evaluated using functional testing and user-flow testing.

Tested flows include:

- Login and registration
- Dashboard navigation
- Health assessment
- Mental wellness screening
- Mood tracking
- Doctor search
- Appointment booking UI
- Weekly checkup
- Health calendar updates
- Testing agency selection
- Razorpay payment flow
- Female health facts section
- Wellness and preventive care modules
- Chatbot interaction
- Emergency alert flow
- PDF report generation

## Quality Results

| Feature | Status |
|---|---|
| Login UI | Working |
| Google OAuth setup | Requires valid credentials |
| OTP flow | Requires Twilio configuration |
| Dashboard | Working |
| Assessment forms | Working |
| Mental wellness screening | Working |
| Mood tracking | Working |
| PDF reports | Working |
| Doctor cards | Working |
| Appointment booking UI | Working |
| Health calendar | Working |
| Testing agency UI | Working |
| Razorpay checkout | Requires approved Razorpay domain and valid keys |
| Chatbot | Requires AI API configuration |
| Database | Requires Neon `DATABASE_URL` and schema setup |
| Twilio alerts | Requires valid Twilio credentials |

## Benchmark Method

The project was checked through manual benchmark flows:

1. Start the app locally.
2. Navigate through each primary tab.
3. Submit sample form inputs.
4. Confirm UI output and generated recommendations.
5. Test report download buttons.
6. Test payment initiation with configured Razorpay keys.
7. Confirm fallback messages when API keys are missing.

## Baseline Comparison

Most baseline health apps focus on one area:

- Period tracking only
- Appointment booking only
- Mental wellness only
- Lab booking only
- Chatbot only

HerGuardian AI combines preventive health, mental wellness, doctor access, testing agencies, emergency support, payments, reports, calendar planning, and education in one platform.

## Known Failure Cases

- Payment may fail if Razorpay has not approved the deployed domain.
- Google login fails if OAuth credentials or redirect URI are incorrect.
- Database saving fails if Neon connection string or tables are missing.
- Twilio OTP/call fails if credentials are invalid, trial limits are reached, or destination numbers are not verified.
- Chatbot will not respond if the AI API key is missing, invalid, or out of quota.
- AI chatbot may give incomplete responses if user input is vague.
- Browser PDF generation may be slower on low-memory devices.
- The platform should not be used as a replacement for professional medical care.

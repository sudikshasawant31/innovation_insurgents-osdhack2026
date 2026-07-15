# Technical Report

## Project Name

HerGuardian AI

## Model and Runtime Used

The application does not bundle a custom local machine learning model.

The chatbot can be connected to:

- OpenAI-compatible API
- Gemini API
- Puter.js-compatible AI chat API

Runtime:

- Next.js server runtime
- Browser runtime for frontend interaction
- External cloud AI runtime for chatbot responses

## Quantization or Optimization Techniques

No custom quantization was applied because no local model is bundled with the project.

Application optimizations include:

- Next.js production build optimization
- Static rendering where possible
- Component-based rendering
- API route separation
- Lightweight chart rendering with Recharts
- External API calls only when required
- Browser-based PDF generation only when the user requests a report

## Model Size

No local AI model is included in the repository.

AI model size depends on the external provider selected, such as OpenAI, Gemini, or Puter.js-supported models.

## Inference Latency

Chatbot latency depends on:

- Internet speed
- External AI provider response time
- Selected model
- Server region
- Prompt length

Estimated practical latency:

```text
Local form-based assessment: under 1 second
Calendar and local UI updates: under 1 second
PDF generation: 1-3 seconds depending on browser and report size
Chatbot response: 1-5 seconds depending on provider and network
Payment order creation: 1-3 seconds depending on Razorpay response
```

## CPU, GPU, and NPU Usage

The application does not require local GPU or NPU acceleration.

Expected usage:

- CPU: Browser rendering, form validation, scoring logic, PDF generation, and JavaScript execution
- GPU: Browser rendering and animation acceleration only
- NPU: Not used
- Cloud AI inference: handled by external AI provider

## Peak Memory Usage

Approximate browser memory usage:

```text
Normal dashboard usage: 150-300 MB
Charts and wellness pages: 250-500 MB
PDF generation: 300-700 MB depending on report size
```

Actual usage depends on browser, device, number of open tabs, and report size.

## Tested Device Specifications

Example tested environment:

```text
Operating system: Windows
Browser: Chrome / Edge
Runtime: Node.js
Deployment: Vercel
Database: Neon PostgreSQL
Network: Wi-Fi / broadband
```

Recommended device:

```text
RAM: 4 GB or higher
Browser: Latest Chrome, Edge, Firefox, or Safari
Internet: Required for cloud services
```

## Additional Technical Details

Main technologies:

- Next.js
- React
- TypeScript
- Tailwind CSS
- Drizzle ORM
- PostgreSQL
- Razorpay
- Twilio
- Google OAuth
- Recharts
- Zod
- React Hook Form
- jsPDF / html2canvas

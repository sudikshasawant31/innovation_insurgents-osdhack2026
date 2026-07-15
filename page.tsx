'use client'

import { useMemo, useState } from 'react'
import { Navbar } from '@/components/navbar'
import { Bot, Loader, Send, ShieldAlert, UserRound } from 'lucide-react'

declare global {
  interface Window {
    puter?: {
      ai?: {
        chat?: (prompt: string, options?: { model?: string }) => Promise<string>
      }
    }
  }
}

type Message = {
  role: 'user' | 'assistant'
  text: string
}

const quickPrompts = [
  'I have period cramps. What can I do?',
  'What tests are useful for PCOS screening?',
  'How do I prepare for a blood test?',
  'Can stress delay periods?',
]

function fallbackAnswer(input: string) {
  return `I can help you think through this safely. For "${input}", track when it started, severity, related symptoms, cycle date, medicines, and any triggers. If symptoms are severe, new, worsening, or include fainting, heavy bleeding, chest pain, high fever, self-harm thoughts, or severe abdominal pain, contact a doctor or emergency service now. For non-urgent concerns, I can help you prepare questions for your gynecologist or choose a relevant checkup.`
}

function loadPuter() {
  return new Promise<void>((resolve, reject) => {
    if (typeof window === 'undefined') {
      reject(new Error('Browser only'))
      return
    }
    if (window.puter?.ai?.chat) {
      resolve()
      return
    }
    const existing = document.querySelector<HTMLScriptElement>('script[data-puter]')
    if (existing) {
      existing.addEventListener('load', () => resolve(), { once: true })
      existing.addEventListener('error', () => reject(new Error('Puter failed to load')), { once: true })
      return
    }
    const script = document.createElement('script')
    script.src = 'https://js.puter.com/v2/'
    script.async = true
    script.dataset.puter = 'true'
    script.onload = () => resolve()
    script.onerror = () => reject(new Error('Puter failed to load'))
    document.body.appendChild(script)
  })
}

export default function ChatbotPage() {
  const [input, setInput] = useState('')
  const [loading, setLoading] = useState(false)
  const [messages, setMessages] = useState<Message[]>([
    { role: 'assistant', text: 'Hi, I am HerGuardian Chat. Ask me any women health, testing, appointment, mental wellness, period, PCOS, or preventive care question.' },
  ])
  const canSend = useMemo(() => input.trim().length > 0 && !loading, [input, loading])

  const send = async (text = input) => {
    const clean = text.trim()
    if (!clean || loading) return
    const nextMessages: Message[] = [...messages, { role: 'user', text: clean }]
    setMessages(nextMessages)
    setInput('')
    setLoading(true)

    try {
      await loadPuter()
      const healthPrompt = `You are HerGuardian AI, a careful women's health education assistant. Do not diagnose. Give helpful, concise guidance and mention urgent red flags when needed.\n\nUser: ${clean}`
      const answer = await window.puter?.ai?.chat?.(healthPrompt, { model: 'gpt-5.4-nano' })
      if (answer) {
        setMessages([...nextMessages, { role: 'assistant', text: String(answer) }])
        return
      }
      throw new Error('No Puter response')
    } catch {
      try {
        const response = await fetch('/api/health-chatbot', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ messages: nextMessages.map((message) => ({ role: message.role, content: message.text })) }),
        })
        const data = await response.json()
        setMessages([...nextMessages, { role: 'assistant', text: data.answer || fallbackAnswer(clean) }])
      } catch {
        setMessages([...nextMessages, { role: 'assistant', text: fallbackAnswer(clean) }])
      }
    } finally {
      setLoading(false)
    }
  }

  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <section className="mx-auto flex max-w-5xl flex-col px-4 pb-8 pt-24">
        <div className="mb-5">
          <p className="text-sm font-semibold uppercase tracking-wide text-primary">Health chatbot</p>
          <h1 className="mt-2 text-4xl font-bold">Ask HerGuardian</h1>
          <p className="mt-2 text-muted-foreground">Uses Puter.js in the browser first, then falls back to your server AI route.</p>
        </div>

        <div className="mb-4 rounded-xl border border-yellow-500/30 bg-yellow-500/10 p-4 text-sm">
          <ShieldAlert className="mr-2 inline h-4 w-4 text-yellow-700" />
          This chatbot provides general health information, not diagnosis. For serious symptoms, contact a doctor or emergency service.
        </div>

        <div className="mb-4 flex flex-wrap gap-2">
          {quickPrompts.map((prompt) => (
            <button key={prompt} onClick={() => send(prompt)} className="rounded-full border border-border bg-card px-4 py-2 text-sm font-medium hover:border-primary">
              {prompt}
            </button>
          ))}
        </div>

        <div className="flex min-h-[560px] flex-col rounded-xl border border-border bg-card">
          <div className="flex-1 space-y-4 overflow-y-auto p-4">
            {messages.map((message, index) => (
              <div key={index} className={`flex gap-3 ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                {message.role === 'assistant' && <div className="flex h-9 w-9 items-center justify-center rounded-full bg-primary text-primary-foreground"><Bot className="h-5 w-5" /></div>}
                <div className={`max-w-[80%] whitespace-pre-wrap rounded-xl px-4 py-3 text-sm ${message.role === 'user' ? 'bg-primary text-primary-foreground' : 'bg-background'}`}>
                  {message.text}
                </div>
                {message.role === 'user' && <div className="flex h-9 w-9 items-center justify-center rounded-full bg-muted"><UserRound className="h-5 w-5" /></div>}
              </div>
            ))}
            {loading && <div className="flex items-center gap-2 text-sm text-muted-foreground"><Loader className="h-4 w-4 animate-spin" />HerGuardian is thinking...</div>}
          </div>
          <div className="border-t border-border p-4">
            <div className="flex gap-2">
              <input
                value={input}
                onChange={(event) => setInput(event.target.value)}
                onKeyDown={(event) => {
                  if (event.key === 'Enter') send()
                }}
                placeholder="Ask anything about symptoms, tests, periods, PCOS, mental wellness..."
                className="flex-1 rounded-lg border border-border bg-background px-4 py-3 outline-none focus:border-primary"
              />
              <button onClick={() => send()} disabled={!canSend} className="rounded-lg bg-primary px-4 text-primary-foreground disabled:opacity-50">
                {loading ? <Loader className="h-5 w-5 animate-spin" /> : <Send className="h-5 w-5" />}
              </button>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

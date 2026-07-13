'use client'

import { useState } from 'react'
import { Navbar } from '@/components/navbar'
import { BadgePercent, Building2, CheckCircle2, FlaskConical, Home, MapPin, Phone, X } from 'lucide-react'

const agencies = [
  { name: 'Suburban Diagnostics', area: 'Andheri, Bandra, Borivali', services: ['Blood tests', 'Women health panel', 'Full body checkup'], offer: 'FIRSTCHECK50 accepted' },
  { name: 'Metropolis Healthcare', area: 'Dadar, Thane, Navi Mumbai', services: ['PCOS profile', 'Thyroid profile', 'Vitamin testing'], offer: 'Free home sample pickup on partner plans' },
  { name: 'Healthians Mumbai', area: 'Home collection across Mumbai', services: ['Full body checkup', 'Anemia profile', 'Diabetes screening'], offer: '20% off first booking' },
  { name: 'SRL Diagnostics', area: 'Chembur, Goregaon, Powai', services: ['Hormone tests', 'CBC', 'Preventive packages'], offer: 'Women wellness bundle available' },
  { name: 'Apollo Diagnostics', area: 'Malad, Ghatkopar, Vashi', services: ['Blood test', 'Body checkup', 'Pregnancy panels'], offer: 'Priority slot support' },
  { name: 'Thyrocare', area: 'Mumbai home collection', services: ['Thyroid', 'Lipid profile', 'Full body checkup'], offer: 'Budget health packages' },
]

const testTypes = ['CBC blood test', 'PCOS profile', 'Thyroid profile', 'Vitamin D and B12', 'Full body checkup', 'Anemia profile', 'Hormone panel', 'Diabetes screening']
const paymentModes = ['UPI', 'Net banking', 'Debit/Credit card', 'Pay at centre', 'Cash on home collection']

export default function TestingAgenciesPage() {
  const [agency, setAgency] = useState<any | null>(null)
  const [testType, setTestType] = useState(testTypes[0])
  const [date, setDate] = useState('')
  const [time, setTime] = useState('09:00')
  const [mode, setMode] = useState<'At home' | 'At centre'>('At home')
  const [payment, setPayment] = useState(paymentModes[0])
  const [coupon, setCoupon] = useState('FIRSTCHECK50')
  const [address, setAddress] = useState('')
  const [saved, setSaved] = useState('')

  const bookTest = () => {
    if (!agency || !date || (mode === 'At home' && !address.trim())) return
    const booking = {
      id: crypto.randomUUID(),
      agency: agency.name,
      testType,
      date,
      time,
      mode,
      payment,
      coupon,
      address: mode === 'At home' ? address : agency.area,
      createdAt: new Date().toISOString(),
    }
    const bookings = JSON.parse(localStorage.getItem('herguardian.testBookings') || '[]')
    localStorage.setItem('herguardian.testBookings', JSON.stringify([booking, ...bookings]))
    setSaved(`${testType} booked with ${agency.name} on ${date}. It is now visible on Health Calendar.`)
    setAgency(null)
  }

  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <section className="mx-auto max-w-7xl px-4 pb-16 pt-28">
        <div className="mb-8">
          <p className="text-sm font-semibold uppercase tracking-wide text-primary">Mumbai partners</p>
          <h1 className="mt-2 text-4xl font-bold">Book blood tests and health checkups online</h1>
          <p className="mt-3 max-w-3xl text-muted-foreground">Select a test, coupon, date, payment mode, and home or centre collection.</p>
        </div>

        <div className="mb-8 grid gap-4 md:grid-cols-3">
          {[
            ['Blood tests', 'CBC, thyroid, vitamin D, iron, sugar, lipid profile'],
            ['Women health panels', 'PCOS, menstrual health, hormone and anemia packages'],
            ['Body checkups', 'Full body, preventive, heart, kidney and liver packages'],
          ].map(([title, detail]) => (
            <div key={title} className="rounded-xl border border-border bg-card p-5">
              <FlaskConical className="mb-3 h-6 w-6 text-accent" />
              <h2 className="font-bold">{title}</h2>
              <p className="mt-2 text-sm text-muted-foreground">{detail}</p>
            </div>
          ))}
        </div>

        {saved && <div className="mb-5 rounded-lg bg-accent/10 p-4 text-sm text-accent">{saved}</div>}

        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {agencies.map((item) => (
            <article key={item.name} className="rounded-xl border border-border bg-card p-5">
              <div className="mb-4 flex items-start justify-between gap-3">
                <div>
                  <h2 className="text-xl font-bold">{item.name}</h2>
                  <p className="mt-1 flex items-center gap-1 text-sm text-muted-foreground"><MapPin className="h-4 w-4" />{item.area}</p>
                </div>
                <Building2 className="h-6 w-6 text-primary" />
              </div>
              <div className="space-y-2">
                {item.services.map((service) => <p key={service} className="flex items-center gap-2 text-sm"><CheckCircle2 className="h-4 w-4 text-accent" />{service}</p>)}
              </div>
              <div className="mt-4 rounded-lg bg-secondary/10 p-3 text-sm text-secondary">
                <BadgePercent className="mr-2 inline h-4 w-4" />{item.offer}
              </div>
              <button onClick={() => setAgency(item)} className="mt-4 flex w-full items-center justify-center gap-2 rounded-lg bg-primary px-4 py-3 font-semibold text-primary-foreground">
                <Phone className="h-4 w-4" />Book test
              </button>
            </article>
          ))}
        </div>
      </section>

      {agency && (
        <div className="fixed inset-0 z-[80] flex items-center justify-center bg-black/50 p-4">
          <div className="max-h-[90vh] w-full max-w-2xl overflow-auto rounded-xl border border-border bg-card p-6">
            <div className="mb-5 flex items-start justify-between">
              <div>
                <h2 className="text-2xl font-bold">Book test online</h2>
                <p className="text-sm text-muted-foreground">{agency.name} - {agency.area}</p>
              </div>
              <button onClick={() => setAgency(null)} className="rounded-lg p-2 hover:bg-muted"><X className="h-5 w-5" /></button>
            </div>
            <div className="grid gap-4 md:grid-cols-2">
              <Field label="Type of test"><select value={testType} onChange={(event) => setTestType(event.target.value)} className="input">{testTypes.map((item) => <option key={item}>{item}</option>)}</select></Field>
              <Field label="Date of testing"><input type="date" value={date} onChange={(event) => setDate(event.target.value)} className="input" /></Field>
              <Field label="Time"><input type="time" value={time} onChange={(event) => setTime(event.target.value)} className="input" /></Field>
              <Field label="Payment mode"><select value={payment} onChange={(event) => setPayment(event.target.value)} className="input">{paymentModes.map((item) => <option key={item}>{item}</option>)}</select></Field>
              <Field label="Coupon / discount code"><input value={coupon} onChange={(event) => setCoupon(event.target.value)} className="input" /></Field>
              <Field label="Mode of testing"><select value={mode} onChange={(event) => setMode(event.target.value as 'At home' | 'At centre')} className="input"><option>At home</option><option>At centre</option></select></Field>
            </div>
            {mode === 'At home' && (
              <label className="mt-4 block">
                <span className="mb-2 flex items-center gap-2 text-sm font-medium"><Home className="h-4 w-4" />Home address</span>
                <textarea value={address} onChange={(event) => setAddress(event.target.value)} rows={3} className="input" placeholder="Flat, building, street, area, city, pincode" />
              </label>
            )}
            <div className="mt-5 rounded-lg bg-primary/10 p-3 text-sm text-primary">
              Payment selection is saved. Connect Razorpay keys to collect live UPI/net banking/card payments.
            </div>
            <button onClick={bookTest} disabled={!date || (mode === 'At home' && !address.trim())} className="mt-5 w-full rounded-lg bg-primary px-4 py-3 font-semibold text-primary-foreground disabled:opacity-50">
              Confirm test booking
            </button>
          </div>
        </div>
      )}
    </main>
  )
}

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return <label className="block"><span className="mb-2 block text-sm font-medium">{label}</span>{children}</label>
}

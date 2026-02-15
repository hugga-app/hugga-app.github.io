import React from 'react'
import { createRoot } from 'react-dom/client'
import './styles.css'

const faqItems = [
  {
    q: 'Is Hugga a delivery app integration?',
    a: 'No. Hugga is a hospitality layer built specifically for short-stay breakfast services.',
  },
  {
    q: 'What do guests pay?',
    a: 'Guests pay €15 per person per night for breakfast.',
  },
  {
    q: 'How are providers paid?',
    a: 'Providers receive €11 per person per night served. Hugga keeps €4 as marketplace agent fee.',
  },
  {
    q: 'How are assignments decided?',
    a: 'Assignments are reputation-weighted with controlled randomness to preserve fairness and avoid monopoly dynamics.',
  },
]

function App() {
  return (
    <>
      <header className="topbar">
        <div className="container nav">
          <a href="#home" className="logo">Hugga</a>
          <nav>
            <a href="#how">How It Works</a>
            <a href="#trust">Trust</a>
            <a href="#hosts">Hosts</a>
            <a href="#providers">Providers</a>
            <a href="#faq">FAQ</a>
          </nav>
          <a className="btn" href="#contact">Start a Conversation</a>
        </div>
      </header>

      <main id="home">
        <section className="hero container card">
          <p className="kicker">Quiet infrastructure for hospitality</p>
          <h1>Better guest mornings, built on trust.</h1>
          <p className="lead">
            Hugga connects Airbnb hosts with vetted local breakfast providers through a reputation-first
            system designed for calm, reliable operations.
          </p>
          <div className="actions">
            <a className="btn" href="#hosts">I&apos;m a Host</a>
            <a className="btn ghost" href="#providers">I&apos;m a Provider</a>
          </div>
          <ul className="chips">
            <li>Vetted local providers</li>
            <li>Reputation-weighted assignment</li>
            <li>Structured and compliant operations</li>
          </ul>
        </section>

        <section id="how" className="container block">
          <h2>How It Works</h2>
          <div className="grid three">
            <article className="card"><h3>1. Guest choice</h3><p>Guests add breakfast at €15 per person per night.</p></article>
            <article className="card"><h3>2. Smart assignment</h3><p>Hugga assigns a vetted provider through a fair, reputation-weighted system.</p></article>
            <article className="card"><h3>3. Local fulfillment</h3><p>Providers fulfill breakfast. Providers receive €11, Hugga keeps €4, hosts earn Hugga Credits.</p></article>
          </div>
        </section>

        <section id="hosts" className="container block">
          <h2>For Hosts</h2>
          <p className="lead">Add premium breakfast to your stay without adding operational chaos.</p>
          <div className="card">
            <ul>
              <li>Differentiate your listing with a thoughtful morning experience.</li>
              <li>Offer breakfast through vetted local partners.</li>
              <li>Keep operations structured, calm, and accountable.</li>
            </ul>
            <a className="btn" href="#contact">Talk to Hugga (Hosts)</a>
          </div>
        </section>

        <section id="providers" className="container block">
          <h2>For Providers</h2>
          <p className="lead">Predictable demand in a framework that respects reliability and craft.</p>
          <div className="card">
            <ul>
              <li>Access hospitality-focused local demand.</li>
              <li>Get rewarded for consistency, not discounting.</li>
              <li>Build reputation equity over time with fair distribution controls.</li>
            </ul>
            <a className="btn" href="#contact">Apply as a Provider</a>
          </div>
        </section>

        <section id="trust" className="container block">
          <h2>Reputation & Trust</h2>
          <div className="grid two">
            <article className="card"><h3>Vetting</h3><p>Only approved providers are activated.</p></article>
            <article className="card"><h3>Reliability</h3><p>Service outcomes influence future assignment weight.</p></article>
            <article className="card"><h3>Fairness</h3><p>Controlled randomness prevents concentration and keeps distribution healthy.</p></article>
            <article className="card"><h3>Accountability</h3><p>Clear issue handling, standards, and remediation loops.</p></article>
          </div>
        </section>

        <section className="container block">
          <h2>Why not generic delivery platforms?</h2>
          <div className="card">
            <p>Because short-stay hospitality needs repeated trust, not one-off transaction speed.</p>
            <ul>
              <li>Curation over open listing</li>
              <li>Reputation over speed-only matching</li>
              <li>Hospitality context over random meal dispatch</li>
            </ul>
          </div>
        </section>

        <section id="faq" className="container block">
          <h2>FAQ</h2>
          <div className="grid two">
            {faqItems.map((item) => (
              <article className="card" key={item.q}>
                <h3>{item.q}</h3>
                <p>{item.a}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="legal" className="container block">
          <h2>Legal clarity</h2>
          <p className="card">
            Hugga acts as a marketplace agent connecting guests, hosts, and independent licensed breakfast
            providers. Providers remain responsible for food production, food safety, and regulatory compliance.
          </p>
        </section>

        <section id="contact" className="container block card center">
          <h2>If you care about better mornings, let&apos;s talk.</h2>
          <p>We are building city by city with disciplined quality standards.</p>
          <div className="actions center">
            <a className="btn" href="mailto:hello@hugga.example">Start a Conversation</a>
          </div>
        </section>
      </main>
    </>
  )
}

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)

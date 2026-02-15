import React from 'react'
import { createRoot } from 'react-dom/client'
import './styles.css'

const heroOptions = [
  {
    title: 'A trusted breakfast layer for modern hospitality.',
    body: 'Hugga connects Airbnb hosts with vetted local breakfast providers through a reputation-first system designed for calm, reliable operations.',
  },
  {
    title: 'Elevate your listing with mornings guests remember.',
    body: 'Offer trusted local breakfast without managing delivery chaos. Hugga handles the structure, so you keep the hospitality.',
  },
  {
    title: 'Your craft, matched with the right stays.',
    body: 'Hugga gives vetted breakfast providers predictable, reputation-driven demand from hosts who value quality and reliability.',
  },
]

const taglines = [
  'Breakfast, with reputation built in.',
  'Quiet infrastructure for better mornings.',
  'Trusted local breakfast for thoughtful hosts.',
  'Hospitality, structured. Morning, elevated.',
  'Where reliable hosts meet reliable breakfast.',
  'A calmer way to serve the morning.',
  'Craft breakfast, delivered through trust.',
  'The reputation layer for short-stay hospitality.',
  'Local breakfast. Systemic trust.',
  'Premium mornings, without the operational noise.',
]

const faqItems = [
  ['Is Hugga a delivery app integration?', 'No. Hugga is a dedicated hospitality layer built specifically for short-stay breakfast services.'],
  ['Do hosts manage provider logistics?', 'No. Hugga handles provider assignment and coordination standards.'],
  ['How do hosts earn from Hugga?', 'Hosts receive Hugga Credits for completed services, designed to be reinvested in guest experience.'],
  ['What do guests pay?', 'Guests pay €15 per person per night for breakfast.'],
  ['How are providers paid?', 'Providers receive €11 per person per night served.'],
  ['How are assignments decided?', 'Assignments are reputation-weighted with controlled randomness to preserve fairness.'],
]

const sitemapItems = ['Home', 'Hosts', 'Providers', 'How It Works', 'Reputation & Trust', 'FAQ', 'Legal & Compliance', 'Contact']

function SectionTitle({ eyebrow, title, subtitle }) {
  return (
    <div className="section-title">
      {eyebrow ? <p className="kicker">{eyebrow}</p> : null}
      <h2>{title}</h2>
      {subtitle ? <p className="lead">{subtitle}</p> : null}
    </div>
  )
}

function App() {
  return (
    <>
      <header className="topbar">
        <div className="container nav">
          <a href="#home" className="logo">Hugga</a>
          <nav>
            <a href="#how">How It Works</a>
            <a href="#hosts">Hosts</a>
            <a href="#providers">Providers</a>
            <a href="#trust">Trust</a>
            <a href="#faq">FAQ</a>
          </nav>
          <a className="btn" href="#contact">Start a Conversation</a>
        </div>
      </header>

      <main id="home">
        <section className="hero container card">
          <p className="kicker">Quiet infrastructure for hospitality</p>
          <h1>Better guest mornings, built on trust.</h1>
          <p className="lead">Hugga is a curated hospitality layer connecting Airbnb hosts with vetted local breakfast providers. Built on reputation, designed for reliability.</p>
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

        <section className="container block" id="sitemap">
          <SectionTitle eyebrow="Structure" title="Sitemap" />
          <ul className="tagline-list card">{sitemapItems.map((item) => <li key={item}>{item}</li>)}</ul>
        </section>

        <section className="container block" id="pitch">
          <SectionTitle eyebrow="Pitch" title="One paragraph" />
          <article className="card">
            <p>Hugga is a curated hospitality layer that helps Airbnb hosts offer trusted local breakfast through vetted providers. Guests add breakfast for €15 per person per night, providers receive €11, and Hugga keeps €4 as the marketplace agent fee. Hosts earn Hugga Credits, not cash, so incentives stay aligned with guest experience. The system is reputation-first: reliable providers get priority access while assignment remains fair through controlled randomness.</p>
          </article>
          <article className="card mt12">
            <h3>30-second script</h3>
            <p>Most short-stay guests want a better morning, but hosts don’t want food logistics chaos. Hugga solves this with a quiet infrastructure layer: vetted local breakfast providers, integrated into the hosting experience. Guests pay €15 per person per night, providers receive €11, and Hugga operates as the marketplace agent. Hosts receive Hugga Credits to reinvest in hospitality.</p>
          </article>
        </section>

        <section id="how" className="container block">
          <SectionTitle title="How It Works" subtitle="Three steps. One reliable system." />
          <div className="grid three">
            <article className="card"><h3>1. Guest choice</h3><p>Guests add breakfast at €15 per person per night.</p></article>
            <article className="card"><h3>2. Smart assignment</h3><p>Hugga assigns a vetted provider using reputation-weighted logic with controlled randomness.</p></article>
            <article className="card"><h3>3. Settlement</h3><p>Providers receive €11, Hugga keeps €4 as marketplace agent fee, hosts receive Hugga Credits.</p></article>
          </div>
        </section>

        <section id="hosts" className="container block">
          <SectionTitle title="For Hosts" subtitle="Add premium breakfast to your stay—without adding chaos." />
          <div className="grid two">
            <article className="card">
              <h3>Why hosts choose Hugga</h3>
              <ul>
                <li>Differentiate your listing with a thoughtful morning experience.</li>
                <li>Offer breakfast through vetted local partners.</li>
                <li>Avoid open-network delivery unpredictability.</li>
                <li>Keep operations structured and calm.</li>
              </ul>
            </article>
            <article className="card">
              <h3>Host flow</h3>
              <ol>
                <li>Enable Hugga breakfast for eligible stays.</li>
                <li>Guests opt in at €15 per person per night.</li>
                <li>Hugga assigns a vetted provider.</li>
                <li>You receive Hugga Credits for completed service.</li>
              </ol>
              <a className="btn mt12" href="#contact">Talk to Hugga (Hosts)</a>
            </article>
          </div>
        </section>

        <section id="providers" className="container block">
          <SectionTitle title="For Providers" subtitle="Predictable demand. Professional framework." />
          <div className="grid two">
            <article className="card">
              <h3>Why providers choose Hugga</h3>
              <ul>
                <li>Access recurring local demand from hospitality-focused hosts.</li>
                <li>Be rewarded for consistency, not aggressive discounting.</li>
                <li>Build long-term reputation equity.</li>
              </ul>
            </article>
            <article className="card">
              <h3>Provider flow</h3>
              <ol>
                <li>Apply and complete Hugga vetting.</li>
                <li>Get activated in your local service zone.</li>
                <li>Receive fair, reputation-weighted assignments.</li>
                <li>Receive €11 per guest per night served.</li>
              </ol>
              <a className="btn mt12" href="#contact">Apply as a Provider</a>
            </article>
          </div>
        </section>

        <section id="trust" className="container block">
          <SectionTitle title="Reputation & Trust" subtitle="Trust is not a slogan. It is the system." />
          <div className="grid two">
            <article className="card"><h3>Vetting</h3><p>Only approved providers are activated.</p></article>
            <article className="card"><h3>Reliability signals</h3><p>Outcomes influence future assignment weight.</p></article>
            <article className="card"><h3>Fairness controls</h3><p>Distribution logic prevents concentration risk.</p></article>
            <article className="card"><h3>Accountability</h3><p>Clear issue handling and remediation process.</p></article>
          </div>
        </section>

        <section className="container block">
          <SectionTitle title="Why not generic delivery platforms?" />
          <article className="card">
            <p>Because short-stay hospitality needs a different operating model.</p>
            <ul>
              <li>Curation vs. open listing</li>
              <li>Reputation vs. speed-only matching</li>
              <li>Hospitality context vs. one-off orders</li>
              <li>Structured coordination vs. reactive dispatch</li>
            </ul>
          </article>
        </section>

        <section className="container block" id="heroes">
          <SectionTitle title="Hero options" subtitle="Alternative lead narratives from the source copy." />
          <div className="grid three">
            {heroOptions.map((hero) => (
              <article className="card" key={hero.title}><h3>{hero.title}</h3><p>{hero.body}</p></article>
            ))}
          </div>
        </section>

        <section className="container block" id="taglines">
          <SectionTitle title="Taglines" />
          <ul className="tagline-list card">{taglines.map((tagline) => <li key={tagline}>{tagline}</li>)}</ul>
        </section>

        <section className="container block" id="microcopy">
          <SectionTitle title="CTA and Microcopy" subtitle="UI labels and calls-to-action from the content blueprint." />
          <div className="grid two">
            <article className="card">
              <h3>High-intent CTAs</h3>
              <ul>
                <li>Start a Conversation</li>
                <li>Talk to Hugga</li>
                <li>Apply as a Provider</li>
                <li>Start Host Onboarding</li>
              </ul>
            </article>
            <article className="card">
              <h3>Trust labels</h3>
              <ul>
                <li>Vetted Provider</li>
                <li>Reputation-weighted Assignment</li>
                <li>Licensed &amp; Accountable</li>
                <li>Hospitality-Specific Network</li>
              </ul>
            </article>
          </div>
        </section>

        <section id="faq" className="container block">
          <SectionTitle title="FAQ" />
          <div className="grid two">
            {faqItems.map(([q, a]) => (
              <article className="card" key={q}><h3>{q}</h3><p>{a}</p></article>
            ))}
          </div>
        </section>

        <section id="legal" className="container block">
          <SectionTitle title="Legal and operational clarity" />
          <p className="card">Hugga acts as a marketplace agent connecting guests, hosts, and independent licensed breakfast providers. Providers are responsible for food production, safety, and regulatory compliance.</p>
        </section>

        <section id="contact" className="container block card center">
          <h2>If you care about better mornings, let&apos;s talk.</h2>
          <p>Whether you host stays or craft breakfast, Hugga is built for people who value reliability and calm operations.</p>
          <div className="actions center">
            <a className="btn" href="mailto:hello@hugga.example">Start a Conversation</a>
            <a className="btn ghost" href="#faq">Read FAQ</a>
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

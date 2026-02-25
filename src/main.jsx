import React from 'react'
import { createRoot } from 'react-dom/client'
import './styles.css'

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

const trustSignals = [
  { icon: '✓', title: 'Vetting', body: 'Only approved providers are activated.' },
  { icon: '⭐', title: 'Reliability signals', body: 'Outcomes influence future assignment weight.' },
  { icon: '⚖️', title: 'Fairness controls', body: 'Distribution logic prevents concentration risk.' },
  { icon: '🛡️', title: 'Accountability', body: 'Clear issue handling and remediation process.' },
]

const howItWorksSteps = [
  { icon: '🍽️', step: '1. Guest choice', body: 'Guests add breakfast at €15 per person per night.' },
  { icon: '🤖', step: '2. Smart assignment', body: 'Hugga assigns a vetted provider using reputation-weighted logic with controlled randomness.' },
  { icon: '💳', step: '3. Settlement', body: 'Providers receive €11, Hugga keeps €4 as marketplace agent fee, hosts receive Hugga Credits.' },
]

function SectionTitle({ eyebrow, title, subtitle, icon }) {
  return (
    <div className="section-title">
      {icon && <div style={{ fontSize: '2.4rem', marginBottom: '12px' }}>{icon}</div>}
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
          <div style={{ fontSize: '3.5rem', marginBottom: '24px' }}>☕</div>
          <p className="kicker">Quiet infrastructure for hospitality</p>
          <h1>Better guest mornings, built on trust.</h1>
          <p className="lead">
            Hugga is a curated hospitality layer connecting Airbnb hosts with vetted local breakfast providers. Built on reputation, designed for reliability.
          </p>
          <div className="actions">
            <a className="btn" href="#hosts">I&apos;m a Host</a>
            <a className="btn ghost" href="#providers">I&apos;m a Provider</a>
          </div>
          <ul className="chips">
            <li>🌟 Vetted local providers</li>
            <li>⚖️ Reputation-weighted assignment</li>
            <li>💼 Structured and compliant operations</li>
          </ul>
        </section>

        <section className="container block" id="pitch">
          <SectionTitle eyebrow="About" title="What is Hugga?" subtitle="We solve the breakfast problem for short-term rentals." />
          <article className="card">
            <p>
              Hugga is a curated hospitality layer that helps Airbnb hosts offer trusted local breakfast through vetted providers. Guests add breakfast for €15 per person per night, providers receive €11, and Hugga keeps €4 as the marketplace agent fee. Hosts earn Hugga Credits, not cash, so incentives stay aligned with guest experience. The system is reputation-first: reliable providers get priority access while assignment remains fair through controlled randomness.
            </p>
          </article>
          <article className="card mt12">
            <h3>30-second script</h3>
            <p>
              Most short-stay guests want a better morning, but hosts don't want food logistics chaos. Hugga solves this with a quiet infrastructure layer: vetted local breakfast providers, integrated into the hosting experience. Guests pay €15 per person per night, providers receive €11, and Hugga operates as the marketplace agent. Hosts receive Hugga Credits to reinvest in hospitality.
            </p>
          </article>
        </section>

        <section id="how" className="container block">
          <SectionTitle icon="🔄" title="How It Works" subtitle="Three steps. One reliable system." />
          <div className="grid three">
            {howItWorksSteps.map((item) => (
              <article className="card" key={item.step} style={{ display: 'flex', flexDirection: 'column' }}>
                <div style={{ fontSize: '2.8rem', marginBottom: '12px' }}>{item.icon}</div>
                <h3 style={{ color: 'var(--primary)', marginTop: '0' }}>{item.step}</h3>
                <p>{item.body}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="hosts" className="container block">
          <SectionTitle icon="🏠" title="For Hosts" subtitle="Add premium breakfast to your stay—without adding chaos." />
          <div className="grid two">
            <article className="card">
              <h3>Why hosts choose Hugga</h3>
              <ul>
                <li>✓ Differentiate your listing with a thoughtful morning experience.</li>
                <li>✓ Offer breakfast through vetted local partners.</li>
                <li>✓ Avoid open-network delivery unpredictability.</li>
                <li>✓ Keep operations structured and calm.</li>
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
          <div style={{ marginTop: '32px', padding: '24px', background: 'linear-gradient(135deg, rgba(255, 107, 53, 0.05), rgba(245, 169, 98, 0.05))', borderRadius: 'var(--radius-lg)', border: '1px solid var(--border-light)' }}>
            <h4>Host Benefits at a Glance</h4>
            <div className="grid three" style={{ gap: '16px', marginTop: '16px' }}>
              <div style={{ textAlign: 'center' }}>
                <div style={{ fontSize: '2rem', marginBottom: '8px' }}>📈</div>
                <p style={{ fontWeight: '600', marginBottom: '4px' }}>Higher Bookings</p>
                <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>Increase perceived value</p>
              </div>
              <div style={{ textAlign: 'center' }}>
                <div style={{ fontSize: '2rem', marginBottom: '8px' }}>⭐</div>
                <p style={{ fontWeight: '600', marginBottom: '4px' }}>Better Reviews</p>
                <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>Guests remember mornings</p>
              </div>
              <div style={{ textAlign: 'center' }}>
                <div style={{ fontSize: '2rem', marginBottom: '8px' }}>😌</div>
                <p style={{ fontWeight: '600', marginBottom: '4px' }}>Less Work</p>
                <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>We handle logistics</p>
              </div>
            </div>
          </div>
        </section>

        <section id="providers" className="container block">
          <SectionTitle icon="👨‍🍳" title="For Providers" subtitle="Predictable demand. Professional framework." />
          <div className="grid two">
            <article className="card">
              <h3>Why providers choose Hugga</h3>
              <ul>
                <li>✓ Access recurring local demand from hospitality-focused hosts.</li>
                <li>✓ Be rewarded for consistency, not aggressive discounting.</li>
                <li>✓ Build long-term reputation equity.</li>
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
          <div style={{ marginTop: '32px', padding: '24px', background: 'linear-gradient(135deg, rgba(255, 107, 53, 0.05), rgba(245, 169, 98, 0.05))', borderRadius: 'var(--radius-lg)', border: '1px solid var(--border-light)' }}>
            <h4>Provider Benefits at a Glance</h4>
            <div className="grid three" style={{ gap: '16px', marginTop: '16px' }}>
              <div style={{ textAlign: 'center' }}>
                <div style={{ fontSize: '2rem', marginBottom: '8px' }}>📊</div>
                <p style={{ fontWeight: '600', marginBottom: '4px' }}>Predictable Demand</p>
                <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>Plan with confidence</p>
              </div>
              <div style={{ textAlign: 'center' }}>
                <div style={{ fontSize: '2rem', marginBottom: '8px' }}>💰</div>
                <p style={{ fontWeight: '600', marginBottom: '4px' }}>Fair Pricing</p>
                <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>€11 per guest per night</p>
              </div>
              <div style={{ textAlign: 'center' }}>
                <div style={{ fontSize: '2rem', marginBottom: '8px' }}>🏆</div>
                <p style={{ fontWeight: '600', marginBottom: '4px' }}>Reputation Rewards</p>
                <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>Quality builds your equity</p>
              </div>
            </div>
          </div>
        </section>

        <section id="trust" className="container block">
          <SectionTitle icon="🛡️" title="Reputation & Trust" subtitle="Trust is not a slogan. It is the system." />
          <div className="grid four" style={{ marginTop: '32px' }}>
            {trustSignals.map((signal) => (
              <article className="card" key={signal.title} style={{ textAlign: 'center' }}>
                <div style={{ fontSize: '2.4rem', marginBottom: '12px' }}>{signal.icon}</div>
                <h3 style={{ marginBottom: '12px', color: 'var(--primary)' }}>{signal.title}</h3>
                <p>{signal.body}</p>
              </article>
            ))}
          </div>
          <article className="card" style={{ marginTop: '32px', padding: '32px', background: 'linear-gradient(135deg, rgba(255, 107, 53, 0.03), rgba(245, 169, 98, 0.03))' }}>
            <p style={{ fontSize: '1.05rem', fontWeight: '500', marginBottom: '16px' }}>
              <span style={{ color: 'var(--primary)' }}>✓ Vetting:</span> Only approved providers are activated.
            </p>
            <p style={{ fontSize: '1.05rem', fontWeight: '500', marginBottom: '16px' }}>
              <span style={{ color: 'var(--primary)' }}>⭐ Reliability signals:</span> Outcomes influence future assignment weight.
            </p>
            <p style={{ fontSize: '1.05rem', fontWeight: '500', marginBottom: '16px' }}>
              <span style={{ color: 'var(--primary)' }}>⚖️ Fairness controls:</span> Distribution logic prevents concentration risk.
            </p>
            <p style={{ fontSize: '1.05rem', fontWeight: '500' }}>
              <span style={{ color: 'var(--primary)' }}>🛡️ Accountability:</span> Clear issue handling and remediation process.
            </p>
          </article>
        </section>

        <section className="container block">
          <SectionTitle icon="⚡" title="Why not generic delivery platforms?" subtitle="Short-stay hospitality is different." />
          <article className="card">
            <div className="grid two" style={{ gap: '32px', marginTop: '24px' }}>
              <div>
                <h4 style={{ color: 'var(--primary)' }}>Hugga</h4>
                <ul style={{ listStyle: 'none', paddingLeft: '0' }}>
                  <li>✓ Curated network</li>
                  <li>✓ Reputation-driven</li>
                  <li>✓ Hospitality context</li>
                  <li>✓ Structured coordination</li>
                </ul>
              </div>
              <div>
                <h4 style={{ color: 'var(--text-muted)' }}>Generic Platforms</h4>
                <ul style={{ listStyle: 'none', paddingLeft: '0', color: 'var(--text-muted)' }}>
                  <li>✗ Open listing</li>
                  <li>✗ Speed-only matching</li>
                  <li>✗ One-off orders</li>
                  <li>✗ Reactive dispatch</li>
                </ul>
              </div>
            </div>
          </article>
        </section>

        <section className="container block" id="taglines">
          <SectionTitle icon="💡" title="Taglines" subtitle="How we describe Hugga." />
          <ul className="tagline-list">
            {taglines.map((tagline) => <li key={tagline}>{tagline}</li>)}
          </ul>
        </section>

        <section id="faq" className="container block">
          <SectionTitle icon="❓" title="Frequently Asked Questions" />
          <div className="grid two">
            {faqItems.map(([q, a]) => (
              <article className="card" key={q}>
                <h3 style={{ color: 'var(--primary)', marginBottom: '12px' }}>Q</h3>
                <h4 style={{ fontSize: '1rem', fontWeight: '600', marginBottom: '12px', color: 'var(--text-primary)' }}>{q}</h4>
                <p style={{ marginBottom: '0', color: 'var(--text-secondary)' }}>{a}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="legal" className="container block">
          <SectionTitle icon="⚖️" title="Legal & Operational Clarity" />
          <article className="card" style={{ padding: '32px' }}>
            <p style={{ fontSize: '1.05rem', marginBottom: '16px' }}>
              Hugga acts as a marketplace agent connecting guests, hosts, and independent licensed breakfast providers. Providers are responsible for food production, safety, and regulatory compliance.
            </p>
            <p style={{ fontSize: '0.95rem', color: 'var(--text-muted)', marginBottom: '0' }}>
              All interactions comply with local food safety regulations, hospitality licensing requirements, and platform terms of service.
            </p>
          </article>
        </section>

        <section id="contact" className="container block card center" style={{ background: 'linear-gradient(135deg, rgba(255, 107, 53, 0.08), rgba(245, 169, 98, 0.04))', padding: 'var(--space-4xl) var(--space-2xl)' }}>
          <div style={{ fontSize: '4rem', marginBottom: '24px' }}>🌅</div>
          <h2>If you care about better mornings, let's talk.</h2>
          <p style={{ fontSize: '1.05rem', maxWidth: '600px', margin: '0 auto 32px' }}>
            Whether you host stays or craft breakfast, Hugga is built for people who value reliability and calm operations.
          </p>
          <div className="actions center">
            <a className="btn" href="mailto:hello@hugga.co">Start a Conversation</a>
            <a className="btn ghost" href="#faq">Read FAQ</a>
          </div>
          <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)', marginTop: '32px', marginBottom: '0' }}>
            We're launching in Spain and Portugal. Early adopters get special rates.
          </p>
        </section>

        <footer className="container block">
          <div style={{ textAlign: 'center', paddingTop: '32px', borderTop: '1px solid var(--border-light)' }}>
            <p style={{ marginBottom: '8px' }}>
              <a href="mailto:hello@hugga.co">hello@hugga.co</a> • 
              <a href="#" style={{ marginLeft: '12px' }}>Instagram</a> • 
              <a href="#" style={{ marginLeft: '12px' }}>LinkedIn</a>
            </p>
            <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', marginBottom: '0' }}>
              © Hugga 2026. Built for trust.
            </p>
          </div>
        </footer>
      </main>
    </>
  )
}

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)

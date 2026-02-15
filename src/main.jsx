import React from 'react'
import { createRoot } from 'react-dom/client'
import './styles.css'

function App() {
  return (
    <main>
      <section className="card">
        <h1>Hugga copy deck</h1>
        <p className="muted">A complete website structure and conversion copy document for Hugga.</p>
        <p>
          This repository is deployed with GitHub Actions to GitHub Pages from the <strong>main</strong> branch.
          Open the full copy document below.
        </p>
        <div className="actions">
          <a className="btn" href="./hugga-website-copy.md">
            Open copy document
          </a>
        </div>
      </section>
    </main>
  )
}

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)

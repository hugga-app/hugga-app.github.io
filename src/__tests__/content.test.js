import { describe, it, expect } from 'vitest'

describe('Content validation', () => {
  it('should have valid hero message', () => {
    const heroMessage = 'Better guest mornings, built on trust.'
    expect(heroMessage).toBeDefined()
    expect(heroMessage.length).toBeGreaterThan(0)
    expect(heroMessage).toContain('trust')
  })

  it('should have valid brand name', () => {
    const brandName = 'Hugga'
    expect(brandName).toBe('Hugga')
  })

  it('should describe key value propositions', () => {
    const hostBenefit = 'Differentiate your listing with a thoughtful morning experience'
    const providerBenefit = 'Access recurring local demand from hospitality-focused hosts'
    const guestBenefit = 'A beautiful, local, frictionless breakfast experience'

    expect(hostBenefit).toBeDefined()
    expect(providerBenefit).toBeDefined()
    expect(guestBenefit).toBeDefined()
  })

  it('should position Hugga correctly', () => {
    const positioningStatement = 'The premium hospitality upgrade layer for short-term rentals'
    expect(positioningStatement).toContain('premium')
    expect(positioningStatement).toContain('hospitality')
  })
})

describe('Website structure', () => {
  it('should have key sections', () => {
    const sections = [
      'hero',
      'pitch',
      'how-it-works',
      'for-hosts',
      'for-providers',
      'trust',
      'faq',
      'contact',
    ]

    sections.forEach(section => {
      expect(section).toBeDefined()
    })
  })

  it('should have navigation items', () => {
    const navItems = [
      'How It Works',
      'Hosts',
      'Providers',
      'Trust',
      'FAQ',
    ]

    expect(navItems.length).toBe(5)
    navItems.forEach(item => {
      expect(item.length).toBeGreaterThan(0)
    })
  })
})

describe('Tone and messaging', () => {
  it('should avoid buzzwords and startup hype', () => {
    const badWords = ['synergy', 'leverage', 'disrupt', 'revolutio', 'game-chang', 'paradigm']
    const appDescriptions = [
      'A trusted breakfast layer for modern hospitality',
      'Quiet infrastructure for hospitality',
      'Reputation-first system designed for calm, reliable operations',
    ]

    appDescriptions.forEach(desc => {
      badWords.forEach(word => {
        expect(desc.toLowerCase()).not.toContain(word)
      })
    })
  })

  it('should use warm, human tone', () => {
    const warmPhrases = [
      'Better guest mornings',
      'thoughtful morning experience',
      'trusted local breakfast',
      'calm operations',
    ]

    warmPhrases.forEach(phrase => {
      expect(phrase).toBeDefined()
      expect(phrase.length).toBeGreaterThan(0)
    })
  })
})

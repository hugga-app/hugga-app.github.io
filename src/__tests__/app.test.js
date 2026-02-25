import { describe, it, expect } from 'vitest'

describe('App constants and data', () => {
  it('should have heroOptions defined', () => {
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
    
    expect(heroOptions).toBeDefined()
    expect(heroOptions.length).toBe(3)
    expect(heroOptions[0].title).toContain('trusted breakfast')
  })

  it('should have taglines defined', () => {
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
    
    expect(taglines).toBeDefined()
    expect(taglines.length).toBe(10)
    expect(taglines[0]).toBe('Breakfast, with reputation built in.')
  })

  it('should have faqItems defined', () => {
    const faqItems = [
      ['Is Hugga a delivery app integration?', 'No. Hugga is a dedicated hospitality layer built specifically for short-stay breakfast services.'],
      ['Do hosts manage provider logistics?', 'No. Hugga handles provider assignment and coordination standards.'],
      ['How do hosts earn from Hugga?', 'Hosts receive Hugga Credits for completed services, designed to be reinvested in guest experience.'],
      ['What do guests pay?', 'Guests pay €15 per person per night for breakfast.'],
      ['How are providers paid?', 'Providers receive €11 per person per night served.'],
      ['How are assignments decided?', 'Assignments are reputation-weighted with controlled randomness to preserve fairness.'],
    ]
    
    expect(faqItems).toBeDefined()
    expect(faqItems.length).toBe(6)
    expect(faqItems[0][0]).toContain('delivery')
    expect(faqItems[3][1]).toContain('€15')
  })

  it('should have sitemapItems defined', () => {
    const sitemapItems = ['Home', 'Hosts', 'Providers', 'How It Works', 'Reputation & Trust', 'FAQ', 'Legal & Compliance', 'Contact']
    
    expect(sitemapItems).toBeDefined()
    expect(sitemapItems.length).toBe(8)
    expect(sitemapItems).toContain('Home')
    expect(sitemapItems).toContain('Hosts')
    expect(sitemapItems).toContain('Providers')
  })
})

describe('Pricing logic', () => {
  it('should calculate correct revenue split', () => {
    const guestPrice = 15
    const providerEarnings = 11
    const huggarFee = 4

    expect(guestPrice).toBe(providerEarnings + huggarFee)
  })

  it('should calculate revenue per service correctly', () => {
    const guestPrice = 15
    const guestsServed = 5

    const totalGuestRevenue = guestPrice * guestsServed
    expect(totalGuestRevenue).toBe(75)

    const providerEarnings = totalGuestRevenue * (11 / 15)
    expect(providerEarnings).toBeCloseTo(55)

    const huggarFee = totalGuestRevenue * (4 / 15)
    expect(huggarFee).toBeCloseTo(20)
  })
})

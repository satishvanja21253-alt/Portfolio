// All site text lives here. Edit this file to update the portfolio.

// Sheet Monkey endpoint for the contact form.
// The Google Sheet needs these column headers in row 1: Name, Email, Message, Created
export const SHEET_MONKEY_URL = 'https://api.sheetmonkey.io/form/h4ytE1Umk9s2bmXYNgf4DN'

export const profile = {
  name: 'Satish Kumar Vanja',
  shortName: 'Satish Vanja',
  title: 'Digital Marketing Specialist',
  headline: ['Digital', 'Marketing', 'Specialist'],
  tagline: 'SEO · Paid Media · Analytics · Market Growth',
  intro:
    'I help businesses build and grow their presence through SEO, paid media and campaign analytics.',
  location: 'London, UK',
  email: 'satishkumarvanja@gmail.com',
  phone: '+44 7352 676681',
  phoneHref: '+447352676681',
  linkedin: 'https://www.linkedin.com/in/satish-vanja',
  linkedinLabel: 'www.linkedin.com/in/satish-vanja',
  availability: 'Available immediately for full-time roles',
  workMode: 'Open to hybrid, on-site or remote',
}

export const navLinks = [
  { label: 'Work', href: '#work' },
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Skills', href: '#skills' },
  { label: 'Experience', href: '#experience' },
  { label: 'Contact', href: '#contact' },
]

export const about = {
  text:
    "I'm Satish Kumar Vanja, a digital marketer and MSc Global Business Management student with 2 years of combined freelance and in-house experience in SEO, Google Ads, Meta Ads and campaign analytics. I combine performance marketing with a global business perspective to help brands grow in the UK market.",
  stats: [
    { value: '2', suffix: 'YRS', label: ['Freelance &', 'in-house experience'] },
    { value: '120', suffix: '%', label: ['Organic traffic', 'growth'] },
    { value: '35', suffix: '%', label: ['Lower paid', 'cost-per-click'] },
  ],
}

export const services = [
  {
    icon: 'square',
    title: 'SEO & Content',
    text: 'Keyword research, on-page and off-page SEO, and content that moves target keywords to page one.',
  },
  {
    icon: 'circle',
    title: 'Paid Media',
    text: 'Google Ads and Meta Ads campaigns tuned through A/B testing and bid optimisation.',
  },
  {
    icon: 'diagonal',
    title: 'Social Media',
    text: 'Content and audience growth across Instagram, Facebook and LinkedIn.',
  },
  {
    icon: 'grid',
    title: 'Analytics & Reporting',
    text: 'GA4, Search Console and Tag Manager reporting that turns campaign data into decisions.',
  },
]

export const skillGroups = [
  {
    title: 'SEO & Content',
    items: [
      'SEO',
      'Keyword Research',
      'On-page SEO',
      'Link Building',
      'Copywriting',
      'Blog Writing',
      'Content Calendars',
      'Email Newsletters',
    ],
  },
  {
    title: 'Paid Media',
    items: [
      'Google Ads',
      'Meta Ads Manager',
      'SEM',
      'PPC',
      'Bid Optimisation',
      'A/B Testing',
      'Conversion Tracking',
    ],
  },
  {
    title: 'Analytics & Tools',
    items: [
      'Google Analytics (GA4)',
      'Google Search Console',
      'Google Tag Manager',
      'Excel',
      'Canva',
      'Campaign Reporting',
      'KPI Tracking',
    ],
  },
  {
    title: 'Languages',
    items: ['English (professional)', 'Telugu (native)'],
  },
]

export const process = ['Strategy', 'Creative', 'Reporting']

export const processNote =
  'Good marketing is more than reach. It is strategy, creative and measurement working together.'

export const projects = [
  {
    category: 'Meta Ads Campaign',
    client: 'We Are One Hub',
    tone: 'sand',
    heroValue: '122.4K',
    heroLabel: 'Impressions',
    summary:
      'A 2-month Meta campaign for We Are One Hub, a manpower supplier consultancy in Guntur, covering ad placement, strategy and traffic generation.',
    metrics: [
      { value: '57,897', label: 'Viewers (+256.9%)' },
      { value: '122.4K', label: 'Impressions (+391.6%)' },
      { value: '2,217', label: 'Link clicks' },
      { value: '1,105', label: 'Messaging conversations started' },
    ],
  },
  {
    category: 'SEO Growth',
    client: 'Prizytech',
    tone: 'ink',
    heroValue: '+120%',
    heroLabel: 'Organic traffic',
    summary:
      'Keyword research with on-page and off-page SEO for Prizytech, supported by SEO-optimised blog posts and email newsletters.',
    metrics: [
      { value: '+120%', label: 'Organic website traffic' },
      { value: '15+', label: 'Keywords moved from page 3 to page 1' },
      { value: '+30%', label: 'Blog-driven leads' },
      { value: '+45%', label: 'Email open rates' },
    ],
  },
  {
    category: 'Social & Paid Media',
    client: 'Prizytech',
    tone: 'amber',
    heroValue: '3,200+',
    heroLabel: 'Followers, up from 500',
    summary:
      'Social growth across Instagram, Facebook and LinkedIn in 8 months, alongside Google Ads and Meta Ads campaigns on a ₹80,000 (approx. £700) monthly budget.',
    metrics: [
      { value: '500 → 3,200+', label: 'Social following in 8 months' },
      { value: '+65%', label: 'Average engagement rate' },
      { value: '−35%', label: 'Cost-per-click' },
      { value: '+28%', label: 'Conversion rate' },
    ],
  },
]

export const experience = [
  {
    kind: 'Work',
    role: 'Digital Marketing Executive',
    org: 'Prizytech',
    place: 'Andhra Pradesh, India',
    period: 'Oct 2023 – Dec 2024',
    points: [
      'Grew social following from 500 to 3,200+ in 8 months, raising average engagement rate by 65%.',
      'Increased organic traffic by 120% and moved 15+ target keywords from page 3 to page 1.',
      'Managed Google Ads and Meta Ads on a ₹80,000 (approx. £700) monthly budget; cut CPC by 35% and raised conversion rate by 28%.',
      'Built weekly Google Analytics reports that contributed to a 25% quarter-over-quarter improvement in marketing ROI.',
    ],
  },
  {
    kind: 'Work',
    role: 'Freelance Digital Marketing Consultant',
    org: 'Self-employed',
    place: 'Remote',
    period: '',
    points: [
      'Managed SEO, Google Ads, Meta Ads and social content for client accounts across Facebook and Instagram.',
      'Planned and ran end-to-end campaigns, from strategy and creative to reporting.',
    ],
  },
  {
    kind: 'Education',
    role: 'MSc Global Business Management (Professional Experience Year)',
    org: 'University of Roehampton',
    place: 'London, UK',
    period: 'Sep 2025 – June 2027',
    points: [
      'Key modules: Strategic Marketing, Digital Leadership, Business Analytics, Supply Chain Management.',
    ],
  },
]

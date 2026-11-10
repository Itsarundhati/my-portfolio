export const profile = {
  name: 'Arundhati Devi R',
  role: 'QA Automation Engineer',
  location: 'Kerala, India',
  email: 'arundhatidevi24@gmail.com', // Replace with your preferred contact email.
  github: 'https://github.com/Itsarundhati',
  linkedin: 'https://linkedin.com/in/arundhati-devi-r/',
  intro:
    'I explore the unexpected, uncover the details others overlook, and build thoughtful automation that keeps every user journey moving as it should.',
}

export const skills = [
  { group: 'Automation', items: ['Playwright', 'Python', 'TypeScript', 'Selenium WebDriver', 'TestNG'] },
  { group: 'Quality engineering', items: ['Functional testing', 'Regression testing', 'Exploratory testing', 'Cross-browser testing'] },
  { group: 'API & performance', items: ['API testing', 'Postman', 'JMeter', 'Load testing', 'SQL'] },
  { group: 'Delivery & tools', items: ['Git', 'Jira', 'Docker', 'Jenkins', 'CI/CD'] },
]

export const projects = [
  {
    number: '01',
    name: 'JourneyLog',
    type: 'Independent project · Browser extension',
    description:
      'A QA-focused browser extension concept for capturing exploratory testing sessions, turning interaction trails into useful evidence and follow-up scenarios.',
    details: ['Interaction and navigation capture', 'Session summaries and reproducible steps', 'Ideas for unexplored test scenarios'],
    tags: ['Chrome Extension', 'React', 'TypeScript', 'QA tooling'],
    accent: 'lime',
    mark: 'JL',
  },
  {
    number: '02',
    name: 'Employee Management',
    type: 'Web & mobile application',
    description:
      'Quality assurance across employee workflows, with Playwright automation for core journeys spanning authentication, roles and employee management.',
    details: ['Authentication and role coverage', 'Employee management workflows', 'Web and mobile validation'],
    tags: ['Playwright', 'Web', 'Mobile', 'Regression'],
    accent: 'peach',
    mark: 'EM',
  },
  {
    number: '03',
    name: 'Contract Management',
    type: 'Web application',
    description:
      'Testing contract lifecycle workflows and the reliability of document generation, access control and form validation.',
    details: ['Contract lifecycle scenarios', 'Document generation checks', 'RBAC and form validation'],
    tags: ['Playwright', 'RBAC', 'Smoke testing', 'Regression'],
    accent: 'blue',
    mark: 'CM',
  },
  {
    number: '04',
    name: 'Learning Platform',
    type: 'API & performance testing',
    description:
      'API validation and load-testing work focused on understanding service behaviour and identifying performance risks.',
    details: ['API behaviour and response validation', 'Load-test execution', 'Performance observations'],
    tags: ['API testing', 'JMeter', 'Performance'],
    accent: 'lavender',
    mark: 'LP',
  },
]

export const experience = [
  {
    period: '2022 — 2026',
    role: 'Test Engineer',
    company: 'Keyvalue Software Systems',
    summary:
      'Worked across web, mobile and API quality activities, contributing to functional and regression testing and building automation for important product workflows.',
    points: [
      'Created and maintained Playwright automation for web and mobile workflows.',
      'Validated authentication, role-based access, employee and contract management journeys.',
      'Contributed to API and load-testing activities for a learning platform.',
      'Collaborated with development teams to investigate issues and support reliable releases.',
    ],
  },
]

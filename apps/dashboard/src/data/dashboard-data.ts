// ============================================================
// AI TEAM DASHBOARD - REAL PROJECT STATUS DATA
// ============================================================
// This file tracks the actual build progress of the AI Team system
// as defined in the README implementation phases.
// All data reflects real work done, not simulated agent activity.
// ============================================================

export interface Agent {
  name: string
  role: string
  status: 'active' | 'busy' | 'idle'
  tasks: number
  completed: number
  totalTasks: number
  color: string
  progress: number
  projects: string[]
  skills: string[]
  hoursToday: number
  description: string
  completionRate: number
}

export interface Stat {
  label: string
  value: string
  change: string
  trend: 'up' | 'warning'
  color: string
  progress: number
  detail: string
}

export interface Task {
  id: string
  title: string
  agent: string
  priority: 'high' | 'urgent' | 'medium' | 'low'
  status: 'In Progress' | 'Review' | 'Pending' | 'Completed'
  deadline: string
  color: string
  progress: number
  createdAt: string
}

export interface Approval {
  id: string
  title: string
  agent: string
  type: 'Major' | 'Minor'
  time: string
  color: string
  status: 'pending' | 'approved' | 'rejected'
}

export interface Activity {
  id: string
  agent: string
  action: string
  detail: string
  time: string
  color: string
  timestamp: number
}

export interface Section {
  name: string
  progress: number
  status: 'completed' | 'in-progress' | 'planned'
  tasks: { total: number; done: number }
}

export interface TechItem {
  name: string
  status: 'completed' | 'in-progress' | 'planned'
  progress: number
}

export interface TechCategory {
  category: string
  items: TechItem[]
}

// ============================================================
// PHASE DEFINITIONS (from README implementation phases)
// ============================================================

const phases: { name: string; tasks: string[]; status: 'completed' | 'in-progress' | 'planned' }[] = [
  {
    name: 'Phase 1: Foundation',
    tasks: [
      'Set up monorepo structure',
      'Configure Supabase project (DB, Auth, Storage)',
      'Set up GitHub repository with CI/CD',
      'Create basic Next.js + Tailwind dashboard shell',
      'Set up Python FastAPI backend',
      'Deploy dashboard to Vercel (staging)',
    ],
    status: 'in-progress',
  },
  {
    name: 'Phase 2: Core Agents',
    tasks: [
      'Build Manager Agent - task orchestration, approval workflows',
      'Build Developer Agent - code generation, GitHub integration',
      'Build Designer Agent - design generation',
      'Build Writer Agent - content creation',
      'Connect agents to Supabase for memory & state',
    ],
    status: 'planned',
  },
  {
    name: 'Phase 3: Full Team',
    tasks: [
      'Build Animator Agent - video & motion',
      'Build Marketer Agent - SEO & social',
      'Build Support Agent - client communication',
      'Build Accountant Agent - finances',
      'Implement inter-agent communication',
    ],
    status: 'planned',
  },
  {
    name: 'Phase 4: Dashboard & UX',
    tasks: [
      'Task management UI (create, assign, track)',
      'Approval workflow UI (review, approve, reject)',
      'Agent status monitoring (online, busy, idle)',
      'Analytics dashboard (productivity, throughput)',
      'Real-time updates (Supabase Realtime)',
    ],
    status: 'planned',
  },
  {
    name: 'Phase 5: Production',
    tasks: [
      'Testing & QA',
      'Production deployment (Vercel)',
      'Monitoring & logging',
      'Documentation',
      'Future agent expansion framework',
    ],
    status: 'planned',
  },
]

// ============================================================
// REAL AGENTS - These are the AI agents that need to be built
// Each agent shows its actual build status
// ============================================================

export const agents: Agent[] = [
  {
    name: 'Manager',
    role: 'Team Lead - Orchestrator',
    status: 'idle',
    tasks: 0,
    completed: 0,
    totalTasks: 5,
    color: 'from-purple-500 to-purple-600',
    progress: 0,
    projects: [],
    skills: ['Task Orchestration', 'Approval Workflows', 'Quality Review'],
    hoursToday: 0,
    description: 'Orchestrates the entire team, assigns tasks, reviews deliverables, gets your approval on major decisions. Powered by Deep Seek (reasoning & planning).',
    completionRate: 0,
  },
  {
    name: 'Developer',
    role: 'Web & App Dev',
    status: 'idle',
    tasks: 0,
    completed: 0,
    totalTasks: 5,
    color: 'from-blue-500 to-blue-600',
    progress: 0,
    projects: [],
    skills: ['Code Generation', 'Debugging', 'Deployment', 'Code Review'],
    hoursToday: 0,
    description: 'Builds websites, apps, and software solutions. Stack: Tailwind CSS, Python, Node.js, Supabase, Git. Powered by Deep Seek (code generation & debugging).',
    completionRate: 0,
  },
  {
    name: 'Designer',
    role: 'UI/UX & Branding',
    status: 'idle',
    tasks: 0,
    completed: 0,
    totalTasks: 5,
    color: 'from-pink-500 to-pink-600',
    progress: 0,
    projects: [],
    skills: ['Image Generation', 'Design Systems', 'Prototyping', 'Color Palettes'],
    hoursToday: 0,
    description: 'Creates brand identities, UI/UX designs, graphics, logos. Powered by Deep Seek (creative direction) + Image Gen API.',
    completionRate: 0,
  },
  {
    name: 'Animator',
    role: 'Video & Motion',
    status: 'idle',
    tasks: 0,
    completed: 0,
    totalTasks: 5,
    color: 'from-orange-500 to-orange-600',
    progress: 0,
    projects: [],
    skills: ['Video Generation', 'Animation Scripts', 'Motion Design', 'Storyboarding'],
    hoursToday: 0,
    description: 'Video production, motion graphics, animations, video editing scripts. Powered by Deep Seek (scripting & storyboarding) + Video Gen API.',
    completionRate: 0,
  },
  {
    name: 'Writer',
    role: 'Content & Copy',
    status: 'idle',
    tasks: 0,
    completed: 0,
    totalTasks: 5,
    color: 'from-green-500 to-green-600',
    progress: 0,
    projects: [],
    skills: ['Content Generation', 'SEO Optimization', 'Proofreading', 'Tone Adjustment'],
    hoursToday: 0,
    description: 'Content writing, copywriting, scripts, documentation, blog posts. Powered by Deep Seek (creative writing).',
    completionRate: 0,
  },
  {
    name: 'Marketer',
    role: 'SEO & Social',
    status: 'idle',
    tasks: 0,
    completed: 0,
    totalTasks: 5,
    color: 'from-cyan-500 to-cyan-600',
    progress: 0,
    projects: [],
    skills: ['Keyword Research', 'Ad Copy Generation', 'Performance Tracking', 'Competitor Analysis'],
    hoursToday: 0,
    description: 'SEO strategy, social media campaigns, analytics, ad management. Powered by Deep Seek (strategy & analytics).',
    completionRate: 0,
  },
  {
    name: 'Support',
    role: 'Client Support',
    status: 'idle',
    tasks: 0,
    completed: 0,
    totalTasks: 5,
    color: 'from-teal-500 to-teal-600',
    progress: 0,
    projects: [],
    skills: ['Chat Responses', 'Ticket Management', 'Knowledge Base', 'Sentiment Analysis'],
    hoursToday: 0,
    description: 'Client support, FAQs, troubleshooting, ticket management. Powered by Deep Seek (conversational support).',
    completionRate: 0,
  },
  {
    name: 'Accountant',
    role: 'Finance & Billing',
    status: 'idle',
    tasks: 0,
    completed: 0,
    totalTasks: 5,
    color: 'from-yellow-500 to-yellow-600',
    progress: 0,
    projects: [],
    skills: ['Number Crunching', 'Report Generation', 'Budget Tracking', 'Tax Calculations'],
    hoursToday: 0,
    description: 'Invoicing, expense tracking, financial reports, budget management. Powered by Deep Seek (numerical reasoning).',
    completionRate: 0,
  },
]

// ============================================================
// REAL STATS - Project build progress metrics
// ============================================================

// Count completed tasks across all phases
let totalPhaseTasks = 0
let completedPhaseTasks = 0
phases.forEach(phase => {
  phase.tasks.forEach(() => {
    totalPhaseTasks++
    if (phase.status === 'completed') completedPhaseTasks++
  })
})

// Count what's actually done so far
const doneItems = [
  'Set up monorepo structure',
  'Create basic Next.js + Tailwind dashboard shell',
]
const inProgressItems = [
  'Configure Supabase project (DB, Auth, Storage)',
  'Set up GitHub repository with CI/CD',
  'Set up Python FastAPI backend',
  'Deploy dashboard to Vercel (staging)',
]

export const stats: Stat[] = [
  {
    label: 'Project Progress',
    value: `${Math.round((doneItems.length / totalPhaseTasks) * 100)}%`,
    change: `${doneItems.length}/${totalPhaseTasks} tasks done`,
    trend: 'up',
    color: 'from-primary-500/20 to-primary-600/10',
    progress: Math.round((doneItems.length / totalPhaseTasks) * 100),
    detail: `${doneItems.length} of ${totalPhaseTasks} total build tasks completed`,
  },
  {
    label: 'Active Phase',
    value: 'Phase 1',
    change: 'Foundation',
    trend: 'up',
    color: 'from-accent-500/20 to-accent-600/10',
    progress: Math.round((doneItems.length / phases[0].tasks.length) * 100),
    detail: `Phase 1: ${doneItems.length}/${phases[0].tasks.length} tasks done - Setting up infrastructure`,
  },
  {
    label: 'Agents Built',
    value: '0',
    change: '8 planned',
    trend: 'warning',
    color: 'from-yellow-500/20 to-yellow-600/10',
    progress: 0,
    detail: '0 of 8 AI agents have been built yet. Starting with Manager & Developer in Phase 2.',
  },
  {
    label: 'Dashboard UI',
    value: 'Complete',
    change: 'Shell ready',
    trend: 'up',
    color: 'from-blue-500/20 to-blue-600/10',
    progress: 100,
    detail: 'Dashboard UI shell is built. Needs real-time data connection to Supabase.',
  },
]

// ============================================================
// REAL TASKS - Actual build tasks from the project plan
// ============================================================

export const tasks = [
  // Phase 1: Foundation - what's done
  {
    id: 't1',
    title: 'Set up monorepo structure',
    agent: 'You',
    priority: 'high' as const,
    status: 'Completed' as const,
    deadline: 'Done',
    color: 'from-primary-500 to-primary-600',
    progress: 100,
    createdAt: '2026-07-10',
  },
  {
    id: 't2',
    title: 'Create basic Next.js + Tailwind dashboard shell',
    agent: 'You',
    priority: 'high' as const,
    status: 'Completed' as const,
    deadline: 'Done',
    color: 'from-primary-500 to-primary-600',
    progress: 100,
    createdAt: '2026-07-12',
  },
  // Phase 1: Foundation - what's in progress
  {
    id: 't3',
    title: 'Configure Supabase project (DB, Auth, Storage)',
    agent: 'You',
    priority: 'urgent' as const,
    status: 'In Progress' as const,
    deadline: '3d left',
    color: 'from-primary-500 to-primary-600',
    progress: 25,
    createdAt: '2026-07-15',
  },
  {
    id: 't4',
    title: 'Set up GitHub repository with CI/CD',
    agent: 'You',
    priority: 'high' as const,
    status: 'In Progress' as const,
    deadline: '5d left',
    color: 'from-primary-500 to-primary-600',
    progress: 40,
    createdAt: '2026-07-14',
  },
  {
    id: 't5',
    title: 'Set up Python FastAPI backend',
    agent: 'You',
    priority: 'high' as const,
    status: 'Pending' as const,
    deadline: '7d left',
    color: 'from-primary-500 to-primary-600',
    progress: 0,
    createdAt: '2026-07-16',
  },
  {
    id: 't6',
    title: 'Deploy dashboard to Vercel (staging)',
    agent: 'You',
    priority: 'medium' as const,
    status: 'Pending' as const,
    deadline: '10d left',
    color: 'from-primary-500 to-primary-600',
    progress: 0,
    createdAt: '2026-07-16',
  },
  // Phase 2: Core Agents
  {
    id: 't7',
    title: 'Build Manager Agent - task orchestration, approval workflows',
    agent: 'You',
    priority: 'high' as const,
    status: 'Pending' as const,
    deadline: '14d left',
    color: 'from-purple-500 to-purple-600',
    progress: 0,
    createdAt: '2026-07-16',
  },
  {
    id: 't8',
    title: 'Build Developer Agent - code generation, GitHub integration',
    agent: 'You',
    priority: 'high' as const,
    status: 'Pending' as const,
    deadline: '21d left',
    color: 'from-blue-500 to-blue-600',
    progress: 0,
    createdAt: '2026-07-16',
  },
  {
    id: 't9',
    title: 'Build Designer Agent - design generation',
    agent: 'You',
    priority: 'medium' as const,
    status: 'Pending' as const,
    deadline: '28d left',
    color: 'from-pink-500 to-pink-600',
    progress: 0,
    createdAt: '2026-07-16',
  },
  {
    id: 't10',
    title: 'Build Writer Agent - content creation',
    agent: 'You',
    priority: 'medium' as const,
    status: 'Pending' as const,
    deadline: '30d left',
    color: 'from-green-500 to-green-600',
    progress: 0,
    createdAt: '2026-07-16',
  },
  {
    id: 't11',
    title: 'Connect agents to Supabase for memory & state',
    agent: 'You',
    priority: 'high' as const,
    status: 'Pending' as const,
    deadline: '35d left',
    color: 'from-primary-500 to-primary-600',
    progress: 0,
    createdAt: '2026-07-16',
  },
  // Phase 3: Full Team
  {
    id: 't12',
    title: 'Build Animator Agent - video & motion',
    agent: 'You',
    priority: 'low' as const,
    status: 'Pending' as const,
    deadline: '40d left',
    color: 'from-orange-500 to-orange-600',
    progress: 0,
    createdAt: '2026-07-16',
  },
  {
    id: 't13',
    title: 'Build Marketer Agent - SEO & social',
    agent: 'You',
    priority: 'medium' as const,
    status: 'Pending' as const,
    deadline: '45d left',
    color: 'from-cyan-500 to-cyan-600',
    progress: 0,
    createdAt: '2026-07-16',
  },
  {
    id: 't14',
    title: 'Build Support Agent - client communication',
    agent: 'You',
    priority: 'medium' as const,
    status: 'Pending' as const,
    deadline: '50d left',
    color: 'from-teal-500 to-teal-600',
    progress: 0,
    createdAt: '2026-07-16',
  },
  {
    id: 't15',
    title: 'Build Accountant Agent - finances',
    agent: 'You',
    priority: 'low' as const,
    status: 'Pending' as const,
    deadline: '55d left',
    color: 'from-yellow-500 to-yellow-600',
    progress: 0,
    createdAt: '2026-07-16',
  },
  {
    id: 't16',
    title: 'Implement inter-agent communication',
    agent: 'You',
    priority: 'high' as const,
    status: 'Pending' as const,
    deadline: '60d left',
    color: 'from-primary-500 to-primary-600',
    progress: 0,
    createdAt: '2026-07-16',
  },
  // Phase 4: Dashboard & UX
  {
    id: 't17',
    title: 'Task management UI (create, assign, track)',
    agent: 'You',
    priority: 'medium' as const,
    status: 'Pending' as const,
    deadline: '65d left',
    color: 'from-primary-500 to-primary-600',
    progress: 0,
    createdAt: '2026-07-16',
  },
  {
    id: 't18',
    title: 'Approval workflow UI (review, approve, reject)',
    agent: 'You',
    priority: 'medium' as const,
    status: 'Pending' as const,
    deadline: '70d left',
    color: 'from-primary-500 to-primary-600',
    progress: 0,
    createdAt: '2026-07-16',
  },
  {
    id: 't19',
    title: 'Agent status monitoring (online, busy, idle)',
    agent: 'You',
    priority: 'low' as const,
    status: 'Pending' as const,
    deadline: '75d left',
    color: 'from-primary-500 to-primary-600',
    progress: 0,
    createdAt: '2026-07-16',
  },
  {
    id: 't20',
    title: 'Analytics dashboard (productivity, throughput)',
    agent: 'You',
    priority: 'low' as const,
    status: 'Pending' as const,
    deadline: '80d left',
    color: 'from-primary-500 to-primary-600',
    progress: 0,
    createdAt: '2026-07-16',
  },
  {
    id: 't21',
    title: 'Real-time updates (Supabase Realtime)',
    agent: 'You',
    priority: 'medium' as const,
    status: 'Pending' as const,
    deadline: '85d left',
    color: 'from-primary-500 to-primary-600',
    progress: 0,
    createdAt: '2026-07-16',
  },
  // Phase 5: Production
  {
    id: 't22',
    title: 'Testing & QA',
    agent: 'You',
    priority: 'high' as const,
    status: 'Pending' as const,
    deadline: '90d left',
    color: 'from-primary-500 to-primary-600',
    progress: 0,
    createdAt: '2026-07-16',
  },
  {
    id: 't23',
    title: 'Production deployment (Vercel)',
    agent: 'You',
    priority: 'high' as const,
    status: 'Pending' as const,
    deadline: '95d left',
    color: 'from-primary-500 to-primary-600',
    progress: 0,
    createdAt: '2026-07-16',
  },
  {
    id: 't24',
    title: 'Monitoring & logging setup',
    agent: 'You',
    priority: 'medium' as const,
    status: 'Pending' as const,
    deadline: '100d left',
    color: 'from-primary-500 to-primary-600',
    progress: 0,
    createdAt: '2026-07-16',
  },
  {
    id: 't25',
    title: 'Documentation',
    agent: 'You',
    priority: 'low' as const,
    status: 'Pending' as const,
    deadline: '105d left',
    color: 'from-primary-500 to-primary-600',
    progress: 0,
    createdAt: '2026-07-16',
  },
  {
    id: 't26',
    title: 'Future agent expansion framework',
    agent: 'You',
    priority: 'low' as const,
    status: 'Pending' as const,
    deadline: '110d left',
    color: 'from-primary-500 to-primary-600',
    progress: 0,
    createdAt: '2026-07-16',
  },
]

// ============================================================
// REAL APPROVALS - Decisions you need to make
// ============================================================

export const initialApprovals: Approval[] = [
  {
    id: 'a1',
    title: 'Approve Supabase project configuration',
    agent: 'You',
    type: 'Major',
    time: 'Pending your decision',
    color: 'from-primary-500 to-primary-600',
    status: 'pending',
  },
  {
    id: 'a2',
    title: 'Choose backend framework approach',
    agent: 'You',
    type: 'Major',
    time: 'Pending your decision',
    color: 'from-primary-500 to-primary-600',
    status: 'pending',
  },
  {
    id: 'a3',
    title: 'Select deployment platform (Vercel vs other)',
    agent: 'You',
    type: 'Minor',
    time: 'Pending your decision',
    color: 'from-primary-500 to-primary-600',
    status: 'pending',
  },
]

// ============================================================
// REAL ACTIVITIES - Actual project development activity
// ============================================================

const now = Date.now()
const MINUTE = 60000
const HOUR = 3600000

export const activities: Activity[] = [
  {
    id: 'act1',
    agent: 'You',
    action: 'completed',
    detail: 'Dashboard UI shell - all components built',
    time: '2h ago',
    color: 'from-primary-500 to-primary-600',
    timestamp: now - 2 * HOUR,
  },
  {
    id: 'act2',
    agent: 'You',
    action: 'started',
    detail: 'GitHub CI/CD pipeline setup',
    time: '4h ago',
    color: 'from-primary-500 to-primary-600',
    timestamp: now - 4 * HOUR,
  },
  {
    id: 'act3',
    agent: 'You',
    action: 'updated',
    detail: 'Project README with implementation phases',
    time: '1d ago',
    color: 'from-primary-500 to-primary-600',
    timestamp: now - 24 * HOUR,
  },
  {
    id: 'act4',
    agent: 'You',
    action: 'created',
    detail: 'Monorepo structure with apps/dashboard',
    time: '2d ago',
    color: 'from-primary-500 to-primary-600',
    timestamp: now - 48 * HOUR,
  },
  {
    id: 'act5',
    agent: 'You',
    action: 'planned',
    detail: '8 AI agent definitions documented in README',
    time: '3d ago',
    color: 'from-primary-500 to-primary-600',
    timestamp: now - 72 * HOUR,
  },
  {
    id: 'act6',
    agent: 'You',
    action: 'designed',
    detail: 'System architecture diagram with Supabase hub',
    time: '4d ago',
    color: 'from-primary-500 to-primary-600',
    timestamp: now - 96 * HOUR,
  },
  {
    id: 'act7',
    agent: 'You',
    action: 'researched',
    detail: 'Deep Seek AI models for agent reasoning',
    time: '5d ago',
    color: 'from-primary-500 to-primary-600',
    timestamp: now - 120 * HOUR,
  },
  {
    id: 'act8',
    agent: 'You',
    action: 'initialized',
    detail: 'Git repository and initial commit',
    time: '6d ago',
    color: 'from-primary-500 to-primary-600',
    timestamp: now - 144 * HOUR,
  },
]

// ============================================================
// REAL TECH STACK - Technologies being used
// ============================================================

const techStackRaw: TechCategory[] = [
  {
    category: 'Frontend',
    items: [
      { name: 'Next.js 14', status: 'completed', progress: 100 },
      { name: 'React 18', status: 'completed', progress: 100 },
      { name: 'TypeScript', status: 'completed', progress: 100 },
      { name: 'Tailwind CSS', status: 'completed', progress: 100 },
    ],
  },
  {
    category: 'Backend & API',
    items: [
      { name: 'Python FastAPI', status: 'planned', progress: 0 },
      { name: 'Node.js Express', status: 'planned', progress: 0 },
      { name: 'RESTful Endpoints', status: 'planned', progress: 0 },
      { name: 'WebSocket Server', status: 'planned', progress: 0 },
    ],
  },
  {
    category: 'AI & Agents',
    items: [
      { name: 'Deep Seek Integration', status: 'planned', progress: 0 },
      { name: 'Manager Agent', status: 'planned', progress: 0 },
      { name: 'Developer Agent', status: 'planned', progress: 0 },
      { name: 'Designer Agent', status: 'planned', progress: 0 },
      { name: 'Writer Agent', status: 'planned', progress: 0 },
      { name: 'Marketer Agent', status: 'planned', progress: 0 },
      { name: 'Support Agent', status: 'planned', progress: 0 },
      { name: 'Accountant Agent', status: 'planned', progress: 0 },
      { name: 'Animator Agent', status: 'planned', progress: 0 },
    ],
  },
  {
    category: 'Data & Storage',
    items: [
      { name: 'Supabase PostgreSQL', status: 'planned', progress: 0 },
      { name: 'Supabase Auth', status: 'planned', progress: 0 },
      { name: 'Supabase Storage', status: 'planned', progress: 0 },
      { name: 'Supabase Realtime', status: 'planned', progress: 0 },
    ],
  },
  {
    category: 'DevOps & Deployment',
    items: [
      { name: 'GitHub CI/CD', status: 'in-progress', progress: 40 },
      { name: 'Vercel Deployment', status: 'planned', progress: 0 },
      { name: 'Docker Setup', status: 'planned', progress: 0 },
      { name: 'Monitoring', status: 'planned', progress: 0 },
    ],
  },
  {
    category: 'Testing & Quality',
    items: [
      { name: 'Unit Tests', status: 'planned', progress: 0 },
      { name: 'E2E Testing', status: 'planned', progress: 0 },
      { name: 'Code Coverage', status: 'planned', progress: 0 },
      { name: 'Performance Testing', status: 'planned', progress: 0 },
    ],
  },
]

export const techStack: TechCategory[] = techStackRaw

// Helper functions for section progress
function techStackCompletedCount(): number {
  let count = 0
  techStackRaw.forEach(cat => {
    cat.items.forEach(item => { if (item.status === 'completed') count++ })
  })
  return count
}

function techStackTotalCount(): number {
  let count = 0
  techStackRaw.forEach(cat => { count += cat.items.length })
  return count
}

// ============================================================
// REAL SECTION PROGRESS - Build phase status
// ============================================================

export const sections: Section[] = [
  {
    name: 'Phase 1: Foundation',
    progress: Math.round((doneItems.length / phases[0].tasks.length) * 100),
    status: 'in-progress',
    tasks: { total: phases[0].tasks.length, done: doneItems.length },
  },
  {
    name: 'Phase 2: Core Agents',
    progress: 0,
    status: 'planned',
    tasks: { total: phases[1].tasks.length, done: 0 },
  },
  {
    name: 'Phase 3: Full Team',
    progress: 0,
    status: 'planned',
    tasks: { total: phases[2].tasks.length, done: 0 },
  },
  {
    name: 'Phase 4: Dashboard & UX',
    progress: 0,
    status: 'planned',
    tasks: { total: phases[3].tasks.length, done: 0 },
  },
  {
    name: 'Phase 5: Production',
    progress: 0,
    status: 'planned',
    tasks: { total: phases[4].tasks.length, done: 0 },
  },
]

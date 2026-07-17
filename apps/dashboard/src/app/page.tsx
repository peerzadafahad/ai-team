'use client'

import React, { useState } from 'react'
import Header from '@/components/Header'
import StatsCards from '@/components/StatsCards'
import AgentGrid from '@/components/AgentGrid'
import TaskList from '@/components/TaskList'
import ApprovalQueue from '@/components/ApprovalQueue'
import ActivityFeed from '@/components/ActivityFeed'
import TechStackSection from '@/components/TechStackSection'
import SectionProgress from '@/components/SectionProgress'

export default function DashboardPage() {
  const [activePage, setActivePage] = useState('dashboard')

  const renderPage = () => {
    switch (activePage) {
      case 'dashboard':
        return (
          <>
            <div className="animate-slide-up">
              <h1 className="text-title">
                <span className="gradient-text">Dashboard Overview</span>
              </h1>
            </div>
            <SectionProgress />
            <StatsCards />
            <AgentGrid onAgentClick={(name) => setActivePage(`agent-${name.toLowerCase()}`)} />
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
              <TaskList />
              <ApprovalQueue />
            </div>
            <ActivityFeed />
          </>
        )
      case 'agents':
        return (
          <div className="animate-slide-up">
            <div className="mb-4">
              <h1 className="text-title">
                AI <span className="gradient-text">Agents</span>
              </h1>
              <p className="text-muted mt-0.5">Manage your AI team members and their capabilities</p>
            </div>
            <AgentGrid detailed onAgentClick={(name) => setActivePage(`agent-${name.toLowerCase()}`)} />
          </div>
        )
      case 'tasks':
        return (
          <div className="animate-slide-up">
            <div className="mb-4">
              <h1 className="text-title">
                Task <span className="gradient-text">Management</span>
              </h1>
              <p className="text-muted mt-0.5">Track and manage all active tasks across your AI team</p>
            </div>
            <TaskList detailed />
          </div>
        )
      case 'approvals':
        return (
          <div className="animate-slide-up">
            <div className="mb-4">
              <h1 className="text-title">
                Approval <span className="gradient-text">Queue</span>
              </h1>
              <p className="text-muted mt-0.5">Review and approve work submitted by your AI agents</p>
            </div>
            <ApprovalQueue detailed />
          </div>
        )
      case 'analytics':
        return (
          <div className="animate-slide-up">
            <div className="mb-4">
              <h1 className="text-title">
                Analytics <span className="gradient-text">Dashboard</span>
              </h1>
              <p className="text-muted mt-0.5">Performance metrics and insights for your AI team</p>
            </div>
            <StatsCards detailed />
            <div className="mt-4 grid grid-cols-1 lg:grid-cols-2 gap-4">
              <ActivityFeed detailed />
              <TechStackSection />
            </div>
          </div>
        )
      case 'techstack':
        return (
          <div className="animate-slide-up">
            <div className="mb-4">
              <h1 className="text-title">
                Tech <span className="gradient-text">Stack</span>
              </h1>
              <p className="text-muted mt-0.5">Technology stack and project completion status</p>
            </div>
            <TechStackSection detailed />
          </div>
        )
      case 'settings':
        return (
          <div className="animate-slide-up">
            <div className="mb-4">
              <h1 className="text-title">
                <span className="gradient-text">Settings</span>
              </h1>
              <p className="text-muted mt-0.5">Configure your AI team dashboard preferences</p>
            </div>
            <div className="card p-5">
              <div className="space-y-4">
                {[
                  { label: 'Notifications', desc: 'Email and push notifications for task updates', enabled: true },
                  { label: 'Auto-approve minor tasks', desc: 'Automatically approve low-priority tasks', enabled: false },
                  { label: 'Dark mode', desc: 'System default - currently dark', enabled: true },
                  { label: 'Activity logging', desc: 'Keep detailed logs of all agent activities', enabled: true },
                ].map((setting, i) => (
                  <div key={i} className="flex items-center justify-between p-3 rounded-lg bg-gray-800/20 border border-gray-800/50">
                    <div>
                      <p className="text-sm font-medium text-gray-200">{setting.label}</p>
                      <p className="text-muted">{setting.desc}</p>
                    </div>
                    <div className={`w-10 h-5 rounded-full transition-colors duration-200 ${setting.enabled ? 'bg-primary-500' : 'bg-gray-700'} relative cursor-pointer`}>
                      <div className={`absolute top-0.5 w-4 h-4 rounded-full bg-white shadow transition-transform duration-200 ${setting.enabled ? 'left-5' : 'left-0.5'}`} />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )
      default:
        if (activePage.startsWith('agent-')) {
          const agentName = activePage.replace('agent-', '')
          return <AgentDetailPage agentName={agentName} onBack={() => setActivePage('agents')} />
        }
        return null
    }
  }

  return (
    <div className="min-h-screen bg-[#0a0a0f]">
      {/* Background effects */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-primary-500/8 rounded-full blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-accent-500/8 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary-500/3 rounded-full blur-3xl" />
      </div>

      {/* Header with navigation */}
      <Header activePage={activePage} onNavigate={setActivePage} />

      {/* Main content - full width */}
      <main className="p-5 space-y-4 relative z-10">
        {renderPage()}
      </main>
    </div>
  )
}

function AgentDetailPage({ agentName, onBack }: { agentName: string; onBack: () => void }) {
  const agents: Record<string, any> = {
    manager: { name: 'Manager', role: 'Team Lead', status: 'active', tasks: 5, color: 'from-purple-500 to-purple-600', description: 'Oversees all team operations, assigns tasks, and ensures project milestones are met on time.', skills: ['Task Assignment', 'Project Planning', 'Team Coordination', 'Deadline Tracking'], projects: ['Agency Rebrand', 'Client Onboarding'], completionRate: 92 },
    developer: { name: 'Developer', role: 'Web & App Dev', status: 'busy', tasks: 8, color: 'from-blue-500 to-blue-600', description: 'Builds and maintains web applications, APIs, and handles technical implementations.', skills: ['React/Next.js', 'Node.js', 'API Development', 'Database Design'], projects: ['Landing Page', 'API Integration'], completionRate: 78 },
    designer: { name: 'Designer', role: 'UI/UX & Branding', status: 'active', tasks: 3, color: 'from-pink-500 to-pink-600', description: 'Creates stunning visual designs, brand identities, and user experiences.', skills: ['UI Design', 'Brand Identity', 'Prototyping', 'Design Systems'], projects: ['Brand Identity', 'Dashboard UI'], completionRate: 88 },
    animator: { name: 'Animator', role: 'Video & Motion', status: 'idle', tasks: 1, color: 'from-orange-500 to-orange-600', description: 'Produces motion graphics, animations, and video content for marketing.', skills: ['Motion Graphics', 'Video Editing', '2D Animation', 'VFX'], projects: ['Product Demo'], completionRate: 65 },
    writer: { name: 'Writer', role: 'Content & Copy', status: 'active', tasks: 4, color: 'from-green-500 to-green-600', description: 'Crafts compelling copy, blog posts, and content strategies.', skills: ['Copywriting', 'SEO Writing', 'Blog Posts', 'Content Strategy'], projects: ['Blog Series', 'SEO Content'], completionRate: 85 },
    marketer: { name: 'Marketer', role: 'SEO & Social', status: 'busy', tasks: 6, color: 'from-cyan-500 to-cyan-600', description: 'Drives traffic, manages social media, and optimizes marketing campaigns.', skills: ['SEO', 'Social Media', 'PPC Ads', 'Analytics'], projects: ['Social Campaign', 'SEO Audit'], completionRate: 72 },
    support: { name: 'Support', role: 'Client Support', status: 'active', tasks: 2, color: 'from-teal-500 to-teal-600', description: 'Handles client inquiries, resolves issues, and maintains satisfaction.', skills: ['Client Communication', 'Issue Resolution', 'Documentation', 'CRM'], projects: ['Support Portal'], completionRate: 95 },
    accountant: { name: 'Accountant', role: 'Finance & Billing', status: 'idle', tasks: 0, color: 'from-yellow-500 to-yellow-600', description: 'Manages finances, invoicing, and financial reporting.', skills: ['Bookkeeping', 'Invoicing', 'Financial Reports', 'Budgeting'], projects: ['Q4 Budget'], completionRate: 60 },
  }

  const agent = agents[agentName] || agents['developer']

  return (
    <div className="animate-slide-up">
      {/* Back button */}
      <button onClick={onBack} className="flex items-center gap-1.5 text-xs text-gray-400 hover:text-gray-200 transition-colors mb-4">
        <span>← Back to Agents</span>
      </button>

      {/* Agent Header */}
      <div className="card p-5">
        <div className="flex items-start gap-4">
          <div className={`agent-icon-lg bg-gradient-to-br ${agent.color}`}>
            {agent.name.charAt(0)}
          </div>
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-3">
              <h1 className="text-title">{agent.name}</h1>
              <span className={`badge-${agent.status}`}>
                {agent.status.charAt(0).toUpperCase() + agent.status.slice(1)}
              </span>
            </div>
            <p className="text-label mt-0.5">{agent.role}</p>
            <p className="text-muted mt-2">{agent.description}</p>
          </div>
          <div className="text-right">
            <p className="text-2xl font-bold text-white">{agent.tasks}</p>
            <p className="text-muted">Active Tasks</p>
          </div>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
        <div className="card p-4">
          <p className="text-muted mb-1">Completion Rate</p>
          <div className="flex items-center gap-3">
            <p className="text-lg font-bold text-white">{agent.completionRate}%</p>
            <div className="flex-1 progress-bar">
              <div className="progress-fill-gradient" style={{ width: `${agent.completionRate}%` }} />
            </div>
          </div>
        </div>
        <div className="card p-4">
          <p className="text-muted mb-1">Skills</p>
          <div className="flex flex-wrap gap-1.5">
            {agent.skills.map((skill: string, i: number) => (
              <span key={i} className="px-2 py-0.5 rounded-md bg-gray-800/50 border border-gray-700/50 text-xs text-gray-300">
                {skill}
              </span>
            ))}
          </div>
        </div>
        <div className="card p-4">
          <p className="text-muted mb-1">Active Projects</p>
          <div className="space-y-1.5">
            {agent.projects.map((project: string, i: number) => (
              <div key={i} className="flex items-center gap-2 text-xs text-gray-300">
                <span className="w-1.5 h-1.5 rounded-full bg-primary-400" />
                {project}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Recent Activity */}
      <div className="card p-5 mt-4">
        <h2 className="text-subtitle mb-3">Recent Activity</h2>
        <div className="space-y-2">
          {[
            { action: 'Completed task', detail: 'API Integration', time: '2 min ago' },
            { action: 'Started new task', detail: 'Database Optimization', time: '1h ago' },
            { action: 'Updated project', detail: 'Landing Page v2', time: '3h ago' },
            { action: 'Submitted for review', detail: 'Code Review Request', time: '5h ago' },
          ].map((activity, i) => (
            <div key={i} className="flex items-center gap-3 p-2.5 rounded-lg bg-gray-800/20 border border-gray-800/50">
              <div className={`w-2 h-2 rounded-full bg-gradient-to-br ${agent.color}`} />
              <p className="text-xs text-gray-300 flex-1">
                <span className="font-medium text-gray-200">{agent.name}</span>
                {' '}{activity.action}{' '}
                <span className="text-muted">{activity.detail}</span>
              </p>
              <span className="text-muted">{activity.time}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

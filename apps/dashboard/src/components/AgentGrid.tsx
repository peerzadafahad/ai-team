'use client'

import React from 'react'

const agents = [
  { name: 'Manager', role: 'Team Lead', status: 'active', tasks: 5, completed: 12, totalTasks: 17, color: 'from-purple-500 to-purple-600', progress: 92, projects: ['Agency Rebrand', 'Client Onboarding'], skills: ['Leadership', 'Planning', 'Coordination'], hoursToday: 6 },
  { name: 'Developer', role: 'Web & App Dev', status: 'busy', tasks: 8, completed: 22, totalTasks: 30, color: 'from-blue-500 to-blue-600', progress: 78, projects: ['Landing Page', 'API Integration'], skills: ['React', 'Node.js', 'APIs'], hoursToday: 7 },
  { name: 'Designer', role: 'UI/UX & Branding', status: 'active', tasks: 3, completed: 15, totalTasks: 18, color: 'from-pink-500 to-pink-600', progress: 88, projects: ['Brand Identity', 'Dashboard UI'], skills: ['Figma', 'UI/UX', 'Branding'], hoursToday: 5 },
  { name: 'Animator', role: 'Video & Motion', status: 'idle', tasks: 1, completed: 8, totalTasks: 12, color: 'from-orange-500 to-orange-600', progress: 65, projects: ['Product Demo'], skills: ['After Effects', 'Premiere'], hoursToday: 2 },
  { name: 'Writer', role: 'Content & Copy', status: 'active', tasks: 4, completed: 18, totalTasks: 22, color: 'from-green-500 to-green-600', progress: 85, projects: ['Blog Series', 'SEO Content'], skills: ['Copywriting', 'SEO', 'Editing'], hoursToday: 4 },
  { name: 'Marketer', role: 'SEO & Social', status: 'busy', tasks: 6, completed: 14, totalTasks: 20, color: 'from-cyan-500 to-cyan-600', progress: 72, projects: ['Social Campaign', 'SEO Audit'], skills: ['SEO', 'Social Media', 'Analytics'], hoursToday: 6 },
  { name: 'Support', role: 'Client Support', status: 'active', tasks: 2, completed: 28, totalTasks: 30, color: 'from-teal-500 to-teal-600', progress: 95, projects: ['Support Portal'], skills: ['CRM', 'Communication'], hoursToday: 5 },
  { name: 'Accountant', role: 'Finance & Billing', status: 'idle', tasks: 0, completed: 6, totalTasks: 10, color: 'from-yellow-500 to-yellow-600', progress: 60, projects: ['Q4 Budget'], skills: ['Bookkeeping', 'Reports'], hoursToday: 1 },
]

export default function AgentGrid({ detailed, onAgentClick }: { detailed?: boolean; onAgentClick?: (name: string) => void }) {
  const totalCompleted = agents.reduce((sum, a) => sum + a.completed, 0)
  const totalAll = agents.reduce((sum, a) => sum + a.totalTasks, 0)

  return (
    <div className="card p-4">
      <div className="flex items-center justify-between mb-4">
        <div>
          <h2 className="text-subtitle">AI Team Members</h2>
          <p className="text-muted">{agents.filter(a => a.status === 'active' || a.status === 'busy').length} agents online · {totalCompleted}/{totalAll} tasks completed</p>
        </div>
        <button className="text-xs text-primary-400 hover:text-primary-300 transition-colors">
          View All →
        </button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2.5">
        {agents.map((agent) => (
          <div
            key={agent.name}
            onClick={() => onAgentClick?.(agent.name)}
            className="card-agent group relative"
          >
            {/* Gradient accent line */}
            <div className={`accent-line bg-gradient-to-r ${agent.color}`} />

            {/* Content in one row: icon + name/role + status */}
            <div className="flex items-center gap-2.5 p-3 pb-0">
              <div className={`agent-icon bg-gradient-to-br ${agent.color}`}>
                {agent.name.charAt(0)}
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-semibold text-white truncate">{agent.name}</p>
                <p className="text-muted truncate">{agent.role}</p>
              </div>
              <span className={`badge-${agent.status}`}>
                {agent.status.charAt(0).toUpperCase() + agent.status.slice(1)}
              </span>
            </div>

            {/* Stats row */}
            <div className="px-3 py-2">
              <p className="text-muted">{agent.tasks} active · {agent.completed} done</p>
            </div>

            {/* Progress bar at bottom full width */}
            <div className="px-3 pb-3">
              <div className="progress-bar">
                <div
                  className="progress-fill-gradient"
                  style={{ width: `${agent.progress}%` }}
                />
              </div>
            </div>

            {detailed && (
              <div className="px-3 pb-3 pt-0 space-y-1.5">
                <p className="text-muted">Completed: {agent.completed}/{agent.totalTasks} · {agent.hoursToday}h today</p>
                <div className="flex flex-wrap gap-1">
                  {agent.projects.map((project, i) => (
                    <span key={i} className="px-1.5 py-0.5 rounded bg-gray-800/50 border border-gray-700/50 text-xs text-gray-400">
                      {project}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}

'use client'

import React from 'react'

const agents = [
  { name: 'Manager', icon: '👔', role: 'Team Lead', status: 'active', tasks: 5, color: 'from-purple-500 to-purple-600' },
  { name: 'Developer', icon: '💻', role: 'Web & App Dev', status: 'busy', tasks: 8, color: 'from-blue-500 to-blue-600' },
  { name: 'Designer', icon: '🎨', role: 'UI/UX & Branding', status: 'active', tasks: 3, color: 'from-pink-500 to-pink-600' },
  { name: 'Animator', icon: '🎬', role: 'Video & Motion', status: 'idle', tasks: 1, color: 'from-orange-500 to-orange-600' },
  { name: 'Writer', icon: '✍️', role: 'Content & Copy', status: 'active', tasks: 4, color: 'from-green-500 to-green-600' },
  { name: 'Marketer', icon: '📈', role: 'SEO & Social', status: 'busy', tasks: 6, color: 'from-cyan-500 to-cyan-600' },
  { name: 'Support', icon: '🛟', role: 'Client Support', status: 'active', tasks: 2, color: 'from-teal-500 to-teal-600' },
  { name: 'Accountant', icon: '💰', role: 'Finance & Billing', status: 'idle', tasks: 0, color: 'from-yellow-500 to-yellow-600' },
]

const statusStyles: Record<string, string> = {
  active: 'status-active',
  busy: 'status-busy',
  idle: 'status-idle',
  offline: 'status-offline',
}

export default function AgentGrid() {
  return (
    <div className="glass-card p-5">
      <div className="flex items-center justify-between mb-5">
        <div>
          <h2 className="text-lg font-semibold text-white">AI Team Members</h2>
          <p className="text-sm text-gray-400">8 agents online · All systems operational</p>
        </div>
        <button className="text-sm text-primary-400 hover:text-primary-300 transition-colors">
          View All →
        </button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
        {agents.map((agent) => (
          <div
            key={agent.name}
            className="group relative p-4 rounded-xl bg-gray-800/30 border border-gray-800/50 hover:bg-gray-800/50 hover:border-gray-700/50 transition-all duration-200 cursor-pointer"
          >
            {/* Gradient accent line */}
            <div className={`absolute top-0 left-4 right-4 h-0.5 rounded-full bg-gradient-to-r ${agent.color} opacity-0 group-hover:opacity-100 transition-opacity`} />

            <div className="flex items-center gap-3 mb-3">
              <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${agent.color} flex items-center justify-center text-lg shadow-lg`}>
                {agent.icon}
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-semibold text-white truncate">{agent.name}</p>
                <p className="text-xs text-gray-400 truncate">{agent.role}</p>
              </div>
            </div>

            <div className="flex items-center justify-between">
              <span className={statusStyles[agent.status]}>
                {agent.status.charAt(0).toUpperCase() + agent.status.slice(1)}
              </span>
              <span className="text-xs text-gray-500">
                {agent.tasks} tasks
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

'use client'

import React from 'react'

const tasks = [
  {
    title: 'Design new landing page',
    agent: 'Designer',
    agentIcon: '🎨',
    priority: 'high',
    status: 'In Progress',
    deadline: '2h left',
    color: 'from-pink-500 to-pink-600',
  },
  {
    title: 'Fix API authentication bug',
    agent: 'Developer',
    agentIcon: '💻',
    priority: 'urgent',
    status: 'Review',
    deadline: 'Overdue',
    color: 'from-blue-500 to-blue-600',
  },
  {
    title: 'Write SEO blog post',
    agent: 'Writer',
    agentIcon: '✍️',
    priority: 'medium',
    status: 'In Progress',
    deadline: '1d left',
    color: 'from-green-500 to-green-600',
  },
  {
    title: 'Client onboarding video',
    agent: 'Animator',
    agentIcon: '🎬',
    priority: 'low',
    status: 'Pending',
    deadline: '3d left',
    color: 'from-orange-500 to-orange-600',
  },
  {
    title: 'Monthly financial report',
    agent: 'Accountant',
    agentIcon: '💰',
    priority: 'high',
    status: 'In Progress',
    deadline: '5h left',
    color: 'from-yellow-500 to-yellow-600',
  },
]

const priorityStyles: Record<string, string> = {
  urgent: 'bg-red-500/10 text-red-400 border-red-500/20',
  high: 'bg-orange-500/10 text-orange-400 border-orange-500/20',
  medium: 'bg-blue-500/10 text-blue-400 border-blue-500/20',
  low: 'bg-gray-500/10 text-gray-400 border-gray-500/20',
}

const statusStyles: Record<string, string> = {
  'In Progress': 'bg-primary-500/10 text-primary-400',
  'Review': 'bg-yellow-500/10 text-yellow-400',
  'Pending': 'bg-gray-500/10 text-gray-400',
  'Completed': 'bg-accent-500/10 text-accent-400',
}

export default function TaskList() {
  return (
    <div className="glass-card p-5">
      <div className="flex items-center justify-between mb-5">
        <div>
          <h2 className="text-lg font-semibold text-white">Active Tasks</h2>
          <p className="text-sm text-gray-400">5 tasks requiring attention</p>
        </div>
        <button className="text-sm text-primary-400 hover:text-primary-300 transition-colors">
          View All →
        </button>
      </div>

      <div className="space-y-2">
        {tasks.map((task, index) => (
          <div
            key={index}
            className="group flex items-center gap-4 p-3 rounded-xl hover:bg-gray-800/30 transition-all duration-200 cursor-pointer"
          >
            {/* Agent icon */}
            <div className={`w-9 h-9 rounded-lg bg-gradient-to-br ${task.color} flex items-center justify-center text-sm shadow-lg shrink-0`}>
              {task.agentIcon}
            </div>

            {/* Task info */}
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-2 mb-0.5">
                <p className="text-sm font-medium text-gray-200 truncate group-hover:text-white transition-colors">
                  {task.title}
                </p>
                <span className={`text-[10px] font-medium px-1.5 py-0.5 rounded border ${priorityStyles[task.priority]}`}>
                  {task.priority}
                </span>
              </div>
              <div className="flex items-center gap-3 text-xs text-gray-500">
                <span>{task.agent}</span>
                <span>·</span>
                <span className={task.deadline === 'Overdue' ? 'text-red-400' : ''}>
                  {task.deadline}
                </span>
              </div>
            </div>

            {/* Status */}
            <span className={`text-xs font-medium px-2.5 py-1 rounded-full ${statusStyles[task.status]}`}>
              {task.status}
            </span>
          </div>
        ))}
      </div>
    </div>
  )
}

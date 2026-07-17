'use client'

import React from 'react'

const tasks = [
  {
    title: 'Design new landing page',
    agent: 'Designer',
    priority: 'high',
    status: 'In Progress',
    deadline: '2h left',
    color: 'from-pink-500 to-pink-600',
    progress: 60,
  },
  {
    title: 'Fix API authentication bug',
    agent: 'Developer',
    priority: 'urgent',
    status: 'Review',
    deadline: 'Overdue',
    color: 'from-blue-500 to-blue-600',
    progress: 90,
  },
  {
    title: 'Write SEO blog post',
    agent: 'Writer',
    priority: 'medium',
    status: 'In Progress',
    deadline: '1d left',
    color: 'from-green-500 to-green-600',
    progress: 45,
  },
  {
    title: 'Client onboarding video',
    agent: 'Animator',
    priority: 'low',
    status: 'Pending',
    deadline: '3d left',
    color: 'from-orange-500 to-orange-600',
    progress: 10,
  },
  {
    title: 'Monthly financial report',
    agent: 'Accountant',
    priority: 'high',
    status: 'In Progress',
    deadline: '5h left',
    color: 'from-yellow-500 to-yellow-600',
    progress: 35,
  },
]

export default function TaskList({ detailed }: { detailed?: boolean }) {
  const displayTasks = detailed ? [...tasks, ...tasks.slice(0, 3).map(t => ({ ...t, title: t.title + ' v2', deadline: '4d left', status: 'Pending' as const, progress: 5 }))] : tasks

  return (
    <div className="card p-4">
      <div className="flex items-center justify-between mb-4">
        <div>
          <h2 className="text-subtitle">Active Tasks</h2>
          <p className="text-muted">{displayTasks.length} tasks requiring attention</p>
        </div>
        <button className="text-xs text-primary-400 hover:text-primary-300 transition-colors">
          View All →
        </button>
      </div>

      <div className="space-y-1.5">
        {displayTasks.map((task, index) => (
          <div
            key={index}
            className="group flex items-center gap-3 p-2.5 rounded-lg hover:bg-gray-800/30 transition-all duration-200 cursor-pointer"
          >
            {/* Agent initial */}
            <div className={`agent-icon-sm bg-gradient-to-br ${task.color}`}>
              {task.agent.charAt(0)}
            </div>

            {/* Task info */}
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-2 mb-0.5">
                <p className="text-xs font-medium text-gray-200 truncate group-hover:text-white transition-colors">
                  {task.title}
                </p>
                <span className={`badge-${task.priority}`}>
                  {task.priority}
                </span>
              </div>
              <div className="flex items-center gap-2 text-muted">
                <span>{task.agent}</span>
                <span>·</span>
                <span className={task.deadline === 'Overdue' ? 'text-red-400' : ''}>
                  {task.deadline}
                </span>
              </div>
            </div>

            {/* Status */}
            <span className={`badge ${
              task.status === 'In Progress' ? 'bg-primary-500/10 text-primary-400 border-primary-500/20' :
              task.status === 'Review' ? 'bg-yellow-500/10 text-yellow-400 border-yellow-500/20' :
              task.status === 'Pending' ? 'bg-gray-500/10 text-gray-400 border-gray-500/20' :
              'bg-accent-500/10 text-accent-400 border-accent-500/20'
            }`}>
              {task.status}
            </span>
          </div>
        ))}
      </div>
    </div>
  )
}

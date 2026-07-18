'use client'

import React from 'react'
import { tasks } from '@/data/dashboard-data'

export default function TaskList() {
  const activeTasks = tasks.filter(t => t.status !== 'Completed')
  const completedCount = tasks.filter(t => t.status === 'Completed' || t.progress >= 100).length

  return (
    <div className="card p-4">
      <div className="flex items-center justify-between mb-4">
        <div>
          <h2 className="text-subtitle">Active Tasks</h2>
          <p className="text-muted">{activeTasks.length} tasks requiring attention · {completedCount} done</p>
        </div>
      </div>

      <div className="space-y-1.5">
        {activeTasks.map((task) => (
          <div
            key={task.id}
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
              task.status === ('Review' as string) ? 'bg-yellow-500/10 text-yellow-400 border-yellow-500/20' :
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

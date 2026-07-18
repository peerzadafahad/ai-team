'use client'

import React from 'react'
import { sections } from '@/data/dashboard-data'

export default function SectionProgress() {
  const overallProgress = Math.round(
    sections.reduce((sum, s) => sum + s.progress, 0) / sections.length
  )

  const totalTasks = sections.reduce((sum, s) => sum + s.tasks.total, 0)
  const doneTasks = sections.reduce((sum, s) => sum + s.tasks.done, 0)

  return (
    <div className="card p-4">
      <div className="flex items-center justify-between mb-3">
        <div>
          <h2 className="text-subtitle">Project Progress</h2>
          <p className="text-muted">{doneTasks}/{totalTasks} tasks completed across all sections</p>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-lg font-bold text-white">{overallProgress}%</span>
          <span className="text-muted">complete</span>
        </div>
      </div>

      {/* Overall progress */}
      <div className="mb-3 progress-bar h-2">
        <div
          className="progress-fill bg-gradient-to-r from-primary-500 via-accent-500 to-primary-500"
          style={{ width: `${overallProgress}%` }}
        />
      </div>

      {/* Section breakdown */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-2">
        {sections.map((section) => (
          <div key={section.name} className="card-item p-2.5 group">
            <div className="flex flex-row justify-between items-center gap-1.5 mb-1.5">
              <span className={`badge-${section.status === 'completed' ? 'done' : section.status === 'in-progress' ? 'wip' : 'planned'}`}>
                {section.status === 'completed' ? 'Done' : section.status === 'in-progress' ? 'WIP' : 'Plan'}
              </span>
              <p className="text-muted mt-0.5">{section.tasks.done}/{section.tasks.total} tasks</p>
            </div>
            <p className="text-xs text-gray-300 truncate group-hover:text-white transition-colors">
              {section.name}
            </p>
            <div className="mt-1.5 progress-bar">
              <div className="progress-fill-gradient" style={{ width: `${section.progress}%` }}/>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

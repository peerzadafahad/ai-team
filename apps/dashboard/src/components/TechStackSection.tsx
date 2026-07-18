'use client'

import React from 'react'
import { techStack } from '@/data/dashboard-data'

export default function TechStackSection() {
  const completedItems = techStack.reduce((acc, cat) => {
    return acc + cat.items.filter(item => item.status === 'completed').length
  }, 0)
  const totalItems = techStack.reduce((acc, cat) => acc + cat.items.length, 0)
  const overallProgress = Math.round((completedItems / totalItems) * 100)

  return (
    <div className="card p-4">
      <div className="flex items-center justify-between mb-4">
        <div>
          <h2 className="text-subtitle">Tech Stack Progress</h2>
          <p className="text-muted">{completedItems}/{totalItems} technologies completed</p>
        </div>
        <div className="text-right">
          <p className="text-lg font-bold text-white">{overallProgress}%</p>
          <p className="text-muted">Overall</p>
        </div>
      </div>

      {/* Overall progress bar */}
      <div className="mb-4 progress-bar h-2">
        <div
          className="progress-fill bg-gradient-to-r from-primary-500 via-accent-500 to-primary-500"
          style={{ width: `${overallProgress}%` }}
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {techStack.map((category) => {
          const catProgress = Math.round(
            category.items.reduce((sum, item) => sum + item.progress, 0) / category.items.length
          )
          return (
            <div key={category.category} className="card-item p-4">
              <div className="flex items-center justify-between mb-2">
                <h3 className="text-xs font-semibold text-gray-200">{category.category}</h3>
                <span className="text-muted">{catProgress}%</span>
              </div>

              {/* Category progress bar */}
              <div className="mb-3 progress-bar">
                <div
                  className="progress-fill-gradient"
                  style={{ width: `${catProgress}%` }}
                />
              </div>

              <div className="space-y-2">
                {category.items.map((item) => (
                  <div key={item.name} className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <span className={`badge-${
                        item.status === 'completed' ? 'done' : 
                        item.status === 'in-progress' ? 'wip' : 'planned'
                      }`}>
                        {item.status === 'completed' ? 'Done' : 
                         item.status === 'in-progress' ? 'In Progress' : 'Planned'}
                      </span>
                      <span className="text-xs text-gray-300">{item.name}</span>
                    </div>
                    <span className="text-muted">{item.progress}%</span>
                  </div>
                ))}
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

'use client'

import React from 'react'

const techStack = [
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
      { name: 'Node.js API Layer', status: 'in-progress', progress: 75 },
      { name: 'RESTful Endpoints', status: 'in-progress', progress: 60 },
      { name: 'WebSocket Server', status: 'planned', progress: 20 },
      { name: 'Authentication', status: 'completed', progress: 100 },
    ],
  },
  {
    category: 'AI & Agents',
    items: [
      { name: 'Agent Framework', status: 'in-progress', progress: 70 },
      { name: 'Task Orchestration', status: 'in-progress', progress: 55 },
      { name: 'Agent Communication', status: 'planned', progress: 30 },
      { name: 'Auto-scaling', status: 'planned', progress: 10 },
    ],
  },
  {
    category: 'Data & Storage',
    items: [
      { name: 'Database Schema', status: 'completed', progress: 100 },
      { name: 'Cache Layer', status: 'in-progress', progress: 65 },
      { name: 'File Storage', status: 'completed', progress: 100 },
      { name: 'Real-time Sync', status: 'planned', progress: 25 },
    ],
  },
  {
    category: 'DevOps & Deployment',
    items: [
      { name: 'CI/CD Pipeline', status: 'in-progress', progress: 60 },
      { name: 'Docker Setup', status: 'completed', progress: 100 },
      { name: 'Monitoring', status: 'planned', progress: 15 },
      { name: 'Load Balancing', status: 'planned', progress: 5 },
    ],
  },
  {
    category: 'Testing & Quality',
    items: [
      { name: 'Unit Tests', status: 'in-progress', progress: 50 },
      { name: 'E2E Testing', status: 'planned', progress: 20 },
      { name: 'Code Coverage', status: 'planned', progress: 10 },
      { name: 'Performance Testing', status: 'planned', progress: 5 },
    ],
  },
]

export default function TechStackSection({ detailed }: { detailed?: boolean }) {
  const overallProgress = Math.round(
    techStack.reduce((acc, cat) => {
      return acc + cat.items.reduce((sum, item) => sum + item.progress, 0) / cat.items.length
    }, 0) / techStack.length
  )

  const completedItems = techStack.reduce((acc, cat) => {
    return acc + cat.items.filter(item => item.status === 'completed').length
  }, 0)
  const totalItems = techStack.reduce((acc, cat) => acc + cat.items.length, 0)

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

      <div className="space-y-3 max-h-[400px] overflow-y-auto pr-1">
        {techStack.map((category) => {
          const catProgress = Math.round(
            category.items.reduce((sum, item) => sum + item.progress, 0) / category.items.length
          )
          return (
            <div key={category.category} className="card-item p-3">
              <div className="flex items-center justify-between mb-2">
                <h3 className="text-xs font-semibold text-gray-200">{category.category}</h3>
                <span className="text-muted">{catProgress}%</span>
              </div>

              {/* Category progress bar */}
              <div className="mb-2 progress-bar">
                <div
                  className="progress-fill-gradient"
                  style={{ width: `${catProgress}%` }}
                />
              </div>

              <div className="space-y-1.5">
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

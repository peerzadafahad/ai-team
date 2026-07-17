'use client'

import React from 'react'

const stats = [
  {
    label: 'Active Agents',
    value: '8',
    change: '+2 this week',
    trend: 'up',
    color: 'from-primary-500/20 to-primary-600/10',
    progress: 100,
    detail: 'All 8 agents operational',
  },
  {
    label: 'Active Tasks',
    value: '24',
    change: '+12% today',
    trend: 'up',
    color: 'from-accent-500/20 to-accent-600/10',
    progress: 65,
    detail: '74 total · 50 completed',
  },
  {
    label: 'Pending Approvals',
    value: '5',
    change: '3 urgent',
    trend: 'warning',
    color: 'from-yellow-500/20 to-yellow-600/10',
    progress: 40,
    detail: '3 major · 2 minor',
  },
  {
    label: 'Completed Today',
    value: '18',
    change: '92% success rate',
    trend: 'up',
    color: 'from-blue-500/20 to-blue-600/10',
    progress: 92,
    detail: '18 of 24 tasks completed',
  },
]

export default function StatsCards({ detailed }: { detailed?: boolean }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
      {stats.map((stat) => (
        <div
          key={stat.label}
          className="card-hover p-4 group"
        >
          <div className="flex items-start justify-between mb-2">
            <p className="text-xl font-bold text-white">{stat.value}</p>
            <span className={`badge ${
              stat.trend === 'up' 
                ? 'bg-accent-500/10 text-accent-400 border-accent-500/20' 
                : 'bg-yellow-500/10 text-yellow-400 border-yellow-500/20'
            }`}>
              {stat.change}
            </span>
          </div>
          <p className="text-muted">{stat.label}</p>
          {detailed && (
            <>
              <div className="mt-2 progress-bar">
                <div
                  className="progress-fill-gradient"
                  style={{ width: `${stat.progress}%` }}
                />
              </div>
              <p className="text-muted mt-1">{stat.detail}</p>
            </>
          )}
        </div>
      ))}
    </div>
  )
}

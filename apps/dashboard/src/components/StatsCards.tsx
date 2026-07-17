'use client'

import React from 'react'

const stats = [
  {
    icon: '🤖',
    label: 'Active Agents',
    value: '8',
    change: '+2 this week',
    trend: 'up',
    color: 'from-primary-500/20 to-primary-600/10',
  },
  {
    icon: '📋',
    label: 'Active Tasks',
    value: '24',
    change: '+12% today',
    trend: 'up',
    color: 'from-accent-500/20 to-accent-600/10',
  },
  {
    icon: '✅',
    label: 'Pending Approvals',
    value: '5',
    change: '3 urgent',
    trend: 'warning',
    color: 'from-yellow-500/20 to-yellow-600/10',
  },
  {
    icon: '📈',
    label: 'Completed Today',
    value: '18',
    change: '92% success rate',
    trend: 'up',
    color: 'from-blue-500/20 to-blue-600/10',
  },
]

export default function StatsCards() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      {stats.map((stat) => (
        <div
          key={stat.label}
          className="glass-card-hover p-5 group cursor-default"
        >
          <div className="flex items-start justify-between mb-3">
            <div className={`p-2.5 rounded-xl bg-gradient-to-br ${stat.color} border border-white/5`}>
              <span className="text-xl">{stat.icon}</span>
            </div>
            <span className={`text-xs font-medium px-2 py-0.5 rounded-full ${
              stat.trend === 'up' 
                ? 'bg-accent-500/10 text-accent-400' 
                : 'bg-yellow-500/10 text-yellow-400'
            }`}>
              {stat.change}
            </span>
          </div>
          <p className="text-2xl font-bold text-white mb-0.5">{stat.value}</p>
          <p className="text-sm text-gray-400">{stat.label}</p>
        </div>
      ))}
    </div>
  )
}

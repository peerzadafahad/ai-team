'use client'

import React from 'react'
import { stats } from '@/data/dashboard-data'

export default function StatsCards() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
      {stats.map((stat) => (
        <div
          key={stat.label}
          className="card-hover p-4 group"
        >
          <div className="flex items-center justify-between">
            <div className="flex flex-row items-center gap-2">
              <p className="text-xl font-bold text-white">{stat.value}</p>
              <p className="text-muted">{stat.label}</p>
            </div>
            <span className={`badge ${ stat.trend === 'up' 
                ? 'bg-accent-500/10 text-accent-400 border-accent-500/20' 
                : 'bg-yellow-500/10 text-yellow-400 border-yellow-500/20'
              }`}>{stat.change}
            </span>
          </div>
          
          <div className="mt-2 progress-bar">
            <div
              className="progress-fill-gradient"
              style={{ width: `${stat.progress}%` }}
            />
          </div>
          <p className="text-muted mt-1">{stat.detail}</p>
        </div>
      ))}
    </div>
  )
}

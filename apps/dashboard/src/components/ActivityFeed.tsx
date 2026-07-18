'use client'

import React from 'react'
import { activities } from '@/data/dashboard-data'

export default function ActivityFeed() {
  // Show most recent activities first
  const sortedActivities = [...activities].sort((a, b) => b.timestamp - a.timestamp)

  return (
    <div className="card p-4">
      <div className="flex items-center justify-between mb-4">
        <div>
          <h2 className="text-subtitle">Recent Activity</h2>
          <p className="text-muted">Live feed from all agents</p>
        </div>
        <div className="flex items-center gap-1.5">
          <span className="w-1.5 h-1.5 rounded-full bg-accent-500 animate-pulse" />
          <span className="text-muted">Live</span>
        </div>
      </div>

      <div className="space-y-0">
        {sortedActivities.map((activity, index) => (
          <div
            key={activity.id}
            className="relative flex items-start gap-2.5 pb-4 pl-3 last:pb-0"
          >
            {/* Timeline line */}
            {index < sortedActivities.length - 1 && (
              <div className="absolute left-[13px] top-6 bottom-0 w-px bg-gray-800" />
            )}
            
            {/* Timeline dot */}
            <div className={`relative z-10 w-2.5 h-2.5 rounded-full bg-gradient-to-br ${activity.color} ring-2 ring-gray-950 shrink-0 mt-0.5`} />

            <div className="flex-1 min-w-0">
              <p className="text-xs text-gray-300">
                <span className="font-medium text-gray-200">{activity.agent}</span>
                {' '}{activity.action}{' '}
                <span className="text-muted">{activity.detail}</span>
              </p>
              <p className="text-muted mt-0.5">{activity.time}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

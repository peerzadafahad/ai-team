'use client'

import React from 'react'

const activities = [
  {
    agent: 'Developer',
    action: 'completed task',
    detail: 'API Integration',
    time: '2 min ago',
    color: 'from-blue-500 to-blue-600',
  },
  {
    agent: 'Designer',
    action: 'submitted for approval',
    detail: 'Brand Identity Package',
    time: '10 min ago',
    color: 'from-pink-500 to-pink-600',
  },
  {
    agent: 'Manager',
    action: 'assigned task to',
    detail: 'Writer - Blog Post',
    time: '15 min ago',
    color: 'from-purple-500 to-purple-600',
  },
  {
    agent: 'Marketer',
    action: 'published campaign',
    detail: 'Social Media Ads',
    time: '30 min ago',
    color: 'from-cyan-500 to-cyan-600',
  },
  {
    agent: 'Support',
    action: 'resolved ticket',
    detail: 'Client #1024',
    time: '45 min ago',
    color: 'from-teal-500 to-teal-600',
  },
  {
    agent: 'Accountant',
    action: 'generated report',
    detail: 'Q3 Financial Summary',
    time: '1h ago',
    color: 'from-yellow-500 to-yellow-600',
  },
]

export default function ActivityFeed({ detailed }: { detailed?: boolean }) {
  const displayActivities = detailed
    ? [...activities, ...activities.slice(0, 3).map(a => ({ ...a, time: '2h ago' }))]
    : activities

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
        {displayActivities.map((activity, index) => (
          <div
            key={index}
            className="relative flex items-start gap-2.5 pb-4 pl-3 last:pb-0"
          >
            {/* Timeline line */}
            {index < displayActivities.length - 1 && (
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

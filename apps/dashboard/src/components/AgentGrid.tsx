'use client'

import React from 'react'
import { agents } from '@/data/dashboard-data'

export default function AgentGrid({ onAgentClick }: { onAgentClick?: (name: string) => void }) {
  const totalCompleted = agents.reduce((sum, a) => sum + a.completed, 0)
  const totalAll = agents.reduce((sum, a) => sum + a.totalTasks, 0)

  return (
    <div className="card p-4">
      <div className="flex items-center justify-between mb-4">
        <div>
          <h2 className="text-subtitle">AI Team Members</h2>
          <p className="text-muted">{agents.filter(a => a.status === 'active' || a.status === 'busy').length} agents online · {totalCompleted}/{totalAll} tasks completed</p>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2.5">
        {agents.map((agent) => (
          <div key={agent.name} onClick={() => onAgentClick?.(agent.name)} className="card-agent p-3 group relative">
            <div className="flex flex-row justify-between items-center gap-2.5">
              <div className="flex flex-col gap-1">
                <p className="text-sm font-semibold text-white truncate">{agent.name}</p>
                <p className="text-muted truncate">{agent.role}</p>
              </div>
              <span className={`badge-${agent.status}`}>
                {agent.status.charAt(0).toUpperCase() + agent.status.slice(1)}
              </span>
            </div>
            {/* Stats row */}
            <p className="text-muted">{agent.tasks} active · {agent.completed} done</p>
            {/* Progress bar at bottom full width */}
            <div className="progress-bar mt-2">
              <div className="progress-fill-gradient" style={{ width: `${agent.progress}%` }}/>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

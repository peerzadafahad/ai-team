'use client'

import React from 'react'
import { agents, tasks, activities } from '@/data/dashboard-data'
import type { Agent } from '@/data/dashboard-data'

interface DetailPanelProps {
  agentName: string | null
  onClose: () => void
}

export default function DetailPanel({ agentName, onClose }: DetailPanelProps) {
  if (!agentName) return null

  const agentMap: Record<string, Agent> = {}
  agents.forEach(a => { agentMap[a.name.toLowerCase()] = a })
  const agent = agentMap[agentName.toLowerCase()] || agentMap['developer']

  const agentTasks = tasks.filter(t => t.agent === agent.name && t.status !== 'Completed')
  const agentActivities = activities
    .filter(a => a.agent === agent.name)
    .sort((a, b) => b.timestamp - a.timestamp)

  return (
    <>
      {/* Overlay */}
      <div
        className="fixed inset-0 bg-black/40 backdrop-blur-sm z-40"
        onClick={onClose}
      />

      {/* Slide-out panel from right */}
      <div className="fixed right-0 top-0 h-full w-full max-w-md bg-gray-900/95 backdrop-blur-xl border-l border-gray-800/50 z-50 shadow-2xl shadow-black/30 animate-slide-left overflow-y-auto">
        {/* Header */}
        <div className="sticky top-0 bg-gray-900/95 backdrop-blur-xl border-b border-gray-800/40 z-10">
          <div className="flex items-center justify-between p-4">
            <div className="flex items-center gap-3">
              <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${agent.color} flex items-center justify-center text-sm font-bold text-white shadow-lg`}>
                {agent.name.charAt(0)}
              </div>
              <div>
                <h2 className="text-sm font-bold text-white">{agent.name}</h2>
                <p className="text-xs text-gray-400">{agent.role}</p>
              </div>
            </div>
            <button
              onClick={onClose}
              className="p-1.5 rounded-lg hover:bg-gray-800/50 transition-colors text-gray-400 hover:text-gray-200"
            >
              <span className="text-lg">✕</span>
            </button>
          </div>
        </div>

        <div className="p-4 space-y-4">
          {/* Status & Tasks */}
          <div className="grid grid-cols-3 gap-3">
            <div className="card-item p-3 text-center">
              <span className={`badge-${agent.status} inline-block mb-1`}>
                {agent.status.charAt(0).toUpperCase() + agent.status.slice(1)}
              </span>
              <p className="text-muted text-xs">Status</p>
            </div>
            <div className="card-item p-3 text-center">
              <p className="text-lg font-bold text-white">{agent.tasks}</p>
              <p className="text-muted text-xs">Active Tasks</p>
            </div>
            <div className="card-item p-3 text-center">
              <p className="text-lg font-bold text-white">{agent.completionRate}%</p>
              <p className="text-muted text-xs">Rate</p>
            </div>
          </div>

          {/* Description */}
          <div className="card-item p-3">
            <p className="text-xs text-gray-300 leading-relaxed">{agent.description}</p>
          </div>

          {/* Skills */}
          <div>
            <h3 className="text-xs font-semibold text-gray-200 mb-2">Skills</h3>
            <div className="flex flex-wrap gap-1.5">
              {agent.skills.map((skill, i) => (
                <span key={i} className="px-2 py-1 rounded-md bg-gray-800/50 border border-gray-700/50 text-xs text-gray-300">
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* Projects */}
          <div>
            <h3 className="text-xs font-semibold text-gray-200 mb-2">Active Projects</h3>
            <div className="space-y-1.5">
              {agent.projects.map((project, i) => (
                <div key={i} className="flex items-center gap-2 text-xs text-gray-300 card-item p-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary-400 shrink-0" />
                  {project}
                </div>
              ))}
            </div>
          </div>

          {/* Progress */}
          <div>
            <h3 className="text-xs font-semibold text-gray-200 mb-2">Progress</h3>
            <div className="card-item p-3">
              <div className="flex items-center justify-between mb-1.5">
                <span className="text-xs text-gray-300">Task Completion</span>
                <span className="text-muted">{agent.completed}/{agent.totalTasks}</span>
              </div>
              <div className="progress-bar">
                <div className="progress-fill-gradient" style={{ width: `${agent.progress}%` }} />
              </div>
              <p className="text-muted mt-1.5">{agent.hoursToday}h worked today</p>
            </div>
          </div>

          {/* Current Tasks */}
          {agentTasks.length > 0 && (
            <div>
              <h3 className="text-xs font-semibold text-gray-200 mb-2">Current Tasks</h3>
              <div className="space-y-1.5">
                {agentTasks.map((task) => (
                  <div key={task.id} className="card-item p-3">
                    <div className="flex items-center justify-between mb-1">
                      <p className="text-xs font-medium text-gray-200">{task.title}</p>
                      <span className={`badge-${task.priority}`}>{task.priority}</span>
                    </div>
                    <div className="flex items-center justify-between text-muted">
                      <span>{task.status}</span>
                      <span className={task.deadline === 'Overdue' ? 'text-red-400' : ''}>{task.deadline}</span>
                    </div>
                    <div className="mt-1.5 progress-bar">
                      <div className="progress-fill-gradient" style={{ width: `${task.progress}%` }} />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Recent Activity */}
          {agentActivities.length > 0 && (
            <div>
              <h3 className="text-xs font-semibold text-gray-200 mb-2">Recent Activity</h3>
              <div className="space-y-1.5">
                {agentActivities.map((activity) => (
                  <div key={activity.id} className="flex items-center gap-2.5 p-2.5 rounded-lg bg-gray-800/20 border border-gray-800/50">
                    <div className={`w-2 h-2 rounded-full bg-gradient-to-br ${activity.color} shrink-0`} />
                    <div className="flex-1 min-w-0">
                      <p className="text-xs text-gray-300">
                        <span className="font-medium text-gray-200">{activity.agent}</span>
                        {' '}{activity.action}{' '}
                        <span className="text-muted">{activity.detail}</span>
                      </p>
                    </div>
                    <span className="text-muted shrink-0">{activity.time}</span>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  )
}

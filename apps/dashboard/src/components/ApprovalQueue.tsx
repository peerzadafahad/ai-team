'use client'

import React, { useState } from 'react'
import { initialApprovals } from '@/data/dashboard-data'

export default function ApprovalQueue() {
  const [approvals, setApprovals] = useState(initialApprovals)
  const [actionMsg, setActionMsg] = useState('')

  const handleAction = (id: string, action: 'approved' | 'rejected') => {
    const item = approvals.find(a => a.id === id)
    if (!item) return
    setActionMsg(`${item.title} ${action}`)
    setApprovals(prev => prev.filter(a => a.id !== id))
    setTimeout(() => setActionMsg(''), 2000)
  }

  const pendingApprovals = approvals.filter(a => a.status === 'pending')
  const urgentCount = pendingApprovals.filter(a => a.type === 'Major').length

  return (
    <div className="card p-4">
      <div className="flex items-center justify-between mb-4">
        <div>
          <h2 className="text-subtitle">Approval Queue</h2>
          <p className="text-muted">{pendingApprovals.length} items awaiting your decision</p>
        </div>
        <span className="badge-busy">{urgentCount} urgent</span>
      </div>

      {/* Action feedback */}
      {actionMsg && (
        <div className="mb-3 p-2 rounded-lg bg-gray-800/30 border border-gray-700/50 text-xs text-gray-300 animate-slide-up">
          {actionMsg}
        </div>
      )}

      <div className="space-y-2">
        {pendingApprovals.map((item) => (
          <div key={item.id} className="card-item p-3 flex flex-row items-center justify-between gap-3">
            <div className="flex items-start gap-2.5">
              <div className={`agent-icon-sm bg-gradient-to-br ${item.color}`}>{item.agent.charAt(0)}</div>
              <div className="flex flex-col gap-0.5">
                <p className="text-xs font-medium text-gray-200">{item.title}</p>
                <p className="text-muted mt-0.5">
                  {item.agent} · {item.time}
                </p>
              </div>
            </div>
            <div className="flex flex-row items-center justify-end gap-1.5">
              <button onClick={() => handleAction(item.id, 'approved')}
                className="flex-1 px-2.5 py-1 bg-accent-500/10 border border-accent-500/20 rounded-lg text-xs font-medium text-accent-400 hover:bg-accent-500/20 transition-all">
                Approve
              </button>
              <button onClick={() => handleAction(item.id, 'rejected')}
                className="flex-1 px-2.5 py-1 bg-red-500/10 border border-red-500/20 rounded-lg text-xs font-medium text-red-400 hover:bg-red-500/20 transition-all">
                Reject
              </button>
              <button className="px-2.5 py-1 bg-gray-800/50 border border-gray-700/50 rounded-lg text-xs font-medium text-gray-400 hover:bg-gray-700/50 transition-all">
                Review
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

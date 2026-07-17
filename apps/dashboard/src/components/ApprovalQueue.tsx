'use client'

import React, { useState } from 'react'

const initialApprovals = [
  {
    title: 'Brand Identity Package',
    agent: 'Designer',
    type: 'Major',
    time: '10 min ago',
    color: 'from-pink-500 to-pink-600',
  },
  {
    title: 'Landing Page Deployment',
    agent: 'Developer',
    type: 'Major',
    time: '25 min ago',
    color: 'from-blue-500 to-blue-600',
  },
  {
    title: 'Q3 Marketing Strategy',
    agent: 'Marketer',
    type: 'Major',
    time: '1h ago',
    color: 'from-cyan-500 to-cyan-600',
  },
  {
    title: 'Client Proposal Draft',
    agent: 'Writer',
    type: 'Minor',
    time: '2h ago',
    color: 'from-green-500 to-green-600',
  },
  {
    title: 'Monthly Budget Review',
    agent: 'Accountant',
    type: 'Major',
    time: '3h ago',
    color: 'from-yellow-500 to-yellow-600',
  },
]

export default function ApprovalQueue({ detailed }: { detailed?: boolean }) {
  const [approvals, setApprovals] = useState(initialApprovals)
  const [actionMsg, setActionMsg] = useState('')

  const handleAction = (index: number, action: 'approved' | 'rejected') => {
    const item = approvals[index]
    setActionMsg(`${item.title} ${action}`)
    setApprovals(prev => prev.filter((_, i) => i !== index))
    setTimeout(() => setActionMsg(''), 2000)
  }

  const displayApprovals = detailed
    ? [...approvals, ...approvals.slice(0, 2).map(a => ({ ...a, title: a.title + ' (Revised)', time: '5h ago' }))]
    : approvals

  return (
    <div className="card p-4">
      <div className="flex items-center justify-between mb-4">
        <div>
          <h2 className="text-subtitle">Approval Queue</h2>
          <p className="text-muted">{displayApprovals.length} items awaiting your decision</p>
        </div>
        <span className="badge-busy">{displayApprovals.filter(a => a.type === 'Major').length} urgent</span>
      </div>

      {/* Action feedback */}
      {actionMsg && (
        <div className="mb-3 p-2 rounded-lg bg-gray-800/30 border border-gray-700/50 text-xs text-gray-300 animate-slide-up">
          {actionMsg}
        </div>
      )}

      <div className="space-y-2">
        {displayApprovals.map((item, index) => (
          <div
            key={index}
            className="card-item p-3"
          >
            <div className="flex items-start gap-2.5 mb-2.5">
              <div className={`agent-icon-sm bg-gradient-to-br ${item.color}`}>
                {item.agent.charAt(0)}
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-xs font-medium text-gray-200">{item.title}</p>
                <p className="text-muted mt-0.5">
                  {item.agent} · {item.time}
                </p>
              </div>
              <span className={`badge ${
                item.type === 'Major' 
                  ? 'bg-yellow-500/10 text-yellow-400 border-yellow-500/20' 
                  : 'bg-gray-500/10 text-gray-400 border-gray-500/20'
              }`}>
                {item.type}
              </span>
            </div>

            <div className="flex items-center gap-1.5">
              <button
                onClick={() => handleAction(index, 'approved')}
                className="flex-1 px-2.5 py-1 bg-accent-500/10 border border-accent-500/20 rounded-lg text-xs font-medium text-accent-400 hover:bg-accent-500/20 transition-all"
              >
                Approve
              </button>
              <button
                onClick={() => handleAction(index, 'rejected')}
                className="flex-1 px-2.5 py-1 bg-red-500/10 border border-red-500/20 rounded-lg text-xs font-medium text-red-400 hover:bg-red-500/20 transition-all"
              >
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

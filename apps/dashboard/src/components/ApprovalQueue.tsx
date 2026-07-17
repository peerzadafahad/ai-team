'use client'

import React from 'react'

const approvals = [
  {
    title: 'Brand Identity Package',
    agent: 'Designer',
    agentIcon: '🎨',
    type: 'Major',
    time: '10 min ago',
    color: 'from-pink-500 to-pink-600',
  },
  {
    title: 'Landing Page Deployment',
    agent: 'Developer',
    agentIcon: '💻',
    type: 'Major',
    time: '25 min ago',
    color: 'from-blue-500 to-blue-600',
  },
  {
    title: 'Q3 Marketing Strategy',
    agent: 'Marketer',
    agentIcon: '📈',
    type: 'Major',
    time: '1h ago',
    color: 'from-cyan-500 to-cyan-600',
  },
  {
    title: 'Client Proposal Draft',
    agent: 'Writer',
    agentIcon: '✍️',
    type: 'Minor',
    time: '2h ago',
    color: 'from-green-500 to-green-600',
  },
  {
    title: 'Monthly Budget Review',
    agent: 'Accountant',
    agentIcon: '💰',
    type: 'Major',
    time: '3h ago',
    color: 'from-yellow-500 to-yellow-600',
  },
]

export default function ApprovalQueue() {
  return (
    <div className="glass-card p-5">
      <div className="flex items-center justify-between mb-5">
        <div>
          <h2 className="text-lg font-semibold text-white">Approval Queue</h2>
          <p className="text-sm text-gray-400">5 items awaiting your decision</p>
        </div>
        <span className="status-busy text-xs">3 urgent</span>
      </div>

      <div className="space-y-3">
        {approvals.map((item, index) => (
          <div
            key={index}
            className="p-4 rounded-xl bg-gray-800/20 border border-gray-800/50 hover:border-primary-500/20 transition-all duration-200"
          >
            <div className="flex items-start gap-3 mb-3">
              <div className={`w-8 h-8 rounded-lg bg-gradient-to-br ${item.color} flex items-center justify-center text-sm shadow-lg shrink-0`}>
                {item.agentIcon}
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium text-gray-200">{item.title}</p>
                <p className="text-xs text-gray-500 mt-0.5">
                  {item.agent} · {item.time}
                </p>
              </div>
              <span className={`text-[10px] font-medium px-1.5 py-0.5 rounded border ${
                item.type === 'Major' 
                  ? 'bg-yellow-500/10 text-yellow-400 border-yellow-500/20' 
                  : 'bg-gray-500/10 text-gray-400 border-gray-500/20'
              }`}>
                {item.type}
              </span>
            </div>

            <div className="flex items-center gap-2">
              <button className="flex-1 px-3 py-1.5 bg-accent-500/10 border border-accent-500/20 rounded-lg text-xs font-medium text-accent-400 hover:bg-accent-500/20 transition-all">
                ✅ Approve
              </button>
              <button className="flex-1 px-3 py-1.5 bg-red-500/10 border border-red-500/20 rounded-lg text-xs font-medium text-red-400 hover:bg-red-500/20 transition-all">
                ❌ Reject
              </button>
              <button className="px-3 py-1.5 bg-gray-800/50 border border-gray-700/50 rounded-lg text-xs font-medium text-gray-400 hover:bg-gray-700/50 transition-all">
                👁️ Review
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

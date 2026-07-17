'use client'

import React from 'react'

const navItems = [
  { id: 'dashboard', icon: '📊', label: 'Dashboard' },
  { id: 'agents', icon: '🤖', label: 'Agents' },
  { id: 'tasks', icon: '📋', label: 'Tasks' },
  { id: 'approvals', icon: '✅', label: 'Approvals' },
  { id: 'analytics', icon: '📈', label: 'Analytics' },
  { id: 'techstack', icon: '🛠️', label: 'Tech Stack' },
  { id: 'settings', icon: '⚙️', label: 'Settings' },
]

export default function Sidebar({ activePage, onNavigate }: { activePage: string; onNavigate: (page: string) => void }) {
  const getActiveId = () => {
    if (activePage.startsWith('agent-')) return 'agents'
    return activePage
  }

  const activeId = getActiveId()

  return (
    <aside className="fixed left-0 top-0 h-screen w-56 bg-gray-900/80 backdrop-blur-xl border-r border-gray-800/50 z-50 flex flex-col">
      {/* Logo */}
      <div className="p-4 border-b border-gray-800/50">
        <div className="flex items-center gap-2.5">
          <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-primary-500 to-accent-500 flex items-center justify-center text-sm font-bold text-white shadow-lg shadow-primary-500/20">
            AI
          </div>
          <div>
            <h1 className="text-base font-bold text-white">AI Team</h1>
            <p className="text-[10px] text-gray-400">Digital Agency OS</p>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex-1 p-3 space-y-0.5 overflow-y-auto">
        {navItems.map((item) => (
          <button
            key={item.id}
            onClick={() => onNavigate(item.id)}
            className={`w-full flex items-center gap-2.5 px-3 py-2 rounded-lg text-xs font-medium transition-all duration-200 ${
              activeId === item.id
                ? 'bg-primary-500/10 text-primary-400 border border-primary-500/20 shadow-sm'
                : 'text-gray-400 hover:text-gray-200 hover:bg-gray-800/50 border border-transparent'
            }`}
          >
            <span className="text-base">{item.icon}</span>
            <span>{item.label}</span>
            {activeId === item.id && (
              <span className="ml-auto w-1.5 h-1.5 rounded-full bg-primary-400 animate-pulse" />
            )}
          </button>
        ))}
      </nav>

      {/* Bottom section */}
      <div className="p-3 border-t border-gray-800/50">
        <div className="flex items-center gap-2.5 px-3 py-2 rounded-lg bg-gray-800/30">
          <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-yellow-400 to-orange-500 flex items-center justify-center text-xs font-bold text-white">
            PF
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-xs font-medium text-gray-200 truncate">Peerzada Fahad</p>
            <p className="text-[10px] text-gray-500">Founder</p>
          </div>
          <div className="w-1.5 h-1.5 rounded-full bg-accent-500 animate-pulse" />
        </div>
      </div>
    </aside>
  )
}

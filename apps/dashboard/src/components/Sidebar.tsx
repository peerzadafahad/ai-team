'use client'

import React from 'react'

const navItems = [
  { icon: '📊', label: 'Dashboard', active: true },
  { icon: '🤖', label: 'Agents' },
  { icon: '📋', label: 'Tasks' },
  { icon: '✅', label: 'Approvals' },
  { icon: '📈', label: 'Analytics' },
  { icon: '⚙️', label: 'Settings' },
]

export default function Sidebar() {
  return (
    <aside className="fixed left-0 top-0 h-screen w-64 bg-gray-900/80 backdrop-blur-xl border-r border-gray-800/50 z-50">
      {/* Logo */}
      <div className="p-6 border-b border-gray-800/50">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary-500 to-accent-500 flex items-center justify-center text-lg font-bold text-white shadow-lg shadow-primary-500/20">
            AI
          </div>
          <div>
            <h1 className="text-lg font-bold text-white">AI Team</h1>
            <p className="text-xs text-gray-400">Digital Agency OS</p>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <nav className="p-4 space-y-1">
        {navItems.map((item) => (
          <button
            key={item.label}
            className={`w-full flex items-center gap-3 px-4 py-2.5 rounded-xl text-sm font-medium transition-all duration-200 ${
              item.active
                ? 'bg-primary-500/10 text-primary-400 border border-primary-500/20 shadow-sm'
                : 'text-gray-400 hover:text-gray-200 hover:bg-gray-800/50 border border-transparent'
            }`}
          >
            <span className="text-lg">{item.icon}</span>
            <span>{item.label}</span>
            {item.active && (
              <span className="ml-auto w-1.5 h-1.5 rounded-full bg-primary-400 animate-pulse" />
            )}
          </button>
        ))}
      </nav>

      {/* Bottom section */}
      <div className="absolute bottom-0 left-0 right-0 p-4 border-t border-gray-800/50">
        <div className="flex items-center gap-3 px-4 py-3 rounded-xl bg-gray-800/30">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-yellow-400 to-orange-500 flex items-center justify-center text-sm font-bold text-white">
            PF
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-sm font-medium text-gray-200 truncate">Peerzada Fahad</p>
            <p className="text-xs text-gray-500">Founder</p>
          </div>
          <div className="w-2 h-2 rounded-full bg-accent-500 animate-pulse" />
        </div>
      </div>
    </aside>
  )
}

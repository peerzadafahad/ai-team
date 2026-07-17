'use client'

import React from 'react'

const navItems = [
  { id: 'dashboard', label: 'Dashboard' },
  { id: 'agents', label: 'Agents' },
  { id: 'tasks', label: 'Tasks' },
  { id: 'approvals', label: 'Approvals' },
  { id: 'analytics', label: 'Analytics' },
  { id: 'techstack', label: 'Tech Stack' },
  { id: 'settings', label: 'Settings' },
]

export default function Header({ activePage, onNavigate }: { activePage: string; onNavigate: (page: string) => void }) {
  const getActiveId = () => {
    if (activePage.startsWith('agent-')) return 'agents'
    return activePage
  }

  const activeId = getActiveId()

  return (
    <header className="sticky top-0 z-50 bg-[#0a0a0f]/90 backdrop-blur-xl border-b border-gray-800/40">
      <div className="flex items-center justify-between px-5 py-2.5">
        {/* Logo + Navigation */}
        <div className="flex items-center gap-6">
          {/* Logo */}
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary-500 to-accent-500 flex items-center justify-center text-xs font-bold text-white shadow-lg shadow-primary-500/20">
              AI
            </div>
            <div className="hidden sm:block">
              <h1 className="text-sm font-bold text-white">AI Team</h1>
              <p className="text-xs text-gray-500">Digital Agency OS</p>
            </div>
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex items-center gap-1">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => onNavigate(item.id)}
                className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all duration-200 ${
                  activeId === item.id
                    ? 'bg-primary-500/10 text-primary-400 border border-primary-500/20'
                    : 'text-gray-400 hover:text-gray-200 hover:bg-gray-800/30 border border-transparent'
                }`}
              >
                {item.label}
                {activeId === item.id && (
                  <span className="ml-1.5 w-1 h-1 rounded-full bg-primary-400 animate-pulse inline-block" />
                )}
              </button>
            ))}
          </nav>
        </div>

        {/* Right section */}
        <div className="flex items-center gap-3">
          {/* Mobile nav toggle */}
          <div className="md:hidden relative">
            <MobileNav activeId={activeId} onNavigate={onNavigate} navItems={navItems} />
          </div>

          {/* Search */}
          <div className="hidden sm:block relative max-w-[180px]">
            <input
              type="text"
              placeholder="Search..."
              className="w-full pl-3 pr-2.5 py-1.5 bg-gray-900/50 border border-gray-800/50 rounded-lg text-xs text-gray-300 placeholder-gray-600 focus:outline-none focus:border-primary-500/50 focus:ring-1 focus:ring-primary-500/20 transition-all"
            />
          </div>

          {/* Notifications */}
          <button className="relative p-1.5 rounded-lg hover:bg-gray-800/50 transition-colors">
            <span className="text-xs">🔔</span>
            <span className="absolute top-1 right-1.5 w-1.5 h-1.5 rounded-full bg-accent-500 animate-pulse" />
          </button>

          {/* Profile */}
          <div className="flex items-center gap-2 pl-2 border-l border-gray-800/40">
            <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-yellow-400 to-orange-500 flex items-center justify-center text-[10px] font-bold text-white">
              PF
            </div>
            <div className="hidden lg:block">
              <p className="text-xs font-medium text-gray-200">Peerzada Fahad</p>
              <p className="text-xs text-gray-500">Founder</p>
            </div>
            <div className="w-1.5 h-1.5 rounded-full bg-accent-500 animate-pulse" />
          </div>
        </div>
      </div>
    </header>
  )
}

function MobileNav({ activeId, onNavigate, navItems }: { activeId: string; onNavigate: (page: string) => void; navItems: { id: string; label: string }[] }) {
  const [open, setOpen] = React.useState(false)

  return (
    <div>
      <button
        onClick={() => setOpen(!open)}
        className="p-1.5 rounded-lg hover:bg-gray-800/50 transition-colors"
      >
        <span className="text-lg">☰</span>
      </button>
      {open && (
        <>
          <div className="fixed inset-0 z-40" onClick={() => setOpen(false)} />
          <div className="absolute right-0 top-full mt-2 w-48 bg-gray-900/95 backdrop-blur-xl border border-gray-800/50 rounded-xl shadow-2xl shadow-black/30 z-50 py-2 animate-slide-up">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => { onNavigate(item.id); setOpen(false) }}
                className={`w-full flex items-center gap-2.5 px-4 py-2 text-xs font-medium transition-colors ${
                  activeId === item.id
                    ? 'text-primary-400 bg-primary-500/10'
                    : 'text-gray-400 hover:text-gray-200 hover:bg-gray-800/30'
                }`}
              >
                <span>{item.label}</span>
                {activeId === item.id && (
                  <span className="ml-auto w-1.5 h-1.5 rounded-full bg-primary-400 animate-pulse" />
                )}
              </button>
            ))}
          </div>
        </>
      )}
    </div>
  )
}

'use client'

import React from 'react'

export default function Header() {
  return (
    <header className="sticky top-0 z-30 bg-[#0a0a0f]/90 backdrop-blur-xl border-b border-gray-800/40">
      <div className="flex items-center justify-between px-5 py-2.5">
        {/* Logo */}
        <div className="flex items-center gap-2.5">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary-500 to-accent-500 flex items-center justify-center text-xs font-bold text-white shadow-lg shadow-primary-500/20">
            AI
          </div>
          <div className="hidden sm:block">
            <h1 className="text-sm font-bold text-white">AI Team</h1>
            <p className="text-xs text-gray-500">Dashboard</p>
          </div>
        </div>

        {/* Profile */}
        <div className="flex items-center gap-2">
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
    </header>
  )
}

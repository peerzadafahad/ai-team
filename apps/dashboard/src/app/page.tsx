'use client'

import React, { useState } from 'react'
import Header from '@/components/Header'
import StatsCards from '@/components/StatsCards'
import AgentGrid from '@/components/AgentGrid'
import TaskList from '@/components/TaskList'
import ApprovalQueue from '@/components/ApprovalQueue'
import ActivityFeed from '@/components/ActivityFeed'
import TechStackSection from '@/components/TechStackSection'
import SectionProgress from '@/components/SectionProgress'
import DetailPanel from '@/components/DetailPanel'

export default function DashboardPage() {
  const [selectedAgent, setSelectedAgent] = useState<string | null>(null)

  return (
    <div className="min-h-screen bg-[#0a0a0f]">
      {/* Background effects */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-primary-500/8 rounded-full blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-accent-500/8 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary-500/3 rounded-full blur-3xl" />
      </div>

      {/* Header with logo only */}
      <Header />

      {/* Main content - full width */}
      <main className="p-5 space-y-4 relative z-10">
        <SectionProgress />
        <StatsCards />
        <AgentGrid onAgentClick={(name) => setSelectedAgent(name)} />
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
          <TaskList />
          <ApprovalQueue />
          <ActivityFeed />
        </div>
        <TechStackSection />
      </main>

      {/* Right side detail panel */}
      <DetailPanel agentName={selectedAgent} onClose={() => setSelectedAgent(null)} />
    </div>
  )
}

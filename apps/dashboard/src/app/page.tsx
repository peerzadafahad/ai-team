'use client'

import React from 'react'
import Sidebar from '@/components/Sidebar'
import Header from '@/components/Header'
import StatsCards from '@/components/StatsCards'
import AgentGrid from '@/components/AgentGrid'
import TaskList from '@/components/TaskList'
import ApprovalQueue from '@/components/ApprovalQueue'
import ActivityFeed from '@/components/ActivityFeed'

export default function DashboardPage() {
  return (
    <div className="min-h-screen bg-gray-950">
      {/* Background effects */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-primary-500/10 rounded-full blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-accent-500/10 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary-500/5 rounded-full blur-3xl" />
      </div>

      {/* Sidebar */}
      <Sidebar />

      {/* Main content */}
      <div className="pl-64">
        <Header />

        <main className="p-8 space-y-6 relative z-10">
          {/* Page header */}
          <div>
            <h1 className="text-2xl font-bold text-white">
              Dashboard <span className="gradient-text">Overview</span>
            </h1>
            <p className="text-gray-400 mt-1">
              Welcome back, Peerzada. Here's what's happening with your AI team today.
            </p>
          </div>

          {/* Stats Cards */}
          <StatsCards />

          {/* Agent Grid */}
          <AgentGrid />

          {/* Two column layout for Tasks and Approvals */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <TaskList />
            <ApprovalQueue />
          </div>

          {/* Activity Feed */}
          <ActivityFeed />
        </main>
      </div>
    </div>
  )
}

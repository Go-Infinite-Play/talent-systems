'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import dynamic from 'next/dynamic';
import {
  Activity,
  BarChart3,
  Workflow,
  FileText,
  ChevronRight,
  Zap,
  DollarSign,
  Users,
  Clock,
  TrendingUp,
  CheckCircle
} from 'lucide-react';

// Dynamically import heavy components
const ExecutiveDashboard = dynamic(() => import('@/components/ExecutiveDashboard'), {
  ssr: false,
  loading: () => null
});

const HighValueJobWorkflow = dynamic(() => import('@/components/HighValueJobWorkflow'), {
  ssr: false,
  loading: () => null
});

const LeadQualificationWorkflow = dynamic(() => import('@/components/LeadQualificationWorkflow'), {
  ssr: false,
  loading: () => null
});

const SupportDeflectionWorkflow = dynamic(() => import('@/components/SupportDeflectionWorkflow'), {
  ssr: false,
  loading: () => null
});

const TestGenerationWorkflow = dynamic(() => import('@/components/TestGenerationWorkflow'), {
  ssr: false,
  loading: () => null
});

export default function Home() {
  const [viewMode, setViewMode] = useState<'report' | 'dashboard' | 'workflows'>('report');
  const [isLoaded, setIsLoaded] = useState(false);
  const [activeWorkflow, setActiveWorkflow] = useState<'marketing' | 'sales' | 'support' | 'engineering' | null>(null);

  useEffect(() => {
    // Ensure components are loaded
    const timer = setTimeout(() => setIsLoaded(true), 100);
    return () => clearTimeout(timer);
  }, []);

  // Key metrics
  const metrics = {
    savings: 1480750,
    roi: 293,
    fteCapacity: 16.28,
    hoursWeekly: 651,
    agents: 17,
    payback: 4.1
  };

  return (
    <div className="w-full min-h-screen bg-gradient-to-br from-gray-900 via-gray-900 to-black">
      {/* Fixed Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-gray-900/95 backdrop-blur-xl border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-8">
              {/* Logo and Title */}
              <div>
                <h1 className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-blue-600 bg-clip-text text-transparent">
                  TALENT SYSTEMS
                </h1>
                <p className="text-gray-400 text-xs">AI-Powered Entertainment Infrastructure</p>
              </div>

              {/* Navigation */}
              <nav className="flex items-center gap-2">
                <button
                  onClick={() => setViewMode('report')}
                  className={`px-4 py-2 rounded-lg font-medium transition-all flex items-center gap-2 ${
                    viewMode === 'report'
                      ? 'bg-cyan-600 text-white shadow-lg shadow-cyan-600/20'
                      : 'text-gray-400 hover:text-white hover:bg-gray-800'
                  }`}
                >
                  <FileText className="w-4 h-4" />
                  Full Report
                </button>
                <button
                  onClick={() => setViewMode('workflows')}
                  className={`px-4 py-2 rounded-lg font-medium transition-all flex items-center gap-2 ${
                    viewMode === 'workflows'
                      ? 'bg-cyan-600 text-white shadow-lg shadow-cyan-600/20'
                      : 'text-gray-400 hover:text-white hover:bg-gray-800'
                  }`}
                >
                  <Workflow className="w-4 h-4" />
                  Agent Workflows
                </button>
                <button
                  onClick={() => setViewMode('dashboard')}
                  className={`px-4 py-2 rounded-lg font-medium transition-all flex items-center gap-2 ${
                    viewMode === 'dashboard'
                      ? 'bg-cyan-600 text-white shadow-lg shadow-cyan-600/20'
                      : 'text-gray-400 hover:text-white hover:bg-gray-800'
                  }`}
                >
                  <BarChart3 className="w-4 h-4" />
                  Executive Metrics
                </button>
              </nav>
            </div>

            {/* Key Metrics Preview */}
            <div className="flex items-center gap-6">
              <div className="text-right">
                <p className="text-gray-400 text-xs">Annual Savings</p>
                <p className="text-green-400 font-bold text-lg">${(metrics.savings / 1000000).toFixed(2)}M</p>
              </div>
              <div className="text-right">
                <p className="text-gray-400 text-xs">ROI</p>
                <p className="text-cyan-400 font-bold text-lg">{metrics.roi}%</p>
              </div>
              <div className="text-right">
                <p className="text-gray-400 text-xs">AI Agents</p>
                <p className="text-purple-400 font-bold text-lg">{metrics.agents}</p>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="pt-20">
        <AnimatePresence mode="wait">
          {/* Agent Workflows */}
          {viewMode === 'workflows' && (
            <motion.div
              key="workflows"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="min-h-screen p-8"
            >
              <div className="max-w-7xl mx-auto space-y-8">
                {/* Org Chart Header */}
                <div className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 rounded-3xl border border-gray-700/50 p-10 shadow-2xl relative overflow-hidden">
                  {/* Background decoration */}
                  <div className="absolute inset-0 bg-gradient-to-br from-cyan-600/5 via-transparent to-blue-600/5" />
                  <div className="absolute top-0 left-0 w-96 h-96 bg-cyan-500/10 rounded-full filter blur-3xl -translate-x-1/2 -translate-y-1/2" />
                  <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-500/10 rounded-full filter blur-3xl translate-x-1/2 translate-y-1/2" />

                  <div className="relative z-10">
                    <div className="flex items-center justify-between mb-12">
                      <h2 className="text-4xl font-bold text-white">
                        Talent Systems AI Agent Organization
                      </h2>
                      <div className="flex items-center gap-3 bg-black/40 backdrop-blur-xl px-4 py-2 rounded-full border border-amber-500/30">
                        <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                        <span className="text-amber-400 font-medium">17 Active Agents</span>
                      </div>
                    </div>

                    {/* Main Divisions */}
                    <div className="grid grid-cols-4 gap-8">
                      {/* Revenue Division */}
                      <div className="relative">
                        {/* Division Header */}
                        <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-t-2xl p-4 shadow-lg">
                          <h3 className="text-white font-bold text-xl text-center">REVENUE</h3>
                        </div>

                        {/* Division Body */}
                        <div className="bg-gradient-to-b from-gray-800/90 to-gray-900/90 backdrop-blur-xl rounded-b-2xl border border-gray-700/50 border-t-0 p-4 space-y-4">
                          {/* Sales Department */}
                          <div className="relative">
                            <div className="bg-gradient-to-r from-gray-700/50 to-gray-800/50 rounded-xl p-3 border border-blue-500/20 hover:border-blue-500/40 transition-all group">
                              <h4 className="text-cyan-300 font-semibold mb-2 flex items-center gap-2">
                                <div className="w-2 h-2 bg-cyan-400 rounded-full group-hover:animate-pulse" />
                                Sales
                              </h4>
                              <div className="space-y-1.5 pl-4">
                                <div className="bg-black/30 backdrop-blur rounded-lg px-2.5 py-1.5 border border-gray-600/30 hover:border-cyan-500/30 transition-all cursor-pointer">
                                  <p className="text-gray-300 text-xs font-medium">Lead Qualification Agent</p>
                                </div>
                                <div className="bg-black/30 backdrop-blur rounded-lg px-2.5 py-1.5 border border-gray-600/30 hover:border-cyan-500/30 transition-all cursor-pointer">
                                  <p className="text-gray-300 text-xs font-medium">HubSpot Platform & CRM</p>
                                </div>
                              </div>
                            </div>
                          </div>

                          {/* Customer Success Department */}
                          <div className="relative">
                            <div className="bg-gradient-to-r from-gray-700/50 to-gray-800/50 rounded-xl p-3 border border-blue-500/20 hover:border-blue-500/40 transition-all group">
                              <h4 className="text-cyan-300 font-semibold mb-2 flex items-center gap-2">
                                <div className="w-2 h-2 bg-cyan-400 rounded-full group-hover:animate-pulse" />
                                Customer Success
                              </h4>
                              <div className="space-y-1.5 pl-4">
                                <div className="bg-black/30 backdrop-blur rounded-lg px-2.5 py-1.5 border border-gray-600/30 hover:border-cyan-500/30 transition-all cursor-pointer">
                                  <p className="text-gray-300 text-xs font-medium">Stage Name Verification</p>
                                </div>
                                <div className="bg-black/30 backdrop-blur rounded-lg px-2.5 py-1.5 border border-gray-600/30 hover:border-cyan-500/30 transition-all cursor-pointer">
                                  <p className="text-gray-300 text-xs font-medium">Compliance Checking</p>
                                </div>
                                <div className="bg-black/30 backdrop-blur rounded-lg px-2.5 py-1.5 border border-gray-600/30 hover:border-cyan-500/30 transition-all cursor-pointer">
                                  <p className="text-gray-300 text-xs font-medium">Customer Onboarding</p>
                                </div>
                              </div>
                            </div>
                          </div>

                          {/* Customer Support Department */}
                          <div className="relative">
                            <div className="bg-gradient-to-r from-gray-700/50 to-gray-800/50 rounded-xl p-3 border border-blue-500/20 hover:border-blue-500/40 transition-all group">
                              <h4 className="text-cyan-300 font-semibold mb-2 flex items-center gap-2">
                                <div className="w-2 h-2 bg-cyan-400 rounded-full group-hover:animate-pulse" />
                                Customer Support
                              </h4>
                              <div className="space-y-1.5 pl-4">
                                <div className="bg-black/30 backdrop-blur rounded-lg px-2.5 py-1.5 border border-gray-600/30 hover:border-cyan-500/30 transition-all cursor-pointer">
                                  <p className="text-gray-300 text-xs font-medium">Tier 1 Support Agent</p>
                                </div>
                                <div className="bg-black/30 backdrop-blur rounded-lg px-2.5 py-1.5 border border-gray-600/30 hover:border-cyan-500/30 transition-all cursor-pointer">
                                  <p className="text-gray-300 text-xs font-medium">Job Approval Agent</p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Marketing Division */}
                      <div className="relative">
                        {/* Division Header */}
                        <div className="bg-gradient-to-r from-purple-600 to-purple-700 rounded-t-2xl p-4 shadow-lg">
                          <h3 className="text-white font-bold text-xl text-center">MARKETING</h3>
                        </div>

                        {/* Division Body */}
                        <div className="bg-gradient-to-b from-gray-800/90 to-gray-900/90 backdrop-blur-xl rounded-b-2xl border border-gray-700/50 border-t-0 p-4 space-y-4">
                          {/* Growth Department */}
                          <div className="relative">
                            <div className="bg-gradient-to-r from-gray-700/50 to-gray-800/50 rounded-xl p-3 border border-purple-500/20 hover:border-purple-500/40 transition-all group">
                              <h4 className="text-purple-300 font-semibold mb-2 flex items-center gap-2">
                                <div className="w-2 h-2 bg-purple-400 rounded-full group-hover:animate-pulse" />
                                Growth
                              </h4>
                              <div className="space-y-1.5 pl-4">
                                <div className="bg-black/30 backdrop-blur rounded-lg px-2.5 py-1.5 border border-gray-600/30 hover:border-purple-500/30 transition-all cursor-pointer">
                                  <p className="text-gray-300 text-xs font-medium">AI Marketing Analysts</p>
                                </div>
                                <div className="bg-black/30 backdrop-blur rounded-lg px-2.5 py-1.5 border border-gray-600/30 hover:border-purple-500/30 transition-all cursor-pointer">
                                  <p className="text-gray-300 text-xs font-medium">High Value Job Agent</p>
                                </div>
                                <div className="bg-black/30 backdrop-blur rounded-lg px-2.5 py-1.5 border border-gray-600/30 hover:border-purple-500/30 transition-all cursor-pointer">
                                  <p className="text-gray-300 text-xs font-medium">Agentic Marketing Suite</p>
                                </div>
                              </div>
                            </div>
                          </div>

                          {/* Content Department */}
                          <div className="relative">
                            <div className="bg-gradient-to-r from-gray-700/50 to-gray-800/50 rounded-xl p-3 border border-purple-500/20 hover:border-purple-500/40 transition-all group">
                              <h4 className="text-purple-300 font-semibold mb-2 flex items-center gap-2">
                                <div className="w-2 h-2 bg-purple-400 rounded-full group-hover:animate-pulse" />
                                Content
                              </h4>
                              <div className="space-y-1.5 pl-4">
                                <div className="bg-black/30 backdrop-blur rounded-lg px-2.5 py-1.5 border border-gray-600/30 hover:border-purple-500/30 transition-all cursor-pointer">
                                  <p className="text-gray-300 text-xs font-medium">AEO/GEO Strategy</p>
                                </div>
                                <div className="bg-black/30 backdrop-blur rounded-lg px-2.5 py-1.5 border border-gray-600/30 hover:border-purple-500/30 transition-all cursor-pointer">
                                  <p className="text-gray-300 text-xs font-medium">Software as Content</p>
                                </div>
                                <div className="bg-black/30 backdrop-blur rounded-lg px-2.5 py-1.5 border border-gray-600/30 hover:border-purple-500/30 transition-all cursor-pointer">
                                  <p className="text-gray-300 text-xs font-medium">Agentic Marketing Suite</p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Technology Division */}
                      <div className="relative">
                        {/* Division Header */}
                        <div className="bg-gradient-to-r from-emerald-600 to-emerald-700 rounded-t-2xl p-4 shadow-lg">
                          <h3 className="text-white font-bold text-xl text-center">TECHNOLOGY</h3>
                        </div>

                        {/* Division Body */}
                        <div className="bg-gradient-to-b from-gray-800/90 to-gray-900/90 backdrop-blur-xl rounded-b-2xl border border-gray-700/50 border-t-0 p-4 space-y-4">
                          {/* Product Department */}
                          <div className="relative">
                            <div className="bg-gradient-to-r from-gray-700/50 to-gray-800/50 rounded-xl p-3 border border-emerald-500/20 hover:border-emerald-500/40 transition-all group">
                              <h4 className="text-emerald-300 font-semibold mb-2 flex items-center gap-2">
                                <div className="w-2 h-2 bg-emerald-400 rounded-full group-hover:animate-pulse" />
                                Product
                              </h4>
                              <div className="space-y-1.5 pl-4">
                                <div className="bg-black/30 backdrop-blur rounded-lg px-2.5 py-1.5 border border-gray-600/30 hover:border-emerald-500/30 transition-all cursor-pointer">
                                  <p className="text-gray-300 text-xs font-medium">AI Enabled PRD Templates</p>
                                </div>
                                <div className="bg-black/30 backdrop-blur rounded-lg px-2.5 py-1.5 border border-gray-600/30 hover:border-emerald-500/30 transition-all cursor-pointer">
                                  <p className="text-gray-300 text-xs font-medium">TPM Workflow Automation</p>
                                </div>
                              </div>
                            </div>
                          </div>

                          {/* Development Department */}
                          <div className="relative">
                            <div className="bg-gradient-to-r from-gray-700/50 to-gray-800/50 rounded-xl p-3 border border-emerald-500/20 hover:border-emerald-500/40 transition-all group">
                              <h4 className="text-emerald-300 font-semibold mb-2 flex items-center gap-2">
                                <div className="w-2 h-2 bg-emerald-400 rounded-full group-hover:animate-pulse" />
                                Development
                              </h4>
                              <div className="space-y-1.5 pl-4">
                                <div className="bg-black/30 backdrop-blur rounded-lg px-2.5 py-1.5 border border-gray-600/30 hover:border-emerald-500/30 transition-all cursor-pointer">
                                  <p className="text-gray-300 text-xs font-medium">AI Development Tooling</p>
                                </div>
                                <div className="bg-black/30 backdrop-blur rounded-lg px-2.5 py-1.5 border border-gray-600/30 hover:border-emerald-500/30 transition-all cursor-pointer">
                                  <p className="text-gray-300 text-xs font-medium">AI Test Case Generation</p>
                                </div>
                                <div className="bg-black/30 backdrop-blur rounded-lg px-2.5 py-1.5 border border-gray-600/30 hover:border-emerald-500/30 transition-all cursor-pointer">
                                  <p className="text-gray-300 text-xs font-medium">Playwright Testing</p>
                                </div>
                                <div className="bg-black/30 backdrop-blur rounded-lg px-2.5 py-1.5 border border-gray-600/30 hover:border-emerald-500/30 transition-all cursor-pointer">
                                  <p className="text-gray-300 text-xs font-medium">Cast-It Reach Forms</p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* General & Administrative Division */}
                      <div className="relative">
                        {/* Division Header */}
                        <div className="bg-gradient-to-r from-amber-600 to-amber-700 rounded-t-2xl p-4 shadow-lg">
                          <h3 className="text-white font-bold text-xl text-center">G&A</h3>
                        </div>

                        {/* Division Body */}
                        <div className="bg-gradient-to-b from-gray-800/90 to-gray-900/90 backdrop-blur-xl rounded-b-2xl border border-gray-700/50 border-t-0 p-4 space-y-4">
                          {/* HR Department */}
                          <div className="relative">
                            <div className="bg-gradient-to-r from-gray-700/50 to-gray-800/50 rounded-xl p-3 border border-amber-500/20 hover:border-amber-500/40 transition-all group">
                              <h4 className="text-amber-300 font-semibold mb-2 flex items-center gap-2">
                                <div className="w-2 h-2 bg-amber-400 rounded-full group-hover:animate-pulse" />
                                HR
                              </h4>
                              <div className="space-y-1.5 pl-4">
                                <div className="bg-black/30 backdrop-blur rounded-lg px-2.5 py-1.5 border border-gray-600/30 hover:border-amber-500/30 transition-all cursor-pointer">
                                  <p className="text-gray-300 text-xs font-medium">HR Bot</p>
                                </div>
                              </div>
                            </div>
                          </div>

                          {/* IT Department */}
                          <div className="relative">
                            <div className="bg-gradient-to-r from-gray-700/50 to-gray-800/50 rounded-xl p-3 border border-amber-500/20 hover:border-amber-500/40 transition-all group">
                              <h4 className="text-amber-300 font-semibold mb-2 flex items-center gap-2">
                                <div className="w-2 h-2 bg-amber-400 rounded-full group-hover:animate-pulse" />
                                IT
                              </h4>
                              <div className="space-y-1.5 pl-4">
                                <div className="bg-black/30 backdrop-blur rounded-lg px-2.5 py-1.5 border border-gray-600/30 hover:border-amber-500/30 transition-all cursor-pointer">
                                  <p className="text-gray-300 text-xs font-medium">IT Bot</p>
                                </div>
                                <div className="bg-black/30 backdrop-blur rounded-lg px-2.5 py-1.5 border border-gray-600/30 hover:border-amber-500/30 transition-all cursor-pointer">
                                  <p className="text-gray-300 text-xs font-medium">Vendor Management</p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Bottom Stats Bar */}
                    <div className="mt-10 flex justify-center">
                      <div className="bg-black/40 backdrop-blur-xl rounded-2xl px-8 py-4 border border-gray-700/50 flex items-center gap-8">
                        <div className="text-center">
                          <p className="text-gray-400 text-sm">Total Savings</p>
                          <p className="text-green-400 font-bold text-xl">$1.48M/year</p>
                        </div>
                        <div className="w-px h-12 bg-gray-700" />
                        <div className="text-center">
                          <p className="text-gray-400 text-sm">FTE Capacity</p>
                          <p className="text-cyan-400 font-bold text-xl">16.28</p>
                        </div>
                        <div className="w-px h-12 bg-gray-700" />
                        <div className="text-center">
                          <p className="text-gray-400 text-sm">Hours Saved</p>
                          <p className="text-purple-400 font-bold text-xl">33,852/year</p>
                        </div>
                        <div className="w-px h-12 bg-gray-700" />
                        <div className="text-center">
                          <p className="text-gray-400 text-sm">ROI</p>
                          <p className="text-amber-400 font-bold text-xl">293%</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Workflow Visualizations Section */}
                <div className="bg-gray-900/90 backdrop-blur-xl rounded-2xl border border-gray-800 p-8">
                  <h3 className="text-2xl font-bold text-white mb-6">Featured Agent Workflows</h3>
                  <p className="text-gray-400 mb-8">
                    Explore detailed automation workflows showing how our AI agents transform operations in real-time.
                    Click on any workflow below to see the step-by-step process.
                  </p>

                  {/* Workflow Selection Buttons */}
                  <div className="grid grid-cols-2 gap-4 mb-8">
                    <button
                      onClick={() => setActiveWorkflow(activeWorkflow === 'marketing' ? null : 'marketing')}
                      className={`p-4 rounded-lg border transition-all text-left ${
                        activeWorkflow === 'marketing'
                          ? 'border-cyan-500 bg-cyan-900/20'
                          : 'border-gray-700 bg-gray-800/50 hover:border-cyan-600'
                      }`}
                    >
                      <div className="flex items-start gap-3">
                        <div className="p-2 bg-purple-500/20 rounded-lg">
                          <TrendingUp className="w-5 h-5 text-purple-400" />
                        </div>
                        <div className="flex-1">
                          <h4 className="text-white font-semibold">High-Value Job Marketing</h4>
                          <p className="text-gray-400 text-sm mt-1">5-day lag → 2 minutes</p>
                          <p className="text-green-400 text-xs mt-2">$156K annual savings</p>
                        </div>
                      </div>
                    </button>

                    <button
                      onClick={() => setActiveWorkflow(activeWorkflow === 'sales' ? null : 'sales')}
                      className={`p-4 rounded-lg border transition-all text-left ${
                        activeWorkflow === 'sales'
                          ? 'border-cyan-500 bg-cyan-900/20'
                          : 'border-gray-700 bg-gray-800/50 hover:border-cyan-600'
                      }`}
                    >
                      <div className="flex items-start gap-3">
                        <div className="p-2 bg-green-500/20 rounded-lg">
                          <Users className="w-5 h-5 text-green-400" />
                        </div>
                        <div className="flex-1">
                          <h4 className="text-white font-semibold">Lead Qualification (India)</h4>
                          <p className="text-gray-400 text-sm mt-1">15 min → 3 min per lead</p>
                          <p className="text-green-400 text-xs mt-2">$195K annual savings</p>
                        </div>
                      </div>
                    </button>

                    <button
                      onClick={() => setActiveWorkflow(activeWorkflow === 'support' ? null : 'support')}
                      className={`p-4 rounded-lg border transition-all text-left ${
                        activeWorkflow === 'support'
                          ? 'border-cyan-500 bg-cyan-900/20'
                          : 'border-gray-700 bg-gray-800/50 hover:border-cyan-600'
                      }`}
                    >
                      <div className="flex items-start gap-3">
                        <div className="p-2 bg-blue-500/20 rounded-lg">
                          <Activity className="w-5 h-5 text-blue-400" />
                        </div>
                        <div className="flex-1">
                          <h4 className="text-white font-semibold">Tier 1 Support Deflection</h4>
                          <p className="text-gray-400 text-sm mt-1">70% deflection rate</p>
                          <p className="text-green-400 text-xs mt-2">$280K annual savings</p>
                        </div>
                      </div>
                    </button>

                    <button
                      onClick={() => setActiveWorkflow(activeWorkflow === 'engineering' ? null : 'engineering')}
                      className={`p-4 rounded-lg border transition-all text-left ${
                        activeWorkflow === 'engineering'
                          ? 'border-cyan-500 bg-cyan-900/20'
                          : 'border-gray-700 bg-gray-800/50 hover:border-cyan-600'
                      }`}
                    >
                      <div className="flex items-start gap-3">
                        <div className="p-2 bg-amber-500/20 rounded-lg">
                          <Zap className="w-5 h-5 text-amber-400" />
                        </div>
                        <div className="flex-1">
                          <h4 className="text-white font-semibold">AI Test Generation</h4>
                          <p className="text-gray-400 text-sm mt-1">3-5 days → 3 hours</p>
                          <p className="text-green-400 text-xs mt-2">$180K annual savings</p>
                        </div>
                      </div>
                    </button>
                  </div>

                  {/* Workflow Visualization Area */}
                  {activeWorkflow && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      className="border-t border-gray-700 pt-6"
                    >
                      {activeWorkflow === 'marketing' && <HighValueJobWorkflow />}
                      {activeWorkflow === 'sales' && <LeadQualificationWorkflow />}
                      {activeWorkflow === 'support' && <SupportDeflectionWorkflow />}
                      {activeWorkflow === 'engineering' && <TestGenerationWorkflow />}
                    </motion.div>
                  )}
                </div>
              </div>
            </motion.div>
          )}

          {/* Executive Dashboard */}
          {viewMode === 'dashboard' && (
            <motion.div
              key="dashboard"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="min-h-screen overflow-y-auto pb-20"
            >
              <ExecutiveDashboard />
            </motion.div>
          )}

          {/* Full Report */}
          {viewMode === 'report' && (
            <motion.div
              key="report"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="min-h-screen relative overflow-hidden"
            >
              {/* Background Effects */}
              <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-black to-gray-900" />
              <div className="absolute top-0 left-1/4 w-96 h-96 bg-cyan-500/10 rounded-full filter blur-3xl" />
              <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full filter blur-3xl" />

              <div className="relative z-10 max-w-6xl mx-auto px-8 py-16">
                {/* Hero Section */}
                <div className="text-center mb-20">
                  <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 }}
                    className="text-gray-500 uppercase tracking-widest text-sm mb-4"
                  >
                    October 2026 • One Year Later
                  </motion.p>
                  <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="text-6xl md:text-7xl font-bold mb-6"
                  >
                    <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
                      The Year AI Transformed
                    </span>
                    <br />
                    <span className="text-white">Talent Systems</span>
                  </motion.h1>
                  <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                    className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed"
                  >
                    A story of transformation, where 17 AI agents didn't just automate tasks—they reimagined how entertainment technology works.
                  </motion.p>
                </div>

                {/* Key Stats - Hero Numbers */}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                  className="grid grid-cols-4 gap-8 mb-24"
                >
                  <div className="text-center">
                    <div className="text-5xl font-bold bg-gradient-to-br from-green-400 to-emerald-600 bg-clip-text text-transparent mb-2">$1.73M</div>
                    <p className="text-gray-400 text-sm">Annual Savings</p>
                    <p className="text-green-400 text-xs mt-1">+17% over target</p>
                  </div>
                  <div className="text-center">
                    <div className="text-5xl font-bold bg-gradient-to-br from-amber-400 to-orange-600 bg-clip-text text-transparent mb-2">342%</div>
                    <p className="text-gray-400 text-sm">ROI</p>
                    <p className="text-amber-400 text-xs mt-1">First year return</p>
                  </div>
                  <div className="text-center">
                    <div className="text-5xl font-bold bg-gradient-to-br from-cyan-400 to-blue-600 bg-clip-text text-transparent mb-2">16.28</div>
                    <p className="text-gray-400 text-sm">FTE Capacity</p>
                    <p className="text-cyan-400 text-xs mt-1">Unlocked</p>
                  </div>
                  <div className="text-center">
                    <div className="text-5xl font-bold bg-gradient-to-br from-purple-400 to-pink-600 bg-clip-text text-transparent mb-2">17</div>
                    <p className="text-gray-400 text-sm">AI Agents</p>
                    <p className="text-purple-400 text-xs mt-1">All operational</p>
                  </div>
                </motion.div>

                {/* The Story */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.5 }}
                  className="space-y-20 mb-24"
                >
                  {/* Chapter 1: The Promise */}
                  <div className="relative">
                    <div className="flex items-start gap-8">
                      <div className="flex-shrink-0 w-32 pt-2">
                        <div className="text-cyan-400 font-bold text-sm uppercase tracking-wider">Chapter 1</div>
                        <div className="text-gray-600 text-xs mt-1">Q4 2025</div>
                      </div>
                      <div className="flex-1">
                        <h2 className="text-3xl font-bold text-white mb-4">The Foundation</h2>
                        <p className="text-xl text-gray-300 leading-relaxed mb-6">
                          It started with a simple truth: our data was trapped. Seven platforms, millions of profiles,
                          and every question took weeks to answer.
                        </p>
                        <div className="bg-gray-800/30 border border-gray-700/50 rounded-2xl p-6">
                          <div className="flex items-center gap-4 mb-4">
                            <div className="w-12 h-12 rounded-full bg-cyan-500/20 flex items-center justify-center">
                              <CheckCircle className="w-6 h-6 text-cyan-400" />
                            </div>
                            <div>
                              <p className="text-white font-semibold">Snowflake Cortex Deployed</p>
                              <p className="text-gray-400 text-sm">Unified 7 platform databases into one intelligent layer</p>
                            </div>
                          </div>
                          <div className="grid grid-cols-2 gap-4 mt-6 pt-6 border-t border-gray-700/50">
                            <div>
                              <p className="text-gray-500 text-sm">Before</p>
                              <p className="text-2xl font-bold text-gray-400">1-3 weeks</p>
                            </div>
                            <div>
                              <p className="text-gray-500 text-sm">After</p>
                              <p className="text-2xl font-bold text-cyan-400">Instant</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Chapter 2: First Wins */}
                  <div className="relative">
                    <div className="flex items-start gap-8">
                      <div className="flex-shrink-0 w-32 pt-2">
                        <div className="text-purple-400 font-bold text-sm uppercase tracking-wider">Chapter 2</div>
                        <div className="text-gray-600 text-xs mt-1">Q1 2026</div>
                      </div>
                      <div className="flex-1">
                        <h2 className="text-3xl font-bold text-white mb-4">The Quick Wins</h2>
                        <p className="text-xl text-gray-300 leading-relaxed mb-6">
                          With data flowing freely, the first agents went live. Marketing campaigns that once took days
                          now run automatically every morning. Support tickets that consumed hours resolve themselves in seconds.
                        </p>
                        <div className="space-y-4">
                          <div className="bg-gradient-to-r from-purple-900/20 to-pink-900/20 border border-purple-500/20 rounded-2xl p-6">
                            <div className="flex items-start justify-between">
                              <div className="flex-1">
                                <h3 className="text-white font-semibold mb-2">Automated Marketing Campaigns</h3>
                                <p className="text-gray-400 text-sm">Daily automated campaigns increased the efficacy of paid media and social channels by accelerating application velocity on Casting Networks</p>
                              </div>
                              <div className="flex-shrink-0 ml-6 text-right">
                                <p className="text-3xl font-bold text-purple-400">400+</p>
                                <p className="text-gray-500 text-sm">hours saved monthly</p>
                              </div>
                            </div>
                          </div>
                          <div className="bg-gradient-to-r from-blue-900/20 to-cyan-900/20 border border-blue-500/20 rounded-2xl p-6">
                            <div className="flex items-start justify-between">
                              <div className="flex-1">
                                <h3 className="text-white font-semibold mb-2">24/7 Tier 1 Support</h3>
                                <p className="text-gray-400 text-sm">Instant responses to common questions, any time of day</p>
                              </div>
                              <div className="flex-shrink-0 ml-6 text-right">
                                <p className="text-3xl font-bold text-blue-400">70%</p>
                                <p className="text-gray-500 text-sm">deflection rate</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Chapter 3: Scale */}
                  <div className="relative">
                    <div className="flex items-start gap-8">
                      <div className="flex-shrink-0 w-32 pt-2">
                        <div className="text-emerald-400 font-bold text-sm uppercase tracking-wider">Chapter 3</div>
                        <div className="text-gray-600 text-xs mt-1">Q2 2026</div>
                      </div>
                      <div className="flex-1">
                        <h2 className="text-3xl font-bold text-white mb-4">The Scale</h2>
                        <p className="text-xl text-gray-300 leading-relaxed mb-6">
                          Success breeds ambition. The full marketing suite launched. Engineering deployed AI test generation.
                          What was impossible became routine.
                        </p>
                        <div className="grid grid-cols-3 gap-4">
                          <div className="bg-gray-800/30 border border-gray-700/50 rounded-xl p-4 text-center">
                            <div className="text-3xl font-bold text-emerald-400 mb-1">Daily</div>
                            <p className="text-gray-400 text-sm">Deployments</p>
                            <p className="text-gray-600 text-xs mt-1">vs bi-weekly</p>
                          </div>
                          <div className="bg-gray-800/30 border border-gray-700/50 rounded-xl p-4 text-center">
                            <div className="text-3xl font-bold text-emerald-400 mb-1">98%</div>
                            <p className="text-gray-400 text-sm">Test Coverage</p>
                            <p className="text-gray-600 text-xs mt-1">from 42%</p>
                          </div>
                          <div className="bg-gray-800/30 border border-gray-700/50 rounded-xl p-4 text-center">
                            <div className="text-3xl font-bold text-emerald-400 mb-1">3 hrs</div>
                            <p className="text-gray-400 text-sm">Test Generation</p>
                            <p className="text-gray-600 text-xs mt-1">from 3-5 days</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Chapter 4: Excellence */}
                  <div className="relative">
                    <div className="flex items-start gap-8">
                      <div className="flex-shrink-0 w-32 pt-2">
                        <div className="text-amber-400 font-bold text-sm uppercase tracking-wider">Chapter 4</div>
                        <div className="text-gray-600 text-xs mt-1">Q3 2026</div>
                      </div>
                      <div className="flex-1">
                        <h2 className="text-3xl font-bold text-white mb-4">The Excellence</h2>
                        <p className="text-xl text-gray-300 leading-relaxed mb-6">
                          The India sales team now handles 3x volume. AI recommendations serve 2M+ profiles daily.
                          Customer NPS jumped 31 points. This isn't automation—it's transformation.
                        </p>
                        <div className="bg-gradient-to-br from-amber-900/20 to-orange-900/20 border border-amber-500/30 rounded-2xl p-8">
                          <div className="grid grid-cols-2 gap-8">
                            <div>
                              <h4 className="text-amber-400 font-semibold mb-4">Impact Across Departments</h4>
                              <div className="space-y-3">
                                <div className="flex justify-between items-center">
                                  <span className="text-gray-400">Engineering</span>
                                  <span className="text-white font-semibold">$486K</span>
                                </div>
                                <div className="flex justify-between items-center">
                                  <span className="text-gray-400">Marketing</span>
                                  <span className="text-white font-semibold">$412K</span>
                                </div>
                                <div className="flex justify-between items-center">
                                  <span className="text-gray-400">Sales</span>
                                  <span className="text-white font-semibold">$345K</span>
                                </div>
                                <div className="flex justify-between items-center">
                                  <span className="text-gray-400">Support</span>
                                  <span className="text-white font-semibold">$280K</span>
                                </div>
                              </div>
                            </div>
                            <div className="flex items-center justify-center">
                              <div className="text-center">
                                <div className="text-6xl font-bold text-amber-400 mb-2">+31</div>
                                <p className="text-gray-400">NPS Point Increase</p>
                                <p className="text-gray-600 text-sm mt-1">Customer satisfaction soaring</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>

                {/* The Outcome */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.6 }}
                  className="text-center mb-16"
                >
                  <div className="inline-block bg-gradient-to-r from-gray-800 to-gray-900 rounded-3xl p-12 border border-gray-700/50">
                    <h2 className="text-2xl text-gray-400 mb-4">We didn't just meet our goals.</h2>
                    <div className="text-6xl font-bold mb-2">
                      <span className="bg-gradient-to-r from-green-400 via-emerald-500 to-cyan-500 bg-clip-text text-transparent">
                        We exceeded them by 17%
                      </span>
                    </div>
                    <p className="text-gray-500 mt-4">And this is just the beginning.</p>
                  </div>
                </motion.div>

                {/* Workflow Visualizations Section */}
                <div className="mt-8">
                  <div className="bg-gray-900/90 backdrop-blur-xl rounded-2xl border border-gray-800 p-8">
                    <section>
                      <h3 className="text-xl font-semibold text-cyan-400 mb-3">Featured AI Agent Workflows</h3>
                      <p className="text-gray-400 mb-4">Click on any workflow below to see detailed automation in action:</p>

                      <div className="grid grid-cols-2 gap-4 mb-6">
                        <button
                          onClick={() => setActiveWorkflow(activeWorkflow === 'marketing' ? null : 'marketing')}
                          className={`p-4 rounded-lg border transition-all text-left ${
                            activeWorkflow === 'marketing'
                              ? 'border-cyan-500 bg-cyan-900/20'
                              : 'border-gray-700 bg-gray-800/50 hover:border-cyan-600'
                          }`}
                        >
                          <div className="flex items-start gap-3">
                            <div className="p-2 bg-purple-500/20 rounded-lg">
                              <TrendingUp className="w-5 h-5 text-purple-400" />
                            </div>
                            <div className="flex-1">
                              <h4 className="text-white font-semibold">High-Value Job Marketing</h4>
                              <p className="text-gray-400 text-sm mt-1">5-day lag → 2 minutes</p>
                              <p className="text-green-400 text-xs mt-2">$156K annual savings</p>
                            </div>
                          </div>
                        </button>

                        <button
                          onClick={() => setActiveWorkflow(activeWorkflow === 'sales' ? null : 'sales')}
                          className={`p-4 rounded-lg border transition-all text-left ${
                            activeWorkflow === 'sales'
                              ? 'border-cyan-500 bg-cyan-900/20'
                              : 'border-gray-700 bg-gray-800/50 hover:border-cyan-600'
                          }`}
                        >
                          <div className="flex items-start gap-3">
                            <div className="p-2 bg-green-500/20 rounded-lg">
                              <Users className="w-5 h-5 text-green-400" />
                            </div>
                            <div className="flex-1">
                              <h4 className="text-white font-semibold">Lead Qualification (India)</h4>
                              <p className="text-gray-400 text-sm mt-1">15 min → 3 min per lead</p>
                              <p className="text-green-400 text-xs mt-2">$195K annual savings</p>
                            </div>
                          </div>
                        </button>

                        <button
                          onClick={() => setActiveWorkflow(activeWorkflow === 'support' ? null : 'support')}
                          className={`p-4 rounded-lg border transition-all text-left ${
                            activeWorkflow === 'support'
                              ? 'border-cyan-500 bg-cyan-900/20'
                              : 'border-gray-700 bg-gray-800/50 hover:border-cyan-600'
                          }`}
                        >
                          <div className="flex items-start gap-3">
                            <div className="p-2 bg-blue-500/20 rounded-lg">
                              <Activity className="w-5 h-5 text-blue-400" />
                            </div>
                            <div className="flex-1">
                              <h4 className="text-white font-semibold">Tier 1 Support Deflection</h4>
                              <p className="text-gray-400 text-sm mt-1">70% deflection rate</p>
                              <p className="text-green-400 text-xs mt-2">$280K annual savings</p>
                            </div>
                          </div>
                        </button>

                        <button
                          onClick={() => setActiveWorkflow(activeWorkflow === 'engineering' ? null : 'engineering')}
                          className={`p-4 rounded-lg border transition-all text-left ${
                            activeWorkflow === 'engineering'
                              ? 'border-cyan-500 bg-cyan-900/20'
                              : 'border-gray-700 bg-gray-800/50 hover:border-cyan-600'
                          }`}
                        >
                          <div className="flex items-start gap-3">
                            <div className="p-2 bg-amber-500/20 rounded-lg">
                              <Zap className="w-5 h-5 text-amber-400" />
                            </div>
                            <div className="flex-1">
                              <h4 className="text-white font-semibold">AI Test Generation</h4>
                              <p className="text-gray-400 text-sm mt-1">3-5 days → 3 hours</p>
                              <p className="text-green-400 text-xs mt-2">$180K annual savings</p>
                            </div>
                          </div>
                        </button>
                      </div>

                      {/* Workflow Visualization Area */}
                      {activeWorkflow && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          exit={{ opacity: 0, height: 0 }}
                          className="border-t border-gray-700 pt-6"
                        >
                          {activeWorkflow === 'marketing' && <HighValueJobWorkflow />}
                          {activeWorkflow === 'sales' && <LeadQualificationWorkflow />}
                          {activeWorkflow === 'support' && <SupportDeflectionWorkflow />}
                          {activeWorkflow === 'engineering' && <TestGenerationWorkflow />}
                        </motion.div>
                      )}
                    </section>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </main>
    </div>
  );
}
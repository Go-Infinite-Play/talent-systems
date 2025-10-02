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
  CheckCircle,
  Sparkles
} from 'lucide-react';

// Dynamically import heavy components
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

const SpotlightComplianceWorkflow = dynamic(() => import('@/components/SpotlightComplianceWorkflow'), {
  ssr: false,
  loading: () => null
});

export default function Home() {
  const [viewMode, setViewMode] = useState<'report' | 'workflows'>('report');
  const [isLoaded, setIsLoaded] = useState(false);
  const [activeWorkflow, setActiveWorkflow] = useState<'marketing' | 'sales' | 'support' | 'engineering' | 'spotlight' | null>(null);

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
    agents: 22,
    payback: 4.1
  };

  return (
    <div className="w-full min-h-screen bg-gradient-to-br from-gray-900 via-gray-900 to-black">
      {/* Fixed Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-8">
              {/* Logo and Title */}
              <div className="flex items-center gap-3">
                <img src="/talent-systems-logo.png" alt="Talent Systems" className="h-8" />
              </div>

              {/* Navigation */}
              <nav className="flex items-center gap-2">
                <button
                  onClick={() => setViewMode('report')}
                  className={`px-4 py-2 rounded-lg font-medium transition-all flex items-center gap-2 ${
                    viewMode === 'report'
                      ? 'text-white shadow-lg'
                      : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'
                  }`}
                  style={viewMode === 'report' ? { backgroundColor: '#2575f4' } : {}}
                >
                  <Sparkles className="w-4 h-4" />
                  Executive Summary
                </button>
                <button
                  onClick={() => setViewMode('workflows')}
                  className={`px-4 py-2 rounded-lg font-medium transition-all flex items-center gap-2 ${
                    viewMode === 'workflows'
                      ? 'text-white shadow-lg'
                      : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'
                  }`}
                  style={viewMode === 'workflows' ? { backgroundColor: '#2575f4' } : {}}
                >
                  <Workflow className="w-4 h-4" />
                  Agent Workflows
                </button>
                <a
                  href="/ai-transformation-report.pdf"
                  download="Talent Systems AI Transformation Report.pdf"
                  className="px-4 py-2 rounded-lg font-medium transition-all flex items-center gap-2 text-gray-600 hover:text-gray-900 hover:bg-gray-100"
                >
                  <FileText className="w-4 h-4" />
                  Download Full Report
                </a>
              </nav>
            </div>

            {/* Key Metrics Preview */}
            <div className="flex items-center gap-6">
              <div className="text-right">
                <p className="text-gray-500 text-xs">Annual Savings</p>
                <p className="font-bold text-lg" style={{ color: '#f3af36' }}>${(metrics.savings / 1000000).toFixed(2)}M</p>
              </div>
              <div className="text-right">
                <p className="text-gray-500 text-xs">ROI</p>
                <p className="font-bold text-lg" style={{ color: '#2575f4' }}>{metrics.roi}%</p>
              </div>
              <div className="text-right">
                <p className="text-gray-500 text-xs">AI Agents</p>
                <p className="font-bold text-lg" style={{ color: '#f3af36' }}>{metrics.agents}</p>
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
                {/* Introduction */}
                <div className="bg-gray-900/90 backdrop-blur-xl rounded-2xl border border-gray-800 p-8">
                  <h2 className="text-2xl font-bold text-white mb-4">How We Build AI Agents</h2>
                  <p className="text-gray-300 leading-relaxed mb-4">
                    Each AI agent is meticulously crafted using enterprise-grade platforms like N8N and Lindy.ai. We provide them access to both
                    structured platform data through Snowflake Cortex and unstructured knowledge bases containing SOPs and business logic.
                    Through advanced prompt engineering and custom development, we ensure reliable execution. Every agent undergoes a rigorous
                    evaluation period against established success criteria, guaranteeing 100% task execution accuracy. Where needed, we implement
                    human-in-the-loop verification at critical output stages.
                  </p>
                  <p className="text-cyan-400 font-medium">
                    Scroll down to see some of these agents in action, then click into each workflow to watch them execute in real-time.
                  </p>
                </div>

                {/* Workflow Visualizations Section */}
                <div className="bg-gray-900/90 backdrop-blur-xl rounded-2xl border border-gray-800 p-8">
                  <h3 className="text-2xl font-bold text-white mb-6">Featured Agent Workflows</h3>
                  <p className="text-gray-400 mb-8">
                    Explore detailed automation workflows showing how our AI agents transform operations in real-time.
                    Click on any workflow below to see the step-by-step process.
                  </p>

                  {/* Workflow Selection Buttons */}
                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
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

                    <button
                      onClick={() => setActiveWorkflow(activeWorkflow === 'spotlight' ? null : 'spotlight')}
                      className={`p-4 rounded-lg border transition-all text-left ${
                        activeWorkflow === 'spotlight'
                          ? 'border-cyan-500 bg-cyan-900/20'
                          : 'border-gray-700 bg-gray-800/50 hover:border-cyan-600'
                      }`}
                    >
                      <div className="flex items-start gap-3">
                        <div className="p-2 rounded-lg" style={{ backgroundColor: '#2575f4' + '20' }}>
                          <CheckCircle className="w-5 h-5" style={{ color: '#2575f4' }} />
                        </div>
                        <div className="flex-1">
                          <h4 className="text-white font-semibold">Spotlight Compliance</h4>
                          <p className="text-gray-400 text-sm mt-1">1 week → Same day</p>
                          <p className="text-green-400 text-xs mt-2">$125K annual savings</p>
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
                      {activeWorkflow === 'spotlight' && <SpotlightComplianceWorkflow />}
                    </motion.div>
                  )}
                </div>

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
                        <span className="text-amber-400 font-medium">22 Active Agents</span>
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
              </div>
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
                    <span className="bg-gradient-to-r bg-clip-text text-transparent" style={{ backgroundImage: 'linear-gradient(to right, #2575f4, #f3af36)' }}>
                      The Year We Reimagined
                    </span>
                    <br />
                    <span className="text-white">How We Work</span>
                  </motion.h1>
                  <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                    className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed"
                  >
                    Talent Systems took bold steps to reimagine how we work, how we work with AI, and how we think about accomplishing tasks across our global casting software ecosystem.
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
                    <div className="text-5xl font-bold mb-2" style={{ color: '#f3af36' }}>$1.73M</div>
                    <p className="text-gray-400 text-sm">Annual Savings</p>
                    <p className="text-xs mt-1" style={{ color: '#f3af36' }}>+17% over target</p>
                  </div>
                  <div className="text-center">
                    <div className="text-5xl font-bold mb-2" style={{ color: '#2575f4' }}>342%</div>
                    <p className="text-gray-400 text-sm">ROI</p>
                    <p className="text-xs mt-1" style={{ color: '#2575f4' }}>First year return</p>
                  </div>
                  <div className="text-center">
                    <div className="text-5xl font-bold mb-2" style={{ color: '#f3af36' }}>16.28</div>
                    <p className="text-gray-400 text-sm">FTE Capacity</p>
                    <p className="text-xs mt-1" style={{ color: '#f3af36' }}>Unlocked</p>
                  </div>
                  <div className="text-center">
                    <div className="text-5xl font-bold mb-2" style={{ color: '#2575f4' }}>22</div>
                    <p className="text-gray-400 text-sm">AI Agents</p>
                    <p className="text-xs mt-1" style={{ color: '#2575f4' }}>All operational</p>
                  </div>
                </motion.div>

                {/* The Story */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.5 }}
                  className="space-y-20 mb-24"
                >
                  {/* Chapter 1: The Foundation */}
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
                          and every question took weeks to answer. Knowledge scattered across five systems with no single source of truth.
                        </p>
                        <div className="space-y-4">
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
                                <p className="text-gray-500 text-xs mt-1">for data insights</p>
                              </div>
                              <div>
                                <p className="text-gray-500 text-sm">After</p>
                                <p className="text-2xl font-bold text-cyan-400">Seconds</p>
                                <p className="text-gray-500 text-xs mt-1">query to answer</p>
                              </div>
                            </div>
                          </div>

                          <div className="bg-gray-800/30 border border-gray-700/50 rounded-2xl p-6">
                            <div className="flex items-center gap-4 mb-4">
                              <div className="w-12 h-12 rounded-full" style={{ backgroundColor: '#2575f4' + '20' }}>
                                <div className="w-12 h-12 flex items-center justify-center">
                                  <CheckCircle className="w-6 h-6" style={{ color: '#2575f4' }} />
                                </div>
                              </div>
                              <div>
                                <p className="text-white font-semibold">Departmental Knowledge Bases</p>
                                <p className="text-gray-400 text-sm">Structured documentation enabling AI agents to access business logic and SOPs instantly</p>
                              </div>
                            </div>
                            <div className="grid grid-cols-2 gap-4 mt-6 pt-6 border-t border-gray-700/50">
                              <div>
                                <p className="text-gray-500 text-sm">Before</p>
                                <p className="text-2xl font-bold text-gray-400">30%</p>
                                <p className="text-gray-500 text-xs mt-1">time spent searching</p>
                              </div>
                              <div>
                                <p className="text-gray-500 text-sm">After</p>
                                <p className="text-2xl font-bold" style={{ color: '#2575f4' }}>Instant</p>
                                <p className="text-gray-500 text-xs mt-1">AI-powered answers</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Chapter 2: Quick Wins */}
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
                          now run automatically every morning. The India Market Intelligence team handles 3x the volume.
                          Compliance checks and name conflicts resolve instantly.
                        </p>
                        <div className="grid grid-cols-2 gap-4">
                          <div className="bg-gradient-to-r from-purple-900/20 to-pink-900/20 border border-purple-500/20 rounded-2xl p-5">
                            <h3 className="text-white font-semibold mb-2">Automated Marketing Campaigns</h3>
                            <p className="text-gray-400 text-sm mb-3">Daily automated campaigns increased the efficacy of paid media and social channels by accelerating application velocity on Casting Networks</p>
                            <p className="text-purple-400 font-bold">$156K from efficiency gains</p>
                          </div>

                          <div className="bg-gradient-to-r from-blue-900/20 to-cyan-900/20 border border-blue-500/20 rounded-2xl p-5">
                            <h3 className="text-white font-semibold mb-2">24/7 Tier 1 Support</h3>
                            <p className="text-gray-400 text-sm mb-3">70% deflection rate with instant responses, allowing support team to focus on complex, revenue-generating customer relationships</p>
                            <p className="text-blue-400 font-bold">$280K from efficiency gains</p>
                          </div>

                          <div className="bg-gradient-to-r from-green-900/20 to-emerald-900/20 border border-green-500/20 rounded-2xl p-5">
                            <h3 className="text-white font-semibold mb-2">India Market Intelligence Team</h3>
                            <p className="text-gray-400 text-sm mb-3">Handling 3x lead volume with same headcount through AI qualification, enabling team to focus on high-value opportunities</p>
                            <p className="text-green-400 font-bold">$195K from efficiency gains</p>
                          </div>

                          <div className="bg-gradient-to-r from-amber-900/20 to-orange-900/20 border border-amber-500/20 rounded-2xl p-5">
                            <h3 className="text-white font-semibold mb-2">Spotlight Compliance Automation</h3>
                            <p className="text-gray-400 text-sm mb-3">Automated profile compliance checks and name conflict resolution, freeing customer success team for strategic partnerships</p>
                            <p className="text-amber-400 font-bold">$125K from efficiency gains</p>
                          </div>

                          <div className="bg-gradient-to-r from-indigo-900/20 to-purple-900/20 border border-indigo-500/20 rounded-2xl p-5">
                            <h3 className="text-white font-semibold mb-2">Cast It Reach Forms Generator</h3>
                            <p className="text-gray-400 text-sm mb-3">AI-powered form creation for customer success teams, reducing manual setup time and improving client onboarding experience</p>
                            <p className="text-indigo-400 font-bold">$87K from efficiency gains</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Chapter 3: Big Swings */}
                  <div className="relative">
                    <div className="flex items-start gap-8">
                      <div className="flex-shrink-0 w-32 pt-2">
                        <div className="text-emerald-400 font-bold text-sm uppercase tracking-wider">Chapter 3</div>
                        <div className="text-gray-600 text-xs mt-1">Q2 2026</div>
                      </div>
                      <div className="flex-1">
                        <h2 className="text-3xl font-bold text-white mb-4">The Big Swings</h2>
                        <p className="text-xl text-gray-300 leading-relaxed mb-6">
                          Success breeds ambition. We equipped every team with best-in-class AI toolsets, transforming
                          how Product designs, how Engineering ships, and how QA ensures quality.
                        </p>
                        <div className="space-y-4">
                          <div className="bg-gradient-to-r from-emerald-900/20 to-teal-900/20 border border-emerald-500/20 rounded-2xl p-6">
                            <div className="flex items-start gap-4">
                              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-emerald-500/20 flex items-center justify-center">
                                <Zap className="w-6 h-6 text-emerald-400" />
                              </div>
                              <div className="flex-1">
                                <h3 className="text-white font-semibold mb-2">Product: AI-Powered Design & Prototyping</h3>
                                <p className="text-gray-400 text-sm mb-3">Best-in-class AI toolsets enabling faster prototyping, better design iteration, and clearer communication across teams</p>
                                <div className="flex items-center gap-6 text-sm">
                                  <div>
                                    <span className="text-gray-500">Prototype Speed:</span>
                                    <span className="text-emerald-400 font-semibold ml-2">5x faster</span>
                                  </div>
                                  <div>
                                    <span className="text-gray-500">Design Iterations:</span>
                                    <span className="text-emerald-400 font-semibold ml-2">3x more</span>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>

                          <div className="bg-gradient-to-r from-cyan-900/20 to-blue-900/20 border border-cyan-500/20 rounded-2xl p-6">
                            <div className="flex items-start gap-4">
                              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-cyan-500/20 flex items-center justify-center">
                                <Activity className="w-6 h-6 text-cyan-400" />
                              </div>
                              <div className="flex-1">
                                <h3 className="text-white font-semibold mb-2">Engineering: Claude Code & Cursor</h3>
                                <p className="text-gray-400 text-sm mb-3">Developers equipped with AI pair programming tools, dramatically increasing shipping velocity and code quality</p>
                                <div className="grid grid-cols-3 gap-4 mt-4">
                                  <div className="text-center">
                                    <div className="text-2xl font-bold text-cyan-400">Daily</div>
                                    <p className="text-gray-500 text-xs">Deployments</p>
                                  </div>
                                  <div className="text-center">
                                    <div className="text-2xl font-bold text-cyan-400">10x</div>
                                    <p className="text-gray-500 text-xs">Shipping Velocity</p>
                                  </div>
                                  <div className="text-center">
                                    <div className="text-2xl font-bold text-cyan-400">$486K</div>
                                    <p className="text-gray-500 text-xs">Efficiency Gains</p>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>

                          <div className="bg-gradient-to-r from-purple-900/20 to-pink-900/20 border border-purple-500/20 rounded-2xl p-6">
                            <div className="flex items-start gap-4">
                              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-purple-500/20 flex items-center justify-center">
                                <CheckCircle className="w-6 h-6 text-purple-400" />
                              </div>
                              <div className="flex-1">
                                <h3 className="text-white font-semibold mb-2">QA: Fully Automated Testing</h3>
                                <p className="text-gray-400 text-sm mb-3">AI test generation with Playwright, enabling comprehensive coverage and continuous quality assurance</p>
                                <div className="flex items-center gap-6 text-sm">
                                  <div>
                                    <span className="text-gray-500">Test Coverage:</span>
                                    <span className="text-purple-400 font-semibold ml-2">42% → 98%</span>
                                  </div>
                                  <div>
                                    <span className="text-gray-500">Test Generation:</span>
                                    <span className="text-purple-400 font-semibold ml-2">3-5 days → 3 hours</span>
                                  </div>
                                  <div>
                                    <span className="text-gray-500">Savings:</span>
                                    <span className="text-purple-400 font-semibold ml-2">$180K from efficiency gains</span>
                                  </div>
                                </div>
                              </div>
                            </div>
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
                          A year later, the organization feels fundamentally different. Teams are fluent with AI agents, confidently
                          delegating routine work while focusing on strategic, revenue-generating activities. Customer NPS jumped 31 points.
                          This isn&apos;t automation. It&apos;s transformation.
                        </p>
                        <div className="bg-gradient-to-br from-amber-900/20 to-orange-900/20 border border-amber-500/30 rounded-2xl p-8">
                          <div className="grid grid-cols-2 gap-8">
                            <div>
                              <h4 className="text-amber-400 font-semibold mb-2">Total Annual Impact</h4>
                              <p className="text-gray-500 text-sm mb-4">From efficiency gains enabling revenue-generating focus</p>
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
                                  <span className="text-gray-400">Market Intelligence</span>
                                  <span className="text-white font-semibold">$345K</span>
                                </div>
                                <div className="flex justify-between items-center">
                                  <span className="text-gray-400">Support</span>
                                  <span className="text-white font-semibold">$280K</span>
                                </div>
                                <div className="flex justify-between items-center">
                                  <span className="text-gray-400">Operations</span>
                                  <span className="text-white font-semibold">$207K</span>
                                </div>
                              </div>
                            </div>
                            <div className="flex items-center justify-center">
                              <div className="text-center">
                                <div className="text-6xl font-bold text-amber-400 mb-2">+31</div>
                                <p className="text-gray-400">NPS Point Increase</p>
                                <p className="text-gray-600 text-sm mt-1">Customer satisfaction soaring</p>
                                <div className="mt-6 pt-6 border-t border-amber-500/20">
                                  <div className="text-3xl font-bold text-emerald-400">2M+</div>
                                  <p className="text-gray-400 text-sm">Profiles served daily</p>
                                </div>
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
                    <h2 className="text-2xl text-gray-400 mb-4">We didn&apos;t just meet our goals.</h2>
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

                      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
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

                        <button
                          onClick={() => setActiveWorkflow(activeWorkflow === 'spotlight' ? null : 'spotlight')}
                          className={`p-4 rounded-lg border transition-all text-left ${
                            activeWorkflow === 'spotlight'
                              ? 'border-cyan-500 bg-cyan-900/20'
                              : 'border-gray-700 bg-gray-800/50 hover:border-cyan-600'
                          }`}
                        >
                          <div className="flex items-start gap-3">
                            <div className="p-2 rounded-lg" style={{ backgroundColor: '#2575f4' + '20' }}>
                              <CheckCircle className="w-5 h-5" style={{ color: '#2575f4' }} />
                            </div>
                            <div className="flex-1">
                              <h4 className="text-white font-semibold">Spotlight Compliance</h4>
                              <p className="text-gray-400 text-sm mt-1">1 week → Same day</p>
                              <p className="text-green-400 text-xs mt-2">$125K annual savings</p>
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
                          {activeWorkflow === 'spotlight' && <SpotlightComplianceWorkflow />}
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
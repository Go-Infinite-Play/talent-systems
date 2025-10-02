'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  TrendingUp,
  DollarSign,
  Users,
  Clock,
  Zap,
  Activity,
  Target,
  ChevronUp,
  ChevronDown
} from 'lucide-react';
import { AI_AGENTS, DEPARTMENTS } from '@/lib/aiAgents';

// Animated counter component
function AnimatedMetric({ value, prefix = '', suffix = '', decimals = 0, duration = 2000 }: {
  value: number;
  prefix?: string;
  suffix?: string;
  decimals?: number;
  duration?: number;
}) {
  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    const steps = 60;
    const increment = value / steps;
    let current = 0;
    const stepDuration = duration / steps;

    const timer = setInterval(() => {
      current += increment;
      if (current >= value) {
        current = value;
        clearInterval(timer);
      }
      setDisplayValue(current);
    }, stepDuration);

    return () => clearInterval(timer);
  }, [value, duration]);

  return (
    <span className="font-mono">
      {prefix}{displayValue.toFixed(decimals).toLocaleString()}{suffix}
    </span>
  );
}

export default function ExecutiveDashboard() {
  const [expandedDepartment, setExpandedDepartment] = useState<string | null>(null);
  const [selectedTimeframe, setSelectedTimeframe] = useState<'month' | 'quarter' | 'year'>('year');

  // Calculate totals from AI agents
  const activeAgents = AI_AGENTS.filter(a => a.status === 'active').length;
  const quickWins = AI_AGENTS.filter(a => a.type === 'quick-win').length;
  const bigSwings = AI_AGENTS.filter(a => a.type === 'big-swing').length;

  // Key metrics from the document
  const keyMetrics = {
    annualSavings: 1480750,
    fteCapacity: 16.28,
    hoursAutomated: 33852,
    roi: 293,
    paybackMonths: 4.1,
    investment: 405500
  };

  // Department-specific metrics
  const departmentMetrics = DEPARTMENTS.map(dept => {
    const deptAgents = AI_AGENTS.filter(agent => dept.agents.includes(agent.id));
    const savings = deptAgents.reduce((sum, agent) => sum + agent.impact.costSaved, 0);
    const activeCount = deptAgents.filter(a => a.status === 'active').length;

    return {
      ...dept,
      savings,
      activeAgents: activeCount,
      totalAgents: deptAgents.length,
      topAgent: deptAgents[0]
    };
  });

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="p-8 max-w-7xl mx-auto"
    >
      <div className="bg-gray-900/95 backdrop-blur-xl rounded-2xl border border-gray-800 shadow-2xl">
        {/* Header */}
        <div className="p-6 border-b border-gray-800">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-2xl font-bold text-white">AI Transformation Executive Dashboard</h2>
              <p className="text-gray-400 mt-1">Real-time impact across all departments</p>
            </div>
            <div className="flex gap-2">
              {(['month', 'quarter', 'year'] as const).map((tf) => (
                <button
                  key={tf}
                  onClick={() => setSelectedTimeframe(tf)}
                  className={`px-4 py-2 rounded-lg font-medium transition-all ${
                    selectedTimeframe === tf
                      ? 'bg-cyan-600 text-white'
                      : 'bg-gray-800 text-gray-400 hover:bg-gray-700'
                  }`}
                >
                  {tf.charAt(0).toUpperCase() + tf.slice(1)}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Primary KPIs */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 p-6 border-b border-gray-800">
          <motion.div
            whileHover={{ scale: 1.02 }}
            className="bg-gradient-to-br from-green-900/30 to-green-900/10 rounded-xl p-4 border border-green-800/50"
          >
            <div className="flex items-start justify-between">
              <div>
                <p className="text-green-400 text-sm font-medium">Annual Savings</p>
                <p className="text-3xl font-bold text-white mt-1">
                  <AnimatedMetric value={keyMetrics.annualSavings} prefix="$" />
                </p>
                <p className="text-gray-400 text-xs mt-1">vs $405K investment</p>
              </div>
              <DollarSign className="w-8 h-8 text-green-400 opacity-50" />
            </div>
            <div className="mt-3 flex items-center gap-2">
              <ChevronUp className="w-4 h-4 text-green-400" />
              <span className="text-green-400 text-sm">{keyMetrics.roi}% ROI</span>
            </div>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.02 }}
            className="bg-gradient-to-br from-blue-900/30 to-blue-900/10 rounded-xl p-4 border border-blue-800/50"
          >
            <div className="flex items-start justify-between">
              <div>
                <p className="text-blue-400 text-sm font-medium">FTE Capacity Unlocked</p>
                <p className="text-3xl font-bold text-white mt-1">
                  <AnimatedMetric value={keyMetrics.fteCapacity} decimals={2} />
                </p>
                <p className="text-gray-400 text-xs mt-1">Full-time equivalents</p>
              </div>
              <Users className="w-8 h-8 text-blue-400 opacity-50" />
            </div>
            <div className="mt-3 flex items-center gap-2">
              <Activity className="w-4 h-4 text-blue-400" />
              <span className="text-blue-400 text-sm">Across all departments</span>
            </div>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.02 }}
            className="bg-gradient-to-br from-purple-900/30 to-purple-900/10 rounded-xl p-4 border border-purple-800/50"
          >
            <div className="flex items-start justify-between">
              <div>
                <p className="text-purple-400 text-sm font-medium">Hours Automated</p>
                <p className="text-3xl font-bold text-white mt-1">
                  <AnimatedMetric value={keyMetrics.hoursAutomated} suffix="" />
                </p>
                <p className="text-gray-400 text-xs mt-1">Annually (651/week)</p>
              </div>
              <Clock className="w-8 h-8 text-purple-400 opacity-50" />
            </div>
            <div className="mt-3 flex items-center gap-2">
              <Zap className="w-4 h-4 text-purple-400" />
              <span className="text-purple-400 text-sm">24/7 operations</span>
            </div>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.02 }}
            className="bg-gradient-to-br from-amber-900/30 to-amber-900/10 rounded-xl p-4 border border-amber-800/50"
          >
            <div className="flex items-start justify-between">
              <div>
                <p className="text-amber-400 text-sm font-medium">Payback Period</p>
                <p className="text-3xl font-bold text-white mt-1">
                  <AnimatedMetric value={keyMetrics.paybackMonths} decimals={1} suffix=" mo" />
                </p>
                <p className="text-gray-400 text-xs mt-1">To break even</p>
              </div>
              <Target className="w-8 h-8 text-amber-400 opacity-50" />
            </div>
            <div className="mt-3 flex items-center gap-2">
              <TrendingUp className="w-4 h-4 text-amber-400" />
              <span className="text-amber-400 text-sm">Q1 2026 positive</span>
            </div>
          </motion.div>
        </div>

        {/* AI Agent Status */}
        <div className="p-6 border-b border-gray-800">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold text-white">AI Agent Deployment Status</h3>
            <div className="flex gap-4 text-sm">
              <span className="text-gray-400">
                Total Agents: <span className="text-white font-semibold">{AI_AGENTS.length}</span>
              </span>
              <span className="text-green-400">
                Active: <span className="font-semibold">{activeAgents}</span>
              </span>
              <span className="text-amber-400">
                In Development: <span className="font-semibold">{AI_AGENTS.length - activeAgents}</span>
              </span>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="bg-gray-800/50 rounded-lg p-4">
              <div className="flex items-center justify-between mb-2">
                <span className="text-cyan-400 font-medium">Quick Wins</span>
                <span className="text-white text-2xl font-bold">{quickWins}</span>
              </div>
              <div className="w-full bg-gray-700 rounded-full h-2">
                <div
                  className="bg-gradient-to-r from-cyan-500 to-cyan-400 h-2 rounded-full transition-all"
                  style={{ width: `${(quickWins / AI_AGENTS.length) * 100}%` }}
                />
              </div>
              <p className="text-gray-400 text-xs mt-2">Rapid implementation, immediate impact</p>
            </div>

            <div className="bg-gray-800/50 rounded-lg p-4">
              <div className="flex items-center justify-between mb-2">
                <span className="text-purple-400 font-medium">Big Swings</span>
                <span className="text-white text-2xl font-bold">{bigSwings}</span>
              </div>
              <div className="w-full bg-gray-700 rounded-full h-2">
                <div
                  className="bg-gradient-to-r from-purple-500 to-purple-400 h-2 rounded-full transition-all"
                  style={{ width: `${(bigSwings / AI_AGENTS.length) * 100}%` }}
                />
              </div>
              <p className="text-gray-400 text-xs mt-2">Transformational capabilities</p>
            </div>
          </div>
        </div>

        {/* Department Breakdown */}
        <div className="p-6">
          <h3 className="text-lg font-semibold text-white mb-4">Department Performance</h3>
          <div className="space-y-3">
            {departmentMetrics.map((dept) => (
              <motion.div
                key={dept.id}
                className="bg-gray-800/50 rounded-lg overflow-hidden"
              >
                <button
                  onClick={() => setExpandedDepartment(
                    expandedDepartment === dept.id ? null : dept.id
                  )}
                  className="w-full p-4 flex items-center justify-between hover:bg-gray-800/70 transition-colors"
                >
                  <div className="flex items-center gap-3">
                    <span className="text-2xl">{dept.icon}</span>
                    <div className="text-left">
                      <p className="text-white font-medium">{dept.name}</p>
                      <p className="text-gray-400 text-sm">{dept.activeAgents}/{dept.totalAgents} agents active</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="text-right">
                      <p className="text-green-400 font-semibold">
                        ${dept.savings.toLocaleString()}
                      </p>
                      <p className="text-gray-400 text-xs">annual savings</p>
                    </div>
                    {expandedDepartment === dept.id ? (
                      <ChevronUp className="w-5 h-5 text-gray-400" />
                    ) : (
                      <ChevronDown className="w-5 h-5 text-gray-400" />
                    )}
                  </div>
                </button>

                <AnimatePresence>
                  {expandedDepartment === dept.id && (
                    <motion.div
                      initial={{ height: 0 }}
                      animate={{ height: 'auto' }}
                      exit={{ height: 0 }}
                      className="overflow-hidden"
                    >
                      <div className="px-4 pb-4 border-t border-gray-700">
                        <div className="mt-4 grid grid-cols-2 gap-4">
                          <div>
                            <p className="text-gray-400 text-sm mb-1">Before AI</p>
                            <p className="text-red-400 text-sm">{dept.beforeState}</p>
                          </div>
                          <div>
                            <p className="text-gray-400 text-sm mb-1">After AI</p>
                            <p className="text-green-400 text-sm">{dept.afterState}</p>
                          </div>
                        </div>
                        {dept.topAgent && (
                          <div className="mt-4 p-3 bg-gray-900/50 rounded-lg">
                            <p className="text-gray-400 text-xs mb-1">Top Performing Agent</p>
                            <p className="text-white font-medium">{dept.topAgent.name}</p>
                            <p className="text-cyan-400 text-sm mt-1">{dept.topAgent.impact.efficiency}</p>
                          </div>
                        )}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Timeline */}
        <div className="p-6 border-t border-gray-800">
          <h3 className="text-lg font-semibold text-white mb-4">Implementation Timeline</h3>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="bg-gradient-to-br from-blue-900/30 to-blue-900/10 rounded-lg p-4 border border-blue-800/50">
              <p className="text-blue-400 font-medium mb-1">Q4 2025</p>
              <p className="text-white text-sm">Foundation & Infrastructure</p>
              <p className="text-gray-400 text-xs mt-1">Data cataloging, knowledge bases</p>
            </div>
            <div className="bg-gradient-to-br from-green-900/30 to-green-900/10 rounded-lg p-4 border border-green-800/50">
              <p className="text-green-400 font-medium mb-1">Q1 2026</p>
              <p className="text-white text-sm">Quick Wins</p>
              <p className="text-gray-400 text-xs mt-1">Support automation, lead scoring</p>
            </div>
            <div className="bg-gradient-to-br from-purple-900/30 to-purple-900/10 rounded-lg p-4 border border-purple-800/50">
              <p className="text-purple-400 font-medium mb-1">Q2 2026</p>
              <p className="text-white text-sm">Big Swings</p>
              <p className="text-gray-400 text-xs mt-1">Agentic workflows, full automation</p>
            </div>
            <div className="bg-gradient-to-br from-amber-900/30 to-amber-900/10 rounded-lg p-4 border border-amber-800/50">
              <p className="text-amber-400 font-medium mb-1">Q3 2026</p>
              <p className="text-white text-sm">Transformation</p>
              <p className="text-gray-400 text-xs mt-1">AI-native operations</p>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Calculator, X, Plus, Minus, DollarSign, Users, Clock, TrendingUp } from 'lucide-react';
import { useStore } from '@/lib/store';

interface AIImplementation {
  id: string;
  name: string;
  department: string;
  annualSavings: number;
  fteImpact: number;
  hoursAutomated: number;
  enabled: boolean;
}

const AI_IMPLEMENTATIONS: AIImplementation[] = [
  {
    id: 'high-value-job-agent',
    name: 'High-Value Job Agent',
    department: 'Marketing',
    annualSavings: 156000,
    fteImpact: 1.5,
    hoursAutomated: 3120
  },
  {
    id: 'support-deflection',
    name: 'Tier 1 Support Deflection',
    department: 'Support',
    annualSavings: 280000,
    fteImpact: 3.5,
    hoursAutomated: 7280
  },
  {
    id: 'lead-qualification',
    name: 'Lead Qualification Bot',
    department: 'Sales',
    annualSavings: 195000,
    fteImpact: 2.25,
    hoursAutomated: 4680
  },
  {
    id: 'test-automation',
    name: 'AI Test Generation',
    department: 'Engineering',
    annualSavings: 240000,
    fteImpact: 2.0,
    hoursAutomated: 4160
  },
  {
    id: 'content-generation',
    name: 'Content Generation AI',
    department: 'Marketing',
    annualSavings: 180000,
    fteImpact: 2.2,
    hoursAutomated: 4576
  },
  {
    id: 'data-insights',
    name: 'Natural Language Queries',
    department: 'Data',
    annualSavings: 210000,
    fteImpact: 1.8,
    hoursAutomated: 3744
  },
  {
    id: 'casting-matching',
    name: 'AI Talent Matching',
    department: 'Casting',
    annualSavings: 239000,
    fteImpact: 2.48,
    hoursAutomated: 5292
  }
].map(impl => ({ ...impl, enabled: true }));

export default function ROICalculator() {
  const [isOpen, setIsOpen] = useState(false);
  const [implementations, setImplementations] = useState(AI_IMPLEMENTATIONS);
  const { updateMetrics } = useStore();

  const calculateTotals = () => {
    const enabledImpls = implementations.filter(impl => impl.enabled);
    return {
      totalSavings: enabledImpls.reduce((acc, impl) => acc + impl.annualSavings, 0),
      totalFTE: enabledImpls.reduce((acc, impl) => acc + impl.fteImpact, 0),
      totalHours: enabledImpls.reduce((acc, impl) => acc + impl.hoursAutomated, 0),
      roi: 293, // This would be calculated based on investment
      payback: 4.1
    };
  };

  const totals = calculateTotals();

  const toggleImplementation = (id: string) => {
    const updated = implementations.map(impl =>
      impl.id === id ? { ...impl, enabled: !impl.enabled } : impl
    );
    setImplementations(updated);

    const newTotals = calculateTotals();
    updateMetrics({
      annualSavings: newTotals.totalSavings,
      fteCapacity: newTotals.totalFTE,
      hoursAutomated: newTotals.totalHours
    });
  };

  return (
    <>
      {/* Floating Calculator Button */}
      <motion.button
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        whileHover={{ scale: 1.05 }}
        onClick={() => setIsOpen(true)}
        className="fixed bottom-4 right-4 z-40 bg-gradient-to-r from-purple-500 to-indigo-500 text-white p-4 rounded-full shadow-lg hover:shadow-xl transition-all"
      >
        <Calculator className="w-6 h-6" />
      </motion.button>

      {/* Calculator Modal */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40"
            />

            {/* Calculator Panel */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50 w-full max-w-3xl max-h-[80vh] overflow-hidden"
            >
              <div className="bg-gray-900/95 backdrop-blur-lg rounded-2xl border border-gray-800 shadow-2xl">
                {/* Header */}
                <div className="p-6 border-b border-gray-800">
                  <div className="flex items-center justify-between">
                    <div>
                      <h2 className="text-2xl font-bold text-white">ROI Calculator</h2>
                      <p className="text-gray-400 mt-1">Customize your AI transformation</p>
                    </div>
                    <button
                      onClick={() => setIsOpen(false)}
                      className="text-gray-400 hover:text-white transition-colors"
                    >
                      <X className="w-6 h-6" />
                    </button>
                  </div>
                </div>

                {/* Implementations List */}
                <div className="p-6 overflow-y-auto max-h-[400px]">
                  <div className="space-y-3">
                    {implementations.map((impl) => (
                      <motion.div
                        key={impl.id}
                        whileHover={{ scale: 1.01 }}
                        className={`p-4 rounded-lg border transition-all ${
                          impl.enabled
                            ? 'bg-gradient-to-r from-purple-900/30 to-indigo-900/30 border-purple-700'
                            : 'bg-gray-800/50 border-gray-700'
                        }`}
                      >
                        <div className="flex items-center justify-between">
                          <div className="flex-1">
                            <div className="flex items-center gap-3">
                              <button
                                onClick={() => toggleImplementation(impl.id)}
                                className={`p-2 rounded-lg transition-all ${
                                  impl.enabled
                                    ? 'bg-purple-600 text-white'
                                    : 'bg-gray-700 text-gray-400'
                                }`}
                              >
                                {impl.enabled ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                              </button>
                              <div>
                                <h3 className="text-white font-semibold">{impl.name}</h3>
                                <p className="text-gray-400 text-sm">{impl.department}</p>
                              </div>
                            </div>
                          </div>

                          <div className="flex gap-6">
                            <div className="text-right">
                              <p className="text-green-400 font-semibold">
                                ${impl.annualSavings.toLocaleString()}
                              </p>
                              <p className="text-gray-500 text-xs">per year</p>
                            </div>
                            <div className="text-right">
                              <p className="text-blue-400 font-semibold">
                                {impl.fteImpact.toFixed(1)} FTE
                              </p>
                              <p className="text-gray-500 text-xs">capacity</p>
                            </div>
                            <div className="text-right">
                              <p className="text-purple-400 font-semibold">
                                {impl.hoursAutomated.toLocaleString()}h
                              </p>
                              <p className="text-gray-500 text-xs">automated</p>
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Totals Footer */}
                <div className="p-6 border-t border-gray-800 bg-gradient-to-r from-purple-900/20 to-indigo-900/20">
                  <div className="grid grid-cols-4 gap-6">
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <DollarSign className="w-4 h-4 text-green-400" />
                        <p className="text-gray-400 text-sm">Total Savings</p>
                      </div>
                      <p className="text-2xl font-bold text-green-400">
                        ${totals.totalSavings.toLocaleString()}
                      </p>
                    </div>

                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <Users className="w-4 h-4 text-blue-400" />
                        <p className="text-gray-400 text-sm">FTE Capacity</p>
                      </div>
                      <p className="text-2xl font-bold text-blue-400">
                        {totals.totalFTE.toFixed(2)}
                      </p>
                    </div>

                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <Clock className="w-4 h-4 text-purple-400" />
                        <p className="text-gray-400 text-sm">Hours Saved</p>
                      </div>
                      <p className="text-2xl font-bold text-purple-400">
                        {totals.totalHours.toLocaleString()}
                      </p>
                    </div>

                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <TrendingUp className="w-4 h-4 text-amber-400" />
                        <p className="text-gray-400 text-sm">ROI</p>
                      </div>
                      <p className="text-2xl font-bold text-amber-400">
                        {totals.roi}%
                      </p>
                    </div>
                  </div>

                  <div className="mt-4 pt-4 border-t border-gray-700">
                    <div className="flex items-center justify-between">
                      <p className="text-gray-400">
                        Payback period: <span className="text-white font-semibold">{totals.payback} months</span>
                      </p>
                      <button
                        onClick={() => setIsOpen(false)}
                        className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white px-6 py-2 rounded-lg font-semibold hover:shadow-lg transition-all"
                      >
                        Apply Changes
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
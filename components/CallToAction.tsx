'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Send,
  Calendar,
  Download,
  Share2,
  Phone,
  Mail,
  MessageSquare,
  FileText,
  X,
  ExternalLink,
  ChevronRight
} from 'lucide-react';

export default function CallToAction() {
  const [isExpanded, setIsExpanded] = useState(false);
  const [activeTab, setActiveTab] = useState('contact');

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: 'Talent Systems AI Transformation',
          text: 'Discover how AI is revolutionizing the entertainment industry infrastructure',
          url: window.location.href
        });
      } catch (err) {
        console.log('Share failed:', err);
      }
    } else {
      // Fallback to copy to clipboard
      navigator.clipboard.writeText(window.location.href);
      alert('Link copied to clipboard!');
    }
  };

  const handleDownloadReport = () => {
    // In a real implementation, this would download a PDF
    alert('ROI Report download will be implemented');
  };

  return (
    <>
      {/* Floating CTA Button */}
      <motion.button
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        whileHover={{ scale: 1.05 }}
        onClick={() => setIsExpanded(true)}
        className="fixed bottom-20 right-4 z-40"
      >
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-2xl blur-lg opacity-75 animate-pulse" />
          <div className="relative bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-6 py-3 rounded-2xl font-semibold shadow-xl flex items-center gap-2 hover:shadow-2xl transition-all">
            <Send className="w-5 h-5" />
            Begin Your Transformation
          </div>
        </div>
      </motion.button>

      {/* Expanded CTA Modal */}
      <AnimatePresence>
        {isExpanded && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsExpanded(false)}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40"
            />

            {/* Modal */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50 w-full max-w-2xl"
            >
              <div className="bg-gray-900/95 backdrop-blur-lg rounded-2xl border border-cyan-500/30 shadow-2xl overflow-hidden">
                {/* Header */}
                <div className="relative bg-gradient-to-r from-cyan-600 to-blue-700 p-8 text-white">
                  <button
                    onClick={() => setIsExpanded(false)}
                    className="absolute top-4 right-4 text-white/80 hover:text-white"
                  >
                    <X className="w-6 h-6" />
                  </button>

                  <h2 className="text-3xl font-bold mb-2">Ready to Transform?</h2>
                  <p className="text-cyan-100">
                    Join the future of entertainment infrastructure with AI-powered automation
                  </p>
                </div>

                {/* Tabs */}
                <div className="flex border-b border-gray-800">
                  {['contact', 'resources', 'share'].map((tab) => (
                    <button
                      key={tab}
                      onClick={() => setActiveTab(tab)}
                      className={`flex-1 py-3 px-4 font-semibold transition-colors ${
                        activeTab === tab
                          ? 'text-cyan-400 border-b-2 border-cyan-400'
                          : 'text-gray-400 hover:text-white'
                      }`}
                    >
                      {tab.charAt(0).toUpperCase() + tab.slice(1)}
                    </button>
                  ))}
                </div>

                {/* Content */}
                <div className="p-6">
                  {activeTab === 'contact' && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="space-y-4"
                    >
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <motion.button
                          whileHover={{ scale: 1.02 }}
                          className="flex items-center gap-4 p-4 bg-gray-800/50 rounded-lg border border-gray-700 hover:border-cyan-500 transition-all"
                        >
                          <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center">
                            <Calendar className="w-6 h-6 text-white" />
                          </div>
                          <div className="text-left">
                            <p className="text-white font-semibold">Schedule Demo</p>
                            <p className="text-gray-400 text-sm">See the platform in action</p>
                          </div>
                          <ChevronRight className="w-5 h-5 text-gray-400 ml-auto" />
                        </motion.button>

                        <motion.button
                          whileHover={{ scale: 1.02 }}
                          className="flex items-center gap-4 p-4 bg-gray-800/50 rounded-lg border border-gray-700 hover:border-cyan-500 transition-all"
                        >
                          <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-600 rounded-lg flex items-center justify-center">
                            <MessageSquare className="w-6 h-6 text-white" />
                          </div>
                          <div className="text-left">
                            <p className="text-white font-semibold">Start Discussion</p>
                            <p className="text-gray-400 text-sm">Talk to our AI experts</p>
                          </div>
                          <ChevronRight className="w-5 h-5 text-gray-400 ml-auto" />
                        </motion.button>

                        <motion.button
                          whileHover={{ scale: 1.02 }}
                          className="flex items-center gap-4 p-4 bg-gray-800/50 rounded-lg border border-gray-700 hover:border-cyan-500 transition-all"
                        >
                          <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-indigo-600 rounded-lg flex items-center justify-center">
                            <Phone className="w-6 h-6 text-white" />
                          </div>
                          <div className="text-left">
                            <p className="text-white font-semibold">Call Us</p>
                            <p className="text-gray-400 text-sm">+1 (310) 555-0100</p>
                          </div>
                          <ChevronRight className="w-5 h-5 text-gray-400 ml-auto" />
                        </motion.button>

                        <motion.button
                          whileHover={{ scale: 1.02 }}
                          className="flex items-center gap-4 p-4 bg-gray-800/50 rounded-lg border border-gray-700 hover:border-cyan-500 transition-all"
                        >
                          <div className="w-12 h-12 bg-gradient-to-br from-amber-500 to-orange-600 rounded-lg flex items-center justify-center">
                            <Mail className="w-6 h-6 text-white" />
                          </div>
                          <div className="text-left">
                            <p className="text-white font-semibold">Email Us</p>
                            <p className="text-gray-400 text-sm">ai@talentsystems.com</p>
                          </div>
                          <ChevronRight className="w-5 h-5 text-gray-400 ml-auto" />
                        </motion.button>
                      </div>

                      <div className="mt-6 p-4 bg-gradient-to-r from-cyan-900/30 to-blue-900/30 rounded-lg border border-cyan-500/30">
                        <p className="text-cyan-400 font-semibold mb-1">Global Offices</p>
                        <p className="text-gray-300 text-sm">
                          Los Angeles (HQ) • New York • London • Sydney • India • Mexico City
                        </p>
                      </div>
                    </motion.div>
                  )}

                  {activeTab === 'resources' && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="space-y-4"
                    >
                      <motion.button
                        whileHover={{ scale: 1.02 }}
                        onClick={handleDownloadReport}
                        className="w-full flex items-center gap-4 p-4 bg-gradient-to-r from-cyan-900/30 to-blue-900/30 rounded-lg border border-cyan-500/30 hover:border-cyan-400 transition-all"
                      >
                        <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center">
                          <Download className="w-6 h-6 text-white" />
                        </div>
                        <div className="text-left flex-1">
                          <p className="text-white font-semibold">Download ROI Report</p>
                          <p className="text-gray-400 text-sm">
                            Detailed breakdown of $1.5M annual savings
                          </p>
                        </div>
                        <ExternalLink className="w-5 h-5 text-cyan-400" />
                      </motion.button>

                      <motion.button
                        whileHover={{ scale: 1.02 }}
                        className="w-full flex items-center gap-4 p-4 bg-gray-800/50 rounded-lg border border-gray-700 hover:border-cyan-500 transition-all"
                      >
                        <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-indigo-600 rounded-lg flex items-center justify-center">
                          <FileText className="w-6 h-6 text-white" />
                        </div>
                        <div className="text-left flex-1">
                          <p className="text-white font-semibold">Technical Documentation</p>
                          <p className="text-gray-400 text-sm">
                            Integration guides and API documentation
                          </p>
                        </div>
                        <ExternalLink className="w-5 h-5 text-gray-400" />
                      </motion.button>

                      <motion.button
                        whileHover={{ scale: 1.02 }}
                        className="w-full flex items-center gap-4 p-4 bg-gray-800/50 rounded-lg border border-gray-700 hover:border-cyan-500 transition-all"
                      >
                        <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-600 rounded-lg flex items-center justify-center">
                          <FileText className="w-6 h-6 text-white" />
                        </div>
                        <div className="text-left flex-1">
                          <p className="text-white font-semibold">Success Stories</p>
                          <p className="text-gray-400 text-sm">
                            Case studies from our 7 platforms
                          </p>
                        </div>
                        <ExternalLink className="w-5 h-5 text-gray-400" />
                      </motion.button>
                    </motion.div>
                  )}

                  {activeTab === 'share' && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="space-y-4"
                    >
                      <div className="text-center py-6">
                        <p className="text-gray-300 mb-6">
                          Share this vision with your team and stakeholders
                        </p>

                        <motion.button
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          onClick={handleShare}
                          className="inline-flex items-center gap-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-3 rounded-lg font-semibold shadow-lg hover:shadow-xl transition-all"
                        >
                          <Share2 className="w-5 h-5" />
                          Share This Experience
                        </motion.button>

                        <div className="mt-6 p-4 bg-gray-800/50 rounded-lg">
                          <p className="text-gray-400 text-sm mb-2">Direct link:</p>
                          <div className="flex items-center gap-2">
                            <input
                              type="text"
                              value={typeof window !== 'undefined' ? window.location.href : ''}
                              readOnly
                              className="flex-1 bg-gray-900 text-gray-300 px-3 py-2 rounded border border-gray-700"
                            />
                            <button
                              onClick={() => {
                                navigator.clipboard.writeText(window.location.href);
                                alert('Link copied!');
                              }}
                              className="px-4 py-2 bg-cyan-600 text-white rounded hover:bg-cyan-500 transition-colors"
                            >
                              Copy
                            </button>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
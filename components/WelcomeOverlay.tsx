'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, MousePointer, Move3D, Zap, ChevronRight } from 'lucide-react';

export default function WelcomeOverlay() {
  const [isVisible, setIsVisible] = useState(false);
  const [currentStep, setCurrentStep] = useState(0);

  useEffect(() => {
    // Check if user has seen the welcome before
    const hasSeenWelcome = localStorage.getItem('hasSeenWelcome');
    if (!hasSeenWelcome) {
      setIsVisible(true);
    }
  }, []);

  const handleDismiss = () => {
    localStorage.setItem('hasSeenWelcome', 'true');
    setIsVisible(false);
  };

  const steps = [
    {
      icon: Sparkles,
      title: 'Welcome to the Future',
      description: 'Experience how AI is transforming Talent Systems into the most advanced entertainment infrastructure platform'
    },
    {
      icon: Move3D,
      title: 'Explore the Ecosystem',
      description: 'Navigate through our living, breathing world. Click and drag to rotate, scroll to zoom, click nodes to explore'
    },
    {
      icon: MousePointer,
      title: 'Interactive Discovery',
      description: 'Every element responds to your touch. Hover for insights, click for details, discover hidden features'
    },
    {
      icon: Zap,
      title: '$1.5M in Annual Savings',
      description: 'See how AI automation creates 16.28 FTE capacity and transforms every department'
    }
  ];

  const currentStepData = steps[currentStep];

  return (
    <AnimatePresence>
      {isVisible && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/80 backdrop-blur-md z-50"
          />

          {/* Welcome Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50 max-w-lg w-full mx-4"
          >
            <div className="bg-gradient-to-b from-gray-900 to-gray-950 rounded-2xl border border-cyan-500/30 shadow-2xl overflow-hidden">
              {/* Progress bar */}
              <div className="h-1 bg-gray-800">
                <motion.div
                  className="h-full bg-gradient-to-r from-cyan-400 to-blue-500"
                  initial={{ width: '0%' }}
                  animate={{ width: `${((currentStep + 1) / steps.length) * 100}%` }}
                  transition={{ duration: 0.3 }}
                />
              </div>

              <div className="p-8">
                {/* Icon */}
                <motion.div
                  key={currentStep}
                  initial={{ scale: 0, rotate: -180 }}
                  animate={{ scale: 1, rotate: 0 }}
                  transition={{ type: 'spring', stiffness: 200 }}
                  className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-2xl flex items-center justify-center mb-6 mx-auto"
                >
                  <currentStepData.icon className="w-8 h-8 text-white" />
                </motion.div>

                {/* Content */}
                <motion.div
                  key={`content-${currentStep}`}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 }}
                >
                  <h2 className="text-2xl font-bold text-white text-center mb-3">
                    {currentStepData.title}
                  </h2>
                  <p className="text-gray-300 text-center leading-relaxed">
                    {currentStepData.description}
                  </p>
                </motion.div>

                {/* Navigation */}
                <div className="mt-8 flex items-center justify-between">
                  <div className="flex gap-2">
                    {steps.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => setCurrentStep(index)}
                        className={`w-2 h-2 rounded-full transition-all ${
                          index === currentStep
                            ? 'bg-cyan-400 w-8'
                            : 'bg-gray-600 hover:bg-gray-500'
                        }`}
                      />
                    ))}
                  </div>

                  {currentStep < steps.length - 1 ? (
                    <button
                      onClick={() => setCurrentStep(currentStep + 1)}
                      className="flex items-center gap-2 text-cyan-400 hover:text-cyan-300 transition-colors font-semibold"
                    >
                      Next
                      <ChevronRight className="w-4 h-4" />
                    </button>
                  ) : (
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={handleDismiss}
                      className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-6 py-2 rounded-lg font-semibold shadow-lg hover:shadow-xl transition-all"
                    >
                      Begin Exploration
                    </motion.button>
                  )}
                </div>

                {/* Skip option */}
                {currentStep === 0 && (
                  <button
                    onClick={handleDismiss}
                    className="text-gray-500 hover:text-gray-400 text-sm mt-4 w-full text-center transition-colors"
                  >
                    Skip introduction
                  </button>
                )}
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
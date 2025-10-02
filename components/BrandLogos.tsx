'use client';

import { motion } from 'framer-motion';

const BRANDS = [
  { name: 'Casting Networks', color: '#4F46E5', description: '150K+ roles/year' },
  { name: 'Spotlight', color: '#7C3AED', description: 'Since 1927' },
  { name: 'FastCapture', color: '#06B6D4', description: 'Top audition software' },
  { name: 'Cast It Systems', color: '#10B981', description: 'Every Hollywood studio' },
  { name: 'Cast It Reach', color: '#F59E0B', description: '19 territories' },
  { name: 'Staff Me Up', color: '#EF4444', description: '350K+ freelancers' },
  { name: 'Casting Frontier', color: '#8B5CF6', description: 'LA, NYC, Pacific NW' }
];

export default function BrandLogos() {
  return (
    <div className="fixed bottom-4 left-4 z-30 max-w-xs">
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 1 }}
        className="bg-gray-900/80 backdrop-blur-lg rounded-lg p-4 border border-gray-800"
      >
        <h3 className="text-white font-semibold mb-3 text-sm">Our Portfolio</h3>
        <div className="space-y-2">
          {BRANDS.map((brand, index) => (
            <motion.div
              key={brand.name}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1.2 + index * 0.1 }}
              className="flex items-center gap-2 group cursor-pointer"
            >
              <div
                className="w-2 h-2 rounded-full"
                style={{ backgroundColor: brand.color }}
              />
              <div className="flex-1">
                <p className="text-white text-xs font-medium group-hover:text-cyan-400 transition-colors">
                  {brand.name}
                </p>
                <p className="text-gray-500 text-[10px]">{brand.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}
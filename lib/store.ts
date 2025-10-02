import { create } from 'zustand';

interface ViewMode {
  type: 'exploration' | 'focused' | 'tour';
  focusedNode?: string;
  tourStep?: number;
}

interface MetricsData {
  annualSavings: number;
  fteCapacity: number;
  hoursAutomated: number;
  roi: number;
  paybackMonths: number;
}

interface AppStore {
  // View and navigation
  viewMode: ViewMode;
  setViewMode: (mode: ViewMode) => void;

  // Camera controls
  cameraPosition: [number, number, number];
  setCameraPosition: (position: [number, number, number]) => void;
  zoomLevel: number;
  setZoomLevel: (level: number) => void;

  // Metrics and data
  metrics: MetricsData;
  updateMetrics: (metrics: Partial<MetricsData>) => void;

  // Interactive elements
  selectedNode: string | null;
  setSelectedNode: (node: string | null) => void;
  hoveredNode: string | null;
  setHoveredNode: (node: string | null) => void;

  // Animation controls
  animationSpeed: number;
  setAnimationSpeed: (speed: number) => void;
  isPaused: boolean;
  togglePause: () => void;

  // Discovery tracking
  discoveredNodes: Set<string>;
  discoverNode: (node: string) => void;
  achievements: Set<string>;
  unlockAchievement: (achievement: string) => void;

  // Sound settings
  soundEnabled: boolean;
  toggleSound: () => void;

  // Time of day
  timeOfDay: 'morning' | 'afternoon' | 'evening' | 'night';
  setTimeOfDay: (time: 'morning' | 'afternoon' | 'evening' | 'night') => void;
}

export const useStore = create<AppStore>((set) => ({
  // Initial view mode
  viewMode: { type: 'exploration' },
  setViewMode: (mode) => set({ viewMode: mode }),

  // Camera defaults
  cameraPosition: [0, 50, 100],
  setCameraPosition: (position) => set({ cameraPosition: position }),
  zoomLevel: 1,
  setZoomLevel: (level) => set({ zoomLevel: level }),

  // Initial metrics
  metrics: {
    annualSavings: 1500000,
    fteCapacity: 16.28,
    hoursAutomated: 33852,
    roi: 293,
    paybackMonths: 4.1,
  },
  updateMetrics: (metrics) => set((state) => ({
    metrics: { ...state.metrics, ...metrics }
  })),

  // Selection state
  selectedNode: null,
  setSelectedNode: (node) => set({ selectedNode: node }),
  hoveredNode: null,
  setHoveredNode: (node) => set({ hoveredNode: node }),

  // Animation settings
  animationSpeed: 1,
  setAnimationSpeed: (speed) => set({ animationSpeed: speed }),
  isPaused: false,
  togglePause: () => set((state) => ({ isPaused: !state.isPaused })),

  // Discovery system
  discoveredNodes: new Set(),
  discoverNode: (node) => set((state) => ({
    discoveredNodes: new Set([...state.discoveredNodes, node])
  })),
  achievements: new Set(),
  unlockAchievement: (achievement) => set((state) => ({
    achievements: new Set([...state.achievements, achievement])
  })),

  // Sound toggle
  soundEnabled: true,
  toggleSound: () => set((state) => ({ soundEnabled: !state.soundEnabled })),

  // Time system
  timeOfDay: 'morning',
  setTimeOfDay: (time) => set({ timeOfDay: time }),
}));
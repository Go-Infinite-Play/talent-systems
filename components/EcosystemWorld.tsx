'use client';

import { useRef, useMemo, Suspense } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { OrbitControls, PerspectiveCamera, Stars, Float, Text, Box, Sphere, Line } from '@react-three/drei';
import * as THREE from 'three';
import { useStore } from '@/lib/store';

// Node configuration for each department
const NODES = [
  {
    id: 'data-nexus',
    name: 'Data Nexus',
    position: [0, 0, 0] as [number, number, number],
    color: '#7C3AED',
    scale: 2,
    description: '2M+ profiles, 150K roles/year',
    type: 'center'
  },
  {
    id: 'casting-tower',
    name: 'Casting Tower',
    position: [-30, 20, -20] as [number, number, number],
    color: '#4F46E5',
    description: '90% of commercials cast here',
    type: 'department'
  },
  {
    id: 'marketing-engine',
    name: 'Marketing Engine',
    position: [30, 20, -20] as [number, number, number],
    color: '#06B6D4',
    description: '10x content velocity',
    type: 'department'
  },
  {
    id: 'sales-intelligence',
    name: 'Sales Intelligence',
    position: [40, 0, 20] as [number, number, number],
    color: '#10B981',
    description: '3 min lead qualification',
    type: 'department'
  },
  {
    id: 'development-forge',
    name: 'Development Forge',
    position: [30, -20, 20] as [number, number, number],
    color: '#F59E0B',
    description: 'Daily releases',
    type: 'department'
  },
  {
    id: 'support-nexus',
    name: 'Support Nexus',
    position: [-30, -20, 20] as [number, number, number],
    color: '#EF4444',
    description: '70% deflection, 24/7',
    type: 'department'
  },
  {
    id: 'reality-stadium',
    name: 'Reality TV Stadium',
    position: [-40, 0, 20] as [number, number, number],
    color: '#8B5CF6',
    description: '200+ global TV hits',
    type: 'department'
  }
];

// Data flow particle system
function DataParticles({ source, target }: { source: [number, number, number]; target: [number, number, number] }) {
  const particlesRef = useRef<THREE.Points>(null);
  const particleCount = 50;

  const positions = useMemo(() => {
    const positions = new Float32Array(particleCount * 3);
    for (let i = 0; i < particleCount; i++) {
      const t = Math.random();
      positions[i * 3] = source[0] + (target[0] - source[0]) * t;
      positions[i * 3 + 1] = source[1] + (target[1] - source[1]) * t;
      positions[i * 3 + 2] = source[2] + (target[2] - source[2]) * t;
    }
    return positions;
  }, [source, target]);

  useFrame((state) => {
    if (!particlesRef.current) return;
    const positions = particlesRef.current.geometry.attributes.position.array as Float32Array;

    for (let i = 0; i < particleCount; i++) {
      const t = (state.clock.elapsedTime * 0.2 + i / particleCount) % 1;
      positions[i * 3] = source[0] + (target[0] - source[0]) * t;
      positions[i * 3 + 1] = source[1] + (target[1] - source[1]) * t + Math.sin(t * Math.PI) * 2;
      positions[i * 3 + 2] = source[2] + (target[2] - source[2]) * t;
    }

    particlesRef.current.geometry.attributes.position.needsUpdate = true;
  });

  return (
    <points ref={particlesRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={particleCount}
          array={positions}
          itemSize={3}
          args={[positions, 3]}
        />
      </bufferGeometry>
      <pointsMaterial size={0.5} color="#06B6D4" transparent opacity={0.6} />
    </points>
  );
}

// Individual node component
function EcosystemNode({ node }: { node: typeof NODES[0] }) {
  const meshRef = useRef<THREE.Mesh>(null);
  const { setHoveredNode, setSelectedNode, hoveredNode, selectedNode } = useStore();

  const isHovered = hoveredNode === node.id;
  const isSelected = selectedNode === node.id;

  useFrame((state) => {
    if (!meshRef.current) return;

    // Pulse animation for center node
    if (node.type === 'center') {
      meshRef.current.scale.setScalar((node.scale || 1) + Math.sin(state.clock.elapsedTime * 2) * 0.1);
    }

    // Hover effect
    if (isHovered) {
      meshRef.current.scale.setScalar((node.scale || 1) * 1.2);
    } else if (!isSelected) {
      meshRef.current.scale.setScalar(node.scale || 1);
    }
  });

  return (
    <Float
      speed={node.type === 'center' ? 2 : 1}
      rotationIntensity={node.type === 'center' ? 0.5 : 0.2}
      floatIntensity={node.type === 'center' ? 1 : 0.5}
    >
      <group position={node.position}>
        {node.type === 'center' ? (
          <Sphere
            ref={meshRef}
            args={[node.scale, 32, 32]}
            onPointerOver={() => setHoveredNode(node.id)}
            onPointerOut={() => setHoveredNode(null)}
            onClick={() => setSelectedNode(node.id === selectedNode ? null : node.id)}
          >
            <meshStandardMaterial
              color={node.color}
              emissive={node.color}
              emissiveIntensity={0.5}
              metalness={0.8}
              roughness={0.2}
            />
          </Sphere>
        ) : (
          <Box
            ref={meshRef}
            args={[3, 4, 3]}
            onPointerOver={() => setHoveredNode(node.id)}
            onPointerOut={() => setHoveredNode(null)}
            onClick={() => setSelectedNode(node.id === selectedNode ? null : node.id)}
          >
            <meshStandardMaterial
              color={node.color}
              emissive={node.color}
              emissiveIntensity={isHovered ? 0.8 : 0.3}
              metalness={0.6}
              roughness={0.3}
            />
          </Box>
        )}

        <Text
          position={[0, node.type === 'center' ? 3 : 3.5, 0]}
          fontSize={1.2}
          color="white"
          anchorX="center"
          anchorY="middle"
        >
          {node.name}
        </Text>

        {isHovered && (
          <Text
            position={[0, -3, 0]}
            fontSize={0.8}
            color="white"
            anchorX="center"
            anchorY="middle"
          >
            {node.description}
          </Text>
        )}
      </group>
    </Float>
  );
}

// Connection lines between nodes
function ConnectionLines() {
  const centerNode = NODES[0];
  const departmentNodes = NODES.slice(1);

  return (
    <>
      {departmentNodes.map((node) => (
        <Line
          key={`line-${node.id}`}
          points={[centerNode.position, node.position]}
          color="#4A5568"
          lineWidth={0.5}
          transparent
          opacity={0.3}
        />
      ))}
    </>
  );
}

// Camera controller
function CameraController() {
  const { cameraPosition, zoomLevel } = useStore();
  const { camera } = useThree();

  useFrame(() => {
    camera.position.lerp(
      new THREE.Vector3(...cameraPosition).multiplyScalar(zoomLevel),
      0.05
    );
  });

  return null;
}

// Main ecosystem scene
function EcosystemScene() {
  const centerNode = NODES[0];
  const departmentNodes = NODES.slice(1);

  return (
    <>
      {/* Lighting */}
      <ambientLight intensity={0.3} />
      <pointLight position={[50, 50, 50]} intensity={1} />
      <pointLight position={[-50, -50, -50]} intensity={0.5} />
      <directionalLight position={[0, 10, 0]} intensity={0.5} />

      {/* Background */}
      <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade speed={1} />

      {/* Grid floor */}
      <gridHelper args={[100, 20, '#2D3748', '#1A202C']} />

      {/* Connection lines */}
      <ConnectionLines />

      {/* Nodes */}
      {NODES.map((node) => (
        <EcosystemNode key={node.id} node={node} />
      ))}

      {/* Data particles flowing between nodes */}
      {departmentNodes.map((node) => (
        <DataParticles
          key={`particles-${node.id}`}
          source={centerNode.position}
          target={node.position}
        />
      ))}

      {/* Camera controls */}
      <CameraController />
      <OrbitControls
        enablePan={true}
        enableZoom={true}
        enableRotate={true}
        maxPolarAngle={Math.PI / 2}
        minDistance={30}
        maxDistance={200}
      />
    </>
  );
}

// Main component
export default function EcosystemWorld() {
  return (
    <div className="w-full h-screen bg-gradient-to-b from-gray-900 to-black">
      <Canvas>
        <PerspectiveCamera makeDefault position={[0, 50, 100]} fov={60} />
        <Suspense fallback={null}>
          <EcosystemScene />
        </Suspense>
      </Canvas>
    </div>
  );
}
'use client';

import { useState, useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Text, Box, Sphere, Line, Float, MeshDistortMaterial } from '@react-three/drei';
import * as THREE from 'three';
import { DEPARTMENTS, AI_AGENTS, PLATFORM_INTEGRATIONS } from '@/lib/aiAgents';
import { useStore } from '@/lib/store';

// Central data nexus with pulsing effect
function DataNexus() {
  const meshRef = useRef<THREE.Mesh>(null);
  const [hovered, setHovered] = useState(false);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y += 0.01;
      const scale = 1 + Math.sin(state.clock.elapsedTime * 2) * 0.1;
      meshRef.current.scale.setScalar(scale);
    }
  });

  return (
    <group position={[0, 0, 0]}>
      <Sphere
        ref={meshRef}
        args={[2, 64, 64]}
        onPointerOver={() => setHovered(true)}
        onPointerOut={() => setHovered(false)}
      >
        <MeshDistortMaterial
          color="#06B6D4"
          emissive="#06B6D4"
          emissiveIntensity={hovered ? 0.8 : 0.4}
          metalness={0.8}
          roughness={0.2}
          distort={0.3}
          speed={2}
        />
      </Sphere>

      <Text
        position={[0, 3, 0]}
        fontSize={0.5}
        color="white"
        anchorX="center"
      >
        Unified Data Platform
      </Text>

      {hovered && (
        <>
          <Text
            position={[0, -3, 0]}
            fontSize={0.3}
            color="#06B6D4"
            anchorX="center"
          >
            7 Platforms Connected
          </Text>
          <Text
            position={[0, -3.5, 0]}
            fontSize={0.25}
            color="white"
            anchorX="center"
          >
            Snowflake Cortex • Instant Insights
          </Text>
        </>
      )}
    </group>
  );
}

// Department node with AI agents
function DepartmentNode({ department, position, index }: {
  department: typeof DEPARTMENTS[0],
  position: [number, number, number],
  index: number
}) {
  const [hovered, setHovered] = useState(false);
  const [selected, setSelected] = useState(false);
  const meshRef = useRef<THREE.Mesh>(null);
  const { setSelectedNode } = useStore();

  const agents = AI_AGENTS.filter(agent =>
    department.agents.includes(agent.id)
  );

  useFrame((state) => {
    if (meshRef.current && hovered) {
      meshRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 2 + index) * 0.1;
    }
  });

  return (
    <Float speed={1.5} rotationIntensity={0.3} floatIntensity={0.5}>
      <group position={position}>
        <Box
          ref={meshRef}
          args={[3, 4, 2]}
          onPointerOver={() => setHovered(true)}
          onPointerOut={() => setHovered(false)}
          onClick={() => {
            setSelected(!selected);
            setSelectedNode(selected ? null : department.id);
          }}
        >
          <meshStandardMaterial
            color={department.color}
            emissive={department.color}
            emissiveIntensity={hovered ? 0.6 : 0.3}
            metalness={0.7}
            roughness={0.3}
          />
        </Box>

        {/* Department label */}
        <Text
          position={[0, 2.5, 0]}
          fontSize={0.4}
          color="white"
          anchorX="center"
        >
          {department.icon} {department.name}
        </Text>

        {/* Agent count indicator */}
        <Text
          position={[0, -2.5, 0]}
          fontSize={0.25}
          color={department.color}
          anchorX="center"
        >
          {agents.length} AI Agents Active
        </Text>

        {/* Show transformation on hover */}
        {hovered && (
          <>
            <Text
              position={[0, -3.2, 0]}
              fontSize={0.2}
              color="#EF4444"
              anchorX="center"
            >
              Before: {department.beforeState}
            </Text>
            <Text
              position={[0, -3.6, 0]}
              fontSize={0.2}
              color="#10B981"
              anchorX="center"
            >
              After: {department.afterState}
            </Text>
          </>
        )}

        {/* Floating AI agent indicators */}
        {selected && agents.map((agent, i) => {
          const angle = (i / agents.length) * Math.PI * 2;
          const x = Math.cos(angle) * 2;
          const z = Math.sin(angle) * 2;

          return (
            <group key={agent.id} position={[x, 1, z]}>
              <Sphere args={[0.3, 16, 16]}>
                <meshStandardMaterial
                  color={agent.status === 'active' ? '#10B981' : '#F59E0B'}
                  emissive={agent.status === 'active' ? '#10B981' : '#F59E0B'}
                  emissiveIntensity={0.5}
                />
              </Sphere>
              <Text
                position={[0, 0.5, 0]}
                fontSize={0.15}
                color="white"
                anchorX="center"
              >
                {agent.name.split(' ').slice(0, 2).join(' ')}
              </Text>
            </group>
          );
        })}
      </group>
    </Float>
  );
}

// Data flow particles between nodes
function DataFlow({ from, to, color = '#06B6D4' }: {
  from: [number, number, number],
  to: [number, number, number],
  color?: string
}) {
  const particlesRef = useRef<THREE.Points>(null);
  const particleCount = 30;

  const positions = useMemo(() => {
    const positions = new Float32Array(particleCount * 3);
    for (let i = 0; i < particleCount; i++) {
      const t = i / particleCount;
      positions[i * 3] = from[0] + (to[0] - from[0]) * t;
      positions[i * 3 + 1] = from[1] + (to[1] - from[1]) * t;
      positions[i * 3 + 2] = from[2] + (to[2] - from[2]) * t;
    }
    return positions;
  }, [from, to]);

  useFrame((state) => {
    if (!particlesRef.current) return;
    const positions = particlesRef.current.geometry.attributes.position.array as Float32Array;

    for (let i = 0; i < particleCount; i++) {
      const t = ((state.clock.elapsedTime * 0.5 + i / particleCount) % 1);
      const height = Math.sin(t * Math.PI) * 2;

      positions[i * 3] = from[0] + (to[0] - from[0]) * t;
      positions[i * 3 + 1] = from[1] + (to[1] - from[1]) * t + height;
      positions[i * 3 + 2] = from[2] + (to[2] - from[2]) * t;
    }

    particlesRef.current.geometry.attributes.position.needsUpdate = true;
  });

  return (
    <>
      <Line
        points={[from, to]}
        color={color}
        lineWidth={0.5}
        opacity={0.2}
        transparent
      />
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
        <pointsMaterial size={0.3} color={color} transparent opacity={0.8} />
      </points>
    </>
  );
}

// Platform integration indicators
function PlatformRing() {
  return (
    <group position={[0, -5, 0]}>
      {PLATFORM_INTEGRATIONS.map((platform, i) => {
        const angle = (i / PLATFORM_INTEGRATIONS.length) * Math.PI * 2;
        const x = Math.cos(angle) * 15;
        const z = Math.sin(angle) * 15;

        return (
          <Float key={platform.id} speed={2} floatIntensity={0.2}>
            <group position={[x, 0, z]}>
              <Box args={[1.5, 0.8, 0.8]}>
                <meshStandardMaterial
                  color="#1F2937"
                  emissive="#4F46E5"
                  emissiveIntensity={0.2}
                />
              </Box>
              <Text
                position={[0, 0.6, 0]}
                fontSize={0.15}
                color="white"
                anchorX="center"
              >
                {platform.name}
              </Text>
              <Text
                position={[0, -0.6, 0]}
                fontSize={0.12}
                color="#9CA3AF"
                anchorX="center"
              >
                {platform.scale}
              </Text>
            </group>
          </Float>
        );
      })}
    </group>
  );
}

// Main 3D scene
export function OrganizationScene() {
  const departmentPositions: [number, number, number][] = [
    [-8, 4, -5],   // Data & Analytics
    [8, 4, -5],    // Marketing
    [-8, 0, 5],    // Sales & Success
    [8, 0, 5],     // Support
    [-8, -4, -5],  // Product & Engineering
    [8, -4, -5],   // HR/IT/Operations
  ];

  return (
    <>
      {/* Lighting */}
      <ambientLight intensity={0.4} />
      <pointLight position={[10, 10, 10]} intensity={1} />
      <pointLight position={[-10, -10, -10]} intensity={0.5} />
      <directionalLight position={[0, 10, 0]} intensity={0.5} />

      {/* Grid floor */}
      <gridHelper args={[50, 25, '#1F2937', '#111827']} />

      {/* Central Data Nexus */}
      <DataNexus />

      {/* Department Nodes */}
      {DEPARTMENTS.map((dept, i) => (
        <DepartmentNode
          key={dept.id}
          department={dept}
          position={departmentPositions[i]}
          index={i}
        />
      ))}

      {/* Data flows from center to departments */}
      {departmentPositions.map((pos, i) => (
        <DataFlow
          key={i}
          from={[0, 0, 0]}
          to={pos}
          color={DEPARTMENTS[i].color}
        />
      ))}

      {/* Platform integrations ring */}
      <PlatformRing />

      {/* Camera controls */}
      <OrbitControls
        enablePan={true}
        enableZoom={true}
        enableRotate={true}
        maxDistance={50}
        minDistance={10}
        maxPolarAngle={Math.PI / 2}
      />
    </>
  );
}

// Main component wrapper
export default function OrganizationView() {
  return (
    <div className="w-full h-full">
      <Canvas camera={{ position: [20, 15, 25], fov: 60 }}>
        <OrganizationScene />
      </Canvas>
    </div>
  );
}
"use client";

import { Canvas } from "@react-three/fiber";
import {
  Float,
  RoundedBox,
  Edges,
  ContactShadows,
  OrbitControls,
} from "@react-three/drei";
import { Suspense } from "react";
import * as THREE from "three";

const NAVY = "#0d1320";
const GOLD = "#d6b26b";

function Block({
  position,
  size,
  edge = GOLD,
}: {
  position: [number, number, number];
  size: [number, number, number];
  edge?: string;
}) {
  return (
    <RoundedBox
      position={position}
      args={size}
      radius={0.06}
      smoothness={4}
      castShadow
      receiveShadow
    >
      <meshStandardMaterial
        color={NAVY}
        metalness={0.6}
        roughness={0.35}
        envMapIntensity={0.4}
      />
      <Edges threshold={15} color={edge} />
    </RoundedBox>
  );
}

function Complex() {
  return (
    <group position={[0, -0.4, 0]}>
      {/* Grand hall */}
      <Block position={[0, 0.6, 0]} size={[3.2, 1.2, 2]} />
      {/* Auditorium drum */}
      <Block position={[-2.1, 0.45, 0.2]} size={[1.1, 0.9, 1.4]} />
      {/* Pavilion wing */}
      <Block position={[2.1, 0.35, -0.1]} size={[1.4, 0.7, 1.8]} />
      {/* Tower */}
      <Block position={[1.1, 1.5, -0.7]} size={[0.7, 2.2, 0.7]} />
      {/* Entrance canopy */}
      <Block position={[0, 0.06, 1.5]} size={[2.4, 0.12, 0.9]} edge="#e7ce97" />
      {/* Ground plinth */}
      <RoundedBox position={[0, -0.1, 0]} args={[6, 0.2, 4]} radius={0.04}>
        <meshStandardMaterial color="#070b12" metalness={0.4} roughness={0.6} />
        <Edges threshold={15} color="#1b202b" />
      </RoundedBox>
    </group>
  );
}

function Scene() {
  return (
    <>
      <ambientLight intensity={0.4} />
      <directionalLight
        position={[4, 6, 3]}
        intensity={1.6}
        color="#fff4dd"
        castShadow
        shadow-mapSize={[1024, 1024]}
      />
      <pointLight position={[-4, 2, -2]} intensity={20} color={GOLD} distance={12} />
      <pointLight position={[3, 1, 4]} intensity={12} color="#5b7cff" distance={10} />

      <Float speed={1.2} rotationIntensity={0.18} floatIntensity={0.4}>
        <Complex />
      </Float>

      <ContactShadows
        position={[0, -0.62, 0]}
        opacity={0.6}
        scale={12}
        blur={2.6}
        far={4}
        color="#000000"
      />
      <OrbitControls
        enableZoom={false}
        enablePan={false}
        autoRotate
        autoRotateSpeed={0.8}
        minPolarAngle={Math.PI / 3.2}
        maxPolarAngle={Math.PI / 2.05}
      />
    </>
  );
}

export default function VenueScene({ className }: { className?: string }) {
  return (
    <div className={className}>
      <Canvas
        shadows
        dpr={[1, 1.6]}
        camera={{ position: [5.5, 3.4, 6], fov: 42 }}
        gl={{ antialias: true, alpha: true, toneMapping: THREE.ACESFilmicToneMapping }}
      >
        <Suspense fallback={null}>
          <Scene />
        </Suspense>
      </Canvas>
    </div>
  );
}

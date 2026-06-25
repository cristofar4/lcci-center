"use client";

import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { useMemo, useRef } from "react";
import * as THREE from "three";

function Particles({ count = 1400 }: { count?: number }) {
  const ref = useRef<THREE.Points>(null);
  const { viewport } = useThree();

  const { positions, scales } = useMemo(() => {
    const positions = new Float32Array(count * 3);
    const scales = new Float32Array(count);
    for (let i = 0; i < count; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 14;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 9;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 6;
      scales[i] = Math.random();
    }
    return { positions, scales };
  }, [count]);

  const texture = useMemo(() => {
    const c = document.createElement("canvas");
    c.width = c.height = 64;
    const ctx = c.getContext("2d")!;
    const g = ctx.createRadialGradient(32, 32, 0, 32, 32, 32);
    g.addColorStop(0, "rgba(231,206,151,1)");
    g.addColorStop(0.25, "rgba(214,178,107,0.6)");
    g.addColorStop(1, "rgba(214,178,107,0)");
    ctx.fillStyle = g;
    ctx.fillRect(0, 0, 64, 64);
    const tex = new THREE.CanvasTexture(c);
    return tex;
  }, []);

  useFrame((state, delta) => {
    const pts = ref.current;
    if (!pts) return;
    pts.rotation.y += delta * 0.025;
    pts.rotation.x += delta * 0.008;
    const px = (state.pointer.x * viewport.width) / 40;
    const py = (state.pointer.y * viewport.height) / 40;
    pts.position.x += (px - pts.position.x) * 0.04;
    pts.position.y += (py - pts.position.y) * 0.04;
  });

  return (
    <points ref={ref}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          args={[positions, 3]}
          count={count}
        />
        <bufferAttribute
          attach="attributes-scale"
          args={[scales, 1]}
          count={count}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.075}
        map={texture}
        transparent
        depthWrite={false}
        blending={THREE.AdditiveBlending}
        opacity={0.9}
        sizeAttenuation
      />
    </points>
  );
}

export default function ParticleField({
  className,
  count,
}: {
  className?: string;
  count?: number;
}) {
  return (
    <div className={className}>
      <Canvas
        dpr={[1, 1.6]}
        camera={{ position: [0, 0, 8], fov: 55 }}
        gl={{ antialias: true, alpha: true, powerPreference: "high-performance" }}
        style={{ pointerEvents: "none" }}
      >
        <Particles count={count} />
      </Canvas>
    </div>
  );
}

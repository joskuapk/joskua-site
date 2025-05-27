// src/components/visuals/JLogoCanvas.tsx
"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import * as THREE from "three";

export default function JLogoCanvas() {
  return (
    <div className="mx-auto w-60 h-60 z-50 relative">
      {/* Set up a 3D canvas with camera and lighting */}
      <Canvas camera={{ position: [0, 0, 30], fov: 45 }}>
        <ambientLight intensity={1.5} />
        <directionalLight position={[0, 0, 5]} />
        <JLetter />
      </Canvas>
    </div>
  );
}

function JLetter() {
  const ref = useRef<THREE.Group>(null);
  const { scene } = useGLTF("/JLogo.glb");

  // Animate the model with a smooth oscillation (±15 degrees) and Y-axis oscillation
  useFrame(({ clock }) => {
    if (ref.current) {
      const t = clock.getElapsedTime();
      ref.current.rotation.z = Math.sin(t) * (Math.PI / 7);
      ref.current.rotation.y = Math.sin(t * 0.7 + Math.PI / 4) * (Math.PI / 9);
    }
  });

  return (
    // Display the imported GLB model with scale and offset
    <primitive
      ref={ref}
      object={scene}
      scale={50}
      position={[-5, -5, 0]}
      rotation={[Math.PI / 2, 0, 0]}
    />
  );
}

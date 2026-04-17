import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { MeshDistortMaterial, Sphere, Float } from '@react-three/drei';

const Scene = ({ theme }) => {
  const mesh = useRef();

  useFrame((state) => {
    const { clock } = state;
    if (mesh.current) {
      // Rotation based on time and mouse
      mesh.current.rotation.x = Math.sin(clock.getElapsedTime()) * 0.2;
      mesh.current.rotation.y += 0.01;
      
      // Interactive scale pulse
      const s = 1 + Math.sin(clock.getElapsedTime()) * 0.05;
      mesh.current.scale.set(s, s, s);
    }
  });

  return (
    <>
      <ambientLight intensity={theme === 'dark' ? 1 : 1.5} />
      <directionalLight position={[2, 4, 1]} intensity={theme === 'dark' ? 2 : 1} />
      <Float speed={5} rotationIntensity={2} floatIntensity={2}>
        <Sphere ref={mesh} args={[1, 100, 200]} scale={1.8}>
          <MeshDistortMaterial
            color={theme === 'dark' ? "#818cf8" : "#4f46e5"}
            attach="material"
            distort={0.4}
            speed={2}
            roughness={theme === 'dark' ? 0.2 : 0.4}
            metalness={theme === 'dark' ? 0.8 : 0.6}
          />
        </Sphere>
      </Float>
    </>
  );
};

const Hero3D = ({ theme }) => {
  return (
    <div style={{ width: '100%', height: '400px', cursor: 'grab' }}>
      <Canvas camera={{ position: [0, 0, 5], fov: 45 }}>
        <Scene theme={theme} />
      </Canvas>
    </div>
  );
};

export default Hero3D;

import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Points, PointMaterial } from '@react-three/drei';
import * as random from 'maath/random/dist/maath-random.esm';

const ParticleField = ({ theme, ...props }) => {
  const ref = useRef();
  // Using Float32Array for better performance
  const sphere = useMemo(() => random.inSphere(new Float32Array(6000), { radius: 1.5 }), []);

  useFrame((state, delta) => {
    // Subtle rotation based on time
    ref.current.rotation.x -= delta / 10;
    ref.current.rotation.y -= delta / 15;
    
    // Slight reaction to mouse
    const mouse = state.mouse;
    ref.current.rotation.x += mouse.y * 0.001;
    ref.current.rotation.y += mouse.x * 0.001;
  });

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points ref={ref} positions={sphere} stride={3} frustumCulled={false} {...props}>
        <PointMaterial
          transparent
          color={theme === 'dark' ? "#818cf8" : "#2563eb"}
          size={theme === 'dark' ? 0.002 : 0.006}
          sizeAttenuation={true}
          depthWrite={false}
          opacity={theme === 'dark' ? 0.6 : 1}
        />
      </Points>
    </group>
  );
};

const Background3D = ({ theme }) => {
  return (
    <div style={{ 
      position: 'fixed', 
      top: 0, 
      left: 0, 
      width: '100%', 
      height: '100%', 
      zIndex: -1, 
      pointerEvents: 'none',
      background: 'var(--bg-deep)',
      transition: 'background 0.3s ease'
    }}>
      <Canvas camera={{ position: [0, 0, 1] }}>
        <ParticleField theme={theme} />
      </Canvas>
    </div>
  );
};

export default Background3D;

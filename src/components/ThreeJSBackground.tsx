import { useRef, useMemo } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { Points, PointMaterial } from '@react-three/drei';
import * as THREE from 'three';
import * as random from 'maath/random';

function StarField() {
  const ref = useRef<THREE.Points>(null);
  const { viewport } = useThree();
  
  const sphere = useMemo(() => {
    const positions = new Float32Array(3000);
    random.inSphere(positions, { radius: 1.5 });
    return positions;
  }, []);

  useFrame((state, delta) => {
    if (ref.current) {
      ref.current.rotation.x -= delta / 10;
      ref.current.rotation.y -= delta / 15;
    }
  });

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points ref={ref} positions={sphere} stride={3} frustumCulled={false}>
        <PointMaterial
          transparent
          color="#ff6700"
          size={0.002}
          sizeAttenuation={true}
          depthWrite={false}
        />
      </Points>
    </group>
  );
}

function FloatingGeometry() {
  const meshRef = useRef<THREE.Mesh>(null);
  const materialRef = useRef<THREE.MeshStandardMaterial>(null);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.3) * 0.2;
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.1;
      meshRef.current.position.y = Math.sin(state.clock.elapsedTime * 0.4) * 0.1;
    }
    
    if (materialRef.current) {
      materialRef.current.emissiveIntensity = 0.1 + Math.sin(state.clock.elapsedTime * 2) * 0.05;
    }
  });

  return (
    <mesh ref={meshRef} position={[2, 0, -2]}>
      <torusGeometry args={[0.6, 0.2, 16, 32]} />
      <meshStandardMaterial
        ref={materialRef}
        color="#ff6700"
        emissive="#ff6700"
        emissiveIntensity={0.1}
        transparent
        opacity={0.3}
        wireframe
      />
    </mesh>
  );
}

function Scene() {
  return (
    <>
      <StarField />
      <FloatingGeometry />
      <ambientLight intensity={0.1} />
      <pointLight position={[10, 10, 10]} intensity={0.5} color="#ff6700" />
    </>
  );
}

const ThreeJSBackground = () => {
  return (
    <div className="absolute inset-0 w-full h-full opacity-20">
      <Canvas
        camera={{ position: [0, 0, 1], fov: 75 }}
        style={{ background: 'transparent' }}
      >
        <Scene />
      </Canvas>
    </div>
  );
};

export default ThreeJSBackground;
import { Float, Sparkles, Stars } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useRef } from "react";

function OrbitalRing({ position, color, speed, radius }) {
  const ringRef = useRef();
  const nodeRef = useRef();

  useFrame((state, delta) => {
    ringRef.current.rotation.y += delta * speed;
    ringRef.current.rotation.x = Math.sin(state.clock.elapsedTime * speed) * 0.3;
    nodeRef.current.position.x = Math.cos(state.clock.elapsedTime * speed * 2) * radius;
    nodeRef.current.position.z = Math.sin(state.clock.elapsedTime * speed * 2) * radius;
  });

  return (
    <group ref={ringRef} position={position}>
      <mesh rotation={[Math.PI / 2, 0, 0]}>
        <torusGeometry args={[2.2, 0.05, 16, 80]} />
        <meshStandardMaterial color={color} emissive={color} emissiveIntensity={0.25} />
      </mesh>
      <mesh ref={nodeRef} position={[radius, 0, 0]}>
        <sphereGeometry args={[0.16, 24, 24]} />
        <meshStandardMaterial color={color} emissive={color} emissiveIntensity={1.1} />
      </mesh>
    </group>
  );
}

export function SceneDecor() {
  return (
    <group>
      <Stars radius={180} depth={80} count={1400} factor={4} fade speed={0.6} />
      <Sparkles
        count={90}
        scale={[85, 28, 85]}
        size={5}
        speed={0.35}
        noise={1.1}
        color='#9dd9ff'
      />

      <Float speed={1.4} rotationIntensity={1.2} floatIntensity={1.3} position={[7.5, 5, -14]}>
        <mesh>
          <icosahedronGeometry args={[0.9, 0]} />
          <meshStandardMaterial color='#60a5fa' roughness={0.15} metalness={0.6} />
        </mesh>
      </Float>

      <Float speed={1.1} rotationIntensity={1.1} floatIntensity={1.2} position={[-8, 3.5, -16]}>
        <mesh>
          <octahedronGeometry args={[0.8, 0]} />
          <meshStandardMaterial color='#22d3ee' roughness={0.2} metalness={0.5} />
        </mesh>
      </Float>

      <OrbitalRing position={[0, 3.4, -25]} color='#38bdf8' speed={0.38} radius={1.8} />
      <OrbitalRing position={[-2.2, 2.1, -31]} color='#818cf8' speed={0.28} radius={1.4} />
    </group>
  );
}

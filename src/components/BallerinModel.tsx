import React, { useRef, useEffect, useMemo } from "react";
import { useFrame } from "@react-three/fiber";
import { Canvas } from "@react-three/fiber";
import {
  OrbitControls,
  useGLTF,
  Environment,
  useAnimations,
} from "@react-three/drei";
import { motion } from "framer-motion";
import { MotionConfig } from "framer-motion";
import * as THREE from "three";

interface ParticleModelProps {
  scroll: number;
  onHover?: (hover: boolean) => void;
}

const ParticleModel = ({ scroll = 0, onHover }: ParticleModelProps) => {
  const modelRef = useRef<THREE.Group>(null);
  const [hovered, setHovered] = React.useState(false);
  const { scene } = useGLTF("/ballerina&Skirt.glb");
  const particles = useMemo(() => {
    const geometry = new THREE.BufferGeometry();
    const positions: number[] = [];
    const colors: number[] = [];

    // Sample points from the model's geometry
    scene.traverse((child) => {
      if (child instanceof THREE.Mesh) {
        const geometry = child.geometry;
        const positionAttribute = geometry.getAttribute("position");

        for (let i = 0; i < positionAttribute.count; i += 10) {
          positions.push(
            positionAttribute.getX(i),
            positionAttribute.getY(i),
            positionAttribute.getZ(i)
          );

          // Simple gradient from teal to white
          const heightGradient = (positionAttribute.getY(i) + 2) / 4; // normalize height
          colors.push(
            0.06 + heightGradient * 0.94, // lerp from teal to white
            0.76 + heightGradient * 0.24,
            0.74 + heightGradient * 0.26
          );
        }
      }
    });

    geometry.setAttribute(
      "position",
      new THREE.Float32BufferAttribute(positions, 3)
    );
    geometry.setAttribute("color", new THREE.Float32BufferAttribute(colors, 3));

    return geometry;
  }, [scene]);
  useFrame(({ clock }) => {
    if (modelRef.current) {
      const time = clock.getElapsedTime();

      // Enhanced hover effects with more dramatic movements
      const baseRotation = Math.sin(time * 0.2) * 0.15;
      const hoverRotation = hovered ? Math.sin(time * 2) * 0.8 : 0;
      const hoverFloat = hovered ? Math.sin(time * 3) * 0.3 : 0;

      // Add spread effect when hovering
      const spread = hovered ? Math.sin(time * 4) * 0.2 : 0;

      modelRef.current.rotation.y = baseRotation + hoverRotation;
      modelRef.current.rotation.x = hovered ? Math.sin(time * 1.5) * 0.2 : 0;
      modelRef.current.position.y = hoverFloat;
      modelRef.current.scale.x = 1 + spread;
      modelRef.current.scale.y = 1 + spread;

      const positions = particles.getAttribute("position");
      const originalPositions = particles
        .getAttribute("position")
        .array.slice();

      for (let i = 0; i < positions.count; i++) {
        const i3 = i * 3;
        const time = clock.getElapsedTime();

        // Simple upward dispersion on scroll
        const dispersionY = scroll * 2 * Math.sin(i * 0.1 + time * 0.5);

        positions.setXYZ(
          i,
          originalPositions[i3],
          originalPositions[i3 + 1] + dispersionY,
          originalPositions[i3 + 2]
        );
      }

      positions.needsUpdate = true;
    }
  });

  return (
    <points
      ref={modelRef}
      onPointerOver={() => {
        setHovered(true);
        onHover?.(true);
      }}
      onPointerOut={() => {
        setHovered(false);
        onHover?.(false);
      }}
    >
      <primitive object={particles} />
      <pointsMaterial
        size={hovered ? 0.035 : 0.015}
        vertexColors
        transparent
        opacity={hovered ? 0.9 : 1 - scroll * 0.5}
        sizeAttenuation
        blending={THREE.AdditiveBlending}
        depthWrite={false}
      />
    </points>
  );
};

const BallerinModel: React.FC = () => {
  const [scrollY, setScrollY] = React.useState(0);
  const [isHovered, setIsHovered] = React.useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const maxScroll =
        document.documentElement.scrollHeight - window.innerHeight;
      setScrollY(Math.min(window.scrollY / maxScroll, 1));
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <MotionConfig
      transition={{
        type: "spring",
        mass: 5,
        stiffness: 500,
        damping: 50,
        restDelta: 0.001,
      }}
    >
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
        className="w-full h-full"
      >
        <Canvas camera={{ position: [0, 0, 5.5], fov: 45 }} dpr={[1, 2]}>
          <ambientLight intensity={0.5} />
          <spotLight
            position={[10, 10, 10]}
            angle={0.15}
            penumbra={1}
            intensity={1}
            castShadow
          />
          <pointLight position={[-10, -10, -10]} intensity={0.5} />
          <ParticleModel scroll={scrollY} onHover={setIsHovered} />
          <Environment preset="city" />
          <OrbitControls
            enableZoom={false}
            enablePan={false}
            autoRotate
            autoRotateSpeed={isHovered ? 12 : 5.5}
            maxPolarAngle={Math.PI / 2}
            minPolarAngle={Math.PI / 3}
          />
        </Canvas>
      </motion.div>
    </MotionConfig>
  );
};

export default BallerinModel;

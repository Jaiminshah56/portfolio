import { Points, PointMaterial, Preload } from "@react-three/drei";
import { Canvas, useFrame } from "@react-three/fiber";
import * as random from "maath/random";
import { useRef, Suspense, useState, useEffect } from "react";
import { useInView } from "framer-motion";
import type { Points as PointsType } from "three";

// Stars
const Stars = (props: React.ComponentProps<typeof Points> & { isMobile: boolean }) => {
  const ref = useRef<PointsType | null>(null);
  // Reduce particles on mobile for performance
  const [sphere] = useState(() =>
    random.inSphere(new Float32Array(props.isMobile ? 1500 : 5000), { radius: 1.2 }),
  );

  // Rotate multiple stars
  useFrame((_state, delta) => {
    if (ref.current) {
      ref.current.rotation.x -= delta / 10;
      ref.current.rotation.y -= delta / 15;
    }
  });

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      {/* Points */}
      <Points
        ref={ref}
        positions={new Float32Array(sphere)}
        stride={3}
        frustumCulled
        {...props}
      >
        {/* Each point material */}
        <PointMaterial
          transparent
          color="#60a5fa"
          size={0.002}
          sizeAttenuation
          depthWrite={false}
        />
      </Points>
    </group>
  );
};

// Stars Canvas
const StarsCanvas = () => {
  const [isMobile, setIsMobile] = useState(false);

  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { margin: "400px" });

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  return (
    <div ref={ref} className="w-full h-auto absolute inset-0 z-[-1]">
      {/* Canvas */}
      {isInView && (
        <Canvas camera={{ position: [0, 0, 1] }} dpr={isMobile ? [1, 1] : [1, 1.5]} gl={{ powerPreference: "high-performance" }}>
        {/* Show stars if not fallback */}
        <Suspense fallback={null}>
          <Stars isMobile={isMobile} />
        </Suspense>

        {/* preload all */}
        <Preload all />
      </Canvas>
      )}
    </div>
  );
};

export default StarsCanvas;

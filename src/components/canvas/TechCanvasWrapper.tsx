import { Canvas } from "@react-three/fiber";
import { View, Preload, OrbitControls } from "@react-three/drei";
import { Suspense, useEffect, useState } from "react";
import CanvasLoader from "../loader";
import Ball from "./ball";

type TechCanvasWrapperProps = {
  technologies: readonly any[];
  isMobile: boolean;
};

const TechCanvasWrapper = ({ technologies, isMobile }: TechCanvasWrapperProps) => {
  const [eventSource, setEventSource] = useState<HTMLElement | null>(null);

  useEffect(() => {
    const el = document.getElementById("tech-container");
    if (el) setEventSource(el);
  }, []);

  if (!eventSource) return null;

  return (
    <Canvas
      style={{ position: 'fixed', top: 0, left: 0, width: '100vw', height: '100vh', pointerEvents: 'none', zIndex: 10 }}
      eventSource={eventSource}
      className="canvas-global"
      frameloop="demand"
      dpr={isMobile ? [1, 1] : [1, 2]}
      gl={{ preserveDrawingBuffer: true, powerPreference: "high-performance", antialias: !isMobile }}
    >
      <View.Port />
      <Suspense fallback={<CanvasLoader />}>
        {technologies.map((tech) => {
          const id = `view-${tech.name.replace(/\s+/g, '-')}`;
          const el = document.getElementById(id);
          if (!el) return null;
          
          return (
            <View key={tech.name} track={{ current: el }}>
               <OrbitControls enableZoom={false} enablePan={false} enableRotate={!isMobile} />
               <ambientLight intensity={0.25} />
               <directionalLight position={[0, 0, 0.05]} />
               <Ball imgUrl={tech.icon} />
            </View>
          );
        })}
      </Suspense>
      <Preload all />
    </Canvas>
  );
};

export default TechCanvasWrapper;

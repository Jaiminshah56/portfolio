import React, { useRef } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

interface TiltProps {
  children: React.ReactNode;
  options?: {
    max?: number;
    scale?: number;
    speed?: number;
  };
  className?: string;
}

export const Tilt = ({ children, options = {}, className = "" }: TiltProps) => {
  const { max = 45, scale = 1, speed = 450 } = options;
  const ref = useRef<HTMLDivElement>(null);

  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const scaleMV = useMotionValue(1);

  const springConfig = { damping: 30, stiffness: speed, mass: 1 };
  const springRotateX = useSpring(x, springConfig);
  const springRotateY = useSpring(y, springConfig);
  const springScale = useSpring(scaleMV, springConfig);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    const xPct = (mouseX / width - 0.5) * 2; // -1 to 1
    const yPct = (mouseY / height - 0.5) * 2; // -1 to 1

    x.set(yPct * -max);
    y.set(xPct * max);
    scaleMV.set(scale);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
    scaleMV.set(1);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX: springRotateX,
        rotateY: springRotateY,
        scale: springScale,
        transformStyle: "preserve-3d",
        willChange: "transform",
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

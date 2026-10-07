import { lazy, Suspense, useRef, useEffect, useState } from "react";
import { motion, useInView } from "framer-motion";

import { TECHNOLOGIES } from "../constants";
import { SectionWrapper } from "../hoc";
import { textVariant } from "../utils/motion";
import { styles } from "../styles";

// Lazy load the 3D wrapper so it doesn't block initial page load
const TechCanvasWrapper = lazy(() => import("./canvas/TechCanvasWrapper"));

// Technologies
export const Tech = () => {
  const [isMobile, setIsMobile] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  // Unmount 3D when section is far out of view
  const isInView = useInView(containerRef, { margin: "400px" });

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  return (
    <SectionWrapper>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>My tools</p>
        <h2 className={styles.sectionHeadText}>Technologies.</h2>
      </motion.div>
      
      {/* Container that acts as the event source for the 3D canvas */}
      <div 
        ref={containerRef} 
        id="tech-container" 
        className="flex flex-row flex-wrap justify-center gap-10 mt-10 relative"
      >
        {TECHNOLOGIES.map((technology) => (
          <div className="w-28 h-28 relative" key={technology.name}>
             {/* 2D Fallback shown instantly */}
             <div className="w-full h-full flex items-center justify-center bg-tertiary rounded-full shadow-md p-4 absolute inset-0 z-0">
               <img src={technology.icon} alt={technology.name} className="w-full h-full object-contain" />
             </div>
             
             {/* Virtual View tracking element */}
             <div id={`view-${technology.name.replace(/\s+/g, '-')}`} className="absolute inset-0 z-10 w-full h-full" />
          </div>
        ))}
        
        {/* Render SINGLE global Canvas only when in view */}
        {isInView && (
          <Suspense fallback={null}>
             <TechCanvasWrapper technologies={TECHNOLOGIES} isMobile={isMobile} />
          </Suspense>
        )}
      </div>
    </SectionWrapper>
  );
};

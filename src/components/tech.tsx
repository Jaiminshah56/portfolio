import { useState, useEffect, lazy, Suspense } from "react";
import { motion } from "framer-motion";

import { TECHNOLOGIES } from "../constants";
import { SectionWrapper } from "../hoc";
import { textVariant } from "../utils/motion";
import { styles } from "../styles";

// Lazy-load the desktop 3D Canvas
const BallCanvas = lazy(() => import("./canvas/ball"));

// Technologies
export const Tech = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    setIsMounted(true);
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  if (!isMounted) return null; // Wait for client-side hydration to determine isMobile

  return (
    <SectionWrapper>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>My tools</p>
        <h2 className={styles.sectionHeadText}>Technologies.</h2>
      </motion.div>
      
      <div className="flex flex-row flex-wrap justify-center gap-10 mt-10">
        {TECHNOLOGIES.map((technology) => (
          <div className="w-28 h-28" key={technology.name}>
             {isMobile ? (
               <div className="w-full h-full flex items-center justify-center bg-tertiary rounded-full shadow-md p-4">
                 <img src={technology.icon} alt={technology.name} className="w-full h-full object-contain" />
               </div>
             ) : (
               <Suspense fallback={
                 <div className="w-full h-full flex items-center justify-center bg-tertiary rounded-full shadow-md p-4 opacity-50">
                   <img src={technology.icon} alt={technology.name} className="w-full h-full object-contain" />
                 </div>
               }>
                 <BallCanvas icon={technology.icon} />
               </Suspense>
             )}
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
};

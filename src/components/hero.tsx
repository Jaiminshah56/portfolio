import { motion } from "framer-motion";

import { lazy, Suspense } from "react";
import { styles } from "../styles";
import { cn } from "../utils/lib";

const ComputersCanvas = lazy(() => import("./canvas/computers"));

// Hero
export const Hero = () => {
  return (
    <section className="relative w-full min-h-screen mx-auto overflow-hidden flex flex-col justify-center">
      <div
        className={cn(
          styles.paddingX,
          "w-full max-w-7xl mx-auto flex flex-col lg:flex-row items-start lg:items-center justify-between gap-5 pointer-events-none z-10 pt-[120px] pb-32"
        )}
      >
        {/* Left Side: Text */}
        <div className="flex flex-row items-start gap-5 w-full lg:w-[60%] pointer-events-auto">
          {/* Title Line */}
          <div className="flex flex-col justify-center items-center mt-5">
            <div className="w-5 h-5 rounded-full bg-[#3b82f6]" />
            <div className="w-1 sm:h-80 h-40 blue-gradient" />
          </div>

          {/* About Me */}
          <div className="w-full">
            <h1 className={cn(styles.heroHeadText, "text-white")}>
              Hi, I'm <span className="text-[#3b82f6] whitespace-nowrap">Jaimin Shah</span>
            </h1>
            <p className={cn(styles.heroSubText, "mt-4 text-white-100 leading-relaxed max-w-lg")}>
              I engineer high-performance websites and AI-powered applications that help businesses scale.
            </p>
            
            {/* CTAs */}
            <div className="mt-8 flex flex-wrap gap-4">
              <a 
                href="#contact" 
                className="px-8 py-3 rounded-full bg-[#3b82f6] text-white font-bold hover:bg-white hover:text-[#3b82f6] transition-all duration-300 shadow-[0_0_15px_rgba(59,130,246,0.4)] hover:shadow-[0_0_25px_rgba(59,130,246,0.8)]"
              >
                Let's Talk ↗
              </a>
              <a 
                href="#work" 
                className="px-8 py-3 rounded-full border border-white text-white font-bold hover:bg-white/10 transition-all duration-300"
              >
                View My Work ↗
              </a>
            </div>
          </div>
        </div>

        {/* Right Side: Computer Model */}
        <div className="w-full lg:w-[40%] h-[50vh] lg:h-[80vh] pointer-events-auto z-0 relative mt-10 lg:mt-0">
          <Suspense fallback={null}>
            <ComputersCanvas />
          </Suspense>
        </div>
      </div>

      {/* Scroll to about section */}
      <div className="absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center z-20">
        <a href="#about">
          <div className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2">
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className="w-3 h-3 rounded-full bg-secondary mb-1"
            />
          </div>
        </a>
      </div>
    </section>
  );
};

import { motion } from "framer-motion";

import { BallCanvas } from "./canvas";
import { TECHNOLOGIES } from "../constants";
import { SectionWrapper } from "../hoc";
import { textVariant } from "../utils/motion";
import { styles } from "../styles";

// Technologies
export const Tech = () => {
  return (
    <SectionWrapper>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>My tools</p>
        <h2 className={styles.sectionHeadText}>Technologies.</h2>
      </motion.div>
      
      <div className="flex flex-row flex-wrap justify-center gap-10 mt-10">
        {/* Iterate over each technology */}
        {TECHNOLOGIES.map((technology) => (
          <div className="w-28 h-28" key={technology.name}>
            <BallCanvas icon={technology.icon} />
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
};

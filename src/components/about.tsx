import { Tilt } from "./tilt";
import { motion } from "framer-motion";

import { SERVICES } from "../constants";
import { SectionWrapper } from "../hoc";
import { styles } from "../styles";
import { fadeIn, textVariant } from "../utils/motion";

type ServiceCardProps = {
  index: number;
  title: string;
  icon: string;
};

// Service Card
const ServiceCard = ({ index, title, icon }: ServiceCardProps) => {
  return (
    <Tilt
      options={{
        max: 45,
        scale: 1,
        speed: 450,
      }}
      className="w-full h-full"
    >
      <motion.div
        variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
        className="w-full h-full green-pink-gradient p-[1px] rounded-[20px] shadow-card hover:shadow-[0_0_20px_rgba(59,130,246,0.3)] transition-all duration-300"
      >
        <div className="bg-tertiary/80 backdrop-blur-md rounded-[20px] py-5 px-12 min-h-[280px] h-full flex justify-evenly items-center flex-col">
          <img src={icon} alt={title} className="w-16 h-16 object-contain drop-shadow-[0_0_15px_rgba(255,255,255,0.3)]" />
          <h3 className="text-white text-[20px] font-bold text-center">
            {title}
          </h3>
        </div>
      </motion.div>
    </Tilt>
  );
};

// About
export const About = () => {
  return (
    <SectionWrapper idName="about">
      <>
        {/* Title */}
        <motion.div variants={textVariant()}>
          <p className={styles.sectionSubText}>Introduction</p>
          <h2 className={styles.sectionHeadText}>Overview.</h2>
        </motion.div>

        {/* Body */}
        <motion.p
          variants={fadeIn(undefined, undefined, 0.1, 1)}
          className="empty-4 text-secondary text-[17px] max-w-3xl leading-relaxed mt-4"
        >
          I'm Jaimin Shah, a creative developer focused on building modern websites, immersive 3D experiences and AI-powered digital products.
          <br /><br />
          I combine development, design and emerging AI technologies to create experiences that are fast, useful and visually memorable. Let's work together to bring your ideas to life!
        </motion.p>

        {/* Service Card */}
        <div id="services" className="mt-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 pt-10">
          {SERVICES.map((service, i) => (
            <ServiceCard key={service.title} index={i} {...service} />
          ))}
        </div>
      </>
    </SectionWrapper>
  );
};

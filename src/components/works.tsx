import { Tilt } from "./tilt";
import { motion } from "framer-motion";

import { github, preview } from "../assets";
import { PROJECTS } from "../constants";
import { SectionWrapper } from "../hoc";
import { styles } from "../styles";
import { cn } from "../utils/lib";
import { fadeIn, textVariant } from "../utils/motion";

type ProjectCardProps = (typeof PROJECTS)[number] & {
  index: number;
  image?: string;
  alt?: string;
};

// Project Card
const ProjectCard = ({
  index,
  name,
  type,
  description,
  tags,
  image,
  link,
  cta_text,
  in_progress,
  alt,
}: ProjectCardProps) => (
  <motion.div variants={fadeIn("up", "spring", index * 0.15, 0.75)} className="w-full h-full">
    <Tilt
      options={{
        max: 45,
        scale: 1,
        speed: 450,
      }}
      className="bg-tertiary/80 backdrop-blur-md p-5 rounded-2xl w-full h-full flex flex-col border border-secondary/10 hover:shadow-[0_0_20px_rgba(59,130,246,0.2)] transition-all duration-300"
    >
      <div className="relative w-full h-[230px]">
        {/* Work image */}
        <img
          src={image}
          alt={alt || name}
          loading="lazy"
          className="w-full h-full object-cover rounded-2xl"
        />
        
        {/* Badge */}
        <div className="absolute top-3 right-3 flex justify-end">
          <div className="bg-tertiary/90 backdrop-blur-sm px-3 py-1 rounded-full border border-secondary/20">
            <p className="text-white text-[10px] font-bold tracking-wider">{type}</p>
          </div>
        </div>
      </div>

      {/* Work Info */}
      <div className="mt-5">
        <h3 className="text-white font-bold text-[24px]">{name}</h3>
        <p className="mt-2 text-secondary text-[14px]">{description}</p>
      </div>

      {/* Work Tag */}
      <div className="mt-4 flex flex-wrap gap-2">
        {tags.map((tag, tagIdx) => (
          <p key={`Tag-${tagIdx}`} className={cn(tag.color, "text-[14px]")}>
            #{tag.name}
          </p>
        ))}
      </div>

      {/* Links */}
      <div className="mt-auto pt-5 flex gap-4 items-center">
        {in_progress || !link ? (
          <span className="text-secondary font-medium text-sm border border-secondary/20 bg-tertiary/50 px-4 py-2 rounded-lg cursor-not-allowed">
            {cta_text}
          </span>
        ) : (
          <a
            href={link}
            target="_blank"
            rel="noreferrer noopener"
            className="text-white font-medium text-sm bg-[#3b82f6]/10 hover:bg-[#3b82f6]/20 border border-[#3b82f6]/30 px-4 py-2 rounded-lg transition-all duration-300"
            aria-label={`${cta_text} for ${name}`}
          >
            {cta_text}
          </a>
        )}
      </div>
    </Tilt>
  </motion.div>
);

// Works
export const Works = () => {
  return (
    <SectionWrapper>
      <>
        {/* Title */}
        <motion.div variants={textVariant()}>
          <p className={styles.sectionSubText}>My Work</p>
          <h2 className={styles.sectionHeadText}>Projects.</h2>
        </motion.div>

        {/* About */}
        <div className="w-full flex">
          <motion.p
            variants={fadeIn(undefined, undefined, 0.1, 1)}
            className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]"
          >
            The following projects showcase my ability to solve complex problems and build scalable solutions. 
            Each project highlights real-world applications of modern web technologies, AI integrations, and high-performance engineering.
          </motion.p>
        </div>

        {/* Project Card */}
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7">
          {PROJECTS.map((project, i) => (
            <ProjectCard key={`project-${i}`} index={i} {...project} />
          ))}
        </div>
      </>
    </SectionWrapper>
  );
};

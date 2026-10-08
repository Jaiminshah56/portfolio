import { SEO } from "../components";

const AboutPage = () => {
  return (
    <div className="pt-32 pb-16 px-6 max-w-7xl mx-auto">
      <SEO 
        title="About Jaimin Shah - Web Developer & AI Specialist"
        description="Learn about Jaimin Shah, a passionate web developer from Ahmedabad specializing in React, Next.js, 3D web experiences, and AI integrations."
        canonical="https://jaiminshahdev.vercel.app/about"
      />
      <h1 className="text-4xl md:text-5xl font-black text-white mb-6">About Jaimin Shah</h1>
      <div className="text-secondary text-[17px] leading-[30px] max-w-3xl">
        <p className="mb-4">
          I am Jaimin Shah, a dedicated Web Developer based in Ahmedabad. With a strong foundation in modern web technologies, I focus on building scalable, performant, and visually stunning digital experiences.
        </p>
        <p className="mb-4">
          My expertise spans across React, Next.js, and Three.js, allowing me to craft interactive 3D portfolios and applications that stand out. Beyond traditional frontend development, I have extensive experience as an AI Developer and Shopify Developer, integrating smart AI logic into e-commerce workflows.
        </p>
        <p className="mb-4">
          In addition to coding, I prioritize Technical SEO and GEO (Generative Engine Optimization) to ensure that the websites I build are highly discoverable by both traditional search engines and AI-driven platforms.
        </p>
      </div>
    </div>
  );
};

export default AboutPage;

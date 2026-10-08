import { SEO } from "../components";
import { PROJECTS } from "../constants";
import { Link } from "react-router-dom";

const ProjectsPage = () => {
  // Mapping project names to valid slugs
  const getSlug = (name: string) => name.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)+/g, '');

  return (
    <div className="pt-32 pb-16 px-6 max-w-7xl mx-auto">
      <SEO 
        title="Web Development Projects & Case Studies | Jaimin Shah"
        description="Explore case studies of real web development projects built by Jaimin Shah, including Le Rasa, CoolCare, and Hotel Shiddharth."
        canonical="https://jaiminshahdev.vercel.app/projects"
      />
      <h1 className="text-4xl md:text-5xl font-black text-white mb-6">Case Studies & Projects</h1>
      <p className="text-secondary text-[17px] leading-[30px] max-w-3xl mb-12">
        A collection of professional client projects, AI integrations, and Shopify solutions. Each case study details the purpose, technologies used, and the problem solved.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {PROJECTS.map((project, index) => {
          const slug = getSlug(project.name);
          return (
            <Link key={index} to={`/projects/${slug}`} className="bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full hover:scale-[1.02] transition-transform block">
              <div className="relative w-full h-[230px]">
                <img
                  src={project.image}
                  alt={`${project.name} preview`}
                  className="w-full h-full object-cover rounded-2xl"
                />
              </div>

              <div className="mt-5">
                <h3 className="text-white font-bold text-[24px]">{project.name}</h3>
                <p className="mt-2 text-secondary text-[14px] line-clamp-3">
                  {project.description}
                </p>
              </div>

              <div className="mt-4 flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <p key={`${project.name}-${tag.name}`} className={`text-[14px] ${tag.color}`}>
                    #{tag.name}
                  </p>
                ))}
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default ProjectsPage;

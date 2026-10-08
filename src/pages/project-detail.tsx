import { useParams, Link, Navigate } from "react-router-dom";
import { SEO } from "../components";
import { PROJECTS } from "../constants";

const ProjectDetailPage = () => {
  const { id } = useParams<{ id: string }>();

  const getSlug = (name: string) => name.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)+/g, '');
  
  const project = PROJECTS.find((p) => getSlug(p.name) === id);

  if (!project) {
    return <Navigate to="/projects" replace />;
  }

  const generateSchema = () => {
    return {
      "@context": "https://schema.org",
      "@type": "Article",
      "headline": `How I Built ${project.name}`,
      "description": project.description,
      "image": `https://jaiminshahdev.vercel.app${project.image}`,
      "author": {
        "@type": "Person",
        "name": "Jaimin Shah"
      }
    };
  };

  return (
    <div className="pt-32 pb-16 px-6 max-w-4xl mx-auto">
      <SEO 
        title={`${project.name} - Case Study | Jaimin Shah`}
        description={project.description}
        canonical={`https://jaiminshahdev.vercel.app/projects/${id}`}
        schema={generateSchema()}
      />
      
      <Link to="/projects" className="text-secondary hover:text-white mb-6 inline-block">
        &larr; Back to Projects
      </Link>
      
      <h1 className="text-4xl md:text-5xl font-black text-white mb-4">{project.name} Case Study</h1>
      
      <div className="flex flex-wrap gap-2 mb-8">
        {project.tags.map((tag) => (
          <span key={tag.name} className={`px-3 py-1 rounded-full text-sm font-medium ${tag.color} bg-black/20`}>
            #{tag.name}
          </span>
        ))}
      </div>

      <div className="w-full h-[300px] sm:h-[400px] mb-10 rounded-2xl overflow-hidden">
        <img src={project.image} alt={project.name} className="w-full h-full object-cover" />
      </div>

      <div className="text-secondary text-[17px] leading-[30px] space-y-8">
        <section>
          <h2 className="text-2xl font-bold text-white mb-3">Project Overview</h2>
          <p>{project.description}</p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-white mb-3">Purpose & Problem</h2>
          <p>
            The main goal of {project.name} was to build a highly optimized and visually appealing digital presence. 
            Often, the problem with existing platforms in this space is the lack of seamless user experience, slow loading times, 
            and poor mobile responsiveness.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-white mb-3">Solution & What Was Built</h2>
          <p>
            To address these issues, I implemented a robust frontend architecture using modern frameworks. The solution focused on 
            creating an accessible, responsive, and performant web experience tailored to the project's specific user base.
          </p>
        </section>
        
        <section>
          <h2 className="text-2xl font-bold text-white mb-3">Key Features & Technologies</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>Modern, responsive UI ensuring a flawless mobile and desktop experience.</li>
            <li>Optimized asset loading and core web vitals improvements.</li>
            <li>Use of {project.tags.map(t => t.name).join(", ")} for scalable development.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-white mb-3">Current Status</h2>
          <p>
            {project.in_progress ? "This project is currently in active development. I am consistently iterating and adding new features." : "This project is live and successfully serving its users."}
          </p>
          {project.link && (
            <div className="mt-6">
              <a href={project.link} target="_blank" rel="noopener noreferrer" className="inline-block bg-tertiary px-6 py-3 rounded-xl text-white font-bold hover:bg-white hover:text-black transition-colors">
                {project.cta_text || "View Live Site"}
              </a>
            </div>
          )}
        </section>
      </div>
    </div>
  );
};

export default ProjectDetailPage;

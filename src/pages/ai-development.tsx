import { SEO } from "../components";

const AiDevelopmentPage = () => {
  return (
    <div className="pt-32 pb-16 px-6 max-w-7xl mx-auto">
      <SEO 
        title="AI Developer | AI Integration & Automation - Jaimin Shah"
        description="Jaimin Shah specializes in AI development, building generative AI tools, automated workflows, and smart integrations for web applications."
        canonical="https://jaiminshahdev.vercel.app/ai-development"
      />
      <h1 className="text-4xl md:text-5xl font-black text-white mb-6">AI Development Services</h1>
      <div className="text-secondary text-[17px] leading-[30px] max-w-4xl space-y-8">
        
        <p>
          As an AI Developer, I help modern businesses leverage the power of Artificial Intelligence to automate processes, generate dynamic content, and improve user experiences. The web is moving towards generative models, and integrating them effectively is key to staying ahead.
        </p>

        <section>
          <h2 className="text-2xl font-bold text-white mb-2">Generative AI Integrations</h2>
          <p>
            I build intelligent applications that connect to leading LLMs (Large Language Models) like OpenAI, Gemini, and Anthropic. From smart chatbots to automated content generators, I design robust API integrations.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-white mb-2">AI for E-commerce</h2>
          <p>
            With projects like ZAYVANO, I have hands-on experience developing AI-powered tools for Shopify. This involves using AI to generate customized storefront layouts, write optimized product descriptions, and provide intelligent product recommendations.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-white mb-2">Workflow Automation</h2>
          <p>
            By integrating AI into your backend systems, we can automate tedious tasks such as data entry, customer support triage, and data analysis.
          </p>
        </section>
      </div>
    </div>
  );
};

export default AiDevelopmentPage;

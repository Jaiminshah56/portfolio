import { SEO } from "../components";

const ServicesPage = () => {
  return (
    <div className="pt-32 pb-16 px-6 max-w-7xl mx-auto">
      <SEO 
        title="Web Development & SEO Services | Jaimin Shah"
        description="Professional web development services including custom React/Next.js apps, Shopify storefronts, AI integrations, and Technical SEO consulting."
        canonical="https://jaiminshahdev.vercel.app/services"
      />
      <h1 className="text-4xl md:text-5xl font-black text-white mb-6">Web & Digital Services</h1>
      <div className="text-secondary text-[17px] leading-[30px] max-w-4xl space-y-8">
        
        <section>
          <h2 className="text-2xl font-bold text-white mb-2">Custom Web Development</h2>
          <p>
            I build highly interactive, responsive, and accessible web applications using the modern JavaScript ecosystem. From 3D web experiences using Three.js to robust full-stack solutions with Next.js and Node.js.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-white mb-2">AI Integration & Development</h2>
          <p>
            As an AI Developer, I help businesses integrate generative AI models and automation into their existing workflows. This includes custom chatbots, intelligent page builders, and automated data processing tools.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-white mb-2">Shopify Development</h2>
          <p>
            I create tailored Shopify solutions, from custom themes to headless e-commerce setups. Whether it's optimizing the checkout flow or building an AI-powered storefront, I ensure a premium shopping experience.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-white mb-2">Technical SEO & GEO</h2>
          <p>
            A great website needs visibility. I provide technical SEO optimizations (Core Web Vitals, Schema markup, dynamic metadata) and Generative Engine Optimization (GEO) to help your site rank in AI-powered search engines.
          </p>
        </section>

      </div>
    </div>
  );
};

export default ServicesPage;

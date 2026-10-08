import { SEO } from "../components";

const SeoGeoPage = () => {
  return (
    <div className="pt-32 pb-16 px-6 max-w-7xl mx-auto">
      <SEO 
        title="Technical SEO & GEO Specialist | Jaimin Shah"
        description="Expert Technical SEO and GEO (Generative Engine Optimization) services. Optimize your website for traditional search engines and AI assistants."
        canonical="https://jaiminshahdev.vercel.app/seo-geo"
      />
      <h1 className="text-4xl md:text-5xl font-black text-white mb-6">Technical SEO & GEO</h1>
      <div className="text-secondary text-[17px] leading-[30px] max-w-4xl space-y-8">
        
        <p>
          Building a beautiful website is only half the battle; ensuring people and machines can understand it is the other. I specialize in Technical SEO and the emerging field of Generative Engine Optimization (GEO).
        </p>

        <section>
          <h2 className="text-2xl font-bold text-white mb-2">Technical SEO</h2>
          <p>
            I focus on the structural integrity of a website to ensure search engines can easily crawl and index it. This includes optimizing Core Web Vitals, implementing precise JSON-LD structured data schema, ensuring mobile-first indexing, and managing semantic HTML architectures.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-white mb-2">GEO (Generative Engine Optimization)</h2>
          <p>
            As search evolves from traditional search engines to AI chatbots (like ChatGPT, Perplexity, and Google Gemini), the way content is consumed is changing. I help structure your website's data so that Large Language Models can easily extract and reference your content as authoritative facts.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-white mb-2">Performance Optimization</h2>
          <p>
            Site speed is a direct ranking factor. I meticulously audit image loading, layout shifts, unused JavaScript, and rendering strategies (CSR, SSR, SSG) to ensure your web applications load instantly across all devices.
          </p>
        </section>
      </div>
    </div>
  );
};

export default SeoGeoPage;

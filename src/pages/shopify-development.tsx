import { SEO } from "../components";

const ShopifyDevelopmentPage = () => {
  return (
    <div className="pt-32 pb-16 px-6 max-w-7xl mx-auto">
      <SEO 
        title="Shopify Developer | Custom E-commerce Solutions - Jaimin Shah"
        description="Hire a dedicated Shopify developer for custom theme development, headless e-commerce, AI integrations, and store optimization."
        canonical="https://jaiminshahdev.vercel.app/shopify-development"
      />
      <h1 className="text-4xl md:text-5xl font-black text-white mb-6">Shopify Development</h1>
      <div className="text-secondary text-[17px] leading-[30px] max-w-4xl space-y-8">
        
        <p>
          As a specialized Shopify Developer, I empower merchants to create highly performant, conversion-optimized storefronts. I go beyond basic theme setups to provide truly custom e-commerce experiences.
        </p>

        <section>
          <h2 className="text-2xl font-bold text-white mb-2">Custom Theme Development</h2>
          <p>
            I build bespoke Shopify themes from scratch using Liquid, HTML, CSS, and modern JavaScript. My themes are designed to match your brand identity precisely while ensuring fast load times and a seamless mobile experience.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-white mb-2">Headless Shopify Apps (Hydrogen/Next.js)</h2>
          <p>
            For brands that need ultimate flexibility and performance, I develop headless Shopify stores using Next.js and the Shopify Storefront API. This approach separates the frontend from the backend, allowing for ultra-fast, highly customized web experiences.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-white mb-2">Shopify App & AI Development</h2>
          <p>
            Currently building AI-powered Shopify solutions like ZAYVANO and KAIRO AI, I understand how to extend Shopify's core capabilities. Whether you need custom app integrations or intelligent page builders, I can architect the solution.
          </p>
        </section>
      </div>
    </div>
  );
};

export default ShopifyDevelopmentPage;

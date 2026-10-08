import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";
import {
  About,
  Contact,
  Hero,
  Navbar,
  Tech,
  Works,
  SEO
} from "./components";
import { lazy, Suspense } from "react";
import Footer from "./components/footer";

const StarsCanvas = lazy(() => import("./components/canvas/stars"));

// Pages
import AboutPage from "./pages/about";
import ServicesPage from "./pages/services";
import ProjectsPage from "./pages/projects";
import AiDevelopmentPage from "./pages/ai-development";
import ShopifyDevelopmentPage from "./pages/shopify-development";
import SeoGeoPage from "./pages/seo-geo";
import ProjectDetailPage from "./pages/project-detail";

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

const Home = () => {
  return (
    <>
      <SEO 
        title="Jaimin Shah — Web Developer | AI, Shopify & SEO"
        description="Jaimin Shah is a Web Developer building modern websites, AI-powered applications, Shopify solutions, and SEO/GEO optimized responsive digital experiences."
        canonical="https://jaiminshahdev.vercel.app/"
        schema={{
          "@context": "https://schema.org",
          "@type": "WebPage",
          "@id": "https://jaiminshahdev.vercel.app/#webpage",
          "name": "Jaimin Shah — Web Developer | AI, Shopify & SEO",
          "url": "https://jaiminshahdev.vercel.app/",
          "description": "Jaimin Shah is a Web Developer building modern websites, AI-powered applications, Shopify solutions, and SEO/GEO optimized responsive digital experiences.",
        }}
      />
      <div className="relative bg-hero-pattern bg-cover bg-no-repeat bg-center">
        <Hero />
        <div className="absolute bottom-0 left-0 w-full h-64 pointer-events-none" style={{ background: "linear-gradient(to bottom, transparent 0%, #050c1a 100%)" }} />
      </div>
      <About />
      <Tech />
      <Works />
      <div className="relative z-0">
        <Contact />
        <Suspense fallback={null}>
          <StarsCanvas />
        </Suspense>
      </div>
    </>
  );
};

// App
const App = () => {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <div className="relative z-0 bg-primary min-h-screen flex flex-col">
        <Navbar />
        <div className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/projects" element={<ProjectsPage />} />
            <Route path="/ai-development" element={<AiDevelopmentPage />} />
            <Route path="/shopify-development" element={<ShopifyDevelopmentPage />} />
            <Route path="/seo-geo" element={<SeoGeoPage />} />
            <Route path="/projects/:id" element={<ProjectDetailPage />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default App;

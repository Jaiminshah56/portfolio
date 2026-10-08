import { Link } from "react-router-dom";

import { SOCIALS } from "../constants";
import { styles } from "../styles";
import { cn } from "../utils/lib";

// Footer
const Footer = () => {
  return (
    <footer
      className={cn(
        styles.paddingX,
        "w-full flex flex-col items-center pt-10 pb-6 bg-primary border-t border-t-secondary/10"
      )}
    >
      <div className="w-full flex flex-col md:flex-row justify-between items-center max-w-7xl mx-auto gap-8">
        
        {/* Brand */}
        <div className="flex flex-col items-center md:items-start">
          <h2 className="text-white text-2xl font-bold mb-2">JAIMIN SHAH</h2>
          <p className="text-secondary text-sm text-center md:text-left">
            Web Developer &bull; AI &bull; Shopify &bull; SEO/GEO
          </p>
        </div>

        {/* SEO Internal Links */}
        <div className="flex flex-col gap-2">
          <ul className="list-none flex flex-wrap justify-center md:justify-start gap-4 md:gap-6">
            <li><Link to="/about" className="text-secondary hover:text-white text-sm font-medium transition">About Jaimin Shah</Link></li>
            <li><Link to="/services" className="text-secondary hover:text-white text-sm font-medium transition">Services</Link></li>
            <li><Link to="/projects" className="text-secondary hover:text-white text-sm font-medium transition">Projects</Link></li>
            <li><a href="/#contact" className="text-secondary hover:text-white text-sm font-medium transition">Contact</a></li>
          </ul>
          <ul className="list-none flex flex-wrap justify-center md:justify-start gap-4 md:gap-6 mt-2">
            <li><Link to="/ai-development" className="text-secondary hover:text-white text-sm font-medium transition">AI Development</Link></li>
            <li><Link to="/shopify-development" className="text-secondary hover:text-white text-sm font-medium transition">Shopify Development</Link></li>
            <li><Link to="/seo-geo" className="text-secondary hover:text-white text-sm font-medium transition">SEO & GEO Optimization</Link></li>
          </ul>
        </div>

        {/* Social Links */}
        <ul className="list-none flex flex-row gap-6">
          {SOCIALS.filter(s => ["GitHub", "Linkedin", "Twitter"].includes(s.name)).map((social) => (
            <li
              key={social.name}
              className="text-secondary font-medium cursor-pointer opacity-80 hover:opacity-100 hover:scale-110 transition-all"
            >
              <Link to={social.link} target="_blank" rel="noreferrer noopener">
                <img src={social.icon} alt={social.name} className="h-6 w-6" />
              </Link>
            </li>
          ))}
        </ul>
      </div>

      <div className="w-full max-w-7xl mx-auto mt-8 border-t border-t-secondary/10 pt-6 flex justify-center">
        <p className="text-secondary text-sm font-medium flex">
          &copy; 2026 Jaimin Shah. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;

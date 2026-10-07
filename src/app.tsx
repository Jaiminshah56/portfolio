import { BrowserRouter } from "react-router-dom";
import {
  About,
  Contact,
  Hero,
  Navbar,
  Tech,
  Works,
  StarsCanvas,
} from "./components";
import Footer from "./components/footer";

// App
const App = () => {
  return (
    <BrowserRouter>
      <div className="relative z-0 bg-primary">
        <div className="relative bg-hero-pattern bg-cover bg-no-repeat bg-center">
          <Navbar />
          <Hero />
          {/* Smooth fade to primary background — tall gradient so no seam */}
          <div className="absolute bottom-0 left-0 w-full h-64 pointer-events-none" style={{ background: "linear-gradient(to bottom, transparent 0%, #050c1a 100%)" }} />
        </div>
        <About />
        <Tech />
        <Works />

        {/* Contact */}
        <div className="relative z-0">
          <Contact />
          <StarsCanvas />
        </div>
        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default App;

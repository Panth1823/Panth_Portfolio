import Navbar from "./components/Navbar";
import Home from "./components/Home";
import SocialsLinks from "./components/SocialsLinks";
import About from "./components/About";
import Portfolio from "./components/Portfolio";
import Experience from "./components/Experience";
import Contact from "./components/Contact";
import { SpeedInsights } from "@vercel/speed-insights/react";

function App() {
  return (
    <div>
      <Navbar />
      <Home />
      <About />
      <Portfolio />
      <SocialsLinks />
      <Experience />
      <Contact />
      <SpeedInsights />
    </div>
  );
}

export default App;

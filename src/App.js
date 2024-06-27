import Navbar from "./components/Navbar";
import Home from "./components/Home";
import SocialsLinks from "./components/SocialsLinks";
import About from "./components/About";
import Portfolio from "./components/Portfolio";
import Experience from "./components/Experience";
import Contact from "./components/Contact";
import { SpeedInsights } from "@vercel/speed-insights/react";
import { SnackbarProvider } from "notistack";
import Footer from './components/footer';
import Cursor from "./components/cursor";
import Skill from "./components/Skill";
function App() {
  return (
    <div>
      <SnackbarProvider
        maxSnack={2}
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
        autoHideDuration={2000}
        iconVariant={{ error: "⚠️" }}
      >
        <Navbar />
        <Cursor />
        <Home />
        <About />
        <Portfolio />
        <SocialsLinks />
        <Experience />
        <Skill />
        <Contact />
        <Footer />
        <SpeedInsights />
      </SnackbarProvider>
    </div>
  );
}

export default App;

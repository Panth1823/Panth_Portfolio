import Navbar from "./components/Navbar";
import Home from "./components/Home";
import SocialsLinks from "./components/SocialsLinks";
import About from "./components/About";
import Portfolio from "./components/Portfolio";
import Experience from "./components/Experience";
import Contact from "./components/Contact";
import { SnackbarProvider } from "notistack";

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
        <Home />
        <About />
        <Portfolio />
        <SocialsLinks />
        <Experience />
        <Contact />
      </SnackbarProvider>
    </div>
  );
}

export default App;

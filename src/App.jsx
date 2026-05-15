import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import Services from "./pages/Services";
import Portfolio from "./pages/Portfolio";
import Contact from "./pages/Contact";
import Mentionslegal from "./pages/Mentions-legal";

function App() {
  return (
      <BrowserRouter>
        <div className="app">

          <Navbar />

          <div className="content">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/services" element={<Services />} />
              <Route path="/portfolio" element={<Portfolio />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/mentions-legal" element={<Mentionslegal />} />
            </Routes>
          </div>

          <Footer />

      </div>
    </BrowserRouter>
  );
}

export default App;
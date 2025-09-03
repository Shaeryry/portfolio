import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import ProjectDetails from "./pages/ProjectDetails";

export default function App() {
  return (
    <div>
      <Navbar />
      <div className="pt-16"> {/* offset for fixed navbar */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/projects/:id" element={<ProjectDetails />} />
        </Routes>
      </div>
    </div>
  );
}

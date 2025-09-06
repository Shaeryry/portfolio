// src/components/Navbar.jsx
import { useState, useEffect } from "react";
import { Link as ScrollLink } from "react-scroll";

export default function Navbar() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setVisible(window.scrollY > 80); // show only after scrolling 80px
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        visible
          ? "opacity-100 translate-y-0 bg-[#0d0d0d]/90 backdrop-blur-sm border-b border-white/10"
          : "opacity-0 -translate-y-full pointer-events-none"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between">
        {/* Logo / Name */}
        <ScrollLink
          to="hero"
          smooth
          duration={600}
          offset={-72}
          className="text-xl font-bold text-[#f8bbd0] cursor-pointer hover:opacity-80"
        >
          Rity Kipula
        </ScrollLink>

        {/* Links */}
        <div className="flex gap-6 text-white/80 font-medium">
          {["skills", "projects", "contact"].map((item) => (
            <ScrollLink
              key={item}
              to={item}
              smooth
              duration={600}
              offset={-72}
              className="cursor-pointer hover:text-[#f8bbd0] transition"
              activeClass="text-[#f8bbd0]"
            >
              {item.charAt(0).toUpperCase() + item.slice(1)}
            </ScrollLink>
          ))}
        </div>
      </div>
    </nav>
  );
}

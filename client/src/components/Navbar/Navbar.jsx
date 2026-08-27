import React, { useState, useEffect } from "react";

const NAV_LINKS = [
  { name: "About", href: "#about" },
  { name: "Projects", href: "#projects" },
  { name: "Skills", href: "#skills" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("About");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: "-20% 0px -70% 0px",
      threshold: 0,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const sectionId = entry.target.getAttribute("id");
          const matchedLink = NAV_LINKS.find(
            (link) => link.href === `#${sectionId}`
          );
          if (matchedLink) setActiveSection(matchedLink.name);
        }
      });
    }, observerOptions);

    NAV_LINKS.forEach((link) => {
      const el = document.querySelector(link.href);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? "hidden" : "unset";
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMobileMenuOpen]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-slate-950/95 backdrop-blur-md shadow-lg shadow-black/20 border-b border-slate-800/80 py-3"
            : "bg-slate-950/90 backdrop-blur-sm py-4 md:bg-transparent"
        }`}
      >
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between w-full">
            {/* Brand Logo */}
            <a
              href="#"
              className="text-xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent hover:opacity-85 transition-opacity shrink-0 z-50"
            >
              Portfolio<span className="text-blue-500">.</span>
            </a>

            {/* Desktop Navigation Links */}
            <nav aria-label="Main Navigation" className="hidden md:block">
              <ul className="flex items-center space-x-1">
                {NAV_LINKS.map((link) => {
                  const isActive = activeSection === link.name;
                  return (
                    <li key={link.name}>
                      <a
                        href={link.href}
                        onClick={() => setActiveSection(link.name)}
                        className={`relative px-4 py-2 rounded-full text-sm font-medium transition-colors duration-200 block ${
                          isActive
                            ? "text-blue-400 font-semibold"
                            : "text-slate-400 hover:text-slate-100 hover:bg-slate-800/60"
                        }`}
                      >
                        {link.name}
                        {isActive && (
                          <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-4 h-0.5 bg-blue-500 rounded-full" />
                        )}
                      </a>
                    </li>
                  );
                })}
              </ul>
            </nav>

            {/* Desktop Action Button - CV */}
            <div className="hidden md:flex items-center">
              <a
                href="/Abebe-Tigabu-CV.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 text-sm font-medium text-white bg-gradient-to-r from-blue-600 to-purple-600 rounded-full shadow-md shadow-blue-900/20 hover:shadow-lg hover:shadow-blue-900/30 hover:opacity-95 transition-all duration-200 flex items-center gap-2"
              >
                <span>Download CV</span>
              </a>
            </div>

            {/* Mobile Menu Toggle Button */}
            <button
              type="button"
              onClick={() => setIsMobileMenuOpen((prev) => !prev)}
              aria-expanded={isMobileMenuOpen}
              aria-label="Toggle Navigation Menu"
              className="md:hidden relative z-50 p-2 text-slate-300 hover:bg-slate-800/60 rounded-lg focus:outline-none shrink-0 ml-auto"
            >
              <div className="w-6 h-5 relative flex flex-col justify-between">
                <span
                  className={`w-full h-0.5 bg-current rounded-full transition-transform duration-300 origin-left ${
                    isMobileMenuOpen ? "rotate-45 translate-x-1" : ""
                  }`}
                />
                <span
                  className={`w-full h-0.5 bg-current rounded-full transition-opacity duration-300 ${
                    isMobileMenuOpen ? "opacity-0" : "opacity-100"
                  }`}
                />
                <span
                  className={`w-full h-0.5 bg-current rounded-full transition-transform duration-300 origin-left ${
                    isMobileMenuOpen ? "-rotate-45 translate-x-1" : ""
                  }`}
                />
              </div>
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        <div
          className={`md:hidden fixed inset-0 h-screen w-screen bg-slate-950/98 backdrop-blur-2xl z-40 transition-all duration-300 ease-in-out overflow-y-auto ${
            isMobileMenuOpen
              ? "opacity-100 pointer-events-auto translate-y-0"
              : "opacity-0 pointer-events-none -translate-y-4"
          }`}
        >
          <nav className="flex flex-col px-6 pt-24 pb-12 space-y-4 min-h-full justify-between">
            <div className="space-y-3">
              {NAV_LINKS.map((link) => {
                const isActive = activeSection === link.name;
                return (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={() => {
                      setActiveSection(link.name);
                      setIsMobileMenuOpen(false);
                    }}
                    className={`block px-5 py-3.5 rounded-xl text-lg font-medium transition-all ${
                      isActive
                        ? "bg-slate-800/90 text-blue-400 font-semibold shadow-inner"
                        : "text-slate-200 hover:bg-slate-900/80 active:bg-slate-800"
                    }`}
                  >
                    {link.name}
                  </a>
                );
              })}
            </div>

            <div className="pt-6 border-t border-slate-800/80">
              <a
                href="/Abebe-Tigabu-CV.pdf"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setIsMobileMenuOpen(false)}
                className="w-full inline-flex justify-center items-center px-5 py-4 text-base font-semibold text-white bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl shadow-lg shadow-blue-900/30 active:scale-[0.98] transition-transform"
              >
                Download CV
              </a>
            </div>
          </nav>
        </div>
      </header>

      {/* Hero section padding spacer */}
      <div className="h-20" />
    </>
  );
}
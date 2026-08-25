// function Navbar() {
//   return (
//     <nav className="flex justify-between items-center px-10 py-5 bg-white shadow-md">

//       <h1 className="text-2xl font-bold">
//         Abebe Tigabu
//       </h1>

//       <ul className="flex gap-8 font-medium">
//         <li>
//           <a href="#about">About</a>
//         </li>

//         <li>
//           <a href="#projects">Projects</a>
//         </li>

//         <li>
//           <a href="#skills">Skills</a>
//         </li>

//         <li>
//           <a href="#contact">Contact</a>
//         </li>
//       </ul>

//     </nav>
//   );
// }

// export default Navbar;

















// import { useState, useEffect } from "react";

// function Navbar() {
//   const [isScrolled, setIsScrolled] = useState(false);
//   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

//   useEffect(() => {
//     const handleScroll = () => {
//       setIsScrolled(window.scrollY > 20);
//     };
//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   const navLinks = [
//     { name: "About", href: "#about" },
//     { name: "Projects", href: "#projects" },
//     { name: "Skills", href: "#skills" },
//     { name: "Contact", href: "#contact" },
//   ];

//   return (
//     <>
//       <nav
//         className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
//           isScrolled
//             ? "bg-gradient-to-r from-indigo-950 via-slate-900 to-purple-950 shadow-2xl shadow-black/50 border-b border-white/10"
//             : "bg-gradient-to-r from-indigo-950/90 via-slate-900/90 to-purple-950/90 backdrop-blur-sm border-b border-white/5"
//         }`}
//       >
//         <div className="max-w-7xl mx-auto px-6 md:px-10">
//           <div className="flex justify-between items-center h-16 md:h-20">
//             {/* Logo - Highly Visible */}
//             <a
//               href="#"
//               className="flex items-center gap-2 text-xl md:text-2xl font-bold transition-all duration-300 group"
//             >
//               <span className="text-white">Abebe</span>
//               <span className="text-blue-300 font-light">Tigabu</span>
//               <span className="w-1.5 h-1.5 rounded-full bg-blue-400 group-hover:scale-150 transition-transform duration-300" />
//             </a>

//             {/* Desktop Navigation - Bright & Clear */}
//             <ul className="hidden md:flex items-center gap-1">
//               {navLinks.map((link) => (
//                 <li key={link.name}>
//                   <a
//                     href={link.href}
//                     className="relative px-4 py-2 text-blue-100/80 font-medium text-sm tracking-wide transition-all duration-300 hover:text-white group"
//                   >
//                     {link.name}
//                     <span className="absolute inset-x-4 -bottom-0.5 h-0.5 bg-gradient-to-r from-blue-400 to-purple-400 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-center rounded-full shadow-lg shadow-blue-400/50" />
//                   </a>
//                 </li>
//               ))}
//             </ul>

//             {/* CTA Button - Vibrant & Visible */}
//             <div className="hidden md:block">
//               <a
//                 href="#contact"
//                 className="relative px-6 py-2.5 rounded-lg bg-gradient-to-r from-blue-500 to-purple-500 text-white font-semibold text-sm shadow-lg shadow-blue-500/30 hover:shadow-blue-500/50 hover:scale-105 transition-all duration-300"
//               >
//                 <span className="relative z-10">Let's Talk</span>
//                 <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-blue-600 to-purple-600 opacity-0 hover:opacity-100 transition-opacity duration-300" />
//               </a>
//             </div>

//             {/* Mobile Menu Button - Bright */}
//             <button
//               onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
//               className="md:hidden relative w-8 h-8 flex flex-col items-center justify-center gap-1.5"
//               aria-label="Toggle menu"
//             >
//               <span
//                 className={`block w-5 h-0.5 bg-white rounded-full transition-all duration-300 ${
//                   isMobileMenuOpen ? "rotate-45 translate-y-1.5" : ""
//                 }`}
//               />
//               <span
//                 className={`block w-5 h-0.5 bg-white rounded-full transition-all duration-300 ${
//                   isMobileMenuOpen ? "opacity-0" : ""
//                 }`}
//               />
//               <span
//                 className={`block w-5 h-0.5 bg-white rounded-full transition-all duration-300 ${
//                   isMobileMenuOpen ? "-rotate-45 -translate-y-1.5" : ""
//                 }`}
//               />
//             </button>
//           </div>
//         </div>

//         {/* Mobile Menu - Dark & Visible */}
//         <div
//           className={`md:hidden absolute top-16 left-0 right-0 bg-gradient-to-b from-indigo-950 via-slate-900 to-purple-950 border-b border-white/10 shadow-2xl shadow-black/50 transition-all duration-300 overflow-hidden ${
//             isMobileMenuOpen ? "max-h-[400px] opacity-100" : "max-h-0 opacity-0"
//           }`}
//         >
//           <div className="flex flex-col items-center gap-0.5 py-4 px-6">
//             {navLinks.map((link) => (
//               <a
//                 key={link.name}
//                 href={link.href}
//                 onClick={() => setIsMobileMenuOpen(false)}
//                 className="w-full text-center px-4 py-3 text-blue-100/80 font-medium text-base hover:text-white hover:bg-white/5 rounded-lg transition-all duration-200"
//               >
//                 {link.name}
//               </a>
//             ))}
//             <a
//               href="#contact"
//               onClick={() => setIsMobileMenuOpen(false)}
//               className="w-full mt-2 px-6 py-3 rounded-lg bg-gradient-to-r from-blue-500 to-purple-500 text-white font-semibold text-center shadow-lg shadow-blue-500/30 hover:shadow-blue-500/50 transition-all duration-300"
//             >
//               Let's Talk
//             </a>
//           </div>
//         </div>
//       </nav>

//       {/* Spacer */}
//       <div className="h-16 md:h-20" />
//     </>
//   );
// }

// export default Navbar;








// import { useState, useEffect } from "react";

// const NAV_LINKS = [
//   { name: "About", href: "#about" },
//   { name: "Projects", href: "#projects" },
//   { name: "Skills", href: "#skills" },
//   { name: "Contact", href: "#contact" },
// ];

// export default function Navbar() {
//   const [isScrolled, setIsScrolled] = useState(false);
//   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
//   const [activeSection, setActiveSection] = useState("About");

//   // Scroll detection for navbar background styling
//   useEffect(() => {
//     const handleScroll = () => {
//       setIsScrolled(window.scrollY > 20);
//     };

//     window.addEventListener("scroll", handleScroll, { passive: true });
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   // IntersectionObserver to sync active nav link with page scroll
//   useEffect(() => {
//     const observerOptions = {
//       root: null,
//       rootMargin: "-20% 0px -70% 0px",
//       threshold: 0,
//     };

//     const observer = new IntersectionObserver((entries) => {
//       entries.forEach((entry) => {
//         if (entry.isIntersecting) {
//           const sectionId = entry.target.getAttribute("id");
//           const matchedLink = NAV_LINKS.find(
//             (link) => link.href === `#${sectionId}`
//           );
//           if (matchedLink) setActiveSection(matchedLink.name);
//         }
//       });
//     }, observerOptions);

//     NAV_LINKS.forEach((link) => {
//       const el = document.querySelector(link.href);
//       if (el) observer.observe(el);
//     });

//     return () => observer.disconnect();
//   }, []);

//   // Prevent background scrolling when mobile menu is open
//   useEffect(() => {
//     document.body.style.overflow = isMobileMenuOpen ? "hidden" : "unset";
//   }, [isMobileMenuOpen]);

//   return (
//     <>
//       <header
//         className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
//           isScrolled
//             ? "bg-white/80 backdrop-blur-md shadow-sm border-b border-gray-200/50 py-3"
//             : "bg-transparent py-5"
//         }`}
//       >
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="flex items-center justify-between">
//             {/* Logo / Brand Name */}
//             <a
//               href="#"
//               className="text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent hover:opacity-85 transition-opacity"
//             >
//               Portfolio<span className="text-blue-600">.</span>
//             </a>

//             {/* Desktop Navigation Links */}
//             <nav aria-label="Main Navigation" className="hidden md:block">
//               <ul className="flex items-center space-x-1">
//                 {NAV_LINKS.map((link) => {
//                   const isActive = activeSection === link.name;
//                   return (
//                     <li key={link.name}>
//                       <a
//                         href={link.href}
//                         onClick={() => setActiveSection(link.name)}
//                         className={`relative px-4 py-2 rounded-full text-sm font-medium transition-colors duration-200 block ${
//                           isActive
//                             ? "text-blue-600 font-semibold"
//                             : "text-gray-600 hover:text-gray-900 hover:bg-gray-100/60"
//                         }`}
//                       >
//                         {link.name}
//                         {isActive && (
//                           <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-4 h-0.5 bg-blue-600 rounded-full" />
//                         )}
//                       </a>
//                     </li>
//                   );
//                 })}
//               </ul>
//             </nav>

//             {/* Desktop Action Button */}
//             <div className="hidden md:flex items-center">
//               <a
//                 href="#contact"
//                 className="px-4 py-2 text-sm font-medium text-white bg-gradient-to-r from-blue-600 to-purple-600 rounded-full shadow-md hover:shadow-lg hover:opacity-95 transition-all duration-200"
//               >
//                 Let's Talk
//               </a>
//             </div>

//             {/* Mobile Menu Toggle Button */}
//             <button
//               type="button"
//               onClick={() => setIsMobileMenuOpen((prev) => !prev)}
//               aria-expanded={isMobileMenuOpen}
//               aria-label="Toggle Navigation Menu"
//               className="md:hidden relative z-50 p-2 rounded-lg text-gray-700 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500/20"
//             >
//               <div className="w-6 h-5 relative flex flex-col justify-between">
//                 <span
//                   className={`w-full h-0.5 bg-current rounded-full transition-transform duration-300 origin-left ${
//                     isMobileMenuOpen ? "rotate-45 translate-x-1" : ""
//                   }`}
//                 />
//                 <span
//                   className={`w-full h-0.5 bg-current rounded-full transition-opacity duration-300 ${
//                     isMobileMenuOpen ? "opacity-0" : "opacity-100"
//                   }`}
//                 />
//                 <span
//                   className={`w-full h-0.5 bg-current rounded-full transition-transform duration-300 origin-left ${
//                     isMobileMenuOpen ? "-rotate-45 translate-x-1" : ""
//                   }`}
//                 />
//               </div>
//             </button>
//           </div>
//         </div>

//         {/* Mobile Navigation Drawer */}
//         <div
//           className={`md:hidden fixed inset-0 top-[64px] bg-white/95 backdrop-blur-xl z-40 transition-all duration-300 ease-in-out ${
//             isMobileMenuOpen
//               ? "opacity-100 pointer-events-auto translate-y-0"
//               : "opacity-0 pointer-events-none -translate-y-4"
//           }`}
//         >
//           <nav className="flex flex-col px-6 pt-8 pb-6 space-y-3">
//             {NAV_LINKS.map((link) => {
//               const isActive = activeSection === link.name;
//               return (
//                 <a
//                   key={link.name}
//                   href={link.href}
//                   onClick={() => {
//                     setActiveSection(link.name);
//                     setIsMobileMenuOpen(false);
//                   }}
//                   className={`px-4 py-3 rounded-xl text-base font-medium transition-all ${
//                     isActive
//                       ? "bg-blue-50 text-blue-600 font-semibold"
//                       : "text-gray-700 hover:bg-gray-50"
//                   }`}
//                 >
//                   {link.name}
//                 </a>
//               );
//             })}
//             <div className="pt-4 border-t border-gray-100">
//               <a
//                 href="#contact"
//                 onClick={() => setIsMobileMenuOpen(false)}
//                 className="w-full inline-flex justify-center items-center px-4 py-3 text-base font-medium text-white bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl shadow-md"
//               >
//                 Let's Talk
//               </a>
//             </div>
//           </nav>
//         </div>
//       </header>

//       {/* Hero section padding spacer */}
//       <div className="h-20" />
//     </>
//   );
// }












import { useState, useEffect } from "react";

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

  // Scroll detection for navbar blur background
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Sync active link based on scroll section
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

  // Lock body scroll when mobile drawer is active
  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? "hidden" : "unset";
  }, [isMobileMenuOpen]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-slate-950/80 backdrop-blur-md shadow-lg shadow-black/20 border-b border-slate-800/80 py-3"
            : "bg-transparent py-5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Brand Logo */}
            <a
              href="#"
              className="text-xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent hover:opacity-85 transition-opacity"
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

            {/* Desktop Action Button */}
            <div className="hidden md:flex items-center">
              <a
                href="#contact"
                className="px-4 py-2 text-sm font-medium text-white bg-gradient-to-r from-blue-600 to-purple-600 rounded-full shadow-md shadow-blue-900/20 hover:shadow-lg hover:shadow-blue-900/30 hover:opacity-95 transition-all duration-200"
              >
                Let's Talk
              </a>
            </div>

            {/* Mobile Menu Toggle Button */}
            <button
              type="button"
              onClick={() => setIsMobileMenuOpen((prev) => !prev)}
              aria-expanded={isMobileMenuOpen}
              aria-label="Toggle Navigation Menu"
              className="md:hidden relative z-50 p-2 rounded-lg text-slate-300 hover:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-blue-500/20"
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
          className={`md:hidden fixed inset-0 top-[64px] bg-slate-950/95 backdrop-blur-xl z-40 transition-all duration-300 ease-in-out border-b border-slate-800 ${
            isMobileMenuOpen
              ? "opacity-100 pointer-events-auto translate-y-0"
              : "opacity-0 pointer-events-none -translate-y-4"
          }`}
        >
          <nav className="flex flex-col px-6 pt-8 pb-6 space-y-3">
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
                  className={`px-4 py-3 rounded-xl text-base font-medium transition-all ${
                    isActive
                      ? "bg-slate-800/80 text-blue-400 font-semibold"
                      : "text-slate-300 hover:bg-slate-900"
                  }`}
                >
                  {link.name}
                </a>
              );
            })}
            <div className="pt-4 border-t border-slate-800">
              <a
                href="#contact"
                onClick={() => setIsMobileMenuOpen(false)}
                className="w-full inline-flex justify-center items-center px-4 py-3 text-base font-medium text-white bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl shadow-md"
              >
                Let's Talk
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
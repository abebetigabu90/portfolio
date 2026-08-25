// function About() {
//   return (
//     <section
//       id="about"
//       className="min-h-screen flex items-center justify-center"
//     >
//       <div className="max-w-3xl text-center">

//         <h2 className="text-4xl font-bold">
//           About Me
//         </h2>

//         <p className="mt-6 text-lg text-gray-600">
//           I am a Full Stack Developer specializing in the MERN stack.
//           I enjoy building modern web applications and continuously
//           improving my software development skills.
//         </p>

//       </div>
//     </section>
//   );
// }

// export default About;





// export default function About() {
//   const stats = [
//     { label: "Core Focus", value: "Full Stack" },
//     { label: "Primary Stack", value: "MERN" },
//     { label: "Architecture", value: "REST & Web APIs" },
//   ];

//   const techStack = ["MongoDB", "Express.js", "React.js", "Node.js", "Tailwind CSS", "JavaScript"];

//   return (
//     <section
//       id="about"
//       className="relative min-h-screen flex items-center justify-center py-20 overflow-hidden"
//     >
//       {/* Decorative ambient background blur */}
//       <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-gradient-to-tr from-blue-400/10 to-purple-400/10 rounded-full blur-3xl -z-10 pointer-events-none" />

//       <div className="max-w-5xl mx-auto px-6 lg:px-8">
//         <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
//           {/* Left Column: Heading & Narrative */}
//           <div className="lg:col-span-7 space-y-6 text-left">
//             <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-100 text-blue-600 text-xs font-semibold uppercase tracking-wider">
//               <span>👋 Get to know me</span>
//             </div>

//             <h2 className="text-4xl sm:text-5xl font-extrabold text-gray-900 tracking-tight">
//               Crafting modern, scalable web applications.
//             </h2>

//             <p className="text-lg text-gray-600 leading-relaxed">
//               I am a passionate <span className="text-gray-900 font-semibold">Full Stack Developer</span> specializing in the MERN stack. I focus on building responsive, user-centric web applications with clean code and robust architecture.
//             </p>

//             <p className="text-base text-gray-600 leading-relaxed">
//               From designing efficient database schemas to implementing intuitive user interfaces, I continuously strive to expand my software development capabilities and stay aligned with industry standards.
//             </p>

//             {/* Tech Badges */}
//             <div className="pt-2">
//               <h3 className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-3">
//                 Core Technologies
//               </h3>
//               <div className="flex flex-wrap gap-2">
//                 {techStack.map((tech) => (
//                   <span
//                     key={tech}
//                     className="px-3.5 py-1.5 rounded-lg text-sm font-medium bg-gray-50 border border-gray-200/80 text-gray-700 hover:border-blue-300 hover:bg-blue-50/50 transition-colors"
//                   >
//                     {tech}
//                   </span>
//                 ))}
//               </div>
//             </div>
//           </div>

//           {/* Right Column: Stat Cards */}
//           <div className="lg:col-span-5 grid grid-cols-1 gap-4 sm:grid-cols-3 lg:grid-cols-1">
//             {stats.map((stat, index) => (
//               <div
//                 key={index}
//                 className="p-6 rounded-2xl bg-white/70 backdrop-blur-md border border-gray-100 shadow-sm hover:shadow-md transition-shadow duration-300"
//               >
//                 <div className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
//                   {stat.value}
//                 </div>
//                 <div className="text-sm font-medium text-gray-500 mt-1">
//                   {stat.label}
//                 </div>
//               </div>
//             ))}
//           </div>

//         </div>
//       </div>
//     </section>
//   );
// }







// export default function About() {
//   const stats = [
//     { label: "Core Focus", value: "Full Stack" },
//     { label: "Primary Stack", value: "MERN" },
//     { label: "Architecture", value: "REST & Web APIs" },
//   ];

//   const techStack = [
//     "MongoDB",
//     "Express.js",
//     "React.js",
//     "Node.js",
//     "Tailwind CSS",
//     "JavaScript",
//   ];

//   return (
//     <section
//       id="about"
//       className="relative min-h-screen flex items-center justify-center py-20 bg-purple-950 text-white overflow-hidden"
//     >
//       {/* Decorative ambient background glows */}
//       <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-tr from-purple-600/20 to-pink-600/20 rounded-full blur-3xl -z-10 pointer-events-none" />
//       <div className="absolute bottom-10 right-10 w-[300px] h-[300px] bg-indigo-600/15 rounded-full blur-3xl -z-10 pointer-events-none" />

//       <div className="max-w-5xl mx-auto px-6 lg:px-8">
//         <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
//           {/* Left Column: Heading & Narrative */}
//           <div className="lg:col-span-7 space-y-6 text-left">
//             <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-900/60 border border-purple-700/60 text-purple-300 text-xs font-semibold uppercase tracking-wider">
//               <span>👋 Get to know me</span>
//             </div>

//             <h2 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight">
//               Crafting modern, scalable web applications.
//             </h2>

//             <p className="text-lg text-purple-200/80 leading-relaxed">
//               I am a passionate{" "}
//               <span className="text-white font-semibold">
//                 Full Stack Developer
//               </span>{" "}
//               specializing in the MERN stack. I focus on building responsive,
//               user-centric web applications with clean code and robust
//               architecture.
//             </p>

//             <p className="text-base text-purple-300/70 leading-relaxed">
//               From designing efficient database schemas to implementing
//               intuitive user interfaces, I continuously strive to expand my
//               software development capabilities and stay aligned with industry
//               standards.
//             </p>

//             {/* Tech Badges */}
//             <div className="pt-2">
//               <h3 className="text-xs font-semibold text-purple-400 uppercase tracking-wider mb-3">
//                 Core Technologies
//               </h3>
//               <div className="flex flex-wrap gap-2">
//                 {techStack.map((tech) => (
//                   <span
//                     key={tech}
//                     className="px-3.5 py-1.5 rounded-lg text-sm font-medium bg-purple-900/40 border border-purple-800/60 text-purple-200 hover:border-purple-500 hover:bg-purple-900/80 transition-colors"
//                   >
//                     {tech}
//                   </span>
//                 ))}
//               </div>
//             </div>
//           </div>

//           {/* Right Column: Stat Cards */}
//           <div className="lg:col-span-5 grid grid-cols-1 gap-4 sm:grid-cols-3 lg:grid-cols-1">
//             {stats.map((stat, index) => (
//               <div
//                 key={index}
//                 className="p-6 rounded-2xl bg-purple-900/30 backdrop-blur-md border border-purple-800/50 shadow-lg shadow-purple-950/50 hover:border-purple-600/60 transition-all duration-300"
//               >
//                 <div className="text-2xl font-bold bg-gradient-to-r from-purple-300 to-pink-300 bg-clip-text text-transparent">
//                   {stat.value}
//                 </div>
//                 <div className="text-sm font-medium text-purple-300/70 mt-1">
//                   {stat.label}
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }






export default function About() {
  const stats = [
    { label: "Core Focus", value: "Full Stack" },
    { label: "Primary Stack", value: "MERN" },
    { label: "Architecture", value: "REST & Web APIs" },
  ];

  const techStack = [
    "MongoDB",
    "Express.js",
    "React.js",
    "Node.js",
    "Tailwind CSS",
    "JavaScript",
  ];

  return (
    <section
      id="about"
      className="relative min-h-screen flex items-center justify-center py-20 bg-slate-950 overflow-hidden"
    >
      {/* Ambient Radial Blur */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[500px] bg-gradient-to-tr from-blue-600/15 to-purple-600/15 rounded-full blur-[120px] -z-10 pointer-events-none" />

      <div className="max-w-5xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Heading & Narrative */}
          <div className="lg:col-span-7 space-y-6 text-left">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-semibold uppercase tracking-wider">
              <span>👋 Get to know me</span>
            </div>

            <h2 className="text-4xl sm:text-5xl font-extrabold text-slate-100 tracking-tight">
              Crafting modern, scalable web applications.
            </h2>

            <p className="text-lg text-slate-300 leading-relaxed">
              I am a passionate{" "}
              <span className="text-slate-100 font-semibold">
                Full Stack Developer
              </span>{" "}
              specializing in the MERN stack. I focus on building responsive,
              user-centric web applications with clean code and robust
              architecture.
            </p>

            <p className="text-base text-slate-400 leading-relaxed">
              From designing efficient database schemas to implementing
              intuitive user interfaces, I continuously strive to expand my
              software development capabilities and stay aligned with industry
              standards.
            </p>

            {/* Tech Badges */}
            <div className="pt-2">
              <h3 className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-3">
                Core Technologies
              </h3>
              <div className="flex flex-wrap gap-2">
                {techStack.map((tech) => (
                  <span
                    key={tech}
                    className="px-3.5 py-1.5 rounded-lg text-sm font-medium bg-slate-900 border border-slate-800 text-slate-300 hover:border-blue-500/40 hover:text-blue-400 transition-colors"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Stat Cards */}
          <div className="lg:col-span-5 grid grid-cols-1 gap-4 sm:grid-cols-3 lg:grid-cols-1">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="p-6 rounded-2xl bg-slate-900/60 backdrop-blur-md border border-slate-800/80 shadow-xl hover:border-slate-700 transition-all duration-300"
              >
                <div className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                  {stat.value}
                </div>
                <div className="text-sm font-medium text-slate-400 mt-1">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
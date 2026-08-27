import { useEffect, useState } from "react";
import { getProjects } from "../../services/projectApi";

function Projects() {
  const [projects, setProjects] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadProjects = async () => {
      try {
        const data = await getProjects();
        setProjects(data);
      } catch (error) {
        console.error(error);
        setError("Unable to load projects.");
      }
    };

    loadProjects();
  }, []);

  if (error) {
    return (
      <section id="projects" className="py-24 bg-slate-950">
        <div className="mx-auto max-w-md px-6 text-center">
          <div className="rounded-2xl border border-red-500/20 bg-red-500/10 p-6 backdrop-blur-sm">
            <p className="font-medium text-red-400">{error}</p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section
      id="projects"
      className="relative bg-slate-900/50 border-t border-slate-800/80 py-24"
    >
      <div className="mx-auto max-w-6xl px-6">
        {/* Section Heading */}
        <div className="text-center">
          <span className="inline-block rounded-full bg-blue-500/10 border border-blue-500/20 px-3.5 py-1 text-xs font-semibold tracking-wider text-blue-400 uppercase">
            MY WORK
          </span>

          <h2 className="mt-3 text-4xl font-extrabold tracking-tight text-slate-100 sm:text-5xl">
            Projects
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-lg text-slate-400">
            Some of the projects I have built while developing my skills in
            full-stack web development.
          </p>
        </div>

        {/* Projects Grid / Empty State */}
        {projects.length === 0 ? (
          <div className="mt-16 rounded-2xl border border-dashed border-slate-800 py-16 text-center">
            <p className="text-slate-500 font-medium">No projects available.</p>
          </div>
        ) : (
          <div className="mt-16 grid gap-8 md:grid-cols-2">
            {projects.map((project) => (
              <article
                key={project._id}
                className="group flex flex-col overflow-hidden rounded-2xl border border-slate-800 bg-slate-900/90 shadow-xl transition-all duration-300 hover:-translate-y-1 hover:border-slate-700 hover:shadow-2xl"
              >
                {/* Image */}
                <div className="relative h-60 w-full overflow-hidden bg-slate-950">
                  {project.image ? (
                    <img
                      src={project.image}
                      alt={project.title}
                      className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                    />
                  ) : (
                    <div className="flex h-full w-full flex-col items-center justify-center bg-slate-950 text-slate-600">
                      <svg
                        className="h-10 w-10 text-slate-700"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        aria-hidden="true"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="1.5"
                          d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                        />
                      </svg>
                      <span className="mt-2 text-xs font-medium">
                        Project Image
                      </span>
                    </div>
                  )}

                  {/* Top Overlay Badge for Featured */}
                  {project.featured && (
                    <div className="absolute top-4 right-4">
                      <span className="inline-flex items-center rounded-full bg-amber-500/90 px-3 py-1 text-xs font-semibold text-slate-950 backdrop-blur-md shadow-sm">
                        ★ Featured
                      </span>
                    </div>
                  )}
                </div>

                {/* Content */}
                <div className="flex flex-1 flex-col justify-between p-6 sm:p-8">
                  <div>
                    <div className="flex items-start justify-between gap-4">
                      <h3 className="text-2xl font-bold text-slate-100 group-hover:text-blue-400 transition-colors">
                        {project.title}
                      </h3>
                    </div>

                    <p className="mt-3 text-base leading-relaxed text-slate-400">
                      {project.description}
                    </p>

                    {/* Technologies */}
                    <div className="mt-6 flex flex-wrap gap-2">
                      {project.technologies?.map((technology, index) => (
                        <span
                          key={index}
                          className="rounded-lg bg-slate-800/80 px-3 py-1 text-xs font-semibold text-slate-300 border border-slate-700/50 transition-colors hover:border-blue-500/40 hover:text-blue-400"
                        >
                          {technology}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Footer Stats & Links */}
                  <div className="mt-8 pt-6 border-t border-slate-800">
                    {/* Status */}
                    <div className="flex items-center mb-6">
                      <span className="text-xs font-medium uppercase tracking-wider text-slate-500">
                        Status:
                      </span>
                      <span className="ml-2 inline-flex items-center gap-1.5 text-xs font-semibold text-emerald-400 bg-emerald-500/10 px-2.5 py-0.5 rounded-full border border-emerald-500/20">
                        <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
                        {project.status}
                      </span>
                    </div>

                    {/* Links */}
                    <div className="flex gap-3">
                      {project.githubUrl && (
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex-1 inline-flex justify-center items-center rounded-xl bg-slate-800 border border-slate-700 px-4 py-2.5 text-sm font-semibold text-slate-200 transition-all duration-200 hover:bg-slate-700 hover:text-white"
                        >
                          GitHub
                        </a>
                      )}

                      {project.liveDemoUrl && (
                        <a
                          href={project.liveDemoUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex-1 inline-flex justify-center items-center rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 px-4 py-2.5 text-sm font-semibold text-white shadow-md shadow-blue-900/20 transition-all duration-200 hover:opacity-95 hover:shadow-lg"
                        >
                          Live Demo
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

export default Projects;
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
      <section id="projects" className="py-20">
        <p className="text-center text-red-500">{error}</p>
      </section>
    );
  }

  return (
    <section id="projects" className="bg-white py-20">
      <div className="mx-auto max-w-6xl px-6">

        {/* Section heading */}
        <div className="text-center">
          <p className="font-semibold text-blue-600">
            MY WORK
          </p>

          <h2 className="mt-2 text-4xl font-bold text-gray-900">
            Projects
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-gray-600">
            Some of the projects I have built while developing
            my skills in full-stack web development.
          </p>
        </div>

        {/* Projects */}
        {projects.length === 0 ? (
          <p className="mt-12 text-center text-gray-500">
            No projects available.
          </p>
        ) : (
          <div className="mt-12 grid gap-8 md:grid-cols-2">

            {projects.map((project) => (
              <article
                 key={project._id}
                 className="group overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
                >

                {/* Image */}
                {project.image ? (
                  <img
                    src={project.image}
                    alt={project.title}
                    className="h-56 w-full object-cover transition duration-300 group-hover:scale-105"
                  />
                ) : (
                  <div className="flex h-56 items-center justify-center bg-gray-100">
                    <span className="text-gray-400">
                      Project Image
                    </span>
                  </div>
                )}

                {/* Content */}
                <div className="p-6">

                  <div className="flex items-start justify-between gap-4">
                    <h3 className="text-2xl font-bold text-gray-900">
                      {project.title}
                    </h3>

                    {project.featured && (
                      <span className="rounded-full bg-yellow-100 px-3 py-1 text-xs font-semibold text-yellow-700">
                        Featured
                      </span>
                    )}
                  </div>

                  <p className="mt-4 leading-7 text-gray-600">
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div className="mt-5 flex flex-wrap gap-2">
                    {project.technologies?.map((technology, index) => (
                      <span
                        key={index}
                        className="rounded-full bg-blue-50 px-3 py-1 text-sm font-medium text-blue-700"
                      >
                        {technology}
                      </span>
                    ))}
                  </div>

                  {/* Status */}
                  <div className="mt-5">
                    <span className="text-sm text-gray-500">
                      Status:
                    </span>

                    <span className="ml-2 text-sm font-semibold text-green-600">
                      {project.status}
                    </span>
                  </div>

                  {/* Links */}
                  <div className="mt-6 flex gap-3">

                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="rounded-lg bg-gray-900 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-gray-700"
                      >
                        GitHub
                      </a>
                    )}

                    {project.liveDemoUrl && (
                      <a
                        href={project.liveDemoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="rounded-lg bg-blue-600 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-blue-700"
                      >
                        Live Demo
                      </a>
                    )}

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
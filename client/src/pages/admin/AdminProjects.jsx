import { useState } from "react";
import { createProject } from "../../services/projectApi";

function AdminProjects() {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    technologies: "",
    githubUrl: "",
    image: "",
    liveDemoUrl: "",
    featured: false,
    status: "Completed",
  });

  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const project = {
        ...formData,

        // Convert comma-separated technologies
        // into an array
        technologies: formData.technologies
          .split(",")
          .map((technology) => technology.trim())
          .filter(Boolean),
      };

      await createProject(project);

      setMessage("Project created successfully!");

      setFormData({
        title: "",
        description: "",
        technologies: "",
        githubUrl: "",
        image: "",
        liveDemoUrl: "",
        featured: false,
        status: "Completed",
      });
    } catch (error) {
      console.error(error);
      setMessage("Unable to create project.");
    }
  };

  return (
    <section className="min-h-screen bg-gray-100 py-16">
      <div className="mx-auto max-w-3xl px-6">

        <div className="rounded-2xl bg-white p-8 shadow">
          <h1 className="text-3xl font-bold text-gray-900">
            Admin — Create Project
          </h1>

          <p className="mt-2 text-gray-600">
            Add a new project to your portfolio.
          </p>

          {message && (
            <p className="mt-4 rounded-lg bg-blue-50 p-3 text-blue-700">
              {message}
            </p>
          )}

          <form onSubmit={handleSubmit} className="mt-8 space-y-5">

            {/* Title */}
            <div>
              <label className="mb-2 block font-semibold">
                Project Title
              </label>

              <input
                type="text"
                name="title"
                value={formData.title}
                onChange={handleChange}
                required
                className="w-full rounded-lg border border-gray-300 px-4 py-3"
                placeholder="Student Department Placement System"
              />
            </div>

            {/* Description */}
            <div>
              <label className="mb-2 block font-semibold">
                Description
              </label>

              <textarea
                name="description"
                value={formData.description}
                onChange={handleChange}
                required
                rows="5"
                className="w-full rounded-lg border border-gray-300 px-4 py-3"
                placeholder="Describe your project..."
              />
            </div>

            {/* Technologies */}
            <div>
              <label className="mb-2 block font-semibold">
                Technologies
              </label>

              <input
                type="text"
                name="technologies"
                value={formData.technologies}
                onChange={handleChange}
                required
                className="w-full rounded-lg border border-gray-300 px-4 py-3"
                placeholder="React, Node.js, MongoDB, Express"
              />

              <p className="mt-1 text-sm text-gray-500">
                Separate technologies with commas.
              </p>
            </div>

            {/* GitHub */}
            <div>
              <label className="mb-2 block font-semibold">
                GitHub URL
              </label>

              <input
                type="url"
                name="githubUrl"
                value={formData.githubUrl}
                onChange={handleChange}
                className="w-full rounded-lg border border-gray-300 px-4 py-3"
                placeholder="https://github.com/..."
              />
            </div>

            {/* Image */}
            <div>
              <label className="mb-2 block font-semibold">
                Image URL
              </label>

              <input
                type="text"
                name="image"
                value={formData.image}
                onChange={handleChange}
                className="w-full rounded-lg border border-gray-300 px-4 py-3"
                placeholder="/images/placement-system.png"
              />

              <p className="mt-1 text-sm text-gray-500">
                Example: /images/placement-system.png
              </p>
            </div>

            {/* Live Demo */}
            <div>
              <label className="mb-2 block font-semibold">
                Live Demo URL
              </label>

              <input
                type="url"
                name="liveDemoUrl"
                value={formData.liveDemoUrl}
                onChange={handleChange}
                className="w-full rounded-lg border border-gray-300 px-4 py-3"
                placeholder="https://your-project.vercel.app"
              />
            </div>

            {/* Status */}
            <div>
              <label className="mb-2 block font-semibold">
                Status
              </label>

              <select
                name="status"
                value={formData.status}
                onChange={handleChange}
                className="w-full rounded-lg border border-gray-300 px-4 py-3"
              >
                <option value="Completed">Completed</option>
                <option value="In Progress">In Progress</option>
              </select>
            </div>

            {/* Featured */}
            <div className="flex items-center gap-3">
              <input
                type="checkbox"
                name="featured"
                checked={formData.featured}
                onChange={handleChange}
                className="h-5 w-5"
              />

              <label className="font-semibold">
                Featured Project
              </label>
            </div>

            {/* Submit */}
            <button
              type="submit"
              className="w-full rounded-lg bg-blue-600 px-5 py-3 font-semibold text-white transition hover:bg-blue-700"
            >
              Create Project
            </button>

          </form>
        </div>
      </div>
    </section>
  );
}

export default AdminProjects;
import { useEffect, useState } from "react";
import {
  getProjects,
  createProject,
  updateProject,
  deleteProject,
} from "../../services/projectApi";

function AdminProjects() {
  const emptyForm = {
    title: "",
    description: "",
    technologies: "",
    githubUrl: "",
    image: "",
    liveDemoUrl: "",
    featured: false,
    status: "Completed",
  };

  const [projects, setProjects] = useState([]);
  const [formData, setFormData] = useState(emptyForm);
  const [editingId, setEditingId] = useState(null);
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  // Load projects
  const loadProjects = async () => {
    try {
      const data = await getProjects();
      setProjects(data);
    } catch (error) {
      console.error(error);
      setError("Unable to load projects.");
    }
  };

  useEffect(() => {
    loadProjects();
  }, []);

  // Handle input changes
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  // Create or update
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const projectData = {
        ...formData,

        technologies: formData.technologies
          .split(",")
          .map((technology) => technology.trim())
          .filter(Boolean),
      };

      if (editingId) {
        await updateProject(editingId, projectData);
        setMessage("Project updated successfully.");
      } else {
        await createProject(projectData);
        setMessage("Project created successfully.");
      }

      setFormData(emptyForm);
      setEditingId(null);
      await loadProjects();
    } catch (error) {
      console.error(error);
      setError("Unable to save project.");
    }
  };

  // Edit
  const handleEdit = (project) => {
    setEditingId(project._id);

    setFormData({
      title: project.title || "",
      description: project.description || "",
      technologies: project.technologies?.join(", ") || "",
      githubUrl: project.githubUrl || "",
      image: project.image || "",
      liveDemoUrl: project.liveDemoUrl || "",
      featured: project.featured || false,
      status: project.status || "Completed",
    });

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  // Delete
  const handleDelete = async (id) => {
    const confirmed = window.confirm(
      "Are you sure you want to delete this project?"
    );

    if (!confirmed) return;

    try {
      await deleteProject(id);

      setMessage("Project deleted successfully.");

      await loadProjects();
    } catch (error) {
      console.error(error);
      setError("Unable to delete project.");
    }
  };

  // Cancel editing
  const handleCancel = () => {
    setEditingId(null);
    setFormData(emptyForm);
  };

  return (
    <section className="min-h-screen bg-gray-100 py-16">
      <div className="mx-auto max-w-6xl px-6">

        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900">
            Project Management
          </h1>

          <p className="mt-2 text-gray-600">
            Create, update, and manage your portfolio projects.
          </p>
        </div>

        {/* Messages */}
        {message && (
          <div className="mb-6 rounded-lg bg-green-50 p-4 text-green-700">
            {message}
          </div>
        )}

        {error && (
          <div className="mb-6 rounded-lg bg-red-50 p-4 text-red-700">
            {error}
          </div>
        )}

        {/* Form */}
        <div className="mb-10 rounded-2xl bg-white p-8 shadow-sm">

          <div className="mb-6 flex items-center justify-between">
            <h2 className="text-2xl font-bold text-gray-900">
              {editingId ? "Edit Project" : "Create Project"}
            </h2>

            {editingId && (
              <button
                onClick={handleCancel}
                className="rounded-lg border border-gray-300 px-4 py-2 text-sm font-medium hover:bg-gray-50"
              >
                Cancel
              </button>
            )}
          </div>

          <form onSubmit={handleSubmit} className="space-y-5">

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
                className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none focus:border-blue-500"
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
                className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none focus:border-blue-500"
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
                className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none focus:border-blue-500"
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
                className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none focus:border-blue-500"
                placeholder="https://github.com/..."
              />
            </div>

            {/* Image */}
            <div>
              <label className="mb-2 block font-semibold">
                Image Path
              </label>

              <input
                type="text"
                name="image"
                value={formData.image}
                onChange={handleChange}
                className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none focus:border-blue-500"
                placeholder="/images/placement-system.png"
              />
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
                className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none focus:border-blue-500"
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
                className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none focus:border-blue-500"
              >
                <option value="Completed">
                  Completed
                </option>

                <option value="In Progress">
                  In Progress
                </option>
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
              className="rounded-lg bg-blue-600 px-6 py-3 font-semibold text-white transition hover:bg-blue-700"
            >
              {editingId ? "Update Project" : "Create Project"}
            </button>

          </form>
        </div>

        {/* Existing Projects */}
        <div>
          <h2 className="mb-6 text-2xl font-bold text-gray-900">
            Existing Projects
          </h2>

          {projects.length === 0 ? (
            <div className="rounded-xl bg-white p-8 text-center text-gray-500">
              No projects available.
            </div>
          ) : (
            <div className="grid gap-6 md:grid-cols-2">

              {projects.map((project) => (
                <article
                  key={project._id}
                  className="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm"
                >

                  {/* Image */}
                  {project.image ? (
                    <img
                      src={project.image}
                      alt={project.title}
                      className="h-48 w-full object-cover"
                    />
                  ) : (
                    <div className="flex h-48 items-center justify-center bg-gray-100">
                      <span className="text-gray-400">
                        No Image
                      </span>
                    </div>
                  )}

                  <div className="p-6">

                    <div className="flex items-start justify-between gap-3">

                      <h3 className="text-xl font-bold text-gray-900">
                        {project.title}
                      </h3>

                      {project.featured && (
                        <span className="rounded-full bg-yellow-100 px-3 py-1 text-xs font-semibold text-yellow-700">
                          Featured
                        </span>
                      )}

                    </div>

                    <p className="mt-3 line-clamp-3 text-gray-600">
                      {project.description}
                    </p>

                    <div className="mt-4 flex flex-wrap gap-2">
                      {project.technologies?.map(
                        (technology, index) => (
                          <span
                            key={index}
                            className="rounded-full bg-blue-50 px-3 py-1 text-xs font-medium text-blue-700"
                          >
                            {technology}
                          </span>
                        )
                      )}
                    </div>

                    <div className="mt-5 text-sm">
                      <span className="text-gray-500">
                        Status:
                      </span>

                      <span className="ml-2 font-semibold text-green-600">
                        {project.status}
                      </span>
                    </div>

                    {/* Actions */}
                    <div className="mt-6 flex gap-3">

                      <button
                        onClick={() => handleEdit(project)}
                        className="rounded-lg bg-blue-600 px-5 py-2.5 text-sm font-semibold text-white hover:bg-blue-700"
                      >
                        Edit
                      </button>

                      <button
                        onClick={() => handleDelete(project._id)}
                        className="rounded-lg bg-red-600 px-5 py-2.5 text-sm font-semibold text-white hover:bg-red-700"
                      >
                        Delete
                      </button>

                    </div>

                  </div>
                </article>
              ))}

            </div>
          )}
        </div>

      </div>
    </section>
  );
}

export default AdminProjects;
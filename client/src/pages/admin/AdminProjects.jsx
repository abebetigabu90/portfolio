// // import { useState } from "react";
// // import { createProject } from "../../services/projectApi";

// // function AdminProjects() {
// //   const [formData, setFormData] = useState({
// //     title: "",
// //     description: "",
// //     technologies: "",
// //     githubUrl: "",
// //     image: "",
// //     liveDemoUrl: "",
// //     featured: false,
// //     status: "Completed",
// //   });

// //   const [message, setMessage] = useState("");

// //   const handleChange = (e) => {
// //     const { name, value, type, checked } = e.target;

// //     setFormData({
// //       ...formData,
// //       [name]: type === "checkbox" ? checked : value,
// //     });
// //   };

// //   const handleSubmit = async (e) => {
// //     e.preventDefault();

// //     try {
// //       const project = {
// //         ...formData,

// //         // Convert comma-separated technologies
// //         // into an array
// //         technologies: formData.technologies
// //           .split(",")
// //           .map((technology) => technology.trim())
// //           .filter(Boolean),
// //       };

// //       await createProject(project);

// //       setMessage("Project created successfully!");

// //       setFormData({
// //         title: "",
// //         description: "",
// //         technologies: "",
// //         githubUrl: "",
// //         image: "",
// //         liveDemoUrl: "",
// //         featured: false,
// //         status: "Completed",
// //       });
// //     } catch (error) {
// //       console.error(error);
// //       setMessage("Unable to create project.");
// //     }
// //   };

// //   return (
// //     <section className="min-h-screen bg-gray-100 py-16">
// //       <div className="mx-auto max-w-3xl px-6">

// //         <div className="rounded-2xl bg-white p-8 shadow">
// //           <h1 className="text-3xl font-bold text-gray-900">
// //             Admin — Create Project
// //           </h1>

// //           <p className="mt-2 text-gray-600">
// //             Add a new project to your portfolio.
// //           </p>

// //           {message && (
// //             <p className="mt-4 rounded-lg bg-blue-50 p-3 text-blue-700">
// //               {message}
// //             </p>
// //           )}

// //           <form onSubmit={handleSubmit} className="mt-8 space-y-5">

// //             {/* Title */}
// //             <div>
// //               <label className="mb-2 block font-semibold">
// //                 Project Title
// //               </label>

// //               <input
// //                 type="text"
// //                 name="title"
// //                 value={formData.title}
// //                 onChange={handleChange}
// //                 required
// //                 className="w-full rounded-lg border border-gray-300 px-4 py-3"
// //                 placeholder="Student Department Placement System"
// //               />
// //             </div>

// //             {/* Description */}
// //             <div>
// //               <label className="mb-2 block font-semibold">
// //                 Description
// //               </label>

// //               <textarea
// //                 name="description"
// //                 value={formData.description}
// //                 onChange={handleChange}
// //                 required
// //                 rows="5"
// //                 className="w-full rounded-lg border border-gray-300 px-4 py-3"
// //                 placeholder="Describe your project..."
// //               />
// //             </div>

// //             {/* Technologies */}
// //             <div>
// //               <label className="mb-2 block font-semibold">
// //                 Technologies
// //               </label>

// //               <input
// //                 type="text"
// //                 name="technologies"
// //                 value={formData.technologies}
// //                 onChange={handleChange}
// //                 required
// //                 className="w-full rounded-lg border border-gray-300 px-4 py-3"
// //                 placeholder="React, Node.js, MongoDB, Express"
// //               />

// //               <p className="mt-1 text-sm text-gray-500">
// //                 Separate technologies with commas.
// //               </p>
// //             </div>

// //             {/* GitHub */}
// //             <div>
// //               <label className="mb-2 block font-semibold">
// //                 GitHub URL
// //               </label>

// //               <input
// //                 type="url"
// //                 name="githubUrl"
// //                 value={formData.githubUrl}
// //                 onChange={handleChange}
// //                 className="w-full rounded-lg border border-gray-300 px-4 py-3"
// //                 placeholder="https://github.com/..."
// //               />
// //             </div>

// //             {/* Image */}
// //             <div>
// //               <label className="mb-2 block font-semibold">
// //                 Image URL
// //               </label>

// //               <input
// //                 type="text"
// //                 name="image"
// //                 value={formData.image}
// //                 onChange={handleChange}
// //                 className="w-full rounded-lg border border-gray-300 px-4 py-3"
// //                 placeholder="/images/placement-system.png"
// //               />

// //               <p className="mt-1 text-sm text-gray-500">
// //                 Example: /images/placement-system.png
// //               </p>
// //             </div>

// //             {/* Live Demo */}
// //             <div>
// //               <label className="mb-2 block font-semibold">
// //                 Live Demo URL
// //               </label>

// //               <input
// //                 type="url"
// //                 name="liveDemoUrl"
// //                 value={formData.liveDemoUrl}
// //                 onChange={handleChange}
// //                 className="w-full rounded-lg border border-gray-300 px-4 py-3"
// //                 placeholder="https://your-project.vercel.app"
// //               />
// //             </div>

// //             {/* Status */}
// //             <div>
// //               <label className="mb-2 block font-semibold">
// //                 Status
// //               </label>

// //               <select
// //                 name="status"
// //                 value={formData.status}
// //                 onChange={handleChange}
// //                 className="w-full rounded-lg border border-gray-300 px-4 py-3"
// //               >
// //                 <option value="Completed">Completed</option>
// //                 <option value="In Progress">In Progress</option>
// //               </select>
// //             </div>

// //             {/* Featured */}
// //             <div className="flex items-center gap-3">
// //               <input
// //                 type="checkbox"
// //                 name="featured"
// //                 checked={formData.featured}
// //                 onChange={handleChange}
// //                 className="h-5 w-5"
// //               />

// //               <label className="font-semibold">
// //                 Featured Project
// //               </label>
// //             </div>

// //             {/* Submit */}
// //             <button
// //               type="submit"
// //               className="w-full rounded-lg bg-blue-600 px-5 py-3 font-semibold text-white transition hover:bg-blue-700"
// //             >
// //               Create Project
// //             </button>

// //           </form>
// //         </div>
// //       </div>
// //     </section>
// //   );
// // }

// // export default AdminProjects;













// import { useEffect, useState } from "react";
// import {
//   Plus,
//   Pencil,
//   Trash2,
//   Star,
//   ExternalLink,
// } from "lucide-react";
// import {
//   getProjects,
//   createProject,
//   updateProject,
//   deleteProject,
// } from "../../services/projectApi";

// function AdminProjects() {
//   const [projects, setProjects] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState("");

//   const [showForm, setShowForm] = useState(false);
//   const [editingProject, setEditingProject] = useState(null);

//   const [formData, setFormData] = useState({
//     title: "",
//     description: "",
//     technologies: "",
//     githubUrl: "",
//     liveUrl: "",
//     imageUrl: "",
//     featured: false,
//   });

//   useEffect(() => {
//     loadProjects();
//   }, []);

//   const loadProjects = async () => {
//     try {
//       setLoading(true);
//       const data = await getProjects();
//       setProjects(data);
//     } catch (err) {
//       setError("Failed to load projects.");
//       console.error(err);
//     } finally {
//       setLoading(false);
//     }
//   };

//   const handleChange = (e) => {
//     const { name, value, type, checked } = e.target;

//     setFormData((prev) => ({
//       ...prev,
//       [name]: type === "checkbox" ? checked : value,
//     }));
//   };

//   const resetForm = () => {
//     setFormData({
//       title: "",
//       description: "",
//       technologies: "",
//       githubUrl: "",
//       liveUrl: "",
//       imageUrl: "",
//       featured: false,
//     });

//     setEditingProject(null);
//     setShowForm(false);
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     try {
//       const projectData = {
//         ...formData,
//         technologies: formData.technologies
//           .split(",")
//           .map((tech) => tech.trim())
//           .filter(Boolean),
//       };

//       if (editingProject) {
//         await updateProject(editingProject._id, projectData);
//       } else {
//         await createProject(projectData);
//       }

//       await loadProjects();
//       resetForm();
//     } catch (err) {
//       console.error(err);
//       setError("Failed to save project.");
//     }
//   };

//   const handleEdit = (project) => {
//     setEditingProject(project);

//     setFormData({
//       title: project.title || "",
//       description: project.description || "",
//       technologies: Array.isArray(project.technologies)
//         ? project.technologies.join(", ")
//         : "",
//       githubUrl: project.githubUrl || "",
//       liveUrl: project.liveUrl || "",
//       imageUrl: project.imageUrl || "",
//       featured: project.featured || false,
//     });

//     setShowForm(true);
//   };

//   const handleDelete = async (id) => {
//     const confirmed = window.confirm(
//       "Are you sure you want to delete this project?"
//     );

//     if (!confirmed) return;

//     try {
//       await deleteProject(id);
//       await loadProjects();
//     } catch (err) {
//       console.error(err);
//       setError("Failed to delete project.");
//     }
//   };

//   if (loading) {
//     return (
//       <div className="p-6">
//         <p>Loading projects...</p>
//       </div>
//     );
//   }

//   return (
//     <div className="min-h-screen bg-gray-50 p-6">
//       {/* Header */}
//       <div className="mb-8 flex items-center justify-between">
//         <div>
//           <h1 className="text-3xl font-bold text-gray-900">
//             Project Management
//           </h1>

//           <p className="mt-1 text-gray-600">
//             Create and manage the projects displayed on your portfolio.
//           </p>
//         </div>

//         <button
//           onClick={() => {
//             resetForm();
//             setShowForm(true);
//           }}
//           className="flex items-center gap-2 rounded-lg bg-blue-600 px-4 py-2 text-white hover:bg-blue-700"
//         >
//           <Plus size={18} />
//           Add Project
//         </button>
//       </div>

//       {error && (
//         <div className="mb-6 rounded-lg bg-red-100 p-4 text-red-700">
//           {error}
//         </div>
//       )}

//       {/* Form */}
//       {showForm && (
//         <div className="mb-8 rounded-xl bg-white p-6 shadow">
//           <div className="mb-6 flex items-center justify-between">
//             <h2 className="text-xl font-semibold">
//               {editingProject ? "Edit Project" : "Create Project"}
//             </h2>

//             <button
//               onClick={resetForm}
//               className="text-gray-500 hover:text-gray-700"
//             >
//               Cancel
//             </button>
//           </div>

//           <form onSubmit={handleSubmit} className="space-y-5">
//             <div>
//               <label className="mb-1 block font-medium">
//                 Project Title
//               </label>

//               <input
//                 type="text"
//                 name="title"
//                 value={formData.title}
//                 onChange={handleChange}
//                 required
//                 className="w-full rounded-lg border p-3 outline-none focus:border-blue-500"
//                 placeholder="Student Department Placement System"
//               />
//             </div>

//             <div>
//               <label className="mb-1 block font-medium">
//                 Description
//               </label>

//               <textarea
//                 name="description"
//                 value={formData.description}
//                 onChange={handleChange}
//                 required
//                 rows="4"
//                 className="w-full rounded-lg border p-3 outline-none focus:border-blue-500"
//                 placeholder="Describe your project..."
//               />
//             </div>

//             <div>
//               <label className="mb-1 block font-medium">
//                 Technologies
//               </label>

//               <input
//                 type="text"
//                 name="technologies"
//                 value={formData.technologies}
//                 onChange={handleChange}
//                 className="w-full rounded-lg border p-3 outline-none focus:border-blue-500"
//                 placeholder="React, Node.js, Express, MongoDB"
//               />

//               <p className="mt-1 text-sm text-gray-500">
//                 Separate technologies with commas.
//               </p>
//             </div>

//             <div className="grid gap-5 md:grid-cols-2">
//               <div>
//                 <label className="mb-1 block font-medium">
//                   GitHub URL
//                 </label>

//                 <input
//                   type="url"
//                   name="githubUrl"
//                   value={formData.githubUrl}
//                   onChange={handleChange}
//                   className="w-full rounded-lg border p-3 outline-none focus:border-blue-500"
//                   placeholder="https://github.com/..."
//                 />
//               </div>

//               <div>
//                 <label className="mb-1 block font-medium">
//                   Live Demo URL
//                 </label>

//                 <input
//                   type="url"
//                   name="liveUrl"
//                   value={formData.liveUrl}
//                   onChange={handleChange}
//                   className="w-full rounded-lg border p-3 outline-none focus:border-blue-500"
//                   placeholder="https://..."
//                 />
//               </div>
//             </div>

//             <div>
//               <label className="mb-1 block font-medium">
//                 Image URL
//               </label>

//               <input
//                 type="url"
//                 name="imageUrl"
//                 value={formData.imageUrl}
//                 onChange={handleChange}
//                 className="w-full rounded-lg border p-3 outline-none focus:border-blue-500"
//                 placeholder="https://..."
//               />
//             </div>

//             <label className="flex cursor-pointer items-center gap-2">
//               <input
//                 type="checkbox"
//                 name="featured"
//                 checked={formData.featured}
//                 onChange={handleChange}
//                 className="h-4 w-4"
//               />

//               <span className="font-medium">
//                 Featured Project
//               </span>
//             </label>

//             <div className="flex gap-3">
//               <button
//                 type="submit"
//                 className="rounded-lg bg-blue-600 px-5 py-2 text-white hover:bg-blue-700"
//               >
//                 {editingProject ? "Update Project" : "Create Project"}
//               </button>

//               <button
//                 type="button"
//                 onClick={resetForm}
//                 className="rounded-lg border px-5 py-2 hover:bg-gray-50"
//               >
//                 Cancel
//               </button>
//             </div>
//           </form>
//         </div>
//       )}

//       {/* Projects */}
//       <div className="rounded-xl bg-white shadow">
//         <div className="border-b p-5">
//           <h2 className="text-xl font-semibold">
//             Your Projects ({projects.length})
//           </h2>
//         </div>

//         {projects.length === 0 ? (
//           <div className="p-8 text-center text-gray-500">
//             No projects found. Create your first project.
//           </div>
//         ) : (
//           <div className="divide-y">
//             {projects.map((project) => (
//               <div
//                 key={project._id}
//                 className="flex flex-col gap-4 p-5 md:flex-row md:items-center md:justify-between"
//               >
//                 <div className="flex items-start gap-4">
//                   {project.imageUrl && (
//                     <img
//                       src={project.imageUrl}
//                       alt={project.title}
//                       className="h-20 w-28 rounded-lg object-cover"
//                     />
//                   )}

//                   <div>
//                     <div className="flex items-center gap-2">
//                       <h3 className="text-lg font-semibold">
//                         {project.title}
//                       </h3>

//                       {project.featured && (
//                         <Star
//                           size={17}
//                           className="fill-yellow-400 text-yellow-400"
//                         />
//                       )}
//                     </div>

//                     <p className="mt-1 max-w-xl text-sm text-gray-600">
//                       {project.description}
//                     </p>

//                     <div className="mt-2 flex flex-wrap gap-2">
//                       {project.technologies?.map((tech) => (
//                         <span
//                           key={tech}
//                           className="rounded-full bg-gray-100 px-2 py-1 text-xs text-gray-700"
//                         >
//                           {tech}
//                         </span>
//                       ))}
//                     </div>
//                   </div>
//                 </div>

//                 <div className="flex items-center gap-2">
//                   {project.githubUrl && (
//                     <a
//                       href={project.githubUrl}
//                       target="_blank"
//                       rel="noreferrer"
//                       className="rounded-lg border p-2 hover:bg-gray-50"
//                       title="GitHub"
//                     >
//                       <ExternalLink size={18} />
//                     </a>
//                   )}

//                   {project.liveUrl && (
//                     <a
//                       href={project.liveUrl}
//                       target="_blank"
//                       rel="noreferrer"
//                       className="rounded-lg border p-2 hover:bg-gray-50"
//                       title="Live Demo"
//                     >
//                       <ExternalLink size={18} />
//                     </a>
//                   )}

//                   <button
//                     onClick={() => handleEdit(project)}
//                     className="rounded-lg border p-2 text-blue-600 hover:bg-blue-50"
//                     title="Edit"
//                   >
//                     <Pencil size={18} />
//                   </button>

//                   <button
//                     onClick={() => handleDelete(project._id)}
//                     className="rounded-lg border p-2 text-red-600 hover:bg-red-50"
//                     title="Delete"
//                   >
//                     <Trash2 size={18} />
//                   </button>
//                 </div>
//               </div>
//             ))}
//           </div>
//         )}
//       </div>
//     </div>
//   );
// }

// export default AdminProjects;














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
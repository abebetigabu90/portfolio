// // import { useState } from "react";
// // import { createProject } from "../../services/projectApi";

// // function CreateProject() {
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
// //   const [loading, setLoading] = useState(false);

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
// //       setLoading(true);
// //       setMessage("");

// //       const projectData = {
// //         ...formData,
// //         technologies: formData.technologies
// //           .split(",")
// //           .map((technology) => technology.trim())
// //           .filter(Boolean),
// //       };

// //       await createProject(projectData);

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
// //     } finally {
// //       setLoading(false);
// //     }
// //   };

// //   return (
// //     <section className="bg-gray-50 py-20">
// //       <div className="mx-auto max-w-3xl px-6">

// //         <div className="mb-10 text-center">
// //           <p className="font-semibold text-blue-600">
// //             ADMIN
// //           </p>

// //           <h2 className="mt-2 text-4xl font-bold text-gray-900">
// //             Create Project
// //           </h2>
// //         </div>

// //         <form
// //           onSubmit={handleSubmit}
// //           className="space-y-6 rounded-2xl border border-gray-200 bg-white p-8 shadow-sm"
// //         >

// //           {/* Title */}
// //           <div>
// //             <label className="mb-2 block font-medium text-gray-700">
// //               Project Title
// //             </label>

// //             <input
// //               type="text"
// //               name="title"
// //               value={formData.title}
// //               onChange={handleChange}
// //               required
// //               className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none focus:border-blue-500"
// //               placeholder="Student Department Placement System"
// //             />
// //           </div>

// //           {/* Description */}
// //           <div>
// //             <label className="mb-2 block font-medium text-gray-700">
// //               Description
// //             </label>

// //             <textarea
// //               name="description"
// //               value={formData.description}
// //               onChange={handleChange}
// //               required
// //               rows="5"
// //               className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none focus:border-blue-500"
// //               placeholder="Describe your project..."
// //             />
// //           </div>

// //           {/* Technologies */}
// //           <div>
// //             <label className="mb-2 block font-medium text-gray-700">
// //               Technologies
// //             </label>

// //             <input
// //               type="text"
// //               name="technologies"
// //               value={formData.technologies}
// //               onChange={handleChange}
// //               required
// //               className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none focus:border-blue-500"
// //               placeholder="React, Node.js, Express, MongoDB"
// //             />

// //             <p className="mt-2 text-sm text-gray-500">
// //               Separate technologies with commas.
// //             </p>
// //           </div>

// //           {/* Image */}
// //           <div>
// //             <label className="mb-2 block font-medium text-gray-700">
// //               Image URL
// //             </label>

// //             <input
// //               type="url"
// //               name="image"
// //               value={formData.image}
// //               onChange={handleChange}
// //               className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none focus:border-blue-500"
// //               placeholder="https://example.com/project-image.jpg"
// //             />
// //           </div>

// //           {/* GitHub */}
// //           <div>
// //             <label className="mb-2 block font-medium text-gray-700">
// //               GitHub URL
// //             </label>

// //             <input
// //               type="url"
// //               name="githubUrl"
// //               value={formData.githubUrl}
// //               onChange={handleChange}
// //               className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none focus:border-blue-500"
// //               placeholder="https://github.com/..."
// //             />
// //           </div>

// //           {/* Live Demo */}
// //           <div>
// //             <label className="mb-2 block font-medium text-gray-700">
// //               Live Demo URL
// //             </label>

// //             <input
// //               type="url"
// //               name="liveDemoUrl"
// //               value={formData.liveDemoUrl}
// //               onChange={handleChange}
// //               className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none focus:border-blue-500"
// //               placeholder="https://..."
// //             />
// //           </div>

// //           {/* Status */}
// //           <div>
// //             <label className="mb-2 block font-medium text-gray-700">
// //               Status
// //             </label>

// //             <select
// //               name="status"
// //               value={formData.status}
// //               onChange={handleChange}
// //               className="w-full rounded-lg border border-gray-300 px-4 py-3"
// //             >
// //               <option value="Completed">Completed</option>
// //               <option value="In Progress">In Progress</option>
// //             </select>
// //           </div>

// //           {/* Featured */}
// //           <label className="flex items-center gap-3">
// //             <input
// //               type="checkbox"
// //               name="featured"
// //               checked={formData.featured}
// //               onChange={handleChange}
// //               className="h-5 w-5"
// //             />

// //             <span className="font-medium text-gray-700">
// //               Featured project
// //             </span>
// //           </label>

// //           {/* Submit */}
// //           <button
// //             type="submit"
// //             disabled={loading}
// //             className="w-full rounded-lg bg-blue-600 px-6 py-3 font-semibold text-white transition hover:bg-blue-700 disabled:cursor-not-allowed disabled:opacity-50"
// //           >
// //             {loading ? "Creating..." : "Create Project"}
// //           </button>

// //           {/* Message */}
// //           {message && (
// //             <p className="text-center font-medium text-gray-700">
// //               {message}
// //             </p>
// //           )}

// //         </form>
// //       </div>
// //     </section>
// //   );
// // }

// // export default CreateProject;



// import { useState } from "react";
// import { createProject } from "../../services/projectApi";

// function CreateProject() {
//   const [formData, setFormData] = useState({
//     title: "",
//     description: "",
//     technologies: "",
//     githubUrl: "",
//     image: "",
//     liveDemoUrl: "",
//     featured: false,
//     status: "Completed",
//   });

//   const [message, setMessage] = useState("");
//   const [loading, setLoading] = useState(false);

//   const handleChange = (e) => {
//     const { name, value, type, checked } = e.target;

//     setFormData({
//       ...formData,
//       [name]: type === "checkbox" ? checked : value,
//     });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     try {
//       setLoading(true);
//       setMessage("");

//       const projectData = {
//         ...formData,
//         technologies: formData.technologies
//           .split(",")
//           .map((technology) => technology.trim())
//           .filter(Boolean),
//       };

//       await createProject(projectData);

//       setMessage("Project created successfully!");

//       setFormData({
//         title: "",
//         description: "",
//         technologies: "",
//         githubUrl: "",
//         image: "",
//         liveDemoUrl: "",
//         featured: false,
//         status: "Completed",
//       });
//     } catch (error) {
//       console.error(error);
//       setMessage("Unable to create project.");
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <section className="bg-gray-50 py-20">
//       <div className="mx-auto max-w-3xl px-6">

//         <div className="mb-10 text-center">
//           <p className="font-semibold text-blue-600">
//             ADMIN
//           </p>

//           <h2 className="mt-2 text-4xl font-bold text-gray-900">
//             Create Project
//           </h2>
//         </div>

//         <form
//           onSubmit={handleSubmit}
//           className="space-y-6 rounded-2xl border border-gray-200 bg-white p-8 shadow-sm"
//         >

//           {/* Title */}
//           <div>
//             <label className="mb-2 block font-medium text-gray-700">
//               Project Title
//             </label>

//             <input
//               type="text"
//               name="title"
//               value={formData.title}
//               onChange={handleChange}
//               required
//               className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none focus:border-blue-500"
//               placeholder="Student Department Placement System"
//             />
//           </div>

//           {/* Description */}
//           <div>
//             <label className="mb-2 block font-medium text-gray-700">
//               Description
//             </label>

//             <textarea
//               name="description"
//               value={formData.description}
//               onChange={handleChange}
//               required
//               rows="5"
//               className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none focus:border-blue-500"
//               placeholder="Describe your project..."
//             />
//           </div>

//           {/* Technologies */}
//           <div>
//             <label className="mb-2 block font-medium text-gray-700">
//               Technologies
//             </label>

//             <input
//               type="text"
//               name="technologies"
//               value={formData.technologies}
//               onChange={handleChange}
//               required
//               className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none focus:border-blue-500"
//               placeholder="React, Node.js, Express, MongoDB"
//             />

//             <p className="mt-2 text-sm text-gray-500">
//               Separate technologies with commas.
//             </p>
//           </div>

//           {/* Image */}
//           <div>
//             <label className="mb-2 block font-medium text-gray-700">
//               Image URL
//             </label>

//             <input
//               type="url"
//               name="image"
//               value={formData.image}
//               onChange={handleChange}
//               className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none focus:border-blue-500"
//               placeholder="https://example.com/project-image.jpg"
//             />
//           </div>

//           {/* GitHub */}
//           <div>
//             <label className="mb-2 block font-medium text-gray-700">
//               GitHub URL
//             </label>

//             <input
//               type="url"
//               name="githubUrl"
//               value={formData.githubUrl}
//               onChange={handleChange}
//               className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none focus:border-blue-500"
//               placeholder="https://github.com/..."
//             />
//           </div>

//           {/* Live Demo */}
//           <div>
//             <label className="mb-2 block font-medium text-gray-700">
//               Live Demo URL
//             </label>

//             <input
//               type="url"
//               name="liveDemoUrl"
//               value={formData.liveDemoUrl}
//               onChange={handleChange}
//               className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none focus:border-blue-500"
//               placeholder="https://..."
//             />
//           </div>

//           {/* Status */}
//           <div>
//             <label className="mb-2 block font-medium text-gray-700">
//               Status
//             </label>

//             <select
//               name="status"
//               value={formData.status}
//               onChange={handleChange}
//               className="w-full rounded-lg border border-gray-300 px-4 py-3"
//             >
//               <option value="Completed">Completed</option>
//               <option value="In Progress">In Progress</option>
//             </select>
//           </div>

//           {/* Featured */}
//           <label className="flex items-center gap-3">
//             <input
//               type="checkbox"
//               name="featured"
//               checked={formData.featured}
//               onChange={handleChange}
//               className="h-5 w-5"
//             />

//             <span className="font-medium text-gray-700">
//               Featured project
//             </span>
//           </label>

//           {/* Submit */}
//           <button
//             type="submit"
//             disabled={loading}
//             className="w-full rounded-lg bg-blue-600 px-6 py-3 font-semibold text-white transition hover:bg-blue-700 disabled:cursor-not-allowed disabled:opacity-50"
//           >
//             {loading ? "Creating..." : "Create Project"}
//           </button>

//           {/* Message */}
//           {message && (
//             <p className="text-center font-medium text-gray-700">
//               {message}
//             </p>
//           )}

//         </form>
//       </div>
//     </section>
//   );
// }

// export default CreateProject;
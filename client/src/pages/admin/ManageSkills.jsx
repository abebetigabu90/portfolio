import { useEffect, useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import {
  ArrowLeft,
  Plus,
  Search,
  Pencil,
  Trash2,
  Star,
  CheckCircle2,
  XCircle,
  Code2,
  Server,
  Database,
  Wrench,
  Globe,
  GitBranch,
  Terminal,
  Braces,
  Boxes,
  Cloud,
  ShieldCheck,
  Circle,
  X,
  Save,
} from "lucide-react";


// --------------------------------------------------
// Categories
// --------------------------------------------------

const CATEGORIES = [
  "All",
  "Frontend",
  "Backend",
  "Database",
  "Programming",
  "Tools",
  "DevOps",
  "Other",
];


// --------------------------------------------------
// Skill icon matching
// --------------------------------------------------

const getSkillIcon = (skillName, category) => {
  const name = skillName.toLowerCase();

  if (name.includes("react")) {
    return Code2;
  }

  if (
    name.includes("javascript") ||
    name.includes("typescript")
  ) {
    return Braces;
  }

  if (
    name.includes("html") ||
    name.includes("css") ||
    name.includes("tailwind")
  ) {
    return Code2;
  }

  if (
    name.includes("node") ||
    name.includes("express") ||
    name.includes("api")
  ) {
    return Server;
  }

  if (
    name.includes("mongo") ||
    name.includes("mysql") ||
    name.includes("postgres") ||
    name.includes("sql")
  ) {
    return Database;
  }

  if (
    name.includes("git") ||
    name.includes("github")
  ) {
    return GitBranch;
  }

  if (
    name.includes("linux") ||
    name.includes("terminal")
  ) {
    return Terminal;
  }

  if (
    name.includes("c++") ||
    name.includes("c#") ||
    name.includes("java") ||
    name.includes("python") ||
    name.includes("php")
  ) {
    return Braces;
  }

  if (
    name.includes("aws") ||
    name.includes("azure") ||
    name.includes("cloud")
  ) {
    return Cloud;
  }

  if (
    name.includes("security") ||
    name.includes("cyber")
  ) {
    return ShieldCheck;
  }

  if (
    name.includes("docker") ||
    name.includes("devops")
  ) {
    return Boxes;
  }

  if (category === "Frontend") {
    return Globe;
  }

  if (category === "Backend") {
    return Server;
  }

  if (category === "Database") {
    return Database;
  }

  if (category === "Programming") {
    return Braces;
  }

  if (category === "Tools") {
    return Wrench;
  }

  if (category === "DevOps") {
    return Boxes;
  }

  return Circle;
};


// --------------------------------------------------
// Proficiency style
// --------------------------------------------------

const getProficiencyStyle = (proficiency) => {
  if (proficiency >= 90) {
    return {
      bar: "bg-blue-500",
      text: "text-blue-400",
    };
  }

  if (proficiency >= 70) {
    return {
      bar: "bg-purple-500",
      text: "text-purple-400",
    };
  }

  if (proficiency >= 50) {
    return {
      bar: "bg-cyan-500",
      text: "text-cyan-400",
    };
  }

  return {
    bar: "bg-slate-500",
    text: "text-slate-400",
  };
};


// --------------------------------------------------
// Main component
// --------------------------------------------------

function ManageSkills() {
  const navigate = useNavigate();

  const [skills, setSkills] = useState([]);
  const [loading, setLoading] = useState(true);

  const [search, setSearch] = useState("");
  const [categoryFilter, setCategoryFilter] = useState("All");
  const [statusFilter, setStatusFilter] = useState("All");

  const [error, setError] = useState("");

  const [editingSkill, setEditingSkill] = useState(null);
  const [deleteSkill, setDeleteSkill] = useState(null);

  const [saving, setSaving] = useState(false);
  const [deleting, setDeleting] = useState(false);


  // --------------------------------------------------
  // Load skills
  // --------------------------------------------------

  const loadSkills = async () => {
    try {
      setLoading(true);
      setError("");

      const token = localStorage.getItem("adminToken");

      if (!token) {
        navigate("/admin/login");
        return;
      }

      const response = await axios.get(
        "http://localhost:5000/api/skills",
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      const data = response.data;

      const sortedSkills = [...data].sort(
        (a, b) => (a.order || 0) - (b.order || 0)
      );

      setSkills(sortedSkills);

    } catch (err) {
      console.error("Error loading skills:", err);

      if (err.response?.status === 401) {
        localStorage.removeItem("adminToken");
        navigate("/admin/login");
        return;
      }

      setError(
        err.response?.data?.message ||
        "Failed to load skills."
      );

    } finally {
      setLoading(false);
    }
  };


  useEffect(() => {
    loadSkills();
  }, []);


  // --------------------------------------------------
  // Filter skills
  // --------------------------------------------------

  const filteredSkills = useMemo(() => {
    return skills.filter((skill) => {

      const matchesSearch =
        skill.name
          ?.toLowerCase()
          .includes(search.toLowerCase()) ||
        skill.description
          ?.toLowerCase()
          .includes(search.toLowerCase());

      const matchesCategory =
        categoryFilter === "All" ||
        skill.category === categoryFilter;

      const matchesStatus =
        statusFilter === "All" ||
        (statusFilter === "Active" &&
          skill.isActive !== false) ||
        (statusFilter === "Inactive" &&
          skill.isActive === false);

      return (
        matchesSearch &&
        matchesCategory &&
        matchesStatus
      );
    });
  }, [
    skills,
    search,
    categoryFilter,
    statusFilter,
  ]);


  // --------------------------------------------------
  // Statistics
  // --------------------------------------------------

  const totalSkills = skills.length;

  const activeSkills = skills.filter(
    (skill) => skill.isActive !== false
  ).length;

  const featuredSkills = skills.filter(
    (skill) => skill.featured
  ).length;


  // --------------------------------------------------
  // Update skill
  // --------------------------------------------------

  const handleUpdateSkill = async (e) => {
    e.preventDefault();

    if (!editingSkill) return;

    if (!editingSkill.name.trim()) {
      setError("Skill name is required.");
      return;
    }

    if (
      editingSkill.proficiency < 0 ||
      editingSkill.proficiency > 100
    ) {
      setError("Proficiency must be between 0 and 100.");
      return;
    }

    try {
      setSaving(true);
      setError("");

      const token = localStorage.getItem("adminToken");

      await axios.put(
        `http://localhost:5000/api/skills/${editingSkill._id}`,
        {
          name: editingSkill.name.trim(),
          category: editingSkill.category,
          proficiency: Number(
            editingSkill.proficiency
          ),
          description: editingSkill.description || "",
          order: Number(editingSkill.order) || 0,
          featured: editingSkill.featured,
          isActive: editingSkill.isActive,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      setEditingSkill(null);

      await loadSkills();

    } catch (err) {
      console.error("Error updating skill:", err);

      if (err.response?.status === 401) {
        localStorage.removeItem("adminToken");
        navigate("/admin/login");
        return;
      }

      setError(
        err.response?.data?.message ||
        "Failed to update skill."
      );

    } finally {
      setSaving(false);
    }
  };


  // --------------------------------------------------
  // Delete skill
  // --------------------------------------------------

  const handleDeleteSkill = async () => {
    if (!deleteSkill) return;

    try {
      setDeleting(true);
      setError("");

      const token = localStorage.getItem("adminToken");

      await axios.delete(
        `http://localhost:5000/api/skills/${deleteSkill._id}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      setSkills((prev) =>
        prev.filter(
          (skill) => skill._id !== deleteSkill._id
        )
      );

      setDeleteSkill(null);

    } catch (err) {
      console.error("Error deleting skill:", err);

      if (err.response?.status === 401) {
        localStorage.removeItem("adminToken");
        navigate("/admin/login");
        return;
      }

      setError(
        err.response?.data?.message ||
        "Failed to delete skill."
      );

    } finally {
      setDeleting(false);
    }
  };


  // --------------------------------------------------
  // Toggle active status
  // --------------------------------------------------

  const toggleActive = async (skill) => {
    try {
      const token = localStorage.getItem("adminToken");

      const updatedSkill = {
        ...skill,
        isActive: !skill.isActive,
      };

      await axios.put(
        `http://localhost:5000/api/skills/${skill._id}`,
        {
          name: skill.name,
          category: skill.category,
          proficiency: skill.proficiency,
          description: skill.description || "",
          order: skill.order || 0,
          featured: skill.featured,
          isActive: !skill.isActive,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      setSkills((prev) =>
        prev.map((item) =>
          item._id === skill._id
            ? updatedSkill
            : item
        )
      );

    } catch (err) {
      console.error(
        "Error changing skill status:",
        err
      );

      setError(
        err.response?.data?.message ||
        "Failed to change skill status."
      );
    }
  };


  // --------------------------------------------------
  // Loading
  // --------------------------------------------------

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-100">

        <div className="flex min-h-screen items-center justify-center">

          <div className="text-center">

            <div
              className="mx-auto h-10 w-10
                         animate-spin rounded-full
                         border-4 border-gray-200
                         border-t-blue-600"
            />

            <p className="mt-4 text-sm text-gray-500">
              Loading skills...
            </p>

          </div>

        </div>

      </div>
    );
  }


  return (
    <div className="min-h-screen bg-gray-100">

      {/* ========================================== */}
      {/* Header */}
      {/* ========================================== */}

      <header className="border-b border-gray-200 bg-white">

        <div
          className="mx-auto flex max-w-7xl
                     items-center justify-between
                     px-6 py-5"
        >

          <div className="flex items-center gap-4">

            <button
              onClick={() =>
                navigate("/admin/dashboard")
              }
              className="rounded-lg p-2
                         text-gray-500
                         hover:bg-gray-100
                         hover:text-gray-700"
              title="Back to dashboard"
            >
              <ArrowLeft size={20} />
            </button>

            <div>

              <h1 className="text-2xl font-bold text-gray-900">
                Manage Skills
              </h1>

              <p className="mt-1 text-sm text-gray-500">
                Manage the technologies displayed on your portfolio.
              </p>

            </div>

          </div>


          <button
            onClick={() =>
              navigate("/admin/skills/new")
            }
            className="flex items-center gap-2
                       rounded-lg bg-blue-600
                       px-4 py-2.5
                       font-semibold text-white
                       transition hover:bg-blue-700"
          >
            <Plus size={18} />
            Add Skill
          </button>

        </div>

      </header>


      {/* ========================================== */}
      {/* Main */}
      {/* ========================================== */}

      <main className="mx-auto max-w-7xl px-6 py-8">

        {/* Error */}
        {error && (
          <div
            className="mb-6 flex items-center
                       justify-between rounded-lg
                       border border-red-200
                       bg-red-50 px-4 py-3"
          >

            <p className="text-sm text-red-700">
              {error}
            </p>

            <button
              onClick={() => setError("")}
              className="text-red-500 hover:text-red-700"
            >
              <X size={18} />
            </button>

          </div>
        )}


        {/* ====================================== */}
        {/* Statistics */}
        {/* ====================================== */}

        <div
          className="mb-8 grid gap-5
                     sm:grid-cols-3"
        >

          {/* Total */}
          <div
            className="rounded-xl border
                       border-gray-200 bg-white p-5
                       shadow-sm"
          >

            <div className="flex items-center justify-between">

              <div>

                <p className="text-sm text-gray-500">
                  Total Skills
                </p>

                <p className="mt-1 text-3xl font-bold text-gray-900">
                  {totalSkills}
                </p>

              </div>

              <div
                className="flex h-11 w-11
                           items-center justify-center
                           rounded-lg bg-blue-100
                           text-blue-600"
              >
                <Code2 size={22} />
              </div>

            </div>

          </div>


          {/* Active */}
          <div
            className="rounded-xl border
                       border-gray-200 bg-white p-5
                       shadow-sm"
          >

            <div className="flex items-center justify-between">

              <div>

                <p className="text-sm text-gray-500">
                  Active Skills
                </p>

                <p className="mt-1 text-3xl font-bold text-gray-900">
                  {activeSkills}
                </p>

              </div>

              <div
                className="flex h-11 w-11
                           items-center justify-center
                           rounded-lg bg-green-100
                           text-green-600"
              >
                <CheckCircle2 size={22} />
              </div>

            </div>

          </div>


          {/* Featured */}
          <div
            className="rounded-xl border
                       border-gray-200 bg-white p-5
                       shadow-sm"
          >

            <div className="flex items-center justify-between">

              <div>

                <p className="text-sm text-gray-500">
                  Featured Skills
                </p>

                <p className="mt-1 text-3xl font-bold text-gray-900">
                  {featuredSkills}
                </p>

              </div>

              <div
                className="flex h-11 w-11
                           items-center justify-center
                           rounded-lg bg-amber-100
                           text-amber-600"
              >
                <Star size={22} />
              </div>

            </div>

          </div>

        </div>


        {/* ====================================== */}
        {/* Filters */}
        {/* ====================================== */}

        <div
          className="mb-6 rounded-xl border
                     border-gray-200 bg-white p-5
                     shadow-sm"
        >

          <div
            className="flex flex-col gap-4
                       lg:flex-row lg:items-center
                       lg:justify-between"
          >

            {/* Search */}
            <div className="relative w-full lg:max-w-md">

              <Search
                size={19}
                className="absolute left-3 top-1/2
                           -translate-y-1/2
                           text-gray-400"
              />

              <input
                type="text"
                value={search}
                onChange={(e) =>
                  setSearch(e.target.value)
                }
                placeholder="Search skills..."
                className="w-full rounded-lg
                           border border-gray-300
                           py-2.5 pl-10 pr-4
                           outline-none
                           focus:border-blue-500
                           focus:ring-2
                           focus:ring-blue-500/20"
              />

            </div>


            <div className="flex flex-col gap-3 sm:flex-row">

              {/* Category */}
              <select
                value={categoryFilter}
                onChange={(e) =>
                  setCategoryFilter(e.target.value)
                }
                className="rounded-lg
                           border border-gray-300
                           bg-white px-4 py-2.5
                           text-sm outline-none
                           focus:border-blue-500"
              >

                {CATEGORIES.map((category) => (
                  <option
                    key={category}
                    value={category}
                  >
                    {category === "All"
                      ? "All Categories"
                      : category}
                  </option>
                ))}

              </select>


              {/* Status */}
              <select
                value={statusFilter}
                onChange={(e) =>
                  setStatusFilter(e.target.value)
                }
                className="rounded-lg
                           border border-gray-300
                           bg-white px-4 py-2.5
                           text-sm outline-none
                           focus:border-blue-500"
              >

                <option value="All">
                  All Status
                </option>

                <option value="Active">
                  Active
                </option>

                <option value="Inactive">
                  Inactive
                </option>

              </select>

            </div>

          </div>

        </div>


        {/* ====================================== */}
        {/* Skills table */}
        {/* ====================================== */}

        <div
          className="overflow-hidden rounded-xl
                     border border-gray-200
                     bg-white shadow-sm"
        >

          {filteredSkills.length === 0 ? (

            <div className="px-6 py-16 text-center">

              <div
                className="mx-auto flex h-14 w-14
                           items-center justify-center
                           rounded-full bg-gray-100
                           text-gray-400"
              >
                <Code2 size={25} />
              </div>

              <h3
                className="mt-4 text-lg
                           font-semibold text-gray-900"
              >
                No skills found
              </h3>

              <p className="mt-1 text-sm text-gray-500">
                Try changing your search or filters.
              </p>

            </div>

          ) : (

            <div className="overflow-x-auto">

              <table className="w-full min-w-[900px]">

                <thead className="border-b border-gray-200 bg-gray-50">

                  <tr>

                    <th
                      className="px-6 py-4 text-left
                                 text-xs font-semibold
                                 uppercase tracking-wider
                                 text-gray-500"
                    >
                      Skill
                    </th>

                    <th
                      className="px-6 py-4 text-left
                                 text-xs font-semibold
                                 uppercase tracking-wider
                                 text-gray-500"
                    >
                      Category
                    </th>

                    <th
                      className="px-6 py-4 text-left
                                 text-xs font-semibold
                                 uppercase tracking-wider
                                 text-gray-500"
                    >
                      Proficiency
                    </th>

                    <th
                      className="px-6 py-4 text-center
                                 text-xs font-semibold
                                 uppercase tracking-wider
                                 text-gray-500"
                    >
                      Featured
                    </th>

                    <th
                      className="px-6 py-4 text-center
                                 text-xs font-semibold
                                 uppercase tracking-wider
                                 text-gray-500"
                    >
                      Status
                    </th>

                    <th
                      className="px-6 py-4 text-center
                                 text-xs font-semibold
                                 uppercase tracking-wider
                                 text-gray-500"
                    >
                      Order
                    </th>

                    <th
                      className="px-6 py-4 text-right
                                 text-xs font-semibold
                                 uppercase tracking-wider
                                 text-gray-500"
                    >
                      Actions
                    </th>

                  </tr>

                </thead>


                <tbody className="divide-y divide-gray-100">

                  {filteredSkills.map((skill) => {

                    const Icon = getSkillIcon(
                      skill.name,
                      skill.category
                    );

                    const proficiency = Math.min(
                      100,
                      Math.max(
                        0,
                        Number(skill.proficiency) || 0
                      )
                    );

                    const style =
                      getProficiencyStyle(
                        proficiency
                      );

                    return (
                      <tr
                        key={skill._id}
                        className="transition hover:bg-gray-50"
                      >

                        {/* Skill */}
                        <td className="px-6 py-4">

                          <div className="flex items-center gap-3">

                            <div
                              className="flex h-10 w-10
                                         shrink-0 items-center
                                         justify-center
                                         rounded-lg
                                         bg-blue-50
                                         text-blue-600"
                            >
                              <Icon size={20} />
                            </div>

                            <div>

                              <div className="flex items-center gap-2">

                                <p
                                  className="font-semibold
                                             text-gray-900"
                                >
                                  {skill.name}
                                </p>

                                {skill.featured && (
                                  <Star
                                    size={14}
                                    className="fill-amber-400
                                               text-amber-400"
                                  />
                                )}

                              </div>

                              {skill.description && (
                                <p
                                  className="mt-0.5 max-w-xs
                                             truncate text-xs
                                             text-gray-500"
                                >
                                  {skill.description}
                                </p>
                              )}

                            </div>

                          </div>

                        </td>


                        {/* Category */}
                        <td className="px-6 py-4">

                          <span
                            className="rounded-full
                                       bg-gray-100
                                       px-3 py-1
                                       text-xs font-medium
                                       text-gray-600"
                          >
                            {skill.category}
                          </span>

                        </td>


                        {/* Proficiency */}
                        <td className="px-6 py-4">

                          <div className="w-40">

                            <div
                              className="mb-1.5 flex
                                         items-center
                                         justify-between"
                            >

                              <span
                                className={`text-sm
                                  font-semibold
                                  ${style.text}`}
                              >
                                {proficiency}%
                              </span>

                            </div>

                            <div
                              className="h-2 overflow-hidden
                                         rounded-full
                                         bg-gray-100"
                            >

                              <div
                                className={`h-full
                                  rounded-full
                                  ${style.bar}`}
                                style={{
                                  width:
                                    `${proficiency}%`,
                                }}
                              />

                            </div>

                          </div>

                        </td>


                        {/* Featured */}
                        <td className="px-6 py-4 text-center">

                          {skill.featured ? (

                            <span
                              className="inline-flex
                                         items-center
                                         justify-center
                                         rounded-full
                                         bg-amber-100
                                         p-1.5
                                         text-amber-600"
                            >
                              <Star
                                size={15}
                                className="fill-current"
                              />
                            </span>

                          ) : (

                            <span className="text-gray-300">
                              —
                            </span>

                          )}

                        </td>


                        {/* Status */}
                        <td className="px-6 py-4 text-center">

                          <button
                            onClick={() =>
                              toggleActive(skill)
                            }
                            className={`inline-flex
                              items-center gap-1.5
                              rounded-full px-3 py-1
                              text-xs font-semibold
                              transition
                              ${
                                skill.isActive !== false
                                  ? "bg-green-100 text-green-700 hover:bg-green-200"
                                  : "bg-gray-100 text-gray-500 hover:bg-gray-200"
                              }`}
                          >

                            {skill.isActive !== false ? (
                              <>
                                <CheckCircle2 size={13} />
                                Active
                              </>
                            ) : (
                              <>
                                <XCircle size={13} />
                                Inactive
                              </>
                            )}

                          </button>

                        </td>


                        {/* Order */}
                        <td
                          className="px-6 py-4
                                     text-center text-sm
                                     font-medium text-gray-600"
                        >
                          {skill.order ?? 0}
                        </td>


                        {/* Actions */}
                        <td className="px-6 py-4">

                          <div
                            className="flex items-center
                                       justify-end gap-2"
                          >

                            <button
                              onClick={() =>
                                setEditingSkill({
                                  ...skill,
                                })
                              }
                              className="rounded-lg
                                         border border-gray-200
                                         p-2 text-gray-500
                                         transition
                                         hover:border-blue-200
                                         hover:bg-blue-50
                                         hover:text-blue-600"
                              title="Edit skill"
                            >
                              <Pencil size={17} />
                            </button>

                            <button
                              onClick={() =>
                                setDeleteSkill(skill)
                              }
                              className="rounded-lg
                                         border border-gray-200
                                         p-2 text-gray-500
                                         transition
                                         hover:border-red-200
                                         hover:bg-red-50
                                         hover:text-red-600"
                              title="Delete skill"
                            >
                              <Trash2 size={17} />
                            </button>

                          </div>

                        </td>

                      </tr>
                    );
                  })}

                </tbody>

              </table>

            </div>

          )}

        </div>

      </main>


      {/* ========================================== */}
      {/* Edit Modal */}
      {/* ========================================== */}

      {editingSkill && (

        <div
          className="fixed inset-0 z-50
                     flex items-center justify-center
                     bg-black/50 px-4"
        >

          <div
            className="max-h-[90vh] w-full
                       max-w-2xl overflow-y-auto
                       rounded-2xl bg-white shadow-2xl"
          >

            {/* Modal Header */}
            <div
              className="flex items-center
                         justify-between
                         border-b border-gray-200
                         px-6 py-5"
            >

              <div>

                <h2
                  className="text-xl font-bold
                             text-gray-900"
                >
                  Edit Skill
                </h2>

                <p
                  className="mt-1 text-sm
                             text-gray-500"
                >
                  Update skill information.
                </p>

              </div>

              <button
                onClick={() =>
                  setEditingSkill(null)
                }
                className="rounded-lg p-2
                           text-gray-400
                           hover:bg-gray-100
                           hover:text-gray-600"
              >
                <X size={20} />
              </button>

            </div>


            {/* Modal Form */}
            <form
              onSubmit={handleUpdateSkill}
              className="space-y-5 px-6 py-6"
            >

              {/* Name */}
              <div>

                <label
                  className="mb-2 block
                             text-sm font-medium
                             text-gray-700"
                >
                  Skill Name *
                </label>

                <input
                  type="text"
                  value={editingSkill.name}
                  onChange={(e) =>
                    setEditingSkill((prev) => ({
                      ...prev,
                      name: e.target.value,
                    }))
                  }
                  className="w-full rounded-lg
                             border border-gray-300
                             px-4 py-3 outline-none
                             focus:border-blue-500
                             focus:ring-2
                             focus:ring-blue-500/20"
                  required
                />

              </div>


              {/* Category */}
              <div>

                <label
                  className="mb-2 block
                             text-sm font-medium
                             text-gray-700"
                >
                  Category *
                </label>

                <select
                  value={editingSkill.category}
                  onChange={(e) =>
                    setEditingSkill((prev) => ({
                      ...prev,
                      category: e.target.value,
                    }))
                  }
                  className="w-full rounded-lg
                             border border-gray-300
                             bg-white px-4 py-3
                             outline-none
                             focus:border-blue-500"
                >

                  {CATEGORIES
                    .filter(
                      (category) =>
                        category !== "All"
                    )
                    .map((category) => (
                      <option
                        key={category}
                        value={category}
                      >
                        {category}
                      </option>
                    ))}

                </select>

              </div>


              {/* Proficiency */}
              <div>

                <div
                  className="mb-2 flex
                             items-center
                             justify-between"
                >

                  <label
                    className="text-sm
                               font-medium
                               text-gray-700"
                  >
                    Proficiency
                  </label>

                  <span
                    className="text-sm
                               font-bold
                               text-blue-600"
                  >
                    {editingSkill.proficiency}%
                  </span>

                </div>

                <input
                  type="range"
                  min="0"
                  max="100"
                  step="1"
                  value={
                    editingSkill.proficiency ?? 70
                  }
                  onChange={(e) =>
                    setEditingSkill((prev) => ({
                      ...prev,
                      proficiency:
                        Number(e.target.value),
                    }))
                  }
                  className="w-full
                             cursor-pointer
                             accent-blue-600"
                />

                <div
                  className="mt-2 flex
                             justify-between
                             text-xs text-gray-400"
                >
                  <span>0%</span>
                  <span>50%</span>
                  <span>100%</span>
                </div>

              </div>


              {/* Order */}
              <div>

                <label
                  className="mb-2 block
                             text-sm font-medium
                             text-gray-700"
                >
                  Display Order
                </label>

                <input
                  type="number"
                  min="0"
                  value={editingSkill.order ?? 0}
                  onChange={(e) =>
                    setEditingSkill((prev) => ({
                      ...prev,
                      order: Number(e.target.value),
                    }))
                  }
                  className="w-full rounded-lg
                             border border-gray-300
                             px-4 py-3 outline-none
                             focus:border-blue-500"
                />

              </div>


              {/* Description */}
              <div>

                <label
                  className="mb-2 block
                             text-sm font-medium
                             text-gray-700"
                >
                  Description
                </label>

                <textarea
                  rows="4"
                  value={
                    editingSkill.description || ""
                  }
                  onChange={(e) =>
                    setEditingSkill((prev) => ({
                      ...prev,
                      description: e.target.value,
                    }))
                  }
                  className="w-full resize-none
                             rounded-lg
                             border border-gray-300
                             px-4 py-3 outline-none
                             focus:border-blue-500"
                />

              </div>


              {/* Featured */}
              <label
                className="flex cursor-pointer
                           items-center gap-3"
              >

                <input
                  type="checkbox"
                  checked={
                    editingSkill.featured || false
                  }
                  onChange={(e) =>
                    setEditingSkill((prev) => ({
                      ...prev,
                      featured: e.target.checked,
                    }))
                  }
                  className="h-5 w-5 rounded
                             border-gray-300
                             text-blue-600
                             focus:ring-blue-500"
                />

                <span
                  className="text-sm
                             font-medium
                             text-gray-700"
                >
                  Featured Skill
                </span>

              </label>


              {/* Active */}
              <label
                className="flex cursor-pointer
                           items-center gap-3"
              >

                <input
                  type="checkbox"
                  checked={
                    editingSkill.isActive !== false
                  }
                  onChange={(e) =>
                    setEditingSkill((prev) => ({
                      ...prev,
                      isActive: e.target.checked,
                    }))
                  }
                  className="h-5 w-5 rounded
                             border-gray-300
                             text-blue-600
                             focus:ring-blue-500"
                />

                <span
                  className="text-sm
                             font-medium
                             text-gray-700"
                >
                  Active
                </span>

              </label>


              {/* Buttons */}
              <div
                className="flex justify-end gap-3
                           border-t border-gray-200
                           pt-5"
              >

                <button
                  type="button"
                  onClick={() =>
                    setEditingSkill(null)
                  }
                  className="rounded-lg
                             border border-gray-300
                             px-5 py-2.5
                             font-medium
                             text-gray-700
                             hover:bg-gray-50"
                >
                  Cancel
                </button>

                <button
                  type="submit"
                  disabled={saving}
                  className="flex items-center
                             gap-2 rounded-lg
                             bg-blue-600
                             px-5 py-2.5
                             font-semibold
                             text-white
                             hover:bg-blue-700
                             disabled:cursor-not-allowed
                             disabled:opacity-60"
                >

                  <Save size={17} />

                  {saving
                    ? "Saving..."
                    : "Save Changes"}

                </button>

              </div>

            </form>

          </div>

        </div>

      )}


      {/* ========================================== */}
      {/* Delete Confirmation */}
      {/* ========================================== */}

      {deleteSkill && (

        <div
          className="fixed inset-0 z-[60]
                     flex items-center justify-center
                     bg-black/50 px-4"
        >

          <div
            className="w-full max-w-md
                       rounded-2xl bg-white
                       p-6 shadow-2xl"
          >

            <div
              className="flex h-12 w-12
                         items-center justify-center
                         rounded-full bg-red-100
                         text-red-600"
            >
              <Trash2 size={22} />
            </div>

            <h2
              className="mt-5 text-xl
                         font-bold text-gray-900"
            >
              Delete Skill?
            </h2>

            <p
              className="mt-2 text-sm
                         leading-6 text-gray-500"
            >
              Are you sure you want to delete{" "}
              <span className="font-semibold text-gray-800">
                {deleteSkill.name}
              </span>
              ? This action cannot be undone.
            </p>

            <div
              className="mt-6 flex
                         justify-end gap-3"
            >

              <button
                onClick={() =>
                  setDeleteSkill(null)
                }
                className="rounded-lg
                           border border-gray-300
                           px-5 py-2.5
                           font-medium text-gray-700
                           hover:bg-gray-50"
              >
                Cancel
              </button>

              <button
                onClick={handleDeleteSkill}
                disabled={deleting}
                className="rounded-lg
                           bg-red-600
                           px-5 py-2.5
                           font-semibold
                           text-white
                           hover:bg-red-700
                           disabled:cursor-not-allowed
                           disabled:opacity-60"
              >
                {deleting
                  ? "Deleting..."
                  : "Delete Skill"}
              </button>

            </div>

          </div>

        </div>

      )}

    </div>
  );
}

export default ManageSkills;
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import {
  ArrowLeft,
  Save,
  Sparkles,
} from "lucide-react";

function CreateSkill() {
    // Access Vite environment variable with fallback to localhost for safety
  const API_URL = import.meta.env.VITE_API_BASE_URL || "http://localhost:5000"
  const BASE_URL = `${API_URL}/api/skills`
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    category: "Frontend",
    proficiency: 70,
    description: "",
    order: 0,
    featured: false,
    isActive: true,
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]:
        type === "checkbox"
          ? checked
          : name === "proficiency" || name === "order"
          ? Number(value)
          : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setError("");
    setSuccess("");

    if (!formData.name.trim()) {
      setError("Skill name is required.");
      return;
    }

    if (
      formData.proficiency < 0 ||
      formData.proficiency > 100
    ) {
      setError("Proficiency must be between 0 and 100.");
      return;
    }

    try {
      setLoading(true);

      const token = localStorage.getItem("adminToken");

      if (!token) {
        navigate("/admin/login");
        return;
      }

      const skillData = {
        ...formData,
        proficiency: Number(formData.proficiency),
        order: Number(formData.order),
      };

      await axios.post(
        BASE_URL,
        skillData,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      setSuccess("Skill created successfully!");

      setFormData({
        name: "",
        category: "Frontend",
        proficiency: 70,
        description: "",
        order: 0,
        featured: false,
        isActive: true,
      });

    } catch (err) {
      console.error("Error creating skill:", err);

      if (err.response?.status === 401) {
        localStorage.removeItem("adminToken");
        navigate("/admin/login");
        return;
      }

      setError(
        err.response?.data?.message ||
        "Failed to create skill."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100">

      {/* Header */}
      <header className="bg-white border-b border-gray-200">
        <div className="max-w-5xl mx-auto px-6 py-5 flex items-center justify-between">

          <div>
            <h1 className="text-2xl font-bold text-gray-900">
              Create Skill
            </h1>

            <p className="text-sm text-gray-500 mt-1">
              Add a new skill to your portfolio
            </p>
          </div>

          <button
            onClick={() => navigate("/admin/dashboard")}
            className="flex items-center gap-2 px-4 py-2
                       border border-gray-300 rounded-lg
                       text-gray-700 hover:bg-gray-100 transition"
          >
            <ArrowLeft size={18} />
            Dashboard
          </button>

        </div>
      </header>

      {/* Main */}
      <main className="max-w-5xl mx-auto px-6 py-8">

        <div className="bg-white rounded-2xl shadow-sm border border-gray-200">

          {/* Form Header */}
          <div className="px-6 py-5 border-b border-gray-200">

            <div className="flex items-center gap-3">

              <div
                className="w-10 h-10 rounded-lg bg-blue-100
                           flex items-center justify-center"
              >
                <Sparkles
                  size={20}
                  className="text-blue-600"
                />
              </div>

              <div>
                <h2 className="text-lg font-semibold text-gray-900">
                  Skill Information
                </h2>

                <p className="text-sm text-gray-500">
                  Enter the information that will appear on your portfolio.
                </p>
              </div>

            </div>

          </div>

          {/* Messages */}
          <div className="px-6 pt-6">

            {error && (
              <div
                className="mb-5 rounded-lg bg-red-50
                           border border-red-200 px-4 py-3
                           text-sm text-red-700"
              >
                {error}
              </div>
            )}

            {success && (
              <div
                className="mb-5 rounded-lg bg-green-50
                           border border-green-200 px-4 py-3
                           text-sm text-green-700"
              >
                {success}
              </div>
            )}

          </div>

          {/* Form */}
          <form
            onSubmit={handleSubmit}
            className="px-6 pb-8"
          >

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

              {/* Skill Name */}
              <div>
                <label
                  className="block text-sm font-medium
                             text-gray-700 mb-2"
                >
                  Skill Name *
                </label>

                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="e.g. React.js"
                  className="w-full rounded-lg border border-gray-300
                             px-4 py-3 outline-none
                             focus:ring-2 focus:ring-blue-500
                             focus:border-blue-500"
                  required
                />
              </div>

              {/* Category */}
              <div>
                <label
                  className="block text-sm font-medium
                             text-gray-700 mb-2"
                >
                  Category *
                </label>

                <select
                  name="category"
                  value={formData.category}
                  onChange={handleChange}
                  className="w-full rounded-lg border border-gray-300
                             px-4 py-3 bg-white outline-none
                             focus:ring-2 focus:ring-blue-500"
                >
                  <option value="Frontend">
                    Frontend
                  </option>

                  <option value="Backend">
                    Backend
                  </option>

                  <option value="Database">
                    Database
                  </option>

                  <option value="Programming">
                    Programming
                  </option>

                  <option value="Tools">
                    Tools
                  </option>

                  <option value="DevOps">
                    DevOps
                  </option>

                  <option value="Other">
                    Other
                  </option>
                </select>
              </div>

              {/* Proficiency */}
              <div className="md:col-span-2">

                <div className="flex items-center justify-between mb-2">

                  <label
                    className="text-sm font-medium
                               text-gray-700"
                  >
                    Proficiency
                  </label>

                  <span
                    className="text-sm font-semibold
                               text-blue-600"
                  >
                    {formData.proficiency}%
                  </span>

                </div>

                <input
                  type="range"
                  name="proficiency"
                  value={formData.proficiency}
                  onChange={handleChange}
                  min="0"
                  max="100"
                  step="1"
                  className="w-full accent-blue-600 cursor-pointer"
                />

                <div
                  className="flex justify-between
                             text-xs text-gray-400 mt-2"
                >
                  <span>0%</span>
                  <span>25%</span>
                  <span>50%</span>
                  <span>75%</span>
                  <span>100%</span>
                </div>

                <p className="text-xs text-gray-500 mt-3">
                  Set your proficiency level from 0% to 100%.
                </p>

              </div>

              {/* Display Order */}
              <div>
                <label
                  className="block text-sm font-medium
                             text-gray-700 mb-2"
                >
                  Display Order
                </label>

                <input
                  type="number"
                  name="order"
                  value={formData.order}
                  onChange={handleChange}
                  min="0"
                  className="w-full rounded-lg border border-gray-300
                             px-4 py-3 outline-none
                             focus:ring-2 focus:ring-blue-500"
                />

                <p className="text-xs text-gray-500 mt-2">
                  Lower numbers appear first.
                </p>
              </div>

              {/* Description */}
              <div className="md:col-span-2">

                <label
                  className="block text-sm font-medium
                             text-gray-700 mb-2"
                >
                  Description
                </label>

                <textarea
                  name="description"
                  value={formData.description}
                  onChange={handleChange}
                  rows="4"
                  placeholder="Briefly describe your experience with this skill..."
                  className="w-full rounded-lg border border-gray-300
                             px-4 py-3 outline-none resize-none
                             focus:ring-2 focus:ring-blue-500"
                />

              </div>

              {/* Featured */}
              <div className="md:col-span-2">

                <label
                  className="flex items-center gap-3
                             cursor-pointer"
                >

                  <input
                    type="checkbox"
                    name="featured"
                    checked={formData.featured}
                    onChange={handleChange}
                    className="w-5 h-5 rounded border-gray-300
                               text-blue-600 focus:ring-blue-500"
                  />

                  <div>
                    <p className="text-sm font-medium text-gray-800">
                      Featured Skill
                    </p>

                    <p className="text-xs text-gray-500">
                      Highlight this skill in the portfolio.
                    </p>
                  </div>

                </label>

              </div>

              {/* Active */}
              <div className="md:col-span-2">

                <label
                  className="flex items-center gap-3
                             cursor-pointer"
                >

                  <input
                    type="checkbox"
                    name="isActive"
                    checked={formData.isActive}
                    onChange={handleChange}
                    className="w-5 h-5 rounded border-gray-300
                               text-blue-600 focus:ring-blue-500"
                  />

                  <div>
                    <p className="text-sm font-medium text-gray-800">
                      Active
                    </p>

                    <p className="text-xs text-gray-500">
                      Display this skill on the public portfolio.
                    </p>
                  </div>

                </label>

              </div>

            </div>

            {/* Buttons */}
            <div
              className="mt-8 pt-6 border-t border-gray-200
                         flex flex-col sm:flex-row
                         justify-end gap-3"
            >

              <button
                type="button"
                onClick={() => navigate("/admin/dashboard")}
                className="px-5 py-2.5 rounded-lg
                           border border-gray-300
                           text-gray-700 font-medium
                           hover:bg-gray-100 transition"
              >
                Cancel
              </button>

              <button
                type="submit"
                disabled={loading}
                className="flex items-center justify-center
                           gap-2 px-6 py-2.5 rounded-lg
                           bg-blue-600 text-white font-semibold
                           hover:bg-blue-700 transition
                           disabled:opacity-60
                           disabled:cursor-not-allowed"
              >

                <Save size={18} />

                {loading ? "Creating..." : "Create Skill"}

              </button>

            </div>

          </form>

        </div>

      </main>

    </div>
  );
}

export default CreateSkill;
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

import {
  LayoutDashboard,
  FolderKanban,
  Plus,
  LogOut,
  User,
  Wrench,
  ListChecks,
  Contact,
} from "lucide-react";

function AdminDashboard() {
    // Access Vite environment variable with fallback to localhost for safety
  const API_URL = import.meta.env.VITE_API_BASE_URL || "http://localhost:5000"
  const BASE_URL = `${API_URL}/api/project`
  const navigate = useNavigate();

  const [adminEmail, setAdminEmail] = useState("");
  const [projectCount, setProjectCount] = useState(0);

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // ==========================================
  // GET ADMIN INFORMATION FROM JWT
  // ==========================================
  useEffect(() => {
    const token = localStorage.getItem("adminToken");

    if (!token) {
      navigate("/admin/login");
      return;
    }

    try {
      const payload = JSON.parse(atob(token.split(".")[1]));

      setAdminEmail(payload.email || "");
    } catch (error) {
      console.error("Invalid token");

      localStorage.removeItem("adminToken");

      navigate("/admin/login");
    }
  }, [navigate]);

  // ==========================================
  // FETCH PROJECT COUNT
  // ==========================================
  useEffect(() => {
    const fetchProjectCount = async () => {
      try {
        setLoading(true);

        const token = localStorage.getItem("adminToken");

        if (!token) {
          navigate("/admin/login");
          return;
        }

        const response = await axios.get(
          BASE_URL
        );

        setProjectCount(response.data.length || 0);

        setError(null);
      } catch (err) {
        console.error(
          "Error fetching project count:",
          err
        );

        setError("Failed to load project count");

        if (err.response?.status === 401) {
          localStorage.removeItem("adminToken");

          navigate("/admin/login");
        }
      } finally {
        setLoading(false);
      }
    };

    fetchProjectCount();
  }, [navigate]);

  // ==========================================
  // LOGOUT
  // ==========================================
  const handleLogout = () => {
    localStorage.removeItem("adminToken");

    navigate("/admin/login");
  };

  return (
    <div className="min-h-screen bg-gray-100 flex">

      {/* =====================================
          SIDEBAR
      ====================================== */}

      <aside className="w-64 bg-gray-900 text-white min-h-screen hidden md:flex flex-col">

        {/* Logo */}

        <div className="px-6 py-6 border-b border-gray-700">

          <h1 className="text-xl font-bold">
            Portfolio Admin
          </h1>

          <p className="text-gray-400 text-sm mt-1">
            Management Panel
          </p>

        </div>


        {/* Navigation */}

        <nav className="flex-1 px-4 py-6 space-y-2">

          {/* Dashboard */}

          <button
            onClick={() =>
              navigate("/admin/dashboard")
            }
            className="
              w-full
              flex
              items-center
              gap-3
              px-4
              py-3
              rounded-lg
              bg-gray-800
              hover:bg-gray-700
              transition
            "
          >

            <LayoutDashboard size={20} />

            Dashboard

          </button>


          {/* Projects */}

          <button
            onClick={() =>
              navigate("/admin/projects")
            }
            className="
              w-full
              flex
              items-center
              gap-3
              px-4
              py-3
              rounded-lg
              hover:bg-gray-800
              transition
            "
          >

            <FolderKanban size={20} />

            Projects

          </button>


          {/* Add Project */}

          <button
            onClick={() =>
              navigate("/admin/projects")
            }
            className="
              w-full
              flex
              items-center
              gap-3
              px-4
              py-3
              rounded-lg
              hover:bg-gray-800
              transition
            "
          >

            <Plus size={20} />

            Add Project

          </button>


          {/* Skills */}

          <button
            onClick={() =>
              navigate("/admin/skills/manage")
            }
            className="
              w-full
              flex
              items-center
              gap-3
              px-4
              py-3
              rounded-lg
              hover:bg-gray-800
              transition
            "
          >

            <Wrench size={20} />

            Skills

          </button>


          {/* Add Skill */}

          <button
            onClick={() =>
              navigate("/admin/skills/new")
            }
            className="
              w-full
              flex
              items-center
              gap-3
              px-4
              py-3
              rounded-lg
              hover:bg-gray-800
              transition
            "
          >

            <Plus size={20} />

            Add Skill

          </button>


          {/* =================================
              MANAGE CONTACT
          ================================== */}

          <button
            onClick={() =>
              navigate("/admin/contact/manage")
            }
            className="
              w-full
              flex
              items-center
              gap-3
              px-4
              py-3
              rounded-lg
              hover:bg-gray-800
              transition
            "
          >

            <Contact size={20} />

            Manage Contact

          </button>

        </nav>


        {/* Logout */}

        <div className="p-4 border-t border-gray-700">

          <button
            onClick={handleLogout}
            className="
              w-full
              flex
              items-center
              gap-3
              px-4
              py-3
              rounded-lg
              text-red-400
              hover:bg-gray-800
              transition
            "
          >

            <LogOut size={20} />

            Logout

          </button>

        </div>

      </aside>


      {/* =====================================
          MAIN CONTENT
      ====================================== */}

      <main className="flex-1">

        {/* Header */}

        <header
          className="
            bg-white
            border-b
            border-gray-200
            px-6
            py-5
            flex
            items-center
            justify-between
          "
        >

          <div>

            <h2 className="text-2xl font-bold text-gray-800">
              Dashboard
            </h2>

            <p className="text-gray-500 text-sm mt-1">
              Manage your portfolio
            </p>

          </div>


          {/* Admin Information */}

          <div className="flex items-center gap-3">

            <div
              className="
                w-10
                h-10
                rounded-full
                bg-blue-100
                flex
                items-center
                justify-center
              "
            >

              <User
                className="text-blue-600"
                size={20}
              />

            </div>


            <div className="hidden sm:block">

              <p className="text-sm font-semibold text-gray-800">
                Administrator
              </p>

              <p className="text-xs text-gray-500">
                {adminEmail}
              </p>

            </div>

          </div>

        </header>


        {/* =====================================
            DASHBOARD CONTENT
        ====================================== */}

        <section className="p-6">

          {/* Welcome */}

          <div
            className="
              bg-white
              rounded-xl
              shadow-sm
              p-6
              mb-6
            "
          >

            <h3 className="text-xl font-semibold text-gray-800">
              Welcome back 👋
            </h3>

            <p className="text-gray-500 mt-2">
              From here you can manage the projects,
              skills, and contact information displayed
              on your portfolio website.
            </p>

          </div>


          {/* =====================================
              DASHBOARD CARDS
          ====================================== */}

          <div
            className="
              grid
              grid-cols-1
              sm:grid-cols-2
              lg:grid-cols-3
              gap-6
            "
          >

            {/* =================================
                PROJECT STATISTICS
            ================================== */}

            <div
              className="
                bg-white
                rounded-xl
                shadow-sm
                p-6
              "
            >

              <div className="flex items-center justify-between">

                <div>

                  <p className="text-gray-500 text-sm">
                    Total Projects
                  </p>

                  <p className="text-3xl font-bold text-gray-800 mt-2">

                    {loading
                      ? "..."
                      : error
                      ? "Error"
                      : projectCount}

                  </p>

                </div>


                <div
                  className="
                    w-12
                    h-12
                    rounded-lg
                    bg-blue-100
                    flex
                    items-center
                    justify-center
                  "
                >

                  <FolderKanban
                    className="text-blue-600"
                    size={24}
                  />

                </div>

              </div>

            </div>


            {/* =================================
                PROJECTS
            ================================== */}

            <div
              className="
                bg-white
                rounded-xl
                shadow-sm
                p-6
              "
            >

              <p className="text-gray-500 text-sm">
                Projects
              </p>


              {/* Add Project */}

              <button
                onClick={() =>
                  navigate("/admin/projects")
                }
                className="
                  mt-4
                  flex
                  items-center
                  gap-2
                  bg-blue-600
                  hover:bg-blue-700
                  text-white
                  px-4
                  py-2.5
                  rounded-lg
                  transition
                "
              >

                <Plus size={18} />

                Add New Project

              </button>


              {/* Manage Projects */}

              <button
                onClick={() =>
                  navigate("/admin/projects")
                }
                className="
                  mt-3
                  flex
                  items-center
                  gap-2
                  border
                  border-gray-300
                  hover:bg-gray-100
                  text-gray-700
                  px-4
                  py-2.5
                  rounded-lg
                  transition
                "
              >

                <FolderKanban size={18} />

                Manage Projects

              </button>

            </div>


            {/* =================================
                SKILLS
            ================================== */}

            <div
              className="
                bg-white
                rounded-xl
                shadow-sm
                p-6
              "
            >

              <p className="text-gray-500 text-sm">
                Skills
              </p>


              {/* Add Skill */}

              <button
                onClick={() =>
                  navigate("/admin/skills/new")
                }
                className="
                  mt-4
                  flex
                  items-center
                  gap-2
                  bg-green-600
                  hover:bg-green-700
                  text-white
                  px-4
                  py-2.5
                  rounded-lg
                  transition
                "
              >

                <Plus size={18} />

                Add New Skill

              </button>


              {/* Manage Skills */}

              <button
                onClick={() =>
                  navigate("/admin/skills/manage")
                }
                className="
                  mt-3
                  flex
                  items-center
                  gap-2
                  border
                  border-gray-300
                  hover:bg-gray-100
                  text-gray-700
                  px-4
                  py-2.5
                  rounded-lg
                  transition
                "
              >

                <ListChecks size={18} />

                Manage Skills

              </button>

            </div>


            {/* =================================
                CONTACT
            ================================== */}

            <div
              className="
                bg-white
                rounded-xl
                shadow-sm
                p-6
              "
            >

              <p className="text-gray-500 text-sm">
                Contact Information
              </p>


              <p className="text-sm text-gray-400 mt-2">
                Update the contact information
                displayed on your portfolio.
              </p>


              {/* Manage Contact */}

              <button
                onClick={() =>
                  navigate("/admin/contact/manage")
                }
                className="
                  mt-4
                  flex
                  items-center
                  gap-2
                  bg-purple-600
                  hover:bg-purple-700
                  text-white
                  px-4
                  py-2.5
                  rounded-lg
                  transition
                "
              >

                <Contact size={18} />

                Manage Contact

              </button>

            </div>

          </div>

        </section>

      </main>

    </div>
  );
}

export default AdminDashboard;
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

import {
  ArrowLeft,
  Save,
  Mail,
  Phone,
  MapPin,
  Send,
  Contact as ContactIcon,
  Loader2,
  Code2,
  Briefcase,
} from "lucide-react";

    // Access Vite environment variable with fallback to localhost for safety
  const API_URL = import.meta.env.VITE_API_BASE_URL || "http://localhost:5000"
  const BASE_URL = `${API_URL}/api/contact`
function ManageContact() {
  const navigate = useNavigate();

  // --------------------------------------------------
  // Form state
  // --------------------------------------------------

  const [formData, setFormData] = useState({
    email: "",
    phone: "",
    location: "",
    linkedin: "",
    github: "",
    telegram: "",
    isActive: true,
  });

  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);

  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");


  // --------------------------------------------------
  // Get admin token
  // --------------------------------------------------

  const getToken = () => {
    return localStorage.getItem("adminToken");
  };


  // --------------------------------------------------
  // Fetch contact information
  // --------------------------------------------------

  useEffect(() => {
    const fetchContact = async () => {
      try {
        setLoading(true);
        setError("");

        const token = getToken();

        if (!token) {
          navigate("/admin/login");
          return;
        }

        const response = await axios.get(
          `${BASE_URL}/admin`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        const contact = response.data;

        setFormData({
          email: contact.email || "",
          phone: contact.phone || "",
          location: contact.location || "",
          linkedin: contact.linkedin || "",
          github: contact.github || "",
          telegram: contact.telegram || "",
          isActive:
            contact.isActive !== undefined
              ? contact.isActive
              : true,
        });

      } catch (err) {
        console.error(
          "Error fetching contact information:",
          err
        );

        // Unauthorized
        if (err.response?.status === 401) {
          localStorage.removeItem("adminToken");
          navigate("/admin/login");
          return;
        }

        // Contact does not exist
        if (err.response?.status === 404) {
          setError(
            "Contact information has not been configured yet."
          );
        } else {
          setError(
            err.response?.data?.message ||
              "Failed to load contact information."
          );
        }

      } finally {
        setLoading(false);
      }
    };

    fetchContact();
  }, [navigate]);


  // --------------------------------------------------
  // Handle input changes
  // --------------------------------------------------

  const handleChange = (e) => {
    const {
      name,
      value,
      type,
      checked,
    } = e.target;

    setFormData((prev) => ({
      ...prev,

      [name]:
        type === "checkbox"
          ? checked
          : value,
    }));

    // Clear messages when user starts editing
    setError("");
    setSuccess("");
  };


  // --------------------------------------------------
  // Submit / Update
  // --------------------------------------------------

  const handleSubmit = async (e) => {
    e.preventDefault();

    setError("");
    setSuccess("");

    // Basic validation
    if (!formData.email.trim()) {
      setError("Email is required.");
      return;
    }

    try {
      setSaving(true);

      const token = getToken();

      if (!token) {
        navigate("/admin/login");
        return;
      }

      await axios.put(
        BASE_URL,
        formData,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      setSuccess(
        "Contact information updated successfully."
      );

    } catch (err) {
      console.error(
        "Error updating contact information:",
        err
      );

      if (err.response?.status === 401) {
        localStorage.removeItem("adminToken");
        navigate("/admin/login");
        return;
      }

      setError(
        err.response?.data?.message ||
          "Failed to update contact information."
      );

    } finally {
      setSaving(false);
    }
  };


  // --------------------------------------------------
  // Loading
  // --------------------------------------------------

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-100 flex items-center justify-center">

        <div className="flex items-center gap-3 text-gray-600">

          <Loader2
            size={22}
            className="animate-spin"
          />

          <span>
            Loading contact information...
          </span>

        </div>

      </div>
    );
  }


  // --------------------------------------------------
  // Page
  // --------------------------------------------------

  return (
    <div className="min-h-screen bg-gray-100">

      {/* ==================================================
          HEADER
      ================================================== */}

      <header className="bg-white border-b border-gray-200">

        <div
          className="
            max-w-5xl
            mx-auto
            px-6
            py-5
            flex
            items-center
            justify-between
          "
        >

          {/* Title */}

          <div>

            <h1 className="text-2xl font-bold text-gray-900">
              Manage Contact
            </h1>

            <p className="text-sm text-gray-500 mt-1">
              Manage the contact information displayed on your portfolio.
            </p>

          </div>


          {/* Dashboard button */}

          <button
            type="button"
            onClick={() =>
              navigate("/admin/dashboard")
            }
            className="
              flex
              items-center
              gap-2
              px-4
              py-2
              border
              border-gray-300
              rounded-lg
              text-gray-700
              hover:bg-gray-100
              transition
            "
          >

            <ArrowLeft size={18} />

            Dashboard

          </button>

        </div>

      </header>


      {/* ==================================================
          MAIN
      ================================================== */}

      <main className="max-w-5xl mx-auto px-6 py-8">

        <div
          className="
            bg-white
            rounded-2xl
            shadow-sm
            border
            border-gray-200
          "
        >

          {/* ==================================================
              FORM HEADER
          ================================================== */}

          <div className="px-6 py-5 border-b border-gray-200">

            <div className="flex items-center gap-3">

              <div
                className="
                  w-10
                  h-10
                  rounded-lg
                  bg-blue-100
                  flex
                  items-center
                  justify-center
                "
              >

                <ContactIcon
                  size={20}
                  className="text-blue-600"
                />

              </div>


              <div>

                <h2 className="text-lg font-semibold text-gray-900">
                  Contact Information
                </h2>

                <p className="text-sm text-gray-500">
                  Update the information visitors can use to contact you.
                </p>

              </div>

            </div>

          </div>


          {/* ==================================================
              MESSAGES
          ================================================== */}

          <div className="px-6 pt-6">

            {/* Error */}

            {error && (
              <div
                className="
                  mb-5
                  rounded-lg
                  bg-red-50
                  border
                  border-red-200
                  px-4
                  py-3
                  text-sm
                  text-red-700
                "
              >
                {error}
              </div>
            )}


            {/* Success */}

            {success && (
              <div
                className="
                  mb-5
                  rounded-lg
                  bg-green-50
                  border
                  border-green-200
                  px-4
                  py-3
                  text-sm
                  text-green-700
                "
              >
                {success}
              </div>
            )}

          </div>


          {/* ==================================================
              FORM
          ================================================== */}

          <form
            onSubmit={handleSubmit}
            className="px-6 pb-8"
          >

            <div
              className="
                grid
                grid-cols-1
                md:grid-cols-2
                gap-6
              "
            >

              {/* ==================================================
                  EMAIL
              ================================================== */}

              <div>

                <label
                  className="
                    block
                    text-sm
                    font-medium
                    text-gray-700
                    mb-2
                  "
                >
                  Email *
                </label>

                <div className="relative">

                  <Mail
                    size={18}
                    className="
                      absolute
                      left-3
                      top-1/2
                      -translate-y-1/2
                      text-gray-400
                    "
                  />

                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="your@email.com"
                    required
                    className="
                      w-full
                      rounded-lg
                      border
                      border-gray-300
                      pl-10
                      pr-4
                      py-3
                      outline-none
                      focus:ring-2
                      focus:ring-blue-500
                      focus:border-blue-500
                    "
                  />

                </div>

              </div>


              {/* ==================================================
                  PHONE
              ================================================== */}

              <div>

                <label
                  className="
                    block
                    text-sm
                    font-medium
                    text-gray-700
                    mb-2
                  "
                >
                  Phone
                </label>

                <div className="relative">

                  <Phone
                    size={18}
                    className="
                      absolute
                      left-3
                      top-1/2
                      -translate-y-1/2
                      text-gray-400
                    "
                  />

                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+251 9XX XXX XXX"
                    className="
                      w-full
                      rounded-lg
                      border
                      border-gray-300
                      pl-10
                      pr-4
                      py-3
                      outline-none
                      focus:ring-2
                      focus:ring-blue-500
                      focus:border-blue-500
                    "
                  />

                </div>

              </div>


              {/* ==================================================
                  LOCATION
              ================================================== */}

              <div className="md:col-span-2">

                <label
                  className="
                    block
                    text-sm
                    font-medium
                    text-gray-700
                    mb-2
                  "
                >
                  Location
                </label>

                <div className="relative">

                  <MapPin
                    size={18}
                    className="
                      absolute
                      left-3
                      top-1/2
                      -translate-y-1/2
                      text-gray-400
                    "
                  />

                  <input
                    type="text"
                    name="location"
                    value={formData.location}
                    onChange={handleChange}
                    placeholder="Addis Ababa, Ethiopia"
                    className="
                      w-full
                      rounded-lg
                      border
                      border-gray-300
                      pl-10
                      pr-4
                      py-3
                      outline-none
                      focus:ring-2
                      focus:ring-blue-500
                      focus:border-blue-500
                    "
                  />

                </div>

              </div>


              {/* ==================================================
                  LINKEDIN
              ================================================== */}

              <div>

                <label
                  className="
                    block
                    text-sm
                    font-medium
                    text-gray-700
                    mb-2
                  "
                >
                  LinkedIn
                </label>

                <div className="relative">

                  <Briefcase
                    size={18}
                    className="
                      absolute
                      left-3
                      top-1/2
                      -translate-y-1/2
                      text-gray-400
                    "
                  />

                  <input
                    type="url"
                    name="linkedin"
                    value={formData.linkedin}
                    onChange={handleChange}
                    placeholder="https://linkedin.com/in/..."
                    className="
                      w-full
                      rounded-lg
                      border
                      border-gray-300
                      pl-10
                      pr-4
                      py-3
                      outline-none
                      focus:ring-2
                      focus:ring-blue-500
                      focus:border-blue-500
                    "
                  />

                </div>

              </div>


              {/* ==================================================
                  GITHUB
              ================================================== */}

              <div>

                <label
                  className="
                    block
                    text-sm
                    font-medium
                    text-gray-700
                    mb-2
                  "
                >
                  GitHub
                </label>

                <div className="relative">

                  <Code2
                    size={18}
                    className="
                      absolute
                      left-3
                      top-1/2
                      -translate-y-1/2
                      text-gray-400
                    "
                  />

                  <input
                    type="url"
                    name="github"
                    value={formData.github}
                    onChange={handleChange}
                    placeholder="https://github.com/..."
                    className="
                      w-full
                      rounded-lg
                      border
                      border-gray-300
                      pl-10
                      pr-4
                      py-3
                      outline-none
                      focus:ring-2
                      focus:ring-blue-500
                      focus:border-blue-500
                    "
                  />

                </div>

              </div>


              {/* ==================================================
                  TELEGRAM
              ================================================== */}

              <div className="md:col-span-2">

                <label
                  className="
                    block
                    text-sm
                    font-medium
                    text-gray-700
                    mb-2
                  "
                >
                  Telegram
                </label>

                <div className="relative">

                  <Send
                    size={18}
                    className="
                      absolute
                      left-3
                      top-1/2
                      -translate-y-1/2
                      text-gray-400
                    "
                  />

                  <input
                    type="text"
                    name="telegram"
                    value={formData.telegram}
                    onChange={handleChange}
                    placeholder="@yourusername"
                    className="
                      w-full
                      rounded-lg
                      border
                      border-gray-300
                      pl-10
                      pr-4
                      py-3
                      outline-none
                      focus:ring-2
                      focus:ring-blue-500
                      focus:border-blue-500
                    "
                  />

                </div>

                <p className="text-xs text-gray-500 mt-2">
                  Example: @yourusername
                </p>

              </div>


              {/* ==================================================
                  ACTIVE
              ================================================== */}

              <div className="md:col-span-2">

                <label
                  className="
                    flex
                    items-center
                    gap-3
                    cursor-pointer
                  "
                >

                  <input
                    type="checkbox"
                    name="isActive"
                    checked={formData.isActive}
                    onChange={handleChange}
                    className="
                      w-5
                      h-5
                      rounded
                      border-gray-300
                      text-blue-600
                      focus:ring-blue-500
                    "
                  />

                  <div>

                    <p className="text-sm font-medium text-gray-800">
                      Active
                    </p>

                    <p className="text-xs text-gray-500">
                      Display your contact information on the public portfolio.
                    </p>

                  </div>

                </label>

              </div>

            </div>


            {/* ==================================================
                BUTTONS
            ================================================== */}

            <div
              className="
                mt-8
                pt-6
                border-t
                border-gray-200
                flex
                flex-col
                sm:flex-row
                justify-end
                gap-3
              "
            >

              {/* Cancel */}

              <button
                type="button"
                onClick={() =>
                  navigate("/admin/dashboard")
                }
                className="
                  px-5
                  py-2.5
                  rounded-lg
                  border
                  border-gray-300
                  text-gray-700
                  font-medium
                  hover:bg-gray-100
                  transition
                "
              >
                Cancel
              </button>


              {/* Save */}

              <button
                type="submit"
                disabled={saving}
                className="
                  flex
                  items-center
                  justify-center
                  gap-2
                  px-6
                  py-2.5
                  rounded-lg
                  bg-blue-600
                  text-white
                  font-semibold
                  hover:bg-blue-700
                  transition
                  disabled:opacity-60
                  disabled:cursor-not-allowed
                "
              >

                {saving ? (
                  <>
                    <Loader2
                      size={18}
                      className="animate-spin"
                    />

                    Saving...
                  </>
                ) : (
                  <>
                    <Save size={18} />

                    Save Changes
                  </>
                )}

              </button>

            </div>

          </form>

        </div>

      </main>

    </div>
  );
}

export default ManageContact;
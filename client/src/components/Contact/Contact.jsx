import { useEffect, useState } from "react";
import axios from "axios";
import {
  Mail,
  Phone,
  MapPin,
  Code2,
  Send,
  ArrowUpRight,
  MessageCircle,
  BriefcaseBusiness,
} from "lucide-react";
// --------------------------------------------------
// Contact Item
// --------------------------------------------------

const ContactItem = ({
  icon: Icon,
  label,
  value,
  href,
}) => {
  if (!value) return null;

  const isExternalLink = href?.startsWith("http");

  return (
    <a
      href={href}
      target={isExternalLink ? "_blank" : undefined}
      rel={
        isExternalLink
          ? "noopener noreferrer"
          : undefined
      }
      className="
        group
        flex
        items-center
        gap-4
        rounded-xl
        border
        border-slate-800
        bg-slate-900/70
        p-4
        transition-all
        duration-300
        hover:-translate-y-0.5
        hover:border-slate-700
        hover:bg-slate-900
      "
    >
      {/* Icon */}

      <div
        className="
          flex
          h-11
          w-11
          shrink-0
          items-center
          justify-center
          rounded-lg
          bg-blue-500/10
          text-blue-400
          transition
          group-hover:bg-blue-500/20
          group-hover:text-blue-300
        "
      >
        <Icon size={20} />
      </div>


      {/* Content */}

      <div className="min-w-0 flex-1">

        <p
          className="
            text-xs
            font-medium
            uppercase
            tracking-wider
            text-slate-500
          "
        >
          {label}
        </p>

        <p
          className="
            mt-1
            truncate
            text-sm
            font-medium
            text-slate-200
            transition-colors
            group-hover:text-blue-400
          "
        >
          {value}
        </p>

      </div>


      {/* Arrow */}

      <ArrowUpRight
        size={17}
        className="
          shrink-0
          text-slate-600
          transition
          group-hover:text-blue-400
        "
      />

    </a>
  );
};


// --------------------------------------------------
// Contact Component
// --------------------------------------------------

export default function Contact() {

    // Access Vite environment variable with fallback to localhost for safety
  const API_URL = import.meta.env.VITE_API_BASE_URL || "http://localhost:5000"
  const BASE_URL = `${API_URL}/api/contact`
  const [contact, setContact] = useState(null);

  const [loading, setLoading] = useState(true);

  const [error, setError] = useState("");


  // --------------------------------------------------
  // Fetch Contact Information
  // --------------------------------------------------

  useEffect(() => {

    const fetchContact = async () => {

      try {

        setLoading(true);
        setError("");

        const response = await axios.get(
          BASE_URL
        );
        console.log(response)

        setContact(response.data);

      } catch (err) {

        console.error(
          "Error fetching contact information:",
          err
        );

        setError(
          "Unable to load contact information."
        );

      } finally {

        setLoading(false);

      }

    };

    fetchContact();

  }, []);


  // --------------------------------------------------
  // Loading State
  // --------------------------------------------------

  if (loading) {

    return (
      <section
        id="contact"
        className="
          border-t
          border-slate-800/80
          bg-slate-950
          py-24
        "
      >

        <div
          className="
            mx-auto
            max-w-6xl
            px-6
          "
        >

          <div className="animate-pulse">

            {/* Badge */}

            <div
              className="
                mx-auto
                h-6
                w-24
                rounded-full
                bg-slate-800
              "
            />

            {/* Heading */}

            <div
              className="
                mx-auto
                mt-4
                h-10
                max-w-md
                rounded-lg
                bg-slate-800
              "
            />

            {/* Description */}

            <div
              className="
                mx-auto
                mt-4
                h-5
                max-w-xl
                rounded-lg
                bg-slate-800
              "
            />

          </div>

        </div>

      </section>
    );

  }


  // --------------------------------------------------
  // Error State
  // --------------------------------------------------

  if (error) {

    return (
      <section
        id="contact"
        className="
          border-t
          border-slate-800/80
          bg-slate-950
          py-24
        "
      >

        <div className="mx-auto max-w-md px-6">

          <div
            className="
              rounded-2xl
              border
              border-red-500/20
              bg-red-500/10
              p-6
              text-center
            "
          >

            <MessageCircle
              size={28}
              className="
                mx-auto
                text-red-400
              "
            />

            <p
              className="
                mt-3
                font-medium
                text-red-400
              "
            >
              {error}
            </p>

          </div>

        </div>

      </section>
    );

  }


  // --------------------------------------------------
  // No Contact Information
  // --------------------------------------------------

  if (!contact) {

    return (
      <section
        id="contact"
        className="
          border-t
          border-slate-800/80
          bg-slate-950
          py-24
        "
      >

        <div
          className="
            mx-auto
            max-w-6xl
            px-6
            text-center
          "
        >

          <p className="text-slate-500">
            Contact information is currently unavailable.
          </p>

        </div>

      </section>
    );

  }


  // --------------------------------------------------
  // Contact Links
  // --------------------------------------------------

  const emailHref = contact.email
    ? `mailto:${contact.email}`
    : undefined;


  const phoneHref = contact.phone
    ? `tel:${contact.phone.replace(/\s+/g, "")}`
    : undefined;


  const linkedinHref = contact.linkedin
    ? contact.linkedin
    : undefined;


  const githubHref = contact.github
    ? contact.github
    : undefined;


  // Remove @ if admin entered @username

  const telegramUsername = contact.telegram
    ? contact.telegram.replace(/^@/, "")
    : "";


  const telegramHref = telegramUsername
    ? `https://t.me/${telegramUsername}`
    : undefined;


  return (

    <section
      id="contact"
      className="
        relative
        border-t
        border-slate-800/80
        bg-slate-950
        py-24
      "
    >

      <div
        className="
          mx-auto
          max-w-6xl
          px-6
        "
      >

        {/* ======================================== */}
        {/* Heading */}
        {/* ======================================== */}

        <div className="text-center">

          <span
            className="
              inline-block
              rounded-full
              border
              border-blue-500/20
              bg-blue-500/10
              px-3.5
              py-1
              text-xs
              font-semibold
              uppercase
              tracking-wider
              text-blue-400
            "
          >
            CONTACT
          </span>


          <h2
            className="
              mt-3
              text-4xl
              font-extrabold
              tracking-tight
              text-slate-100
              sm:text-5xl
            "
          >
            Let's Connect
          </h2>


          <p
            className="
              mx-auto
              mt-4
              max-w-2xl
              text-lg
              leading-8
              text-slate-400
            "
          >
            Feel free to reach out through any of
            the channels below.
          </p>

        </div>


        {/* ======================================== */}
        {/* Main Content */}
        {/* ======================================== */}

        <div
          className="
            mx-auto
            mt-14
            grid
            max-w-4xl
            gap-8
            lg:grid-cols-2
          "
        >

          {/* ====================================== */}
          {/* Introduction */}
          {/* ====================================== */}

          <div
            className="
              relative
              overflow-hidden
              rounded-2xl
              border
              border-slate-800
              bg-slate-900/80
              p-8
              shadow-xl
            "
          >

            {/* Decorative circle */}

            <div
              className="
                pointer-events-none
                absolute
                -right-16
                -top-16
                h-40
                w-40
                rounded-full
                bg-blue-500/10
                blur-3xl
              "
            />


            <div className="relative">

              {/* Icon */}

              <div
                className="
                  flex
                  h-12
                  w-12
                  items-center
                  justify-center
                  rounded-xl
                  bg-blue-500/10
                  text-blue-400
                "
              >
                <MessageCircle size={24} />
              </div>


              <h3
                className="
                  mt-6
                  text-2xl
                  font-bold
                  text-slate-100
                "
              >
                Get in Touch
              </h3>


              <p
                className="
                  mt-4
                  leading-7
                  text-slate-400
                "
              >
                Whether you have a project idea,
                professional opportunity, or simply
                want to connect, feel free to reach
                out through any of the contact channels.
              </p>


              {/* Location */}

              {contact.location && (

                <div
                  className="
                    mt-7
                    flex
                    items-center
                    gap-3
                    text-sm
                    text-slate-400
                  "
                >

                  <MapPin
                    size={18}
                    className="text-blue-400"
                  />

                  <span>
                    {contact.location}
                  </span>

                </div>

              )}

            </div>

          </div>


          {/* ====================================== */}
          {/* Contact Information */}
          {/* ====================================== */}

          <div className="space-y-3">

            {/* Email */}

            <ContactItem
              icon={Mail}
              label="Email"
              value={contact.email}
              href={emailHref}
            />


            {/* Phone */}

            <ContactItem
              icon={Phone}
              label="Phone"
              value={contact.phone}
              href={phoneHref}
            />


            {/* Location */}

            <ContactItem
              icon={MapPin}
              label="Location"
              value={contact.location}
              href="#contact"
            />


            {/* LinkedIn */}

            <ContactItem
              icon={BriefcaseBusiness}
              label="LinkedIn"
              value={contact.linkedin}
              href={linkedinHref}
            />


            {/* GitHub */}

            <ContactItem
              icon={Code2}
              label="GitHub"
              value={contact.github}
              href={githubHref}
            />


            {/* Telegram */}

            <ContactItem
              icon={Send}
              label="Telegram"
              value={contact.telegram}
              href={telegramHref}
            />

          </div>

        </div>


        {/* ======================================== */}
        {/* Bottom */}
        {/* ======================================== */}

        <div
          className="
            mx-auto
            mt-10
            max-w-4xl
            text-center
          "
        >

          <p
            className="
              text-sm
              text-slate-500
            "
          >
            Thank you for visiting my portfolio.
          </p>

        </div>

      </div>

    </section>

  );
}
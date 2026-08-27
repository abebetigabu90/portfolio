import { useEffect, useState } from "react";
import {
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
} from "lucide-react";

import { getSkills } from "../../services/skillApi";


// --------------------------------------------------
// Skill icon matching
// --------------------------------------------------

const getSkillIcon = (skillName, category) => {
  const name = skillName.toLowerCase();

  // React
  if (name.includes("react")) {
    return Code2;
  }

  // JavaScript / TypeScript
  if (
    name.includes("javascript") ||
    name.includes("typescript")
  ) {
    return Braces;
  }

  // HTML / CSS / Tailwind
  if (
    name.includes("html") ||
    name.includes("css") ||
    name.includes("tailwind")
  ) {
    return Code2;
  }

  // Backend
  if (
    name.includes("node") ||
    name.includes("express") ||
    name.includes("api") ||
    name.includes("backend")
  ) {
    return Server;
  }

  // Database
  if (
    name.includes("mongo") ||
    name.includes("mysql") ||
    name.includes("postgres") ||
    name.includes("sql") ||
    name.includes("database")
  ) {
    return Database;
  }

  // Git / GitHub
  if (
    name.includes("git") ||
    name.includes("github")
  ) {
    return GitBranch;
  }

  // Terminal / Linux
  if (
    name.includes("linux") ||
    name.includes("terminal") ||
    name.includes("command")
  ) {
    return Terminal;
  }

  // Programming languages
  if (
    name.includes("c++") ||
    name.includes("c#") ||
    name.includes("java") ||
    name.includes("python") ||
    name.includes("php")
  ) {
    return Braces;
  }

  // Cloud
  if (
    name.includes("cloud") ||
    name.includes("aws") ||
    name.includes("azure")
  ) {
    return Cloud;
  }

  // Security
  if (
    name.includes("security") ||
    name.includes("cyber")
  ) {
    return ShieldCheck;
  }

  // DevOps
  if (
    name.includes("docker") ||
    name.includes("devops")
  ) {
    return Boxes;
  }

  // Category fallbacks
  if (category === "Tools") {
    return Wrench;
  }

  if (category === "Backend") {
    return Server;
  }

  if (category === "Database") {
    return Database;
  }

  if (category === "Frontend") {
    return Globe;
  }

  if (category === "Programming") {
    return Braces;
  }

  if (category === "DevOps") {
    return Boxes;
  }

  return Circle;
};


// --------------------------------------------------
// Progress color
// --------------------------------------------------

const getProgressStyle = (percentage) => {
  if (percentage >= 90) {
    return {
      bar: "bg-blue-500",
      text: "text-blue-400",
    };
  }

  if (percentage >= 70) {
    return {
      bar: "bg-purple-500",
      text: "text-purple-400",
    };
  }

  if (percentage >= 50) {
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
// Component
// --------------------------------------------------

export default function Skills() {
  const [skills, setSkills] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadSkills = async () => {
      try {
        const data = await getSkills();

        // Only show active skills
        const activeSkills = data.filter(
          (skill) => skill.isActive !== false
        );

        // Sort by display order
        const sortedSkills = [...activeSkills].sort(
          (a, b) => (a.order || 0) - (b.order || 0)
        );

        setSkills(sortedSkills);
      } catch (err) {
        console.error(err);
        setError("Unable to load skills.");
      }
    };

    loadSkills();
  }, []);


  // --------------------------------------------------
  // Error
  // --------------------------------------------------

  if (error) {
    return (
      <section
        id="skills"
        className="bg-slate-950 py-24"
      >
        <div className="mx-auto max-w-md px-6 text-center">

          <div
            className="rounded-2xl border border-red-500/20
                       bg-red-500/10 p-6"
          >
            <p className="font-medium text-red-400">
              {error}
            </p>
          </div>

        </div>
      </section>
    );
  }


  return (
    <section
      id="skills"
      className="relative border-t border-slate-800/80
                 bg-slate-900/50 py-24"
    >

      <div className="mx-auto max-w-6xl px-6">

        {/* ---------------------------------------- */}
        {/* Heading */}
        {/* ---------------------------------------- */}

        <div className="text-center">

          <span
            className="inline-block rounded-full
                       border border-blue-500/20
                       bg-blue-500/10 px-3.5 py-1
                       text-xs font-semibold uppercase
                       tracking-wider text-blue-400"
          >
            MY SKILLS
          </span>

          <h2
            className="mt-3 text-4xl font-extrabold
                       tracking-tight text-slate-100
                       sm:text-5xl"
          >
            Technologies I Work With
          </h2>

          <p
            className="mx-auto mt-4 max-w-2xl
                       text-lg text-slate-400"
          >
            Technologies and tools I use to build modern,
            reliable and user-focused software applications.
          </p>

        </div>


        {/* ---------------------------------------- */}
        {/* Empty state */}
        {/* ---------------------------------------- */}

        {skills.length === 0 ? (

          <div
            className="mt-16 rounded-2xl
                       border border-dashed border-slate-800
                       py-16 text-center"
          >
            <p className="font-medium text-slate-500">
              No skills available.
            </p>
          </div>

        ) : (

          /* ---------------------------------------- */
          /* Skills grid */
          /* ---------------------------------------- */

          <div
            className="mt-16 grid gap-6
                       sm:grid-cols-2 lg:grid-cols-3"
          >

            {skills.map((skill) => {

              // Automatically select icon
              const Icon = getSkillIcon(
                skill.name,
                skill.category
              );

              // Use actual proficiency from database
              const percentage = Math.min(
                100,
                Math.max(
                  0,
                  Number(skill.proficiency) || 0
                )
              );

              const progressStyle =
                getProgressStyle(percentage);


              return (
                <article
                  key={skill._id}
                  className="
                    group
                    rounded-2xl
                    border
                    border-slate-800
                    bg-slate-900/90
                    p-6
                    shadow-xl
                    transition-all
                    duration-300
                    hover:-translate-y-1
                    hover:border-slate-700
                    hover:shadow-2xl
                  "
                >

                  {/* -------------------------------- */}
                  {/* Top */}
                  {/* -------------------------------- */}

                  <div
                    className="flex items-start
                               justify-between gap-4"
                  >

                    <div className="flex items-center gap-4">

                      {/* Icon */}
                      <div
                        className="
                          flex
                          h-12
                          w-12
                          shrink-0
                          items-center
                          justify-center
                          rounded-xl
                          bg-blue-500/10
                          text-blue-400
                          transition
                          group-hover:bg-blue-500/20
                          group-hover:text-blue-300
                        "
                      >
                        <Icon size={25} />
                      </div>


                      {/* Name */}
                      <div>

                        <h3
                          className="
                            text-xl
                            font-bold
                            text-slate-100
                            transition-colors
                            group-hover:text-blue-400
                          "
                        >
                          {skill.name}
                        </h3>

                        <p
                          className="
                            mt-1
                            text-sm
                            font-medium
                            text-slate-400
                          "
                        >
                          {skill.category}
                        </p>

                      </div>

                    </div>


                    {/* Featured */}
                    {skill.featured && (
                      <span
                        className="
                          rounded-full
                          bg-amber-500/90
                          px-2.5
                          py-0.5
                          text-xs
                          font-semibold
                          text-slate-950
                          shadow-sm
                        "
                        title="Featured skill"
                      >
                        ★
                      </span>
                    )}

                  </div>


                  {/* -------------------------------- */}
                  {/* Description */}
                  {/* -------------------------------- */}

                  {skill.description && (
                    <p
                      className="
                        mt-5
                        text-sm
                        leading-6
                        text-slate-400
                      "
                    >
                      {skill.description}
                    </p>
                  )}


                  {/* -------------------------------- */}
                  {/* Proficiency */}
                  {/* -------------------------------- */}

                  <div className="mt-6">

                    <div
                      className="flex items-center
                                 justify-between"
                    >

                      <span
                        className="
                          text-xs
                          font-medium
                          uppercase
                          tracking-wider
                          text-slate-500
                        "
                      >
                        Proficiency
                      </span>

                      <span
                        className={`text-sm font-bold
                          ${progressStyle.text}`}
                      >
                        {percentage}%
                      </span>

                    </div>


                    {/* Progress bar */}
                    <div
                      className="
                        mt-2
                        h-2
                        w-full
                        overflow-hidden
                        rounded-full
                        bg-slate-950
                      "
                    >

                      <div
                        className={`
                          h-full
                          rounded-full
                          transition-all
                          duration-700
                          ${progressStyle.bar}
                        `}
                        style={{
                          width: `${percentage}%`,
                        }}
                      />

                    </div>

                  </div>

                </article>
              );
            })}

          </div>
        )}

      </div>

    </section>
  );
}
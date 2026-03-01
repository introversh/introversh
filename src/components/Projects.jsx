import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const projects = [
  {
    title: "Campus LF – Smart Campus Lost & Found System",
    description:
      "Full-stack multi-role campus platform (Students, Faculty, Security, Admin) featuring AI-assisted smart matching, real-time chat, structured claims workflow, and admin analytics dashboard.",
    tech: [
      "NestJS",
      "Prisma",
      "PostgreSQL",
      "Redis",
      "React",
      "TypeScript",
      "Tailwind",
      "Socket.IO",
      "Redux",
      "Docker"
    ],
    github: "https://github.com/introversh/Campus-L-F",
    live: "https://campuslf.vercel.app"
  },
  {
    title: "Abstract – NLP Summarisation Web App",
    description:
      "End-to-end abstractive text summarisation web application powered by BART with optimized inference workflow and cloud deployment.",
    tech: [
      "React",
      "Node.js",
      "Express",
      "Python",
      "Hugging Face Transformers",
      "BART",
      "PyTorch"
    ],
    github: "https://github.com/introversh/Abstract",
    live: "https://abstract-nlp.onrender.com"
  },
  {
    title: "NYX – Real-Time Chat Application",
    description:
      "Production-ready MERN stack chat application with low-latency real-time messaging, JWT authentication, and media sharing.",
    tech: [
      "MongoDB",
      "Express",
      "React",
      "Node.js",
      "Socket.IO",
      "JWT",
      "Bcrypt",
      "Axios"
    ],
    github: "https://github.com/introversh/Nyx",
    live: "https://chatwithnyx.onrender.com"
  },
  {
    title: "Portfolio Website",
    description:
      "Space-themed personal portfolio focused on clean UI, performance optimization, and fluid motion design.",
    tech: ["React", "Tailwind", "Framer Motion"],
    github: "https://github.com/introversh/introversh",
    live: "https://introversh.netlify.app"
  }
];

const INITIAL_COUNT = 2;
const LOAD_COUNT = 2;

const Projects = ({ animateKey }) => {
  const [visibleCount, setVisibleCount] = useState(INITIAL_COUNT);

  const visibleProjects = projects.slice(0, visibleCount);
  const hasMore = visibleCount < projects.length;

  const loadMore = () => {
    setVisibleCount((prev) => prev + LOAD_COUNT);
  };

  return (
    <section
      id="projects"
      key={animateKey}
      className="bg-primary px-6 pt-32"
    >
      {/* Section heading */}
      <div className="mb-14 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl font-semibold text-secondary"
        >
          Projects
        </motion.h2>

        <motion.span
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.5, ease: "easeOut", delay: 0.1 }}
          className="mx-auto mt-3 block h-[2px] w-16 origin-left bg-secondary"
        />
      </div>

      {/* Project grid */}
      <div className="mx-auto grid max-w-5xl gap-8 md:grid-cols-2">
        <AnimatePresence>
          {visibleProjects.map((project, idx) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              whileHover={{ y: -6 }}
              className="rounded-2xl border border-secondary/60 bg-primary p-6"
            >
              <h3 className="mb-2 text-xl font-medium text-secondary">
                {project.title}
              </h3>

              <p className="mb-5 text-sm leading-relaxed text-secondary/70">
                {project.description}
              </p>

              <div className="mb-6 flex flex-wrap gap-2">
                {project.tech.map((t, i) => (
                  <span
                    key={i}
                    className="rounded-full border border-secondary/40 px-3 py-1 text-xs text-secondary"
                  >
                    {t}
                  </span>
                ))}
              </div>

              <div className="flex gap-6">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 text-sm text-secondary hover:opacity-70"
                >
                  <FaGithub />
                  Code
                </a>

                <a
                  href={project.live}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 text-sm text-secondary hover:opacity-70"
                >
                  <FaExternalLinkAlt />
                  Live
                </a>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      {/* Explore Button */}
      {hasMore && (
        <div className="flex justify-center pt-10">
          <button
            onClick={loadMore}
            className="rounded-full border-2 border-secondary px-6 py-3 text-sm text-secondary transition hover:bg-secondary hover:text-primary"
          >
            Explore my projects ↓
          </button>
        </div>
      )}
    </section>
  );
};

export default Projects;
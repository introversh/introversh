import React from "react";
import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const projects = [
  {
    title: "Portfolio Website",
    description:
      "A space-themed personal portfolio focused on clean UI, motion, and performance.",
    tech: ["React", "Tailwind", "Framer Motion"],
    github: "#",
    live: "#",
  },
  {
    title: "MERN Blog Platform",
    description:
      "Full-stack blogging platform with authentication, markdown editor, and admin control.",
    tech: ["MongoDB", "Express", "React", "Node"],
    github: "#",
    live: "#",
  },
];

const Projects = ({ animateKey }) => {
  return (
    <section
      id="projects"
      key={animateKey}   // 👈 THIS is the magic
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

        {/* Chef’s kiss underline ✨ */}
        <motion.span
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.5, ease: "easeOut", delay: 0.1 }}
          className="mx-auto mt-3 block h-[2px] w-16 origin-left bg-secondary"
        />
      </div>

      {/* Project grid */}
      <div className="mx-auto grid max-w-5xl gap-8 md:grid-cols-2">
        {projects.map((project, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
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
      </div>
    </section>
  );
};

export default Projects;

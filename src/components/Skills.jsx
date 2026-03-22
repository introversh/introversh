import React from "react";
import { motion } from "framer-motion";

const skills = [
  {
    category: "Languages",
    items: ["JavaScript", "TypeScript", "Python", "SQL", "C++", "C"]
  },
  {
    category: "Frontend",
    items: ["React", "Next.js", "Tailwind CSS", "Redux", "Framer Motion"]
  },
  {
    category: "Backend",
    items: ["Node.js", "Express", "Fastify", "NestJS"]
  },
  {
    category: "Databases",
    items: ["PostgreSQL", "MongoDB", "Redis"]
  },
  {
    category: "DevOps & Infrastructure",
    items: ["Docker", "NGINX", "BullMQ"]
  },
  {
    category: "AI / Machine Learning",
    items: ["PyTorch", "Transformers", "BART", "Hugging Face"]
  },
  {
    category: "Core Engineering",
    items: [
      "REST APIs",
      "Auth Systems",
      "RBAC",
      "Caching",
      "System Design"
    ]
  },{
    category: "Tools & Ecosystem",
    items: [
      "Git",
      "GitHub",
      "Postman",
      "Prisma",
      "Vercel",
      "Render"
    ]
  }
];

const Skills = ({ animateKey }) => {
  return (
    <section
      id="skills"
      key={animateKey}
      className="bg-primary px-6 pt-32"
    >
      {/* Heading */}
      <div className="mb-14 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl font-semibold text-secondary"
        >
          Skills
        </motion.h2>

        <motion.span
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.5, ease: "easeOut", delay: 0.1 }}
          className="mx-auto mt-3 block h-[2px] w-16 origin-left bg-secondary"
        />
      </div>

      {/* Grid */}
      <div className="mx-auto grid max-w-5xl gap-8 md:grid-cols-2">
        {skills.map((group, idx) => (
          <motion.div
            key={group.category}
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
            whileHover={{ y: -6 }}
            className="rounded-2xl border border-secondary/60 bg-primary p-6"
          >
            <h3 className="mb-4 text-lg font-medium text-secondary">
              {group.category}
            </h3>

            <div className="flex flex-wrap gap-2">
              {group.items.map((skill, i) => (
                <span
                  key={i}
                  className="rounded-full border border-secondary/40 px-3 py-1 text-xs text-secondary"
                >
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
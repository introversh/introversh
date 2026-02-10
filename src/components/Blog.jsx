import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";

// 👉 Later you can move this to /data/blogs.js
const blogs = [
  {
    slug: "how-to-not-be-an-average-student",
    title: "How I’m Trying Not to Be an Average Student",
    excerpt:
      "Average feels safe, but staying there slowly builds regret. This is my honest journey of choosing growth over comfort.",
    date: "Feb 6, 2026",
    tags: ["College Life", "Self Growth", "Mindset"],
  },
  {
    slug: "third-year-btech-depression-and-career-fear",
    title: "Third Year B.Tech Depression and Career Fear",
    excerpt:
      "By third year, the pressure hits differently. Confusion, comparison, and fear about the future — and how I’m learning to fight back.",
    date: "Feb 5, 2026",
    tags: ["Mental Health", "B.Tech", "Career"],
  },
  {
    slug: "starting-my-blogging-journey",
    title: "Starting My Blogging Journey",
    excerpt:
      "This is my first step into blogging — sharing experiences, fears, lessons, and growth as a student trying to figure life out.",
    date: "Feb 4, 2026",
    tags: ["Personal", "Blogging", "Journey"],
  },
];

const INITIAL_COUNT = 2;
const LOAD_COUNT = 1;

const Blogs = ({ animateKey }) => {
  const [visibleCount, setVisibleCount] = useState(INITIAL_COUNT);

  const visibleBlogs = blogs.slice(0, visibleCount);
  const hasMore = visibleCount < blogs.length;

  const loadMore = () => {
    setVisibleCount((prev) => prev + LOAD_COUNT);
  };

  return (
    <section
      id="blogs"
      key={animateKey}   // 👈 force re-mount = replay animations
      className="bg-primary px-6 pt-28"
    >
      {/* Section heading */}
      <div className="mb-12 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl font-semibold text-secondary"
        >
          Blog
        </motion.h2>

        {/* Chef’s kiss underline ✨ */}
        <motion.span
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.5, ease: "easeOut", delay: 0.1 }}
          className="mx-auto mt-3 block h-[2px] w-16 origin-left bg-secondary"
        />
      </div>

      <div className="mx-auto max-w-4xl space-y-8">
        <AnimatePresence>
          {visibleBlogs.map((blog, idx) => (
            <motion.div
              key={blog.slug}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
            >
              <Link to={`/blog/${blog.slug}`} className="block">
                <BlogCard {...blog} />
              </Link>
            </motion.div>
          ))}
        </AnimatePresence>

        {/* Explore Button */}
        {hasMore && (
          <div className="flex justify-center pt-6">
            <button
              onClick={loadMore}
              className="rounded-full border-2 border-secondary px-6 py-3 text-sm text-secondary transition hover:bg-secondary hover:text-primary"
            >
              Explore my blogs ↓
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

const BlogCard = ({ title, excerpt, date, tags }) => {
  return (
    <motion.article
      whileHover={{ y: -4 }}
      transition={{ type: "spring", stiffness: 300, damping: 22 }}
      className="rounded-2xl border-2 border-secondary bg-primary p-6"
    >
      <div className="mb-2 flex items-center justify-between">
        <span className="text-sm text-secondary/60">{date}</span>
        <FaArrowRight className="text-secondary/50" />
      </div>

      <h3 className="mb-3 text-xl font-medium text-secondary">
        {title}
      </h3>

      <p className="mb-4 text-sm text-secondary/70">{excerpt}</p>

      <div className="flex flex-wrap gap-2">
        {tags.map((tag, i) => (
          <span
            key={i}
            className="rounded-full border border-secondary px-3 py-1 text-xs text-secondary"
          >
            {tag}
          </span>
        ))}
      </div>
    </motion.article>
  );
};

export default Blogs;

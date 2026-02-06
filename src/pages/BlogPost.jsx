import React, { useEffect, useRef, useMemo } from "react";
import { useParams, Navigate } from "react-router-dom";
import { motion } from "framer-motion";
import blogs from "../data/blogs";

// helper to extract text from JSX
const extractText = (node) => {
  if (typeof node === "string") return node;
  if (Array.isArray(node)) return node.map(extractText).join(" ");
  if (node?.props?.children) return extractText(node.props.children);
  return "";
};

const BlogPost = () => {
  const { slug } = useParams();
  const headerRef = useRef(null);

  const blog = blogs.find((b) => b.slug === slug);
  if (!blog) return <Navigate to="/blogs" />;

  // reading time (200 words/min)
  const readingTime = useMemo(() => {
    const text = extractText(blog.content);
    const words = text.trim().split(/\s+/).length;
    return Math.max(1, Math.ceil(words / 200));
  }, [blog]);

  useEffect(() => {
    if (headerRef.current) {
      const navbarHeight = 96;
      const headerTop = headerRef.current.offsetTop;
      window.scrollTo({
        top: headerTop - navbarHeight - 16,
        behavior: "smooth",
      });
    }
  }, [slug]);

  return (
    <section className="min-h-screen bg-primary pt-28">
      <motion.header
        ref={headerRef}
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="mx-auto mb-14 max-w-3xl px-6"
      >
        <p className="mb-2 text-sm text-secondary/60">
          {blog.date} · {readingTime} min read
        </p>

        <h1 className="mb-6 text-4xl font-semibold text-secondary">
          {blog.title}
        </h1>

        <div className="flex flex-wrap gap-2">
          {blog.tags.map((tag, i) => (
            <span
              key={i}
              className="rounded-full border border-secondary px-3 py-1 text-xs text-secondary"
            >
              {tag}
            </span>
          ))}
        </div>
      </motion.header>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="mx-auto mb-16 max-w-3xl px-6"
      >
        <img
          src={blog.image}
          alt={blog.title}
          className="h-[360px] w-full rounded-lg object-cover"
        />
      </motion.div>

      <motion.article
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.1 }}
        className="mx-auto max-w-3xl space-y-6 px-6 text-secondary/80 leading-relaxed"
      >
        {blog.content}
      </motion.article>
    </section>
  );
};

export default BlogPost;

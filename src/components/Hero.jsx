import React, { createElement, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import Typed from "typed.js";

const Hero = () => {
  const typedRef = useRef(null);

  useEffect(() => {
    const typed = new Typed(typedRef.current, {
      strings: [
        "Currently building thoughtful web experiences.",
        "Currently exploring motion, performance, and clean UI.",
        "Currently turning ideas into usable interfaces.",
        "Currently building.",
      ],
      typeSpeed: 35,
      backSpeed: 20,
      backDelay: 1800,
      loop: true,
      showCursor: false,
    });

    return () => typed.destroy();
  }, []);

  // 👇 ONLY NEW CODE (minimal & clean)
  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
    });
  };
const handleDownload=()=>{
const link = document.createElement("a");
link.href = "/resume.pdf";
link.download = "Resume.pdf"
link.click();
}
  return (
    <section className="min-h-screen bg-primary flex items-center justify-center">
      <div className="mx-auto max-w-7xl px-6 w-full grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        
        {/* Left: Text */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="space-y-6 text-center md:text-left"
        >
          <div className="inline-block rounded-full border border-secondary px-4 py-1 text-xs uppercase tracking-widest text-secondary">
            Full Stack Developer
          </div>

          <h1 className="text-5xl md:text-7xl font-bold text-secondary leading-tight">
            Shivankar
            <span className="block">Tripathi</span>
          </h1>

          <p
            ref={typedRef}
            className="mx-auto md:mx-0 max-w-xl min-h-[1.75rem] text-secondary/60 text-sm"
          />

          {/* Buttons */}
          <div className="flex justify-center md:justify-start gap-4 pt-4">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => scrollToSection("projects")} // ✅
              className="rounded-full bg-secondary px-8 py-3 text-primary font-semibold"
            >
              View Projects
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => scrollToSection("contact")} // ✅
              className="rounded-full border border-secondary px-8 py-3 text-secondary font-semibold"
            >
              Contact
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="rounded-full border border-secondary px-8 py-3 text-secondary font-semibold"
              onClick={()=>handleDownload()}
            >
              Resume
            </motion.button>
          </div>
        </motion.div>

        {/* Right: Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.1 }}
          className="flex justify-center"
        >
          <img
            src="/introversh.jpg"
            alt="Shivankar Tripathi"
            className="h-72 w-72 md:h-96 md:w-96 object-cover rounded-2xl border border-secondary"
          />
        </motion.div>

      </div>
    </section>
  );
};

export default Hero;

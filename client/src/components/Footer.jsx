import React from "react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="border-t border-secondary/20 bg-primary">
      <div className="mx-auto max-w-6xl px-6 py-10">
        {/* Top Row */}
        <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
          
          {/* Name & Tagline */}
          <div className="text-center sm:text-left">
            <h3 className="text-lg font-semibold text-secondary">
              Shivankar Tripathi
            </h3>
            <p className="text-sm text-secondary/60">
              diving in code since 2021
            </p>
          </div>

          {/* Social Icons with subtle motion */}
          <div className="flex gap-5">
            {[{
              href: "https://github.com/introversh",
              icon: FaGithub
            },{
              href: "https://linkedin.com/in/introversh",
              icon: FaLinkedin
            },{
              href: "https://instagram.com/introversh",
              icon: FaInstagram
            }].map((social, i) => {
              const Icon = social.icon;
              return (
                <motion.a
                  key={i}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.9 }}
                  className="rounded-full p-2 text-secondary/70 transition-colors hover:text-secondary"
                >
                  <Icon size={18} />
                </motion.a>
              );
            })}
          </div>
        </div>

        {/* Bottom Line */}
        <div className="mt-8 text-center text-xs text-secondary/40">
          © {new Date().getFullYear()} Shivankar. Built with intent.
        </div>
      </div>
    </footer>
  );
};

export default Footer;

import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  FaInstagram,
  FaLinkedin,
  FaGithub,
  FaEnvelope,
} from "react-icons/fa";
import emailjs from "emailjs-com";

const Contact = ({ animateKey }) => {
  const [status, setStatus] = useState("");
  const [sending, setSending] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    const form = e.target;
    setSending(true);

    emailjs
      .sendForm(
        "service_3v9tb9y",
        "template_bkfgiqb",
        form,
        "mNVmDgjN8LijRAkxL"
      )
      .then(
        () => {
          setStatus("Message sent successfully!");
          form.reset();
          setSending(false);
          setTimeout(() => setStatus(""), 4000);
        },
        () => {
          setStatus("Failed to send message. Try again.");
          setSending(false);
          setTimeout(() => setStatus(""), 4000);
        }
      );
  };

  return (
    <section
      id="contact"
      key={animateKey}   // 👈 THIS is the magic
      className="bg-primary px-6 pb-24 pt-28"
    >
      {/* Section Heading */}
      <div className="mb-12 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl font-semibold text-secondary"
        >
          Contact
        </motion.h2>

        {/* Chef’s kiss underline ✨ */}
        <motion.span
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.5, ease: "easeOut", delay: 0.1 }}
          className="mx-auto mt-3 block h-[2px] w-16 origin-left bg-secondary"
        />
      </div>

      <div className="mx-auto grid max-w-5xl gap-10 md:grid-cols-2 gap-y-6">
        {/* Message Panel */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="rounded-2xl border-2 border-secondary bg-primary p-6"
        >
          <h3 className="mb-6 text-xl font-medium text-secondary">
            Send a message
          </h3>

          <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
            <input
              type="text"
              name="user_name"
              placeholder="Your name"
              className="rounded-xl border border-secondary bg-transparent px-4 py-3 text-secondary outline-none placeholder:text-secondary/50"
              required
            />

            <input
              type="email"
              name="user_email"
              placeholder="Your email"
              className="rounded-xl border border-secondary bg-transparent px-4 py-3 text-secondary outline-none placeholder:text-secondary/50"
              required
            />

            <textarea
              rows="5"
              name="message"
              placeholder="Your message"
              className="resize-none rounded-xl border border-secondary bg-transparent px-4 py-3 text-secondary outline-none placeholder:text-secondary/50"
              required
            />

            <button
              type="submit"
              className="mt-2 cursor-pointer rounded-xl border-2 border-secondary px-6 py-3 text-secondary transition hover:bg-secondary hover:text-primary"
              disabled={sending}
            >
              {sending ? "Sending..." : "Send Message"}
            </button>
          </form>

          {status && (
            <p className="mt-3 text-sm text-secondary/80">{status}</p>
          )}
        </motion.div>

        {/* Social Links Panel */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.1 }}
          className="flex flex-col justify-between rounded-2xl border-2 border-secondary bg-primary p-6"
        >
          <div>
            <h3 className="mb-6 text-xl font-medium text-secondary">
              Find me online
            </h3>

            <div className="flex flex-col gap-4">
              <SocialLink icon={<FaGithub />} label="GitHub" href="https://github.com/introversh" />
              <SocialLink icon={<FaLinkedin />} label="LinkedIn" href="https://linkedin.com/in/introversh" />
              <SocialLink icon={<FaInstagram />} label="Instagram" href="https://instagram.com/introversh" />
              <SocialLink
                icon={<FaEnvelope />}
                label="Email"
                href="mailto:introversh@gmail.com"
              />
            </div>
          </div>

          <p className="mt-8 text-sm text-secondary/60">
            Open to work, collaborations & interesting conversations.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

const SocialLink = ({ icon, label, href }) => {
  return (
    <a
      href={href}
      className="flex items-center gap-3 text-secondary transition hover:opacity-70"
      target="_blank"
      rel="noreferrer"
    >
      <span className="text-lg">{icon}</span>
      <span>{label}</span>
    </a>
  );
};

export default Contact;

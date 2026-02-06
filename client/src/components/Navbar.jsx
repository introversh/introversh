import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { useLocation, useNavigate } from "react-router-dom";

const NAV_ITEMS = [
  { label: "Home", id: "home" },
  { label: "Projects", id: "projects" },
  { label: "Blogs", id: "blogs" },
  { label: "Contact", id: "contact" },
];

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-primary/80 backdrop-blur border-b border-secondary/20">
      <div className="mx-auto max-w-7xl px-6 py-4">
        <SlideTabs />
      </div>
    </nav>
  );
};

const SlideTabs = () => {
  const [position, setPosition] = useState({
    left: 0,
    width: 0,
    opacity: 0,
  });

  const [activeId, setActiveId] = useState("home");
  const tabRefs = useRef({});

  // 🔹 Scroll spy
  useEffect(() => {
    const handleScroll = () => {
      let current = "home";

      NAV_ITEMS.forEach(({ id }) => {
        const section = document.getElementById(id);
        if (!section) return;

        const rect = section.getBoundingClientRect();
        if (rect.top <= 120 && rect.bottom >= 120) {
          current = id;
        }
      });

      setActiveId(current);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // 🔹 Lock cursor to active tab
  useEffect(() => {
    const el = tabRefs.current[activeId];
    if (!el) return;

    const { width } = el.getBoundingClientRect();
    setPosition({
      left: el.offsetLeft,
      width,
      opacity: 1,
    });
  }, [activeId]);

  return (
    <ul
      onMouseLeave={() => {
        const el = tabRefs.current[activeId];
        if (!el) return;

        const { width } = el.getBoundingClientRect();
        setPosition({
          left: el.offsetLeft,
          width,
          opacity: 1,
        });
      }}
      className="relative mx-auto flex w-fit rounded-full border border-secondary bg-primary p-1"
    >
      {NAV_ITEMS.map((item) => (
        <Tab
          key={item.id}
          id={item.id}
          setPosition={setPosition}
          tabRefs={tabRefs}
        >
          {item.label}
        </Tab>
      ))}

      <Cursor position={position} />
    </ul>
  );
};

const Tab = ({ children, id, setPosition, tabRefs }) => {
  const ref = useRef(null);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    tabRefs.current[id] = ref.current;
  }, [id, tabRefs]);

  const handleHover = () => {
    if (!ref.current) return;
    const { width } = ref.current.getBoundingClientRect();

    setPosition({
      left: ref.current.offsetLeft,
      width,
      opacity: 1,
    });
  };

  const triggerAnimation = () => {
    window.dispatchEvent(
      new CustomEvent("retrigger-section", { detail: id })
    );
  };

  const handleClick = () => {
    if (location.pathname !== "/") {
      navigate("/", { replace: false });
      setTimeout(() => {
        document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
        triggerAnimation();
      }, 80);
    } else {
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
      triggerAnimation();
    }
  };

  return (
    <li
      ref={ref}
      onMouseEnter={handleHover}
      onClick={handleClick}
      className="relative z-10 cursor-pointer select-none px-4 py-2 text-xs uppercase tracking-widest text-secondary mix-blend-difference md:px-6 md:py-3 md:text-sm"
    >
      {children}
    </li>
  );
};

const Cursor = ({ position }) => {
  return (
    <motion.li
      animate={position}
      transition={{ type: "spring", stiffness: 300, damping: 30 }}
      className="absolute z-0 h-8 rounded-full bg-secondary md:h-11"
    />
  );
};

export default Navbar;

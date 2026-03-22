
import Hero from "../components/Hero";
import Projects from "../components/Projects";
import Contact from "../components/Contact";
import Blogs from "../components/Blog";
import Skills from "../components/Skills";

const Home = () => (
  <main>
    <section id="home" className="scroll-mt-24">
      <Hero />
    </section>
    <section id="skills" className="scroll-mt-24">
      <Skills />
    </section>

    <section id="projects" className="scroll-mt-24">
      <Projects />
    </section>

    <section id="blogs" className="scroll-mt-24">
      <Blogs />
    </section>

    <section id="contact" className="scroll-mt-24">
      <Contact />
    </section>
  </main>
);
export default Home

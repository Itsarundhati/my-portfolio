
import { useEffect, useState, type FormEvent } from "react";
import LiquidCursor from "./components/LiquidCursor";
import "./App.css";
import { motion } from "framer-motion";
import {
  ArrowDown,
  ArrowRight,
  ArrowUpRight,
  AtSign,
  Github,
  Linkedin,
  Menu,
  MoveUpRight,
  ShieldCheck,
  Sparkles,
  X,
} from "lucide-react";

import { experience, profile, projects, skills } from "./data";
import SectionHeading from "./components/SectionHeading";
import ProjectCard from "./components/ProjectCard";

const fadeUp = {
  hidden: { opacity: 0, y: 22 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, ease: "easeOut" },
  },
};

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [formError, setFormError] = useState("");

  useEffect(() => {
    const updateProgress = () => {
      const scrollable =
        document.documentElement.scrollHeight - window.innerHeight;

      setScrollProgress(
        scrollable > 0 ? (window.scrollY / scrollable) * 100 : 0
      );
    };

    window.addEventListener("scroll", updateProgress, { passive: true });
    updateProgress();

    return () => window.removeEventListener("scroll", updateProgress);
  }, []);

  const navItems = [
    ["About", "#about"],
    ["Work", "#work"],
    ["Skills", "#skills"],
    ["Experience", "#experience"],
  ];

  function submitContact(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) {
      setFormError("Please complete all fields before continuing.");
      return;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      setFormError("Please enter a valid email address.");
      return;
    }

    setFormError("");

    const subject = encodeURIComponent(
      `Portfolio enquiry from ${form.name}`
    );

    const body = encodeURIComponent(
      `${form.message}\n\nFrom: ${form.name}\nEmail: ${form.email}`
    );

    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`;
  }

  return (
    <>
      <LiquidCursor />

      <div className="site-shell">
        <div
          className="scroll-progress"
          style={{ transform: `scaleX(${scrollProgress / 100})` }}
        />

        {/* FULL PAGE AMBIENT GRID ART */}
        <div className="ambient-grid-art" aria-hidden="true">
          <div className="ambient-grid" />
          <div className="ambient-orbit ambient-orbit-one" />
          <div className="ambient-orbit ambient-orbit-two" />
          <div className="ambient-orbit ambient-orbit-three" />
        </div>

        <div className="ambient-orb ambient-orb-one" aria-hidden="true" />
        <div className="ambient-orb ambient-orb-two" aria-hidden="true" />

        <div className="top-strip">
          <span>INDEPENDENTLY CURIOUS. QUALITY OBSESSED.</span>
          <span className="top-strip-right">
            <span className="availability-dot" /> OPEN TO THE RIGHT OPPORTUNITY
          </span>
        </div>

        <header className="site-header">
          <a href="#home" className="wordmark" aria-label="Arundhati home">
            ar<span>.</span>
          </a>

          <nav
            className={menuOpen ? "main-nav open" : "main-nav"}
            aria-label="Main navigation"
          >
            {navItems.map(([label, href]) => (
              <a
                key={label}
                href={href}
                onClick={() => setMenuOpen(false)}
              >
                {label}
              </a>
            ))}

            <a
              className="nav-contact"
              href="#contact"
              onClick={() => setMenuOpen(false)}
            >
              LET'S TALK <MoveUpRight size={14} />
            </a>
          </nav>

          <button
            className="menu-toggle"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <X /> : <Menu />}
          </button>
        </header>

        <main>
          {/* HERO */}
          <section className="hero section-wrap" id="home">
            <div className="hero-grid">
              <motion.div
                className="hero-copy"
                initial="hidden"
                animate="visible"
                variants={fadeUp}
              >
                <div className="hero-label">
                  <span className="label-line" />
                  HELLO, I'M ARUNDHATI <span className="wave">✳</span>
                </div>

                <h1>
                  I make software
                  <br />
                  feel <span className="serif-word">reliable.</span>
                </h1>

                <p className="hero-intro">{profile.intro}</p>

                <div className="hero-actions">
                  <a
                    className="button button-dark button-animated"
                    href="#work"
                  >
                    <span>EXPLORE MY WORK</span>
                    <ArrowDown size={15} />
                  </a>

                  <a
                    className="text-link text-link-animated"
                    href="#contact"
                  >
                    GET IN TOUCH <ArrowUpRight size={16} />
                  </a>
                </div>

                <div className="hero-meta">
                  <span>
                    <span className="meta-dot" /> {profile.role}
                  </span>
                  <span>{profile.location}</span>
                </div>
              </motion.div>

              <motion.div
                className="hero-art"
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.15 }}
              >
                {/* Original hero artwork retained */}
                <div className="hero-stamp">
                  <Sparkles size={17} />
                  <span>
                    BUILT ON
                    <br />
                    CURIOSITY
                  </span>
                </div>

                <div className="float-chip chip-one">
                  <span className="chip-dot" /> TEST THINKING
                </div>

                <div className="float-chip chip-two">
                  <span className="chip-cross">✳</span> AUTOMATION
                </div>

                <div className="float-chip chip-three">QUALITY / 001</div>

                <div className="art-center">
                  <span className="art-small">QUALITY IS A</span>
                  <span className="art-big">
                    TEAM
                    <br />
                    <i>SPORT.</i>
                  </span>
                  <span className="art-caption">
                    THINK · TEST · IMPROVE
                  </span>
                </div>

                <div className="art-side-note">
                  {/* FIG. 001 — THE QA MINDSET */}
                </div>

                <div className="art-bottom">
                  <span>01 / 04</span>
                  <span>ALWAYS IN PROGRESS ↗</span>
                </div>
              </motion.div>
            </div>

            <div className="hero-bottomline">
              <span>SCROLL TO EXPLORE</span>
              <span className="scroll-line">
                <i />
              </span>
              <span className="mono">PORTFOLIO / 2026</span>
            </div>
          </section>

          {/* APPROACH */}
          <section className="intro-band">
            <div className="section-wrap intro-band-inner">
              <span className="mono">MY APPROACH</span>

              <p>
                Great quality isn't about preventing teams from moving
                <em style={{ marginLeft: "4px" }}>forward.</em>{" "}
                It's about helping them move forward with{" "}
                <strong>confidence.</strong>
              </p>

              <ShieldCheck className="band-icon" strokeWidth={1.2} />
            </div>
          </section>

          {/* MARQUEE */}
          <div className="marquee" aria-label="Quality is a continuous practice">
            <div className="marquee-track">
              {Array.from({ length: 2 }).map((_, index) => (
                <span className="marquee-content" key={index}>
                  TEST WITH INTENT <b>✳</b> AUTOMATE THE REPEATABLE <b>✳</b>{" "}
                  THINK BEYOND THE HAPPY PATH <b>✳</b> SHIP WITH CONFIDENCE{" "}
                  <b>✳</b>
                </span>
              ))}
            </div>
          </div>

          {/* ABOUT */}
          <section
            className="section-wrap content-section about-section"
            id="about"
          >
            <SectionHeading
              eyebrow="A LITTLE ABOUT ME"
              title={
                <>
                  Curiosity is my
                  <br />
                  <span className="serif-word">favourite tool.</span>
                </>
              }
              number="01"
            />

            <div className="about-content">
              <div className="about-lead">
                <p className="large-copy">
                  I'm a QA Engineer who enjoys understanding how products
                  work, where they might break, and how to make them better.
                </p>

                <p>
                  I bring together structured test thinking and practical
                  automation. From exploring a new feature to building
                  repeatable checks, I care about the details that make a
                  product dependable for the people using it.
                </p>

                <a className="underlined-link" href="#experience">
                  A LOOK AT MY EXPERIENCE <ArrowUpRight size={15} />
                </a>
              </div>

              <div className="principles">
                <div className="principle reveal-hover">
                  <span>01</span>
                  <div>
                    <h3>Think in journeys</h3>
                    <p>
                      Understand the user goal, not just the individual screen.
                    </p>
                  </div>
                </div>

                <div className="principle reveal-hover">
                  <span>02</span>
                  <div>
                    <h3>Automate with intent</h3>
                    <p>
                      Build checks that give useful feedback and stay
                      maintainable.
                    </p>
                  </div>
                </div>

                <div className="principle reveal-hover">
                  <span>03</span>
                  <div>
                    <h3>Make quality shared</h3>
                    <p>
                      Work with the team to surface risk early and clearly.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* WORK */}
          <section className="work-section" id="work">
            <div className="section-wrap content-section">
              <SectionHeading
                eyebrow="SELECTED PROJECTS"
                title={
                  <>
                    A few things I've
                    <br />
                    <span className="serif-word">put to the test.</span>
                  </>
                }
                description="A selection of product testing and QA tooling work. The details here are a starting point — ask me about the approach behind each one."
                number="02"
              />

              <div className="projects-grid">
                {projects.map((project, index) => (
                  <motion.div
                    key={project.number}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.15 }}
                    variants={{
                      ...fadeUp,
                      visible: {
                        ...fadeUp.visible,
                        transition: {
                          ...fadeUp.visible.transition,
                          delay: index * 0.08,
                        },
                      },
                    }}
                  >
                    <ProjectCard project={project} />
                  </motion.div>
                ))}
              </div>

              <div className="journey-note">
                <span className="note-symbol">↗</span>
                <p>
                  <strong>Especially curious about JourneyLog?</strong> It's
                  an independent project exploring how we can make exploratory
                  testing easier to capture, communicate and learn from.
                </p>
              </div>
            </div>
          </section>

          {/* SKILLS */}
          <section
            className="section-wrap content-section skills-section"
            id="skills"
          >
            <SectionHeading
              eyebrow="MY TOOLKIT"
              title={
                <>
                  Tools are useful.
                  <br />
                  <span className="serif-word">Thinking matters more.</span>
                </>
              }
              number="03"
            />

            <div className="skills-layout">
              <div className="skills-aside">
                <span className="skill-asterisk">✳</span>
                <p>
                  A practical toolkit for finding risk, building confidence
                  and keeping quality visible throughout delivery.
                </p>
                <span className="mono">
                  ALWAYS LEARNING / ALWAYS TESTING
                </span>
              </div>

              <div className="skill-groups">
                {skills.map((skill, index) => (
                  <div className="skill-group" key={skill.group}>
                    <div className="skill-group-title">
                      <span>0{index + 1}</span>
                      <h3>{skill.group}</h3>
                    </div>

                    <div className="skill-pills">
                      {skill.items.map((item) => (
                        <span key={item}>
                          <i />
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* EXPERIENCE */}
          <section className="experience-section" id="experience">
            <div className="section-wrap content-section">
              <SectionHeading
                eyebrow="WHERE I'VE BEEN"
                title={
                  <>
                    Experience built
                    <br />
                    <span className="serif-word">
                      one release at a time.
                    </span>
                  </>
                }
                number="04"
              />

              <div className="experience-list">
                {experience.map((item) => (
                  <article className="experience-item" key={item.company}>
                    <div className="experience-date mono">
                      {item.period}
                    </div>

                    <div className="experience-main">
                      <div className="experience-title">
                        <div>
                          <h3>{item.role}</h3>
                          <span>{item.company}</span>
                        </div>
                        <span className="experience-index">01</span>
                      </div>

                      <p>{item.summary}</p>

                      <ul>
                        {item.points.map((point) => (
                          <li key={point}>{point}</li>
                        ))}
                      </ul>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </section>

          {/* QUALITY STATEMENT */}
          <section className="quality-section">
            <div className="section-wrap quality-inner">
              <span className="mono">A NOTE ON QUALITY</span>

              <h2>
                Quality isn't a final checkpoint.
                <br />
                <span className="serif-word">It's how we get there.</span>
              </h2>

              <p>
                Ask better questions. Explore beyond the happy path. Automate
                the right things. Share what you learn.
              </p>

              <div className="quality-signature">
                AR<span>.</span>
              </div>
            </div>
          </section>

          {/* CONTACT */}
          <section
            className="section-wrap content-section contact-section"
            id="contact"
          >
            <SectionHeading
              eyebrow="HAVE SOMETHING IN MIND?"
              title={
                <>
                  Let's make the
                  <br />
                  <span className="serif-word">next release better.</span>
                </>
              }
              description="Interested in working together, discussing QA or hearing more about a project? Send me a note."
              number="05"
            />

            <div className="contact-layout">
              <div className="contact-details">
                <a
                  className="contact-email"
                  href={`mailto:${profile.email}`}
                >
                  <AtSign size={18} /> {profile.email}
                </a>

                <div className="social-links">
                  <a
                    href={profile.github}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <Github size={17} /> GITHUB <ArrowUpRight size={13} />
                  </a>

                  <a
                    href={profile.linkedin}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <Linkedin size={17} /> LINKEDIN{" "}
                    <ArrowUpRight size={13} />
                  </a>
                </div>

                <div className="contact-location">
                  <span className="availability-dot" />
                  BASED IN {profile.location.toUpperCase()}
                </div>
              </div>

              <form
                className="contact-form"
                onSubmit={submitContact}
                noValidate
              >
                <label>
                  Your name
                  <input
                    value={form.name}
                    onChange={(e) =>
                      setForm({ ...form, name: e.target.value })
                    }
                    placeholder="What should I call you?"
                  />
                </label>

                <label>
                  Your email
                  <input
                    type="email"
                    value={form.email}
                    onChange={(e) =>
                      setForm({ ...form, email: e.target.value })
                    }
                    placeholder="you@company.com"
                  />
                </label>

                <label>
                  Your message
                  <textarea
                    rows={4}
                    value={form.message}
                    onChange={(e) =>
                      setForm({ ...form, message: e.target.value })
                    }
                    placeholder="Tell me a little about it..."
                  />
                </label>

                {formError && (
                  <p className="form-error" role="alert">
                    {formError}
                  </p>
                )}

                <button
                  className="button button-dark submit-button"
                  type="submit"
                >
                  <span>SEND AN EMAIL</span>
                  <ArrowRight size={16} />
                </button>

                <span className="form-note">
                  Opens your email app to send the message. Nothing is stored
                  on this site.
                </span>
              </form>
            </div>
          </section>
        </main>

        {/* FOOTER */}
        <footer className="site-footer">
          <div className="section-wrap footer-inner">
            <a href="#home" className="wordmark">
              ar<span>.</span>
            </a>

            <span>
              MADE WITH CURIOSITY & A HEALTHY DOSE OF SCEPTICISM.
            </span>

            <a href="#home" className="back-top">
              BACK TO TOP ↑
            </a>

            <span className="footer-year">
              © {new Date().getFullYear()} ARUNDHATI DEVI R
            </span>
          </div>
        </footer>
      </div>
    </>
  );
}

export default App;

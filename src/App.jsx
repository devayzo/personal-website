import { useEffect, useState } from 'react'

const skills = [
  'JavaScript',
  'React',
  'Python',
  'C',
  'SQL',
  'Git',
  'GitHub',
  'VS Code',
]

const projects = [
  {
    title: 'Programming Studies',
    description:
      'A growing collection of exercises, experiments and study projects created while learning different programming languages.',
    tags: ['C', 'Python', 'Algorithms'],
    link: 'https://github.com/devayzo/estudos',
  },
  {
    title: 'Personal Portfolio',
    description:
      'This portfolio itself: a responsive React application focused on clean design, accessibility and a simple developer experience.',
    tags: ['React', 'JavaScript', 'CSS'],
    link: 'https://github.com/devayzo',
  },
  {
    title: 'Next Project',
    description:
      'Reserved for your next project. Replace this card with an API, full-stack app, dashboard, game or anything else you build.',
    tags: ['Coming soon'],
    link: 'https://github.com/devayzo',
  },
]

function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16)
    onScroll()
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const closeMenu = () => setMenuOpen(false)

  return (
    <div className="site-shell">
      <div className="ambient ambient-one" />
      <div className="ambient ambient-two" />

      <header className={`site-header ${scrolled ? 'is-scrolled' : ''}`}>
        <a className="brand" href="#home" onClick={closeMenu} aria-label="Go to home">
          <span className="brand-mark">&lt;/&gt;</span>
          <span>devayzo</span>
        </a>

        <button
          className="menu-button"
          type="button"
          aria-label="Toggle navigation"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((value) => !value)}
        >
          <span />
          <span />
          <span />
        </button>

        <nav className={`nav ${menuOpen ? 'is-open' : ''}`} aria-label="Main navigation">
          <a href="#about" onClick={closeMenu}>About</a>
          <a href="#skills" onClick={closeMenu}>Skills</a>
          <a href="#projects" onClick={closeMenu}>Projects</a>
          <a href="#contact" onClick={closeMenu}>Contact</a>
        </nav>
      </header>

      <main>
        <section className="hero section" id="home">
          <div className="hero-copy reveal">
            <p className="eyebrow">Systems Analysis & Development Student</p>

            <h1>
              Hi, I'm <span>André Yuri.</span>
              <br />
              I build, learn and keep improving.
            </h1>

            <p className="hero-text">
              Junior developer from Brazil focused on software development,
              back-end fundamentals, databases and modern web technologies.
            </p>

            <div className="hero-actions">
              <a className="button button-primary" href="#projects">
                View projects
              </a>
              <a
                className="button button-secondary"
                href="https://github.com/devayzo"
                target="_blank"
                rel="noreferrer"
              >
                GitHub ↗
              </a>
            </div>

            <div className="hero-meta" aria-label="Profile highlights">
              <span>📍 Limeira, SP</span>
              <span>🇧🇷 Portuguese</span>
              <span>🌎 English — Fluent</span>
            </div>
          </div>

          <div className="terminal-card reveal" aria-label="Developer profile card">
            <div className="terminal-top">
              <span />
              <span />
              <span />
              <p>devayzo@portfolio:~</p>
            </div>

            <div className="terminal-body">
              <p><span className="prompt">$</span> whoami</p>
              <p className="terminal-result">André Yuri — Junior Developer</p>

              <p><span className="prompt">$</span> focus</p>
              <p className="terminal-result">
                React · JavaScript · Python · C · SQL
              </p>

              <p><span className="prompt">$</span> status</p>
              <p className="terminal-result success">
                learning_every_day = true
              </p>

              <p><span className="prompt">$</span> _<span className="cursor" /></p>
            </div>
          </div>
        </section>

        <section className="section split-section" id="about">
          <div>
            <p className="section-kicker">01 / ABOUT</p>
            <h2>Turning curiosity into code.</h2>
          </div>

          <div className="about-copy">
            <p>
              I'm a Systems Analysis and Development student currently building
              my foundations in programming, software engineering and databases.
              I enjoy learning by creating projects and solving real problems.
            </p>
            <p>
              My current goal is to grow as a developer, deepen my technical
              knowledge and gain professional experience while continuing to
              build a portfolio that reflects my progress.
            </p>
          </div>
        </section>

        <section className="section" id="skills">
          <div className="section-heading">
            <div>
              <p className="section-kicker">02 / SKILLS</p>
              <h2>Tools I use and study.</h2>
            </div>
            <p>
              A practical stack centered on development fundamentals and modern web technologies.
            </p>
          </div>

          <div className="skills-grid">
            {skills.map((skill, index) => (
              <div className="skill-card" key={skill}>
                <span className="skill-number">{String(index + 1).padStart(2, '0')}</span>
                <strong>{skill}</strong>
              </div>
            ))}
          </div>
        </section>

        <section className="section" id="projects">
          <div className="section-heading">
            <div>
              <p className="section-kicker">03 / PROJECTS</p>
              <h2>Things I'm building.</h2>
            </div>
            <p>
              The portfolio grows with me. These cards can be replaced as new projects are published.
            </p>
          </div>

          <div className="projects-grid">
            {projects.map((project) => (
              <article className="project-card" key={project.title}>
                <div className="project-top">
                  <span className="folder-icon">⌁</span>
                  <a href={project.link} target="_blank" rel="noreferrer" aria-label={`Open ${project.title}`}>
                    ↗
                  </a>
                </div>

                <h3>{project.title}</h3>
                <p>{project.description}</p>

                <div className="tag-list">
                  {project.tags.map((tag) => (
                    <span key={tag}>{tag}</span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="section education-section">
          <div>
            <p className="section-kicker">04 / EDUCATION</p>
            <h2>Always learning.</h2>
          </div>

          <div className="education-card">
            <div>
              <p className="education-date">Current</p>
              <h3>Systems Analysis and Development</h3>
              <p>Technology degree · 2nd semester</p>
            </div>
            <span className="education-badge">ADS</span>
          </div>
        </section>

        <section className="section contact-section" id="contact">
          <p className="section-kicker">05 / CONTACT</p>
          <h2>Want to talk?</h2>
          <p>
            I'm open to connecting, learning opportunities, internships and
            conversations about technology.
          </p>

          <div className="contact-actions">
            <a
              className="button button-primary"
              href="https://www.linkedin.com/in/andreshinya"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn ↗
            </a>
            <a
              className="button button-secondary"
              href="https://github.com/devayzo"
              target="_blank"
              rel="noreferrer"
            >
              GitHub ↗
            </a>
          </div>
        </section>
      </main>

      <footer>
        <p>Designed & built by André Yuri.</p>
        <p>React + JavaScript</p>
      </footer>
    </div>
  )
}

export default App

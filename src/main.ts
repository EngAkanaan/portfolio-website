import './style.css'

const year = new Date().getFullYear()

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div class="page-bg"></div>
  <header class="topbar">
    <a class="brand" href="#home">Adam Kanaan</a>
    <nav class="nav-links">
      <a href="#about">About</a>
      <a href="#projects">Projects</a>
      <a href="#skills">Skills</a>
      <a href="#experience">Experience</a>
      <a href="#contact">Contact</a>
    </nav>
  </header>

  <main>
    <section id="home" class="section hero reveal">
      <p class="eyebrow">Computer Engineering Graduate</p>
      <h1>Full-Stack Engineer Building Reliable Digital Products</h1>
      <p class="lead">
        I build scalable web applications, API-driven systems, and responsive user experiences.
        My focus is shipping software that is clean, useful, and ready for real users.
      </p>
      <div class="hero-actions">
        <a class="btn btn-solid" href="#projects">View Projects</a>
        <a class="btn btn-outline" href="./AdamKanaan_CV_Engineering.pdf" target="_blank" rel="noreferrer">Download Resume</a>
        <a class="btn btn-outline" href="#contact">Contact Me</a>
      </div>
      <ul class="quick-highlights">
        <li>Full-stack web development</li>
        <li>REST API design and backend systems</li>
        <li>AI-powered chatbots and prompt engineering with RAG</li>
        <li>Database design and integration</li>
      </ul>
    </section>

    <section id="about" class="section reveal">
      <h2>About Me</h2>
      <p>
        I am a Computer Engineering graduate with hands-on experience in full-stack development using
        React, TypeScript, Node.js, and PostgreSQL. I design scalable applications, secure backend APIs,
        and responsive interfaces for mobile and desktop users.
      </p>
      <p>
        Beyond software, I am the founder of Flex Fits, a footwear brand where I manage sourcing,
        online sales, digital marketing, and customer operations.
      </p>
      <div class="pill-row">
        <span>Software Architecture</span>
        <span>API Development</span>
        <span>Performance Optimization</span>
        <span>Entrepreneurship</span>
      </div>
    </section>

    <section id="projects" class="section reveal">
      <h2>Projects</h2>
      <div class="cards">
        <article class="card-item">
          <div class="card-head">
            <h3>IntelliBudget</h3>
            <span class="status">Live Project</span>
          </div>
          <p>A secure personal finance dashboard for tracking expenses, budgets, and analytics.</p>
          <ul>
            <li>React + TypeScript frontend with responsive UI</li>
            <li>Node.js and Express REST API with JWT authentication</li>
            <li>PostgreSQL and Supabase integration for data management</li>
          </ul>
          <p class="tech">React, TypeScript, Node.js, Express, PostgreSQL, Supabase, Tailwind CSS</p>
          <div class="links">
            <a href="https://github.com/EngAkanaan/intellibudget" target="_blank" rel="noreferrer">GitHub</a>
            <a href="https://intellibudget-dashboard.vercel.app" target="_blank" rel="noreferrer">Live Demo</a>
          </div>
          <div class="project-shots">
            <figure>
              <a class="shot-link" href="./projects/intellibudget-1.jpeg" target="_blank" rel="noreferrer" aria-label="Open full image: IntelliBudget mobile dashboard in dark theme">
                <img src="./projects/intellibudget-1.jpeg" alt="IntelliBudget mobile view dashboard with dark theme" loading="lazy" />
              </a>
              <figcaption>Mobile dashboard in dark theme</figcaption>
            </figure>
            <figure>
              <a class="shot-link" href="./projects/intellibudget-2.png" target="_blank" rel="noreferrer" aria-label="Open full image: IntelliBudget budgets and categories section">
                <img src="./projects/intellibudget-2.png" alt="IntelliBudget budgets and categories section" loading="lazy" />
              </a>
              <figcaption>Budgets and categories section</figcaption>
            </figure>
            <figure>
              <a class="shot-link" href="./projects/intellibudget-3.png" target="_blank" rel="noreferrer" aria-label="Open full image: IntelliBudget monthly details, income, expenses, and budget alerts">
                <img src="./projects/intellibudget-3.png" alt="IntelliBudget monthly details with income, expenses, and budget alerts" loading="lazy" />
              </a>
              <figcaption>Monthly details, income, expenses, and budget alerts</figcaption>
            </figure>
            <figure>
              <a class="shot-link" href="./projects/intellibudget-4.png" target="_blank" rel="noreferrer" aria-label="Open full image: IntelliBudget main dashboard overview">
                <img src="./projects/intellibudget-4.png" alt="IntelliBudget main dashboard" loading="lazy" />
              </a>
              <figcaption>Main dashboard overview</figcaption>
            </figure>
          </div>
        </article>

        <article class="card-item">
          <div class="card-head">
            <h3>Smart Farm System</h3>
            <span class="status">Live Project</span>
          </div>
          <p>Full-stack agricultural platform connecting farmers, customers, delivery, and admins.</p>
          <ul>
            <li>Multi-role dashboards with secure authentication</li>
            <li>Real-time notifications and subscription workflows</li>
            <li>Performance optimized for fast response times</li>
          </ul>
          <p class="tech">React, Node.js, Express, PostgreSQL, Tailwind CSS, REST APIs</p>
          <div class="links">
            <a href="https://github.com/EngAkanaan/smart-farm-system" target="_blank" rel="noreferrer">GitHub (No Live URL Yet)</a>
          </div>
          <div class="project-shots">
            <figure>
              <a class="shot-link" href="./projects/smartfarm-1.jpeg" target="_blank" rel="noreferrer" aria-label="Open full image: Smart Farm sign in and log in page">
                <img src="./projects/smartfarm-1.jpeg" alt="Smart Farm sign in and log in page" loading="lazy" />
              </a>
              <figcaption>Sign in and log in page</figcaption>
            </figure>
            <figure>
              <a class="shot-link" href="./projects/smartfarm-2.jpeg" target="_blank" rel="noreferrer" aria-label="Open full image: Smart Farm admin dashboard">
                <img src="./projects/smartfarm-2.jpeg" alt="Smart Farm admin dashboard" loading="lazy" />
              </a>
              <figcaption>Admin dashboard</figcaption>
            </figure>
            <figure>
              <a class="shot-link" href="./projects/smartfarm-3.jpeg" target="_blank" rel="noreferrer" aria-label="Open full image: Smart Farm user and farms management by admin">
                <img src="./projects/smartfarm-3.jpeg" alt="Smart Farm user and farms management by admin" loading="lazy" />
              </a>
              <figcaption>User and farms management by admin</figcaption>
            </figure>
            <figure>
              <a class="shot-link" href="./projects/smartfarm-4.jpeg" target="_blank" rel="noreferrer" aria-label="Open full image: Smart Farm farmer dashboard">
                <img src="./projects/smartfarm-4.jpeg" alt="Smart Farm farmer dashboard" loading="lazy" />
              </a>
              <figcaption>Farmer dashboard</figcaption>
            </figure>
            <figure>
              <a class="shot-link" href="./projects/smartfarm-5.jpeg" target="_blank" rel="noreferrer" aria-label="Open full image: Smart Farm email received for verification">
                <img src="./projects/smartfarm-5.jpeg" alt="Smart Farm email received for verification" loading="lazy" />
              </a>
              <figcaption>Email received for verification</figcaption>
            </figure>
          </div>
        </article>

        <article class="card-item">
          <div class="card-head">
            <h3>Flex Fits Website</h3>
            <span class="status">Live Project</span>
          </div>
          <p>Online footwear showcase focused on clean product presentation and browsing.</p>
          <ul>
            <li>Product catalog and filtering features</li>
            <li>Responsive layout for desktop and mobile</li>
            <li>Minimal and clear storefront UI</li>
          </ul>
          <p class="tech">HTML, CSS, JavaScript</p>
          <div class="links">
            <a href="https://github.com/EngAkanaan/flexfits_website.git" target="_blank" rel="noreferrer">GitHub</a>
            <a href="https://flexfitsstore.vercel.app/" target="_blank" rel="noreferrer">Live Demo</a>
          </div>
        </article>

        <article class="card-item">
          <div class="card-head">
            <h3>Flex Fits AI Chatbot</h3>
            <span class="status">Live Bot</span>
          </div>
          <p>AI assistant to recommend shoe models based on user preferences and inventory.</p>
          <ul>
            <li>Natural-language customer interaction</li>
            <li>Product recommendation logic</li>
            <li>Automated support for repetitive questions</li>
          </ul>
          <p class="tech">Python, AI APIs, Prompt Engineering, Data Processing</p>
          <div class="links">
            <a href="https://t.me/FlexFits_CustomerSupport_bot" target="_blank" rel="noreferrer">Open Telegram Bot</a>
            <a href="https://github.com/EngAkanaan/FlexFits_Chatbot" target="_blank" rel="noreferrer">GitHub</a>
          </div>
        </article>
      </div>
    </section>

    <section id="skills" class="section reveal">
      <h2>Technical Skills</h2>
      <div class="skills-grid">
        <div>
          <h3>Languages</h3>
          <p>JavaScript, TypeScript, Python, C++, SQL</p>
        </div>
        <div>
          <h3>Frontend</h3>
          <p>React.js, HTML5, CSS3, Tailwind CSS, Responsive Design</p>
        </div>
        <div>
          <h3>Backend</h3>
          <p>Node.js, Express.js, REST APIs, JWT, bcrypt, MVC Architecture</p>
        </div>
        <div>
          <h3>Databases</h3>
          <p>PostgreSQL, MySQL, Supabase, Sequelize ORM</p>
        </div>
        <div>
          <h3>Tools</h3>
          <p>Git, GitHub, VS Code, Vite, Vercel, CI/CD Fundamentals</p>
        </div>
        <div>
          <h3>Soft Skills</h3>
          <p>Problem Solving, Team Collaboration, Leadership, Technical Communication</p>
        </div>
      </div>
    </section>

    <section id="experience" class="section reveal">
      <h2>Experience</h2>
      <div class="timeline">
        <article>
          <h3>Supervisor - Stories Coffee Shop</h3>
          <p class="meta">Nov 2024 - Jan 2026</p>
          <p>Managed operations and customer service while serving 100+ beverages per day and training new staff.</p>
        </article>
        <article>
          <h3>Team Leader Cashier - Arnaoun Village</h3>
          <p class="meta">Seasonal</p>
          <p>Handled high-volume financial transactions and maintained accuracy during peak periods.</p>
        </article>
        <article>
          <h3>Technical Support Specialist - Fallout Gaming Lounge</h3>
          <p class="meta">May 2023 - Dec 2024</p>
          <p>Maintained 20 computers and gaming systems, resolving technical issues for 300+ weekly visitors.</p>
        </article>
      </div>
    </section>

    <section id="education" class="section reveal">
      <h2>Education & Entrepreneurship</h2>
      <div class="split">
        <article>
          <h3>B.S. in Computer Engineering</h3>
          <p>Lebanese International University</p>
          <p class="meta">Sep 2022 - Sep 2025</p>
        </article>
        <article>
          <h3>Founder - Flex Fits</h3>
          <p class="meta">Dec 2024 - Present</p>
          <p>Built and operate a footwear brand, managing sourcing, content, customer communication, and fulfillment.</p>
        </article>
      </div>
    </section>

    <section id="github" class="section reveal">
      <h2>GitHub</h2>
      <p>
        I actively publish full-stack applications and ongoing development work. Repositories show practical
        experience in frontend, backend, databases, API design, deployment, and AI-driven solutions.
        My work includes intelligent chatbots using prompt engineering and RAG (Retrieval-Augmented Generation)
        for enhanced conversational AI and automated customer support.
      </p>
      <a class="btn btn-solid" href="https://github.com/EngAkanaan" target="_blank" rel="noreferrer">Visit GitHub Profile</a>
    </section>

    <section id="contact" class="section reveal">
      <h2>Contact</h2>
      <p>If you would like to collaborate or discuss opportunities, feel free to reach out.</p>
      <div class="contact-grid">
        <a href="mailto:ajkanaan004@gmail.com" aria-label="Send email to Adam Kanaan">
          <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
            <path d="M3 6a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V6zm2 .5v.3l7 4.8 7-4.8v-.3H5zm14 2.7-6.43 4.4a1 1 0 0 1-1.14 0L5 9.2V18h14V9.2z" />
          </svg>
          <span>Email</span>
        </a>
        <a href="https://www.linkedin.com/in/adam-kanaan-engineer" target="_blank" rel="noreferrer" aria-label="Visit LinkedIn profile">
          <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
            <path d="M6.94 8.5A1.56 1.56 0 1 1 6.94 5.38a1.56 1.56 0 0 1 0 3.12zM5.6 10h2.68v8.4H5.6V10zm4.28 0h2.58v1.15h.04c.36-.68 1.24-1.4 2.56-1.4 2.74 0 3.24 1.8 3.24 4.13v4.52h-2.68v-4.01c0-.96-.02-2.2-1.34-2.2-1.35 0-1.56 1.05-1.56 2.13v4.08H9.88V10z" />
          </svg>
          <span>LinkedIn</span>
        </a>
        <a href="https://github.com/EngAkanaan" target="_blank" rel="noreferrer" aria-label="Visit GitHub profile">
          <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
            <path d="M12 2a10 10 0 0 0-3.16 19.49c.5.09.68-.22.68-.49v-1.73c-2.77.6-3.35-1.18-3.35-1.18-.45-1.15-1.11-1.45-1.11-1.45-.9-.62.07-.61.07-.61 1 .07 1.52 1.02 1.52 1.02.88 1.52 2.32 1.08 2.89.83.09-.64.35-1.08.63-1.33-2.21-.25-4.54-1.11-4.54-4.94 0-1.09.39-1.98 1.02-2.68-.1-.25-.44-1.27.1-2.65 0 0 .84-.27 2.75 1.02A9.52 9.52 0 0 1 12 6.8c.85 0 1.71.11 2.5.34 1.9-1.29 2.74-1.02 2.74-1.02.54 1.38.2 2.4.1 2.65.64.7 1.02 1.59 1.02 2.68 0 3.84-2.33 4.69-4.56 4.94.36.31.68.93.68 1.87V21c0 .27.18.58.69.49A10 10 0 0 0 12 2z" />
          </svg>
          <span>GitHub</span>
        </a>
      </div>
    </section>
  </main>

  <footer class="section footer">
    <p>Batroun, Lebanon | +961 81 851 620</p>
    <p>Copyright ${year} Adam Kanaan. All rights reserved.</p>
  </footer>
`

const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible')
      }
    })
  },
  { threshold: 0.15 }
)

document.querySelectorAll('.reveal').forEach((el) => revealObserver.observe(el))

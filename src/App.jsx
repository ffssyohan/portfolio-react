import "./App.css";

function App() {
  const name = "Felipe Yohan";
  const fullName = "Felipe Yohan Sapio";
  const profession = "Full Stack Developer";
  const projects = [
    {
      title: "Project 1",
      description: "A web application build using React and Node",
      link: "#",
    },
    {
      title: "Project 2",
      description: "A web application build using React and Node",
      link: "#",
    },
    {
      title: "Project 3",
      description: "A web application build using React and Node",
      link: "#",
    },
  ];

  return (
    <div className="App">
      {/* header section */}
      <header className="header">
          <h1>{fullName}</h1>
          <p>{profession}</p>
          <nav>
            <a href="#about">About</a>
            <a href="#about">Projects</a>
            <a href="#about">Contact</a>
          </nav>
      </header>

      {/* about section */}
      <section id="about" className="about-section">
        <h2>About me</h2>
        <p>
          Hello! I am {name}, a passionate {profession}. I love building web
          application that solves real world user problems!
        </p>
      </section>

      {/* about section */}
      <section id="projects" className="projects-section">
        <h2>Projects</h2>
        <div className="projects-list">
          {projects.map((project, index) => (
            <div key={index} className="project-item">
              <h3>{project.title}</h3>
              <h3>{project.description}</h3>
              <a href={project.link} target="_blank" rel="noopener noreferrer">
                View Project
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* contact session */}
      <section id="contact" className="contact-section">
        <h2>Contacte me!</h2>
        <p>
          If you would like to get in touch, feel free to email me at{" "}
          <a href="mailto:ffssyohan@gmail.com">ffssyohan@gmail.com</a>
        </p>
      </section>

      {/* footer section */}
      <section id="footer" className="footer-section">
        <p>2026. All Rights Reserved.</p>
      </section>
    </div>
  );
}

export default App;

import React from "react";

const Projects = () => {
  const projectsList = [
    {
      title: "Ghibli Art Generator",
      description: "It generates the Ghibli art for the input image using AI",
      tech: ["Python", "AI/ML", "Image Processing"],
      github: "https://github.com",
      demo: "https://demo.com",
    },
    {
      title: "Coinnect -paytm clone",
      description: "make momentory transactions",
      tech: ["Python", "Node.js", "React"], // Technologies used in the project
      github: "https://github.com/awais7796/coinnect--paytm_clone-", // GitHub repo link
      demo: "https://demo.com", // Live demo link
    },
    {
      title: "MansTalk AI",
      description:
        "Chat-based AI which answers men's queries about their sexual health",
      tech: ["React", "AI", "Node.js"], // Technologies used in the project
      github: "https://github.com/awais7796/MensTalk", // GitHub repo link
      demo: "https://demo.com", // Live demo link
    },
  ];

  const GithubIcon = () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="18"
      height="18"
      fill="currentColor"
      viewBox="0 0 24 24"
    >
      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
    </svg>
  );

  const ExternalLinkIcon = () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="18"
      height="18"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      viewBox="0 0 24 24"
    >
      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
      <polyline points="15 3 21 3 21 9" />
      <line x1="10" y1="14" x2="21" y2="3" />
    </svg>
  );
  return (
    // Outer wrapper for the Projects section
    <div id="projects" className="min-h-screen py-12 px-4">
      {/* Container to center and limit width */}
      <div className="flex flex-col items-center w-full max-w-7xl mx-auto">
        {/* Section heading */}
        <h2 className="mt-5 text-3xl font-bold mb-12 playfair-display text-center">
          Projects
        </h2>

        {/* Grid layout to display project cards responsively */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
          {/* Looping through all projects using map() */}
          {projectsList.map((project, index) => (
            // Each project card
            <div
              key={index} // Unique key required by React for list rendering
              className="group border-2 border-border rounded-2xl p-6 bg-surface hover:border-accent transition-all duration-300 hover:shadow-lg hover:shadow-accent/20 flex flex-col"
            >
              {/* Project title */}
              <h3 className="text-xl font-semibold mb-3 playfair-display text-primary">
                {project.title}
              </h3>

              {/* Project description */}
              <p className="text-secondary mb-4 text-sm leading-relaxed flex-grow">
                {project.description}
              </p>

              {/* Displaying list of technologies used */}
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map((tech, techIndex) => (
                  <span
                    key={techIndex} // Unique key for each tech badge
                    className="px-3 py-1 text-xs rounded-full bg-accent/10 text-accent border border-accent/20"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Buttons for GitHub and Demo links */}
              <div className="flex gap-3 mt-auto">
                {/* GitHub button - opens project code in new tab */}
                {project.github && (
                  <button
                    onClick={() => window.open(project.github, "_blank")} // Opens GitHub link in a new tab
                    className="flex-1 flex items-center justify-center gap-2 px-4 py-2 border-2 border-border rounded-md hover:border-accent transition-colors text-sm"
                  >
                    <GithubIcon /> {/* GitHub SVG icon */}
                    <span>Code</span> {/* Button text */}
                  </button>
                )}
                {/* Demo button - opens live demo in new tab */}
                {project.demo && (
                  <button
                    onClick={() => window.open(project.demo, "_blank")} // Opens demo link in a new tab
                    className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors text-sm font-medium"
                  >
                    <ExternalLinkIcon /> {/* External link SVG icon */}
                    <span>Demo</span> {/* Button text */}
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
export default Projects;

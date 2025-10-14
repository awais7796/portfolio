import React from "react";
const Projects = () => {
  return <div className=" pt-16">Projects</div>;
};

export default Projects;

// const Projects = () => {
//   const projects = [
//     {
//       id: 1,
//       title: "E-Commerce Platform",
//       description: "A full-stack e-commerce solution built with React, Node.js, and MongoDB. Features include user authentication, payment processing, and admin dashboard.",
//       technologies: ["React", "Node.js", "MongoDB", "Stripe"],
//       image: "🛒",
//       link: "#"
//     },
//     {
//       id: 2,
//       title: "Task Management App",
//       description: "A collaborative task management application with real-time updates, team collaboration features, and project tracking capabilities.",
//       technologies: ["React", "Socket.io", "Express", "PostgreSQL"],
//       image: "📋",
//       link: "#"
//     },
//     {
//       id: 3,
//       title: "Weather Dashboard",
//       description: "A responsive weather application that provides current weather conditions, forecasts, and interactive maps for multiple locations.",
//       technologies: ["React", "API Integration", "Chart.js", "CSS3"],
//       image: "🌤️",
//       link: "#"
//     },
//     {
//       id: 4,
//       title: "Social Media Analytics",
//       description: "An analytics dashboard for social media metrics with data visualization, reporting features, and trend analysis.",
//       technologies: ["React", "D3.js", "Python", "FastAPI"],
//       image: "📊",
//       link: "#"
//     },
//     {
//       id: 5,
//       title: "Portfolio Website",
//       description: "A modern, responsive portfolio website showcasing projects, skills, and professional experience with smooth animations.",
//       technologies: ["React", "Tailwind CSS", "Framer Motion", "Vite"],
//       image: "💼",
//       link: "#"
//     },
//     {
//       id: 6,
//       title: "Chat Application",
//       description: "A real-time chat application with group messaging, file sharing, and emoji reactions built with modern web technologies.",
//       technologies: ["React", "Socket.io", "Firebase", "Material-UI"],
//       image: "💬",
//       link: "#"
//     }
//   ];

//   return (
//     <div className="pt-16 min-h-screen bg-gray-50">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
//         <div className="text-center mb-12">
//           <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
//             My Projects
//           </h1>
//           <p className="text-xl text-gray-600 max-w-3xl mx-auto">
//             Here are some of the projects I've worked on. Each one represents a unique challenge
//             and an opportunity to learn and grow as a developer.
//           </p>
//         </div>

//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//           {projects.map((project) => (
//             <div key={project.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
//               <div className="p-6">
//                 <div className="text-4xl mb-4 text-center">{project.image}</div>
//                 <h3 className="text-xl font-semibold text-gray-900 mb-3">
//                   {project.title}
//                 </h3>
//                 <p className="text-gray-600 mb-4 text-sm leading-relaxed">
//                   {project.description}
//                 </p>
//                 <div className="flex flex-wrap gap-2 mb-4">
//                   {project.technologies.map((tech, index) => (
//                     <span
//                       key={index}
//                       className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full"
//                     >
//                       {tech}
//                     </span>
//                   ))}
//                 </div>
//                 <a
//                   href={project.link}
//                   className="inline-block w-full text-center bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded transition-colors duration-200"
//                 >
//                   View Project
//                 </a>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Projects;

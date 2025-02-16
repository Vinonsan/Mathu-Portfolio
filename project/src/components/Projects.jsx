import React from 'react'
import { Container } from 'react-bootstrap'
import { 
  FaCode, 
  FaExternalLinkAlt, 
  FaFolder,
  FaReact,
  FaNode,
  FaPython
} from 'react-icons/fa'
import { 
  SiExpress, 
  SiMongodb, 
  SiPostgresql, 
  SiRedux, 
  SiAmazonaws 
} from 'react-icons/si'
import './Projects.css'

function Projects() {
  const projects = [
    {
      id: 1,
      title: "Enhancing Railway Safety Using Computer Vision and Cloud-Based Technologies",
      description: "Research project focused on machine learning techniques and their applications to enhance railway safety and protect wildlife.",
      technologies: ["Node.js", "Express.js", "React.js", "PostgreSQL", "YOLOv8"],
      problem: "Train-related accidents involving wildlife, especially elephants and bulls.",
      solution: "Developed a system that integrates weather forecasting, predicts conditions, and provides real-time voice command alerts to train pilots about potential animal presence and weather hazards.",
      links: [
        {
          url: "https://github.com/yourusername/railway-safety-project",
          icon: <FaCode />,
          label: "View Project"
        }
      ]
    },
    {
      id: 2,
      title: "Dynamic Portfolio for Easy Update Skills",
      description: "Ongoing project to develop a dynamic portfolio using the MERN stack that allows real-time updates and easy data management for content.",
      technologies: ["MongoDB", "Express.js", "React.js", "Node.js"],
      problem: "Static portfolios that require manual code editing for updates.",
      solution: "Created a flexible and user-friendly dynamic portfolio where users can update project details, skills, and experience without altering the codebase. Features an intuitive interface with instant updates reflected on the portfolio.",
      links: [
        {
          url: "https://github.com/yourusername/dynamic-portfolio",
          icon: <FaCode />,
          label: "View Project"
        }
      ]
    },
    {
      id: 3,
      title: "Poster & Logo Creation",
      description: "Creating stunning posters and logos for various clients using design tools like Canva, Photoshop, and Illustrator.",
      technologies: ["Canva", "Photoshop", "Illustrator"],
      problem: "The need for professional and visually striking brand identities.",
      solution: "Developed eye-catching logos and promotional posters that help businesses establish a unique visual presence and communicate their brand values effectively.",
      links: [
        {
          url: "https://www.behance.net/yourprofile",
          icon: <FaExternalLinkAlt />,
          label: "View Portfolio"
        }
      ]
    },
    {
      id: 4,
      title: "User Interface for Dynamic Portfolio",
      description: "Designed an intuitive user interface for a dynamic portfolio using Figma, focusing on simplicity, functionality, and a modern aesthetic.",
      technologies: ["Figma"],
      problem: "Static portfolio interfaces that require regular updates and edits to content.",
      solution: "Created a user-friendly, visually appealing design for the dynamic portfolio, with an easy-to-navigate interface that allows real-time updates and smooth content management.",
      links: [
        {
          url: "https://www.figma.com/file/yourfigmalink",
          icon: <FaExternalLinkAlt />,
          label: "View UI Design"
        }
      ]
    }
  ];
  

  const getTechIcon = (tech) => {
    const icons = {
      'React': <FaReact />,
      'Node.js': <FaNode />,
      'MongoDB': <SiMongodb />,
      'Express.js': <SiExpress />,
      'PostgreSQL': <SiPostgresql />,
      'Redux': <SiRedux />,
      'Python': <FaPython />,
      'AWS': <SiAmazonaws />
    };
    return icons[tech] || null;
  };

  return (
    <section id="projects" className="projects-section">
      <Container>
        <h2 className="section-title">
          <FaCode className="title-icon" />
          Featured Projects
        </h2>
        <div className="projects-container">
          {projects.map((project, index) => (
            <div key={project.id} className="project-card">
              <div className="project-header">
                <FaFolder className="folder-icon" />
                <div className="project-links">
                  {project.links.map((link, i) => (
                    <a 
                      key={i}
                      href={link.url} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="project-link"
                    >
                      {link.icon}
                    </a>
                  ))}
                </div>
              </div>
              <div className="project-content">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
                <div className="project-details">
                  <div className="detail-section">
                    <h4>Problem:</h4>
                    <p>{project.problem}</p>
                  </div>
                  <div className="detail-section">
                    <h4>Solution:</h4>
                    <p>{project.solution}</p>
                  </div>
                </div>
                <div className="technologies">
                  {project.technologies.map((tech, i) => (
                    <span key={i} className="tech-tag">
                      {getTechIcon(tech)}
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  )
}

export default Projects
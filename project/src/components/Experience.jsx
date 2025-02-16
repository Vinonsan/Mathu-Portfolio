import { Container, Row, Col } from 'react-bootstrap';
import { FaBriefcase, FaCode, FaLaptopCode } from 'react-icons/fa';
import './Experience.css';

function Experience() {
  const experiences = [
    {
      id: 1,
      role: "Full Stack Developer",
      company: "Tech Solutions Ltd",
      duration: "2022 - Present",
      location: "Colombo, Sri Lanka",
      description: [
        "Developed and maintained web applications using React and Node.js",
        "Implemented responsive designs and user-friendly interfaces",
        "Collaborated with cross-functional teams on various projects"
      ],
      icon: <FaLaptopCode />
    },
    {
      id: 2,
      role: "Frontend Developer Intern",
      company: "Digital Innovations",
      duration: "2021 - 2022",
      location: "Colombo, Sri Lanka",
      description: [
        "Assisted in developing user interfaces using React",
        "Participated in code reviews and team meetings",
        "Gained hands-on experience with modern web technologies"
      ],
      icon: <FaCode />
    },
    {
      id: 3,
      role: "Junior Web Developer",
      company: "Creative Solutions",
      duration: "2020 - 2021",
      location: "Vavuniya, Sri Lanka",
      description: [
        "Built and maintained websites using HTML, CSS, and JavaScript",
        "Worked on various client projects",
        "Improved site performance and user experience"
      ],
      icon: <FaBriefcase />
    }
  ];

  return (
    <section id="experience" className="experience-section">
      <Container>
        <h2 className="section-title">Work Experience</h2>
        <div className="experience-container">
          {experiences.map((exp, index) => (
            <div key={exp.id} className="experience-card">
              <div className="experience-icon">
                {exp.icon}
              </div>
              <div className="experience-content">
                <div className="experience-header">
                  <h3 className="role">{exp.role}</h3>
                  <span className="duration">{exp.duration}</span>
                </div>
                <div className="company-info">
                  <h4 className="company">{exp.company}</h4>
                  <span className="location">{exp.location}</span>
                </div>
                <ul className="responsibilities">
                  {exp.description.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </div>
              <div className="card-overlay"></div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}

export default Experience; 
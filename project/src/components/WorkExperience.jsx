import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { 
  FaBriefcase, 
  FaUniversity, 
  FaChalkboardTeacher, 
  FaPalette, 
  FaCode,
  FaCalendarAlt,
  FaArrowRight 
} from 'react-icons/fa'
import './WorkExperience.css'

function WorkExperience() {
  const experiences = [
    {
      id: 1,
      icon: <FaUniversity />,
      title: "Research Project",
      company: "Rajarata University of Sri Lanka",
      duration: "December 2023 – February 2025",
      description: "This research focuses on utilizing machine learning techniques and cloud-based technologies to enhance railway safety and protect wildlife. The system aims to prevent train-related accidents involving animals, especially elephants and bulls. It integrates weather forecasting to predict conditions at both current and upcoming locations and provides train pilots with real-time voice command alerts for potential animal presence and weather hazards. Built using Node.js, Express.js, React.js, PostgreSQL, and YOLOv8, this project aims to improve both wildlife conservation and train safety."
    },
    {
      id: 2,
      icon: <FaChalkboardTeacher />,
      title: "Teaching",
      company: "Grades 6 to 11",
      duration: "August 2024 – Present",
      description: "Empowering students through engaging and interactive lessons in computer science and mathematics. My goal is to foster a deeper understanding of the subject while providing practical, real-world applications that help students excel both academically and creatively."
    },
    {
      id: 3,
      icon: <FaPalette />,
      title: "Freelance Graphic Designer",
      company: "Self-Employed",
      duration: "2024 – Present",
      description: "Designing eye-catching and professional visual content for a variety of clients, with a focus on brand identity, digital media, and marketing materials. I create custom designs that help businesses stand out and communicate their unique value to their audience."
    },
    {
      id: 4,
      icon: <FaCode />,
      title: "Frontend Developer (React.js)",
      company: "Self-Employed",
      duration: "2024 – Present",
      description: "Building dynamic and responsive web applications using React.js. I focus on delivering smooth, user-friendly experiences while ensuring scalability and performance, helping clients bring their digital ideas to life with modern web technologies."
    }
  ]

  return (
    <section id="experience" className="experience-section">
      <Container>
        <h2 className="section-title">
          <FaBriefcase className="title-icon" />
          Work Experience
        </h2>
        <div className="timeline">
          {experiences.map((exp, index) => (
            <div key={exp.id} className="timeline-item">
              <div className="timeline-icon">
                {exp.icon}
              </div>
              <div className="timeline-content">
                <div className="content-header">
                  <h3 className="experience-title">{exp.title}</h3>
                  <div className="company-info">
                    <span className="company-name">{exp.company}</span>
                    <div className="duration">
                      <FaCalendarAlt className="calendar-icon" />
                      {exp.duration}
                    </div>
                  </div>
                </div>
                <p className="experience-description">{exp.description}</p>
                <div className="animated-line">
                  <div className="line-dot"></div>
                  <div className="line-dot"></div>
                  <div className="line-dot"></div>
                </div>
              </div>
              {index !== experiences.length - 1 && (
                <div className="connector">
                  <FaArrowRight className="connector-icon" />
                </div>
              )}
            </div>
          ))}
        </div>
      </Container>
    </section>
  )
}

export default WorkExperience
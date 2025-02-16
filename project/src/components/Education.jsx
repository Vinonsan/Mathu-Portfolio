import React from 'react'
import { Container } from 'react-bootstrap'
import { FaGraduationCap, FaUniversity, FaAward, FaCertificate, FaCalendarAlt, FaBook, FaLaptopCode } from 'react-icons/fa'
import './Education.css'

function Education() {
  const education = [
    {
      id: 1,
      icon: <FaBook />,
      degree: "Ordinary Level",
      institution: "J/Urumpirai Hindu College",
      duration: "Year Completed",
      description: "Completed O/L with outstanding results",
      achievements: [
        "7 Distinctions",
        "B in ICT",
        "C in English"
      ]
    },
    {
      id: 2,
      icon: <FaGraduationCap />,
      degree: "Advanced Level",
      institution: "J/Urumpirai Hindu College",
      duration: "2020",
      description: "Combined Mathematics Stream",
      achievements: [
        "C in Physics & Chemistry",
        "B in Combined Mathematics"
      ]
    },
    {
      id: 3,
      icon: <FaLaptopCode />,
      degree: "Trainee - Full Stack Developer",
      institution: "University of Moratuwa Open Online Courses",
      duration: "2022 - Present",
      description: "Ongoing training in full-stack development covering modern web technologies.",
      achievements: [
        "Hands-on experience in frontend & backend development",
        "Building real-world applications"
      ]
    },
    {
      id: 4,
      icon: <FaUniversity />,
      degree: "BSc in Applied Science (Computer Science & Mathematics)",
      institution: "Rajarata University of Sri Lanka, Mihintale",
      duration: "2021 - 2025",
      description: "Currently studying Computer Science & Mathematics, with a focus on advanced research and applications.",
      achievements: [
        "Research Project: Enhancing Railway Safety using Computer Vision and Cloud-Based Technologies",
        "GPA: 2.9"
      ]
    }
  ];
  
  
  

  return (
    <section id="education" className="education-section">
      <Container>
        <h2 className="section-title">
          <FaCertificate className="title-icon" />
          My Educational Path
        </h2>
        <div className="education-timeline">
          {education.map((edu, index) => (
            <div key={edu.id} className="education-item">
              <div className="education-icon-wrapper">
                <div className="education-icon">
                  {edu.icon}
                </div>
                {index !== education.length - 1 && <div className="timeline-line" />}
              </div>
              <div className="education-content">
                <div className="education-header">
                  <h3 className="degree">{edu.degree}</h3>
                  <span className="duration">
                    <FaCalendarAlt className="calendar-icon" />
                    {edu.duration}
                  </span>
                </div>
                <div className="institution">
                  <FaUniversity className="inst-icon" />
                  {edu.institution}
                </div>
                <p className="description">{edu.description}</p>
                {edu.achievements && (
                  <div className="achievements">
                    <h4>
                      <FaAward className="achievement-icon" />
                      Achievements
                    </h4>
                    <ul>
                      {edu.achievements.map((achievement, i) => (
                        <li key={i}>{achievement}</li>
                      ))}
                    </ul>
                  </div>
                )}
                <div className="animated-dots">
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  )
}

export default Education
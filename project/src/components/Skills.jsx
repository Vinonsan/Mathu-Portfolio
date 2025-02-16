import React from 'react'
import { Container } from 'react-bootstrap'
import { 
  FaCode, 
  FaHtml5, 
  FaCss3Alt, 
  FaJs, 
  FaReact, 
  FaNodeJs, 
  FaPython, 
  FaGitAlt,
  FaBootstrap,
  FaPaintBrush,
  FaChalkboardTeacher, 
  FaUsers, 
  FaBook, 
  FaLanguage, 
  FaBrain,
  FaClock,
  FaHandsHelping,
  FaChartLine
} from 'react-icons/fa'
import { 
  SiMongodb,
  SiAdobephotoshop,
  SiAdobeillustrator,
  SiAdobexd,
  SiAdobepremierepro,
  SiAdobeaftereffects,
  SiFigma,
  SiCanva 
} from 'react-icons/si'
import './Skills.css'

function Skills() {
  const technicalSkills = [
    { 
      name: "HTML5/CSS3", 
      level: 90, 
      icon: <div className="icon-stack">
        <FaHtml5 className="icon-html" />
        
      </div>
    },
    { 
      name: "JavaScript", 
      level: 85, 
      icon: <FaJs className="icon-js" />
    },
    { 
      name: "React.js", 
      level: 85, 
      icon: <FaReact className="icon-react" />
    },
    { 
      name: "Bootstrap", 
      level: 90, 
      icon: <FaBootstrap className="icon-bootstrap" />
    },
    { 
      name: "Node.js", 
      level: 80, 
      icon: <FaNodeJs className="icon-node" />
    },
    { 
      name: "Python", 
      level: 75, 
      icon: <FaPython className="icon-python" />
    },
    { 
      name: "MongoDB", 
      level: 75, 
      icon: <SiMongodb className="icon-mongodb" />
    },
    { 
      name: "Git/GitHub", 
      level: 85, 
      icon: <FaGitAlt className="icon-git" />
    }
  ]

  const graphicSkills = [
    {
      name: "Photoshop",
      level: 85,
      icon: <SiAdobephotoshop className="icon-photoshop" />
    },
    {
      name: "Illustrator",
      level: 80,
      icon: <SiAdobeillustrator className="icon-illustrator" />
    },
    {
      name: "Adobe XD",
      level: 90,
      icon: <SiAdobexd className="icon-xd" />
    },
    {
      name: "Figma",
      level: 85,
      icon: <SiFigma className="icon-figma" />
    },
    {
      name: "Premiere Pro",
      level: 75,
      icon: <SiAdobepremierepro className="icon-premiere" />
    },
    {
      name: "After Effects",
      level: 70,
      icon: <SiAdobeaftereffects className="icon-aftereffects" />
    },
    {
      name: "Canva",
      level: 95,
      icon: <SiCanva className="icon-canva" />
    },
    {
      name: "Adobe CC",
      level: 85,
      icon: <SiAdobexd className="icon-adobe" />
    }
  ]

  const teachingSkills = [
    {
      name: "Classroom Management",
      level: 90,
      icon: <FaUsers />,
      description: "Effective management of student behavior and learning environment"
    },
    {
      name: "Curriculum Development",
      level: 85,
      icon: <FaBook />,
      description: "Creating and adapting educational materials and lesson plans"
    },
    {
      name: "Communication",
      level: 95,
      icon: <FaLanguage />,
      description: "Clear and effective communication with students and parents"
    },
    {
      name: "Student Assessment",
      level: 88,
      icon: <FaChartLine />,
      description: "Evaluating student progress and providing constructive feedback"
    },
    {
      name: "Problem Solving",
      level: 92,
      icon: <FaBrain />,
      description: "Quick resolution of academic and behavioral challenges"
    },
    {
      name: "Time Management",
      level: 87,
      icon: <FaClock />,
      description: "Efficient scheduling and lesson pacing"
    },
    {
      name: "Individual Support",
      level: 93,
      icon: <FaHandsHelping />,
      description: "Personalized attention to student needs"
    },
    {
      name: "Technology Integration",
      level: 85,
      icon: <FaChalkboardTeacher />,
      description: "Incorporating modern tools in teaching"
    }
  ]

  return (
    <section id="skills" className="skills-section">
      <Container>
        <div className="section-title-wrapper">
          <h2 className="section-title">
            <div className="rotating-icon-wrapper">
              <FaCode className="rotating-icon" />
            </div>
            Technical Skills
          </h2>
        </div>
        <div className="skills-grid">
          {technicalSkills.map((skill, index) => (
            <div key={index} className="skill-circle">
              <div className="circle-progress" style={{ '--percentage': `${skill.level}%` }}>
                <div className="inner-circle">
                  <div className="skill-icon-wrapper">
                    {skill.icon}
                  </div>
                  <span className="skill-name">{skill.name}</span>
                  <span className="skill-percentage">{skill.level}%</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="section-title-wrapper" style={{ marginTop: '5rem' }}>
          <h2 className="section-title">
            <div className="rotating-icon-wrapper">
              <FaPaintBrush className="rotating-icon" />
            </div>
            Graphic Tools
          </h2>
        </div>
        <div className="skills-grid">
          {graphicSkills.map((skill, index) => (
            <div key={index} className="skill-circle">
              <div className="circle-progress" style={{ '--percentage': `${skill.level}%` }}>
                <div className="inner-circle">
                  <div className="skill-icon-wrapper">
                    {skill.icon}
                  </div>
                  <span className="skill-name">{skill.name}</span>
                  <span className="skill-percentage">{skill.level}%</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="section-title-wrapper" style={{ marginTop: '5rem' }}>
          <h2 className="section-title">
            <div className="rotating-icon-wrapper">
              <FaChalkboardTeacher className="rotating-icon" />
            </div>
            Teaching Skills
          </h2>
        </div>
        <div className="teaching-skills-grid">
          {teachingSkills.map((skill, index) => (
            <div key={index} className="teaching-skill-card">
              <div className="skill-icon">
                {skill.icon}
              </div>
              <div className="skill-content">
                <h3 className="skill-title">{skill.name}</h3>
                <p className="skill-description">{skill.description}</p>
                <div className="skill-progress-container">
                  <div 
                    className="skill-progress-bar" 
                    style={{ width: `${skill.level}%` }}
                  >
                    <span className="progress-label">{skill.level}%</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  )
}

export default Skills
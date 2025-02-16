import { useState, useEffect } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaGithub } from 'react-icons/fa';
import profileImage from '../assets/mathu.jpeg'; // Import the image
import { FaDownload } from "react-icons/fa";

import './About.css';

function About() {
  const [currentRole, setCurrentRole] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const roles = ['Software Developer', 'Educator', 'Graphic Designer', 'Technical Educator', 'Problem Solver'];
  const typingSpeed = 100; // Speed of typing
  const deletingSpeed = 50; // Speed of deleting
  const delayBetweenRoles = 2000; // Delay before starting to delete

  useEffect(() => {
    let timeout;
    const currentWord = roles[currentRole];

    if (!isDeleting && displayText !== currentWord) {
      // Typing
      timeout = setTimeout(() => {
        setDisplayText(currentWord.substring(0, displayText.length + 1));
      }, typingSpeed);
    } else if (!isDeleting && displayText === currentWord) {
      // Delay before starting to delete
      timeout = setTimeout(() => {
        setIsDeleting(true);
      }, delayBetweenRoles);
    } else if (isDeleting && displayText !== '') {
      // Deleting
      timeout = setTimeout(() => {
        setDisplayText(currentWord.substring(0, displayText.length - 1));
      }, deletingSpeed);
    } else if (isDeleting && displayText === '') {
      // Move to next role
      setIsDeleting(false);
      setCurrentRole((prev) => (prev + 1) % roles.length);
    }

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, currentRole]);

  return (
    <section id="about" className="about-section">
      <Container>
        <Row className="align-items-center">
          <Col lg={6} className="about-text">
            <h1 className="main-title">
              Passionate Software Developer & Educator
            </h1>
            <div className="role-container">
              I am a <span className="animated-role">{displayText}</span>
              <span className="typing-cursor">|</span>
            </div>
            <p className="about-description">
              Passionate <strong>Software Developer</strong>, <strong>Educator</strong>, and <strong>Graphic Designer</strong>,
              dedicated to building innovative solutions, creating stunning designs, and sharing knowledge
              to empower others.
            </p>

            <div className="social-icons-container">
              <a href="https://www.facebook.com/share/1A1jkLvpBo/" target="_blank" rel="noopener noreferrer" className="social-icon">
                <FaFacebookF />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="social-icon">
                <FaTwitter />
              </a>
              <a href="https://www.linkedin.com/in/mathurika-jesuthas-4450aa296/" target="_blank" rel="noopener noreferrer" className="social-icon">
                <FaLinkedinIn />
              </a>
              <a href="https://github.com/Mathurika2000" target="_blank" rel="noopener noreferrer" className="social-icon">
                <FaGithub />
              </a>
            </div>

            <div className="cv-download-container">
                <a href="/Mathurika.pdf" download="/Mathurika.pdf">
                  <Button variant="danger" className="download-cv-btn">
                    Download CV <FaDownload style={{ marginLeft: "8px" }} />
                  </Button>
                </a>
              </div>
          </Col>
          <Col lg={6} className="about-image-container">
            <img
              src={profileImage}
              alt="Profile"
              className="about-profile-image"
            />
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default About;
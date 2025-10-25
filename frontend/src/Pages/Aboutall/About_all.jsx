import "./About_all.css";
import mainImage from "../../assets/Mask group.png";
import sideImage from "../../assets/young-indian-man-with-laptop-gray-wall 1.png";
import { FaAward, FaQuestionCircle, FaHeadset } from "react-icons/fa";
import StatsSection from '../../LandingPage/StatsSection/StatsSection';
import Framer from "../framer";
import Footer from "../../LandingPage/Footer/Footer";
import '../../LandingPage/Home/home.css';
import Navbar from "../../LandingPage/Home/Navbar";
import { useEffect, useRef, useState } from "react";
import Bar from "../../LandingPage/Home/Bar";
import { Col, Container, Row } from "react-bootstrap";

const Aboutall = () => {
  const heroRef = useRef(null);
  const menuRef = useRef(null);

  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const [menuOpen, setMenuOpen] = useState(false);
  const [showNavbar, setShowNavbar] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      setShowNavbar(!entry.isIntersecting);
    }, { threshold: 0.5 });

    if (heroRef.current) observer.observe(heroRef.current);
    return () => {
      if (heroRef.current) observer.unobserve(heroRef.current);
    };
  }, []);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    function handleClickOutside(event) {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setMenuOpen(false);
      }
    }
    if (menuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [menuOpen]);

  return (
    <>
      <div className={`fixed-navbar ${showNavbar ? "visible" : ""}`}>
        <Navbar isMobile={isMobile} showNavbar={showNavbar} />
      </div>

      <div className="about-section">
        <div ref={heroRef} className="header" style={{ position: "absolute", top: "30px", left: 0, right: 0, zIndex: 10 }}>
          <Bar logoText="heliolunor" menuRef={menuRef} isMobile={isMobile} menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
        </div>

        <section className="about-hero py-5">
          <Container>
            <Row className="align-items-center text-center text-md-start">
              <Col md={4} className="mb-4 mb-md-0">
                <img src="../asset/image/about1.png" alt="Student" className="heroImage" />
              </Col>
              <Col md={4}>
                <p className="subtitle">About heliolunor</p>
                <h1 className="title">
                  <span className="blue">heliolunor IT & Training</span><br />
                  Empowering Technology & Learning Together
                </h1>
                <div className="features mt-3">
                  <span>💻 Innovative IT Solutions</span>
                  <span>📚 Professional Training Courses</span>
                  <span>🚀 Career Growth & Skill Development</span>
                </div>
              </Col>
              <Col md={4}>
                <img src="../asset/image/about3.png" alt="Student" className="heroImage1" />
              </Col>
            </Row>
          </Container>
        </section>

        <Framer delay={0.1}>
          <section className="about-container py-5">
            <Container>
              <Row className="align-items-center">
                <Col lg={6} className="mb-4 mb-lg-0">
                  <div className="about-image-wrapper">
                    <div className="main-image">
                      <img src={mainImage} alt="Main" />
                      <div className="best-courser-badge">
                        <span className="icon">🏆</span>
                        <div>
                          <h4>Best Courser</h4>
                          <p>Ease of learning</p>
                        </div>
                      </div>
                    </div>
                    <div className="side-image">
                      <img src={sideImage} alt="Side" />
                    </div>
                  </div>
                </Col>

                <Col lg={6}>
                  <p className="section-label">About Us</p>
                  <h2>
                    Transform Your Skills Through Our <br /> Online Education Platform
                  </h2>
                  <p className="description">
                    We provide accessible, high-quality online education designed to help you achieve your personal and professional goals. Through interactive courses, practical projects, and expert guidance, we make learning flexible, engaging, and effective—empowering you to gain skills that matter in today’s world.
                  </p>

                  <Row className="about-features">
                    <Col sm={12} className="mb-3">
                      <div className="feature-card yellow d-flex align-items-start">
                        <div className="featurecard-icon-round">
                          <FaAward className="feature-icon" />
                        </div>
                        <div>
                          <h4>Highly Experienced</h4>
                          <p>Our team brings years of expertise and industry knowledge, ensuring you receive guidance and solutions you can trust.</p>
                        </div>
                      </div>
                    </Col>
                    <Col sm={12} className="mb-3">
                      <div className="feature-card blue d-flex align-items-start">
                        <div className="featurecard-icon-round">
                          <FaQuestionCircle className="feature-icon" />
                        </div>
                        <div>
                          <h4>Question, Quiz & Course</h4>
                          <p>Engage with interactive questions, challenging quizzes, and comprehensive courses designed to make learning effective and enjoyable.</p>
                        </div>
                      </div>
                    </Col>
                    <Col sm={12}>
                      <div className="feature-card purple d-flex align-items-start">
                        <div className="featurecard-icon-round">
                          <FaHeadset className="feature-icon" />
                        </div>
                        <div>
                          <h4>Dedicated Support</h4>
                          <p>Our support team is always ready to assist you, ensuring a smooth and hassle-free learning experience at every step.</p>
                        </div>
                      </div>
                    </Col>
                  </Row>
                </Col>
              </Row>
            </Container>
          </section>

          {/* Stats + Footer */}
          <StatsSection />
          <Footer />
        </Framer>
      </div>
    </>
  );
};

export default Aboutall;

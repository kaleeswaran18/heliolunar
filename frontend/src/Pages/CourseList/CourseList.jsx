import React, { useRef, useState, useEffect } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./CourseList.css";
import {
  FaCode, FaMobileAlt, FaServer, FaLaptopCode, FaBullhorn,
  FaPaintBrush, FaBrain, FaVial, FaShieldAlt, FaRobot,
  FaChevronLeft, FaChevronRight, FaAward, FaQuestionCircle, FaHeadset
} from "react-icons/fa";
import { SiTensorflow, SiArduino } from "react-icons/si";
import mainImage from "../../assets/Mask group.png"; // replace with your main image
import sideImage from "../../assets/young-indian-man-with-laptop-gray-wall 1.png"; // replace with your side image
import Navbar from "../../LandingPage/Home/Navbar";
import '../../LandingPage/Home/home.css'
import Framer from '../framer';
import Footer from "../../LandingPage/Footer/Footer";
import Bar from "../../LandingPage/Home/Bar";
import profiles from './profiles'

const categories = [
  { icon: <FaCode />, title: "Web Development" },
  { icon: <FaMobileAlt />, title: "Mobile Development" },
  { icon: <FaServer />, title: "Backend" },
  { icon: <FaLaptopCode />, title: "Web Fullstack Development" },
  { icon: <FaMobileAlt />, title: "Mobile Fullstack Development" },
  { icon: <FaBullhorn />, title: "Digital Marketing" },
  { icon: <FaPaintBrush />, title: "UI/UX Design" },
  { icon: <FaBrain />, title: "AI" },
  { icon: <SiArduino />, title: "IoT" },
  { icon: <FaVial />, title: "Testing" },
  { icon: <FaShieldAlt />, title: "Cybersecurity" },
  { icon: <SiTensorflow />, title: "Machine Learning" },
  { icon: <FaRobot />, title: "Deep Learning" }
];





const ProfileCard = () => {
  const sliderRef = useRef(null);
  const heroRef = useRef(null)
  const menuRef = useRef(null)

  const [activeCategory, setActiveCategory] = useState(categories[0].title);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768)
  const [menuOpen, setMenuOpen] = useState(false)
  const [showNavbar, setShowNavbar] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      setShowNavbar(!entry.isIntersecting)
    }, { threshold: 0.5 })

    if (heroRef.current) observer.observe(heroRef.current)
    return () => {
      if (heroRef.current) observer.unobserve(heroRef.current)
    }
  }, [])

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768)
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  useEffect(() => {
    function handleClickOutside(event) {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setMenuOpen(false)
      }
    }
    if (menuOpen) {
      document.addEventListener("mousedown", handleClickOutside)
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [menuOpen])

  const scrollLeft = () => sliderRef.current.scrollBy({ left: -200, behavior: "smooth" });
  const scrollRight = () => sliderRef.current.scrollBy({ left: 200, behavior: "smooth" });

  const filteredProfiles = profiles.filter(
    (profile) => profile.title === activeCategory
  );

  return (
    <>
      <div className={`fixed-navbar ${showNavbar ? "visible" : ""}`}>
        <Navbar isMobile={isMobile} showNavbar={showNavbar} />
      </div>

      <div className="about-section">

        <div ref={heroRef} className="header" style={{ position: "absolute", top: "30px", left: 0, right: 0, zIndex: 10 }}>
          <Bar logoText="BetterThis" menuRef={menuRef} isMobile={isMobile} menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
        </div>

        {/* Top Banner */}
        <div className="about-profile-sec8">
          <div className="hero">
            <Container className="hero-container">
              <Row className="align-items-center">
                <Col md={6} className="text-center text-md-start">
  <p className="subtitle">Develop Your Skills In a New and Unique Way</p>
  <h1 className="title">
    <span className='gold-gradient'>Better This Course</span><br />
    Boost Your Skills & Career Growth
  </h1>
  <div className="features mt-3">
    <span>✅ Master In-Demand Skills</span>
    <span>🚀 Learn at Your Own Pace</span>
    <span>🎯 Achieve Real Results</span>
  </div>
</Col>
                <Col md={6} className="text-center mt-4 mt-md-0">
                  <img
                    src="../asset/image/cd6.png"
                    alt="Student"
                    className='heroImage'
                  />
                </Col>
              </Row>
            </Container>
          </div>
        </div>




      </div>
      <Framer delay={0.1}>


        {/* Categories Slider */}
        <div className="categories-slider-wrapper">
          <Button variant="dark" className="slider-btn" onClick={scrollLeft}>
            <FaChevronLeft />
          </Button>

          <div className="categories-slider" ref={sliderRef}>
            {categories.map((cat, index) => (
              <div
                key={index}
                className={`category-card ${activeCategory === cat.title ? 'active' : ''}`}
                onClick={() => setActiveCategory(cat.title)}
              >
                <div className="icon">{cat.icon}</div>
                <div className="title">{cat.title}</div>
                <div className="count">{cat.count} Courses</div>
              </div>
            ))}
          </div>

          <Button variant="dark" className="slider-btn" onClick={scrollRight}>
            <FaChevronRight />
          </Button>
        </div>


        {/* Profile Cards */}
        {/* Profile Cards */}
        <Container fluid className="py-4">
          <Row className="g-4 justify-content-center">
            {filteredProfiles.length > 0 ? (
              filteredProfiles.map((profile, idx) => (
                <Col key={idx} xs={6} md={4} lg={3}>
                  <div className="card-wrapper">
                    <img src={profile.img} alt={profile.name} className="floating-img" />
                    <div className="character-card" style={{ background: profile.bgColor }}>
                      <h5 className="character-name">{profile.name}</h5>
                      {profile.title && (
                        <p className="character-subtitle">{profile.title}</p>
                      )}
                    </div>
                  </div>
                </Col>
              ))
            ) : (
              <p className="text-muted text-center">No profiles found.</p>
            )}
          </Row>
        </Container>



        <Footer />
      </Framer>
    </>
  );
};

export default ProfileCard;

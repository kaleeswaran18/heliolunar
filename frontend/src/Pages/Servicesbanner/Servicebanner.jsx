import React, { useState, useEffect, useRef } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import "./Servicebanner.css";
import { FaProjectDiagram, FaUsers, FaHandshake } from "react-icons/fa";
import Footer from "../../LandingPage/Footer/Footer";
import Navbar from "../../LandingPage/Home/Navbar";
import Bar from "../../LandingPage/Home/Bar";

const sections = [
  
  {
    label: "SERVICE",
    title: "AI & Machine Learning",
    description:
      "Innovatively leverages cutting-edge AI & Machine Learning to fortify C-suite decisions and automate insights.",
    image: "../assets/image/AI01.jpg",
  },
  {
    label: "SERVICE",
    title: "Cloud Services",
    description:
      "We specialize in integrating cloud strategies with business goals for organizations embracing digital transformation.",
    image: "../assets/image/CL03.jpeg",
  },
  {
    title: "Web Application",
    description:
      "Design and develop scalable, high-performance web solutions tailored to streamline operations, boost client engagement, and grow your business.",
    image: "../assets/image/webdesign.jpg",
    overlayText: "Add feedback",
  },
  {
    title: "Mobile Application",
    description:
      "Build intuitive mobile apps that enhance customer experience, improve brand visibility, and drive business growth across platforms.",
    image: "../assets/image/mbb01.jpg",
    overlayText: "Reporting",
  },
  {
    title: "Testing",
    description:
      "Ensure flawless performance through rigorous functional, security, and usability testing — safeguarding your brand and customer trust.",
    image: "../assets/image/testing.jpg",
    overlayText: "Reporting",
  },
  {
    title: "AI",
    description:
      "Integrate AI-driven solutions to automate workflows, optimize decision-making, and gain a competitive edge in your industry.",
    image: "../assets/image/ai.jpg",
    overlayText: "Reporting",
  },
  {
    title: "Cybersecurity",
    description:
      "Protect your digital assetss with advanced security measures, threat monitoring, and compliance solutions for business continuity.",
    image: "../assets/image/cyber.jpg",
    overlayText: "Reporting",
  },
  {
    title: "IOT",
    description:
      "Leverage IoT technologies to connect devices, collect actionable data, and drive smarter, data-backed business strategies.",
    image: "../assets/image/IOT1.jpg",
    overlayText: "Tagged updates",
  },
  {
    title: "SEO",
    description:
      "Boost your online visibility with SEO strategies that attract quality leads, strengthen brand authority, and increase conversions.",
    image: "../assets/image/seo.jpg",
    overlayText: "Created",
  },
];

const Servicebanner = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [fade, setFade] = useState(true);
  const sectionRefs = useRef([]);
  const navigate = useNavigate();
  const [showNavbar, setShowNavbar] = useState(false)
   const [isMobile, setIsMobile] = useState(window.innerWidth < 768)
     const heroRef = useRef(null)
     const [menuOpen, setMenuOpen] = useState(false)
     const menuRef = useRef(null)
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
    const handleScroll = () => {
      sectionRefs.current.forEach((ref, index) => {
        if (ref) {
          const rect = ref.getBoundingClientRect();
          if (rect.top >= 0 && rect.top < window.innerHeight / 2) {
            if (index !== activeIndex) {
              setFade(false);
              setTimeout(() => {
                setActiveIndex(index);
                setFade(true);
              }, 200);
            }
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [activeIndex]);

 return (
  <>
    <div className={`fixed-navbar ${showNavbar ? "visible" : ""}`}>
          <Navbar isMobile={isMobile} showNavbar={showNavbar} />
        </div>
  <div className="about-section">

        <div ref={heroRef} className="header" style={{ position: "absolute", top: "30px", left: 0, right: 0, zIndex: 10 }}>
          <Bar 
  logoText={
    <img 
      src="../../assets/image/final3.png"  // put your logo image path here
      alt="heliolunar Logo" 
      style={{ height: "100px", objectFit: "contain" }} 
    />
  } 
  menuRef={menuRef} 
  isMobile={isMobile} 
  menuOpen={menuOpen} 
  setMenuOpen={setMenuOpen} 
/>
        </div>

        {/* Top Banner */}
        <div className="about-profile-sec8">
          <div className="hero">
     <Container style={{ marginTop: '3%' }}>
  <Row className="align-items-center text-center">

    {/* Full width text */}
    <Col md={12}>
      <p className="subtitle">Transform Your Business With heliolunar</p>
      <h1 className="title">
        <span className='blue'>heliolunar Services</span><br />
        Innovative Solutions For Your Growth
      </h1>
      <div className="features mt-3">
        <span>✅ Tailored Digital Solutions</span>
        <span>🚀 Drive Efficiency & Scalability</span>
        <span>🎯 Focused On Real Business Impact</span>
      </div>
    </Col>

    {/* Full width image */}
    <Col md={12} className="mt-4">
      <img
        src="../assets/image/Screenshot 2025-08-24 162346.png"
        alt="Service"
        className="heroImage"
      />
    </Col>

  </Row>
</Container>


    </div>
        </div>




      </div>

    <Container fluid className="what-we-do-section">
      {/* Your second section here (with sticky image and content) */}
      <Row>
        <Col md={6} className="sticky-image-column">
          <div className="sticky-image">
            <img
              src={sections[activeIndex].image}
              alt={sections[activeIndex].title}
              style={{ opacity: fade ? 1 : 0 }}
            />
          </div>
        </Col>

        <Col md={6} className="content-column">
          {sections.map((sec, index) => (
            <div
              key={index}
              className="content-block"
              ref={(el) => (sectionRefs.current[index] = el)}
            >
              <div className="mobile-image d-md-none">
                <img src={sec.image} alt={sec.title} />
              </div>

              {sec.label && <p className="service-label">{sec.label}</p>}
              <h2>{sec.title}</h2>
              <p>{sec.description}</p>
              <Button variant="outline-dark" className="read-more-btn">
                READ MORE <span className="arrow-icon">↗</span>
              </Button>
              <hr className="section-divider" />
            </div>
          ))}
        </Col>
      </Row>
    </Container>

    <Footer />
  </>
);
};

export default Servicebanner;

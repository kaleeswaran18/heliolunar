import React, { useState, useEffect, useRef } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom"; // ✅ Import for navigation
import { motion } from "framer-motion"; // ✅ For mobile image animation
import "./services.css";

const sections = [

  {
    label: "SERVICE",
    title: "Web Application",
    description:
      "Our team of adept engineers merge creativity, proficiency, and state-of-the-art tools to metamorphose your concepts into market-ready products. We cover the entire product lifecycle, including research, UX/UI design, prototyping, development, rigorous testing, and post-launch support—ensuring your solution is innovative, scalable, and built for long-term success.",
    image: "../assets/image/91.png",
  },
  {
    label: "SERVICE",
    title: "AI & Machine Learning",
    description:
      "We leverage cutting-edge AI and Machine Learning to fortify C-suite decisions, uncover hidden opportunities, and automate complex processes. Our expertise spans predictive analytics, computer vision, natural language processing, and intelligent recommendation systems—enabling businesses to transform data into actionable insights and gain a competitive edge.",
    image: "../assets/image/92.png",
  },
  {
    label: "SERVICE",
    title: "Cloud Services",
    description:
      "We specialize in integrating cloud strategies with business goals for organizations embracing digital transformation. From cloud migration and architecture design to cost optimization, security hardening, and ongoing management, our solutions empower businesses with agility, scalability, and resilience—ensuring your operations run seamlessly in a secure, future-ready environment.",
    image: "../assets/image/93.png",
  },
  
];

const WhatWeDoBest = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [fade, setFade] = useState(true);
  const sectionRefs = useRef([]);
  const navigate = useNavigate();

  // Scroll logic for desktop sticky image
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
      <Container fluid className="what-we-do-section">
        <Row>
          {/* Left Sticky Image (Desktop) */}
          <Col md={6} className="sticky-image-column d-none d-md-block">
            <div className="sticky-image">
              <img
                src={sections[activeIndex].image}
                alt={sections[activeIndex].title}
                style={{ opacity: fade ? 1 : 0, transition: "opacity 0.3s" }}
              />
            </div>
          </Col>

          {/* Right Content */}
          <Col md={6} className="content-column">
            {sections.map((sec, index) => (
              <div
                key={index}
                className="content-block"
                ref={(el) => (sectionRefs.current[index] = el)}
              >
                {/* Mobile image with animation */}
               <motion.div
  className="mobile-image d-md-none"
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ amount: 0.5 }} // removed once:true
  transition={{ duration: 0.6 }}
>
  <img src={sec.image} alt={sec.title} />
</motion.div>

                <p className="service-label">{sec.label}</p>
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

      {/* View All Services Button */}
      <div className="text-center mt-4">
        <Button
          className="view-all-btn"
          onClick={() => navigate("/Servicesall")}
        >
          VIEW ALL SERVICES
        </Button>
      </div>
    </>
  );
};

export default WhatWeDoBest;

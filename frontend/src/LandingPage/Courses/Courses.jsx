// Courses.js
import React, { useRef } from "react";
import { Container, Button, Col, Row } from "react-bootstrap";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import "./courses.css";

const courses = [
  { title: "Fullstack", img: "../assets/image/fullstack.jpg" },
  { title: "Frontend Development", img: "../assets/image/frontend.jpg" },
  { title: "Backend Development", img: "../assets/image/backend.jpg" },
  { title: "Database", img: "../assets/image/database.jpg" },
  { title: "Mobile Development", img: "../assets/image/frontend.jpg" },
  { title: "UI/UX Design", img: "../assets/image/fullstack.jpg" },
];

const Courses = () => {
  const scrollRef = useRef();
  const navigate = useNavigate();

  const scroll = (direction) => {
    if (!scrollRef.current) return;
    const cardWidth = scrollRef.current.firstChild.offsetWidth + 20;
    scrollRef.current.scrollBy({
      left: direction === "left" ? -cardWidth : cardWidth,
      behavior: "smooth",
    });
  };

  return (
    <section className="py-5">
      <Container>
        {/* Header */}
        <Row className="align-items-center mb-4">
          <Col xs={12} md={8}>
            <h2 className="fw-bold">Courses We Offer</h2>
            <p className="text-muted" style={{ maxWidth: "600px" }}>
              Explore our expertly crafted courses designed to boost your skills and career.
Learn from industry professionals with real-world experience
            </p>
          </Col>
          <Col
            xs={12}
            md={4}
            className="d-flex justify-content-md-end justify-content-start mt-3 mt-md-0 course-scroll-buttons"
          >
            <div className="d-flex gap-3">
              <Button variant="light" className="rounded-circle p-2" onClick={() => scroll("left")}>
                <FaChevronLeft />
              </Button>
              <Button variant="light" className="rounded-circle p-2" onClick={() => scroll("right")}>
                <FaChevronRight />
              </Button>
            </div>
          </Col>
        </Row>

        {/* Cards Slider */}
       <div className="course-slider" ref={scrollRef}>
  {courses.map((course, index) => (
    <div className="destination-card" key={index}>
      <div className="destination-image">
        <img src={course.img} alt={course.title} />
        <div className="destination-hover">
          <h5>{course.title}</h5>
        </div>
      </div>
      <div className="destination-info">
        <h5>{course.title}</h5>
      </div>
    </div>
  ))}

  {/* View All Button Card */}
  <div
    className="destination-card view-all-card"
    onClick={() => navigate("/CourseList")}
  >
    <div className="view-all-content">
      <span>View All</span>
    </div>
  </div>
</div>
        
      </Container>
     
  
    </section>
  );
};

export default Courses;

import React, { useEffect, useRef, useState } from "react";
import "./ContactPage.css"; 
import "bootstrap/dist/css/bootstrap.min.css";
import { FaPhoneAlt, FaEnvelope, FaHeadphones } from "react-icons/fa";
import { Link } from "react-router-dom";
import Framer from "../framer";
import Footer from "../../LandingPage/Footer/Footer";
import Navbar from "../../LandingPage/Home/Navbar";
import "../../LandingPage/Home/home.css";
import Bar from "../../LandingPage/Home/Bar";
import axios from "axios";

function ContactPage() {
  const heroRef = useRef(null);
  const menuRef = useRef(null);

  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const [menuOpen, setMenuOpen] = useState(false);
  const [showNavbar, setShowNavbar] = useState(false);

  // form states
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState("");

  // input change
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // validate
  const validate = () => {
    let newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.email) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Invalid email format";
    }
    if (!formData.subject.trim()) newErrors.subject = "Subject is required";
    if (!formData.message.trim()) newErrors.message = "Message is required";
    return newErrors;
  };

  // submit
  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    try {
      await axios.post("https://contact-page-r8bx.onrender.com/send-email", formData);
      setStatus("✅ Message sent successfully!");
      setFormData({ name: "", email: "", subject: "", message: "" });
      setErrors({});
    } catch (error) {
      setStatus("❌ Failed to send message. Try again later.");
    }
  };

  // Navbar show/hide
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setShowNavbar(!entry.isIntersecting),
      { threshold: 0.5 }
    );
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

      {/* Hero Section */}
      <header
        className="hero-section text-white text-center py-5"
        style={{
          backgroundImage: `url('../asset/image/backgroundimg.jpg')`,
          width: "100%",
          height: "350px",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div
          ref={heroRef}
          className="header"
          style={{
            position: "absolute",
            top: "30px",
            left: 0,
            right: 0,
            zIndex: 10,
          }}
        >
             <Bar 
  logoText={
    <img 
      src="../../asset/image/final3.png"  // put your logo image path here
      alt="heliolunor Logo" 
      style={{ height: "100px", objectFit: "contain" }} 
    />
  } 
  menuRef={menuRef} 
  isMobile={isMobile} 
  menuOpen={menuOpen} 
  setMenuOpen={setMenuOpen} 
/>
        </div>
        <div className="contactdetails">
          <h1>Contact Us</h1>
          <p>Home / Contact Us</p>
        </div>
      </header>

      <Framer delay={0.1}>
        {/* Contact Info */}
        <div className="container my-5">
          <div className="row justify-content-center gap-4">
            <div className="col-md-3 contact-card phonecard">
              <div className="d-flex align-items-start">
                <div className="icon-circle me-3">
                  <FaPhoneAlt size={24} />
                </div>
                <div>
                  <h6 className="fw-bold mb-1">Contact Phone Number</h6>
                  <p className="mb-0">+91 6380319582</p>
                </div>
              </div>
            </div>
            <div className="col-md-3 contact-card  emailcard ">
              <div className="d-flex align-items-start">
                <div className="icon-circle me-3">
                  <FaEnvelope size={24} />
                </div>
                <div>
                  <h6 className="fw-bold mb-1">Our Email Address</h6>
                  <p className="mb-0">kaleeswaran.b@heliolunor.in</p>
                  <p className="mb-0">infoheliolunor@gmail.com</p>
                  </div>
              </div>
            </div>
            <div className="col-md-3 contact-card locationcard">
              <div className="d-flex align-items-start">
                <div className="icon-circle me-3">
                  <FaHeadphones size={24} />
                </div>
                <div>
                  <h6 className="fw-bold mb-1">Our Location</h6>
                  <p className="mb-0">
                    18,sentamil 11th street parasakthinagar avanipuram
                  </p>
                  <p className="mb-0">Madurai-625012</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Form + Image */}
        <div className="container my-5">
          <div className="row g-0 shadow rounded-4 overflow-hidden d-flex align-items-stretch">
            <div className="col-md-6 p-0">
              <img
                src="../asset/image/Maskgroup.png"
                alt="Team Working"
                className="img-fluid w-100 h-100 object-fit-cover"
                style={{
                  borderTopLeftRadius: "16px",
                  borderBottomLeftRadius: "16px",
                }}
              />
            </div>

            <div className="col-md-6 d-flex flex-column justify-content-center bg-white p-5">
              <h3 className="fw-bold mb-4">Send us a message</h3>
              <form className="modern-form" onSubmit={handleSubmit}>
                <div className="form-floating mb-3">
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className={`form-control ${
                      errors.name ? "is-invalid" : ""
                    }`}
                    id="floatingName"
                    placeholder="Name"
                  />
                  <label htmlFor="floatingName">Name</label>
                  {errors.name && (
                    <div className="invalid-feedback">{errors.name}</div>
                  )}
                </div>

                <div className="form-floating mb-3">
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className={`form-control ${
                      errors.email ? "is-invalid" : ""
                    }`}
                    id="floatingEmail"
                    placeholder="Email"
                  />
                  <label htmlFor="floatingEmail">Email</label>
                  {errors.email && (
                    <div className="invalid-feedback">{errors.email}</div>
                  )}
                </div>

                <div className="form-floating mb-3">
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className={`form-control ${
                      errors.subject ? "is-invalid" : ""
                    }`}
                    id="floatingSubject"
                    placeholder="Subject"
                  />
                  <label htmlFor="floatingSubject">Subject</label>
                  {errors.subject && (
                    <div className="invalid-feedback">{errors.subject}</div>
                  )}
                </div>

                <div className="form-floating mb-4">
                  <textarea
                    className={`form-control ${
                      errors.message ? "is-invalid" : ""
                    }`}
                    placeholder="Leave a message here"
                    id="floatingMessage"
                    name="message"
                    style={{ height: "120px" }}
                    value={formData.message}
                    onChange={handleChange}
                  ></textarea>
                  <label htmlFor="floatingMessage">Your Message</label>
                  {errors.message && (
                    <div className="invalid-feedback">{errors.message}</div>
                  )}
                </div>

                <button type="submit" className="btn submit-btn w-100">
                  Submit Message
                </button>

                {status && <p className="mt-3">{status}</p>}
              </form>
            </div>
          </div>
        </div>
        <Footer />
      </Framer>
    </>
  );
}

export default ContactPage;

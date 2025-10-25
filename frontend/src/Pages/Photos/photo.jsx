import React, { useEffect, useRef, useState } from "react";
import "./photos.css"; 
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
const colleges = [
  {
    id: "sethu",
    name: "Sethu Institute of Technology",
    image: "../asset/image/SIT.jpg",
    photos: [
      "../asset/image/sethu1.jpg",
      "../asset/image/sethu2.jpg",
      "../asset/image/sethu3.jpg",
    ],
  },
  {
    id: "kalasalingam",
    name: "Kalasalingam University",
    image: "../asset/image/klc.jpg",
    photos: [
      "../asset/image/kalas1.jpg",
      "../asset/image/kalas2.jpg",
    ],
  },
  {
    id: "muthayammal",
    name: "Muthayammal Polytechnic",
    image: "../asset/image/muthayammal.jpg",
    photos: [
      "../asset/image/muthayammal1.jpeg",
      "../asset/image/muthayammal2.jpeg",
      "../asset/image/muthayammal3.jpeg",
      "../asset/image/muthayammal4.jpeg",
      "../asset/image/muthayammal5.jpeg",
   
    ],
  },
  {
    id: "vellamal",
    name: "Vellamal Institute of Technology",
    image: "../asset/image/vellamal.jpg",
    photos: [
      "../asset/image/vellamal1.jpg",
      "../asset/image/vellamal2.jpg",
    ],
  },
  {
    id: "npr",
    name: "NPR Arts and Science",
    image: "../asset/image/NPR.jpg",
    photos: [
      "../asset/image/npr1.jpg",
      "../asset/image/npr2.jpg",
    ],
  },
];

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
          <h1>Gallary</h1>
          <p>Home / Gallary</p>
        </div>
      </header>
    <section className="container my-5">
  <h2 className="text-center mb-4">Our Visited Colleges</h2>
  <div className="row g-4">
    {colleges.map((college, index) => (
      <div className="col-md-4 col-sm-6" key={index}>
        <Link 
          to={`/viewphotos/${college.id}`} 
          style={{ textDecoration: "none", color: "inherit" }}
        >
          <div className="card h-100 text-center shadow-sm">
            <img
              src={college.image}
              className="card-img-top"
              alt={college.name}
              style={{ height: "200px", objectFit: "cover" }}
            />
            <div className="card-body">
              <h5 className="card-title">{college.name}</h5>
            </div>
          </div>
        </Link>
      </div>
    ))}
  </div>
</section>
    
    </>
  );
}

export default ContactPage;

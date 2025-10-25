import React, { useEffect, useRef, useState } from "react";
import "./photos.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link, useParams } from "react-router-dom";
import Navbar from "../../LandingPage/Home/Navbar";
import Bar from "../../LandingPage/Home/Bar";
import { colleges } from "./allphotos";

function ContactPage() {
  const { id } = useParams();
  const college = colleges.find((c) => c.id === id);

  const heroRef = useRef(null);
  const menuRef = useRef(null);

  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const [menuOpen, setMenuOpen] = useState(false);
  const [showNavbar, setShowNavbar] = useState(false);

  // Lightbox state
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  if (!college) return <h2 className="text-center my-5">College not found</h2>;

  // Navbar observer
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

  // Lightbox handlers
  const openLightbox = (index) => {
    setCurrentIndex(index);
    setLightboxOpen(true);
  };

  const closeLightbox = () => setLightboxOpen(false);

  const nextMedia = () => {
    if (currentIndex < college.photos.length - 1) setCurrentIndex(currentIndex + 1);
  };

  const prevMedia = () => {
    if (currentIndex > 0) setCurrentIndex(currentIndex - 1);
  };

  return (
    <>
      <div className={`fixed-navbar ${showNavbar ? "visible" : ""}`}>
        <Navbar isMobile={isMobile} showNavbar={showNavbar} />
      </div>

      {/* Hero Banner */}
      <header
        className="hero-section text-white text-center py-5"
        style={{
          backgroundImage: `url(${college.photos[0]})`,
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
          style={{ position: "absolute", top: "30px", left: 0, right: 0, zIndex: 10 }}
        >
          <Bar 
            logoText={
              <img 
                 src="../../assets/image/final3.png"
                alt="BetterLogo" 
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
          <h1>{college.name}</h1>
        </div>
      </header>

      {/* Media Grid */}
      <div className="container my-5">
        <div className="row g-4">
          {college.photos.map((media, index) => {
            const isVideo = media.endsWith(".mp4") || media.endsWith(".webm");
            return (
              <div className="col-md-4 col-sm-6" key={index}>
                <div 
                  className="card card-hover shadow-sm position-relative" 
                  style={{ cursor: "pointer" }}
                  onClick={() => openLightbox(index)}
                >
                  {isVideo ? (
                    <video
                      src={media}
                      className="card-img-top"
                      style={{ height: "250px", objectFit: "cover", width: "100%" }}
                    />
                  ) : (
                    <img
                      src={media}
                      alt={`${college.name} ${index + 1}`}
                      className="card-img-top"
                      style={{ height: "250px", objectFit: "cover", width: "100%" }}
                    />
                  )}
                  <div className="overlay d-flex justify-content-center align-items-center">
                    <span style={{ color: "white", fontSize: "1.5rem" }}>View</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Lightbox */}
      {lightboxOpen && (
        <div 
          className="lightbox-overlay d-flex justify-content-center align-items-center"
          onClick={closeLightbox}
          style={{
            position: "fixed",
            top: 0, left: 0, right: 0, bottom: 0,
            backgroundColor: "rgba(0,0,0,0.9)",
            zIndex: 9999
          }}
        >
          <div 
            onClick={(e) => e.stopPropagation()} 
            style={{ position: "relative", maxWidth: "90%", maxHeight: "90%" }}
          >
            {/* Close Button */}
            <button 
              onClick={(e) => { e.stopPropagation(); closeLightbox(); }}
              style={{
                position: "absolute", top: 10, right: 10,
                fontSize: "2rem", color: "white", background: "none", border: "none", cursor: "pointer",
                zIndex: 10
              }}
            >
              &times;
            </button>

            {/* Prev Button */}
            {currentIndex > 0 && (
              <button 
                onClick={(e) => { e.stopPropagation(); prevMedia(); }}
                style={{
                  position: "absolute", top: "50%", left: -40,
                  fontSize: "2rem", color: "white", background: "none", border: "none", cursor: "pointer",
                  zIndex: 10
                }}
              >
                &#10094;
              </button>
            )}

            {/* Next Button */}
            {currentIndex < college.photos.length - 1 && (
              <button 
                onClick={(e) => { e.stopPropagation(); nextMedia(); }}
                style={{
                  position: "absolute", top: "50%", right: -40,
                  fontSize: "2rem", color: "white", background: "none", border: "none", cursor: "pointer",
                  zIndex: 10
                }}
              >
                &#10095;
              </button>
            )}

            {/* Media */}
            {college.photos[currentIndex].endsWith(".mp4") ? (
              <video 
                src={college.photos[currentIndex]} 
                controls 
                autoPlay 
                style={{ maxHeight: "80vh", maxWidth: "100%", objectFit: "contain" }} 
              />
            ) : (
              <img 
                src={college.photos[currentIndex]} 
                alt="" 
                style={{ maxHeight: "80vh", maxWidth: "100%", objectFit: "contain" }} 
              />
            )}

            {/* Media Counter */}
            <div style={{ position: "absolute", bottom: 10, left: "50%", transform: "translateX(-50%)", color: "white" }}>
              {currentIndex + 1} / {college.photos.length}
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default ContactPage;

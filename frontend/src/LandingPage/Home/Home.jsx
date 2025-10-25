import { useEffect, useRef, useState } from "react"
import Navbar from "./Navbar"
import "./home.css"
import HomeImage from "./assets/alterbanner.png"
import { Swiper, SwiperSlide, } from "swiper/react";
import { Pagination, Autoplay, EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
import Particle from "./Particle";
import { AnimatePresence, motion } from "framer-motion";
import { op1, op2, globeOptions } from './options'
import Bar from "./Bar"
import { useNavigate } from "react-router-dom";

const Home = () => {

  const navigate = useNavigate()
  const heroRef = useRef(null)
  const menuRef = useRef(null)
  const [showNavbar, setShowNavbar] = useState(false)
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768)
  const [menuOpen, setMenuOpen] = useState(false)
  const [activeSlide, setActiveSlide] = useState(0);

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

  const slides = [
    {
      image: HomeImage,
      options: op1,
      render: () => (
        <div
          className="expdf"
        >
          <h1> Powering the <span className="gradient-text">Future of Web, Mobile & AI</span></h1>
          <span>Delivering intelligent, seamless, and scalable digital solutions that drive growth and innovation.</span>
          <p onClick={() => navigate('/about')}>Let's Traverse</p>
        </div>
      ),
    },
    {
      image: HomeImage,
      options: op1,
      render: () => (
        <>
          <div
            className="expdf"
          >
            <h1>Outcome-based <span className="gradient-text">Innovation</span></h1>
            <span>Transform business with client-centered intelligent cloud solutions delivering intelligence, visiblity and smart technology</span>
            <p onClick={() => navigate('/about')}>Let's Traverse</p>
          </div>
        </>
      ),
    },
    {
      image: HomeImage,
      options: op1,
      render: () => (
        <div
          className="expdf"
        >
          <h1>Intuitive <span className="gradient-text">Intelligence Re-engineered</span></h1>
          <span>Operate with human insight, but at exceptional speed with the power to anticipate and act instantaneously</span>
          <p onClick={() => navigate('/about')}>Let's Traverse</p>
        </div>
      ),
    },
  ];

  return (
    <>
      <div className={`fixed-navbar ${showNavbar ? "visible" : ""}`}>
        <Navbar isMobile={isMobile} showNavbar={showNavbar} />
      </div>

      <section ref={heroRef} >
        <Swiper
          modules={[Pagination, Autoplay, EffectFade]}
          pagination={{ clickable: true }}
          autoplay={{ delay: 15000 }}
          loop
          effect="fade"
          fadeEffect={{ crossFade: false }}
          className="mySwiper"
          onSlideChange={(swiper) => setActiveSlide(swiper.realIndex)}
          allowTouchMove={false}     // disable swipe/drag change
          keyboard={{ enabled: true }}  // disable keyboard nav
        >
          {slides.map((slide, i) => (
            <SwiperSlide key={i}>
              <div style={{ position: "relative", height: "67rem", overflow: "hidden" }}>
                <div style={{ position: "absolute", top: 0, left: 0, right: 0, bottom: 0, zIndex: 1, overflow: "hidden" }}>
                  <video
                    src={'../asset/image/110.mp4'}
                    autoPlay
                    muted
                    loop
                    playsInline
                    preload="auto"
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                    }}
                  />
                </div>

                <div className="header" style={{ position: "absolute", top: "30px", left: 0, right: 0, zIndex: 10 }}>
                  <Bar logoText="heliolunor" menuRef={menuRef} isMobile={isMobile} menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
                </div>

                <div style={{ position: "relative", zIndex: 2 }}>
                  <motion.div
                    key={activeSlide}
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -40 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                  >
                    {slide.render()}
                  </motion.div>
                </div>
              </div>
            </SwiperSlide>

          ))}
        </Swiper>
      </section>

    </>
  )
}

export default Home
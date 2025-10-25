import React from "react"
import {
  FaFacebookF,
  FaYoutube,
  FaInstagram,
  FaXTwitter
} from "react-icons/fa6";
import "./Footer.css";
import logo from '../../../public/fav.png';
import { FaEnvelope, FaPhoneAlt } from "react-icons/fa"
import { useLocation, useNavigate } from "react-router-dom";

const Footer = () => {

  const navigate = useNavigate()
  const location = useLocation();


  const handleHome = () => {
    navigate("/")
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: "smooth" })
    }, 0)
  }

  const handleAbout = () => {
    if (location.pathname == "/about") {
      window.scrollTo({ top: 0, behavior: "smooth" })
    } else {
      navigate("/about")
      setTimeout(() => {
        window.scrollTo({ top: 0, behavior: "smooth" })
      }, 0)
    }
  }

  const handleNavigateCourse = () => {
    if (location.pathname == "/courselist") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      navigate("/courselist")
      setTimeout(() => {
        window.scrollTo({ top: 0, behavior: "smooth" })
      }, 0)
    }
  }


  const handleNavigateContact = () => {
    if (location.pathname == "/contact") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      navigate("/contact")
      setTimeout(() => {
        window.scrollTo({ top: 0, behavior: "smooth" })
      }, 0)
    }
  }


  return (
    <>



      <footer className="footer">
        <div className="corner corner-left"></div>
        <div className="corner corner-right"></div>

        <div className="footer-container">
          <div className="footer-column company-info">
            <div className="footerlogo">
              <span className="footerlogo-icon"><img src={'https://www.heliolunor.in/assets/image/final3.png'} width={"32px"} height={"32px"} /></span>
              <span className="footerlogo-text">heliolunor</span>
            </div>
            <p><strong>Email</strong><br />kaleeswaran.b@heliolunor.in</p>
            <p><strong>Phone Number</strong><br />+91 6380319582</p>
            <p><strong>Address</strong><br />18,sentamil 11th street parasakthinagar avanipuram<br />Madurai-625012</p>
          </div>

          <div className="footer-column quick-links">
            <h2>Quick Links</h2>
            <ul>
              <li onClick={handleHome}>Home</li>
              {/* <li>Services</li> */}
              <li onClick={handleAbout}>Inside heliolunor</li>
              <li onClick={handleNavigateCourse}>Courses</li>
              <li onClick={handleNavigateContact}>Contact Us</li>
            </ul>
          </div>

          <div className="footer-column services-links">
            <h2>Services</h2>
            <ul>
              <li>Digital Management</li>
              <li>Infrastructure</li>
              <li>Intelligence</li>
              <li>Innovation</li>
            </ul>
          </div>

          <div className="footer-column about">
            <h2>About Us</h2>
            <p>
              A forward-thinking IT consulting company specializing in digital strategy, innovation, and data-driven solutions. We empower clients to accelerate digital transformation and maintain a competitive edge in the rapidly evolving technology landscape.
            </p>
            <div className="social-icons">
              <FaFacebookF />
              <FaYoutube />
              <FaInstagram />
              <FaXTwitter />
            </div>
          </div>
        </div>


      </footer>
      <div className="footer-end-bottom">
        <div className="footer-bottom">

          <p>© Copyright {new Date().getFullYear()} heliolunor Technology Solutions </p>
          <div className="footer-info justify-content-end">

            <div className="footer-links">
              <a href="#">Privacy Policy</a>
              <span>|</span>
              <a href="#">Disclaimers</a>
            </div>
            <div className="contact-info">
              <span><FaPhoneAlt /> +91 6380319582</span>
              <span><FaEnvelope /> <a href="mailto:kaleeswaran.b@heliolunor.in">kaleeswaran.b@heliolunor.in</a></span>
            </div>

          </div>

        </div>
      </div>

    </>
  )
}

export default Footer

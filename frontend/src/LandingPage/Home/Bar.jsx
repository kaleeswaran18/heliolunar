import { GiHamburgerMenu } from "react-icons/gi"
import { Offcanvas } from "react-bootstrap"
import { useState, useRef } from "react"
import { FaPlus, FaMinus, FaCheckCircle, FaStar, FaCog } from "react-icons/fa"
import { useNavigate } from "react-router-dom"

const Bar = ({ from = null, logoText = "heliolunor", menuRef, isMobile, menuOpen, setMenuOpen }) => {

    const navigate = useNavigate()
    const [servicesOpen, setServicesOpen] = useState(false)
    const [showServicesDropdown, setShowServicesDropdown] = useState(false)

    const dropdownTimeout = useRef(null)

    const serviceOptLeft = [
        { icon: <FaCheckCircle />, label: "Digital Management" },
        { icon: <FaStar />, label: "Infrastructure" },
    ]

    const serviceOpRight = [
        { icon: <FaCog />, label: "Intelligence" },
        { icon: <FaCheckCircle />, label: "Innovation" },
    ]

    const handleMouseEnter = () => {
        if (dropdownTimeout.current) clearTimeout(dropdownTimeout.current)
        setShowServicesDropdown(true)
    }

    const handleMouseLeave = () => {
        dropdownTimeout.current = setTimeout(() => {
            setShowServicesDropdown(false)
        }, 200)
    }

    const navigateAndScrollTop = (path) => {
        navigate(path);
        setTimeout(() => {
            window.scrollTo({ top: 0, behavior: "smooth" });
        }, 0);
    };


    const isActive = (path) => {
        if (path == "/services") {
            return location.pathname.startsWith("/services");
        }
        return location.pathname == path
    }

    return (
        <nav className="bar-container">
            <h3
                className={`logo ${isActive("/") ? "active" : ""}`}
                style={{ cursor: "pointer" }}
                onClick={() => navigateAndScrollTop("/")}
            >
                {/* {logoText} */}
                <img
                    src="../../asset/image/final3.png"
                    alt="heliolunor Logo"
                    style={{
                        height: from == null ? "100px" : "50px",
                        objectFit: "contain"
                    }}

                />
            </h3>
            {isMobile ? (
                <>
                    <div
                        style={{ cursor: "pointer", fontSize: "1.5rem" }}
                        onClick={() => setMenuOpen(true)}
                    >
                        <GiHamburgerMenu />
                    </div>

                    <Offcanvas
                        show={menuOpen}
                        onHide={() => {
                            setMenuOpen(false)
                            setServicesOpen(false)
                        }}
                        placement="end"
                        className="custom-offcanvas"
                        backdrop={true}
                    >
                        <Offcanvas.Header closeButton />
                        <Offcanvas.Body>
                            <ul className="mobile-menu-list">
                                <li className={isActive("/") ? "active" : ""} onClick={() => navigateAndScrollTop("/")}>Home</li>
                                <li className={isActive("/about") ? "active" : ""} onClick={() => navigateAndScrollTop("/about")}  >Inside heliolunor</li>
                                <li className={isActive("/photos") ? "active" : ""} onClick={() => navigateAndScrollTop("/photos")}  >visitedcollage</li>
                                
                                <li className={isActive("/courselist") ? "active" : ""} onClick={() => navigateAndScrollTop("/courselist")}>Courses</li>
                                <li className={isActive("/contact") ? "active" : ""} onClick={() => navigateAndScrollTop("/contact")} >Contact Us</li>
                                {/* <li
                                    className="services-menu"
                                    onClick={() => setServicesOpen(!servicesOpen)}
                                    aria-expanded={servicesOpen}
                                >
                                    Services
                                    <span className="icon-toggle">
                                        {servicesOpen ? <FaMinus /> : <FaPlus />}
                                    </span>
                                </li>

                                {servicesOpen && (
                                    <ul className="service-submenu">
                                        {[...serviceOptLeft, ...serviceOpRight].map(({ icon, label }) => (
                                            <li key={label}>
                                                <span className="service-icon">{icon}</span>
                                                {label}
                                            </li>
                                        ))}
                                    </ul>
                                )} */}
                                {/* <li>Products</li> */}
                            </ul>
                        </Offcanvas.Body>
                    </Offcanvas>
                </>
            ) : (
                <ul className="nav-links">
                    <li className={isActive("/") ? "active" : ""} onClick={() => navigateAndScrollTop("/")}>Home</li>
                    <li
                        // className="inside-heliolunor"
                        className={isActive("/about") ? "active" : ""} onClick={() => navigateAndScrollTop("/about")}>Inside heliolunor</li>
                        <li className={isActive("/photos") ? "active" : ""} onClick={() => navigateAndScrollTop("/photos")}  >visitedcollage</li>
                    <li className={isActive("/courselist") ? "active" : ""} onClick={() => navigateAndScrollTop("/courselist")}>Courses</li>
                    <li className={isActive("/contact") ? "active" : ""} onClick={() => navigateAndScrollTop("/contact")} >Contact Us</li>
                    {/* <li
                        className="services-menu"
                        onMouseEnter={handleMouseEnter}
                        onMouseLeave={handleMouseLeave}
                        style={{ position: "relative" }}
                    >
                        Services

                        {showServicesDropdown && (
                            <div
                                className="services-dropdown"
                                onMouseEnter={handleMouseEnter}
                                onMouseLeave={handleMouseLeave}
                                style={{
                                    position: "absolute",
                                    top: "100%",
                                    left: 0,
                                    background: "#fff",
                                    borderRadius: "6px",
                                    padding: "1rem 2rem",
                                    boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
                                    zIndex: 100,
                                    minWidth: "300px",
                                    display: "flex",
                                    gap: "4rem",
                                    userSelect: "none",
                                }}
                            >
                                <div style={{ flex: 1 }}>

                                    <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
                                        {serviceOptLeft.map(({ icon, label }) => (
                                            <li
                                                key={label}
                                                style={{
                                                    display: "flex",
                                                    alignItems: "center",
                                                    padding: "0.4rem 0",
                                                    cursor: "pointer",
                                                    color: "#222",
                                                    fontWeight: 100,
                                                    transition: "color 0.3s",
                                                }}
                                                onMouseEnter={e => e.currentTarget.style.color = "#895EF7"}
                                                onMouseLeave={e => e.currentTarget.style.color = "#222"}
                                            >
                                                <span style={{ marginRight: "0.75rem", display: "flex", alignItems: "center" }}>
                                                    {icon}
                                                </span>
                                                {label}
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                <div style={{ flex: 1 }}>

                                    <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
                                        {serviceOpRight.map(({ icon, label }) => (
                                            <li
                                                key={label}
                                                style={{
                                                    display: "flex",
                                                    alignItems: "center",
                                                    padding: "0.4rem 0",
                                                    cursor: "pointer",
                                                    color: "#222",
                                                    fontWeight: 100,
                                                    transition: "color 0.3s",
                                                }}
                                                onMouseEnter={e => e.currentTarget.style.color = "#895EF7"}
                                                onMouseLeave={e => e.currentTarget.style.color = "#222"}
                                            >
                                                <span style={{ marginRight: "0.75rem", display: "flex", alignItems: "center" }}>
                                                    {icon}
                                                </span>
                                                {label}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        )}
                    </li> */}
                    {/* <li>Products</li> */}
                    {/* <button onClick={() => navigate("/contact")}>Contact Us</button> */}
                </ul>
            )}
        </nav>
    )
}

export default Bar
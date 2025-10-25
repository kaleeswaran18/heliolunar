import { useState, useEffect, useRef } from "react"
import Bar from "./Bar"

export default function Navbar({ isMobile, showNavbar }) {
  const [navmenuOpen, setNavMenuOpen] = useState(false)
  const menuRef = useRef(null)

  useEffect(() => {
    if (!showNavbar) {
      setNavMenuOpen(false)
    }
  }, [showNavbar])

  useEffect(() => {
    function handleClickOutside(event) {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setNavMenuOpen(false)
      }
    }
    if (navmenuOpen) {
      document.addEventListener("mousedown", handleClickOutside)
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [navmenuOpen])

  return (
    <nav className="navbar">
      <Bar
      from="navbar"
        logoText="heliolunor"
        isMobile={isMobile}
        menuRef={menuRef}
        menuOpen={navmenuOpen}
        setMenuOpen={setNavMenuOpen}
      />
    </nav>
  )
}
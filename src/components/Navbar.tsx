import { useState, useEffect } from "react"
import "../styles/Navbar.css"

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <nav className={`navbar ${isScrolled ? "scrolled" : ""}`}>
      <div className="nav-content">
        <a href="#home" className="nav-logo">
          RG
        </a>
        <div className="nav-links">
          <a href="#about">Sobre mí</a>
          <a href="#education">Educación</a>
          <a href="#gallery">Galería</a>
          <a href="#footer">Contacto</a>
        </div>
      </div>
    </nav>
  )
}


import { useState, useEffect } from "react"
import { Menu, X } from "lucide-react"
import "../styles/Navbar.css"

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <nav className={`navbar ${isScrolled ? "scrolled" : ""}`}>
      <div className="nav-content">
        <a href="#home" className="nav-logo">
          RG
        </a>
        <button className="menu-toggle" onClick={toggleMenu}>
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
        <div className={`nav-links ${isMenuOpen ? "open" : ""}`}>
          <a href="#about" onClick={toggleMenu}>
            Sobre mí
          </a>
          <a href="#education" onClick={toggleMenu}>
            Educación
          </a>
          <a href="#gallery" onClick={toggleMenu}>
            Galería
          </a>
          <a href="#footer" onClick={toggleMenu}>
            Contacto
          </a>
        </div>
      </div>
    </nav>
  )
}


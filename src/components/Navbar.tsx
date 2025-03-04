"use client"

import { useState, useEffect } from "react"
import { Menu } from "lucide-react"
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

  return (
    <nav className={`navbar ${isScrolled ? "scrolled" : ""}`}>
      <div className="nav-content">
        <a href="#home" className="nav-logo">
          RG
        </a>
        <button className="menu-toggle" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          <Menu />
        </button>
        <div className={`nav-links ${isMenuOpen ? "open" : ""}`}>
          <a href="#about" onClick={() => setIsMenuOpen(false)}>
            Sobre mí
          </a>
          <a href="#education" onClick={() => setIsMenuOpen(false)}>
            Educación
          </a>
          <a href="#gallery" onClick={() => setIsMenuOpen(false)}>
            Galería
          </a>
          <a href="#footer" onClick={() => setIsMenuOpen(false)}>
            Contacto
          </a>
        </div>
      </div>
    </nav>
  )
}


"use client"

import { useState } from "react"
import { ChevronRight } from "lucide-react"
import "../styles/About.css"

export default function About() {
  const [isInfoVisible, setIsInfoVisible] = useState(false)

  return (
    <section id="about" className="about-section">
      <div className="about-left">
        <h1>
          <span className="hello">Hello, I'm</span>
          <span className="name">
            ROCÍO
            <br />
            GUZMÁN
          </span>
        </h1>
        <div className="about-trigger">
          <span className="about-label">ABOUT ME</span>
          <button
            className="arrow-button"
            onClick={() => setIsInfoVisible(!isInfoVisible)}
            aria-label="Ver más sobre mí"
          >
            <ChevronRight size={24} className={`arrow ${isInfoVisible ? "rotated" : ""}`} />
            <ChevronRight size={24} className={`arrow ${isInfoVisible ? "rotated" : ""}`} />
          </button>
        </div>
        {isInfoVisible && (
          <div className="about-info">
            <p>
              Soy una desarrolladora web apasionada por crear experiencias digitales únicas y memorables. Mi enfoque
              combina creatividad con soluciones técnicas efectivas.
            </p>
            <p>
              Me especializo en el desarrollo frontend con React y Next.js, siempre buscando la mejor manera de traducir
              diseños creativos en código eficiente.
            </p>
            <p>
              Cuando no estoy codificando, me encontrarás explorando nuevas tecnologías, contribuyendo a proyectos de
              código abierto o disfrutando de la naturaleza.
            </p>
          </div>
        )}
      </div>
      <div className="about-right">
        <img src="/me.jpeg" alt="Profile" className="profile-image" />
      </div>
    </section>
  )
}


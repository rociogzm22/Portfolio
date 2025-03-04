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
              Soy una futura ingeniera informática con muchas ganas de comenzar mi carrera profesional. 
              Actualmente estoy finalizando la carrera y durante mis estudios he descubierto 
              mi pasión por el desarrollo de software, la inteligencia artificial y, sobre todo, la ciberseguridad.
            </p>
            <p>
              He tenido la oportunidad de participar en diversos proyectos junto a mis compañeros, lo que me ha permitido desarrollar nuevas <i>skills</i> y conocimientos.
              Siempre estoy buscando nuevos retos a los que enfrentarme, por ello me gusta participar en hackathones y eventos del sector, además de realizar CTFs.
            </p>
            <p>
              Me considero una persona curiosa, comprometida y con muchas ganas de enfrentar nuevos desafíos.
              Estoy muy entusiasmada por seguir aprendiendo y creciendo profesionalmente, siempre con la intención de aportar valor y marcar una diferencia
              de forma positiva en este "mundillo".
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


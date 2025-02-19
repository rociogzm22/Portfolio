"use client"

import { useState } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import "../styles/Gallery.css"

const images = [
  {
    src: "/google.jpeg",
    description: "Experiencia increible en el Init.g de Google",
  },
  {
    src: "/dedalus.jpeg",
    description: "Datathon organizado por Dedalus",
  },
  {
    src: "/premio.jpeg",
    description: "Ganadora del premio a la persona destacada",
  },
  {
    src: "/uad.jpeg",
    description: "#Uad360",
  },
  {
    src: "/minion.jpeg",
    description: "",
  },

]

export default function Gallery() {
  const [currentImage, setCurrentImage] = useState(0)

  const nextImage = () => {
    setCurrentImage((prev) => (prev + 1) % images.length)
  }

  const prevImage = () => {
    setCurrentImage((prev) => (prev - 1 + images.length) % images.length)
  }

  return (
    <section id="gallery" className="gallery-section">
      <h2 className="section-title">GALLERY</h2>
      <div className="carousel">
        <button className="carousel-nav carousel-prev" onClick={prevImage} aria-label="Previous image">
          <ChevronLeft size={40} />
        </button>
        <div className="carousel-content">
          <img src={images[currentImage].src || "/placeholder.svg"} alt={images[currentImage].alt} />
        </div>
        <button className="carousel-nav carousel-next" onClick={nextImage} aria-label="Next image">
          <ChevronRight size={40} />
        </button>
      </div>
      <div className="image-description">
        <p>{images[currentImage].description}</p>
      </div>
      <div className="carousel-counter">
        {currentImage + 1} / {images.length}
      </div>
    </section>
  )
}


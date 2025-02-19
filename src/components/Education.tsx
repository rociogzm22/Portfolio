import { GraduationCap, Book } from "lucide-react"
import "../styles/Education.css"

const education = [
  {
    period: "2019 - 2021",
    title: "Bachillerato Tecnológico",
    institution: "IES Los Montecillos",
    icon: Book,
    details: "Instituto Bilingue",
  },
  {
    period: "2021 - 2025",
    title: "Grado en Ingeniería Informática",
    institution: "Universidad de Málaga",
    icon: GraduationCap,
    details: "Java, Phython, IA, Bases de datos",
  },
]

export default function Education() {
  return (
    <section id="education" className="education-section">
      <h2 className="section-title">EDUCATION</h2>
      <div className="education-timeline">
        {education.map((item, index) => (
          <div key={index} className="education-card">
            <div className="education-icon">
              <item.icon size={24} />
            </div>
            <div className="education-content">
              <span className="education-period">{item.period}</span>
              <h3>{item.title}</h3>
              <h4>{item.institution}</h4>
              <p>{item.details}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}


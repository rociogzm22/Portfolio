import "../styles/Header.css"
import onepiece from "/onepiece.jpeg";

const headerStyle = {
  backgroundImage: `url(${onepiece})`,
  backgroundSize: 'cover',
  backgroundPosition: 'center',
};

export default function Header() {
  return (
    <header id="home" className="header" style={headerStyle}>
      <div className="header-content">
        <h1 className="header-title">
          <span className="script-text">Mi Portfolio</span>
          <span className="main-name">Rocío Guzmán Arroyo</span>
        </h1>
      </div>
      <div className="scroll-indicator">
        <div className="mouse"></div>
        <p>Scroll para descubrir</p>
      </div>
    </header>
  )
}
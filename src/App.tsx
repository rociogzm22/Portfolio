import Navbar from "./components/Navbar"
import Header from "./components/Header"
import About from "./components/About"
import Projects from "./components/Projects"
import Education from "./components/Education"
import Gallery from "./components/Gallery"
import Footer from "./components/Footer"
import "./styles/App.css"

export default function App() {
  return (
    <div className="app">
      <Navbar />
      <Header />
      <About />
      <Education />
      <Gallery />
      <Footer />
    </div>
  )
}

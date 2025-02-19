import { Mail, Globe, Phone } from "lucide-react"
import "../styles/Footer.css"

export default function Footer() {
  return (
    <footer id="footer" className="footer-secction">
      <div className="footer-content">
        <div className="footer-title">
          <span className="lets">LET'S</span>
          <span className="together">together</span>
          <span className="work">WORK</span>
        </div>
        <div className="contact-info">
          <a href="mailto:hello@reallygreatsite.com" className="contact-item">
            <Mail size={20} />
            <span>hello@reallygreatsite.com</span>
          </a>
          <a href="https://reallygreatsite.com" className="contact-item">
            <Globe size={20} />
            <span>reallygreatsite.com</span>
          </a>
          <a href="tel:+1234567890" className="contact-item">
            <Phone size={20} />
            <span>+123-456-7890</span>
          </a>
        </div>
      </div>
    </footer>
  )
}


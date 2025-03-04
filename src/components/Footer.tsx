import { Mail, Phone } from "lucide-react"
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

          <a href="mailto:rocioguzmanarroyo22@gmail.com" className="contact-item">
            <Mail size={20} />
            <span>rocioguzmanarroyo22@gmail.com</span>
          </a>
          <a href="https://www.linkedin.com/in/rocio-guzman-arroyo-112a87213?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" className="contact-item">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              fill="currentColor"
              className="bi bi-linkedin"
              viewBox="0 0 16 16"
            >
              <path d="M0 1.146C0 .513.324 0 .725 0h14.55c.4 0 .725.513.725 1.146v13.708c0 .633-.324 1.146-.725 1.146H.725A.723.723 0 0 1 0 14.854V1.146zm4.943 12.248V6.169H3.542v7.225h1.401zm-.7-8.212c.482 0 .872-.39.872-.872 0-.482-.39-.872-.872-.872a.872.872 0 0 0-.872.872c0 .482.39.872.872.872zm4.908 8.212V9.359c0-.237-.017-.474-.086-.693-.195-.63-.64-1.062-1.287-1.062-.703 0-1.11.476-1.294 1.062-.07.219-.086.456-.086.693v4.035h1.401v-3.775c0-.237.017-.474.086-.693.195-.63.64-1.062 1.287-1.062.703 0 1.11.476 1.294 1.062.07.219.086.456.086.693v3.775h1.401z" />
            </svg>
            <span>LinkedIn</span>
          </a>
          <a href="https://github.com/rociogzm22" className="contact-item">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              fill="currentColor"
              className="bi bi-github"
              viewBox="0 0 16 16"
            >
              <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.19 0 .21.15.46.55.38A8.013 8.013 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
            </svg>
            <span>GitHub</span>
          </a>
          <a href="tel:+1234567890" className="contact-item">
            <Phone size={20} />
            <span>+34 671 24 63 63</span>
          </a>
        </div>
      </div>
    </footer>
  )
}


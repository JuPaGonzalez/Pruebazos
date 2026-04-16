import { useNavigate, useLocation } from "react-router-dom";
import upbLogo from "../assets/logo-upb.svg";
import "./Layout.css";

export default function Layout({ children }) {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <div className="layout-container">
      <header className="layout-header">
        <div className="logo-container" onClick={() => navigate("/dashboard")}>
          <img src={upbLogo} alt="Logo UPB" className="logo-upb" />
        </div>
        <div className="header-actions">
          <div className="icon-accessibility" title="Accesibilidad">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="12" r="10"></circle>
              <path d="M12 16v-4"></path>
              <path d="M12 8h.01"></path>
            </svg>
          </div>
          <button 
            className={`action-btn ${location.pathname === "/perfil" ? "active" : ""}`} 
            onClick={() => navigate("/perfil")}
          >
            Perfil
          </button>
          <button 
            className={`action-btn ${location.pathname === "/dashboard" ? "active" : ""}`} 
            onClick={() => navigate("/dashboard")}
          >
            Menú
          </button>
        </div>
      </header>

      <main className="layout-main">
        {children}
      </main>

      <footer className="layout-footer">
        <div className="footer-content">
          <div className="contact-info">
            <h4>Contáctanos</h4>
            <p>Campus Laureles: Circular 1a 70-01</p>
            <p className="phone">+57 604 448 83 88</p>
            <p className="phone">313 603 56 30</p>
            <p className="email">asesoria.integral@upb.edu.co</p>
          </div>
          <div className="footer-logo">
            <img src={upbLogo} alt="Logo UPB" className="logo-upb large" />
          </div>
          <div className="legal-info">
            <p>Nit UPB: 890.902.922-6</p>
            <p>Otorgado por el Ministerio de Educación Nacional.</p>
            <p>© Todos los derechos reservados, 2026</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

import { useNavigate } from "react-router-dom";
import { logout } from "../services/auth.service";
import "./Perfil.css";
import Layout from "../components/Layout";

export default function Perfil() {
  const navigate = useNavigate();

  const handleLogout = async () => {
    await logout();
    navigate("/");
  };

  return (
    <Layout>
      <div className="perfil-container">
        <h1 className="perfil-title">Usuario, Alejandro</h1>
        
        <div className="perfil-grid">
          {/* Tarjeta de Información Personal */}
          <div className="perfil-card">
            <div className="avatar-placeholder">
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
              </svg>
            </div>
            
            <div className="perfil-details">
              <p><strong>Nombre:</strong> Alejandro Rodriguez</p>
              <p><strong>Correo:</strong> alejandro.rodriguezm.col@upb.edu.co</p>
              <p><strong>Cursando:</strong> Pregrado Ciencia de datos</p>
              <p><strong>ID:</strong> 000558233</p>
            </div>
          </div>

          {/* Área de Notificaciones y Acciones */}
          <div className="perfil-notifications-area">
            <h2 className="notifications-title">No tienes ninguna notificación!</h2>
            
            <div className="notifications-content">
              {/* Notificaciones vacías según solicitud */}
            </div>

            <div className="perfil-actions">
              <button className="btn-logout" onClick={handleLogout}>
                Cerrar Sesión
              </button>
              <a href="https://sigaa.upb.edu.co/ssomanager/c/SSB" target="_blank" rel="noreferrer" className="btn-sigaa">
                SIGAA
              </a>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

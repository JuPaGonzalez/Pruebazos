import { useState } from "react";
import Layout from "../components/Layout";
import "./Mentorias.css";

const mentores = [
  {
    id: 1,
    nombre: "Cesar Escobar",
    email: "cesar.escobarh.col@upb.edu.co",
    rol: "Tutor Institucional",
    materia: "Ciencia Básica (Física, Cálculo)",
    whatsapp: "+57 301 223 4455"
  },
  {
    id: 2,
    nombre: "Sara Posada",
    email: "sara.posada.col@upb.edu.co",
    rol: "Tutora Estudiantil",
    materia: "Taller y Comunicación, Redacción",
    whatsapp: "+57 300 998 7766"
  },
  {
    id: 3,
    nombre: "Enrique Menendez",
    email: "enrique.menendezk.col@upb.edu.co",
    rol: "Tutor de Tesis",
    materia: "Humanidades e Investigación",
    whatsapp: "+57 312 345 6789"
  },
  {
    id: 4,
    nombre: "Juliana Ramírez",
    email: "juliana.ramirez@upb.edu.co",
    rol: "Tutora Estudiantil",
    materia: "Estructuras de Datos, Programación",
    whatsapp: "+57 320 112 2334"
  }
];

export default function Mentorias() {
  const [mentorActivo, setMentorActivo] = useState(null);

  const openModal = (mentor) => setMentorActivo(mentor);
  const closeModal = () => setMentorActivo(null);

  return (
    <Layout>
      <div className="mentorias-container">
        
        <div className="mentorias-header">
          <div className="mentorias-intro">
            <h1 className="mentorias-title">Bienvenido al apartado de mentores!</h1>
            <p className="mentorias-subtitle">
              Aqui encontrarás lo necesario para conocer los mentores disponibles en la institución
            </p>
          </div>
          <div className="mentorias-illustration">
            <svg viewBox="0 0 24 24" fill="none" stroke="#242424" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
              <circle cx="9" cy="7" r="4"></circle>
              <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
              <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
            </svg>
          </div>
        </div>

        <h2 className="section-title">Mentores Disponibles</h2>

        <div className="mentores-carousel">
          {mentores.map((mentor) => (
            <div key={mentor.id} className="mentor-card">
              <div className="mentor-avatar">
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
                </svg>
              </div>
              <h3 className="mentor-name">{mentor.nombre}</h3>
              <a href={`mailto:${mentor.email}`} className="mentor-email">{mentor.email}</a>
              <p className="mentor-rol">{mentor.rol}</p>
              
              <button 
                className="btn-contactar" 
                onClick={() => openModal(mentor)}
              >
                Contactar
              </button>
            </div>
          ))}
        </div>

        {/* Modal Desplegable */}
        {mentorActivo && (
          <div className="modal-overlay" onClick={closeModal}>
            <div className="modal-content mentor-modal" onClick={(e) => e.stopPropagation()}>
              <button className="modal-close" onClick={closeModal}>X</button>
              
              <div className="mentor-modal-card">
                <div className="mentor-modal-avatar">
                   <svg viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
                   </svg>
                </div>
                <div className="mentor-modal-body">
                  <h2>{mentorActivo.nombre}</h2>
                  <h3 className="mentor-modal-rol">{mentorActivo.rol}</h3>
                  <div className="mentor-modal-info">
                    <p><strong>📚 Materia:</strong> {mentorActivo.materia}</p>
                    <p><strong>✉️ Correo:</strong> {mentorActivo.email}</p>
                    <p><strong>📱 WhatsApp:</strong> {mentorActivo.whatsapp}</p>
                  </div>
                  <button className="btn-participar btn-whatsapp" onClick={() => window.open(`https://wa.me/${mentorActivo.whatsapp.replace(/\D/g,'')}`, '_blank')}>
                    Abrir Chat
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

      </div>
    </Layout>
  );
}

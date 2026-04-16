import { useState } from "react";
import Layout from "../components/Layout";
import "./Actividades.css";

import bannerImg from "../assets/campus_banner.png";
import lecturaImg from "../assets/club_lectura.png";
import feriaImg from "../assets/feria_emprendimiento.png";
import runningImg from "../assets/feria_emprendimiento.png"; // Usando temporalmente otra para running si no fue generada

const listaActividades = [
  {
    id: 1,
    titulo: "Club de Lectura",
    subtitulo: "Ven y participa!",
    detalle: "Biblioteca - Bloque 15\nLunes, 23 de Marzo. 2026",
    descripcion: "¡Únete al próximo club de lectura en la biblioteca UPB! Se parte de un espacio para compartir, aprender y disfrutar de los diversos momentos que la lectura grupal ofrece. ¡¿Que esperas!?",
    imagen: lecturaImg
  },
  {
    id: 2,
    titulo: "Feria de Emprendimiento",
    subtitulo: "Apoya el talento local!",
    detalle: "Boulevard Principal\nJueves, 26 de Marzo. 2026",
    descripcion: "Conoce los emprendimientos de tus compañeros, descubre productos innovadores y apoya el talento de la universidad en una jornada llena de sorpresas.",
    imagen: feriaImg
  },
  {
    id: 3,
    titulo: "Running UPB",
    subtitulo: "Mantente activo!",
    detalle: "Cancha de Atletismo\nSabados, 8:00 AM",
    descripcion: "Únete a nuestro grupo de trote sabatino. Todos los niveles son bienvenidos. Fortalece tu salud física y mental mientras recorres el campus con amigos.",
    imagen: runningImg
  }
];

export default function Actividades() {
  const [actividadActiva, setActividadActiva] = useState(null);

  const openModal = (act) => setActividadActiva(act);
  const closeModal = () => setActividadActiva(null);

  return (
    <Layout>
      <div className="actividades-container">
        
        {/* Banner Superior */}
        <div className="actividades-banner" style={{ backgroundImage: `url(${bannerImg})` }}>
          <div className="actividades-banner-content">
            <h1>Actividades</h1>
            <p>Aquí podrás ver las actividades de las que puedes participar</p>
          </div>
        </div>

        <h2 className="section-title">Disponibles</h2>

        {/* Grilla de Actividades */}
        <div className="actividades-grid">
          {listaActividades.map((act) => (
            <div key={act.id} className="actividad-card">
              <div className="actividad-img-container">
                <img src={act.imagen} alt={act.titulo} className="actividad-img" />
              </div>
              <div className="actividad-info">
                <h3>{act.titulo}</h3>
                <p className="actividad-sub">{act.subtitulo}</p>
                <p className="actividad-detalle">{act.detalle}</p>
                <p className="actividad-link">¿No sabes como llegar?</p>
                <button className="btn-mas-info" onClick={() => openModal(act)}>
                  Mas Información
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Modal Desplegable */}
        {actividadActiva && (
          <div className="modal-overlay" onClick={closeModal}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
              <button className="modal-close" onClick={closeModal}>X</button>
              
              <div className="modal-img-container">
                <img src={actividadActiva.imagen} alt={actividadActiva.titulo} />
              </div>

              <div className="modal-body">
                <h2>{actividadActiva.titulo}</h2>
                <p>{actividadActiva.descripcion}</p>
                <button className="btn-participar" onClick={() => {
                  alert(`Te has inscrito a ${actividadActiva.titulo}`);
                  closeModal();
                }}>
                  Participar
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </Layout>
  );
}

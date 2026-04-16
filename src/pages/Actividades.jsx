import { useState } from "react";
import Layout from "../components/Layout";

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
      <div className="flex flex-col pb-8 animate-[fadeIn_0.4s_ease-out]">
        <style>
          {`
            @keyframes fadeIn {
              from { opacity: 0; transform: translateY(10px); }
              to { opacity: 1; transform: translateY(0); }
            }
            @keyframes slideUp {
              from { opacity: 0; transform: translateY(40px) scale(0.95); }
              to { opacity: 1; transform: translateY(0) scale(1); }
            }
          `}
        </style>
        
        {/* Banner Superior */}
        <div 
          className="w-full h-[350px] bg-cover bg-center rounded-xl mb-8 flex items-center justify-center relative overflow-hidden shadow-[0_4px_20px_rgba(0,0,0,0.1)] before:absolute before:inset-0 before:bg-black/20 before:content-['']" 
          style={{ backgroundImage: `url(${bannerImg})` }}
        >
          <div className="relative z-10 bg-white/85 backdrop-blur-md py-10 px-12 rounded-xl text-center max-w-[600px] shadow-[0_10px_30px_rgba(0,0,0,0.1)]">
            <h1 className="text-[2.5rem] font-extrabold text-[#111] mb-2">Actividades</h1>
            <p className="text-[1.1rem] text-[#333]">Aquí podrás ver las actividades de las que puedes participar</p>
          </div>
        </div>

        <h2 className="text-4xl font-bold mb-8 text-[#1a1a1a]">Disponibles</h2>

        {/* Grilla de Actividades */}
        <div className="grid grid-cols-1 md:grid-cols-[repeat(auto-fill,minmax(300px,1fr))] gap-8 mt-4">
          {listaActividades.map((act) => (
            <div key={act.id} className="group bg-[#e6e6e6] rounded-xl overflow-hidden shadow-[0_4px_15px_rgba(0,0,0,0.05)] flex flex-col transition-transform duration-300 hover:-translate-y-1 hover:shadow-[0_8px_25px_rgba(0,0,0,0.15)]">
              <div className="w-full h-[200px] overflow-hidden p-4 bg-white">
                <img src={act.imagen} alt={act.titulo} className="w-full h-full object-cover rounded-lg transition-transform duration-300 group-hover:scale-105" />
              </div>
              <div className="p-6 text-center flex flex-col flex-grow">
                <h3 className="text-[1.6rem] font-bold mb-1 text-[#111]">{act.titulo}</h3>
                <p className="text-base text-[#555] mb-4">{act.subtitulo}</p>
                <p className="text-[0.95rem] text-[#333] mb-6 whitespace-pre-line flex-grow">{act.detalle}</p>
                <p className="text-[0.9rem] text-[#4da6ff] underline cursor-pointer mb-4">¿No sabes como llegar?</p>
                <button className="bg-[#e3001b] text-white rounded-lg py-3 px-6 text-[1.1rem] font-bold cursor-pointer w-full transition-all duration-300 hover:bg-[#bf0015] hover:-translate-y-0.5" onClick={() => openModal(act)}>
                  Mas Información
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Modal Desplegable */}
        {actividadActiva && (
          <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-[1000] p-8 animate-[fadeIn_0.3s_ease-out]" onClick={closeModal}>
            <div className="bg-white rounded-xl w-full max-w-[700px] max-h-[90vh] overflow-y-auto relative shadow-[0_15px_50px_rgba(0,0,0,0.3)] animate-[slideUp_0.4s_cubic-bezier(0.16,1,0.3,1)]" onClick={(e) => e.stopPropagation()}>
              <button className="absolute top-[15px] left-[15px] w-10 h-10 bg-[#fa0] text-black rounded-full text-lg font-bold flex items-center justify-center transition-transform hover:scale-110 hover:bg-[#fc0] z-10" onClick={closeModal}>X</button>
              
              <div className="w-full h-[350px] p-6 pb-0">
                <img src={actividadActiva.imagen} alt={actividadActiva.titulo} className="w-full h-full object-cover rounded-xl shadow-[0_4px_15px_rgba(0,0,0,0.1)]"/>
              </div>

              <div className="p-8 text-center">
                <h2 className="text-[2.2rem] font-extrabold mb-4 text-[#111]">{actividadActiva.titulo}</h2>
                <p className="text-[1.15rem] text-[#444] leading-relaxed mb-8">{actividadActiva.descripcion}</p>
                <button className="bg-[#e3001b] text-white rounded-lg py-4 px-12 text-[1.3rem] font-bold cursor-pointer transition-all duration-300 shadow-md hover:bg-[#bf0015] hover:-translate-y-[3px] hover:shadow-lg" onClick={() => {
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

import { useState } from "react";
import Layout from "../components/Layout";

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
      <div className="animate-[fadeIn_0.5s_ease-out]">
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
        
        <div className="flex flex-col md:flex-row justify-between items-center mb-12 pb-8 border-b border-[#eaeaea] text-center md:text-left">
          <div className="max-w-full md:max-w-[65%] mb-8 md:mb-0">
            <h1 className="text-[2.2rem] font-bold text-[#1a1a1a] mb-3">Bienvenido al apartado de mentores!</h1>
            <p className="text-xl text-[#4a4a4a] leading-relaxed">
              Aqui encontrarás lo necesario para conocer los mentores disponibles en la institución
            </p>
          </div>
          <div className="w-[120px] h-[120px] opacity-80">
            <svg viewBox="0 0 24 24" fill="none" stroke="#242424" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full">
              <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
              <circle cx="9" cy="7" r="4"></circle>
              <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
              <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
            </svg>
          </div>
        </div>

        <h2 className="text-4xl font-bold mb-8 text-[#1a1a1a]">Mentores Disponibles</h2>

        <div className="flex flex-col md:flex-row gap-8 md:overflow-x-auto py-4 md:snap-x snap-mandatory scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-gray-100">
          {mentores.map((mentor) => (
            <div key={mentor.id} className="min-w-full md:min-w-[320px] bg-[#e6e6e6] rounded-xl pt-12 pb-8 px-8 flex flex-col items-center shadow-[0_4px_15px_rgba(0,0,0,0.05)] transition-transform duration-300 hover:-translate-y-1 hover:shadow-lg snap-start">
              <div className="w-[100px] h-[100px] text-[#333] mb-6">
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full rounded-full drop-shadow-md">
                  <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
                </svg>
              </div>
              <h3 className="text-[1.6rem] font-bold mb-2 text-[#1a1a1a] text-center">{mentor.nombre}</h3>
              <a href={`mailto:${mentor.email}`} className="text-sm text-[#333] underline mb-4 break-all text-center">{mentor.email}</a>
              <p className="text-[0.95rem] text-[#555] text-center mb-8 flex-1">{mentor.rol}</p>
              
              <button 
                className="bg-[#e3001b] text-white rounded-lg py-3 px-10 text-[1.2rem] font-bold cursor-pointer transition-all duration-300 shadow-md hover:bg-[#bf0015] hover:-translate-y-0.5 w-full" 
                onClick={() => openModal(mentor)}
              >
                Contactar
              </button>
            </div>
          ))}
        </div>

        {/* Modal Desplegable */}
        {mentorActivo && (
          <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-[1000] p-8 animate-[fadeIn_0.3s_ease-out]" onClick={closeModal}>
            <div className="bg-white rounded-xl w-full max-w-[500px] relative shadow-[0_15px_50px_rgba(0,0,0,0.3)] pt-12 px-8 pb-8 animate-[slideUp_0.4s_cubic-bezier(0.16,1,0.3,1)]" onClick={(e) => e.stopPropagation()}>
              <button className="absolute top-[15px] left-[15px] w-10 h-10 bg-[#fa0] text-black rounded-full text-lg font-bold flex items-center justify-center transition-transform hover:scale-110 hover:bg-[#fc0]" onClick={closeModal}>X</button>
              
              <div className="flex flex-col items-center text-center">
                <div className="w-[120px] h-[120px] text-[#333] mb-6">
                   <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full rounded-full bg-[#f5f5f5] p-4 drop-shadow-md">
                    <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
                   </svg>
                </div>
                <div className="w-full">
                  <h2 className="text-[1.8rem] font-extrabold text-[#111] mb-1">{mentorActivo.nombre}</h2>
                  <h3 className="text-base text-[#666] font-medium mb-8">{mentorActivo.rol}</h3>
                  <div className="bg-[#f9f9f9] rounded-lg p-6 text-left mb-8 border border-[#eee] w-full">
                    <p className="text-[1.05rem] text-[#333] mb-3 flex justify-between items-center gap-4 border-b border-[#eee] pb-2 last:border-0 last:pb-0 font-medium">
                      <strong className="min-w-[100px] flex-shrink-0">📚 Materia:</strong> {mentorActivo.materia}
                    </p>
                    <p className="text-[1.05rem] text-[#333] mb-3 flex justify-between items-center gap-4 border-b border-[#eee] pb-2 last:border-0 last:pb-0 font-medium">
                      <strong className="min-w-[100px] flex-shrink-0">✉️ Correo:</strong> {mentorActivo.email}
                    </p>
                    <p className="text-[1.05rem] text-[#333] flex justify-between items-center gap-4 font-medium">
                      <strong className="min-w-[100px] flex-shrink-0">📱 WhatsApp:</strong> {mentorActivo.whatsapp}
                    </p>
                  </div>
                  <button className="bg-[#25D366] text-white rounded-lg py-4 px-12 text-[1.1rem] font-bold cursor-pointer w-full transition-all duration-300 shadow-md hover:bg-[#128C7E] hover:-translate-y-0.5 hover:shadow-lg" onClick={() => window.open(`https://wa.me/${mentorActivo.whatsapp.replace(/\D/g,'')}`, '_blank')}>
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

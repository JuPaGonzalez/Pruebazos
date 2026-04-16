import { useNavigate } from "react-router-dom";
import Layout from "../components/Layout";

export default function Dashboard() {
  const navigate = useNavigate();

  const secciones = [
    { label: "👤 Perfil", ruta: "/perfil" },
    { label: "🤝 Mentorías", ruta: "/mentorias" },
    { label: "🎯 Actividades", ruta: "/actividades" },
    { label: "🗺️ Mapa del Campus", ruta: "/mapa" },
    { label: "👨‍🏫 Profesores", ruta: "/profesores" },
    { label: "❓ Preguntas Frecuentes", ruta: "/faqs" },
  ];

  return (
    <Layout>
      <div className="p-4">
        <div className="flex justify-between items-center mb-2">
          <h1 className="text-[1.8rem] font-medium m-0">Bienvenido a UPB Primíparos 🎓</h1>
        </div>
        <p className="text-[#888] text-[15px] mb-8">¿Qué quieres explorar hoy?</p>
        <div className="grid grid-cols-[repeat(auto-fill,minmax(220px,1fr))] gap-4">
          {secciones.map((s) => (
            <div 
              key={s.ruta} 
              onClick={() => navigate(s.ruta)} 
              className="bg-white border border-[#e0e0e0] rounded-xl p-8 cursor-pointer text-center transition-shadow duration-200 hover:shadow-md"
            >
              <span className="text-[16px] font-medium">{s.label}</span>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
}
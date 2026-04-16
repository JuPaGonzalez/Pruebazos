import { useEffect, useState } from "react";
import { getProfesores } from "../services/profesores.service";
import { useNavigate } from "react-router-dom";

export default function ProfesoresPage() {
  const [profesores, setProfesores] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    getProfesores()
      .then(setProfesores)
      .finally(() => setLoading(false));
  }, []);

  return (
    <div className="p-8 max-w-[900px] mx-auto">
      <button onClick={() => navigate("/dashboard")} className="bg-transparent border-none cursor-pointer text-[14px] text-[#555] mb-4 hover:underline">← Volver</button>
      <h1 className="text-[1.8rem] font-medium mb-6 text-[#111]">Profesores</h1>
      {loading ? <p>Cargando...</p> : (
        <div className="grid grid-cols-[repeat(auto-fill,minmax(220px,1fr))] gap-4">
          {profesores.map((p) => (
            <div key={p.id} className="bg-white border border-[#e0e0e0] rounded-xl p-6 flex flex-col items-center gap-1.5 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 rounded-full bg-[#111] text-white flex items-center justify-center text-[20px] font-medium">{p.nombre.charAt(0)}</div>
              <h3 className="text-[15px] font-medium text-center m-0 text-[#111]">{p.nombre}</h3>
              <p className="text-[13px] text-[#555] m-0 text-center">{p.materia}</p>
              <p className="text-[12px] text-[#888] m-0 text-center">{p.facultad}</p>
              <a href={`mailto:${p.email_institucional}`} className="text-[12px] text-[#0066cc] m-0 hover:underline">
                {p.email_institucional}
              </a>
              {p.extension && <p className="text-[12px] text-[#888] m-0">Ext. {p.extension}</p>}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
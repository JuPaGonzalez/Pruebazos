import { useEffect, useState } from "react";
import { getFaqs } from "../services/faqs.service";
import { useNavigate } from "react-router-dom";

export default function FaqsPage() {
  const [faqs, setFaqs] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    getFaqs()
      .then(setFaqs)
      .finally(() => setLoading(false));
  }, []);

  return (
    <div className="p-8 max-w-[700px] mx-auto">
      <button onClick={() => navigate("/dashboard")} className="bg-transparent border-none cursor-pointer text-[14px] text-[#555] mb-4 hover:underline">← Volver</button>
      <h1 className="text-[1.8rem] font-medium mb-6 text-[#111]">Preguntas Frecuentes</h1>
      {loading ? <p>Cargando...</p> : (
        <div className="flex flex-col gap-4">
          {faqs.map((f) => (
            <div key={f.id} className="bg-white border border-[#e0e0e0] rounded-xl p-6">
              <p className="font-medium text-[15px] m-0 mb-2 text-[#111]">{f.pregunta}</p>
              <p className="text-[14px] text-[#555] m-0 mb-2">{f.respuesta}</p>
              {f.link_oficial && (
                <a href={f.link_oficial} target="_blank" rel="noreferrer" className="text-[13px] text-[#0066cc] hover:underline">
                  Ver en página oficial →
                </a>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
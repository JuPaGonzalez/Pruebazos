import { useNavigate } from "react-router-dom";

export default function Mapa() {
  const navigate = useNavigate();

  return (
    <div className="p-8 max-w-[900px] mx-auto">
      <button onClick={() => navigate("/dashboard")} className="bg-transparent border-none cursor-pointer text-[14px] text-[#555] mb-4 hover:underline">← Volver</button>
      <h1 className="text-[1.8rem] font-medium mb-6 text-[#111]">Mapa del Campus UPB</h1>
      <div className="rounded-xl overflow-hidden border border-[#e0e0e0] shadow-sm">
        <iframe
          title="Mapa UPB Medellín"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.1!2d-75.5755!3d6.2006!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e4428dfb80fad05%3A0x42137cfcc7b53b56!2sUniversidad%20Pontificia%20Bolivariana!5e0!3m2!1ses!2sco!4v1"
          width="100%"
          height="500"
          className="border-0"
          allowFullScreen
          loading="lazy"
        />
      </div>
    </div>
  );
}
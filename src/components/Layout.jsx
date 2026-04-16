import { useNavigate, useLocation } from "react-router-dom";
import upbLogo from "../assets/logo-upb.svg";

export default function Layout({ children }) {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <div className="flex flex-col min-h-screen bg-[#fcfcfc]">
      <header className="flex justify-between items-center py-4 px-8 bg-white border-b border-[#eaeaea] shadow-sm sticky top-0 z-50">
        <div className="cursor-pointer transition-transform duration-200 hover:scale-105" onClick={() => navigate("/dashboard")}>
          <img src={upbLogo} alt="Logo UPB" className="h-[50px] w-auto" />
        </div>
        <div className="flex items-center gap-4">
          <div className="flex items-center justify-center w-10 h-10 rounded-full bg-[#333] text-white cursor-pointer transition-transform hover:scale-110 hover:bg-black" title="Accesibilidad">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="12" r="10"></circle>
              <path d="M12 16v-4"></path>
              <path d="M12 8h.01"></path>
            </svg>
          </div>
          <button 
            className={`bg-[#e3001b] text-white rounded-lg py-2.5 px-6 text-base font-semibold cursor-pointer transition-all duration-300 shadow-[0_4px_10px_rgba(227,0,27,0.3)] hover:bg-[#bf0015] hover:-translate-y-0.5 hover:shadow-[0_6px_15px_rgba(227,0,27,0.4)] ${location.pathname === "/perfil" ? "bg-[#bf0015] shadow-inner translate-y-px" : ""}`} 
            onClick={() => navigate("/perfil")}
          >
            Perfil
          </button>
          <button 
            className={`bg-[#e3001b] text-white rounded-lg py-2.5 px-6 text-base font-semibold cursor-pointer transition-all duration-300 shadow-[0_4px_10px_rgba(227,0,27,0.3)] hover:bg-[#bf0015] hover:-translate-y-0.5 hover:shadow-[0_6px_15px_rgba(227,0,27,0.4)] ${location.pathname === "/dashboard" ? "bg-[#bf0015] shadow-inner translate-y-px" : ""}`} 
            onClick={() => navigate("/dashboard")}
          >
            Menú
          </button>
        </div>
      </header>

      <main className="flex-1 p-8 max-w-[1200px] mx-auto w-full">
        {children}
      </main>

      <footer className="bg-[#e6e6e6] p-8 border-t border-[#d9d9d9]">
        <div className="flex flex-col md:flex-row justify-between items-center max-w-[1200px] mx-auto flex-wrap gap-8 text-center md:text-left">
          <div className="contact-info">
            <h4 className="text-[1.1rem] mb-2 text-[#333] font-semibold">Contáctanos</h4>
            <p className="my-1 text-sm text-[#555] font-medium">Campus Laureles: Circular 1a 70-01</p>
            <p className="my-1 text-sm text-[#555] font-bold underline cursor-pointer">+57 604 448 83 88</p>
            <p className="my-1 text-sm text-[#555] font-bold underline cursor-pointer">313 603 56 30</p>
            <p className="my-1 text-sm text-[#555] font-bold underline cursor-pointer">asesoria.integral@upb.edu.co</p>
          </div>
          <div className="footer-logo">
            <img src={upbLogo} alt="Logo UPB" className="h-[100px] filter grayscale opacity-30" />
          </div>
          <div className="text-center md:text-right">
            <p className="my-1 text-xs text-[#666] font-medium">Nit UPB: 890.902.922-6</p>
            <p className="my-1 text-xs text-[#666] font-medium">Otorgado por el Ministerio de Educación Nacional.</p>
            <p className="my-1 text-xs text-[#666] font-medium">© Todos los derechos reservados, 2026</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

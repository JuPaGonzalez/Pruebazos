import { useNavigate } from "react-router-dom";
import { logout } from "../services/auth.service";
import Layout from "../components/Layout";

export default function Perfil() {
  const navigate = useNavigate();

  const handleLogout = async () => {
    await logout();
    navigate("/");
  };

  return (
    <Layout>
      <div className="animate-[fadeIn_0.5s_ease-out]">
        <style>
          {`
            @keyframes fadeIn {
              from { opacity: 0; transform: translateY(10px); }
              to { opacity: 1; transform: translateY(0); }
            }
          `}
        </style>
        <h1 className="text-[2.2rem] font-bold text-[#1a1a1a] mb-8">Usuario, Alejandro</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-start">
          {/* Tarjeta de Información Personal */}
          <div className="bg-[#eedddd] rounded-xl py-12 px-8 flex flex-col shadow-[0_8px_30px_rgba(0,0,0,0.06)] transition-transform duration-300 hover:-translate-y-1 hover:shadow-[0_12px_40px_rgba(0,0,0,0.1)]">
            <div className="w-[150px] h-[150px] bg-transparent text-[#242424] mx-auto mb-8">
              <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full rounded-full drop-shadow-[0_4px_10px_rgba(0,0,0,0.15)]">
                <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
              </svg>
            </div>
            
            <div className="flex flex-col gap-3">
              <p className="text-[1.1rem] text-[#1a1a1a] leading-relaxed"><strong>Nombre:</strong> Alejandro Rodriguez</p>
              <p className="text-[1.1rem] text-[#1a1a1a] leading-relaxed break-words"><strong>Correo:</strong> alejandro.rodriguezm.col@upb.edu.co</p>
              <p className="text-[1.1rem] text-[#1a1a1a] leading-relaxed"><strong>Cursando:</strong> Pregrado Ciencia de datos</p>
              <p className="text-[1.1rem] text-[#1a1a1a] leading-relaxed"><strong>ID:</strong> 000558233</p>
            </div>
          </div>

          {/* Área de Notificaciones y Acciones */}
          <div className="flex flex-col h-full">
            <h2 className="text-[1.8rem] font-bold text-black text-center mb-12 mt-4">No tienes ninguna notificación!</h2>
            
            <div className="text-center text-xl text-[#333] mb-auto">
              {/* Notificaciones vacías según solicitud */}
            </div>

            <div className="flex justify-center gap-8 mt-16">
              <button 
                className="bg-[#e3001b] text-white border-none rounded-lg py-4 px-12 text-[1.3rem] font-bold cursor-pointer inline-block text-center transition-all duration-300 shadow-[0_6px_15px_rgba(227,0,27,0.3)] hover:bg-[#bf0015] hover:-translate-y-1 hover:shadow-[0_8px_20px_rgba(227,0,27,0.4)]" 
                onClick={handleLogout}
              >
                Cerrar Sesión
              </button>
              <a 
                href="https://sigaa.upb.edu.co/ssomanager/c/SSB" 
                target="_blank" 
                rel="noreferrer" 
                className="bg-[#e3001b] text-white border-none rounded-lg py-4 px-12 text-[1.3rem] font-bold cursor-pointer inline-block text-center transition-all duration-300 shadow-[0_6px_15px_rgba(227,0,27,0.3)] hover:bg-[#bf0015] hover:-translate-y-1 hover:shadow-[0_8px_20px_rgba(227,0,27,0.4)]"
              >
                SIGAA
              </a>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

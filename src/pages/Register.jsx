import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { register } from "../services/auth.service";

export default function Register() {
  const [form, setForm] = useState({
    fullName: "",
    email: "",
    password: "",
    role: "estudiante",
    programa: "",
    semestre: "",
  });
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);
    try {
      await register({
        email: form.email,
        password: form.password,
        fullName: form.fullName,
        role: form.role,
        programa: form.programa,
        semestre: parseInt(form.semestre),
      });
      navigate("/dashboard");
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#f5f5f5] p-4">
      <form onSubmit={handleSubmit} className="flex flex-col gap-4 w-full max-w-[400px] p-8 rounded-xl border border-[#e0e0e0] bg-white shadow-sm">
        <h2 className="m-0 text-[1.4rem] font-medium">Crear cuenta</h2>
        <p className="m-0 text-[13px] text-[#888]">Regístrate con tu correo institucional UPB</p>

        {error && <p className="text-[#c0392b] text-[13px] m-0 py-2 px-2.5 bg-[#fdecea] rounded-md">{error}</p>}

        <div className="flex flex-col gap-1.5">
          <label className="text-[14px] text-[#555]">Nombre completo</label>
          <input name="fullName" value={form.fullName} onChange={handleChange} className="py-2.5 px-3 rounded-lg border border-[#ccc] text-[15px] outline-none focus:border-[#111]" placeholder="Tu nombre completo" required />
        </div>

        <div className="flex flex-col gap-1.5">
          <label className="text-[14px] text-[#555]">Correo institucional</label>
          <input name="email" type="email" value={form.email} onChange={handleChange} className="py-2.5 px-3 rounded-lg border border-[#ccc] text-[15px] outline-none focus:border-[#111]" placeholder="correo@upb.edu.co" required />
        </div>

        <div className="flex flex-col gap-1.5">
          <label className="text-[14px] text-[#555]">Contraseña</label>
          <input name="password" type="password" value={form.password} onChange={handleChange} className="py-2.5 px-3 rounded-lg border border-[#ccc] text-[15px] outline-none focus:border-[#111]" placeholder="Mínimo 6 caracteres" required />
        </div>

        <div className="flex flex-col gap-1.5">
          <label className="text-[14px] text-[#555]">Rol</label>
          <select name="role" value={form.role} onChange={handleChange} className="py-2.5 px-3 rounded-lg border border-[#ccc] text-[15px] outline-none focus:border-[#111] bg-white">
            <option value="estudiante">Estudiante</option>
            <option value="profesor">Profesor</option>
          </select>
        </div>

        <div className="flex flex-col gap-1.5">
          <label className="text-[14px] text-[#555]">Programa académico</label>
          <input name="programa" value={form.programa} onChange={handleChange} className="py-2.5 px-3 rounded-lg border border-[#ccc] text-[15px] outline-none focus:border-[#111]" placeholder="Ej: Ingeniería de Sistemas" required />
        </div>

        {form.role === "estudiante" && (
          <div className="flex flex-col gap-1.5">
            <label className="text-[14px] text-[#555]">Semestre</label>
            <select name="semestre" value={form.semestre} onChange={handleChange} className="py-2.5 px-3 rounded-lg border border-[#ccc] text-[15px] outline-none focus:border-[#111] bg-white" required>
              <option value="">Selecciona tu semestre</option>
              {[1,2,3,4,5,6,7,8,9,10].map(s => (
                <option key={s} value={s}>{s}</option>
              ))}
            </select>
          </div>
        )}

        <button type="submit" disabled={loading} className="p-2.5 rounded-lg border-none bg-[#111] text-white text-[15px] font-medium cursor-pointer hover:bg-black transition-colors disabled:opacity-50">
          {loading ? "Registrando..." : "Crear cuenta"}
        </button>

        <p className="text-[13px] text-center text-[#888] m-0">
          ¿Ya tienes cuenta?{" "}
          <span onClick={() => navigate("/")} className="text-[#111] font-medium cursor-pointer underline hover:text-black">Inicia sesión</span>
        </p>
      </form>
    </div>
  );
}
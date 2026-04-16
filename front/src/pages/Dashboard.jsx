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
      <div style={styles.container}>
        <div style={styles.header}>
          <h1 style={styles.title}>Bienvenido a UPB Primíparos 🎓</h1>
        </div>
        <p style={styles.subtitle}>¿Qué quieres explorar hoy?</p>
      <div style={styles.grid}>
        {secciones.map((s) => (
          <div key={s.ruta} onClick={() => navigate(s.ruta)} style={styles.card}>
            <span style={styles.cardLabel}>{s.label}</span>
          </div>
        ))}
      </div>
      </div>
    </Layout>
  );
}

const styles = {
  container: { padding: "1rem" },
  header: { display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "0.5rem" },
  title: { fontSize: "1.8rem", fontWeight: 500, margin: 0 },
  subtitle: { color: "#888", fontSize: "15px", marginBottom: "2rem" },
  grid: { display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))", gap: "1rem" },
  card: { backgroundColor: "#fff", border: "1px solid #e0e0e0", borderRadius: "12px", padding: "2rem", cursor: "pointer", textAlign: "center", transition: "box-shadow 0.2s" },
  cardLabel: { fontSize: "16px", fontWeight: 500 },
};
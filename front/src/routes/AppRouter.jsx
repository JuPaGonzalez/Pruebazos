import { Routes, Route } from "react-router-dom";
import Login from "../pages/Login";
import Dashboard from "../pages/Dashboard";
import ProfesoresPage from "../pages/ProfesoresPage";
import FaqsPage from "../pages/FaqsPage";
import Mapa from "../pages/Mapa";
import Register from "../pages/Register";
import ProtectedRoute from "./ProtectedRoute";
import Perfil from "../pages/Perfil";
import Mentorias from "../pages/Mentorias";
import Actividades from "../pages/Actividades";

export default function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/dashboard" element={<ProtectedRoute><Dashboard /></ProtectedRoute>} />
      <Route path="/profesores" element={<ProtectedRoute><ProfesoresPage /></ProtectedRoute>} />
      <Route path="/faqs" element={<ProtectedRoute><FaqsPage /></ProtectedRoute>} />
      <Route path="/mapa" element={<ProtectedRoute><Mapa /></ProtectedRoute>} />
      <Route path="/perfil" element={<ProtectedRoute><Perfil /></ProtectedRoute>} />
      <Route path="/mentorias" element={<ProtectedRoute><Mentorias /></ProtectedRoute>} />
      <Route path="/actividades" element={<ProtectedRoute><Actividades /></ProtectedRoute>} />
      <Route path="/register" element={<Register />} />
    </Routes>
  );
}
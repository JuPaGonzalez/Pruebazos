import { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import { getSession } from "../services/auth.service";

export default function ProtectedRoute({ children }) {
  const [session, setSession] = useState(undefined);

  useEffect(() => {
    getSession().then(setSession);
  }, []);

  return children; // BYPASS TEMPORAL PARA TESTEO UI
}
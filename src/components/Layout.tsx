import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import "../styles/layout.css";
import { useDispatch } from "react-redux";
import { setUser } from "../store/authSlice";
import { getAuth, signOut } from "firebase/auth";

export default function Layout({ children }: { children: React.ReactNode }) {
  const location = useLocation();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const isActive = (path: string) => location.pathname === path;

  const handleLogout = async () => {
    try {
      const auth = getAuth();
      await signOut(auth);

      dispatch(setUser(null));
      navigate("/");
    } catch (error) {
      console.error("Logout failed", error);
    }
  };

  return (
    <div className="layout">
      <div className="sidebar">
        <h2 className="logo">Healthcare</h2>

        <nav>
          <Link
            to="/dashboard"
            className={isActive("/dashboard") ? "active" : ""}
          >
            Dashboard
          </Link>

          <Link
            to="/patients"
            className={isActive("/patients") ? "active" : ""}
          >
            Patients
          </Link>

          <Link
            to="/analytics"
            className={isActive("/analytics") ? "active" : ""}
          >
            Analytics
          </Link>
        </nav>

        {/* 🔴 Logout Button */}
        <button className="logout-button" onClick={handleLogout}>
          Logout
        </button>
      </div>

      <div className="main-content">{children}</div>
    </div>
  );
}
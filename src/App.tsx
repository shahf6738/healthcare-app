import { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Patients from "./pages/Patients";
import Analytics from "./pages/Analytics";
import Layout from "./components/Layout";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "./store/store";
import { setUser } from "./store/authSlice";
import { getAuth, onAuthStateChanged } from "firebase/auth";

export default function App() {
  const user = useSelector((state: RootState) => state.auth.user);
  const dispatch = useDispatch();

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const auth = getAuth();

    const unsubscribe = onAuthStateChanged(auth, (firebaseUser) => {
      if (firebaseUser) {
        dispatch(setUser(firebaseUser));
      } else {
        dispatch(setUser(null));
      }

      setLoading(false);
    });

    return () => unsubscribe();
  }, [dispatch]);

  // ⛔ prevent flicker / wrong redirect
  if (loading) {
    return <div style={{ padding: 40 }}>Loading...</div>;
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={user ? <Navigate to="/dashboard" /> : <Login />}
        />

        <Route
          path="/dashboard"
          element={
            user ? (
              <Layout>
                <Dashboard />
              </Layout>
            ) : (
              <Navigate to="/" />
            )
          }
        />

        <Route
          path="/patients"
          element={
            user ? (
              <Layout>
                <Patients />
              </Layout>
            ) : (
              <Navigate to="/" />
            )
          }
        />

        <Route
          path="/analytics"
          element={
            user ? (
              <Layout>
                <Analytics />
              </Layout>
            ) : (
              <Navigate to="/" />
            )
          }
        />
      </Routes>
    </BrowserRouter>
  );
}
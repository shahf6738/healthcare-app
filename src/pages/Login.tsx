import { useState } from "react";
import { signInWithEmailAndPassword, getAuth } from "firebase/auth";
import "../firebase";
import { useDispatch } from "react-redux";
import { setUser } from "../store/authSlice";
import { useNavigate } from "react-router-dom";
import "../styles/login.css";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [generalError, setGeneralError] = useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const auth = getAuth();

  const validate = () => {
    let isValid = true;

    setEmailError("");
    setPasswordError("");
    setGeneralError("");

    if (!email) {
      setEmailError("Email is required");
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      setEmailError("Enter a valid email");
      isValid = false;
    }

    if (!password) {
      setPasswordError("Password is required");
      isValid = false;
    }

    return isValid;
  };

  const login = async () => {
    if (!validate()) return;

    setLoading(true);

    try {
      const res = await signInWithEmailAndPassword(auth, email, password);

      dispatch(setUser(res.user));
      navigate("/dashboard");
    } catch (e) {
      setGeneralError("Invalid email or password");
      console.error(e);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="login-container">
      <div className="login-card">
        <h2>Healthcare Login</h2>

        <input
          className="login-input"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        {emailError && <p className="error-text">{emailError}</p>}

        <input
          className="login-input"
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        {passwordError && <p className="error-text">{passwordError}</p>}

        {generalError && <p className="error-text">{generalError}</p>}

        <button className="login-button" onClick={login} disabled={loading}>
          {loading ? "Logging in..." : "Login"}
        </button>
      </div>
    </div>
  );
}

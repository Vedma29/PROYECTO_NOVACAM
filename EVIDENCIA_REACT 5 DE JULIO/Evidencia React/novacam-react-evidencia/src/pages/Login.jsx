import "../styles/Login.css";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import loginImage from "../assets/img/login_novacam.png";
import { iniciarSesion } from "../../services/api";

function Login() {
  const navigate = useNavigate();

  const [correo, setCorreo] = useState("");
  const [password, setPassword] = useState("");

  // Función para iniciar sesión
  const manejarLogin = async (event) => {
    event.preventDefault();

    if (!correo || !password) {
      alert("Por favor completa todos los campos.");
      return;
    }

    try {
      const autenticado = await iniciarSesion(correo, password);

      if (autenticado) {
        alert("Autenticación satisfactoria");
        navigate("/");
      } else {
        alert("Error en la autenticación");
      }
    } catch (error) {
      console.error(error);
      alert("Error al conectar con el servicio web.");
    }
  };

  return (
    <section className="login-container">
      {/* LADO IZQUIERDO */}
      <div
        className="login-image"
        style={{ backgroundImage: `url(${loginImage})` }}
      >
        <div className="overlay"></div>

        <div className="image-content">
          <h1>NovaCam</h1>

          <p>
            Bienvenida de nuevo a una experiencia elegante y profesional.
          </p>
        </div>
      </div>

      {/* LADO DERECHO */}
      <div className="login-form">
        <div className="form-box">
          <h2>Iniciar Sesión</h2>

          <p className="subtitle">
            Accede a tu cuenta NovaCam.
          </p>

          <form onSubmit={manejarLogin}>
            <div className="input-group">
              <label>Correo Electrónico</label>

              <input
                type="email"
                name="email"
                placeholder="correo@email.com"
                value={correo}
                onChange={(e) => setCorreo(e.target.value)}
                required
              />
            </div>

            <div className="input-group">
              <label>Contraseña</label>

              <input
                type="password"
                name="password"
                placeholder="********"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>

            <button
              type="submit"
              className="btn-login"
            >
              Entrar
            </button>
          </form>

          <p className="register-link">
            ¿No tienes cuenta?{" "}
            <Link to="/Register">
              Regístrate
            </Link>
          </p>

          <p className="register-link">
            <Link to="/">
              ← Volver al Inicio
            </Link>
          </p>
        </div>
      </div>
    </section>
  );
}

export default Login;
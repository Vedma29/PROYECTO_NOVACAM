import "../styles/login.css";
import { Link } from "react-router-dom";
import loginImage from "../assets/img/login_novacam.png";

function Login() {
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

          <form>

            <div className="input-group">
              <label>Correo Electrónico</label>

              <input
                type="email"
                name="email"
                placeholder="correo@email.com"
                required
              />
            </div>

            <div className="input-group">
              <label>Contraseña</label>

              <input
                type="password"
                name="password"
                placeholder="********"
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
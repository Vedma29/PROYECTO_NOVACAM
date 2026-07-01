import "../styles/register.css";
import { Link } from "react-router-dom";
import registerImage from "../assets/img/register_novacam.png";

function Register() {
  return (
    <section className="register-container">

      {/* LADO IZQUIERDO */}

      <div
        className="register-image"
        style={{ backgroundImage: `url(${registerImage})` }}
      >
        <div className="overlay"></div>

        <div className="image-content">

          <h1>NovaCam</h1>

          <p>
            Elegancia, independencia y crecimiento
            en una experiencia diseñada para ti.
          </p>

        </div>

      </div>

      {/* LADO DERECHO */}

      <div className="register-form">

        <div className="form-box">

          <h2>Crear Cuenta</h2>

          <p className="subtitle">
            Únete a la experiencia NovaCam.
          </p>

          <form>

            <div className="input-group">

              <label>Seudónimo</label>

              <input
                type="text"
                placeholder="Ej: NovaGirl"
              />

            </div>

            <div className="input-group">

              <label>Correo Electrónico</label>

              <input
                type="email"
                placeholder="correo@email.com"
              />

            </div>

            <div className="input-group">

              <label>Contraseña</label>

              <input
                type="password"
                placeholder="********"
              />

            </div>

            <div className="input-group">

              <label>Experiencia</label>

              <select>

                <option>Selecciona una opción</option>
                <option>Menos de 1 año</option>
                <option>1 año</option>
                <option>2 años</option>
                <option>3 años</option>
                <option>4 años</option>
                <option>5 años o más</option>

              </select>

            </div>

            <div className="input-group">

              <label>Equipo Usado</label>

              <input
                type="text"
                placeholder="Ej: Logitech Brio"
              />

            </div>

            <button
              type="submit"
              className="btn-register"
            >
              Registrarme
            </button>

          </form>

          <p className="login-link">
            ¿Ya tienes cuenta?{" "}
            <Link to="/Login">
              Inicia sesión
            </Link>
          </p>

          <p className="login-link">
            <Link to="/">
              ← Volver al Inicio
            </Link>
          </p>

        </div>

      </div>

    </section>
  );
}

export default Register;
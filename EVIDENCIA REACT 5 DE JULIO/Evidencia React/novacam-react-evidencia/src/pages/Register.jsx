import "../styles/Register.css";
import { Link } from "react-router-dom";
import registerImage from "../assets/img/register_novacam.png";
import { useState } from "react";
import { registrarUsuario } from "../../services/api";

function Register() {
  // Estados del formulario
  const [seudonimo, setSeudonimo] = useState("");
  const [correo, setCorreo] = useState("");
  const [password, setPassword] = useState("");
  const [experiencia, setExperiencia] = useState("");
  const [equipo, setEquipo] = useState("");

  // Función para registrar el usuario
  const manejarEnvio = async (event) => {
    event.preventDefault();

    const nuevoUsuario = {
      usuario: seudonimo,
      correo,
      contrasena: password,
      experiencia,
      equipo,
    };

    try {
      await registrarUsuario(nuevoUsuario);

      alert("Usuario registrado correctamente.");

      // Limpiar formulario
      setSeudonimo("");
      setCorreo("");
      setPassword("");
      setExperiencia("");
      setEquipo("");
    } catch (error) {
      console.error(error);
      alert("Ocurrió un error al registrar el usuario.");
    }
  };

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

          <form onSubmit={manejarEnvio}>
            <div className="input-group">
              <label>Seudónimo</label>

              <input
                type="text"
                placeholder="Ej: NovaGirl"
                value={seudonimo}
                onChange={(e) => setSeudonimo(e.target.value)}
                required
              />

              <label>Correo Electrónico</label>

              <input
                type="email"
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
                placeholder="********"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>

            <div className="input-group">
              <label>Experiencia</label>

              <select
                value={experiencia}
                onChange={(e) => setExperiencia(e.target.value)}
                required
              >
                <option value="">Selecciona una opción</option>
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
                value={equipo}
                onChange={(e) => setEquipo(e.target.value)}
                required
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
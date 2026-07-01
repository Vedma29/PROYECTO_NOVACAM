import "../styles/Inicio.css";
import logo from "../assets/img/logo_novacam.png";
import homeImage from "../assets/img/home_novacam.png";
import { Link } from "react-router-dom";

function Inicio() {
  return (
    <>
      {/* HEADER */}

      <header className="header">
        <div className="logo-area">
          <img src={logo} alt="NovaCam" className="logo" />
          <h2>NovaCam</h2>
        </div>

        <nav className="nav">
          <ul className="barnav">
          <li className="menu active">
          <Link to="/">Inicio</Link></li>
          <li className="menu">
          <Link to="/Academy">Educación</Link></li>
          <li className="menu">
          <Link to="/About">About</Link></li>
          <li className="menu">
            <Link to="/Help">Ayuda</Link></li>
          </ul>
        </nav>

        <Link to="/Register" className="nav-btn">
        Regístrate 
        </Link>
      
      </header>

      {/* HERO */}
      <section className="hero">
        <div className="hero-left">
          <span className="mini-title">
            Plataforma para modelos webcam
          </span>

          <h1>Organiza tu crecimiento profesional.</h1>

          <p>
            NovaCam te ayuda a gestionar metas, productividad,
            comunidad y crecimiento en una experiencia moderna y exclusiva.
          </p>

          <div className="hero-buttons">
            <Link to="/Login" className="primary-btn">
            Iniciar sesión
            </Link>

            <Link to="/Register" className="secondary-btn">
              Crear Cuenta
            </Link>
          </div>
        </div>

        <div className="hero-right">
          <div className="image-card">
            <img src={homeImage} alt="NovaCam" />
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="footer">
        <div className="footer-content">
          <h3>NovaCam</h3>

          <p>
            Crecimiento y organización para modelos webcam profesionales.
          </p>

          <span>
            © 2026 NovaCam — Todos los derechos reservados.
          </span>
        </div>
      </footer>
    </>
  );
}

export default Inicio;
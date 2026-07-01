import { Link } from "react-router-dom";

import logo from "../assets/img/logo_novacam.png";
import profileImage from "../assets/img/profile_novacam.png";

import {
  FaHouse,
  FaWallet,
  FaChartLine,
  FaCalendar,
  FaBullseye,
  FaClipboardList,
  FaGraduationCap,
  FaUsers,
  FaGear,
  FaRightFromBracket,
} from "react-icons/fa6";

function Sidebar() {
  return (
    <aside className="sidebar">

      {/* LOGO */}

      <div className="logo-area">

        <img src={logo} alt="NovaCam" />

        <h2>NovaCam</h2>

      </div>

      {/* MENU */}

      <nav className="menu">

        {/* PRINCIPAL */}

        <div className="menu-section">

          <span className="menu-title">
            PRINCIPAL
          </span>

          <Link to="/Dashboard" className="active">
            <FaHouse />
            Dashboard
          </Link>

          <Link to="/Income">
            <FaWallet />
            Ingresos
          </Link>

          <Link to="/Stats">
            <FaChartLine />
            Estadísticas
          </Link>

        </div>

        {/* ORGANIZACIÓN */}

        <div className="menu-section">

          <span className="menu-title">
            ORGANIZACIÓN
          </span>

          <Link to="/Agenda">
            <FaCalendar />
            Agenda
          </Link>

          <Link to="/Goals">
            <FaBullseye />
            Metas
          </Link>

          <Link to="/Workplans">
            <FaClipboardList />
            Planes
          </Link>

        </div>

        {/* FORMACIÓN */}

        <div className="menu-section">

          <span className="menu-title">
            FORMACIÓN
          </span>

          <Link to="/Academy">
            <FaGraduationCap />
            Academy
          </Link>

          <Link to="/Community">
            <FaUsers />
            Comunidad
          </Link>

        </div>

        {/* CUENTA */}

        <div className="menu-section">

          <span className="menu-title">
            CUENTA
          </span>

          <Link to="/Profile">
            <FaGear />
            Configuración
          </Link>

        </div>

      </nav>

      {/* PERFIL */}

      <div className="sidebar-profile">

        <img
          src={profileImage}
          alt="Perfil"
        />

        <div>

          <h3>
            NovaGirl
          </h3>

          <span>
            Premium Member
          </span>

        </div>

      </div>

      {/* LOGOUT */}

      <Link
        to="/Logout"
        className="logout-btn"
      >

        <FaRightFromBracket />

        Cerrar Sesión

      </Link>

    </aside>
  );
}

export default Sidebar;
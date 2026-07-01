import { FaMoon, FaBell } from "react-icons/fa6";
import { useState } from "react";
import { useTheme } from "../context/ThemeContext";

function Topbar() {

  const { toggleDarkMode } = useTheme();
  const [showNotifications, setShowNotifications] = useState(false);

  return (
    <div className="topbar">

      {/* TÍTULO */}
      <div>
        <span className="mini-title">
          Bienvenida de nuevo ✨
        </span>

        <h1>Dashboard NovaCam</h1>
      </div>

      {/* ACCIONES */}
      <div className="top-actions">

        <button
          className="dark-btn"
          onClick={toggleDarkMode}
        >
          <FaMoon />
        </button>

        <div className="notification-wrapper">

          <button
              className="notification-btn"
  onClick={() => {
    console.log("CLICK");
    setShowNotifications(!showNotifications);
  }}
>
  <FaBell />
  <span className="notification-dot"></span>
          </button>

          {showNotifications && (
            <div className="notification-panel">

              <h3>Notificaciones</h3>

              <div className="notification-item">
                <strong>🎉 Bienvenida</strong>
                <p>Bienvenida nuevamente a NovaCam.</p>
              </div>

              <div className="notification-item">
                <strong>💰 Ingresos</strong>
                <p>Aún no tienes ingresos registrados.</p>
              </div>

              <div className="notification-item">
                <strong>📅 Agenda</strong>
                <p>No tienes eventos programados.</p>
              </div>

            </div>
          )}

        </div>

      </div>

    </div>
  );
}

export default Topbar;
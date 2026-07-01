function StatsSection() {
  return (
    <section className="stats-section">

      <div className="section-header">

        <span className="mini-title">
          Productividad
        </span>

        <h2>
          Estadísticas Generales
        </h2>

      </div>

      <div className="stats-grid">

        {/* HORAS */}

        <div className="stat-card">

          <h3>
            Horas Stream
          </h3>

          <h2>
            32h
          </h2>

          <div className="progress">

            <div className="progress-fill two"></div>

          </div>

        </div>

        {/* TRANSMISIONES */}

        <div className="stat-card">

          <h3>
            Transmisiones
          </h3>

          <h2>
            18
          </h2>

          <p>
            Esta semana
          </p>

        </div>

        {/* DÍAS */}

        <div className="stat-card">

          <h3>
            Días Registrados
          </h3>

          <h2>
            0
          </h2>

          <p>
            Días únicos registrados
          </p>

        </div>

      </div>

    </section>
  );
}

export default StatsSection;
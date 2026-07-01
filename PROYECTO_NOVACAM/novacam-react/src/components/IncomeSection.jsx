function IncomeSection() {
  return (
    <section className="income-section">

      <div className="section-header">

        <span className="mini-title">
          Finanzas
        </span>

        <h2>
          Resumen de Ingresos
        </h2>

      </div>

      {/* TARJETAS */}

      <div className="income-grid">

        {/* INGRESOS */}

        <div className="income-card">

          <h3>
            Ingresos Mensuales
          </h3>

          <h2>
            $0 COP
          </h2>

          <p>
            Actualizado automáticamente
          </p>

        </div>

        {/* MEJOR DÍA */}

        <div className="income-card">

          <h3>
            Mejor Día
          </h3>

          <h2>
            $0 COP
          </h2>

          <p>
            Ingreso más alto
          </p>

        </div>

        {/* META */}

        <div className="income-card">

          <h3>
            Meta Mensual
          </h3>

          <h2>
            85%
          </h2>

          <div className="progress">

            <div className="progress-fill one"></div>

          </div>

        </div>

      </div>

      {/* GRÁFICA */}

      <div className="income-chart">

        <div className="card-title">

          <h2>
            Evolución de Ingresos
          </h2>

        </div>

        <div className="fake-chart">

          <div className="bar one"></div>

          <div className="bar two"></div>

          <div className="bar three"></div>

          <div className="bar four"></div>

          <div className="bar five"></div>

          <div className="bar six"></div>

        </div>

      </div>

    </section>
  );
}

export default IncomeSection;
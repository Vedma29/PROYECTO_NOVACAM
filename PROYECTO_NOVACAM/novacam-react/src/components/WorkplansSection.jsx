function WorkplansSection() {
  return (
    <section className="workplans-section">

      <div className="section-header">

        <span className="mini-title">
          Organización Profesional ✨
        </span>

        <h2>
          Planes de Trabajo
        </h2>

      </div>

      <div className="workplans-grid">

        {/* PLAN ACTIVO */}

        <div className="workplan-card">

          <div className="workplan-top">

            <span className="plan-status active">
              Activo
            </span>

          </div>

          <h3>
            Growth Plan
          </h3>

          <p>
            Rutina enfocada en constancia,
            ingresos y disciplina profesional.
          </p>

          <div className="plan-info">

            <div>

              <span>Inicio</span>

              <strong>10 Mayo</strong>

            </div>

            <div>

              <span>Finaliza</span>

              <strong>31 Mayo</strong>

            </div>

          </div>

          <div className="progress">

            <div className="progress-fill two"></div>

          </div>

          <p className="progress-text">

            Día 7 de 21

          </p>

        </div>

        {/* TAREAS */}

        <div className="workplan-card">

          <div className="workplan-top">

            <span className="plan-status neutral">

              Tareas

            </span>

          </div>

          <div className="tasks">

            <label>

              <input
                type="checkbox"
                defaultChecked
              />

              Completar transmisión

            </label>

            <label>

              <input type="checkbox" />

              Revisar estadísticas

            </label>

            <label>

              <input type="checkbox" />

              Actualizar metas

            </label>

          </div>

        </div>

        {/* META */}

        <div className="workplan-card">

          <div className="workplan-top">

            <span className="plan-status gold">

              Meta Semanal

            </span>

          </div>

          <h3>

            15.000 Tokens

          </h3>

          <p>

            Objetivo semanal actual
            para desbloquear nuevos planes.

          </p>

          <div className="progress">

            <div className="progress-fill one"></div>

          </div>

        </div>

      </div>

    </section>
  );
}

export default WorkplansSection;
function GoalsSection() {
  return (
    <div className="card">

      <div className="card-title">

        <h2>
          Metas
        </h2>

      </div>

      <div className="tasks">

        <label>

          <input
            type="checkbox"
            defaultChecked
          />

          Completar 5 transmisiones

        </label>

        <label>

          <input
            type="checkbox"
            defaultChecked
          />

          Actualizar perfil premium

        </label>

        <label>

          <input
            type="checkbox"
          />

          Llegar a meta semanal

        </label>

      </div>

    </div>
  );
}

export default GoalsSection;
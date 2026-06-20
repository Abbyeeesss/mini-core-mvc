import { useState } from 'react';

export default function DateFilterForm({ onBuscar, cargando }) {
  const [fechaInicio, setFechaInicio] = useState('2025-05-01');
  const [fechaFin, setFechaFin] = useState('2025-05-31');

  const handleSubmit = (e) => {
    e.preventDefault();
    onBuscar(fechaInicio, fechaFin);
  };

  return (
    <form className="filtro-form" onSubmit={handleSubmit}>
      <div className="campo">
        <label htmlFor="fechaInicio">Fecha inicio</label>
        <input
          id="fechaInicio"
          type="date"
          value={fechaInicio}
          onChange={(e) => setFechaInicio(e.target.value)}
          required
        />
      </div>

      <div className="campo">
        <label htmlFor="fechaFin">Fecha fin</label>
        <input
          id="fechaFin"
          type="date"
          value={fechaFin}
          onChange={(e) => setFechaFin(e.target.value)}
          required
        />
      </div>

      <button type="submit" className="boton-calcular" disabled={cargando}>
        {cargando ? 'Calculando…' : 'Calcular costos'}
      </button>
    </form>
  );
}

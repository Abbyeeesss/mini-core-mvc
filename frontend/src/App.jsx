import { useState } from 'react';
import DateFilterForm from './components/DateFilterForm';
import ResultsTable from './components/ResultsTable';
import { obtenerCostosPorRango } from './api';
import './App.css';

function App() {
  const [datos, setDatos] = useState(null);
  const [cargando, setCargando] = useState(false);
  const [error, setError] = useState(null);
  const [rangoConsultado, setRangoConsultado] = useState(null);

  const handleBuscar = async (fechaInicio, fechaFin) => {
    setCargando(true);
    setError(null);
    try {
      const resultado = await obtenerCostosPorRango(fechaInicio, fechaFin);
      setDatos(resultado);
      setRangoConsultado({ fechaInicio, fechaFin });
    } catch (err) {
      console.error(err);
      setError(
        'No se pudo obtener la información'
      );
      setDatos(null);
    } finally {
      setCargando(false);
    }
  };

  return (
    <div className="pagina">
      <header className="encabezado">
        <h1>Costo de envíos por repartidor</h1>
      </header>

      <main className="contenido">
        <DateFilterForm onBuscar={handleBuscar} cargando={cargando} />

        {error && <p className="estado-error">{error}</p>}

        <ResultsTable datos={datos} />
      </main>
    </div>
  );
}

export default App;

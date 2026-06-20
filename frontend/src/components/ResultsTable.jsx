export default function ResultsTable({ datos }) {
  if (!datos) return null;

  if (datos.length === 0) {
    return <p className="estado-vacio">No hay repartidores registrados todavía.</p>;
  }

  const totalGeneral = datos.reduce((acc, fila) => acc + fila.costoTotal, 0);

  return (
    <div className="tabla-wrapper">
      <table className="tabla-resultados">
        <thead>
          <tr>
            <th>Repartidor</th>
            <th className="num">Envíos</th>
            <th className="num">Total kg</th>
            <th>Zona</th>
            <th className="num">$/kg prom.</th>
            <th className="num">Costo total</th>
          </tr>
        </thead>
        <tbody>
          {datos.map((fila) => (
            <tr key={fila.id_repartidor} className={fila.cantidadEnvios === 0 ? 'fila-sin-envios' : ''}>
              <td>{fila.repartidor}</td>
              <td className="num mono">{fila.cantidadEnvios}</td>
              <td className="num mono">{fila.cantidadEnvios > 0 ? `${fila.totalKg} kg` : '—'}</td>
              <td>{fila.zonas}</td>
              <td className="num mono">
                {fila.cantidadEnvios > 0 ? `$${(fila.costoTotal / fila.totalKg).toFixed(2)}` : '—'}
              </td>
              <td className="num mono costo">
                {fila.cantidadEnvios > 0 ? `$${fila.costoTotal.toFixed(2)}` : 'No aplica'}
              </td>
            </tr>
          ))}
        </tbody>
        <tfoot>
          <tr>
            <td colSpan={5}>Total general del período</td>
            <td className="num mono costo">${totalGeneral.toFixed(2)}</td>
          </tr>
        </tfoot>
      </table>
    </div>
  );
}

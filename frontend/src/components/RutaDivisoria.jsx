export default function RutaDivisoria() {
  return (
    <svg className="ruta-divisoria" viewBox="0 0 600 24" preserveAspectRatio="none" aria-hidden="true">
      <line x1="8" y1="12" x2="592" y2="12" className="ruta-linea" />
      <circle cx="8" cy="12" r="5" className="ruta-parada ruta-parada-inicio" />
      <circle cx="200" cy="12" r="3.5" className="ruta-parada" />
      <circle cx="400" cy="12" r="3.5" className="ruta-parada" />
      <circle cx="592" cy="12" r="5" className="ruta-parada ruta-parada-fin" />
    </svg>
  );
}

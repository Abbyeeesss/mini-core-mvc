import axios from 'axios';

const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:4000';

/**
 * Pide al backend el costo total por repartidor para un rango de fechas.
 * El backend (Controller) ya hace el filtrado y la suma; el frontend solo pinta el resultado.
 */
export async function obtenerCostosPorRango(fechaInicio, fechaFin) {
  const response = await axios.get(`${API_URL}/api/envios/costos`, {
    params: { fechaInicio, fechaFin }
  });
  return response.data;
}

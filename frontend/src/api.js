import axios from 'axios';

const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:4000';

export async function obtenerCostosPorRango(fechaInicio, fechaFin) {
  const response = await axios.get(`${API_URL}/api/envios/costos`, {
    params: { fechaInicio, fechaFin }
  });
  return response.data;
}

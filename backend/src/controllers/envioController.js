const { Op } = require('sequelize');
const { Repartidor, Zona, Envio } = require('../models');

exports.calcularCostos = async (req, res) => {
  try {
    const { fechaInicio, fechaFin } = req.query;

    if (!fechaInicio || !fechaFin) {
      return res.status(400).json({
        error: 'Debes enviar fechaInicio y fechaFin en formato YYYY-MM-DD'
      });
    }

    const repartidores = await Repartidor.findAll({ order: [['nombre', 'ASC']] });

    const resultado = [];

    for (const repartidor of repartidores) {
      const envios = await Envio.findAll({
        where: {
          id_repartidor: repartidor.id_repartidor,
          fecha_envio: { [Op.between]: [fechaInicio, fechaFin] }
        },
        include: [{ model: Zona }]
      });

      if (envios.length === 0) {
        resultado.push({
          id_repartidor: repartidor.id_repartidor,
          repartidor: repartidor.nombre,
          cantidadEnvios: 0,
          totalKg: 0,
          zonas: '—',
          costoTotal: 0
        });
        continue;
      }

      let totalKg = 0;
      let costoTotal = 0;
      const zonasUsadas = new Set();

      envios.forEach((envio) => {
        const peso = parseFloat(envio.peso_kg);
        const tarifa = parseFloat(envio.Zona.tarifa_por_kg);

        totalKg += peso;
        costoTotal += peso * tarifa;
        zonasUsadas.add(envio.Zona.nombre_zona);
      });

      resultado.push({
        id_repartidor: repartidor.id_repartidor,
        repartidor: repartidor.nombre,
        cantidadEnvios: envios.length,
        totalKg: Number(totalKg.toFixed(2)),
        zonas: Array.from(zonasUsadas).join(', '),
        costoTotal: Number(costoTotal.toFixed(2))
      });
    }

    res.json(resultado);
  } catch (error) {
    console.error('Error en calcularCostos:', error);
    res.status(500).json({ error: 'Error interno al calcular los costos de envío' });
  }
};

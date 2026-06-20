const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');

// Tabla: Zonas
// Cada zona define cuánto cuesta entregar 1 kg en esa zona.
const Zona = sequelize.define(
  'Zona',
  {
    id_zona: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    nombre_zona: {
      type: DataTypes.STRING,
      allowNull: false
    },
    tarifa_por_kg: {
      type: DataTypes.DECIMAL(10, 2),
      allowNull: false
    }
  },
  {
    tableName: 'zonas',
    timestamps: false
  }
);

module.exports = Zona;

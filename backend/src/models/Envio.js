const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');

// Tabla: Envios
const Envio = sequelize.define(
  'Envio',
  {
    id_envio: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    id_repartidor: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    id_zona: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    peso_kg: {
      type: DataTypes.DECIMAL(10, 2),
      allowNull: false
    },
    fecha_envio: {
      type: DataTypes.DATEONLY,
      allowNull: false
    }
  },
  {
    tableName: 'envios',
    timestamps: false
  }
);

module.exports = Envio;

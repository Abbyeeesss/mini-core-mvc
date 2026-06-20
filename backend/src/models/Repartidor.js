const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');

// Tabla: Repartidor
const Repartidor = sequelize.define(
  'Repartidor',
  {
    id_repartidor: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    nombre: {
      type: DataTypes.STRING,
      allowNull: false
    },
    email: {
      type: DataTypes.STRING,
      allowNull: true
    }
  },
  {
    tableName: 'repartidores',
    timestamps: false
  }
);

module.exports = Repartidor;

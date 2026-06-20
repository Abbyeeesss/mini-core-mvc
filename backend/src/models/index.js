const sequelize = require('../config/db');
const Repartidor = require('./Repartidor');
const Zona = require('./Zona');
const Envio = require('./Envio');

// Relaciones:
// Un repartidor puede tener muchos envíos.
Repartidor.hasMany(Envio, { foreignKey: 'id_repartidor' });
Envio.belongsTo(Repartidor, { foreignKey: 'id_repartidor' });

// Una zona puede tener muchos envíos.
Zona.hasMany(Envio, { foreignKey: 'id_zona' });
Envio.belongsTo(Zona, { foreignKey: 'id_zona' });

module.exports = { sequelize, Repartidor, Zona, Envio };

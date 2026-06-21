const sequelize = require('../config/db');
const Repartidor = require('./Repartidor');
const Zona = require('./Zona');
const Envio = require('./Envio');

Repartidor.hasMany(Envio, { foreignKey: 'id_repartidor' });
Envio.belongsTo(Repartidor, { foreignKey: 'id_repartidor' });

Zona.hasMany(Envio, { foreignKey: 'id_zona' });
Envio.belongsTo(Zona, { foreignKey: 'id_zona' });

module.exports = { sequelize, Repartidor, Zona, Envio };

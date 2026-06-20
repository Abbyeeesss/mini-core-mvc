const { Sequelize } = require('sequelize');
require('dotenv').config();

if (!process.env.DATABASE_URL) {
  console.warn('⚠️  No se encontró DATABASE_URL en el .env. Revisa el archivo .env.example');
}

// Conexión a Supabase (PostgreSQL) usando la cadena de conexión del proyecto.
// Supabase requiere SSL, por eso se configura dialectOptions.ssl.
const sequelize = new Sequelize(process.env.DATABASE_URL, {
  dialect: 'postgres',
  protocol: 'postgres',
  dialectOptions: {
    ssl: {
      require: true,
      rejectUnauthorized: false
    }
  },
  logging: false
});

module.exports = sequelize;
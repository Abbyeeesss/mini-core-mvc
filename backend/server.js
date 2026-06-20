require('dotenv').config();
const app = require('./src/app');
const sequelize = require('./src/config/db');

const PORT = process.env.PORT || 4000;

sequelize
  .authenticate()
  .then(() => {
    app.listen(PORT, () => {});
  })
  .catch((error) => {
    console.error('❌ No se pudo conectar a la base de datos:', error.message);
    process.exit(1);
  });

const express = require('express');
const cors = require('cors');
const envioRoutes = require('./routes/envioRoutes');

const app = express();

app.use(cors());
app.use(express.json());

app.get('/', (_req, res) => {
  res.json({ status: 'API Mini Core - Logística (MVC) funcionando correctamente' });
});

app.use('/api/envios', envioRoutes);

module.exports = app;

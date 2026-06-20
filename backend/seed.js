require('dotenv').config();
const sequelize = require('./src/config/db');
const { Repartidor, Zona, Envio } = require('./src/models');

async function seed() {
  try {
    console.log('Sincronizando tablas en Supabase...');
    await sequelize.sync({ force: true }); // crea/recrea repartidores, zonas, envios

    console.log('Insertando zonas...');
    const zonas = await Zona.bulkCreate([
      { nombre_zona: 'Norte', tarifa_por_kg: 1.5 },
      { nombre_zona: 'Sur', tarifa_por_kg: 2.0 },
      { nombre_zona: 'Centro', tarifa_por_kg: 1.75 }
    ]);
    const [norte, sur, centro] = zonas;

    console.log('Insertando repartidores...');
    const repartidores = await Repartidor.bulkCreate([
      { nombre: 'Andrés', email: 'andres@correo.com' },
      { nombre: 'Camila', email: 'camila@correo.com' },
      { nombre: 'Luis', email: 'luis@correo.com' }
    ]);
    const [andres, camila, luis] = repartidores;

    console.log('Insertando envíos...');
    await Envio.bulkCreate([
      // Andrés: 5 envíos en mayo 2025, zona Norte -> 32 kg, costo $48.00
      { id_repartidor: andres.id_repartidor, id_zona: norte.id_zona, peso_kg: 6, fecha_envio: '2025-05-02' },
      { id_repartidor: andres.id_repartidor, id_zona: norte.id_zona, peso_kg: 7, fecha_envio: '2025-05-08' },
      { id_repartidor: andres.id_repartidor, id_zona: norte.id_zona, peso_kg: 5, fecha_envio: '2025-05-14' },
      { id_repartidor: andres.id_repartidor, id_zona: norte.id_zona, peso_kg: 8, fecha_envio: '2025-05-20' },
      { id_repartidor: andres.id_repartidor, id_zona: norte.id_zona, peso_kg: 6, fecha_envio: '2025-05-27' },

      // Camila: 3 envíos en mayo 2025, zona Sur -> 18 kg, costo $36.00
      { id_repartidor: camila.id_repartidor, id_zona: sur.id_zona, peso_kg: 6, fecha_envio: '2025-05-05' },
      { id_repartidor: camila.id_repartidor, id_zona: sur.id_zona, peso_kg: 6, fecha_envio: '2025-05-15' },
      { id_repartidor: camila.id_repartidor, id_zona: sur.id_zona, peso_kg: 6, fecha_envio: '2025-05-25' },

      // Luis: solo tiene un envío en abril (fuera del rango de mayo), para probar el filtro
      { id_repartidor: luis.id_repartidor, id_zona: centro.id_zona, peso_kg: 10, fecha_envio: '2025-04-10' }
    ]);

    process.exit(0);
  } catch (error) {
    console.error('❌ Error en el seed:', error);
    process.exit(1);
  }
}

seed();

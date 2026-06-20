# Mini Core — Costo de Envíos por Repartidor (MVC con React + Node.js + Supabase)

Aplicación que calcula el costo total generado por cada repartidor en un rango de
fechas, según el peso de sus envíos y la tarifa por kg de cada zona de entrega.

## MVC utilizado

- **Model** — `backend/src/models` (Sequelize sobre PostgreSQL/Supabase): `Repartidor`, `Zona`, `Envio`.
- **Controller** — `backend/src/controllers/envioController.js`: filtra los envíos por rango de fechas y calcula el costo por repartidor.
- **View** — `frontend/src` (React): formulario de fechas + tabla de resultados.

El frontend (React) nunca calcula nada: solo pide datos al backend (Controller) vía API REST y los muestra.

## Estructura del repositorio

```
mini-core-mvc/
├── backend/     → API Express + Sequelize conectada a Supabase
└── frontend/    → React (Vite)
```

## 1. Crear el proyecto en Supabase

1. Crea una cuenta/proyecto en https://supabase.com
2. Ve a **Project Settings → Database → Connection string → URI**.
3. Copia esa URL (incluye tu password de la base de datos).

No necesitas crear las tablas a mano: el script `seed.js` las crea automáticamente.

## 2. Backend

```bash
cd backend
cp .env.example .env
# Edita .env y pega tu DATABASE_URL de Supabase

npm install
npm run seed     # crea las tablas y carga los datos de ejemplo
npm run dev      # levanta el servidor en http://localhost:4000
```

Prueba que funciona abriendo en el navegador:
`http://localhost:4000/api/envios/costos?fechaInicio=2025-05-01&fechaFin=2025-05-31`

## 3. Frontend

En otra terminal:

```bash
cd frontend
cp .env.example .env
# VITE_API_URL=http://localhost:4000 (déjalo así para desarrollo local)

npm install
npm run dev      # levanta la app en http://localhost:5173
```

Abre `http://localhost:5173`, elige un rango de fechas y presiona **Calcular costos**.

Con los datos de ejemplo (seed), el rango `2025-05-01` a `2025-05-31` reproduce la tabla
del enunciado: Andrés ($48.00, zona Norte), Camila ($36.00, zona Sur) y Luis sin envíos
en ese período.

## 4. Despliegue

**Backend (Railway o Render):**
1. Sube este repo a GitHub.
2. En Railway/Render crea un nuevo servicio apuntando a la carpeta `backend`.
3. Configura la variable de entorno `DATABASE_URL` con tu connection string de Supabase.
4. Comando de inicio: `npm start`. Antes de la primera petición, corre una vez `npm run seed` (puedes hacerlo desde tu máquina local apuntando al mismo `DATABASE_URL`).

**Frontend (Vercel, Railway o Render):**
1. Crea un servicio apuntando a la carpeta `frontend`.
2. Variable de entorno: `VITE_API_URL` = URL pública de tu backend ya deployado.
3. Comando de build: `npm run build`. Carpeta de salida: `dist`.

El link final que entregues debe apuntar directo a la pantalla del filtro de fechas (la home del frontend deployado).

## 5. Información de entrega (completar antes de subir a Brightspace)

- **Video explicativo (Loom/YouTube):** _pendiente_
- **Repositorio GitHub:** _pendiente_
- **Proyecto deployado:** _pendiente_
- **Documentación oficial del framework:**
  - React: https://react.dev/
  - Express: https://expressjs.com/
  - Sequelize: https://sequelize.org/
  - Supabase: https://supabase.com/docs
- **Contacto:** alumno.apellido@udla.edu.ec | alumno@gmail.com

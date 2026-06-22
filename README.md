# Mini Core

Aplicación que calcula el costo total generado por cada repartidor en un rango de
fechas, según el peso de sus envíos y la tarifa por kg de cada zona de entrega.

## MVC utilizado

- **Model** — `backend/src/models` : `Repartidor`, `Zona`, `Envio`.
- **Controller** — `backend/src/controllers/envioController.js`: filtra los envíos por rango de fechas y calcula el costo por repartidor.
- **View** — `frontend/src` (React): formulario de fechas + tabla de resultados.

El frontend (React) nunca calcula nada: solo pide datos al backend (Controller) vía API REST y los muestra.

## Estructura del repositorio

```
mini-core-mvc/
├── backend/     
└── frontend/   
```

## 1. Crear el proyecto en Supabase

1. Crea una cuenta/proyecto en https://supabase.com
2. Copia esa URL (incluye tu password de la base de datos).

No necesitas crear las tablas a mano: el script `seed.js` las crea automáticamente.

## 2. Backend

```bash
cd backend
cp .env.example .env
# Edita .env y pega tu DATABASE_URL de Supabase

npm install
npm run seed     # crea las tablas y carga los datos de ejemplo
npm run dev      # levanta el servidor 
```

## 3. Frontend

En otra terminal:

```bash
cd frontend
cp .env.example .env

npm install
npm run dev    
```

Abre `http://localhost:5173`, elige un rango de fechas y presiona **Calcular costos**.

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

## 5. Información

- **Video:** https://youtu.be/s1zG1IQSMw4
- **Proyecto deployado:** https://mini-core-mvc.vercel.app/


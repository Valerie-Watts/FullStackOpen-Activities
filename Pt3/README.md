# Parte 3 — Node.js, Express y MongoDB

Ejercicios de la tercera parte del curso Full Stack Open. Esta parte cubre el desarrollo backend con Node.js y Express, la conexión a una base de datos con MongoDB, y el despliegue en producción con Render.

## Proyecto

**Phonebook Backend** — API REST para la agenda telefónica con base de datos en MongoDB Atlas.

## Cómo ejecutar

### Requisitos
- Node.js instalado
- Cuenta en MongoDB Atlas con un cluster configurado

### Variables de entorno

Crea un archivo `.env` en la raíz del proyecto:
```
MONGODB_URI=tu_url_de_mongodb_aqui
PORT=3001
```

### Instalación y ejecución

```bash
npm install
npm run dev
```

La API estará disponible en `http://localhost:3001/api/persons`.

### Producción

La aplicación está desplegada en Render:
```
https://fullstackopen-activities.onrender.com
```

## Rutas disponibles

| Método | Ruta | Descripción |
|--------|------|-------------|
| GET | `/api/persons` | Obtener todas las personas |
| GET | `/api/persons/:id` | Obtener una persona |
| POST | `/api/persons` | Agregar una persona |
| PUT | `/api/persons/:id` | Actualizar una persona |
| DELETE | `/api/persons/:id` | Eliminar una persona |
| GET | `/info` | Info del phonebook |

## Reflexión técnica

El mayor desafío de esta parte fue conectar todas las piezas: el frontend de React, el backend de Express y la base de datos en MongoDB, todo funcionando junto tanto en local como en producción.

**Manejo de errores en promesas** — Al principio no usaba `.catch()` en todas las promesas y cuando algo fallaba el servidor simplemente se colgaba sin dar ningún mensaje útil. Aprendí a pasar los errores al middleware centralizado con `next(error)` en lugar de manejarlos individualmente en cada ruta, lo que hizo el código mucho más limpio.

**Variables de entorno** — Tuve problemas con dotenv en Windows porque no leía el archivo `.env` correctamente. La solución fue usar la ruta absoluta con `__dirname` al configurarlo. También aprendí que el `.env` nunca debe subirse a GitHub y que en producción las variables se configuran directamente en Render.

**MongoDB y Mongoose** — Entender la diferencia entre el id de MongoDB (`_id`) y el id que manda la API (`id`) tomó un poco. El método `toJSON` del schema fue la solución para transformar el objeto antes de enviarlo al cliente.

**Despliegue** — Juntar el frontend y el backend en un solo servidor usando `express.static('dist')` fue más sencillo de lo que esperaba, aunque subir el `dist` a GitHub sin que lo ignorara el `.gitignore` global sí tomó un rato resolverlo.

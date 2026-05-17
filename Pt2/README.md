# Parte 2 — Comunicación con el servidor

Ejercicios de la segunda parte del curso Full Stack Open. Esta parte cubre el manejo de colecciones, formularios controlados y comunicación con una API usando axios.

## Proyectos

- **Courseinfo** — Renderizado de listas con map y reduce
- **Phonebook** — Agenda telefónica con json-server
- **Countries** — Búsqueda de países con API externa y clima

## Cómo ejecutar

### Phonebook
```bash
# Terminal 1 - servidor de datos
npx json-server --port 3001 --watch db.json

# Terminal 2 - aplicación React
npm install
npm run dev
```

### Countries
```bash
npm install
npm run dev
```

Abre `http://localhost:5173` en el navegador.

## Reflexión técnica

Esta parte fue bastante más exigente que la primera. El reto más grande fue entender el comportamiento asíncrono de JavaScript — al principio no entendía por qué el estado no se actualizaba inmediatamente después de llamar a `setState`. Por ejemplo, en el phonebook intenté usar el valor actualizado de `left` justo después de llamar a `setLeft`, y el valor seguía siendo el anterior. Aprendí que hay que guardar el nuevo valor en una variable local antes de usarlo.

Otro desafío fue el hook `useEffect`. Al principio no tenía claro cuándo se ejecutaba ni por qué el arreglo de dependencias vacío `[]` hacía que solo corriera una vez. Después de varios errores entendí que sin el arreglo, el efecto corre en cada render y puede causar bucles infinitos si adentro hay un `setState`.

El manejo de promesas con axios también tomó tiempo. Encadenar `.then()` y `.catch()` de forma correcta, y entender que el objeto de respuesta tiene los datos en `response.data` y no directamente, fue algo que tuve que revisar varias veces antes de que se me quedara.

# Parte 1 — Introducción a React

Ejercicios de la primera parte del curso Full Stack Open. Esta parte cubre los conceptos base de React y JavaScript moderno.

## Ejercicios

- **1.1 - 1.5** — Información del curso: componentes, props y objetos
- **1.6 - 1.11** — Unicafe: estado con useState, controladores de eventos
- **1.12 - 1.14** — Anecdotas: renderizado condicional y votación

## Cómo ejecutar

```bash
npm install
npm run dev
```

Abre `http://localhost:5173` en el navegador.

## Lo que aprendí

La parte más difícil al principio fue entender cómo funciona el estado en React. Estaba acostumbrada a pensar que si cambias una variable el componente se actualiza solo, pero React no funciona así — tienes que usar `useState` y la función que te da para modificarlo, si no los cambios simplemente no se reflejan en la pantalla.

Otro reto fue entender cuándo usar `const` versus dejar que el estado maneje los datos. Al principio intentaba modificar variables directamente y me preguntaba por qué nada cambiaba. Una vez que entendí el flujo de re-renderizado todo empezó a tener más sentido.

Los props también me costaron un poco, especialmente cuando el componente padre le pasa funciones al hijo como `onClick`. Pero con práctica se vuelve natural.

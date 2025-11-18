document.documentElement.classList.add('js-enabled');

// Contenido dinámico
const content = document.getElementById('main-content');

document.getElementById('card-entrenos').addEventListener('click', () => {
  content.innerHTML = `
    <h3>Entrenos</h3>
    <p>Rutinas, ejercicios y guías.</p>
  `;
});

document.getElementById('card-playlists').addEventListener('click', () => {
  content.innerHTML = `
    <h3>Playlists</h3>
    <p>Listas para entrenar y cargar hierro.</p>
  `;
});

document.getElementById('card-retos').addEventListener('click', () => {
  content.innerHTML = `
    <h3>Retos</h3>
    <p>Retos mensuales para la comunidad.</p>
  `;
});

document.getElementById('card-otro').addEventListener('click', () => {
  content.innerHTML = `
    <h3>Más</h3>
    <p>Información adicional, contacto y proyectos.</p>
  `;
});

console.log("JS cargado correctamente.");

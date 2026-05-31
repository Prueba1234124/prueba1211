fetch('data.json')
    .then(response => response.json())
    .then(data => {
        document.getElementById('titulo').innerText = data.titulo;
    });

document.getElementById('btn-bienvenida').addEventListener('click', () => {
    // Redirigir al catálogo
    window.location.href = 'catalogo.html';
});

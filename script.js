fetch('data.json')
    .then(response => response.json())
    .then(data => {
        document.getElementById('titulo').innerText = data.titulo;
    });

document.getElementById('btn-bienvenida').addEventListener('click', () => {
    window.location.href = 'catalogo.html';
});

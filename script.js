// --- CÓDIGO EXISTENTE DE LA PÁGINA DE INICIO ---
// Solo se ejecuta si estamos en index.html
if(document.getElementById('titulo')) {
    fetch('data.json')
        .then(response => response.json())
        .then(data => {
            document.getElementById('titulo').innerText = data.titulo;
        });

    document.getElementById('btn-bienvenida').addEventListener('click', () => {
        window.location.href = 'catalogo.html';
    });
}

// --- NUEVO CÓDIGO DEL CATÁLOGO (BASE DE DATOS Y MODAL) ---

// Nuestra pequeña base de datos para el prototipo
const datosCarros = {
    'hilux': {
        titulo: 'Toyota Hilux 2023',
        img: 'https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?auto=format&fit=crop&w=800&q=80',
        desc: 'El rey de las carreteras y el trabajo pesado. Indestructible y confiable en cualquier terreno.',
        specs: [
            '<strong>Motor:</strong> 2.8L Turbo Diésel',
            '<strong>Transmisión:</strong> Manual / Automática',
            '<strong>Tracción:</strong> 4x4',
            '<strong>Condición:</strong> Seminuevo'
        ]
    },
    'dmax': {
        titulo: 'Isuzu D-Max 2022',
        img: 'https://images.unsplash.com/photo-1622146939943-41f2382e21b7?auto=format&fit=crop&w=800&q=80',
        desc: 'Poderoso motor de trabajo con excelente rendimiento de combustible para el día a día.',
        specs: [
            '<strong>Motor:</strong> 3.0L Diésel',
            '<strong>Transmisión:</strong> Manual',
            '<strong>Capacidad de carga:</strong> 1 Tonelada',
            '<strong>Condición:</strong> Recién Importado'
        ]
    },
    'prado': {
        titulo: 'Toyota Land Cruiser Prado',
        img: 'https://images.unsplash.com/photo-1549399542-7e3f8b79c341?auto=format&fit=crop&w=800&q=80',
        desc: 'Comodidad familiar combinada con la capacidad de dominar cualquier terreno.',
        specs: [
            '<strong>Motor:</strong> 3.0L Turbo Diésel',
            '<strong>Interiores:</strong> Asientos de Cuero',
            '<strong>Pasajeros:</strong> 3 Filas (7 pasajeros)',
            '<strong>Condición:</strong> Agencia'
        ]
    }
};

// Función para abrir la ventana con los datos del carro seleccionado
function abrirModal(idCarro) {
    const carro = datosCarros[idCarro]; // Buscamos el carro en nuestra base de datos
    
    // Cambiamos la imagen, título y descripción
    document.getElementById('modal-img').src = carro.img;
    document.getElementById('modal-titulo').innerText = carro.titulo;
    document.getElementById('modal-desc').innerText = carro.desc;
    
    // Limpiamos y llenamos la lista de especificaciones
    const listaSpecs = document.getElementById('lista-especificaciones');
    listaSpecs.innerHTML = ''; // Borramos las specs anteriores
    
    carro.specs.forEach(spec => {
        const li = document.createElement('li');
        li.innerHTML = spec; // Usamos innerHTML para que lea las etiquetas <strong>
        listaSpecs.appendChild(li);
    });
    
    // Mostramos la ventana
    document.getElementById('ventana-info').style.display = 'flex';
}

// Función para cerrar la ventana
function cerrarModal() {
    document.getElementById('ventana-info').style.display = 'none';
}

// Cerrar la ventana si se hace clic afuera del cuadro de información
window.onclick = function(event) {
    const modal = document.getElementById('ventana-info');
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

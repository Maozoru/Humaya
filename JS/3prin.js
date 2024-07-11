// Simulación de datos del catálogo (puedes reemplazar esto con una conexión real)
const catalogo = [
    {
        id: 1,
        nombre: 'Alfajor de chocolate',
        descripcion: 'Delicioso alfajor de chocolate con relleno de dulce de leche.',
        precio: '$150',
        imagen: 'imagenes/Alfajor de chocolate.jpeg',
        link: 'Paginas/catalogo.html'
    },
    {
        id: 2,
        nombre: 'Alfajor de maicena',
        descripcion: 'Clásico alfajor de maicena con relleno de dulce de leche.',
        precio: '$120',
        imagen: 'imagenes/Alfajor de maicena.jpeg',
        link: 'Paginas/catalogo.html'
    },
    {
        id: 3,
        nombre: 'Alfajor de dulce de leche',
        descripcion: 'Alfajor relleno de dulce de leche cubierto con merengue.',
        precio: '$130',
        imagen: 'imagenes/Alfajor de dulce de leche.jpg',
        link: 'Paginas/catalogo.html'
    },
    {
        id: 4,
        nombre: 'Alfajor de frutas',
        descripcion: 'Alfajor relleno de mermelada de frutas y cubierto con chocolate.',
        precio: '$140',
        imagen: 'imagenes/Alfajor de frutas.jpg',
        link: 'Paginas/catalogo.html'
    },
    {
        id: 5,
        nombre: 'Alfajor de nuez',
        descripcion: 'Alfajor con relleno de nuez y dulce de leche, cubierto con chocolate.',
        precio: '$160',
        imagen: 'imagenes/Alfajor de nuez.jpeg',
        link: 'Paginas/catalogo.html'
    },
    {
        id: 6,
        nombre: 'Alfajor de coco',
        descripcion: 'Alfajor de coco rallado con relleno de dulce de leche.',
        precio: '$140',
        imagen: 'imagenes/Alfajor de coco.jpg',
        link: 'Paginas/catalogo.html'
    }
];

document.addEventListener('DOMContentLoaded', function() {
    const productosDestacadosRow = document.getElementById('productosDestacadosRow');

    // Función para seleccionar productos aleatorios del catálogo
    function seleccionarProductosAleatorios(catalogo, cantidad) {
        const productosAleatorios = [];
        const indicesUsados = new Set();

        while (productosAleatorios.length < cantidad && productosAleatorios.length < catalogo.length) {
            const randomIndex = Math.floor(Math.random() * catalogo.length);
            if (!indicesUsados.has(randomIndex)) {
                indicesUsados.add(randomIndex);
                productosAleatorios.push(catalogo[randomIndex]);
            }
        }

        return productosAleatorios;
    }

    // Función para mostrar productos aleatorios en el HTML
    function mostrarProductosAleatorios() {
        const productosAleatorios = seleccionarProductosAleatorios(catalogo, 3);

        productosAleatorios.forEach(producto => {
            const col = document.createElement('div');
            col.classList.add('col-md-4');

            const card = document.createElement('div');
            card.classList.add('card', 'shadow-sm', 'mb-4');

            const img = document.createElement('img');
            img.src = producto.imagen;
            img.classList.add('card-img-top');
            img.alt = producto.nombre;

            const cardBody = document.createElement('div');
            cardBody.classList.add('card-body');

            const cardTitle = document.createElement('h5');
            cardTitle.classList.add('card-title');
            cardTitle.textContent = producto.nombre;

            const cardText = document.createElement('p');
            cardText.classList.add('card-text');
            cardText.textContent = producto.descripcion;

            const precio = document.createElement('p');
            precio.classList.add('card-text');
            precio.textContent = 'Precio: ' + producto.precio;

            const link = document.createElement('a');
            link.href = producto.link; // Aquí se establece el enlace al catálogo
            link.classList.add('btn', 'btn-primary', 'btn-block');
            link.textContent = 'Más info';

            cardBody.appendChild(cardTitle);
            cardBody.appendChild(cardText);
            cardBody.appendChild(precio);
            cardBody.appendChild(link);

            card.appendChild(img);
            card.appendChild(cardBody);

            col.appendChild(card);

            productosDestacadosRow.appendChild(col);
        });
    }

    // Llamar a la función para mostrar productos aleatorios al cargar la página
    mostrarProductosAleatorios();
});
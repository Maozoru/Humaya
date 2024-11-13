// Función para obtener los productos del localStorage
function getCartItems() {
    return JSON.parse(localStorage.getItem('cartItems')) || [];
}

// Función para guardar los productos en el localStorage
function saveCartItems(items) {
    localStorage.setItem('cartItems', JSON.stringify(items));
}

// Función para agregar un producto al carrito
function addToCart(product) {
    let cartItems = getCartItems();
    cartItems.push(product);
    saveCartItems(cartItems);
    updateCartCount();
    showNotification(`${product.name} ha sido agregado al carrito`); // Mostrar notificación
}

// Función para actualizar la cuenta de productos en el carrito
function updateCartCount() {
    const cartItems = getCartItems();
    document.getElementById('cart-count').textContent = cartItems.length;
}

// Función para mostrar la notificación cuando un producto se agrega al carrito
function showNotification(message) {
    // Eliminar cualquier notificación previa
    const existingNotification = document.querySelector('.notification');
    if (existingNotification) {
        existingNotification.remove();
    }

    // Crear el elemento de la notificación
    const notification = document.createElement('div');
    notification.classList.add('notification');
    notification.textContent = message;

    // Agregar la notificación al cuerpo de la página
    document.body.appendChild(notification);

    // Mostrar la notificación por 3 segundos
    setTimeout(() => {
        notification.style.opacity = '0';
    }, 3000);

    // Eliminar la notificación después de que se desvanezca
    setTimeout(() => {
        notification.remove();
    }, 4000);
}

// Función para manejar el evento de agregar al carrito
function handleAddToCartButton(event) {
    const button = event.target;
    const product = {
        id: button.getAttribute('data-id'),
        name: button.getAttribute('data-name'),
        price: parseFloat(button.getAttribute('data-price')),
        image: button.getAttribute('data-image')
    };
    addToCart(product);
}

// Asignar el evento a los botones de agregar al carrito
document.querySelectorAll('.add-to-cart-button').forEach(button => {
    button.addEventListener('click', handleAddToCartButton);
});

// Inicializar la cuenta de productos en el carrito al cargar la página
document.addEventListener('DOMContentLoaded', updateCartCount);

// Inicializar lista de favoritos en localStorage (si no existe)
let favorites = JSON.parse(localStorage.getItem('favorites')) || [];

// Función para guardar favoritos en localStorage
function saveFavorites() {
    localStorage.setItem('favorites', JSON.stringify(favorites));
}

// Función para añadir un producto a favoritos
function addFavorite(productId) {
    if (!favorites.includes(productId)) {
        favorites.push(productId);
        saveFavorites();
    }
}

// Función para quitar un producto de favoritos
function removeFavorite(productId) {
    favorites = favorites.filter(id => id !== productId);
    saveFavorites();
}

// Función para verificar si un producto está en favoritos
function isFavorite(productId) {
    return favorites.includes(productId);
}

// Función para actualizar el botón de favoritos (visualmente)
function updateFavoriteButton(button, isFav) {
    if (isFav) {
        button.innerText = '💖'; // Producto marcado como favorito
    } else {
        button.innerText = '🤍'; // Producto no marcado como favorito
    }
}

// Inicializar botones de favoritos al cargar la página
document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.fav-btn').forEach(button => {
        const productId = button.dataset.id;

        // Actualizar visualización inicial del botón basado en el estado de favoritos
        updateFavoriteButton(button, isFavorite(productId));

        // Añadir evento al botón
        button.addEventListener('click', () => {
            if (isFavorite(productId)) {
                removeFavorite(productId);
                updateFavoriteButton(button, false);
            } else {
                addFavorite(productId);
                updateFavoriteButton(button, true);
            }
        });
    });
});

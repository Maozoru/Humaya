// catalog.js

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
}

// Función para actualizar la cuenta de productos en el carrito
function updateCartCount() {
    const cartItems = getCartItems();
    document.getElementById('cart-count').textContent = cartItems.length;
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

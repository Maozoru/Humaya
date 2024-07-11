// cart.js

// Función para obtener los productos del localStorage
function getCartItems() {
    return JSON.parse(localStorage.getItem('cartItems')) || [];
}

// Función para guardar los productos en el localStorage
function saveCartItems(items) {
    localStorage.setItem('cartItems', JSON.stringify(items));
}

// Función para mostrar los productos en el carrito
function displayCartItems() {
    const cartItems = getCartItems();
    const cartItemsContainer = document.getElementById('cart-items');
    cartItemsContainer.innerHTML = '';

    cartItems.forEach(item => {
        const cartItem = document.createElement('div');
        cartItem.className = 'col-md-4 mb-4';
        cartItem.innerHTML = `
            <div class="card">
                <img src="${item.image}" class="card-img-top" alt="${item.name}">
                <div class="card-body">
                    <h5 class="card-title">${item.name}</h5>
                    <p class="card-text">$${item.price.toFixed(2)}</p>
                </div>
            </div>
        `;
        cartItemsContainer.appendChild(cartItem);
    });

    updateTotalPrice();
}

// Función para actualizar el precio total
function updateTotalPrice() {
    const cartItems = getCartItems();
    const totalPrice = cartItems.reduce((sum, item) => sum + item.price, 0);
    document.getElementById('total-price').textContent = totalPrice.toFixed(2);
}

// Función para limpiar el carrito
function clearCart() {
    saveCartItems([]);
    displayCartItems();
}

// Asignar eventos a los botones del carrito
document.getElementById('clear-cart').addEventListener('click', clearCart);
document.getElementById('buy-now').addEventListener('click', () => {
    alert('Gracias por tu compra!');
    clearCart();
});

// Mostrar los productos del carrito al cargar la página
document.addEventListener('DOMContentLoaded', displayCartItems);

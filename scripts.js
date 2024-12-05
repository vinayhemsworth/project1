let cart = [];
let total = 0;

function addToCart(productName, price) {
    cart.push({ name: productName, price: price });
    total += price;

    // Update cart button text
    document.getElementById("cartButton").innerText = `Cart (${cart.length})`;

    // Show success message
    alert(`${productName} added to cart!`);
}

function openCart() {
    const cartModal = document.getElementById("cartModal");
    const cartItemsList = document.getElementById("cartItems");
    const totalPrice = document.getElementById("totalPrice");

    // Clear previous cart items
    cartItemsList.innerHTML = "";

    // Add current cart items to modal
    cart.forEach(item => {
        const listItem = document.createElement("li");
        listItem.textContent = `${item.name} - $${item.price}`;
        cartItemsList.appendChild(listItem);
    });

    // Display total price
    totalPrice.textContent = `Total: $${total}`;

    // Show the cart modal
    cartModal.style.display = "flex";
}

function closeCart() {
    document.getElementById("cartModal").style.display = "none";
}

function clearCart() {
    cart = [];
    total = 0;
    document.getElementById("cartButton").innerText = "Cart (0)";
    closeCart();
}

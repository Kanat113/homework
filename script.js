// Funktion zum Hinzufügen von Event-Listenern für Plus-, Minus- und Delete-Schaltflächen
function setupEventListeners() {
    const plusButtons = document.querySelectorAll('.plus-btn');
    const minusButtons = document.querySelectorAll('.minus-btn');
    const deleteButtons = document.querySelectorAll('.delete-btn');

    plusButtons.forEach(function(button) {
        button.addEventListener('click', increaseQuantity);
    });

    minusButtons.forEach(function(button) {
        button.addEventListener('click', decreaseQuantity);
    });

    deleteButtons.forEach(function(button) {
        button.addEventListener('click', deleteItem);
    });
}

// Funktion zum Inkrementieren der Menge
function increaseQuantity(event) {
    const item = event.target.parentElement;
    const quantityElement = item.querySelector('.quantity');
    const quantity = parseInt(quantityElement.textContent);
    quantityElement.textContent = quantity + 1;
    updateTotal();
}

// Funktion zum Dekrementieren der Menge
function decreaseQuantity(event) {
    const item = event.target.parentElement;
    const quantityElement = item.querySelector('.quantity');
    const quantity = parseInt(quantityElement.textContent);
    if (quantity > 0) {
        quantityElement.textContent = quantity - 1;
        updateTotal();
    }
}

// Funktion zum Löschen des Elements
function deleteItem(event) {
    const item = event.target.parentElement;
    item.remove();
    updateTotal();
}

// Funktion zur Aktualisierung des Gesamtpreises
function updateTotal() {
    const items = document.querySelectorAll('.item');
    let total = 0;
    items.forEach(function(item) {
        const quantity = parseInt(item.querySelector('.quantity').textContent);
        const price = parseFloat(item.querySelector('.price').textContent.replace('$', ''));
        total += quantity * price;
    });
    document.querySelector('.total').textContent = '$' + total.toFixed(2);
}

// Funktion zum Initialisieren
function initialize() {
    setupEventListeners();
    updateTotal();
}

// Aufruf der Initialisierungsfunktion, sobald das DOM geladen ist
document.addEventListener('DOMContentLoaded', initialize);

function increaseQuantity(event) {
    const item = event.target.parentElement;
    const quantityElement = item.querySelector('.quantity');
    const quantity = parseInt(quantityElement.textContent);

    // Überprüfen, ob die maximale Menge noch nicht erreicht ist
    if (quantity < 5) {
        quantityElement.textContent = quantity + 1;
        updateTotal();
    } else {
        alert("sorry Max 5 kiyim");
    }
};





document.addEventListener('DOMContentLoaded', function() {
    const addToCartButtons = document.querySelectorAll('.add-to-cart-btn');
    const cartItemsList = document.querySelector('.cart-items');
    let totalPrice = 0;

    addToCartButtons.forEach(function(button) {
        button.addEventListener('click', function() {
            const model = button.parentNode.querySelector('.name').textContent;
            const price = parseFloat(button.parentNode.querySelector('.price').textContent.replace('$', ''));
            const listItem = document.createElement('li');
            listItem.textContent = model + ' - $' + price.toFixed(2);
            cartItemsList.appendChild(listItem);
            totalPrice += price;
            updateTotal();
        });
    });

    function updateTotal() {
        const totalElement = document.querySelector('.total');
        totalElement.textContent = 'Total: $' + totalPrice.toFixed(2);
    }
});

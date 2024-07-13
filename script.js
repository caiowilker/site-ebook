// script.js

document.addEventListener("DOMContentLoaded", function() {
    // Script para funcionalidade adicional futura
});

function confirmPurchase(productName) {
    document.getElementById('product-name').innerText = productName;
    document.getElementById('confirmation-popup').classList.remove('hidden');
}

function closePopup() {
    document.getElementById('confirmation-popup').classList.add('hidden');
}

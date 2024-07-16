// script.js

document.addEventListener("DOMContentLoaded", function() {
    // Script para funcionalidade adicional futura
});

function confirmPurchase(productName, productLink) {
    document.getElementById('product-name').innerText = productName;
    document.getElementById('purchase-link').href = productLink;
    document.getElementById('confirmation-popup').classList.remove('hidden');
}

function closePopup() {
    document.getElementById('confirmation-popup').classList.add('hidden');
}

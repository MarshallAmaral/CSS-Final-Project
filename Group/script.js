document.addEventListener('DOMContentLoaded', function() {
    const productItems = document.querySelectorAll('.product-item');

    productItems.forEach(item => {
        const addToCartButton = item.querySelector('.add-to-cart');

        addToCartButton.addEventListener('click', function() {
            alert(`Added to cart: ${item.querySelector('h4').textContent}`);
            // Here you would typically add the item to your cart logic
        });
    });
});
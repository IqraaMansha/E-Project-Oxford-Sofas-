// checkout.js

// Load the cart from local storage
let cart = JSON.parse(localStorage.getItem('cart')) || [];

function displayOrderSummary() {
    const orderSummary = document.getElementById('orderSummary');
    orderSummary.innerHTML = '';  // Clear previous items
    
    let totalPrice = 0;
    
    cart.forEach(item => {
        const li = document.createElement('li');
        li.textContent = `${item.name} - $${item.price}`;
        orderSummary.appendChild(li);
        totalPrice += item.price;
    });
    
    document.getElementById('totalAmount').textContent = `$${totalPrice.toFixed(2)}`;
}

// Fill the order summary when the page loads
window.onload = displayOrderSummary;

// Handle the form submission
document.getElementById('checkoutForm').onsubmit = function(event) {
    event.preventDefault();
    
    // Get form data
    const shippingName = document.getElementById('shippingName').value;
    const shippingAddress = document.getElementById('shippingAddress').value;
    const paymentMethod = document.getElementById('paymentMethod').value;
    
    // Add any additional validations or checks here

    // Show confirmation message
    alert(`Thank you for your purchase, ${shippingName}! Your order has been confirmed.`);
    
    // Clear the cart after order confirmation
    localStorage.removeItem('cart');
    
    // Optionally, you can redirect to a thank-you page or homepage
    window.location.href = 'index.html';  // Redirect to homepage
};
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');
menuIcon.onclick = (e) => {
    e.preventDefault();
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}


let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');
window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');


        if (top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');

            })
        }
    })
}
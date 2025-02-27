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



let cart = [];
let itemPrices = {
    'living space with the Azzurro 1': 18.00,
    'living space with the Azzurro 2': 20.00,
    'living space with the Azzurro 3': 12.00,
    'living space with the Azzurro 4': 16.00,
    'living space with the Azzurro 5': 28.00,
    'living space with the Azzurro 6': 17.00,
    'living space with the Azzurro 7': 7.00
};


// Function to add an item to the cart
function addToCart(item) {
    cart.push(item);
    document.getElementById('cartPanel').classList.add('open');
    updateCart();
}

// Function to update the cart display
function updateCart() {
    const cartItems = document.getElementById('cartItems');
    cartItems.innerHTML = ''; // Clear current items in the cart

    let totalPrice = 0; // Initialize total price

    // Loop through the cart and display each item with a "Remove" button
    cart.forEach((item, index) => {
        const li = document.createElement('li');
        li.textContent = item;

        // Calculate price of the item and add it to total
        totalPrice += itemPrices[item];

        // Create the "Remove" button
        const removeBtn = document.createElement('button');
        removeBtn.textContent = 'Remove';
        removeBtn.classList.add('remove-btn'); // Add the 'remove-btn' class for styling
        removeBtn.onclick = () => removeItem(index); // Bind removeItem function to button
        li.appendChild(removeBtn); // Add the "Remove" button to the list item

        cartItems.appendChild(li); // Add the list item to the cart display
    });

    // Display the total price in the cart
    const totalPriceElement = document.createElement('li');
    totalPriceElement.textContent = `Total Price: $${totalPrice.toFixed(2)}`;
    cartItems.appendChild(totalPriceElement);
}

// Function to remove an item from the cart
function removeItem(index) {
    cart.splice(index, 1); // Remove item from cart array
    updateCart(); // Update the cart display
}

// Function to close the cart panel
function closeCart() {
    document.getElementById('cartPanel').classList.remove('open');
}

// Function to calculate the total price of the cart
function calculateTotalPrice() {
    let totalPrice = 0;
    cart.forEach(item => {
        totalPrice += itemPrices[item];
    });
    return totalPrice;
}

// Function for Buy Now (using SweetAlert)
function buyNow(item) {
    Swal.fire({
        title: 'Successfully!',
        text: `You have purchased "${item}".`,
        icon: 'success',
        confirmButtonText: 'Ok'
    });
}
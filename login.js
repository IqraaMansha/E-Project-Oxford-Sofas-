// Selecting elements
const form = document.querySelector("#login-form");
const emailInput = document.querySelector("#email");
const passInput = document.querySelector("#password");
const emailField = document.querySelector(".email-field");
const passField = document.querySelector(".create-password");
const emailError = document.querySelector(".email-error");
const passError = document.querySelector(".password-error");

// Email Validation
function checkEmail() {
    const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    if (!emailInput.value.match(emailPattern)) {
        emailField.classList.add("invalid");
        emailError.style.display = 'block';
    } else {
        emailField.classList.remove("invalid");
        emailError.style.display = 'none';
    }
}

// Password Validation
function createPass() {
    const passPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    if (!passInput.value.match(passPattern)) {
        passField.classList.add("invalid");
        passError.style.display = 'block';
    } else {
        passField.classList.remove("invalid");
        passError.style.display = 'none';
    }
}

// Password visibility toggle
const eyeIcon = document.querySelector(".show-hide");
eyeIcon.addEventListener("click", () => {
    if (passInput.type === "password") {
        eyeIcon.classList.replace("bx-hide", "bx-show");
        passInput.type = "text";
    } else {
        eyeIcon.classList.replace("bx-show", "bx-hide");
        passInput.type = "password";
    }
});

// Form submission event listener
form.addEventListener("submit", (e) => {
    e.preventDefault(); // Prevent form submission

    checkEmail(); // Validate email
    createPass(); // Validate password

    // Check if both email and password are valid
    if (
        !emailField.classList.contains("invalid") &&
        !passField.classList.contains("invalid")
    ) {
        alert("Login successful!");
        form.reset(); // Reset form fields after successful login
          // Redirect to index.html after signup success
          window.location.href = 'index.html';
    } else {
        alert("Please fill out the form correctly.");
    }
});

// Event listeners for real-time validation as the user types
emailInput.addEventListener("keyup", checkEmail);
passInput.addEventListener("keyup", createPass);

const form = document.querySelector("form"),
    nameField = form.querySelector(".name-field"),
    nameInput = nameField.querySelector(".name"),
    usernameField = form.querySelector(".username-field"),
    usernameInput = usernameField.querySelector(".username"),
    emailField = form.querySelector(".email-field"),
    emailInput = emailField.querySelector(".email"),
    passField = form.querySelector(".create-password"),
    passInput = passField.querySelector(".password"),
    cPassField = form.querySelector(".confirm-password"),
    cPassInput = cPassField.querySelector(".cPassword");
// Name Validation
function checkname() {
    const namePattern = /^(?=.*[a-z])/;
    if (!nameInput.value.match(namePattern)) {
        return nameField.classList.add("invalid");
    }
    nameField.classList.remove("invalid");
}
// Username Validation
function checkusername() {
    const usernamePattern = /^(?=.*[a-z]{2,3}$)/;
    if (!usernameInput.value.match(usernamePattern)) {
        return usernameField.classList.add("invalid");
    }
    usernameField.classList.remove("invalid");
}

// Email Validation
function checkEmail() {
    const emaiPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    if (!emailInput.value.match(emaiPattern)) {
        return emailField.classList.add("invalid");
    }
    emailField.classList.remove("invalid");
}

// Hide and Show Password
const eyeIcons = document.querySelectorAll(".show-hide");

eyeIcons.forEach((eyeIcon) => {
    eyeIcon.addEventListener("click", () => {
        const pInput = eyeIcon.parentElement.querySelector("input");
        if (pInput.type === "password") {
            eyeIcon.classList.replace("bx-hide", "bx-show");
            pInput.type = "text";
        } else {
            eyeIcon.classList.replace("bx-show", "bx-hide");
            pInput.type = "password";
        }
    });
});

// Password Validation
function createPass() {
    const passPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    if (!passInput.value.match(passPattern)) {
        return passField.classList.add("invalid");
    }
    passField.classList.remove("invalid");
}

// Confirm Password Validation
function confirmPass() {
    if (passInput.value !== cPassInput.value || cPassInput.value === "") {
        return cPassField.classList.add("invalid");
    }
    cPassField.classList.remove("invalid");
}

// Adding keyup event listeners for real-time validation
nameInput.addEventListener("keyup", checkname);
usernameInput.addEventListener("keyup", checkusername);
emailInput.addEventListener("keyup", checkEmail);
passInput.addEventListener("keyup", createPass);
cPassInput.addEventListener("keyup", confirmPass);

// Calling functions on form submit
form.addEventListener("submit", (e) => {
    e.preventDefault(); // Preventing form submission

    // Validate all fields on submit
    checkname();
    checkusername();
    checkEmail();
    createPass();
    confirmPass();

    // If no invalid fields, show success and reset form
    if (
        !usernameField.classList.contains("invalid") &&
        !nameField.classList.contains("invalid") &&
        !emailField.classList.contains("invalid") &&
        !passField.classList.contains("invalid") &&
        !cPassField.classList.contains("invalid")
    ) {
        alert('Signup successful!');
        form.reset();

        // Redirect to index.html after signup success
        window.location.href = 'index.html';
    }
});

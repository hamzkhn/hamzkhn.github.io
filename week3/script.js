const form = document.getElementById("registrationForm");

form.addEventListener("submit", function(event) {
    event.preventDefault();
    if (validateForm()) {
        alert("Form submitted successfully!");
    }
});

function validateForm() {
    let isValid = true;

    const username = document.getElementById("username");
    const email = document.getElementById("email");
    const password = document.getElementById("password");
    const confirmPassword = document.getElementById("confirmPassword");

    isValid = validateUsername(username) && isValid;
    isValid = validateEmail(email) && isValid;
    isValid = validatePassword(password) && isValid;
    isValid = validateConfirmPassword(confirmPassword) && isValid;

    return isValid;
}

function validateUsername(usernameInput) {
    const usernameError = document.getElementById("usernameError");
    if (usernameInput.value.trim() === "") {
        usernameError.textContent = "Username cannot be empty.";
        setValidationErrorStyle(usernameInput);
        return false;
    }
    clearErrorStyle(usernameInput);
    return true;
}

function validateEmail(emailInput) {
    const emailError = document.getElementById("emailError");
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (emailInput.value.trim() === "" || !emailRegex.test(emailInput.value)) {
        emailError.textContent = "Invalid email format.";
        setValidationErrorStyle(emailInput);
        return false;
    }
    clearErrorStyle(emailInput);
    return true;
}

function validatePassword(passwordInput) {
    const passwordError = document.getElementById("passwordError");
    if (passwordInput.value.trim() === "" || passwordInput.value.length < 8) {
        passwordError.textContent = "Password must be at least 8 characters long.";
        setValidationErrorStyle(passwordInput);
        return false;
    }
    clearErrorStyle(passwordInput);
    return true;
}

function validateConfirmPassword(confirmPasswordInput) {
    const confirmPasswordError = document.getElementById("confirmPasswordError");
    const password = document.getElementById("password").value;
    if (confirmPasswordInput.value.trim() === "" || confirmPasswordInput.value !== password) {
        confirmPasswordError.textContent = "Passwords do not match.";
        setValidationErrorStyle(confirmPasswordInput);
        return false;
    }
    clearErrorStyle(confirmPasswordInput);
    return true;
}

function setValidationErrorStyle(inputField) {
    inputField.classList.add("error-border");
}

function clearErrorStyle(inputField) {
    inputField.classList.remove("error-border");
    inputField.classList.add("input-control.success input");
}


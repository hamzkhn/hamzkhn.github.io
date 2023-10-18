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
        setUsernameErrorStyle(true);
        return false;
    }
    setUsernameErrorStyle(false);
    return true;
}

function validateEmail(emailInput) {
    const emailError = document.getElementById("emailError");
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (emailInput.value.trim() === "" || !emailRegex.test(emailInput.value)) {
        emailError.textContent = "Invalid email format.";
        setEmailErrorStyle(true);
        return false;
    }
    setEmailErrorStyle(false);
    return true;
}

function validatePassword(passwordInput) {
    const passwordError = document.getElementById("passwordError");
    if (passwordInput.value.trim() === "" || passwordInput.value.length < 8) {
        passwordError.textContent = "Password must be at least 8 characters long.";
        setPasswordErrorStyle(true);
        return false;
    }
    setPasswordErrorStyle(false);
    return true;
}

function validateConfirmPassword(confirmPasswordInput) {
    const confirmPasswordError = document.getElementById("confirmPasswordError");
    const password = document.getElementById("password").value;
    if (confirmPasswordInput.value.trim() === "" || confirmPasswordInput.value !== password) {
        confirmPasswordError.textContent = "Passwords do not match.";
        setConfirmPasswordErrorStyle(true);
        return false;
    }
    setConfirmPasswordErrorStyle(false);
    return true;
}

function setUsernameErrorStyle(hasError) {
    setErrorStyle(hasError, "username");
}

function setEmailErrorStyle(hasError) {
    setErrorStyle(hasError, "email");
}

function setPasswordErrorStyle(hasError) {
    setErrorStyle(hasError, "password");
}

function setConfirmPasswordErrorStyle(hasError) {
    setErrorStyle(hasError, "confirmPassword");
}

function setErrorStyle(hasError, fieldId) {
    const inputField = document.getElementById(fieldId);
    if (hasError) {
        inputField.classList.add("error-border");
    } else {
        inputField.classList.remove("error-border");
    }
}

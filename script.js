function validateLogin() {
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    const errorMessage = document.getElementById("error-message");

    if (username === "Test" && password === "cool") {
        alert("Login Successful!");
        errorMessage.textContent = "";  // Clear any previous error messages
        return true;  // Proceed with form submission
    } else {
        errorMessage.textContent = "Invalid Username or Password!";
        return false;  // Prevent form submission
    }
}

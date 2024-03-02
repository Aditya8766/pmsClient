

// Sample user credentials for demonstration purposes
const sampleUser = {
    email: "kunal@123",
    password: "kunal123"
};


const loginForm = document.getElementById("loginForm");
const loginResult = document.getElementById("loginResult");


loginForm.addEventListener("submit", function(event) {
    event.preventDefault();


   const emailInput = document.getElementById("email");
    const passwordInput = document.getElementById("password");


   const email = emailInput.value;
    const password = passwordInput.value;


   if (email === sampleUser.email && password === sampleUser.password) {
        loginResult.innerHTML = "Login successful. Redirecting...";
        // Redirect the user to a new page (change the URL accordingly).
        window.location.href = "studentafterlogin.html";
    } else {
        loginResult.innerHTML = "Login failed. Please check your email and password.";
    }
});


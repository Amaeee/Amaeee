        window.location.href = "dashboard.html";
    } else {
        document.getElementById('error-message').textContent = "Invalid username or password!";
    }
});
window.onload = function() {
    // Retrieve the stored user data from localStorage
    const user = JSON.parse(localStorage.getItem("user"));

    if (user) {
        // Populate the account dashboard with user data
        document.getElementById("account-username").textContent = user.username;
        document.getElementById("account-fullname").textContent = user.fullname;
        document.getElementById("account-email").textContent = user.email;
    } else {
        // Redirect to login page if no user data is found
        window.location.href = "index.html";
    }
}

// Log out function
function logout() {
    // Clear the user data from localStorage
    localStorage.removeItem("user");

    // Redirect back to the login page
    window.location.href = "index.html";
}

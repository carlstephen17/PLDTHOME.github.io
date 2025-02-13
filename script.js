document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent actual form submission

    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;

    // Simulated phishing alert
    alert("⚠️ Warning: This was a phishing attempt!\n\nUsername: " + username + "\nPassword: " + password + "\n\nAlways check the website URL before logging in!");

    // Redirect to a safe explanation page (optional)
    window.location.href = "safe_explanation.html";
});

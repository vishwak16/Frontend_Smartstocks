document.addEventListener("DOMContentLoaded", function() {
    const forgotPasswordForm = document.getElementById("forgotPasswordForm");

    forgotPasswordForm.addEventListener("submit", function(e) {
        e.preventDefault();

        const emailInput = forgotPasswordForm.querySelector("input[name='email']");
        const email = emailInput.value.trim();

        if (validateEmail(email)) {
            // Simulate sending a password reset email
            alert("A password reset link has been sent to your email address.");
            // Optionally, redirect to a confirmation page or back to login
            window.location.href = "login.html";
        } else {
            alert("Please enter a valid email address.");
        }
    });

    function validateEmail(email) {
        const re = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
        return re.test(email);
    }
});

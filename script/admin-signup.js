document.getElementById("adminSignupForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const fullName = document.getElementById("fullName").value;
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  const admin = { fullName, email, password };
  localStorage.setItem("admin", JSON.stringify(admin));

  // Show the success message
  const successMessage = document.getElementById("successMessage");
  successMessage.style.display = "block";

  document.getElementById("adminSignupForm").reset();

  // Redirect after a short delay
  setTimeout(() => {
    window.location.href = "AdminLogin.html";
  }, 2000); // 2 seconds delay
});

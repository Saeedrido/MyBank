document.getElementById("adminLoginForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const email = document.getElementById("loginEmail").value.trim().toLowerCase();
  const password = document.getElementById("loginPassword").value.trim();

  const admin = JSON.parse(localStorage.getItem("admin"));
  console.log("Saved Admin:", admin); 

  if (admin && admin.email === email && admin.password === password) {
    sessionStorage.setItem("isAdminLoggedIn", "true");

    const successMessage = document.getElementById("successMessage");
    successMessage.style.display = "block";
    successMessage.textContent = `✅ Welcome, ${admin.fullName}`;

    // Redirect after 2 seconds
    setTimeout(() => {
      window.location.href = "RegisterCustomer.html";
    }, 2000);
  } else {
    alert("Invalid email or password.");
  }
});

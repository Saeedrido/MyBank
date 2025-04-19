document.getElementById("loginForm").addEventListener("submit", function (e) {
    e.preventDefault();
  
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
  
    const customers = JSON.parse(localStorage.getItem("customers")) || [];
    const customer = customers.find(c => c.email === email && c.password === password);
  
    if (customer) {
      document.getElementById("message").innerText = `Welcome, ${customer.fullName}`;
      // Redirect to customer dashboard if needed
      // window.location.href = "CustomerDashboard.html";
    } else {
      document.getElementById("message").innerText = "Invalid login credentials.";
    }
  });
  
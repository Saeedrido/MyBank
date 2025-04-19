document.getElementById("registerForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const fullName = document.getElementById("fullName").value;
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  let customers = JSON.parse(localStorage.getItem("customers")) || [];

  // Check if email already exists
  const exists = customers.some(cust => cust.email === email);
  if (exists) {
    alert("A customer with this email already exists.");
    return;
  }

  customers.push({ fullName, email, password });
  localStorage.setItem("customers", JSON.stringify(customers));

  alert("Customer registered successfully!");
  document.getElementById("registerForm").reset();
});

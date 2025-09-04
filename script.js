// Handle form submission
document.getElementById("contactForm").addEventListener("submit", function(e) {
  e.preventDefault();

  let name = document.getElementById("name").value;
  let email = document.getElementById("email").value;
  let message = document.getElementById("message").value;

  if (name && email && message) {
    document.getElementById("responseMsg").innerText =
      "✅ Thank you " + name + "! Your message has been sent.";
  } else {
    document.getElementById("responseMsg").innerText =
      "⚠ Please fill in all fields.";
    document.getElementById("responseMsg").style.color = "red";
  }

  this.reset();
});

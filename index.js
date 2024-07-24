document
  .getElementById("contact-form")
  .addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent the default form submission

    // Capture form data
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var message = document.getElementById("text-message").value;

    // Create the data object to send
    var data = {
      name: name,
      email: email,
      message: message,
    };

    // Send the data using fetch
    fetch("https://your-server-endpoint.com/send-email", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Success:", data);
        alert("Email sent successfully!");
      })
      .catch((error) => {
        console.error("Error:", error);
        alert("Error sending email.");
      });
  });

const validateEmail = (email) => {
  return String(email)
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
};

const contactBtn = document.getElementById("contact-btn");

contactBtn.addEventListener("click", (event) => {
  event.preventDefault(); // Prevent default form submission behavior

  const emailInput = document.getElementById("email");
  const email = emailInput.value;


  if (!validateEmail(email)) {
    alert("Please enter a valid email address.");
    return; // Stop execution if email invalid
  }

  // If email is valid proceed  form submission
  alert(
    "Thank you for contacting us! Your message has been sent. We will get back to you as soon as possible."
  );

});



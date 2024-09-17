document.addEventListener("DOMContentLoaded", function () {
  const email = document.getElementById("email");
  const signupBtn = document.querySelector("button[type='submit']"); // Changed id to tag selector
  const emailError = document.getElementById("email-error");
  const pwd = document.getElementById("pwd");
  const pwdConfirm = document.getElementById("pwd-confirm");
  const message = document.getElementById("message");
  const letter = document.getElementById("letter");
  const capital = document.getElementById("capital");
  const number = document.getElementById("number");
  const length = document.getElementById("length");
  const registrationForm = document.getElementById("registration-form");
  const successPopup = document.getElementById("success-popup");
  const submittedData = document.getElementById("submitted-data"); // Added

  // Validate email on input
  email.addEventListener("input", function () {
      if (!email.validity.valid) {
          emailError.textContent = "Please enter a valid email address.";
      } else {
          emailError.textContent = "";
      }
  });

  // Check if passwords match on submit
  registrationForm.addEventListener("submit", function (event) { // Changed from signupBtn to registrationForm
      if (pwd.value !== pwdConfirm.value) {
          alert("Passwords do not match.");
          event.preventDefault();
      } else {
          event.preventDefault();
          showSubmittedData(); // Call function to display submitted data
      }
  });

  // Show password message on focus
  pwd.onfocus = function () {
      message.style.display = "block";
  };

  // Hide password message on blur
  pwd.onblur = function () {
      message.style.display = "none";
  };

  // Validate password strength on keyup
  pwd.onkeyup = function () {
      const lowerCaseLetters = /[a-z]/g;
      if (pwd.value.match(lowerCaseLetters)) {
          letter.classList.remove("invalid");
          letter.classList.add("valid");
      } else {
          letter.classList.remove("valid");
          letter.classList.add("invalid");
      }

      const upperCaseLetters = /[A-Z]/g;
      if (pwd.value.match(upperCaseLetters)) {
          capital.classList.remove("invalid");
          capital.classList.add("valid");
      } else {
          capital.classList.remove("valid");
          capital.classList.add("invalid");
      }

      const numbers = /[0-9]/g;
      if (pwd.value.match(numbers)) {
          number.classList.remove("invalid");
          number.classList.add("valid");
      } else {
          number.classList.remove("valid");
          number.classList.add("invalid");
      }

      if (pwd.value.length >= 8) {
          length.classList.remove("invalid");
          length.classList.add("valid");
      } else {
          length.classList.remove("valid");
          length.classList.add("invalid");
      }
  };

  // Function to show submitted data
  function showSubmittedData() {
      submittedData.innerHTML = `
          <p><strong>Name:</strong> ${registrationForm.name.value}</p>
          <p><strong>Institution:</strong> ${registrationForm.poly.value}</p>
          <p><strong>Category:</strong> ${registrationForm.employee.value}</p>
          <p><strong>Team Leader Name:</strong> ${registrationForm.teamleadername.value}</p>
          <p><strong>IC Number:</strong> ${registrationForm.icnumber.value}</p>
          <p><strong>Gender:</strong> ${registrationForm.gender.value}</p>
          <p><strong>Race:</strong> ${registrationForm.race.value}</p>
          <p><strong>Phone Number:</strong> ${registrationForm.phone.value}</p>
          <p><strong>Coach's Name:</strong> ${registrationForm.coachname.value}</p>
          <p><strong>Email Address:</strong> ${registrationForm.email.value}</p>
          <p><strong>Innovation Summary:</strong> ${registrationForm.summary.value}</p>
      `;
      successPopup.style.display = "block";
      setTimeout(function () {
          window.location.href = "login.html";
      }, 5000);
  }
});

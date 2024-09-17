document.addEventListener("DOMContentLoaded", function () {
  const signupBtn = document.getElementById("signup-btn");

  // Array to store user registration data
  let users = [];

  signupBtn.addEventListener("click", (e) => {
    e.preventDefault(); // Prevent form submission

    const username = document.getElementById("uname").value;
    const email = document.getElementById("email").value;
    const birthday = document.getElementById("birthday").value;
    const password = document.getElementById("pwd").value;
    const confirmPassword = document.getElementById("pwd-confirm").value;

    // Check if passwords match
    if (password !== confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    // Create a user object
    const newUser = {
      username: username,
      email: email,
      birthday: birthday,
      password: password
    };

    // Push the new user object to the users array
    users.push(newUser);

    // Clear form fields
    document.getElementById("uname").value = "";
    document.getElementById("email").value = "";
    document.getElementById("birthday").value = "";
    document.getElementById("pwd").value = "";
    document.getElementById("pwd-confirm").value = "";

    alert("Successful Register Account, Please Login");
    window.location.href = "login.html";
  });

  //declare variables
  let myInput = document.getElementById("pwd");
  let letter = document.getElementById("letter");
  let capital = document.getElementById("capital");
  let number = document.getElementById("number");
  let length = document.getElementById("length");

  //when the user clicks on the password field, show the message box
  myInput.onfocus = function () {
    document.getElementById("message").style.display = "block";
  };

  //when the user clicks outside the password field, hide the message box
  myInput.onblur = function () {
    document.getElementById("message").style.display = "none";
  };

  //when the user starts to type something inside the password field
  myInput.onkeyup = function () {
    //validate lowercase letters
    var lowerCaseLetters = /[a-z]/g;
    if (!myInput.value.match(lowerCaseLetters)) {
      letter.classList.remove("valid");
      letter.classList.add("invalid");
    } else {
      letter.classList.remove("invalid");
      letter.classList.add("valid");
    }

    //validate capital letters
    var upperCaseLetters = /[A-Z]/g;
    if (!myInput.value.match(upperCaseLetters)) {
      capital.classList.remove("valid");
      capital.classList.add("invalid");
    } else {
      capital.classList.remove("invalid");
      capital.classList.add("valid");
    }

    //validate numbers
    var numbers = /[0-9]/g;
    if (!myInput.value.match(numbers)) {
      number.classList.remove("valid");
      number.classList.add("invalid");
    } else {
      number.classList.remove("invalid");
      number.classList.add("valid");
    }

    //validate length
    if (myInput.value.length >= 8) {
      length.classList.remove("invalid");
      length.classList.add("valid");
    } else {
      length.classList.remove("valid");
      length.classList.add("invalid");
    }
  };
});

document.addEventListener('DOMContentLoaded', function () {
  const emailInput = document.getElementById('email');
  const emailError = document.getElementById('email-error');

  emailInput.addEventListener('input', function () {
    if (!validateEmail(emailInput.value)) {
      emailError.textContent = 'please enter a valid email address';
    } else {
      emailError.textContent = '';
    }
  });
});

function validateEmail(email) {
  // regular expression for validating an email address
  const re = /\S+@\S+\.\S+/;
  return re.test(email);
}

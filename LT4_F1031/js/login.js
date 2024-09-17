function showPassword() {
    var x = document.getElementById("password");
    if (x.type === "password") {
        x.type = "text";
    } else {
        x.type = "password";
    }

}
//popup message
const loginBtn = document.getElementById('login-btn');

loginBtn.addEventListener('click', () => {
    alert('Successful login');
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

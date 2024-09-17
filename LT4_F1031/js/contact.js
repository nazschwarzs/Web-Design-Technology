const contactBtn = document.getElementById('contact-btn');

contactBtn.addEventListener('click', () => {
    alert('Thank you for contacting us! Your message has been sent.We will get back to you as soon as possible.');
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

//Function to check user age
function checkAge(){
    // prompt the user to enter their age
    let age = prompt("Please enter your age: ");
    
    // Convert age to number
    age = parseInt(age);
    let display1= document.getElementById("demo");
    
    //Check if the user is over 18
    if (age >= 18){
        // If the user is over, remove the overlay
        document.getElementById("overlay").style.display = "none";
        display1.innerHTML = "Welcome to Homepage.";
    } else {
        // if the user is under 18, display a message
        alert("Sorry, you must be 18 years old to enter this website");
    }
}

/*Simple quiz*/
/*function to check user answer*/
function checkAnswers() {
    let answer = document.querySelector('input[name="question1"]:checked').value;

    if (answer === "b") {
        alert("Correct! the answer is b = 16");
    } else {
        alert("Incorrect. The correct answer is b = 16");
    }
}


//Function to check password strength
function checkStrength(){
    let password = document.getElementById("password").value;
    let strengthText = document.getElementById("strength");

    if (password.length < 6 ){
        strengthText.textContent = 'Weak : Password must be at least 6 characters long.';
    } else if(password.length < 10){
        strengthText.textContent = 'Medium : Password is medium strength.';
    } else {
        strengthText.textContent = 'Strong : Password is strong.';
    }
}

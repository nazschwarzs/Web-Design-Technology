function checkAnswers() {
    let answer = document.querySelector('input[name="question1"]:checked');
    let answer2 = document.querySelector('input[name="question2"]:checked');
    let answer3 = document.querySelector('input[name="question3"]:checked');
    let answer4 = document.querySelector('input[name="question4"]:checked');
    let answer5 = document.querySelector('input[name="question5"]:checked');

    if (!answer || !answer2 || !answer3 || !answer4 || !answer5) {
        alert("Please answer all questions");
        return;
    }

    answer = answer.value;
    answer2 = answer2.value;
    answer3 = answer3.value;
    answer4 = answer4.value;
    answer5 = answer5.value;

    let score = 0;

    if (answer === "b") {
        score++;
        alert("Correct! The answer to question 1 is b = 4");
    } else {
        alert("Incorrect answer for question 1. Try again");
    }

    if (answer2 === "c") {
        score++;
        alert("Correct! The answer to question 2 is c = 6");
    } else {
        alert("Incorrect answer for question 2. Try again");
    }

    if (answer3 === "a") {
        score++;
        alert("Correct! The answer to question 3 is a = 12");
    } else {
        alert("Incorrect answer for question 3. Try again");
    }
    if (answer4 === "a") {
        score++;
        alert("Correct! The answer to question 4 is a = 22");
    } else {
        alert("Incorrect answer for question 4. Try again");
    }
    if (answer5 === "c") {
        score++;
        alert("Correct! The answer to question 5 is c = 110");
    } else {
        alert("Incorrect answer for question 5. Try again");
    }

    //alert("Your score is: " + score + "/5");

    document.getElementById('userAnswers').innerHTML = `
            <h2>Your Answers</h2>
            <ul>
                <li>Question 1: ${answer}</li>
                <li>Question 2: ${answer2}</li>
                <li>Question 3: ${answer3}</li>
                <li>Question 4: ${answer4}</li>
                <li>Question 5: ${answer5}</li>
            </ul>
            <h2>Your Score</h2>
            <p>${score}/5</p>`;
}
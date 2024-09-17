/*Answer
1. c.mass
2. d. Newton (N)
3. a. 9.8 m/s^2
4. d. Magnetic force
5. b. Gravitational force
*/

    function checkAnswers2() {
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

        if (answer === "c") {
            score++;
            alert("Correct! The answer to question 1 is c. Mass");
        } else {
            alert("Incorrect answer for question 1. Try again");
        }

        if (answer2 === "d") {
            score++;
            alert("Correct! The answer to question 2 is d. Newton (N)");
        } else {
            alert("Incorrect answer for question 2. Try again");
        }

        if (answer3 === "a") {
            score++;
            alert("Correct! The answer to question 3 is a. 9.8 m/s^2");
        } else {
            alert("Incorrect answer for question 3. Try again");
        }
        if (answer4 === "d") {
            score++;
            alert("Correct! The answer to question 4 is d. Magnetic force");
        } else {
            alert("Incorrect answer for question 4. Try again");
        }
        if (answer5 === "b") {
            score++;
            alert("Correct! The answer to question 5 is b. Gravitational force");
        } else {
            alert("Incorrect answer for question 5. Try again");
        }

        alert("Your score is: " + score + "/5");
    }

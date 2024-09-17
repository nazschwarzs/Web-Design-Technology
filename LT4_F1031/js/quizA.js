// quiz.js
let questions = [
    {
        question: "1. What is 2+2?",
        options: ["2", "4", "1", "4.2"],
        correctAnswer: "4"
    },
    {
        question: "2. What is 2+3?",
        options: ["5", "9", "10", "3"],
        correctAnswer: "5"
    }
];

let currentQuestion = 0;
let score = 0;

document.getElementById("submit-btn").addEventListener("click", submitQuiz);

function submitQuiz() {
    let userAnswer = getSelectedOption();
    let correctAnswer = questions[currentQuestion].correctAnswer;
    let resultContainer = document.getElementById("result-container");

    if (userAnswer === correctAnswer) {
        score++;
        resultContainer.innerHTML = `Correct! The answer is ${correctAnswer}.`;
    } else {
        resultContainer.innerHTML = `Wrong! The correct answer is ${correctAnswer}.`;
    }
}
// use strict

const quizContainer = document.getElementById('quiz');
const resultContainer = document.getElementById('results');
const submitButton = document.getElementById('submit');

const myQuestions = [
    {
        question: "What year did World War 2 begin?",
        answers: {
            a: "1939",
            b: "1914",
            c: "1972"
        },
        correctAnswer: "a"
    },
    {
        question: "Who wrote the famous play Romeo & Juliet?",
        answers: {
            a: "Donald Trump",
            b: "William Shakespeare",
            c: "J.K.Rowling"
        },
        correctAnswer: "b"
    },
    {
        question: "What is the human body mostly made up of?",
        answers: {
            a: "Syrup",
            b: "Milk",
            c: "Water"
        },
        correctAnswer: "c"
    },
];

function buildQuiz(){}

function showResults(){}

//display quiz right away
buildQuiz();

// on submit show results
submitButton.addEventListener('click', showResults);
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

function buildQuiz(){
    // variable to store the HTML output
    const output = [];

    // for each question
    myQuestions.forEach(
        (currentQuestion, questionNumber) => {
            // variable to store the list of possible answers
            const answers = [];

            // and for each available answer
            for(letter in currentQuestion.answers){

                // HTML radio buttons
                answers.push(
                    `<label>
                    <input type="radio" name="question${questionNumber}" value="${letter}">
                    ${letter}:
                    ${currentQuestion.answers[letter]}
                    </label>`
                );
            }

            // add this question and its answers to the output
            output.push(
                `<div class="question"> ${currentQuestion.question}</div>
                `
            )
        }
    )
}

function showResults(){}

//display quiz right away
buildQuiz();

// on submit show results
submitButton.addEventListener('click', showResults);
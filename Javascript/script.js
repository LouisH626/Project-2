// use strict
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
                <div class="answers"> ${answers.join('')}</div>`
            );
        }
    );

    // finally combine our output list into one string of HTML and put it on the page
    quizContainer.innerHTML = output.join('');

    // slide container
    output.push(
        `<div class="slide">
        <div class="question"> ${currentQuestion.question} </div>
        <div class="answers"> ${answers.join('')} </div>
        </div>`
    )
}

function showResults(){

    // gather answer containers from our quiz
    const answerContainers = quizContainer.querySelectorAll('.answers');

    // keep track of users answers
    let numCorrect = 0;

    // for each question
    myQuestions.forEach( (currentQuestion, questionNumber) => {
        
        // find selected answer
        const answerContainer = answerContainers[questionNumber];
        const selector = `input[name=question${questionNumber}]:checked`;
        const userAnswer = (answerContainer.querySelectorAll(selector) || {}).value;

        // if answer is correct
        if(userAnswer === currentQuestion.correctAnswer){
            // add to the number of correct answers
            numCorrect++;

            //colour the answers green 
            answerContainers[questionNumber].style.color = 'lightgreen';
        }
        // if answer is wrong or blank 
        else{
            // colour the answers red
            answerContainers[questionNumber].style.color = 'red';
        }
    });

    // show number of correct answers out of total 
    resultsContainer.innerHTML = `${numCorrect} out of ${myQuestions.length}`;
}

// function to show a slide
function showSlide(n) {
    slides[currentSlide].classList.remove('active-slide');
    slides[n].classList.add('active-slide');
    currentSlide = n;
}

const quizContainer = document.getElementById('quiz');
const resultsContainer = document.getElementById('results');
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

//display quiz right away
buildQuiz();

// pagination
const previousButton = document.getElementById("previous");
const nextButton = document.getElementById("next");
const slides = document.querySelectorAll(".slide");
let currentSlide = 0;

// show first slide

// on submit show results
submitButton.addEventListener('click', showResults);

// new event listener
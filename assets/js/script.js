let submit = document.getElementById('submit-button');
let question = document.getElementById("question");
let options1 = document.getElementById("options1");
let options2 = document.getElementById("options2");
let options3 = document.getElementById("options3");
let options4 = document.getElementById("options4");
let time_element = document.getElementById("timer");
let buttons = document.getElementsByClassName("options");
let current_question = 0;
let correctAnswer = '';
let score = 0;
let time;
const total_time = 30;
let sec = total_time;
let quizQuestions = [];


document.addEventListener("DOMContentLoaded", async function () {

    // First load question from remote API
    await getData();

    // load the main game
    loadGame();

})

function loadGame() {
    // EventListeners for question buttons
    handleOptionsClick();

    // Handling Event listner on button click
    handleSubmit();

    if (current_question <= 9) {
        current_question++;
        showQuestion(current_question);
    } else {
        showResult()
    }
}

function handleOptionsClick() {
    let buttons = document.getElementsByClassName("options");
    for (let button of buttons) {
        button.addEventListener("click", function () {
            let questions = this.getAttribute("data-type");
            checkIfScore(questions);
        });
    }
}

async function getData() {
    const URL = 'https://the-trivia-api.com/api/questions?categories=general_knowledge&limit=10'
    const response = await fetch(URL);
    const data = await response.json();
    quizQuestions = data;
    console.log(quizQuestions);
}


/**timer*/
function timer() {
    time_element.innerHTML = sec;
    sec--;
    if (sec == 0) {
        sec = total_time;
        clearInterval(time);
        checkIfScore();
        current_question++;
        showQuestion();
    }
}

function checkIfScore() {
    let optionIdSelected = document.querySelector('button[type="submit"], button:not([type])');


    let option_correct = quizQuestions[current_question].correctAnswer;
    if (optionIdSelected != null) {
        if (optionIdSelected.id == option_correct) {
            score++;
        }
    }
}

/**
 * The function to show question and options on html page.
 */

function showQuestion() {
    sec = total_time;
    clearInterval(time);
    timer();
    time = setInterval(timer, 1000);
    document.getElementById("question-number").innerText = current_question;

    document.querySelectorAll('button[type="submit"], button:not([type])').forEach(option => option.checked = false)

    if (current_question >= quizQuestions.length) {
        showResult();
    }

    //set questions and options from array

    question.innerHTML = quizQuestions[current_question].question;
    document.getElementById("options1").innerHTML =
        quizQuestions[current_question].correctAnswer;
    document.getElementById("options2").innerHTML =
        quizQuestions[current_question].incorrectAnswers[0];
    document.getElementById("options3").innerHTML =
        quizQuestions[current_question].incorrectAnswers[1];
    document.getElementById("options4").innerHTML =
        quizQuestions[current_question].incorrectAnswers[2];

    if (current_question === 9) {
        document.getElementById("submit-button").innerHTML = "Get Result";
    }

    function shuffled(showQuestion) {
        showQuestion = showQuestion.slice(); // shallow copy
        for (var i = 0; i < showQuestion.length; i++) {
            var j = Math.floor(Math.random() * (showQuestion.length - i)) + i;
            [showQuestion[i], showQuestion[j]] = [showQuestion[j], showQuestion[i]]; // swap
        }
        return shuffled;
    }
}

/**
 * Handling Event listner on button click
 */
function handleSubmit() {
    submit.addEventListener("click", (e) => {
        e.preventDefault()
        checkIfScore();
        current_question++;
        if (current_question >= quizQuestions.length) {

            showResult();
        } else {
            showQuestion();
        }
    });
}

function showResult() {
    clearInterval(time);
    current_question = 0;
    checkIfScore();
    document.getElementById("score", score);
}
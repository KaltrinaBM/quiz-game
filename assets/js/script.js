let submit = document.getElementById('submit-button');
let question = document.getElementById("question");
let options1 = document.getElementById("options1");
let options2 = document.getElementById("options2");
let options3 = document.getElementById("options3");
let options4 = document.getElementById("options4");
let current_question = -1;
let time;
const total_time = 30;
let quizQuestions = [];
let shuffledQuestions;


// Default inital value of timer
const defaultValue = 30 * 60;

// variable to the time
var countDownTime = defaultValue;

// variable to store time interval
var timerID;

// Variable to track whether timer is running or not
var isStopped = true;


document.addEventListener("DOMContentLoaded", async function () {

  // First load question from remote API
  await getData();

  // load the main game
  loadGame();
  console.log("DomLoaded");
});

function loadGame() {

  startTimer();
  handleOptionsClick();
  console.log("loadGame");
 

  if (current_question < quizQuestions.length) {
    current_question++;
    showQuestion(quizQuestions[current_question]);
  } else {
    showResult();
  }
}

function handleOptionsClick() {
  let buttons = document.getElementsByClassName("options");
  for (let button of buttons) {
    button.addEventListener("click", function () {
      /*let optionWasClicked = this.getAttribute("data-type");*/
      checkIfScore(this.name);

    });
  }

  let reset = document.getElementById("reset");
  reset.addEventListener("click", function () {
    window.location.reload();

  });
}

async function getData() {
  const URL = 'https://the-trivia-api.com/api/questions?categories=general_knowledge&limit=20';
  const response = await fetch(URL);
  const data = await response.json();
  quizQuestions = data;
  console.log(quizQuestions);

}

// variable to the time
var countDownTime = defaultValue;

// Function calculate time string
const findTimeString = () => {
  var minutes = String(Math.trunc(countDownTime / 60));
  var seconds = String(countDownTime % 60);
  if (minutes.length === 1) {
    minutes = "0" + minutes;
  }
  if (seconds.length === 1) {
    seconds = "0" + seconds;
  }
  return minutes + seconds;
};

// Select Every Count Container
const countContainer = document.querySelectorAll(".count-digit");

// Function to display coundown on screen
const renderTime = () => {
  const time = findTimeString();
  countContainer.forEach((count, index) => {
    count.innerHTML = time.charAt(index);
  });
};

// Function to start Countdown
const startTimer = () => {
  if (isStopped) {
    isStopped = false;
    timerID = setInterval(runCountDown, 1000);
  }
};


// function to execute timer
const runCountDown = () => {
  // decrement time
  countDownTime -= 1;
  //Display updated time
  renderTime();

  // timeout on zero
  if (countDownTime === 0) {
    stopTimer();
    countDownTime = defaultValue;
  }
}

// Function to stop Countdown
const stopTimer = () => {
  isStopped = true;
  if (timerID) {
    clearInterval(timerID);
  }
};

function checkIfScore(optionIdSelected) {
  console.log(optionIdSelected);
  console.log("check if score");


  let correctAnswers = quizQuestions[current_question].correctAnswer;
  let incorrectAnswers = [quizQuestions[current_question].incorrectAnswers[0], quizQuestions[current_question].incorrectAnswers[1], quizQuestions[current_question].incorrectAnswers[2]]
  incorrectAnswers.push(correctAnswers);
  shuffledQuestions = incorrectAnswers.sort(() => Math.random() - .5)
  console.log(incorrectAnswers);
  


  if (correctAnswers === optionIdSelected) {
    alert("Hey! You got it right! :D");
    incrementScore();
    current_question++;
    showQuestion();

  } else {
    alert(`Awwww.... you answered incorrect answer. The correct answer was ${correctAnswers}!`);
    current_question++;
    showQuestion();
  }
}


function incrementScore() {

  let oldScores = parseInt(document.getElementById("score").innerText);
  document.getElementById("score").innerText = ++oldScores;
}

/**
 * The function to show question and options on html page.
 */

function showQuestion() {

  console.log("showQuestion");

  document.querySelectorAll('button[type="submit"], button:not([type])').forEach(option => option.checked = false)



  //set questions and options from array

  document.getElementById("question-number").innerText = current_question + 1;

  question.innerHTML = quizQuestions[current_question].question;

  document.getElementById("options1").innerHTML = quizQuestions[current_question].incorrectAnswers[0];
  document.getElementById("options1").name = quizQuestions[current_question].incorrectAnswers[0];

  document.getElementById("options2").innerHTML = quizQuestions[current_question].incorrectAnswers[1];
  document.getElementById("options2").name = quizQuestions[current_question].incorrectAnswers[1];

  document.getElementById("options3").innerHTML = quizQuestions[current_question].incorrectAnswers[2];
  document.getElementById("options3").name = quizQuestions[current_question].incorrectAnswers[2];

  document.getElementById("options4").innerHTML = quizQuestions[current_question].correctAnswer;
  document.getElementById("options4").name = quizQuestions[current_question].correctAnswer;
}


function showResult() {
  console.log("showResults");
  clearInterval(time);
  checkIfScore();
}
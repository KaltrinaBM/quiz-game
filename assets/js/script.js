let submit = document.getElementById('submit-button');
let question1 = document.getElementById("question");
let options1 = document.getElementById("options1");
let options2 = document.getElementById("options2");
let options3 = document.getElementById("options3");
let options4 = document.getElementById("options4");
let current_question_index = 0;
let time;
const total_time = 20;
let quizQuestions = [];
let shuffledQuestions;
let total_question = 20;

//Default inital for timer
const defaultValue = 20 * 60;
var countDownTime = defaultValue;

//variable to store time interval
var timerID;
var isStopped = true;

// Wait for the DOM to finish loading before running the game
document.addEventListener("DOMContentLoaded", async function () {

  // First load question from remote API
  await getData();

  // load the main game
  loadGame();
  console.log("DomLoaded");
});

function loadGame() {
  showQuestion();
  startTimer();
  handleOptionsClick();
  console.log("loadGame");
}

// Get the button elements and add event listeners to them
function handleOptionsClick() {
  let buttons = document.getElementsByClassName("options");
  for (let button of buttons) {
    button.addEventListener("click", function () {

      checkIfScore(this.name);
    });
  }
  // Add the reset option to reset the game to default
  let reset = document.getElementById("reset");
  reset.addEventListener("click", function () {
    window.location.reload();
  });
}

//Function to disable click for the options
function disableClick() {
  document.getElementById('first-options').style.visibility = 'hidden';
  document.getElementById('second-options').style.visibility = 'hidden';
  document.getElementById('question').style.visibility = 'hidden';
  document.getElementById('question-header').style.visibility = 'hidden';
  document.getElementById('time-out').style.visibility = 'visible';
}
//Function to get data from Trivia Api
async function getData() {
  const URL = `https://the-trivia-api.com/api/questions?categories=general_knowledge&limit=${total_question}`;
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

// Function to execute timer
const runCountDown = () => {
  // Decrement time
  countDownTime -= 1;
  //Display updated time
  renderTime();

  // timeout on zero
  if (countDownTime === 0) {
    stopTimer();
    disableClick();
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
//Function to check if the answer clicked was correct or not
function checkIfScore(optionIdSelected) {
  console.log(optionIdSelected);
  console.log("check if score");


  let correctAns = question.correctAnswer;

  if (correctAns === optionIdSelected) {
    alert("Well done!");
    incrementScore();
  } else {
    alert(`Incorrect. The correct answer was ${correctAns}!`);
  }

  if (current_question_index < total_question) {
    showQuestion();
  } else {
    disableClick();
  }
}
//Function to randomize options
function getRandomIndex(curIndex) {
  let randomIndex = Math.floor(Math.random() * curIndex);
  if (randomIndex !== curIndex) {
    return randomIndex;
  }
  return getRandomIndex(curIndex);
}

function swapElements(answerChoices, curIndex, randId) {
  // Swap it with the current element.
  let tmp = answerChoices[curIndex];
  answerChoices[curIndex] = answerChoices[randId];
  answerChoices[randId] = tmp;
  return answerChoices;
}

function shuffleArray(answerChoices) {
  let curIndex = answerChoices.length - 1;

  // There remain elements to shuffle
  while (curIndex) {
    // Pick a random index
    let randId = getRandomIndex(curIndex);

    // Swap it with the current element.
    answerChoices = swapElements(answerChoices, curIndex, randId)

    // Decrease curIndex
    curIndex -= 1;
  }
  return answerChoices;
}

//Increase score for correct answer
function incrementScore() {

  let oldScores = parseInt(document.getElementById("score").innerText);
  document.getElementById("score").innerText = ++oldScores;
}

/**
 * The function to show question and options on html page.
 */

function showQuestion() {

  document.getElementById('time-out').style.visibility = 'hidden';

  question = quizQuestions[current_question_index]

  // Usage of shuffle
  let answerChoices = [...question.incorrectAnswers, question.correctAnswer]
  shuffledchoices = shuffleArray(answerChoices);
  console.log(shuffledchoices);

  document.querySelectorAll('button[type="submit"], button:not([type])').forEach(option => option.checked = false)

  //set questions and options from array

  document.getElementById("question-number").innerText = current_question_index + 1;

  question1.innerHTML = question.question;

  document.getElementById("options1").innerHTML = shuffledchoices[0];
  document.getElementById("options1").name = shuffledchoices[0];

  document.getElementById("options2").innerHTML = shuffledchoices[1];
  document.getElementById("options2").name = shuffledchoices[1];

  document.getElementById("options3").innerHTML = shuffledchoices[2];
  document.getElementById("options3").name = shuffledchoices[2];

  document.getElementById("options4").innerHTML = shuffledchoices[3];
  document.getElementById("options4").name = shuffledchoices[3];

  console.log(`Correct Answer: ${quizQuestions[current_question_index].correctAnswer}`)

  current_question_index++;
}
//open and close popup for the information
function openPopup() {
  document.getElementById("popup_box").style.display = 'block';
}

function closePopup() {
  document.getElementById("popup_box").style.display = 'none';
}
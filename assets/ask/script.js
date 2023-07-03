// Create global variables 
/*
    var scores = 0;
    var questions = ["What color is a black bear?", "You make a turn while hiking and suddenly you are 50 feet from a bear that sees you. What is the first thing that you do?", "You're camping in bear country. What items do you not put in your bear container?"]; // made of a string
    var answersChoices = [["Black","Brown","White","All of the above"], ["Turn and run!","Scream!","Play dead","Stand your ground and talk to the bear."], ["Granola Bars","Toothpaste","Bear Spray","Cooking Utensils"]]; // made of arrays of strings
    var correctAnswer = ["All of the above", "Stand your ground and talk to the bear.", "Bear Spray"]; // made of strings
    var currentQuestion = 0;
   */ 

var questions = [
    {
        questionText: "What color is a black bear?",
        answersChoices: ["Black","Brown","White","All of the above"],
        correctAnswer: 3,
    },
    {
        questionText: "You make a turn while hiking and suddenly you are 50 feet from a bear that sees you. What is the first thing that you do?",
        answersChoices: ["Turn and run!","Scream!","Stand your ground and talk to the bear.","Play dead"],
        correctAnswer: 2,
    },
    {
        questionText: "You're camping in bear country. What items do you not put in your bear container?",
        answersChoices: ["Bear Spray", "Granola Bars","Toothpaste","Cooking Utensils"],
        correctAnswer: 0,
    }

];

// HTML selectors
//the id of each question

var questionsEl = document.querySelector("#question");
var startBtn = document.querySelector("#start-quiz");

// Functions
//ask.html
function startQuiz() {

    // triggered when the button is clicked
    // add eventListener for "click"
    // start the timer when function is called
        // set interval
        // once timer hits 0, call endQuiz function
    // hide the start button after "click"
    // reveal the questions
}

//linked to the start button
startBtn.addEventListener("click", startQuiz);

var startBtn = document.querySelector("#start-quiz")
// eventListener to call the startQuiz function with the "start" button


//this var calls the "timer" id from the ask.html
var timerEl = document.querySelector("#timer");
// this var calls the "bear-attack" image from the ask.html
var timeEnds = document.querySelector("bear-attack");
var timeLeft = 60


timerEl.addEventListener()

function startTimer() {
    console.log("Time Begins Now");
    var timer = setInterval(function () {
        timeLeft--;
        timerEl.textContent = timeLeft = " seconds remaining.";
        if (timeLeft === 0) {
            clearInterval(timer);
            sendMessage();
        }
    }, 1000);
}

function sendMessage() {
    console.log("Time's Up!");
    timerEl.textContent = " ";
    var attackImg = document.createElement("img");
    attackImg.setAttribute("src", "images/bear-attack.png");
    timeEnds.appendChild(attackImg);

}

function nextQuestion() {
    // triggered when the user selects an answer
    // accept the event ("click") parameter to know which answer the user clicked
    // determine if the answer is right or wrong
    // if else statements
    // if wrong, adjust time
    // if right, add to score
    // increment the current question by 1
    // display next question and choices element
}

function endQuiz() {
    // triggered when timer ends OR last question is answered
    // hide questions
    // display the score and prompt user for initials
    // stop the timer
}



//this var calls the "timer" id from the ask.html
var timerEl = document.querySelector("timer");
var timeEnds = document.querySelector("bear-attack");
var timeLeft = 60

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
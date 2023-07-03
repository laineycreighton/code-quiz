/*----------------------------------------QUESTIONS OBJECT----------------------------------------*/
var questions = [
    {
        questionText: "What color is a black bear?",
        answersChoices: ["Black", "Brown", "White", "All of the above"],
        correctAnswer: 3,
    },
    {
        questionText: "You make a turn while hiking and suddenly you are 50 feet from a bear that sees you. What is the first thing that you do?",
        answersChoices: ["Turn and run!", "Scream!", "Stand your ground and talk to the bear.", "Play dead"],
        correctAnswer: 2,
    },
    {
        questionText: "You're camping in bear country. What items do you not put in your bear container?",
        answersChoices: ["Bear Spray", "Granola Bars", "Toothpaste", "Cooking Utensils"],
        correctAnswer: 0,
    }

];

/*----------------------------------------START QUIZ FUNCTION----------------------------------------*/

/*------------------QUERY SELECTORS------------------*/
var questionsEl = document.querySelector("#question");
var startBtn = document.querySelector("#start-quiz");

/*-----------------EVENT LISTENERS-----------------*/
// eventListener to call the startQuiz function with the "start" button
startBtn.addEventListener("click", startQuiz);

function startQuiz() {
    console.log("Quiz Started");
    // start the timer when function is called
    startTimer();
    // reveal the questions
    questionsEl.style.display = "block";



}


/*----------------------------------------NEXT QUESTION FUNCTION----------------------------------------*/
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


/*----------------------------------------START TIMER FUNCTION----------------------------------------*/

/*------------------QUERY SELECTORS------------------*/
//this var calls the "timer" id from the ask.html
var timerEl = document.querySelector("#timer");
// this var calls the "bear-attack" image from the ask.html
var timeEnds = document.querySelector("bear-attack");

/*--------------------VARIABLES--------------------*/
var timeLeft = 60

/*-----------------EVENT LISTENERS-----------------*/
startBtn.addEventListener("click", startTimer);

function startTimer() {
    console.log("Time Begins Now");
    var timer = setInterval(function () {
        timeLeft--;
        timerEl.textContent = timeLeft + " seconds remaining.";
        if (timeLeft === 0) {
            clearInterval(timer);
            sendMessage();
        }
    }, 1000);
}

/*----------------------------------------TIMER ENDS FUNCTION----------------------------------------*/
function sendMessage() {
    console.log("Time's Up!");
    timerEl.textContent = " ";
    var attackImg = document.createElement("img");
    attackImg.setAttribute("src", "images/bear-attack.png");
    timeEnds.appendChild(attackImg);
    endQuiz();
}







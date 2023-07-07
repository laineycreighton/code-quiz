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
var choiceA = document.querySelector("#choice-a");
var choiceB = document.querySelector("#choice-b");
var choiceC = document.querySelector("#choice-c");
var choiceD = document.querySelector("#choice-d");

/*-----------------EVENT LISTENERS-----------------*/
choiceA.addEventListener('click', checkAnswer);
choiceB.addEventListener('click', checkAnswer);
choiceC.addEventListener('click', checkAnswer);
choiceD.addEventListener('click', checkAnswer);

var currentQuestionIndex = 0;

function startQuiz() {
    console.log("Quiz Started");
    // start the timer when function is called
    startTimer();
    // reveal the questions
    displayQuestion();
}

/*----------------------------------------DISPLAY QUESTION FUNCTION----------------------------------------*/
function displayQuestion() {
    var currentQuestion = questions[currentQuestionIndex];

    console.log(currentQuestion.questionText);
    console.log(currentQuestion.answersChoices);
    console.log(currentQuestion.correctAnswer);

    questionsEl.querySelector('h1').textContent = currentQuestion.questionText;

   choiceA.textContent = currentQuestion.answersChoices[0];
   choiceA.textContent = currentQuestion.answersChoices[1];
   choiceA.textContent = currentQuestion.answersChoices[2];
   choiceA.textContent = currentQuestion.answersChoices[3];
}

/*----------------------------------------CHECK ANSWER FUNCTION----------------------------------------*/
function checkAnswer(event) {
    var selectedChoice = event.target;
    var currentQuestion = questions[currentQuestionIndex];
    var selectedChoiceIndex;

    if (selectedChoice === choiceA) {
        selectedChoiceIndex = 0;
    } else if (selectedChoice === choiceB) {
        selectedChoiceIndex = 1;
    } else if (selectedChoice === choiceC) {
        selectedChoiceIndex = 2;
    } else if (selectedChoice === choiceD) {
        selectedChoiceIndex = 3;
    }

if (selectedChoiceIndex === currentQuestion.correctAnswer) {
    console.log("Correct answer!");
} else {
    console.log("Incorrect answer!");
}

currentQuestionIndex++;
if (currentQuestionIndex < questions.length) {
    displayQuestion();
} else {
    endQuiz();
}
}

/*----------------------------------------START TIMER FUNCTION----------------------------------------*/

/*------------------QUERY SELECTORS------------------*/
//this var calls the "timer" id from the ask.html
var timerEl = document.querySelector("#timer");

/*--------------------VARIABLES--------------------*/
var timeLeft = 60

/*-----------------EVENT LISTENERS-----------------*/


function startTimer() {
    console.log("Time Begins Now");
    var timer = setInterval(function () {
        timeLeft--;
        timerEl.textContent = "Timer: " + timeLeft + " seconds remaining.";
        if (timeLeft === 0) {
            clearInterval(timer);
            endQuiz();
        }
    }, 1000);
}

/*----------------------------------------CALL START QUIZ FUNCTION----------------------------------------*/

startQuiz();



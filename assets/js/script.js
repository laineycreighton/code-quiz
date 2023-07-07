/*----------------------------------------QUESTIONS OBJECT----------------------------------------*/
var questions = [
    {
        questionText: "What color is a black bear?",
        answersChoices: ["Black", "Brown", "White", "All of the above"],
        correctAnswer: 3,
    },
    {
        questionText: "You make a turn while hiking and suddenly you are 50 feet from a bear that sees you. What is the first thing that you do?",
        answersChoices: ["Turn and run!", "Scream!", "Play dead", "Stand your ground and talk to the bear."],
        correctAnswer: 3,
    },
    {
        questionText: "You're camping in bear country. What items do you not put in your bear container?",
        answersChoices: ["Granola Bars", "Toothpaste", "Cooking Utensils", "Bear Spray"],
        correctAnswer: 3,
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
var timer;

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

    choiceA.textContent = "a. " + currentQuestion.answersChoices[0];
    choiceB.textContent = "b. " + currentQuestion.answersChoices[1];
    choiceC.textContent = "c. " + currentQuestion.answersChoices[2];
    choiceD.textContent = "d. " + currentQuestion.answersChoices[3];
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
        //deduct 20 seconds from the timer
        timeLeft -= 20;
        if (timeLeft < 0) {
            timeLeft = 0;
        }
    }

    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        displayQuestion();
    } else {
        clearInterval(timer);
        endQuiz();
    }
}

/*----------------------------------------END QUIZ FUNCTION----------------------------------------*/
function endQuiz() {
    console.log("Quiz ended!");

    //variable for the value of the score
    var score = timeLeft;

    //hide the questions to display score submission form
    questionsEl.style.display = "none";
    var form = document.createElement("form");
    var submitName = document.createElement("name");
    submitName.textContent = "Name: ";
    var nameInput = document.createElement("input");
    nameInput.setAttribute("type", "text");
    var submitBtn = document.createElement("button");
    submitBtn.textContent = "SUBMIT";
    form.appendChild(submitName);
    form.appendChild(nameInput);
    form.appendChild(submitBtn);
    questionsEl.parentNode.appendChild(form);

    form.addEventListener('submit', function (event) {
        event.preventDefault();

        var initials = nameInput.value;

        console.log("Initials: " + initials);
        console.log("Score: ", + score);

        //store the score submissions to local storage
        var storeScores = {
            initials: initials,
            score: score
        };
        localStorage.setItem("quizScore", JSON.stringify(storeScores));

        //redirect the user to the high scores page after submitting score
        window.location.href = "../html/scores.html";
    })
}

/*----------------------------------------START TIMER FUNCTION----------------------------------------*/

/*------------------QUERY SELECTORS------------------*/
//this var calls the "timer" id from the ask.html
var timerEl = document.querySelector("#timer");

/*--------------------VARIABLES--------------------*/
var timeLeft = 60

function startTimer() {
    console.log("Time Begins Now");
    timer = setInterval(function () {
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



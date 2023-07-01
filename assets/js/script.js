// Create global variables
    var scores = 0;
    var timeLeft = 120;
    var questions = ["What color is a black bear?", "You make a turn while hiking and suddenly you are 50 feet from a bear that sees you. What do you do?", "You're camping in bear country. What items do you not put in your bear container?"]; // made of a string
    var answersChoices = [["Black","Brown","White","All of the above"], ["Turn and run!","Scream!","Play dead","Stand your ground and talk to the bear."], ["Granola Bars","Toothpaste","Bear Spray","Cooking Utensils"]]; // made of arrays of strings
    var correctAnswer = ["Answer 1", "Answer 2", "Answer 3"]; // made of strings
    var currentQuestion = 0;

// HTML selectors
//the id of each question

var questionsEl = document.querySelector("#question")

//Start Quiz
var startBtn = document.querySelector("#start-quiz")
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

startBtn.addEventListener("start-quiz", startQuiz);

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

function endQuiz () {
    // triggered when timer ends OR last question is answered
    // hide questions
    // display the score and prompt user for initials
    // stop the timer
}

// scores.html
function highScores() {
    // triggered when user submits their initals
    // save score and initials in local storage
            // read existing scores - var
            // add new score - to the end of the existing scores var/array
            // overwrite the scores with the new array (push, pop, etc - study)
    // display high score page
}

// eventListener to call the startQuiz function with the "start" button
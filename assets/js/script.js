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
startBtn.addEventListener("start-quiz", startQuiz);

var startBtn = document.querySelector("#start-quiz")
// eventListener to call the startQuiz function with the "start" button






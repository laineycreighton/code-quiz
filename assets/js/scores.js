// scores.html
var storeScores = localStorage.getItem("quizScore");
if (scoreData) {
    scoreData = JSON.parse(scoreData);
    var initials = scoreData.initials;
    var score = scoreData.score;

    console.log("Initials: " + initials);
        console.log("Score: ", + score);
}

function highScores() {
    // triggered when user submits their initals
    // save score and initials in local storage
            // read existing scores - var
            // add new score - to the end of the existing scores var/array
            // overwrite the scores with the new array (push, pop, etc - study)
    // display high score page
    //localStorage getItem
}


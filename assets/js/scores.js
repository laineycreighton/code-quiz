/*------------------STORED SCORES------------------*/
var storeScores = localStorage.getItem("quizScore");

if (storeScores) {
    var scoreData = JSON.parse(storeScores);
    var initials = scoreData.initials;
    var score = scoreData.score;

    console.log("Initials: " + initials);
    console.log("Score: " + score);
}

var initialDisplay = document.querySelector("#initials");
initialDisplay.textContent = initials;

var scoreDisplay = document.querySelector("#score");
scoreDisplay.textContent = score;

/*----------------------------------------HIGH SCORES FUNCTION----------------------------------------*/
function highScores() {
    var existingScores = localStorage.getItem("scores");

    var newScore = {
        initials: initials,
        score: score,
    };

    if(existingScores) {
        var scoresArr = JSON.parse(existingScores);

        scoresArr.push(newScore);

        scoresArr.sort(function (a, b) {
            return b.score - a.score;
        });

        localStorage.setItem("scores", JSON.stringify(scoresArr));
    } else {
        var scoresArr = [newScore];

        localStorage.setItem("scores", JSON.stringify(scoresArr));
    }

    var highScoresDisplay = document.querySelector("#high-scores");
    highScoresDisplay.textContent = "";

    for (var i = 0; i < scoresArr.length; i++) {
        var scoreEntry = document.createElement("li");
        scoreEntry.textContent = scoresArr[i].initials + ": " + scoresArr[i].score;
        highScoresDisplay.appendChild(scoreEntry);
    }
}

/*----------------------------------------CALL HIGH SCORES FUNCTION----------------------------------------*/
highScores();
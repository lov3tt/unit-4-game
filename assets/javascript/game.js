// global varible that hold state
var wins = 0;
var losses = 0;
var targetScore = 0;
var box1Value = 0;
var box2Value = 0;
var box3Value = 0;
var box4Value = 0;
var currentScore = 0;

//Fxn that give the initial state
function Start() {

    $("#winText").text("Wins: " + wins)
    $("#loseText").text("Losses: " + losses)
    $(".CurrentScoreText").text(currentScore);
    
    currentScore = 0;

    //buttonValue 1-12
    box1Value = Math.floor(Math.random() * 12) + 1;
    box2Value = Math.floor(Math.random() * 12) + 1;
    box3Value = Math.floor(Math.random() * 12) + 1;
    box4Value = Math.floor(Math.random() * 12) + 1;
    //targetscore 19-120
    targetScore = (Math.floor(Math.random() * (120 - 19 + 1)) + 19);
    $(".TargetScoreText").text(targetScore);
};
//Initialize
Start();
//game started, add score, check if player score > or = to target score
function update()
 {


    if(currentScore < targetScore) {
        $("#State").text("Scoreboard");
    }
    if (currentScore > targetScore) {
        losses++;
        $("#State").text("You Lose!")
        Start();

    }

    

    if (currentScore == targetScore) {
        wins++;
        $("#State").text("You Win!")
        Start();
    }

    
};

//buttons
    $(".box1").on("click", function () {
        currentScore += box1Value;
        $(".CurrentScoreText").text(currentScore);
        update()
    });
    $(".box2").on("click", function () {
        currentScore += box2Value;
        $(".CurrentScoreText").text(currentScore)
        update()
    });
    $(".box3").on("click", function () {
        currentScore += box3Value;
        $(".CurrentScoreText").text(currentScore)
        update()
    });
    $(".box4").on("click", function () {
        currentScore += box4Value;
        $(".CurrentScoreText").text(currentScore)
        update()
    });
/*function makePattern(){
    for(let i = 0;i<no;i++){
        const rand = Math.floor(Math.random()*4);
        var randomColor = buttonColors[rand];
        var color= randomColor;
        gamePattern.push(randomColor);
        $("#"+color).fadeOut(500).fadeIn(500);
        
        }
}
function checkSequence(gP,uP,i){
    if(uP[i]=== gP[i]){
        return 1;
    }
    else{
        uP=[];
        $(document).on("keydown",function(){
        $("h1").text("WRONG....PRESS ANY KEY TO START AGAIN WRONG ANS")})
        return 0 ;
    }
}
function newSequence(no){
    var gamePattern = [];
    var userPattern = [];
    var buttonColors = ["red","blue","green","yellow"];
    
    $(document).on("keydown",function(){
        $("h1").text("level "+no);
        makePattern();
    })
    
    for(let i = 0;i<no;i++){$("btn").on("click",function(){
            userPattern.push($(this).attr(id));
            checkSequence(gamePattern,userPattern,i);

    })
}
    }
var no = 1;
newSequence(no);*/
var gamePattern = [];
var userPattern = [];
var buttonColors = ["red", "blue", "green", "yellow"];
var no = 1;
var started = false;  // To keep track of whether the game has started or not
function playSound(color){
    var audio = new Audio("./sounds/"+color+".mp3");
    audio.play();
}


function makePattern() {
    var rand = Math.floor(Math.random() * 4);
    var randomColor = buttonColors[rand];
    gamePattern.push(randomColor);
    $("#" + randomColor).fadeOut(500).fadeIn(500);
}

function checkSequence() {
    var lastIndex = userPattern.length - 1;

    if (userPattern[lastIndex] === gamePattern[lastIndex]) {
        if (userPattern.length === gamePattern.length) {
            setTimeout(function () {
                nextSequence();
            }, 1000);
        }
    } else {
        $("h1").text("WRONG... PRESS ANY KEY TO START AGAIN");
        playSound("wrong");
        $("body").addClass("game-over");

        setTimeout(function () {
            $("body").removeClass("game-over");
        }, 200);

        startOver();
    }
}

function nextSequence() {
    userPattern = [];
    $("h1").text("Level " + no);
    no++;
    makePattern();
}

function startOver() {
    no = 1;
    gamePattern = [];
    started = false;
}

$(document).on("keydown", function () {
    if (!started) {
        $("h1").text("Level " + no);
        nextSequence();
        started = true;
    }
});

$(".btn").on("click", function () {
    var userChosenColor = $(this).attr("id");
    $(this).fadeOut(500).fadeIn(500);
    userPattern.push(userChosenColor);
    playSound(userChosenColor);
    checkSequence();
});



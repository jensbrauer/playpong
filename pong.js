document.getElementById('game-container').addEventListener('click', function(){
    document.getElementById('game-is-running').innerHTML = "Game on!"
})

function canvasSize(num) {
    let container = document.getElementById('game-container')
    if (num == 1){
        return container.offsetWidth
    } else {
        return container.offsetHeight
    }
}


let currentScoreHtml = document.getElementById('current-score')
let currentScore = 0

function setup() {
    frameRate(80)
    var canvas = createCanvas(canvasSize(1), canvasSize(2));
    canvas.parent('game-container')
}

function activate() {
    let dumby = document.getElementById('hej')
    dumby.textContent = "hej"
}

function runGame(num){
    if (num == 0) {
        return false
    } else {
        return true
    }
}

let ballPositionY = 30
let ballGoingDown = true

let ballPositionX = canvasSize(1) / 2
let ballGoingRight = true 
let ballPositionXDirection = 0.5
let racketwidth = 90

function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min) ) + min;
  }

function draw() {
    background(20, 13, 39);
    if (document.getElementById('game-is-running').innerHTML != "Game on!"){
        //When game is not running
        //computer racket
        fill(183, 200, 40)
        rect(ballPositionX - (racketwidth/2), 5, racketwidth, 25)
        
        //ball
        fill(235, 230, 224)
        circle(canvasSize(1) / 2, 45, 25)
        ballPositionX = canvasSize(1) / 2
        ballPositionY = 45

        //Player racket
        fill(108, 177, 180)
        rect(mouseX - (racketwidth/2), canvasSize(2) - 30 , racketwidth, 25)
    } else {
        //Game is running

        //Player racket
        fill(108, 177, 180)
        rect(mouseX - (racketwidth/2), canvasSize(2) - 30 , racketwidth, 25)

        //computer racket
        fill(183, 200, 40)
        rect(ballPositionX - (racketwidth/2), 5, racketwidth, 25)

        //ball
        fill(235, 230, 224)
        circle(ballPositionX, ballPositionY, 25, 25)

        //Control Ball speed in Y direction
        if (ballGoingDown) {
            ballPositionY = ballPositionY + 6
        } else {
            ballPositionY = ballPositionY - 6
        }

        //Shifts ball direction if racket hits ball
        if (ballPositionY >= canvasSize(2) - 50 && ballPositionY <= canvasSize(2) - 42){
            if (ballPositionX >= mouseX - 50 && ballPositionX <= mouseX + 50) {
                ballGoingDown = false
            }
        } else if (ballPositionY <= 50 ){
            ballGoingDown = true
            ballPositionXDirection = getRndInteger(-5, 5)
        }
        
        //Makes ball bounce of the walls to the sides
        if (ballPositionX >= canvasSize(1) - 12 && ballPositionXDirection > 0) {
            ballPositionXDirection = ballPositionXDirection * -1
        } else if (ballPositionX <= 12 && ballPositionXDirection < 0 ) {
            ballPositionXDirection = ballPositionXDirection * -1
        }

        //terminates game if ball goes outside canvas behind player racket
        if (ballPositionY >= canvasSize(2)){
            document.getElementById('game-is-running').innerHTML = "Dropped that one!"
        }

        //Control how the ball changes direction horizontaly
        ballPositionX = ballPositionX + ballPositionXDirection
        
        
        
    }

}


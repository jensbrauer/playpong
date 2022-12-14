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

let ballPositionY = 55
let ballGoingDown = true

let ballPositionX = canvasSize(1) / 2
let ballGoingRight = true 
let ballPositionXDirection = 0.5

function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min) ) + min;
  }

function draw() {
    background(51);
    if (document.getElementById('game-is-running').innerHTML != "Game on!"){
        //When game is not running
        fill(100, 100, 100)
        circle(canvasSize(1) / 2, canvasSize(2) / 2, 50)
        ballPositionX = canvasSize(1) / 2
        ballPositionY = 55
    } else {
        //Game is running

        //Player racket
        fill(200, 200, 200)
        rect(mouseX - 25, canvasSize(2) - 30 , 50, 25)

        //computer racket
        fill(100, 100, 100)
        rect(ballPositionX - 25, 5, 50, 25)

        //ball
        fill(100, 100, 100)
        circle(ballPositionX, ballPositionY, 25, 25)

        //Control Ball speed in Y direction
        if (ballGoingDown) {
            ballPositionY = ballPositionY + 6
        } else {
            ballPositionY = ballPositionY - 6
        }

        //Shifts ball direction if racket hits ball
        if (ballPositionY >= canvasSize(2) - 58 && ballPositionY <= canvasSize(2) - 50){
            if (ballPositionX >= mouseX - 25 && ballPositionX <= mouseX + 25) {
                ballGoingDown = false
            }
        } else if (ballPositionY <= 55 ){
            ballGoingDown = true
            ballPositionXDirection = getRndInteger(-5, 5)
        }
        
        //Makes ball bounce of the walls to the sides
        if (ballPositionX >= canvasSize(1) - 25 && ballPositionXDirection > 0) {
            ballPositionXDirection = ballPositionXDirection * -1
        } else if (ballPositionX <= 25 && ballPositionXDirection < 0 ) {
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


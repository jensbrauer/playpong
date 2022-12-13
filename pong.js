let container = document.getElementById('game-container')
let canvasWidth = container.offsetWidth
let canvasHeight = container.offsetHeight

function setup() {
    var canvas = createCanvas(canvasWidth, canvasHeight);
    canvas.parent('game-container')
}

let gameRunning = false
function runGame(){
    gameRunning = true
}

let ballPositionY = 55
let ballGoingDown = true

let ballPositionX = canvasWidth / 2
let ballGoingRight = true 
let ballPositionXDirection = 0.5

function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min) ) + min;
  }

function draw() {
    background(51);
    if (gameRunning){
        //Player racket
        fill(200, 200, 200)
        rect(mouseX, canvasHeight - 30 , 50, 25)

        //computer racket
        fill(100, 100, 100)
        rect(ballPositionX - 25, 5, 50, 25)

        //ball
        fill(100, 100, 100)
        circle(ballPositionX, ballPositionY, 50, 25)


        if (ballGoingDown) {
            ballPositionY = ballPositionY + 8
        } else {
            ballPositionY = ballPositionY - 8
        }

        if (ballPositionY >= canvasHeight - 55){
            ballGoingDown = false
        } else if (ballPositionY <= 55 ){
            ballGoingDown = true
            ballPositionXDirection = getRndInteger(-5, 5)
        }
        
        if (ballPositionX >= canvasWidth - 25 && ballPositionXDirection > 0) {
            ballPositionXDirection = ballPositionXDirection * -1
        } else if (ballPositionX <= 25 && ballPositionXDirection < 0 ) {
            ballPositionXDirection = ballPositionXDirection * -1
        }

        ballPositionX = ballPositionX + ballPositionXDirection
        
        
    } else {
        fill(100, 100, 100)
        circle(canvasWidth / 2, canvasHeight / 2, 50)
    }

}
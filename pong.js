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

function draw() {
    background(51);
    if (gameRunning){
        //Player racket
        fill(200, 200, 200)
        rect(mouseX, canvasHeight - 30 , 50, 25)

        //computer racket
        fill(100, 100, 100)
        rect(mouseX, 5, 50, 25)


    } else {
        fill(100, 100, 100)
        circle(canvasWidth / 2, canvasHeight / 2, 50)
    }

}
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
        fill(200, 200, 200)
        rect(200, 200, 50, 50)
    } else {
        fill(100, 100, 100)
        rect(200, 200, 50, 50)
    }

}
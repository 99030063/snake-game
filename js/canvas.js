var canvas = document.getElementById('canvas2d');
canvas.width = canvas.height = 400;
var c = canvas.getContext("2d") //c is context

var scale = 10;
var rows = canvas.height/scale;
var column = canvas.width/scale;
var speedChoice = 250; // dit heeft invloed op de snelheid (MAX. 500)
var speed = 500 - speedChoice;

var snake;

(function setup() {
    snake = new Snake();

    window.setInterval(()=>{
        c.clearRect(0, 0, canvas.width, canvas.height);
        snake.update();
        snake.draw();
    }, speed); 
}());

window.addEventListener('keydown',  ((evt)=> {
    console.log(evt);
    const direction = evt.key.replace('Arrow','')
    console.log(direction);
    snake.keyPressed(direction);
}))


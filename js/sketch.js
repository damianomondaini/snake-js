let canvas = new Canvas(1000, 1000);
let snake = new Snake(50, 'rgb(0,255,0)');
var apple = new Apple(0, 0, 50, 'rgb(255,0,0)')
var timer = 0;
var hasLost = false;

function setup() {
    createCanvas(canvas.width, canvas.height);
}

function draw() {
    background(0);
    fill('rgb(0,255,0)');
    snake.draw();
    apple.spawn();

    if (timer === 15 && hasLost === false) {
        timer = 0;
        snake.moveHead();
    }

    if (keyIsDown(RIGHT_ARROW) && snake.body.length === 0 || keyIsDown(RIGHT_ARROW) && snake.body.length > 0 && snake.lastStep != 'left') {
        snake.direction = 'right';
    }
    if (keyIsDown(DOWN_ARROW) && snake.body.length === 0 || keyIsDown(DOWN_ARROW) && snake.body.length > 0 && snake.lastStep != 'up') {
        snake.direction = 'down';
    }
    if (keyIsDown(LEFT_ARROW) && snake.body.length === 0 || keyIsDown(LEFT_ARROW) && snake.body.length > 0 && snake.lastStep != 'right') {
        snake.direction = 'left';
    }
    if (keyIsDown(UP_ARROW) && snake.body.length === 0 || keyIsDown(UP_ARROW) && snake.body.length > 0 && snake.lastStep != 'down') {
        snake.direction = 'up';
    }

    if (hasLost === false) {
        timer++
    }
    else {
        snake.die();
    }
}
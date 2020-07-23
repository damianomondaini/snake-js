class Snake {
    constructor(width, color) {
        this.width = width;
        this.color = color;
        this.direction = 'right';
        this.lastStep = 'right';
        this.hasEatAppleLastStep = false;
        this.head = new Block(0, 0, width, color);
        this.body = [];
    }

    draw() {
        fill(this.color);
        rect(this.head.posX, this.head.posY, this.head.width);
        this.body.forEach(block => {
            fill(block.color);
            rect(block.posX, block.posY, block.width, block.width);
        });
    }
    
    moveBody() {
        if (this.body.length > 0) {
            for (let i = this.body.length; i > 1; i--) {
                this.body[i-1].posX = this.body[i-2].posX;
                this.body[i-1].posY = this.body[i-2].posY;
            }
    
            this.body[0].posX = this.head.posX;
            this.body[0].posY = this.head.posY;
        }
    }

    moveHead() {
        if (snake.direction === 'right' && snake.head.posX + snake.head.width != canvas.width) {
            if (this.hasEatAppleLastStep === false) {
                this.moveBody();
                snake.head.posX = snake.head.posX + snake.head.width;
                this.checkBodyCollision();
                this.checkAppleCollision();
                this.lastStep = 'right';
            }
            else {
                this.body.unshift(new Block(this.head.posX, this.head.posY, this.head.width, this.head.color));
                snake.head.posX = snake.head.posX + snake.head.width;
                this.checkBodyCollision();
                this.checkAppleCollision();
                this.lastStep = 'right';
                this.hasEatAppleLastStep = false;
            }
        }
        else if (snake.direction === 'down' && snake.head.posY + snake.head.width != canvas.width) {
            if (this.hasEatAppleLastStep === false) {
                this.moveBody();
                snake.head.posY = snake.head.posY + snake.head.width;
                this.checkBodyCollision();
                this.checkAppleCollision();
                this.lastStep = 'down';
            }
            else {
                this.body.unshift(new Block(this.head.posX, this.head.posY, this.head.width, this.head.color));
                snake.head.posY = snake.head.posY + snake.head.width;
                this.checkBodyCollision();
                this.checkAppleCollision();
                this.lastStep = 'down';
                this.hasEatAppleLastStep = false;
            }

        }
        else if (snake.direction === 'left' && snake.head.posX != 0) {
            if (this.hasEatAppleLastStep === false) {
                this.moveBody();
                snake.head.posX = snake.head.posX - snake.head.width;
                this.checkBodyCollision();
                this.checkAppleCollision();
                this.lastStep = 'left';
            }
            else {
                this.body.unshift(new Block(this.head.posX, this.head.posY, this.head.width, this.head.color));
                snake.head.posX = snake.head.posX - snake.head.width;
                this.checkBodyCollision();
                this.checkAppleCollision();
                this.lastStep = 'left';
                this.hasEatAppleLastStep = false;
            }

        }
        else if (snake.direction === 'up' && snake.head.posY != 0) {
            if (this.hasEatAppleLastStep === false) {
                this.moveBody();
                snake.head.posY = snake.head.posY - snake.head.width;
                this.checkBodyCollision();
                this.checkAppleCollision();
                this.lastStep = 'up';
            }
            else {
                this.body.unshift(new Block(this.head.posX, this.head.posY, this.head.width, this.head.color));
                snake.head.posY = snake.head.posY - snake.head.width;
                this.checkBodyCollision();
                this.checkAppleCollision();
                this.lastStep = 'up';
                this.hasEatAppleLastStep = false;
            }
        }
        else {
            hasLost = true;
        }
    }

    checkBodyCollision() {
        var isColision = false;
        
        this.body.forEach(block => {
            if (this.head.posX === block.posX && this.head.posY === block.posY) {
                isColision = true
            }
        });

        if (isColision === true) {
            hasLost = true;
        }
    }

    checkAppleCollision() {
        if (this.head.posX === apple.posX && this.head.posY === apple.posY) {
            this.hasEatAppleLastStep = true;
            apple.despawn();
        }
    }

    die() {
        this.body.forEach(block => {
            block.color = 'rgb(255,0,0)';
        });
        this.color = 'rgb(255,0,0)';
    }
}
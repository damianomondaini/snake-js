class Apple extends Block {
    constructor(posX, posY, width, color) {
        super(posX, posY, width, color);
        this.isApple = false;
    }

    spawn() {
        if (this.isApple === false) {
            this.generatePositions();
            this.isApple = true;
        }

        fill(this.color);
        rect(this.posX, this.posY, this.width, this.width);
    }

    generatePositions() {
        var arePosValid = false;
        while (arePosValid != true) {
            arePosValid = true;

            var multX = canvas.width / this.width;
            var multY = canvas.height / this.width;
    
            var posX = Math.floor(Math.random() * multX) * this.width;
            var posY = Math.floor(Math.random() * multY) * this.width;
            snake.body.forEach(block => {
                if (posX === block.posX && posY === block.posY) {
                    arePosValid = false;
                }
            });

            if (arePosValid === true) {
                if (posX === snake.head.posX && posY === snake.head.posY) {
                    arePosValid = false;
                }
            }
        }

        this.posX = posX;
        this.posY = posY;
    }

    despawn() {
        this.isApple = false;
    }

}
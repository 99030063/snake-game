function Snake(){
    this.x = 0;
    this.y = 0;
    this.xSpeed = scale * 1;
    this.ySpeed = scale * 0;

    this.draw = function(){
        c.fillStyle = "#FFFFFF";
        c.fillRect(this.x, this.y, scale, scale);
        
    }

    this.update = function(){
        this.x += this.xSpeed;
        this.y += this.ySpeed;

        if (this.x > canvas.width){
            this.x = 0;
        }

        if (this.y > canvas.height){
            this.y = 0;
        }

        if (this.x < 0){
            this.x = canvas.width;
        }

        if (this.y < 0){
            this.y = canvas.height;
        }
    }
    this.dir = function(x, y){
        this.xSpeed = scale * x;
        this.ySpeed = scale * y;
    }

    this.keyPressed = function(direction){
        if(direction === 'Up'){
            snake.dir(0,-1);
        }else if(direction === 'Down'){
            snake.dir(0, 1);
        }else if(direction === 'Left'){
            snake.dir(-1, 0);
        }else if(direction === 'Right'){
            snake.dir(1, 0);
        }
    }
}
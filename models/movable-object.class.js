class MovableObject extends DrawableObject {
    // #region attributes
    speed = 0.06;
    otherDirection = false;
    speedY = 0;
    acceleration = 2.5;
    health = 100;
    damage = 0;
    lastHit = 0;
    // #endregion
    // #region methods

    isColliding(movableObject){
        return this.rX + this.rWidth > movableObject.rX &&
            this.rY + this.rHeight > movableObject.rY &&
            this.rX < movableObject.rX &&
            this.rY < movableObject.rY + movableObject.rHeight
    }

    playAnimation(images){ //iterates through an array of pictures to simulate an animation
        let i = this.currentImage % images.length;
        let path = images[i];
        this.img = this.imageCache[path];
        this.currentImage++;
    }

    moveRight(){ //moving right
        this.x += this.speed;
    }

    moveLeft(){ //moving left
        this.x -= this.speed;
    }

    applyGravity (){
        setInterval(() => {
            if (this.isAboveGround() || this.speedY > 0){
                this.y -= this.speedY;
                this.speedY -= this.acceleration;
            }
        }, 1000 / 60);
    }

    isAboveGround(){
        if(this instanceof ThrowableObject){ //a throwable object should always fall 
            return true;
        } else {
            return this.y < 130; // level of the ground 
        }
        
    }

    jump(){
        this.speedY = 30; //height of jump
    }

    hit(){
        this.health -= 15; // this.movableObject.damage
        if (this.health < 0){
            this.health = 0;
        } else {
            this.lastHit = new Date().getTime(); //saving time in miliseconds
        }
    }

    isHurt(){
        let timepassed = new Date().getTime() - this.lastHit; // difference in miliseconds
        timepassed = timepassed / 1000; // difference in seconds
        return timepassed < 1;
    }

    isDead(){
        return this.health == 0;
    }
    // #endregion
}
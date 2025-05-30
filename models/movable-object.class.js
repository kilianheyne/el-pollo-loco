class MovableObject extends DrawableObject {
    // #region attributes
    speed = 0.06;
    otherDirection = false;
    speedY = 0;
    acceleration = 1.6;
    health = 100;
    damage = 0;
    lastHit = 0;
    markedForDeletion = false;
    deletionCounter = 30; // time delay until enemy vanishes from canvas
    // #endregion

    constructor(){
        super();

        IntervalHub.setStoppableInterval(this.deletionCountdown, 1000/30);
        this.gravityInterval = IntervalHub.setStoppableInterval(this.applyGravity, 1000/60)
        //
    }
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

    applyGravity = () => {
        if (this.isAboveGround() || this.speedY > 0){
            this.y -= this.speedY;
            this.speedY -= this.acceleration;
        }
    }

    isAboveGround(){
        if(this instanceof ThrowableObject){ //a throwable object should always fall
            return true;
        } else {
            return this.y < 130; // level of the ground 
        }
    }

    jump(){
        this.speedY = 24; //height of jump
    }

    hitOnChicken(){
        if (this instanceof Chicken){
            this.loadImage(ImageHub.chicken.dead);
        } else if (this instanceof MiniChicken){
            this.loadImage(ImageHub.smallChicken.dead);
        }
        this.stopChicken();
        this.markedForDeletion = true; // Flag, zum Entfernen des Sprites vom Canvas
        this.deletionCounter = 30;
    }

    stopChicken(){
        this.speed = 0; //interrupts movement to the left
        clearInterval(this.walkInterval); //interrupts animation
        clearInterval(this.moveInterval);
    }

    deletionCountdown = () => {
        if(this.markedForDeletion){
            this.deletionCounter--;
        }
        if(this.deletionCounter <= 0){
            this.removeFromWorld();
        }
    }

    removeFromWorld = () => {
        const index = this.world.level.enemies.indexOf(this);
        if (index >- 1){
            this.world.level.enemies.splice(index, 1);
        }
    }

    hit(){
        this.health -= 10; // this.movableObject.damage - Leben wird bei Kontakt reduziert
        if (this.health < 0){
            this.health = 0; // Leben kann nicht unter 0 fallen (negative Werte könnten die Death-Animation unterbinden)
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
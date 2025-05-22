class Character extends MovableObject{
    // #region attributes
    width = 120;
    height = 300;
    y = 0;
    speed = 3;
    world;

    lastActionTime = Date.now();
    londIdleTimeout;
    isInLongIdle = false;
    
    // #endregion
    // #region constructor
    constructor(){
        super().loadImage('img/2_character_pepe/2_walk/W-21.png');
        this.loadImages(ImageHub.pepe.idle);
        this.loadImages(ImageHub.pepe.longIdle);
        this.loadImages(ImageHub.pepe.walk);
        this.loadImages(ImageHub.pepe.jump);
        this.loadImages(ImageHub.pepe.hurt);
        this.loadImages(ImageHub.pepe.dead);
        this.animate();
        this.applyGravity();
        this.resetLongIdleTimer();
    }
    // #endregion
    // #region methods

    resetLongIdleTimer(){
        clearTimeout(this.londIdleTimeout); //Timer wird auf 0 gesetzt
        this.isInLongIdle = false; //befindet sich jetzt nur in der normalen idle-Animation
        this.lastActionTime = Date.now();
        this.longIdleTimeout = setTimeout(() => {
            if (!this.world.keyboard.RIGHT && !this.world.keyboard.LEFT && !this.world.keyboard.SPACE){
                this.playAnimation(ImageHub.pepe.longIdle);
                this.isInLongIdle = true; // befindet sich in der langen Animation
            }
        }, 10000)
    }

    animate(){
        setInterval(() => { 
            if(this.world.keyboard.RIGHT && this.x < this.world.level.level_end_x){ //moving to the right
                this.moveRight();
                this.otherDirection = false;
                // this.walking_sound.play();
            }
            if(this.world.keyboard.LEFT && this.x > 0){ //moving to the left
                this.moveLeft();
                this.otherDirection = true;
                // this.walking_sound.play();
            }
            if(this.world.keyboard.SPACE && !this.isAboveGround()){ //jumping
                this.jump();
            }
            this.world.camera_x = -this.x + 100;
        }, 1000 / 60);

        setInterval(() => { 
            if (this.isDead()){ //dying animation
                this.playAnimation(ImageHub.pepe.dead);
            } else if (this.isHurt()){
                this.playAnimation(ImageHub.pepe.hurt);
            } else if (this.isAboveGround()){ // jump animation
                this.playAnimation(ImageHub.pepe.jump);
                this.resetLongIdleTimer(); //unterbricht die longIdle-Animation
            } else if (this.world.keyboard.RIGHT || this.world.keyboard.LEFT){ // walk animation
                this.playAnimation(ImageHub.pepe.walk);
                this.resetLongIdleTimer(); //unterbricht die longIdle-Animation
            } else if (this.isInLongIdle){
                this.playAnimation(ImageHub.pepe.longIdle);
            } else {
                this.playAnimation(ImageHub.pepe.idle);
            }
        }, 104);
    }
    // #endregion 
}
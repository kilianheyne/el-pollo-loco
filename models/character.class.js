/**
 * Creates the playable character that the player navigates.
 * @class
 */
class Character extends MovableObject{
    //#region attributes
    width = 120;
    height = 300;
    y = 0;
    speed = 3;

    /**
     * Reference to the current game world, including level data and keyboard inputs.
     * @type {World}
     */
    world;

    /**
     * Time of the last user action (to detect inactivity).
     * @type {number}
     */
    lastActionTime = Date.now();
    londIdleTimeout;
    isInLongIdle = false;

    /**
     * Numbers to correct the hitbox of character.
     */
    offset = {
        top: 120,
        right: 30,
        bottom: 10,
        left: 20
    };

    pepeDead = false;
    deathAnimationPlayed = false;

    //#endregion
    //#region constructor
    /**
     * Initializes the main playable character, loads all animations, applies gravity and sets up movement and interaction intervals.
     */
    constructor(){
        super();
        this.loadImage('img/2_character_pepe/2_walk/W-21.png');
        this.loadImages(ImageHub.pepe.idle);
        this.loadImages(ImageHub.pepe.longIdle);
        this.loadImages(ImageHub.pepe.walk);
        this.loadImages(ImageHub.pepe.jump);
        this.loadImages(ImageHub.pepe.hurt);
        this.loadImages(ImageHub.pepe.dead);

        this.applyGravity();
        this.resetLongIdleTimer();

        this.charMoveInterval = IntervalHub.setStoppableInterval(this.movement, 1000/60);
        this.charInteractionInterval = IntervalHub.setStoppableInterval(this.animation, 1000/8);
    }
    //#endregion
    //#region methods
    /**
     * Resets the long idle times. 
     * If the player is inactive for 10 seconds, the character starts the long idle animation.
     */
    resetLongIdleTimer(){
        clearTimeout(this.longIdleTimeout); //Timer wird auf 0 gesetzt
        this.isInLongIdle = false; //befindet sich jetzt nur in der normalen idle-Animation
        this.lastActionTime = Date.now();
        this.longIdleTimeout = setTimeout(() => {
            if (!this.world.keyboard.RIGHT && !this.world.keyboard.LEFT && !this.world.keyboard.SPACE && !this.world.keyboard.SHIFT){
                this.isInLongIdle = true; // befindet sich in der langen Animation
            }
        }, 10000)
    }

    //#region movement
    /**
     * Handles the character movement in response to keyboard input.
     * Is being checked through an interval 60 times per second.
     */
    movement = () => {
        this.charMoveRight();
        this.charMoveLeft();
        this.charJump();
        this.getRealFrame();
        this.world.camera_x = -this.x + 100;
    }

    charMoveRight(){
        if(this.world.keyboard.RIGHT && this.x < this.world.level.level_end_x){ //moving to the right
            this.moveRight();
            this.otherDirection = false;
            // this.walking_sound.play();
        }
    }
    charMoveLeft(){
        if(this.world.keyboard.LEFT && this.x > 0){ //moving to the left
            this.moveLeft();
            this.otherDirection = true;
            // this.walking_sound.play();
        }
    }
    charJump(){
        if(this.world.keyboard.SPACE && !this.isAboveGround()){ //jumping
            this.jump();
        }
    }

    //#endregion
    //#region animations
    /**
     * Chooses and plays the intended animation based on the current character state.
     * Checks by and interval 8 times per second.
     */
    animation = () => {
        if (this.isDead()){ // dying animation
            this.charDying();
        } else if (this.isHurt()){ // hurt animation
            this.charHurting();
        } else if (this.isAboveGround()){ // jump animation
            this.charJumping();
        } else if (this.world.keyboard.RIGHT || this.world.keyboard.LEFT){ // walk animation
            this.charWalking();
        } else if (this.isInLongIdle){
            this.charDoNothing();
        } else {
            this.charIdling();
        }
    }

    charDying(){
        this.pepeDead = true;
        this.deathAnimationPlayed = true;
        this.resetLongIdleTimer();
        this.playAnimation(ImageHub.pepe.dead);
    }
    charHurting(){
        this.resetLongIdleTimer();
        this.playAnimation(ImageHub.pepe.hurt);
    }
    charJumping(){
        this.resetLongIdleTimer(); // unterbricht die longIdle-Animation
        this.playAnimation(ImageHub.pepe.jump);
    }
    charWalking(){
        this.resetLongIdleTimer(); // unterbricht die longIdle-Animation
        this.playAnimation(ImageHub.pepe.walk);
    }
    charIdling(){
        this.playAnimation(ImageHub.pepe.idle);
    }
    charDoNothing(){
        this.playAnimation(ImageHub.pepe.longIdle);
    }
    //#endregion
    // #endregion 
}
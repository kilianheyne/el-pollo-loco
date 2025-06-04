/**
 * Shows the endboss of the game with animations, attackpatterns and health management. 
 * @class
 */
class Endboss extends MovableObject {
    //#region attributes
    x = 2600;
    y = 110;
    width = 300; 
    height = 340;

    /**
     * Numbers to correct the hitbox of the endboss.
     */
    offset = {
        top: 60,
        right: 40,
        bottom: 20,
        left: 35
    };
    
    health = 5;
    speed = 10;

    isDead = false; // flag for health bar
    playedDeathAnimation = false;

    //#region relevant attributes for dash-methode

    isDashing = false;
    lastDash = 0;

    //#endregion
    //#endregion
    //#region constructor
    /**
     * Creates an instance of the Endboss and loads all required images for animations. 
     */
    constructor(){
        super();
        this.loadImage(ImageHub.endboss.walk[0]);
        this.loadImages(ImageHub.endboss.walk);
        this.loadImages(ImageHub.endboss.alert);
        this.loadImages(ImageHub.endboss.attack);
        this.loadImages(ImageHub.endboss.hurt);
        this.loadImages(ImageHub.endboss.dead);

        IntervalHub.setStoppableInterval(this.animation, 1000/10);

        //this.endbossWalkInterval = IntervalHub.setStoppableInterval(this.animateWalk, 1000 / 5);
        //this.endbossIntroInterval = IntervalHub.setStoppableInterval(this.animateIntro, 1000 / 5);
    }
    //#endregion
    //#region methods
    //#region animations

    /**
     * Determines which animation should play depending on the distance of the playable character.
     */
    animation = () => {
        if (!this.world || !this.world.character) return; // verhindert Error-Meldungen, dass character nicht existiert...
        this.getRealFrame();
        let range = Math.abs(this.world.character.x - this.x);

        if (this.isHurt()){
            this.playAnimation(ImageHub.endboss.hurt);
        } else if (range <= 200){
            this.playAnimation(ImageHub.endboss.attack);
            this.dash();
        } else if (range <= 500 && this.x > this.world.character.x + 100){
            this.playAnimation(ImageHub.endboss.walk);
            this.x -= this.speed;
        } else {
            this.playAnimation(ImageHub.endboss.alert);
        }
    }

    //#region dash-methods

    /**
     * Trigger a dash attack. 
     */
    dash(){
        const now = Date.now();
        if (this.canDash(now)){
            this.startDash();
        }
    }

    /**
     * Checks whether the dash cooldown has passed
     * @param {number} now - current timestamp
     * @returns {boolean} - if dash is allowed
     */
    canDash(now){
        const cooldown = 2000;
        return !this.isDashing &&
                (!this.lastDash || now - this.lastDash >= cooldown) &&
                this.world && this.world.character;
    }

    /**
     * Execution of dash -> forward + jump + back
     */
    startDash(){
        this.isDashing = true;
        this.lastDash = Date.now();

        const dashDistance = 200;
        const jumpHeight = 60;
        const ogY = this.y; 
        const direction = this.x > this.world.character.x ? -1 : 1;

        this.dashForward(direction, dashDistance, jumpHeight);

        setTimeout(() => this.dashBack(direction, dashDistance, ogY), 300);
        setTimeout(() => this.endDash(), 600)
    }

    /**
     * Moves the Endboos forward and lets him slightly jump.
     * @param {number} direction - 1 for right, -1 for left
     * @param {number} dashDistance 
     * @param {number} jumpHeight 
     */
    dashForward(direction, dashDistance, jumpHeight){
        this.x += direction * dashDistance;
        this.y -= jumpHeight;
    }

    /**
     * Moves the Endboss back slightly to create a sort of jump/bounce off of the playable character.
     * @param {number} direction - 1 for right, -1 for left
     * @param {number} dashDistance 
     * @param {number} ogY - the former y-position of the endboss before the dash.
     */
    dashBack(direction, dashDistance, ogY){
        this.x -= direction * dashDistance * 0.6;
        this.y = ogY;
    }

    /**
     * Ends dash and resets flag.
     */
    endDash(){
        this.isDashing = false;
    }

    //#endregion

    /**
     * Reduces health by 1 and triggers dead in case health reaches a value of 0 or below 0.
     */
    gotHit(){
        if (!this.isDead){
            this.health--;
        }
        if (this.health <= 0){
            this.died();
        }
    }

    /**
     * Triggers death animation. 
     */
    died(){
        this.isDead =  true;
        this.playAnimation(ImageHub.endboss.dead);
        this.playedDeathAnimation = true;
    }

    stopEndbossInterval(){
        clearInterval(endbossWalkInterval);
    }
    // #endregion
}
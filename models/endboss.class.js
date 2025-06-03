class Endboss extends MovableObject {
    //#region attributes
    x = 2600;
    y = 110;
    width = 300; 
    height = 340;

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

    now = Date.now();
    cooldown = 2000;
    lastDash;
    dashDistance = 150;
    jumpHeight = 60;
    ogY;
    direction = this.x > this.world.character.x ? -1 : 1;

    //#endregion
    //#endregion
    //#region constructor
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

    dash(){
        if (this.isDashing || now - this.lastDash < cooldown || !this.world || !this.world.character) return;

        this.lastDash = now;
        this.isDashing = true;
        ogY = this.y;

        this.x += direction * dashDistance;
        this.y -= jumpHeight;

        setTimeout(() => {
            this.x -= direction * dashDistance * 0.6;
            this.y = ogY;
        }, 300);

        setTimeout(() => {
            this.isDashing = false;
        }, 600);
    }

    gotHit(){
        if (!this.isDead){
            this.health--;
        }
        if (this.health <= 0){
            this.died();
        }
    }

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
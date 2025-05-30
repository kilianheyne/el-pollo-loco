class Endboss extends MovableObject {
    // #region attributes
    x = 1600;
    width = 300; 
    height = 340;
    y = 110;


    health = 5; 
    isDead = false; // flag for health bar
    playedDeathAnimation = false;

    offset = {
        top: 60,
        right: 40,
        bottom: 20,
        left: 35
    };
    // #endregion
    // #region constructor
    constructor(){
        super();
        this.loadImage(ImageHub.endboss.walk[0]);
        this.loadImages(ImageHub.endboss.walk);
        this.loadImages(ImageHub.endboss.alert);
        this.loadImages(ImageHub.endboss.attack);
        this.loadImages(ImageHub.endboss.hurt);
        this.loadImages(ImageHub.endboss.dead);
        this.endbossWalkInterval = IntervalHub.setStoppableInterval(this.animateWalk, 1000 / 5);
    }
    // #endregion
    // #region methods

    animateWalk = () =>  {
        if (!this.isDead){
            this.playAnimation(ImageHub.endboss.walk)
        }
        this.getRealFrame();
    }

    gotHit(){
        if (!this.isDead){
            this.health--;
            console.log(`Endboss getroffen! Remaining health: ${this.health}`)
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
        IntervalHub.stopInterval(endbossWalkInterval);
    }
    // #endregion
}